---
step: 1
name: Paper Q&A
next: null
---

# Step 1: Paper Q&A

**Goal:** Free-form question and answer session about the paper.

---

## MANDATORY RULES

- 📄 Always read the relevant pages before answering — use `Read({paper_path}, pages="N-M")`.
- 📌 Cite page numbers: "On page 5, the authors state..."
- 🛑 If the paper doesn't contain the answer, say so honestly.
- 💬 Keep answers focused but thorough.
- ✅ Speak in `{communication_language}`.

---

## SEQUENCE

### 1. Greeting

Present the paper title and structure (from initialization). Then:

"Ask me anything about this paper! I'll read the relevant sections to answer."

### 2. Q&A Loop

For each user question:

1. **Identify relevant sections** — based on the question and the paper structure, determine which pages to read.
2. **Read pages** — `Read({paper_path}, pages="N-M")` for the relevant pages.
3. **Check source code if relevant** — if the paper has an open-source repo and the question is about implementation details, methods, or "how does X actually work":
   - Use `gh api` or `WebFetch` to read the corresponding source files
   - Compare the paper's description with the actual code
   - Report differences: "The paper describes X, but the code implements Y"
4. **Answer** — provide a clear, well-structured answer with page citations. When source code was consulted, include code references alongside paper citations.
4. **Show menu:**

```
[C] <question> — ask another question
[D] Deep dive — expand on the last answer with more detail
[W] Write — save this Q&A to notes
[E] Elicitation — guided exploration of the topic
[Q] Done — exit Q&A mode
```

5. Handle:
   - **C `<question>`** → Answer the new question (repeat loop).
   - **D** → Read more pages for context, provide deeper explanation. Redisplay menu.
   - **W** → Append the current Q&A pair to `{notes_path}` under `## Q&A Session ({date})`. Return to menu.
   - **E** → Load and execute `.masterclass/workflows/shared/elicitation/workflow.md` then return here.
   - **Q** → Offer to write any unsaved Q&A, then return to Researcher menu.
