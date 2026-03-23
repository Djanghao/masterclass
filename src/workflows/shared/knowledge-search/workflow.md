---
name: knowledge-search
description: 'Internal subflow to search per-category knowledge base indexes via vector search with file-based fallback. Not exposed as a user command.'
---

# Knowledge Search Subflow

**Goal:** Search the knowledge base for content matching a given topic or keyword. Each category (e.g. `leetcode-problems`, `papers`, `books`, `notes`) has its own independent vector index.

**Called by:** Any workflow that needs to reference existing knowledge material.

---

## SEQUENCE

### 1. Determine Search Parameters

The calling workflow may provide query and categories. If not fully specified:

1. **Discover available categories:** List subdirectories of `{knowledge_path}/` to see what's available (e.g. `leetcode-problems`, `papers`, `books`, `notes`).
2. **If categories not specified:** Present the available categories to the user and ask which to search.
3. **If query not specified:** Ask the user what topic or keywords to search for.

Once both categories and query are known, proceed.

### 2. Search via Vector Index (Primary)

Search the knowledge base using hybrid search (vector + BM25). Types can be comma-separated to search multiple indexes — results are merged by score:

```bash
.masterclass/venv/bin/python .masterclass/actions/py/search.py --query="{topic keywords}" --top=5 --type={types or "all"}
```

Available flags:
- `--type` / `-t` — Index to search: `papers`, `leetcode`, `books`, or `all` (default: `all`)
- `--top` / `-k` — Number of results (default: 5)
- `--path` / `-p` — Filter results by path substring (e.g. `papers/cot-reasoning/gui-agent`)
- `--difficulty` — Filter by difficulty, leetcode only (e.g. `Medium`)
- `--tags` — Filter by tags, comma-separated, leetcode only (e.g. `dp,greedy`)
- `--verbose` / `-v` — Print timing info to stderr

Examples:
```bash
# Search only papers
.masterclass/venv/bin/python .masterclass/actions/py/search.py -q "attention mechanism" -t papers

# Search papers in a specific subdirectory
.masterclass/venv/bin/python .masterclass/actions/py/search.py -q "UI code generation" -t papers --path="cot-reasoning/ui-generation"

# Search leetcode with filters
.masterclass/venv/bin/python .masterclass/actions/py/search.py -q "binary tree" -t leetcode --difficulty=Medium --tags=dp

# Search everything
.masterclass/venv/bin/python .masterclass/actions/py/search.py -q "two sum" -t all
```

The response includes `searched` (which types were actually searched) and results with path, page, score, and snippet.

If the search returns `success: true`, use the returned results and skip to step 4. For paper results, use `Read(file_path, pages=page)` to read the specific page for full context.

### 3. Fallback: Build Index or IDE Native Search

If search returns no results because the index doesn't exist, run the build subflow first:
- Read and follow `.masterclass/workflows/shared/knowledge-build/workflow.md`
- Then retry the search from step 2.

If kb-search fails for other reasons (venv not configured, or still no results after building), use your own tools and capabilities to search `{knowledge_path}/` directly. Use whatever approach works best for the current IDE environment (glob, grep, directory listing, etc.).

### 4. Return Results

Return a list of matching resources with:
- Full path
- Resource type (category name)
- Name (parsed from filename or directory)
- For leetcode: ID, difficulty, subcategory

The calling workflow handles presentation and user selection.
