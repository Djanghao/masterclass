---
step: 1
name: Continue Lesson — Review & Refine Plan
next: step-02-problems.md
---

# Step 1: Refine Existing Plan (Continue Mode)

**Goal:** Show the existing plan and help the user refine it.

---

## MANDATORY RULES

- 📖 Read the full plan.md before presenting.
- 💬 Ask what they want to change — don't assume.
- ✅ Speak in `{communication_language}`.

---

## SEQUENCE

### 1. Load and Present

- Read `{lesson_path}/plan.md`
- Display the current plan in a clear format

### 2. Ask for Changes

Ask: "What would you like to adjust in this plan?"

Possible adjustments:
- Add/remove topics or sections
- Change depth or focus
- Update prerequisites
- Modify practice exercises

### 3. Apply Changes

Update `plan.md` with the refined content. Show the updated version.

### 4. Problem Assignment

Ask: "Do you want to review or update the interview problems for this lesson?"

- **Yes** → Read and follow: `steps/step-02-problems.md`
- **No** → Done. Suggest: "Run `/mc-lesson-teach {lesson_path}` when you're ready to start learning."
