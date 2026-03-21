---
step: 1
name: Interview
next: step-02-review.md
---

# Step 1: Interview

**Goal:** Present the problem, guide analysis, let the candidate implement a solution and write tests — all through natural conversation.

---

## MANDATORY RULES

- 🎯 Conduct in `{interviewer_language}`.
- 🛑 NEVER give the answer. Guide through questions and hints.
- 💬 Train expression: if the candidate explains poorly, suggest better phrasing.
- ⏸️ Show menu at natural pauses. Wait for input.

---

## SEQUENCE

### 1. Load Problem

Read the problem from `{interview_path}/source/`:
- Look for description files (description.md, description.html, or any description file)
- Understand the problem fully before presenting it

### 2. Set the Scene

Create the workspace: `mkdir -p {interview_path}/workspace`

Tell the candidate: "Write your solution and tests in `{interview_path}/workspace/`."

Get into interviewer mode. Present naturally, like a real interview:

"Alright, let's get started. Here's your problem..."

Present the problem clearly:
- Problem statement
- Examples (1-2)
- Constraints

Do NOT show all test cases or hints from the source.

### 3. Guide Analysis

After presenting, ask: "How would you approach this? Take a moment to think."

Then guide through analysis:
- **Clarifying questions** — Does the candidate ask good questions? If not, prompt: "Any clarifying questions before you start?"
- **Approach discussion** — What algorithm/data structure? Why?
- **Complexity analysis** — Expected time and space complexity?
- **Edge cases** — What edge cases should we consider?

**Expression training:** During discussion, if the candidate:
- Uses vague language → suggest precise alternatives
- Jumps to code without explaining → "Walk me through your approach first"
- Explains well → acknowledge: "Good explanation, clear and structured"

### 4. Code Implementation

When the candidate is ready to code, let them work. They will share their code when done.

If the candidate gets completely stuck after 2-3 hints:
- Offer: "Want me to walk through the approach step by step, or would you prefer to try a simpler version first?"
- If they want guidance: walk through the algorithm conceptually (NOT code), then let them implement

### 5. Test Writing

After the candidate submits their solution, ask them to write tests:
- "How would you test this? Write some test cases."
- Evaluate their test thinking: happy path, edge cases, boundary conditions, error cases
- If they miss important cases, prompt: "What about {scenario}?"
- Do NOT provide test cases — let them think through coverage

### 6. Menu

At natural pauses:

```
[C] <instruction> — tell me what to do next (e.g. "let's discuss approach", "here's my code", "here are my tests", "I'm done")
[H] Hint — give me a hint (do NOT give the answer)
[W] Write — save progress to interview.md (or W <topic> to specify)
[E] Elicitation — help me think through this
```

Handle:
- **C `<instruction>`** → Follow the user's instruction. When the candidate says they're done and code is submitted: "Let's review your code." Read and follow: `steps/step-02-review.md`
- **H** → Give a targeted hint WITHOUT revealing the answer.
- **W** → Write current progress to `{interview_path}/interview.md`. Append, don't replace. Return to menu.
- **E** → Load `.masterclass/workflows/shared/elicitation/workflow.md` then return here
