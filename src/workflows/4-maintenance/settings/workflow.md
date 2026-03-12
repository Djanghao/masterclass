---
name: mc-settings
description: 'View and modify MasterClass configuration.'
---

# Settings Workflow

**Goal:** Let the user view and modify their configuration, then recompile agents if persona settings changed.

---

## SEQUENCE

### 1. Load

Read `.masterclass/config/config.yaml` and display all current settings in a clear table:

| Setting | Value |
|---------|-------|
| user_name | ... |
| communication_language | ... |
| document_output_language | ... |
| tutor_name | ... |
| tutor_persona_style | ... |
| tutor_custom_persona | ... |
| interviewer_name | ... |
| interviewer_language | ... |
| interviewer_persona_style | ... |
| interviewer_custom_persona | ... |
| lessons_path | ... |
| progress_path | ... |
| knowledge_path | ... |

### 2. Edit

Ask: "Which setting would you like to change?"

Let the user specify the field and new value. Validate:
- `tutor_persona_style` must be one of: patient, strict, socratic, custom
- `interviewer_persona_style` must be one of: friendly, realistic, custom
- If style is changed to "custom", ask for the custom persona description
- Path changes: warn that existing content won't be moved

Apply changes and show the updated settings.

Loop until the user says they're done.

### 3. Save

Write the updated config to `.masterclass/config/config.yaml`.

### 4. Recompile Agents

If any agent-related setting changed (tutor_name, tutor_persona_style, tutor_custom_persona, interviewer_name, interviewer_language, interviewer_persona_style, interviewer_custom_persona, user_name, communication_language, document_output_language):

Run: `node .masterclass/actions/compile-agents.js`

Check the output JSON. If success, tell the user agents have been updated.

### 5. Done

Show final config. Return to the active agent's menu.

Note: If agent personas changed significantly, suggest running `/mc-start` to reload the new persona.
