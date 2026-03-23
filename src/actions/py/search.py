"""
Semantic search over knowledge base using FAISS.

Usage:
  python src/actions/py/search.py --query="LoRA参数" --type=papers --top=5
  python src/actions/py/search.py --query="sliding window" --type=leetcode --difficulty=Medium
  python src/actions/py/search.py --query="二叉树" --type=all --top=10

Output: JSON to stdout
"""
import sys
import json
import time
import pickle
import argparse
from pathlib import Path

from device import select_device, load_embed_model

PROJECT_ROOT = Path(__file__).resolve().parent.parent.parent.parent
INDEX_BASE_DIR = PROJECT_ROOT / "data" / ".index"

ALL_TYPES = ["papers", "leetcode", "books"]


def search_type(
    type_name: str,
    query: str,
    top_k: int,
    verbose: bool = False,
    **filters,
) -> list[dict]:
    """Search a single type's index. Returns list of result dicts."""
    from llama_index.core import StorageContext, load_index_from_storage
    from llama_index.vector_stores.faiss import FaissVectorStore

    index_dir = INDEX_BASE_DIR / type_name
    if not (index_dir / "default__vector_store.json").exists():
        if verbose:
            print(f"  No index for {type_name}, skipping", file=sys.stderr)
        return []

    # Load FAISS index + docstore
    t0 = time.time()
    vector_store = FaissVectorStore.from_persist_dir(str(index_dir))
    storage_context = StorageContext.from_defaults(vector_store=vector_store, persist_dir=str(index_dir))
    index = load_index_from_storage(storage_context)
    if verbose:
        print(f"  {type_name} index loaded in {time.time() - t0:.1f}s", file=sys.stderr)

    # Vector search
    vector_retriever = index.as_retriever(similarity_top_k=top_k * 3)
    t0 = time.time()
    vec_results = vector_retriever.retrieve(query)
    if verbose:
        print(f"  {type_name} vector: {len(vec_results)} results in {time.time() - t0:.0f}ms", file=sys.stderr)

    # BM25 search
    nodes_pkl = index_dir / "bm25_index.pkl"
    bm25_results = []
    if nodes_pkl.exists():
        try:
            from llama_index.retrievers.bm25 import BM25Retriever
            with open(nodes_pkl, "rb") as f:
                nodes = pickle.load(f)
            bm25_retriever = BM25Retriever.from_defaults(nodes=nodes, similarity_top_k=top_k * 3)
            t0 = time.time()
            bm25_results = bm25_retriever.retrieve(query)
            if verbose:
                print(f"  {type_name} bm25: {len(bm25_results)} results in {time.time() - t0:.0f}ms", file=sys.stderr)
        except Exception as e:
            if verbose:
                print(f"  {type_name} bm25 skipped: {e}", file=sys.stderr)

    # Hybrid merge
    seen = {}
    for r in vec_results:
        nid = r.node.node_id
        seen[nid] = {"score": float(r.score), "method": "vector", "node": r}

    for r in bm25_results:
        nid = r.node.node_id
        if nid not in seen:
            seen[nid] = {"score": float(r.score) * 0.5, "method": "bm25", "node": r}
        else:
            seen[nid]["score"] += float(r.score) * 0.3
            seen[nid]["method"] = "hybrid"

    merged = sorted(seen.values(), key=lambda x: x["score"], reverse=True)

    # Format results
    results = []
    for item in merged:
        r = item["node"]
        meta = r.node.metadata
        snippet = r.node.text[:300].replace("\n", " ").strip()

        result = {
            "type": type_name,
            "score": round(item["score"], 4),
            "method": item["method"],
            "snippet": snippet,
        }

        if type_name in ("papers", "books"):
            file_path = meta.get("file_path", "")
            result["path"] = file_path
            result["filename"] = Path(file_path).name if file_path else ""
            result["page"] = meta.get("source", "")
        elif type_name == "leetcode":
            result["path"] = meta.get("file_path", "")
            result["name"] = meta.get("name", "")
            result["difficulty"] = meta.get("difficulty", "")
            result["tags"] = meta.get("tags", "").split(",") if meta.get("tags") else []
            result["companies"] = meta.get("companies", "").split(",") if meta.get("companies") else []

        results.append(result)

    # Apply metadata filters
    if filters:
        # Path filter (match any part of the file path)
        path_filter = filters.get("path")
        if path_filter:
            # Normalize: strip trailing slash, support both relative and absolute
            pf = path_filter.rstrip("/")
            results = [r for r in results if pf in r.get("path", "")]

        # Leetcode-specific filters
        if type_name == "leetcode":
            difficulty = filters.get("difficulty")
            tags = filters.get("tags")

            if difficulty:
                results = [r for r in results if r.get("difficulty", "").lower() == difficulty.lower()]
            if tags:
                filter_tags = set(t.strip().lower() for t in tags.split(","))
                results = [r for r in results if filter_tags & set(t.lower() for t in r.get("tags", []))]

    return results[:top_k]


def main():
    parser = argparse.ArgumentParser(description="Search knowledge base")
    parser.add_argument("--query", "-q", required=True, help="Search query")
    parser.add_argument("--type", "-t", default="all", help="Type to search: papers, leetcode, or all")
    parser.add_argument("--top", "-k", type=int, default=5, help="Number of results per type")
    parser.add_argument("--path", "-p", help="Filter by path (e.g. papers/gui-agent, books/system-design)")
    parser.add_argument("--difficulty", help="Filter by difficulty (leetcode)")
    parser.add_argument("--tags", help="Filter by tags, comma-separated (leetcode)")
    parser.add_argument("--verbose", "-v", action="store_true")
    args = parser.parse_args()

    # Select device and load embedding model once
    device = select_device()
    if args.verbose:
        print(f"Device: {device}", file=sys.stderr)

    from llama_index.core import Settings

    t0 = time.time()
    Settings.embed_model = load_embed_model(device)
    if args.verbose:
        print(f"Model loaded on {device} in {time.time() - t0:.1f}s", file=sys.stderr)

    # Search requested types
    types = ALL_TYPES if args.type == "all" else [t.strip() for t in args.type.split(",")]
    all_results = []
    searched = []

    for type_name in types:
        if type_name not in ALL_TYPES:
            continue
        index_dir = INDEX_BASE_DIR / type_name
        if not index_dir.exists():
            continue
        searched.append(type_name)
        results = search_type(
            type_name, args.query, args.top, args.verbose,
            path=args.path, difficulty=args.difficulty, tags=args.tags,
        )
        all_results.extend(results)

    # Sort all results by score
    all_results.sort(key=lambda x: x["score"], reverse=True)

    output = {
        "success": True,
        "searched": searched,
        "results": all_results[:args.top],
    }
    print(json.dumps(output, indent=2, ensure_ascii=False))


if __name__ == "__main__":
    main()
