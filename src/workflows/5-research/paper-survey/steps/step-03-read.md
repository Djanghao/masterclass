---
step: 3
name: Read & Compare Papers
next: step-04-synthesize.md
---

# Step 3: Read & Compare Papers

**Goal:** Read each selected paper's key sections and extract findings for comparison.

---

## MANDATORY RULES

- 📄 For each paper, read abstract + method + results (key sections, not every page).
- 📊 Build a comparison as you go.
- 💬 Discuss each paper briefly with the user.
- 📝 [W] is always available.
- ✅ Speak in `{communication_language}`.

---

## SEQUENCE

### 1. Read Each Paper

For each paper in `{survey_papers}`:

1. **Read key sections:** Use `Read({paper_path}, pages="1-3")` for abstract/intro, then scan for method and results sections.
2. **Extract:**
   - Core contribution / approach
   - Key results / metrics
   - Datasets used
   - Strengths and limitations
3. **Brief discussion:**
   - Summarize to the user: "This paper proposes X, achieves Y..."
   - Ask: "How does this compare to what we've read so far?"
4. **Show menu:**

```
[C] Continue — next paper (or synthesize if all read)
[D] Deep dive — read this paper more thoroughly
[W] Write — save notes for this paper
[Q] Question — ask about this paper
```

5. Handle:
   - **C** → Move to next paper. If all papers read, proceed to step 4.
   - **D** → Read more sections of the current paper in detail. Redisplay menu.
   - **W** → Append paper summary to `{survey_path}` under `## {Paper Title}`. Return to menu.
   - **Q** → Answer, then redisplay menu.

### 2. Comparison Table

After reading all papers, build and present a comparison table:

```
| Aspect | Paper A | Paper B | Paper C |
|--------|---------|---------|---------|
| Approach | ... | ... | ... |
| Key Result | ... | ... | ... |
| Dataset | ... | ... | ... |
| Strength | ... | ... | ... |
| Weakness | ... | ... | ... |
```

Ask: "Ready to synthesize the survey? Or want to revisit any paper?"

- **Synthesize** → Read and follow: `steps/step-04-synthesize.md`
- **Revisit** → Go back to the selected paper
