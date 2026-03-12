---
step: 3
name: Scaffold Directory Structure
next: null
---

# Step 3: Scaffold Directory Structure

**Goal:** Write the roadmap.yaml, create all directories and empty files, and initialize learning-context.md.

---

## MANDATORY RULES

- 📁 Create ALL directories and files in one batch after confirmation.
- 📝 Write roadmap.yaml with the confirmed structure.
- 🚫 Do NOT write content into lesson files — they start empty (file-as-state principle).
- ✅ Speak in `{communication_language}`.

---

## SEQUENCE

### 1. Write roadmap.yaml

Write `{lessons_path}/roadmap.yaml` with the confirmed data:

```yaml
goals:
  - <goal 1>
  - <goal 2>
tech_stack:
  - <language/framework>
level: "<junior|senior|principal|distinguished>"
direction: "<interview prep|deep dive|engineering practice>"
```

### 2. Create Directory Structure

For each module and lesson, run:

```bash
mkdir -p {lessons_path}/module-{N}-{name}/lesson-{NN}-{name}/interview/{id}-{type}-{slug}
```

Then create empty files:

```bash
touch {lessons_path}/module-{N}-{name}/lesson-{NN}-{name}/plan.md
touch {lessons_path}/module-{N}-{name}/lesson-{NN}-{name}/lesson.md
touch {lessons_path}/module-{N}-{name}/lesson-{NN}-{name}/practice.md
touch {lessons_path}/module-{N}-{name}/lesson-{NN}-{name}/interview/{id}-{type}-{slug}/interview.md
```

### 3. Initialize Learning Context

If `{progress_path}/learning-context.md` is empty, write initial content:

```markdown
# Learning Context

## Learner
- Name: {user_name}
- Level: {level}
- Direction: {direction}

## Goals
- {goal 1}
- {goal 2}

## Tech Stack
- {tech_stack}

## Observations
(Will be updated as learning progresses)
```

If it already has content, append the new goals/direction if they differ.

### 4. Completion

Display the created structure as a tree.

Suggest next steps:
- "Run `/mc-lesson-plan {lessons_path}/module-1-.../lesson-01-...` to plan your first lesson"
- Or pick a different module to start with

Return to Tutor menu.
