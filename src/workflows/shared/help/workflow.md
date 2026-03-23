---
name: mc-help
description: 'Detect project state and suggest what to do next.'
---

# MasterClass Help

**Goal:** Analyze the current state of the learner's project and suggest the most logical next step.

---

## SEQUENCE

### 1. Scan State

Check these files and directories in order:

| Check | Path | Meaning |
|-------|------|---------|
| Config exists? | `.masterclass/config/config.yaml` | System installed |
| Roadmap exists? | `{lessons_path}/roadmap.yaml` | Course planned |
| Any plan.md has content? | `{lessons_path}/**/plan.md` | Lessons planned |
| Any lesson.md has content? | `{lessons_path}/**/lesson.md` | Teaching started |
| Any interview.md has content? | `{lessons_path}/**/interview/*/interview.md` | Interviews done |
| Learning context has content? | `{progress_path}/learning-context.md` | Profile exists |
| Any paper notes exist? | `{knowledge_path}/papers/**/*-notes.md` | Papers have been read |
| Any survey exists? | `docs/research/*/survey.md` | Surveys generated |

### 2. Determine Stage & Suggest

Based on scan results:

**No config →**
"MasterClass is not installed. Please set up MasterClass first."

**No roadmap →**
"You haven't created a course plan yet. Run `/mc-course-plan` to design your learning roadmap."

**Roadmap exists, no plan.md with content →**
"Your course structure is ready but no lessons are planned yet."
Show the first few lessons from the directory tree.
"Run `/mc-lesson-plan {first-unplanned-lesson-path}` to plan your first lesson."

**Some plan.md have content, no lesson.md with content →**
"You have lesson plans but haven't started teaching yet."
Show the first planned-but-not-taught lesson.
"Run `/mc-lesson-teach {first-unteached-lesson-path}` to start learning."

**Some lesson.md have content, no interview.md with content →**
"You've been learning! Time to test your knowledge."
Show available interview problems.
"Run `/mc-interview-run {first-available-interview-path}` to try a mock interview."

**Some interview.md have content →**
"You're making great progress! Here's your current status:"
Show a summary: modules completed, lessons taught, interviews done.
Suggest the next unfinished lesson or interview.

**Has lesson content, no paper notes →**
"You're learning well! Consider reading papers related to your topics for deeper understanding."
"Run `/mc-paper-survey` to survey papers on a topic, or `/mc-paper-read {paper_path}` to read a specific paper."

### 3. Additional Tips

Always show:
- `/mc-context` — view or update your learning profile
- `/mc-settings` — change configuration
- `/mc-paper-read <path>` — read a paper section by section
- `/mc-paper-survey` — survey papers on a topic
- `/mc-paper-qa <path>` — ask questions about a paper
- `/mc-start` — start a new session with agent selection
