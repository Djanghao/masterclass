---
step: 2
name: Assign Interview Problems
next: null
---

# Step 2: Assign Interview Problems

**Goal:** Search the knowledge base for problems matching this lesson's topic, and copy selected problems to the lesson's interview directory.

---

## MANDATORY RULES

- 🔍 Search the knowledge base — don't guess problem names.
- 📋 Present options and let the user choose.
- 🚫 problem-copy.js does NOT overwrite existing source/ files.
- ✅ Speak in `{communication_language}`.

---

## SEQUENCE

### 1. Check Existing Problems

List contents of `{lesson_path}/interview/` to see if problems are already assigned.

If problems exist with `source/` populated, show them and ask if the user wants to add more or is done.

### 2. Search Knowledge Base

**Execute the shared subflow:** Read and follow `.masterclass/workflows/shared/knowledge-search.md`

Provide as context:
- Topic keywords: lesson title + key concepts from plan.md
- Content type: leetcode-problems
- Difficulty preference: based on lesson level

The subflow returns matching problems. Present the results to the user.

### 3. User Selection

Let the user pick which problems to assign (can select multiple).

### 4. Copy Problems

For each selected problem, run:

```bash
node .masterclass/actions/problem-copy.js --source={knowledge_path}/leetcode-problems/{category}/{problem_dir} --target={lesson_path}/interview/{id}-coding-{slug}/source
```

If problem-copy.js doesn't exist yet (Phase 4), create the interview directory and inform the user:
```bash
mkdir -p {lesson_path}/interview/{id}-coding-{slug}/source
```
And note that source files will need to be copied manually or after Phase 4.

Also create an empty interview.md if it doesn't exist:
```bash
touch {lesson_path}/interview/{id}-coding-{slug}/interview.md
```

### 5. Update Plan

Add the assigned problems to the "Interview Prep" section of plan.md.

### 6. Completion

Show the final plan with problems. Suggest:
- "Run `/mc-lesson-teach {lesson_path}` to start learning"
- "Run `/mc-interview-run {lesson_path}/interview/{id}-coding-{slug}` to practice an interview"

Return to Tutor menu.
