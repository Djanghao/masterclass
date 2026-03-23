---
step: 2
name: Search & Select Papers
next: step-03-read.md
---

# Step 2: Search & Select Papers

**Goal:** Find relevant papers and let the user select which ones to include in the survey.

---

## MANDATORY RULES

- 🔍 Use knowledge-search to find papers.
- 📋 Present results clearly with title, year, relevance.
- ✅ Speak in `{communication_language}`.

---

## SEQUENCE

### 1. Search Knowledge Base

Run the knowledge-search subflow:
- Read and follow `.masterclass/workflows/shared/knowledge-search/workflow.md`
- Search with: query = the survey topic, type = papers, top = 10

### 2. Present Results

For each result, read the first 1-2 pages to extract:
- Paper title
- Authors and year
- Brief description (from abstract)
- Relevance to the survey topic

Present as a numbered list:
```
Found papers:
1. [Relevant] "Paper Title A" (2024) — About X
2. [Relevant] "Paper Title B" (2023) — About Y
3. [Maybe] "Paper Title C" (2022) — Tangentially related
...
```

### 3. User Selection

Ask: "Which papers should we include? (e.g., 1, 2, 4)"

Also ask: "Any papers outside the knowledge base you want to add? Provide the path."

Store the selected paper paths as `{survey_papers}` list.

### 4. Menu

```
[C] Continue — start reading selected papers
[D] Deep dive — search with different keywords, broaden/narrow results
[W] Write — save paper list to survey.md
```

Handle:
- **C** → Read and follow: `steps/step-03-read.md`
- **D** → Run another search with refined keywords. Redisplay menu.
- **W** → Write initial survey skeleton to `{survey_path}` with paper list. Return to menu.
