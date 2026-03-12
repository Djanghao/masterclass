---
step: 1
name: Continue Course — Review & Adjust
next: step-03-scaffold.md
---

# Step 1: Review Existing Roadmap (Continue Mode)

**Goal:** Show the user their current roadmap and directory structure, then help them make adjustments.

---

## MANDATORY RULES

- 📖 Read the existing roadmap fully before presenting it.
- 💬 Ask what they want to change — don't assume.
- ✅ Speak in `{communication_language}`.

---

## SEQUENCE

### 1. Load Current State

- Read `{lessons_path}/roadmap.yaml`
- List the directory structure under `{lessons_path}/` to see existing modules and lessons

### 2. Present to User

Display the current roadmap in a readable format:
- Goals, tech stack, level, direction
- Module → Lesson structure (with status: has content / empty / missing)

### 3. Ask for Adjustments

Ask: "What would you like to change?"

Possible adjustments:
- Add/remove/reorder modules or lessons
- Change goals, level, or direction
- Rename modules or lessons

### 4. Preview Changes

Before applying, show a clear preview of what will change:
- New modules/lessons to create
- Modules/lessons to remove (confirm deletion!)
- Reordering changes

Wait for user confirmation.

### 5. Apply Changes

On confirmation:
- Update `roadmap.yaml` with new values
- Create new directories and empty files for added modules/lessons (`mkdir -p` + `touch`)
- If removing: confirm again, then delete directories
- Update `learning-context.md` if goals changed

### 6. Done

Show the updated roadmap. Suggest next steps:
- "Run `/mc-lesson-plan <path>` to plan a specific lesson"
- Or return to Tutor menu
