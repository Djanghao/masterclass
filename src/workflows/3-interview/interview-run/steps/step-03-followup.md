---
step: 3
name: Follow-Up & Wrap Up
next: null
---

# Step 3: Follow-Up & Wrap Up

**Goal:** Explore variations, discuss optimization, and wrap up the interview with a complete record.

---

## MANDATORY RULES

- 💡 Follow-up should deepen understanding, not just test more.
- 📝 Offer to write the complete interview record.
- 🧠 Check if learning-context.md needs updating.
- 🎯 Conduct in `{interviewer_language}`.

---

## SEQUENCE

### 1. Follow-Up Questions

Choose 1-2 from:

- **Optimization:** "How would you optimize this if the input were 10x larger?"
- **Variant:** "What if the input were sorted? What if there were duplicates?"
- **Scaling:** "How would this work in a distributed system?"
- **Trade-offs:** "What are the trade-offs between your approach and {alternative}?"
- **Real-world:** "Where would you use this pattern in production code?"

Discuss each naturally. This is the most valuable part — it shows depth.

### 2. Expression Training Summary

Give brief feedback on communication throughout the session:
- What they communicated well
- Where they could be more structured or precise
- Specific phrases or patterns to practice

### 3. Write Interview Record

Ask: "Want me to save the complete interview record? [W]"

If yes, write/update `{interview_path}/interview.md`:

```markdown
# Interview: {problem title}

## Date: {current date}

## Problem Summary
{brief problem description}

## Approach
{candidate's approach and reasoning}

## Code
{final code}

## Code Review
{structured review from step 2}

## Follow-Up Discussion
{key insights from follow-up}

## Expression Feedback
{communication strengths and areas to improve}

## Overall Assessment
- Verdict: {Pass/Fail/Borderline Pass}
- Strengths: {what went well}
- Areas to improve: {what to work on}
```

### 4. Learning Context Update

If you observed important patterns:
- Consistent weak areas, strong areas, communication habits
- Prompt: "I noticed {observation}. Should I update your learning profile?"
- If confirmed, update `{progress_path}/learning-context.md`

### 5. Next Steps

Suggest:
- "Try another problem: `/mc-interview-run {another_interview_path}`"
- "Review the lesson: `/mc-lesson-teach {lesson_path}`"
- "Plan your next lesson: `/mc-lesson-plan {next_lesson_path}`"

Return to Interviewer menu.