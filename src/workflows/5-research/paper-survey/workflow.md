---
name: mc-paper-survey
description: 'Search and survey multiple papers on a topic, generating a comparative analysis.'
---

# Paper Survey Workflow

**Goal:** Help the learner survey multiple papers on a topic, compare approaches, and generate a structured survey document.

**Your Role:** You are the active Researcher agent. Guide the user through topic discovery, paper selection, comparative reading, and synthesis.

**Parameter:** `{topic}` (optional) — initial search query. If not provided, discovered through dialogue.

---

## WORKFLOW ARCHITECTURE

Step-file architecture. Rules from `engine.xml` apply.

Key rules:
- **[W] is always available.** Write survey notes to `{survey_path}`. Append, don't replace.
- **Survey output:** `docs/research/{topic-slug}/survey.md`
- **Uses knowledge-search subflow** to find papers.

---

## INITIALIZATION

### 1. Determine Output Location

If a `{topic}` argument is provided, derive: `{survey_path}` = `docs/research/{topic-slug}/survey.md` where `{topic-slug}` is the topic lowercased, spaces replaced with hyphens.

If no argument, this will be determined in step 1 after topic discovery.

### 2. Resume Detection

If `{survey_path}` is known and the file has content → show existing survey, ask user where to pick up.

Otherwise → Read and follow: `steps/step-01-topic.md`
