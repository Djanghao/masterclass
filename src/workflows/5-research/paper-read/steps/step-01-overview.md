---
step: 1
name: Paper Overview
next: step-02-sections.md
---

# Step 1: Paper Overview

**Goal:** Get the big picture of the paper before diving into details.

---

## MANDATORY RULES

- 📄 Read the paper using `Read(file_path, pages="1-3")` to get title, abstract, intro.
- 🔍 Also read the last 2 pages for conclusion/references count.
- 🛑 Don't try to explain everything — this is the overview pass.
- ✅ Speak in `{communication_language}`.

---

## SEQUENCE

### 1. First Pass — Big Picture

Read pages 1-3 of `{paper_path}`. Present:
- **Title and authors**
- **Publication venue and year** (if visible)
- **Abstract summary** — in plain language, what is this paper about?
- **Key problem:** What problem does this paper try to solve?
- **Proposed approach:** What is the paper's main contribution (in one sentence)?

### 2. Paper Structure

Scan through the paper (read a few more pages if needed) to identify the section structure. Present:

```
Paper Structure:
1. Introduction (pp. 1-2)
2. Related Work (pp. 3-4)
3. Method (pp. 5-8)
4. Experiments (pp. 9-11)
5. Discussion (pp. 12-13)
6. Conclusion (p. 14)
```

(Adapt to the actual paper structure.)

### 3. Figures and Tables Preview

If visible in the first few pages, highlight key figures or tables:
- "Figure 1 shows the overall architecture..."
- "Table 1 compares with prior work..."

### 4. Check for Open-Source Code

Scan the paper (abstract, introduction, footnotes) for code repository links (GitHub, HuggingFace, etc.). If found:
- Present the repo URL to the user
- Note: "This paper has open-source code. We can cross-reference the actual implementation when reading the method sections — papers often simplify or omit details that the code reveals."

Store the repo URL for use in Step 2.

### 5. Set Expectations

Ask the learner:
- "What's your background on this topic? Have you read related papers?"
- "Any specific sections you're most interested in?"
- "Should we go section by section, or focus on specific parts?"

### 6. Menu

```
[C] Continue — start section-by-section reading (next: Introduction)
[D] Deep dive — more context on the research area, related work overview
[W] Write — save the overview notes
[E] Elicitation — guided exploration of the paper's context
[Q] Question — ask anything about the paper so far
```

Handle:
- **C** → Read and follow: `steps/step-02-sections.md`
- **D** → Explain the research area, key prior work, why this problem matters. Redisplay menu.
- **W** → Write overview to `{notes_path}`. Format as: `# {Paper Title}\n\n## Overview\n{content}`. Return to menu.
- **E** → Load and execute `.masterclass/workflows/shared/elicitation/workflow.md` then return here
- **Q** → Answer the question, then redisplay menu.
