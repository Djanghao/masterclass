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
.masterclass/venv/bin/python .masterclass/actions/kb-search.py --query="{topic keywords}" --top=5 --type={types or "all"}
```

Examples:
```bash
# Search only papers
.masterclass/venv/bin/python .masterclass/actions/kb-search.py --query="attention mechanism" --type=papers

# Search leetcode with filters
.masterclass/venv/bin/python .masterclass/actions/kb-search.py --query="binary tree" --type=leetcode --difficulty=Medium

# Search everything
.masterclass/venv/bin/python .masterclass/actions/kb-search.py --query="two sum" --type=all
```

The response includes `searched` (which types were actually searched) and results with path, page, score, and snippet.

If the search returns `success: true`, use the returned results and skip to step 4. For paper results, use `Read(file_path, pages=page)` to read the specific page for full context.

### 3. Fallback: IDE Native Search

If kb-search fails (venv not configured or no results), use your own tools and capabilities to search `{knowledge_path}/` directly. Use whatever approach works best for the current IDE environment (glob, grep, directory listing, etc.).

### 4. Return Results

Return a list of matching resources with:
- Full path
- Resource type (category name)
- Name (parsed from filename or directory)
- For leetcode: ID, difficulty, subcategory

The calling workflow handles presentation and user selection.
