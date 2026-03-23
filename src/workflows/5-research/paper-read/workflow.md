---
name: mc-paper-read
description: 'Read a paper section by section with interactive explanation. Requires a paper path parameter.'
---

# Paper Read Workflow

**Goal:** Guide the learner through a deep, section-by-section reading of an academic paper with interactive explanation and discussion.

**Your Role:** You are the active Researcher agent. Help the learner understand the paper thoroughly — explain notation, contextualize findings, and encourage critical thinking.

**Parameter:** `{paper_path}` — path to the paper PDF (e.g., `data/knowledge/papers/cot-reasoning/some-paper.pdf`)

---

## WORKFLOW ARCHITECTURE

Step-file architecture. Rules from `engine.xml` apply.

Key rules:
- **[W] is always available.** Distill reading notes into `{notes_path}` (derived from paper path). Append, don't replace. Return to current step after writing.
- **Read PDF pages using:** `Read(file_path, pages="N-M")` where N-M is the page range. Read at most 5 pages at a time to avoid overload.
- **Early exit:** If the user asks to stop, offer to jump to `steps/step-03-summary.md`.

---

## INITIALIZATION

### 1. Validate Parameter

If `{paper_path}` is missing → tell user: "Please provide a path to a paper PDF. Example: `/mc-paper-read data/knowledge/papers/cot-reasoning/some-paper.pdf`" STOP.

If the file doesn't exist → run knowledge-search to help find it:
- Read and follow `.masterclass/workflows/shared/knowledge-search/workflow.md` with type=papers
- Let user pick a paper from results
- Set `{paper_path}` to the selected paper

### 2. Derive Notes Path

`{notes_path}` = replace `.pdf` extension with `-notes.md` in `{paper_path}`.

Example: `data/knowledge/papers/cot-reasoning/attention-paper.pdf` → `data/knowledge/papers/cot-reasoning/attention-paper-notes.md`

### 3. Resume Detection

Does `{notes_path}` have content?

- **No** → Fresh start. Read and follow: `steps/step-01-overview.md`
- **Yes** → Show existing notes, summarize which sections are covered, ask user where to resume, and route accordingly.
