---
step: 1
name: Teaching — Core Concepts
next: step-02-practice.md
---

# Step 1: Teaching — Core Concepts

**Goal:** Teach the core concepts of this lesson through interactive dialogue.

---

## MANDATORY RULES

- 📖 Read plan.md first to understand what to teach.
- 💬 Teach through conversation — explain, ask questions, use examples.
- 🛑 Never dump a wall of text. Break explanations into digestible chunks.
- ❓ After explaining a concept, check understanding before moving on.
- 📝 [W] is always available — remind the user occasionally.
- ✅ Speak in `{communication_language}`.

---

## SEQUENCE

### 1. Load Context

- Read `{lesson_path}/plan.md` — the teaching blueprint
- Read `{progress_path}/learning-context.md` — learner background
- Check if previous lessons have content (to build on prior knowledge)

### 2. Opening

Briefly preview what this lesson covers (from plan.md objectives).
Ask if there's anything specific the user wants to focus on or skip.

### 3. Teach Core Concepts

Follow the plan.md outline. For each section:

1. **Explain** the concept with clear examples
2. **Ask** the user a question to check understanding
3. **Discuss** — let them respond, correct misconceptions, go deeper if needed
4. **Show menu:**

```
[C] <instruction> — tell me what to do next (e.g. "next concept", "go deeper on X", "let's practice", "skip to ...")
[D] Deep dive — more examples, edge cases, deeper explanation on current topic
[W] Write — save to lesson notes (or W <topic> to specify)
[E] Elicitation — guided exploration, help me discover the answer
```

5. Handle selection:
   - **C `<instruction>`** → Follow the user's instruction. This could be moving to the next concept, jumping to a specific topic, skipping ahead, going to practice, or anything else.
   - **D** → Continue exploring current topic with more examples, edge cases, related concepts. Then redisplay menu.
   - **W** → Distill the current teaching content into `{lesson_path}/lesson.md`. If user typed `W <topic>`, focus on that topic. Append, don't replace. Return to this menu after writing.
   - **E** → Load and execute `.masterclass/workflows/shared/elicitation.md` then return here

### 4. All Concepts Covered

When all sections from plan.md are covered:

Briefly acknowledge completion. If the user hasn't written anything yet, remind them about [W].

Then transition to practice: Read and follow `steps/step-02-practice.md`
