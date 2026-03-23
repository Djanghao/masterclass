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
- **Research context** (paper-read, paper-qa, paper-survey) → offer research techniques

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

**Research techniques:**

| # | Technique | Description |
|---|-----------|-------------|
| 1 | **Paper Anatomy** | Break down the paper's structure — what each section is for, how arguments flow |
| 2 | **Notation Decoder** | Systematically decode every symbol in an equation or algorithm |
| 3 | **Critical Review** | Evaluate methodology: are experiments fair? Is the baseline appropriate? What's missing? |
| 4 | **Connection Map** | Map how this paper connects to other papers, techniques, and the learner's knowledge |
| 5 | **Reproduce Mentally** | Walk through the algorithm/method step by step as if implementing it |

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
