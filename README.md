# MasterClass

AI-driven tutoring and interview preparation system, powered by LLM agents.

## Overview

MasterClass provides two specialized AI agents:

- **Tutor** — Course planning, interactive teaching, practice exercises
- **Interviewer** — Mock interviews, code review, expression training

The system uses a **file-as-state** design: progress is determined by reading file content, with no external state management. All workflows are executed by the LLM following structured step files.

## Setup

### Prerequisites

- Node.js >= 18
- An IDE with LLM agent support (Only Claude Code is supported currently)

### Install

```bash
git clone <repo-url> && cd MasterClass
npm install
npm run install:mc
```

The installer will:
1. Collect your preferences (name, language, teaching style, etc.)
2. Optionally save your OpenAI API key (for vector search)
3. Compile agent templates and action scripts
4. Generate IDE skill files
5. Install runtime dependencies in `.masterclass/`

### Vector Search (Optional)

Build the knowledge base index for semantic search:

```bash
.masterclass/venv/bin/python .masterclass/actions/py/build.py --type=all
```

This uses local bge-m3 embeddings (no API key needed). Without the index, the system falls back to IDE-native search.

## Usage

Start a session in your IDE:

```
/mc-start
```

This loads the engine rules, your config, and lets you choose an agent. From there:

| Command | Description |
|---------|-------------|
| `/mc-start` | Initialize session, select agent |
| `/mc-course-plan` | Create or adjust course roadmap |
| `/mc-lesson-plan <path>` | Plan a specific lesson |
| `/mc-lesson-teach <path>` | Interactive teaching session |
| `/mc-interview-run <path>` | Run mock interview |
| `/mc-context` | Update learner profile |
| `/mc-settings` | View and modify settings |
| `/mc-help` | Detect project state, suggest next steps |

## Tech Stack

- **TypeScript** — Development language (compiled to JS for runtime)
- **LlamaIndex** — Vector search over knowledge base
- **@clack/prompts** — Interactive CLI installer
- **YAML** — Configuration format
