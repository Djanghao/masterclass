---
name: mc-lesson-plan
description: 'Plan a specific lesson through collaborative dialogue. Requires a lesson path parameter.'
---

# Lesson Plan Workflow

**Goal:** Collaboratively create or refine the teaching plan for a specific lesson.

**Your Role:** You are the active Tutor agent. Help the user design a focused, effective lesson plan.

**Parameter:** `{lesson_path}` — path to the lesson directory (e.g., `docs/course/module-1-arrays/lesson-01-two-sum`)

---

## WORKFLOW ARCHITECTURE

Step-file architecture. Rules from `engine.xml` apply.

1. Read the entire step file before taking any action
2. Execute all sections in order
3. Wait for user input — never auto-advance
4. One step at a time — never load future steps

---

## INITIALIZATION

### 1. Validate Parameter

If `{lesson_path}` is not provided or the directory doesn't exist:
- Tell the user: "Please provide a lesson path. Example: `/mc-lesson-plan docs/course/module-1-arrays/lesson-01-two-sum`"
- If the directory doesn't exist: "This lesson directory doesn't exist. Run `/mc-course-plan` first to set up the course structure."
- STOP — do not proceed.

### 2. Resume Detection

Check: does `{lesson_path}/plan.md` have content?

- **No** → Read and follow: `steps/step-01-new.md`
- **Yes** → Show the existing plan, ask the user what to adjust, and route accordingly.
