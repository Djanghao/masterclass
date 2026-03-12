---
step: 1
name: Resume Teaching Session
next: step-01-teach.md
---

# Step 1: Resume Teaching Session

**Goal:** Determine where the user left off and resume from there.

---

## MANDATORY RULES

- 📖 Read ALL existing content to understand progress.
- 💬 Show the user what's been covered and ask where to continue.
- ✅ Speak in `{communication_language}`.

---

## SEQUENCE

### 1. Load State

Read all available content:
- `{lesson_path}/plan.md` — the full plan
- `{lesson_path}/lesson.md` — what's been written so far
- `{lesson_path}/practice.md` — any practice content

### 2. Determine Progress

Compare lesson.md content against plan.md outline:
- Which sections have been covered (present in lesson.md)?
- Which sections remain?

### 3. Present to User

Show a brief summary:
- "You've covered: {list of completed sections}"
- "Remaining: {list of remaining sections}"

Ask: "Where would you like to pick up? Or would you prefer to review something we already covered?"

### 4. Resume

Based on user choice, jump to the appropriate point in the teaching flow.

Read and follow: `steps/step-01-teach.md` — start from the section the user chose.
