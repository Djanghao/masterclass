---
step: 1
name: Resume Interview
next: step-01-problem.md
---

# Step 1: Resume Interview

**Goal:** Determine where the candidate left off and resume the interview.

---

## MANDATORY RULES

- 📖 Read interview.md and source/ to understand context.
- 💬 Briefly summarize progress and ask where to continue.
- 🎯 Conduct in `{interviewer_language}`.

---

## SEQUENCE

### 1. Load State

- Read `{interview_path}/interview.md` — previous interview record
- Read `{interview_path}/source/` — the problem

### 2. Determine Progress

Check interview.md for what's been completed:
- Problem analysis? (approach discussed)
- Code implementation? (code present)
- Code review? (evaluation present)
- Follow-up? (additional discussion)

### 3. Present & Ask

"Looks like we left off at {phase}. Want to continue from there, or start fresh?"

Options:
- **Continue** → Jump to the appropriate step
- **Start fresh** → Clear interview.md (with confirmation), then read `steps/step-01-problem.md`
- **Just review** → Jump to `steps/step-03-review.md` if code exists
