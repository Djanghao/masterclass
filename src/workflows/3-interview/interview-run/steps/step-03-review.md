---
step: 3
name: Structured Code Review
next: step-04-followup.md
---

# Step 3: Structured Code Review

**Goal:** Perform a thorough, structured code review with severity ratings and a pass/fail verdict.

---

## MANDATORY RULES

- 🔍 Find 3-5 issues. There are ALWAYS things to discuss.
- 📊 Use severity levels: HIGH / MEDIUM / LOW / Bonus
- ⚖️ Verdict: Pass / Fail / Borderline Pass
- 🎯 Hard constraint: Zero HIGH + correct code = Pass
- 🎯 Conduct in `{interviewer_language}`.

---

## SEQUENCE

### 1. Analyze the Code

Review the candidate's code across these dimensions:

| Dimension | What to check |
|-----------|--------------|
| **Correctness** | Does it handle all cases? Logic errors? |
| **Complexity** | Time and space — is it optimal? |
| **Code Quality** | Naming, structure, readability |
| **Edge Cases** | Boundary conditions, empty input, overflow |
| **Communication** | How well did they explain during coding? |
| **Optimization** | Can it be improved? Alternative approaches? |

### 2. Present Findings

Present as a structured review:

```
## Code Review

### Issues Found

1. **[HIGH]** {description}
   - Impact: {why this matters}
   - Fix: {what to change}

2. **[MEDIUM]** {description}
   - Impact: {why this matters}
   - Suggestion: {improvement}

3. **[LOW]** {description}
   - Note: {minor improvement}

4. **[Bonus]** {positive observation}
   - Good: {what they did well}

### Complexity Analysis
- Time: O(...)
- Space: O(...)
- Optimal: {yes/no, and why}

### Communication Score
{Brief assessment of how well they communicated during the session}

### Verdict: {Pass / Fail / Borderline Pass}
{Brief justification}
```

### 3. Discussion

After presenting the review:
- Walk through each issue — explain why it matters
- Ask: "Do you see how to fix the HIGH/MEDIUM issues?"
- Let the candidate explain fixes (don't just tell them)
- **Expression training:** Suggest how to respond to code review feedback in a real interview

### 4. Offer to Fix

Ask: "Want to fix the issues and try again, or move to follow-up questions?"

- **Fix** → Let them fix code, then re-review (lighter pass)
- **Follow-up** → Read and follow: `steps/step-04-followup.md`
- **Write** → "Want me to save this review to interview.md? [W]"
  - If yes, write the full review to `{interview_path}/interview.md`
