---
step: 2
name: Section-by-Section Reading
next: step-03-summary.md
---

# Step 2: Section-by-Section Reading

**Goal:** Read each section of the paper interactively, explaining key concepts, equations, and insights.

---

## MANDATORY RULES

- 📄 Read one section at a time using `Read(file_path, pages="N-M")`.
- 💬 Explain in digestible chunks — never dump an entire section's content at once.
- 🧮 Explain equations, notation, and technical terms when they appear.
- ❓ After each section, check understanding before moving on.
- 📝 [W] is always available — remind the user occasionally.
- ✅ Speak in `{communication_language}`.

---

## SEQUENCE

### 1. Read Each Section

For each section identified in Step 1's structure:

1. **Read** the relevant pages using `Read({paper_path}, pages="N-M")`
2. **Explain** the section's key points:
   - What is this section doing?
   - Key claims or findings
   - Important equations or algorithms (explain each symbol)
   - Figures and tables (describe and interpret)
   - How it connects to previous sections
3. **Cross-Reference with Source Code** — if the paper has an open-source repo (identified in Step 1):
   - When reading Method / Implementation sections, proactively fetch and read the corresponding source code using `gh api` or `WebFetch`
   - Compare paper descriptions with actual implementation — look for:
     - Features described in paper but commented out or absent in code
     - Engineering details not mentioned in the paper (hyperparameters, heuristics, fallback logic)
     - Differences between the paper's formulation and the code's implementation
     - Different code paths for different models/configurations
   - Present discrepancies honestly: "The paper says X, but the code actually does Y"
4. **Critical Analysis** — offer your assessment:
   - Strengths of the approach/argument
   - Potential weaknesses or limitations
   - How it compares to alternative approaches
   - Paper vs. code discrepancies (if source code was checked)
4. **Check Understanding:**
   - Ask a question to gauge comprehension
   - Or ask: "What do you think about this approach?"
5. **Show menu:**

```
[C] <instruction> — continue (e.g. "next section", "re-read that", "skip to experiments")
[D] Deep dive — equations, proofs, implementation details for current section
[W] Write — save notes for this section
[E] Elicitation — guided exploration
[Q] Question — ask anything about this section
```

6. Handle selection:
   - **C `<instruction>`** → Follow the instruction. If "next section", move to the next section in the paper. If all sections done, proceed to step 3.
   - **D** → Go deeper into the current section: walk through equations step-by-step, discuss implementation details, compare with cited works. Redisplay menu.
   - **W** → Append section notes to `{notes_path}` under `## {Section Name}`. Include key findings, equations explained, critical analysis. Return to menu.
   - **E** → Load and execute `.masterclass/workflows/shared/elicitation/workflow.md` then return here
   - **Q** → Answer the question by reading relevant parts of the paper. Redisplay menu.

### 2. All Sections Covered

When all sections have been read (or the user is satisfied):

Briefly acknowledge completion. Offer [W] if notes haven't been written recently.

Then transition: Read and follow `steps/step-03-summary.md`
