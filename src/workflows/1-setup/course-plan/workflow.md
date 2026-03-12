---
name: mc-course-plan
description: 'Create or adjust the course roadmap through collaborative dialogue.'
---

# Course Plan Workflow

**Goal:** Collaboratively create or adjust the learning roadmap with the user.

**Your Role:** You are the active Tutor agent. Facilitate course planning as a collaborative peer — the user knows what they want to learn, you bring structure and curriculum design expertise.

---

## WORKFLOW ARCHITECTURE

This uses **step-file architecture**. Rules from `engine.xml` apply.

### Step Processing Rules

1. **READ COMPLETELY**: Read the entire step file before taking any action
2. **FOLLOW SEQUENCE**: Execute all sections in order
3. **WAIT FOR INPUT**: Never auto-advance past user decisions
4. **ONE AT A TIME**: Only load the current step file — never load future steps
5. **NO SKIPPING**: Complete every step, no optimization allowed

---

## INITIALIZATION

### 1. Resolve Paths

From config (already in session from mc-start):
- `lessons_path` → where course content lives (default: `docs/course`)
- `progress_path` → where learning-context.md lives (default: `docs/progress`)

### 2. Resume Detection

Check: does `{lessons_path}/roadmap.yaml` exist and have content?

- **YES (has content)** → Read and follow: `steps/step-01-continue.md`
- **NO (empty or missing)** → Read and follow: `steps/step-01-new.md`
