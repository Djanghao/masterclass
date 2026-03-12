---
step: 1
name: New Lesson — Plan Through Dialogue
next: step-02-problems.md
---

# Step 1: Create Lesson Plan (New)

**Goal:** Through dialogue, design a teaching plan for this lesson and write it to plan.md.

---

## MANDATORY RULES

- 💬 Collaborate with the user — ask what they want to focus on, what they already know.
- 📖 Check roadmap.yaml and learning-context.md for context on this lesson's place in the curriculum.
- ✅ Speak in `{communication_language}`. Write plan.md in `{document_output_language}`.

---

## SEQUENCE

### 1. Gather Context

- Read `{lessons_path}/roadmap.yaml` to understand this lesson's position in the curriculum
- Read `{progress_path}/learning-context.md` for learner background
- Check if previous lessons in this module have content (to understand prerequisites)

### 2. Discuss the Lesson

Engage the user:
- What aspects of this topic do they want to cover?
- What do they already know about it?
- Any specific pain points or areas of confusion?
- How deep should we go? (overview, working knowledge, mastery)

### 3. Draft the Plan

Based on dialogue, write `{lesson_path}/plan.md` with:

```markdown
# Lesson Plan: {lesson title}

## Prerequisites
- {what the learner should know before this lesson}

## Learning Objectives
- {specific, measurable outcomes}

## Outline
1. {section 1: concept/topic}
2. {section 2: concept/topic}
3. {section 3: deeper exploration}
4. Practice exercises
5. Summary and key takeaways

## Key Concepts
- {concept}: {brief description}

## Practice Ideas
- {exercise 1}
- {exercise 2}

## Interview Prep
- {related interview patterns/problems}
```

### 4. User Review

Present the plan and ask: "How does this look? Want to adjust anything?"

Iterate until confirmed. Then proceed to problem assignment.

Read and follow: `steps/step-02-problems.md`
