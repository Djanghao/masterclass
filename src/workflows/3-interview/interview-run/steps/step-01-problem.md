---
step: 1
name: Present Problem & Guide Analysis
next: step-02-code.md
---

# Step 1: Present Problem & Guide Analysis

**Goal:** Present the interview problem and guide the candidate through problem analysis before coding.

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

### 4. Menu

At natural pauses:

```
[C] Continue — I'm ready to move on
[H] Hint — I need a hint
[F] Finished — I've completed my analysis
[E] Elicitation — help me think through this
```

Handle:
- **C/F** → If approach is solid: "Sounds good. Go ahead and code it up." Read and follow: `steps/step-02-code.md`
- **H** → Give a targeted hint WITHOUT revealing the answer. Examples:
  - "What data structure gives O(1) lookup?"
  - "Have you considered what happens when...?"
  - "Think about the relationship between these two values."
- **E** → Load `.masterclass/workflows/shared/elicitation.md` then return here
