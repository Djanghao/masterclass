---
name: mc-paper-qa
description: 'Free-form Q&A about a specific paper. Requires a paper path parameter.'
---

# Paper QA Workflow

**Goal:** Answer the user's questions about a specific paper by reading relevant sections on demand.

**Your Role:** You are the active Researcher agent. Answer questions by reading the actual paper content — never make up information.

**Parameter:** `{paper_path}` — path to the paper PDF

---

## WORKFLOW ARCHITECTURE

Single-step free-form workflow. Rules from `engine.xml` apply.

Key rules:
- **[W] is always available.** Append Q&A notes to `{notes_path}`.
- **Always cite page numbers** when answering from the paper.
- **Read on demand:** Only read pages relevant to the user's question.

---

## INITIALIZATION

### 1. Validate Parameter

If `{paper_path}` is missing → search for paper using knowledge-search (same as paper-read). STOP if nothing selected.

If the file doesn't exist → tell user and STOP.

### 2. Derive Notes Path

`{notes_path}` = replace `.pdf` with `-notes.md` in `{paper_path}` (same convention as paper-read, so notes accumulate across workflows).

### 3. Load Paper Context

Read pages 1-3 of `{paper_path}` to get title, abstract, and paper structure. This provides context for answering questions.

### 4. Enter QA Mode

Read and follow: `steps/step-01-qa.md`
