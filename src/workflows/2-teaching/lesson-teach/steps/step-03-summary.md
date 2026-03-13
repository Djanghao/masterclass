---
step: 3
name: Summary & Wrap Up
next: null
---

# Step 3: Summary & Wrap Up

**Goal:** Summarize key takeaways and suggest next steps.

---

## MANDATORY RULES

- 📋 Summarize the key points from this session.
- 📝 Offer to write the summary to lesson.md.
- 🧠 Check if learning-context.md needs updating.
- ✅ Speak in `{communication_language}`.

---

## SEQUENCE

### 1. Session Summary

Present a concise summary:
- Key concepts covered
- Important patterns or techniques learned
- Common pitfalls discussed
- Practice problems attempted and what was learned

### 2. Offer to Write

Ask: "Want me to save this summary to your lesson notes? [W]"

If yes, write/append to `{lesson_path}/lesson.md`:
- Add a `## Summary` section with the key takeaways
- Content should be polished and useful for review, not a dialogue transcript

### 3. Learning Context Update

If you discovered important information about the learner during this session:
- Strengths, weaknesses, preferred learning style, breakthroughs, confusions
- Prompt: "I noticed {observation}. Should I update your learning profile?"
- If confirmed, update `{progress_path}/learning-context.md`

### 4. Next Steps

Suggest what to do next:
- "Try an interview on this topic: `/mc-interview-run {lesson_path}/interview/{problem}`"
- "Continue to the next lesson: `/mc-lesson-plan {next_lesson_path}`"
- "Review your progress: `/mc-context`"

