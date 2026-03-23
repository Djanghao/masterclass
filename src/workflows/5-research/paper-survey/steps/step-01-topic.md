---
step: 1
name: Topic Discovery
next: step-02-search.md
---

# Step 1: Topic Discovery

**Goal:** Define the survey topic and scope.

---

## MANDATORY RULES

- 💬 Discuss with the user to refine the topic.
- 🎯 Narrow the scope — a good survey has a clear focus.
- ✅ Speak in `{communication_language}`.

---

## SEQUENCE

### 1. Define Topic

If a topic argument was provided, start with that. Otherwise ask:
- "What topic or research area would you like to survey?"
- "Are you looking for a broad overview or a focused comparison?"

### 2. Refine Scope

Discuss:
- Time period (recent papers only, or historical?)
- Specific sub-area within the topic
- Number of papers to include (suggest 3-7 for a focused survey)
- Any specific papers they already know about

### 3. Set Survey Path

Derive `{topic-slug}` from the agreed topic. Set:
- `{survey_dir}` = `docs/research/{topic-slug}/`
- `{survey_path}` = `docs/research/{topic-slug}/survey.md`

Create the directory: `mkdir -p {survey_dir}`

### 4. Menu

```
[C] Continue — search for papers on this topic
[D] Deep dive — refine the scope further
```

Handle:
- **C** → Read and follow: `steps/step-02-search.md`
- **D** → Continue refining topic and scope. Redisplay menu.
