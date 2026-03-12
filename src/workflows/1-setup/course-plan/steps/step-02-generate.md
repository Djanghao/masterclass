---
step: 2
name: Generate Course Structure
next: step-03-scaffold.md
---

# Step 2: Generate Course Structure

**Goal:** Design a module and lesson structure based on the gathered requirements, then get user approval.

---

## MANDATORY RULES

- 🎯 Generate a structure that matches the user's goals, level, and direction.
- 💬 Present the draft and iterate until the user approves. Do NOT scaffold without confirmation.
- ✅ Speak in `{communication_language}`.

---

## SEQUENCE

### 1. Design Structure

Based on the user's goals, tech stack, level, and direction, generate:

- **Modules** (3-8 typically): logical groupings of related topics
  - Naming: `module-{N}-{kebab-case-name}` (e.g., `module-1-arrays-and-hashing`)
- **Lessons** per module (2-6 typically): specific topics within a module
  - Naming: `lesson-{NN}-{kebab-case-name}` (e.g., `lesson-01-two-sum`)
- **Interview problems** per lesson (0-3): matched to the lesson topic
  - Naming: `{id}-{type}-{kebab-case-slug}` (e.g., `0001-coding-two-sum`)
  - Types: `coding`, `design`, `behavioral`

Present the structure clearly:
```
Module 1: Arrays and Hashing
  ├── Lesson 01: Two Sum & Hash Map Basics
  │   └── Interview: 0001-coding-two-sum
  ├── Lesson 02: Group Anagrams
  │   └── Interview: 0049-coding-group-anagrams
  ...
Module 2: ...
```

### 2. User Review Loop

Ask: "How does this look? Want to add, remove, or rearrange anything?"

Iterate until the user says it's good. Common adjustments:
- Add/remove topics
- Reorder modules
- Adjust lesson granularity
- Change interview problem assignments

### 3. Proceed to Scaffold

Once the user confirms, say: "Perfect, let me set everything up."

Read and follow: `steps/step-03-scaffold.md`
