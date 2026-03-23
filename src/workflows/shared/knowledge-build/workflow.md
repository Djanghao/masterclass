---
name: knowledge-build
description: 'Internal subflow to build or rebuild knowledge base vector indexes. Not exposed as a user command.'
---

# Knowledge Build Subflow

**Goal:** Build or incrementally update the vector indexes used by knowledge-search. Each type (`papers`, `leetcode`, `books`) has an independent FAISS index with BM25 support.

**Called by:** Any workflow that detects missing or stale indexes, or when the user adds new files to the knowledge base.

---

## SEQUENCE

### 1. Check Prerequisites

Verify the Python venv exists:

```bash
.masterclass/venv/bin/python --version
```

If it doesn't exist, tell the user to run the installer first (`npm run install:mc`).

### 2. Build or Update Indexes

Run the build script. It automatically detects new/changed/removed files and does incremental updates:

```bash
.masterclass/venv/bin/python .masterclass/actions/py/build.py --type={type}
```

Available flags:
- `--type` — What to build: `papers`, `leetcode`, `books`, or `all` (default: `all`)
- `--rebuild` — Force a full rebuild (clears existing index first)
- `--model` — Set embedding model: `bge-m3` (multilingual, best quality) or `bge-small-en` (English only, fast). Saves choice for future builds.

Examples:
```bash
# Incremental update for papers only (fastest — only processes new/changed files)
.masterclass/venv/bin/python .masterclass/actions/py/build.py --type=papers

# Full rebuild of everything
.masterclass/venv/bin/python .masterclass/actions/py/build.py --type=all --rebuild

# Build with a specific embedding model
.masterclass/venv/bin/python .masterclass/actions/py/build.py --type=papers --model=bge-m3
```

### 3. Verify

The script prints a summary on completion:
- Number of files found, added, changed, removed
- Number of documents and chunks created
- Index size and save location (`data/.index/{type}/`)

If it reports errors, check:
- Disk space (`df -h`)
- GPU memory if using CUDA (`nvidia-smi`)
- File permissions on `data/knowledge/` and `data/.index/`
