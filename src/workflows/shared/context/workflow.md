---
name: mc-context
description: 'View and update your course learning context ({course_path}/context.md).'
---

# Learning Context Workflow

**Goal:** Let the user view, update, or refine their course learning context.

---

## SEQUENCE

### 1. Load

Read `{course_path}/context.md` (course learning context).
If empty or missing → tell the user: "Your course learning context is empty. Let me help you set it up."

### 2. Present

Display the course context, organized by section.

### 3. Update

Ask: "What would you like to update or add?"

Common updates:
- Background / experience level changes
- New goals or shifted priorities
- Weak areas discovered during lessons or interviews
- Strengths confirmed
- Preferred learning style observations

### 4. Write

Apply the user's changes to `{course_path}/context.md`:
- Append new observations under the appropriate section
- Refine existing entries if the user corrects them
- Never delete prior observations unless explicitly asked

### 5. Confirm

Show the updated file. Ask if anything else needs changing.

When done, return to the active agent's menu.
