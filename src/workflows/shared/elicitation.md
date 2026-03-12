---
name: elicitation
description: 'Guided exploration subflow triggered by [E] from any menu.'
---

# Elicitation Subflow

**Goal:** Help the user explore a concept or problem more deeply using structured thinking techniques.

**Trigger:** User selects [E] from any teaching or interview menu.

---

## SEQUENCE

### 1. Detect Context

Determine which workflow invoked this subflow:
- **Teaching context** (lesson-teach) → offer teaching techniques
- **Interview context** (interview-run) → offer interview techniques

### 2. Present Techniques

**Teaching techniques:**

| # | Technique | Description |
|---|-----------|-------------|
| 1 | **Socratic Questioning** | Answer questions with questions — lead the learner to discover the answer |
| 2 | **Feynman Technique** | "Explain it to me like I'm five" — simplify until gaps in understanding surface |
| 3 | **First Principles** | Break the concept down to its most fundamental truths, then rebuild |
| 4 | **Active Recall** | "Without looking, tell me..." — test retrieval from memory |
| 5 | **Analogy Bridge** | Connect the new concept to something the learner already knows well |

**Interview techniques:**

| # | Technique | Description |
|---|-----------|-------------|
| 1 | **Rubber Duck Debugging** | Walk through the code line by line, explain what each part does |
| 2 | **Complexity Analysis Drill** | Systematically analyze time and space for each part of the solution |
| 3 | **Edge Case Hunter** | Systematically enumerate edge cases: empty, single, max, negative, duplicate |
| 4 | **Optimization Paths** | List all possible approaches ordered by complexity, discuss trade-offs |
| 5 | **STAR Expression** | Structure the explanation as Situation → Task → Action → Result |

Ask: "Which technique would you like to try? (1-5)"

### 3. Execute Technique

Run the selected technique as a focused mini-session:
- Guide the user through the technique step by step
- Keep it focused on the current topic/problem
- Duration: 2-5 exchanges, not a full lesson

### 4. Return

When the technique is complete or the user is satisfied:
- Briefly summarize what was explored
- Return to the calling workflow's current step and redisplay the menu
