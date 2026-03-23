"""
Build knowledge base index with incremental updates.

Usage:
  python tools/kb/build.py --type=papers
  python tools/kb/build.py --type=leetcode
  python tools/kb/build.py --type=all
  python tools/kb/build.py --type=papers --rebuild
"""
import re
import sys
import time
import json
import hashlib
import shutil
import pickle
import argparse
from pathlib import Path

from device import select_device

PROJECT_ROOT = Path(__file__).resolve().parent.parent.parent
KNOWLEDGE_DIR = PROJECT_ROOT / "data" / "knowledge"
INDEX_BASE_DIR = PROJECT_ROOT / "data" / ".index"

ALL_TYPES = ["papers", "leetcode"]


# ─── File hash utilities ───

def compute_file_hash(filepath: Path) -> str:
    """MD5 hash of file bytes. Fast, no parsing needed."""
    return hashlib.md5(filepath.read_bytes()).hexdigest()


def load_file_hashes(index_dir: Path) -> dict:
    """Load stored {filepath: {hash, doc_ids}} from index dir."""
    hash_file = index_dir / "file_hashes.json"
    if hash_file.exists():
        return json.loads(hash_file.read_text())
    return {}


def save_file_hashes(index_dir: Path, hashes: dict):
    """Save file hashes to index dir."""
    (index_dir / "file_hashes.json").write_text(json.dumps(hashes, indent=2, ensure_ascii=False))


# ─── Document loaders ───

def load_papers(filepaths: list[Path]) -> list:
    """Load PDF pages with PyMuPDFReader. Returns (docs, file_doc_ids)."""
    from llama_index.readers.file import PyMuPDFReader

    reader = PyMuPDFReader()
    all_docs = []
    file_doc_ids = {}

    for pdf in filepaths:
        docs = reader.load_data(str(pdf))
        doc_ids = []
        for d in docs:
            doc_id = f"{pdf}#page{d.metadata.get('source', '?')}"
            d.doc_id = doc_id
            doc_ids.append(doc_id)
        all_docs.extend(docs)
        file_doc_ids[str(pdf)] = doc_ids

    return all_docs, file_doc_ids


def load_leetcode(filepaths: list[Path]) -> list:
    """Load LeetCode problem.md files with metadata. Returns (docs, file_doc_ids)."""
    from llama_index.core.schema import Document

    all_docs = []
    file_doc_ids = {}

    for md_path in filepaths:
        content = md_path.read_text(encoding="utf-8", errors="replace")
        if not content.strip():
            continue

        # Extract metadata from directory name: 0095_Medium_unique-binary-search-trees-ii
        problem_dir = md_path.parent.parent
        category_dir = problem_dir.parent
        dir_name = problem_dir.name
        match = re.match(r"^(\d+)_(\w+)_(.+)$", dir_name)

        metadata = {
            "file_path": str(md_path),
            "type": "leetcode",
            "category": category_dir.name,
        }
        if match:
            metadata["id"] = match.group(1)
            metadata["difficulty"] = match.group(2)
            metadata["slug"] = match.group(3)
            metadata["name"] = match.group(3).replace("-", " ")

        # Extract tags from markdown content
        tags = re.findall(r'\[`([^`]+)`\]\(https://leetcode\.com/tag/', content)
        if tags:
            metadata["tags"] = ",".join(tags)

        # Extract companies
        companies = re.findall(r'\*Companies\*.*?`([^`]+)`', content)
        if companies:
            metadata["companies"] = ",".join(companies)

        doc_id = str(problem_dir)
        doc = Document(text=content, metadata=metadata)
        doc.doc_id = doc_id

        all_docs.append(doc)
        file_doc_ids[str(md_path)] = [doc_id]

    return all_docs, file_doc_ids


# ─── Incremental diff ───

def diff_files(old_hashes: dict, new_hashes: dict) -> dict:
    """Compare old and new file hashes. Returns categorized file lists."""
    old_paths = set(old_hashes.keys())
    new_paths = set(new_hashes.keys())

    added = new_paths - old_paths
    removed = old_paths - new_paths
    common = new_paths & old_paths
    changed = {f for f in common if new_hashes[f] != old_hashes[f].get("hash", "")}
    unchanged = common - changed

    return {
        "added": sorted(added),
        "removed": sorted(removed),
        "changed": sorted(changed),
        "unchanged": sorted(unchanged),
    }


# ─── Build logic ───

def scan_files(type_name: str) -> list[Path]:
    """Discover files to index for a given type."""
    if type_name == "papers":
        return sorted((KNOWLEDGE_DIR / "papers").rglob("*.pdf"))
    elif type_name == "leetcode":
        return sorted((KNOWLEDGE_DIR / "leetcode-problems").rglob("*/description/problem.md"))
    return []


def build_type(type_name: str, rebuild: bool = False):
    """Build or incrementally update index for one type."""
    from llama_index.core import VectorStoreIndex, StorageContext, load_index_from_storage
    from llama_index.core.node_parser import SentenceSplitter

    index_dir = INDEX_BASE_DIR / type_name
    print(f"\n{'=' * 60}")
    print(f"Building: {type_name}")
    print(f"{'=' * 60}")

    # ── Scan files and compute hashes ──
    files = scan_files(type_name)
    if not files:
        print(f"  No files found for {type_name}")
        return

    print(f"  Found {len(files)} files")

    t0 = time.time()
    new_hashes = {str(f): compute_file_hash(f) for f in files}
    print(f"  Hashed in {time.time() - t0:.2f}s")

    # ── Decide: full build or incremental ──
    has_existing_index = (index_dir / "index_store.json").exists() and not rebuild

    if not has_existing_index:
        # Full build
        if index_dir.exists() and rebuild:
            shutil.rmtree(index_dir)
        index_dir.mkdir(parents=True, exist_ok=True)

        print(f"\n  Full build: loading {len(files)} files...")
        t0 = time.time()
        if type_name == "papers":
            docs, file_doc_ids = load_papers(files)
        else:
            docs, file_doc_ids = load_leetcode(files)
        print(f"  Loaded {len(docs)} documents in {time.time() - t0:.1f}s")

        # Chunk (papers only)
        if type_name == "papers":
            splitter = SentenceSplitter(chunk_size=512, chunk_overlap=50)
            t0 = time.time()
            nodes = splitter.get_nodes_from_documents(docs)
            print(f"  Chunked → {len(nodes)} chunks in {time.time() - t0:.1f}s")
        else:
            nodes = None

        # Build index
        print(f"  Building vector index...")
        t0 = time.time()
        if nodes is not None:
            index = VectorStoreIndex(nodes, show_progress=True)
        else:
            index = VectorStoreIndex.from_documents(docs, show_progress=True)
        print(f"  Index built in {time.time() - t0:.1f}s")

        # Persist
        index.storage_context.persist(persist_dir=str(index_dir))

        # Save nodes for BM25
        if nodes is None:
            # Extract nodes from index for BM25
            docstore = index.storage_context.docstore
            nodes = list(docstore.docs.values())
        with open(index_dir / "nodes.pkl", "wb") as f:
            pickle.dump(nodes, f)

        # Save hashes with doc_ids
        hash_data = {}
        for filepath, h in new_hashes.items():
            hash_data[filepath] = {
                "hash": h,
                "doc_ids": file_doc_ids.get(filepath, []),
            }
        save_file_hashes(index_dir, hash_data)

        idx_size = sum(f.stat().st_size for f in index_dir.rglob("*") if f.is_file())
        print(f"\n  Saved to {index_dir} ({idx_size / 1024 / 1024:.1f} MB)")
        return

    # ── Incremental update ──
    old_hashes = load_file_hashes(index_dir)
    diff = diff_files(old_hashes, new_hashes)

    n_added = len(diff["added"])
    n_changed = len(diff["changed"])
    n_removed = len(diff["removed"])
    n_unchanged = len(diff["unchanged"])
    print(f"\n  Incremental: +{n_added} added, ~{n_changed} changed, -{n_removed} removed, ={n_unchanged} unchanged")

    if n_added == 0 and n_changed == 0 and n_removed == 0:
        print("  Nothing to do.")
        return

    # Load existing index
    storage_context = StorageContext.from_defaults(persist_dir=str(index_dir))
    index = load_index_from_storage(storage_context)

    # Delete removed files
    for filepath in diff["removed"]:
        doc_ids = old_hashes.get(filepath, {}).get("doc_ids", [])
        for doc_id in doc_ids:
            try:
                index.delete_ref_doc(doc_id, delete_from_docstore=True)
            except Exception:
                pass
        del old_hashes[filepath]
        print(f"    Deleted: {Path(filepath).name}")

    # Delete changed files (will re-insert below)
    for filepath in diff["changed"]:
        doc_ids = old_hashes.get(filepath, {}).get("doc_ids", [])
        for doc_id in doc_ids:
            try:
                index.delete_ref_doc(doc_id, delete_from_docstore=True)
            except Exception:
                pass
        print(f"    Updated: {Path(filepath).name}")

    # Load and insert added + changed files
    to_load = [Path(f) for f in diff["added"] + diff["changed"]]
    if to_load:
        print(f"\n  Loading {len(to_load)} files...")
        t0 = time.time()
        if type_name == "papers":
            new_docs, new_file_doc_ids = load_papers(to_load)
        else:
            new_docs, new_file_doc_ids = load_leetcode(to_load)
        print(f"  Loaded {len(new_docs)} documents in {time.time() - t0:.1f}s")

        # Chunk if papers
        if type_name == "papers":
            splitter = SentenceSplitter(chunk_size=512, chunk_overlap=50)
            new_nodes = splitter.get_nodes_from_documents(new_docs)
            for node in new_nodes:
                index.insert_nodes([node])
        else:
            for doc in new_docs:
                index.insert(doc)

        # Update hash data
        for filepath in diff["added"] + diff["changed"]:
            old_hashes[filepath] = {
                "hash": new_hashes[filepath],
                "doc_ids": new_file_doc_ids.get(filepath, []),
            }

    # Persist
    index.storage_context.persist(persist_dir=str(index_dir))
    save_file_hashes(index_dir, old_hashes)

    # Rebuild nodes.pkl for BM25
    docstore = index.storage_context.docstore
    all_nodes = list(docstore.docs.values())
    with open(index_dir / "nodes.pkl", "wb") as f:
        pickle.dump(all_nodes, f)

    print(f"  Incremental update complete.")


def main():
    parser = argparse.ArgumentParser(description="Build knowledge base index")
    parser.add_argument("--type", default="all", help="Type to build: papers, leetcode, or all")
    parser.add_argument("--rebuild", action="store_true", help="Force full rebuild")
    args = parser.parse_args()

    # Select device and load embedding model once
    device = select_device()
    print(f"Device: {device}")

    from llama_index.core import Settings
    from llama_index.embeddings.huggingface import HuggingFaceEmbedding

    print("Loading bge-m3 embedding model...")
    t0 = time.time()
    Settings.embed_model = HuggingFaceEmbedding(
        model_name="BAAI/bge-m3",
        device=device,
        trust_remote_code=True,
    )
    print(f"  Loaded on {device} in {time.time() - t0:.1f}s")

    types = ALL_TYPES if args.type == "all" else [t.strip() for t in args.type.split(",")]
    for type_name in types:
        if type_name not in ALL_TYPES:
            print(f"Unknown type: {type_name}. Available: {ALL_TYPES}")
            sys.exit(1)
        build_type(type_name, args.rebuild)


if __name__ == "__main__":
    main()
