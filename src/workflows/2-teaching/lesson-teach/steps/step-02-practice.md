---
step: 2
name: Practice
next: step-03-summary.md
---

# Step 2: Practice

**Goal:** Reinforce learning through practice exercises and problem-solving.

---

## MANDATORY RULES

- 💡 Practice through dialogue — pose problems, let user think, guide them.
- 🛑 Give hints, not answers. Let the user work through problems.
- 📝 [W] is always available to save exercises and solutions to practice.md.
- ✅ Speak in `{communication_language}`.

---

## SEQUENCE

### 1. Practice Exercises

Based on plan.md's practice ideas and the concepts taught:

1. **Pose a problem** — start simple, increase difficulty
2. **Let the user think** — wait for their attempt
3. **Guide** — if stuck, give hints. If wrong, ask probing questions.
4. **Discuss the solution** — explain the approach, time/space complexity
5. **Show menu:**

```
[C] <instruction> — tell me what to do next (e.g. "next exercise", "harder one", "try a linked list problem", "back to concepts")
[D] Deep dive — variations, edge cases, alternative approaches for current problem
[W] Write — save to practice notes (or W <topic> to specify)
[E] Elicitation — guide me with hints instead of giving the answer
```

6. Handle selection:
   - **C `<instruction>`** → Follow the user's instruction. This could be the next exercise, a specific type of problem, going back to teaching, jumping to summary, or anything else.
   - **D** → Explore variations of the current problem, discuss edge cases, compare alternative approaches. Then redisplay menu.
   - **W** → Distill the current exercise and solution into `{lesson_path}/practice.md`. If user typed `W <topic>`, focus on that topic. Append, don't replace. Return to this menu after writing.
   - **E** → Load and execute `.masterclass/workflows/shared/elicitation.md` then return here

### 2. Wrap Up Practice

After 2-4 practice exercises (or when user is satisfied):

Ask: "Ready for a summary, or want more practice?"

- **More practice** → Continue with more exercises
- **Summary** → Read and follow: `steps/step-03-summary.md`