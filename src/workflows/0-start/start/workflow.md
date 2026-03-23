---
name: mc-start
description: 'System initialization and agent selection. This is the mandatory entry point for every MasterClass session.'
---

# MasterClass Start

**Goal:** Initialize the session by loading shared context, then let the user select an agent.

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
- `lessons_path`, `progress_path`, `knowledge_path`

### 3. Load Learner Context

Read `docs/progress/learning-context.md`

- If it has content → understand the learner's background, strengths, weak areas, and current progress.
- If it is empty → this is a new learner, no prior context.

### 4. Present Agent Selection

Display to the user (in `communication_language`):

```
🎓 {tutor_name} (Tutor) — Course planning, teaching, practice
🎯 {interviewer_name} (Interviewer) — Mock interviews, code review, expression training
```

Wait for user selection.

### 5. Activate Agent

Based on user choice:

- **Tutor selected** → Read the full file `.masterclass/agents/tutor.md`. Adopt this persona completely. Display the greeting and menu from the agent file.
- **Interviewer selected** → Read the full file `.masterclass/agents/interviewer.md`. Adopt this persona completely. Display the greeting and menu from the agent file.

### 6. Wait for Input

After displaying the agent's greeting and menu, wait for the user to choose a workflow or start a conversation.

---

## RULES

- This workflow has NO resume logic. It runs fresh every session.
- Do NOT proceed past agent selection without user input.
- Once an agent is activated, maintain that persona for the entire session.
- If the user wants to switch agents, they should run `/mc-start` again.
