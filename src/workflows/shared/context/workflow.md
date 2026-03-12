---
name: mc-context
description: 'View and update your learner profile (learning-context.md).'
---

# Learning Context Workflow

**Goal:** Let the user view, update, or refine their learning profile.

---

## SEQUENCE

### 1. Load

Read `{progress_path}/learning-context.md` (default: `docs/progress/learning-context.md`).

### 2. Present

If it has content → display the current profile clearly, organized by section.
If it is empty → tell the user: "Your learning profile is empty. Let me help you set it up."

### 3. Update

Ask: "What would you like to update or add?"

Common updates:
- Background / experience level changes
- New goals or shifted priorities
- Weak areas discovered during lessons or interviews
- Strengths confirmed
- Preferred learning style observations

### 4. Write

Apply the user's changes to `{progress_path}/learning-context.md`:
- Append new observations under the appropriate section
- Refine existing entries if the user corrects them
- Never delete prior observations unless explicitly asked

### 5. Confirm

Show the updated file. Ask if anything else needs changing.

When done, return to the active agent's menu.
