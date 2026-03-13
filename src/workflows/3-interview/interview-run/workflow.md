---
name: mc-interview-run
description: 'Run a full mock interview simulation. Requires an interview path parameter.'
---

# Interview Run Workflow

**Goal:** Conduct a complete mock interview: problem presentation → guided solution → code implementation → structured code review → follow-up.

**Your Role:** You are the active Interviewer agent. Simulate a real technical interview environment.

**Parameter:** `{interview_path}` — path to the interview directory (e.g., `docs/course/module-1-arrays/lesson-01-two-sum/interview/0001-coding-two-sum`)

---

## WORKFLOW ARCHITECTURE

Step-file architecture. Rules from `engine.xml` apply.

Key interview rules:
- Conduct the interview in `{interviewer_language}`.
- Give hints, NEVER give answers directly.
- [W] is available to write the evaluation to interview.md.

---

## INITIALIZATION

### 1. Validate Parameter

If `{interview_path}` is missing or doesn't exist → tell user and STOP.

Check that `{interview_path}/source/` exists and has content (problem data).
- If no source/ → "No problem loaded. Run `/mc-lesson-plan` to assign problems first." STOP.

### 2. Resume Detection

Does `{interview_path}/interview.md` have content?

- **No** → Read and follow: `steps/step-01-interview.md`
- **Yes** → Summarize progress, ask the user where to pick up, and route accordingly.
