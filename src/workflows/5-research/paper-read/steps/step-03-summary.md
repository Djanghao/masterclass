---
step: 3
name: Summary & Key Takeaways
next: null
---

# Step 3: Summary & Key Takeaways

**Goal:** Synthesize the paper's contributions, evaluate strengths/weaknesses, and connect to the learner's knowledge.

---

## MANDATORY RULES

- 📋 Produce a structured summary of the entire paper.
- 📝 Offer to write the summary to notes.
- 🧠 Check if learning-context.md needs updating.
- ✅ Speak in `{communication_language}`.

---

## SEQUENCE

### 1. Paper Summary

Present a structured summary:

```
## Paper Summary

### Core Contribution
{What this paper's main contribution is, in 2-3 sentences}

### Key Findings
- {Finding 1}
- {Finding 2}
- {Finding 3}

### Methodology
{Brief description of the approach/method}

### Strengths
- {Strength 1}
- {Strength 2}

### Weaknesses / Limitations
- {Weakness 1}
- {Weakness 2}

### Connections to Your Learning
- {How this relates to topics the learner is studying}
- {Relevant concepts from their course}

### Related Papers to Read Next
- {Suggested related paper 1}
- {Suggested related paper 2}
```

### 2. Discussion

Ask:
- "What was the most interesting part of this paper?"
- "Do you agree with the authors' approach? Any concerns?"
- "How might you apply these ideas?"

### 3. Offer to Write

Ask: "Want me to save the complete reading notes? [W]"

If yes, write/append to `{notes_path}`:
- Add a `## Summary` section with the structured summary above
- Ensure all previous section notes are preserved

### 4. Learning Context Update

If you discovered important information about the learner:
- Research interests, background knowledge gaps, preferred paper reading style
- Prompt: "I noticed {observation}. Should I update your learning profile?"
- If confirmed, update `{progress_path}/learning-context.md`

### 5. Next Steps

Suggest:
- "Read another paper: `/mc-paper-read {another_paper_path}`"
- "Ask questions about this paper: `/mc-paper-qa {paper_path}`"
- "Survey papers on a related topic: `/mc-paper-survey`"

Return to Researcher menu.
