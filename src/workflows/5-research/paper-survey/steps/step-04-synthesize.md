---
step: 4
name: Synthesize Survey
next: null
---

# Step 4: Synthesize Survey Document

**Goal:** Generate a cohesive survey document that synthesizes findings across all papers.

---

## MANDATORY RULES

- 📋 Produce a well-structured survey document.
- 📝 Write to `{survey_path}`.
- 🧠 Check if learning-context.md needs updating.
- ✅ Speak in `{communication_language}`. Write document in `{document_output_language}`.

---

## SEQUENCE

### 1. Draft Survey

Generate the survey document:

```markdown
# Survey: {Topic}

## Date: {current date}

## Overview
{1-2 paragraphs: what this topic is about, why it matters}

## Papers Reviewed
1. {Paper A Title} ({year}) — {one-line summary}
2. {Paper B Title} ({year}) — {one-line summary}
...

## Comparative Analysis

### Approaches
{Compare the different approaches taken by each paper}

### Results
{Compare key results, metrics, improvements}

### Comparison Table
{The table from step 3}

## Key Themes
- {Theme 1}: {description and which papers address it}
- {Theme 2}: ...

## Open Questions & Future Directions
- {What remains unsolved}
- {Promising directions}

## Takeaways for Learning
- {How this survey connects to the learner's study goals}
- {What to read next}
```

### 2. User Review

Present the draft and ask: "How does this look? Want to adjust anything?"

Iterate until confirmed.

### 3. Write

Write the survey to `{survey_path}`. If it already has content, replace with the final version (this is the one case where replacement is appropriate — the survey is a single cohesive document).

### 4. Learning Context Update

Prompt if relevant observations about the learner were made.

### 5. Next Steps

Suggest:
- "Deep-read one of these papers: `/mc-paper-read {paper_path}`"
- "Continue your course: `/mc-lesson-teach {lesson_path}`"

Return to Researcher menu.
