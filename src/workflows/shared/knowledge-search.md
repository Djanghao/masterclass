---
name: knowledge-search
description: 'Internal subflow to search the entire knowledge base (leetcode, books, notes) via vector index with file-based fallback. Not exposed as a user command.'
---

# Knowledge Search Subflow

**Goal:** Search the full knowledge base for content matching a given topic or keyword.

**Called by:** Any workflow that needs to reference existing knowledge material.

---

## SEQUENCE

### 1. Receive Search Context

The calling workflow provides:
- Topic keywords
- Content type preference (leetcode-problems, books, notes, or all)
- Difficulty preference (optional, for leetcode)

### 2. Search via Vector Index (Primary)

Try LlamaIndex first:

```bash
node .masterclass/actions/index-search.js --query="{topic keywords}" --top=10 --type={content type or "all"}
```

If `index-search.js` returns `success: true`, use the returned results and skip to step 4.

### 3. Fallback: IDE Native Search

If index-search fails (not configured or no results), use your own tools and capabilities to search `{knowledge_path}/` directly. Use whatever approach works best for the current IDE environment (glob, grep, directory listing, etc.).

### 4. Return Results

Return a list of matching resources with:
- Full path
- Resource type (leetcode-problem / book / note)
- Name (parsed from filename or directory)
- For leetcode: ID, difficulty, category

The calling workflow handles presentation and user selection.
