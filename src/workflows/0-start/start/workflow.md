---
name: mc-start
description: 'System initialization, agent selection, and course selection. This is the mandatory entry point for every MasterClass session.'
---

# MasterClass Start

**Goal:** Initialize the session by loading shared context, selecting an agent, and (for Tutor) selecting a course.

---

## INITIALIZATION SEQUENCE

### 1. Load Engine Rules

Read and internalize `.masterclass/engine.xml` — these are the execution rules for ALL subsequent workflows. Every rule in that file applies from this point forward.

### 2. Load Configuration

Run: `node .masterclass/actions/js/config-read.js`

Store the returned config values as session variables. Key variables:
- `user_name`, `communication_language`, `document_output_language`
- `tutor_name`, `tutor_persona_style`
- `interviewer_name`, `interviewer_language`, `interviewer_persona_style`
- `researcher_name`, `researcher_persona_style`
- `lessons_path`, `knowledge_path`

### 3. Present Agent Selection

Display to the user (in `communication_language`):

```
🎓 {tutor_name} (Tutor) — Course planning, teaching, practice
🎯 {interviewer_name} (Interviewer) — Mock interviews, code review, expression training
📚 {researcher_name} (Researcher) — Paper reading, literature survey, research Q&A
```

Wait for user selection.

### 4. Activate Agent

Based on user choice:

- **Tutor selected** → Read `.masterclass/agents/tutor.md`. Adopt this persona completely. Display the greeting. Then proceed to **Step 5: Course Selection**.
- **Interviewer selected** → Read `.masterclass/agents/interviewer.md`. Adopt this persona completely. Display the greeting and menu. Wait for input.
- **Researcher selected** → Read `.masterclass/agents/researcher.md`. Adopt this persona completely. Display the greeting and menu. Wait for input.

### 5. Course Selection (Tutor Only)

Scan for existing courses:

1. List subdirectories under `{lessons_path}/`
2. For each directory containing a `roadmap.yaml`:
   - Read `roadmap.yaml` to get the course goals
   - Count total lesson directories (match pattern `module-*/lesson-*/`)
   - Count lessons with non-empty `lesson.md` (= taught)
   - Summarize progress: `{taught}/{total} lessons`

Present course selection (in `communication_language`):

**If courses found:**

```
📚 选择课程:

[1] {slug} — {first goal summary} (进度: {taught}/{total})
[2] {slug} — {first goal summary} (进度: {taught}/{total})
...
[N] 开启新课程
```

Wait for user selection.

**If no courses found:**

Tell the user there are no courses yet. Automatically proceed to create a new course: read and follow `.masterclass/workflows/1-setup/course-plan/workflow.md` with `{course_slug}` unset.

**On user selection:**

- **Existing course selected:**
  - Set `{course_slug}` to the selected course folder name
  - Set `{course_path}` to `{lessons_path}/{course_slug}`
  - Read `{course_path}/context.md` if it exists — this is the course-level learning context
  - Proceed to **Step 6**

- **[N] New course:**
  - Read and follow `.masterclass/workflows/1-setup/course-plan/workflow.md` with `{course_slug}` unset
  - After course planning completes, set `{course_slug}` and `{course_path}` to the newly created course
  - Proceed to **Step 6**

### 6. Show Tutor Menu

Display the active course and available actions:

```
📖 当前课程: {course_slug}

[LP] Lesson Plan — 规划某节课
[LT] Lesson Teach — 开始/继续上课
[CP] Course Plan — 调整课程路线
```

Wait for user input.

---

## RULES

- This workflow has NO resume logic. It runs fresh every session.
- Do NOT proceed past agent selection without user input.
- Do NOT proceed past course selection without user input (unless no courses exist).
- Once an agent is activated, maintain that persona for the entire session.
- The selected `{course_slug}` and `{course_path}` persist for the session. All subsequent workflows use them.
- If the user wants to switch agents or courses, they should run `/mc-start` again.
