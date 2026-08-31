# Course Context

## Learner
- Name: Houston
- Level: junior
- Direction: interview prep

## Goals
- Master LeetCode Hot 100 problem patterns for coding interviews
- Build coding interview readiness for deep learning / LLM engineering roles (PyTorch, Transformers, LlamaFactory, verl, DeepSpeed)

## Tech Stack
- Python, PyTorch, Transformers, LlamaFactory, verl, DeepSpeed

## Teaching Principle
- Scope: applies to the **LeetCode / Hot 100 phase** of this course (Modules 1-17), not the LLM/DL coding phase (Modules 18-20).
- The overarching goal of the LeetCode phase (not just one lesson) is **pattern recognition speed**: seeing a problem and instantly recalling "I've seen something like this before, here's the approach." Every LeetCode lesson should explicitly build and reinforce this problem-feature → solution-pattern mapping, not just teach the solution to the specific problem at hand. Each lesson should end with the learner able to articulate the recognition signal (keywords/structure) that should trigger the pattern.
- **Module 0 convention:** `module-0-data-structures-toolkit/toolkit.md` is a running cheat sheet of data structures / Python idioms, separate from the numbered module sequence. Whenever a lesson introduces or uses a data structure/idiom not yet in the toolkit (e.g. `defaultdict`, hashability rules), append an entry there (organized by topic, not by lesson) in addition to writing the lesson's own `lesson.md`.
- **Explicit pattern naming (explicit request from Houston):** every module's core technique (hash table, two pointers, etc.) usually has multiple distinct sub-patterns/variants (e.g. hash table → complement lookup vs. group-by-key vs. existence-check expansion; two pointers → opposite-direction convergence vs. same-direction fast-slow read/write vs. differing-speed cycle detection vs. merge-style comparison advance). Always explicitly enumerate and name these sub-patterns for the learner — don't just teach "how to solve problem X," name which variant of the module's pattern it is and what signal distinguishes it from the module's other variants. Goal: build a reflex, not just problem-specific memory.

## Observations
- Module 2 Lesson 02 (3Sum & Trapping Rain Water): during Socratic concept discussion, answers tend to be terse/minimal; but when actually writing code, self-debugging via manual line-by-line trace of the *actual written code* is strong and effective — this is how a reversed-comparison bug (`left_max > right_max` instead of `<`) got caught, even though mentally re-deriving the "correct" per-position answer had already (correctly, but separately) checked out. Worth reinforcing: encourage tracing the real code, not just re-deriving the correct answer conceptually, as the default debugging habit.
