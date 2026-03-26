# MasterClass

AI-driven tutoring, interview prep, and research system powered by Claude Code.

Three specialized agents — **Tutor**, **Interviewer**, and **Researcher** — guide you through course planning, interactive lessons, mock interviews, and paper reading, all via slash commands in your IDE.

## Quick Start

```bash
npm install
npm run install:mc      # interactive setup — picks languages, personas, paths
```

The installer will:
1. Collect your preferences (name, languages, agent personas)
2. Compile agent profiles and workflow files into `.masterclass/`
3. Generate IDE slash commands in `.claude/skills/`
4. Set up a Python venv with embeddings and vector search dependencies

Once installed, open Claude Code and run `/mc-start` to begin.

## Slash Commands

| Command | Description |
|---|---|
| `/mc-start` | Initialize session and select an agent |
| `/mc-course-plan` | Create or adjust your course roadmap |
| `/mc-lesson-plan <path>` | Plan a specific lesson |
| `/mc-lesson-teach <path>` | Interactive teaching session |
| `/mc-interview-run <path>` | Run a mock coding interview |
| `/mc-paper-read <path>` | Read a paper section by section |
| `/mc-paper-survey` | Survey papers on a topic |
| `/mc-paper-qa <path>` | Q&A about a specific paper |
| `/mc-kb-search <query>` | Search the knowledge base |
| `/mc-kb-build` | Build or rebuild knowledge base indexes |
| `/mc-context` | View or update your learner profile |
| `/mc-settings` | View and modify configuration |
| `/mc-help` | Detect project state and suggest next steps |

## Agents

| Agent | Default Name | Role |
|---|---|---|
| **Tutor** | Alex | Course planning, lessons, practice exercises |
| **Interviewer** | Jordan | Mock interviews with structured code review |
| **Researcher** | Morgan | Paper reading, literature surveys, research Q&A |

Each agent has a configurable persona style (e.g. patient / strict / socratic for the tutor). Run `/mc-settings` to change.

## Project Layout

```
src/
  engine.xml              # Core execution rules
  agents/                 # Agent persona templates
  workflows/              # Workflow definitions (markdown)
  actions/
    ts/                   # TypeScript actions (config, compilation)
    py/                   # Python actions (embedding, vector search)
scripts/
  install.ts              # Interactive installer
docs/                     # Generated — course content and progress
data/
  knowledge/              # Papers, books, leetcode problems, notes
  .index/                 # FAISS vector indexes (auto-built)
.masterclass/             # Generated — compiled runtime artifacts
.claude/skills/           # Generated — IDE slash commands
```

`docs/`, `data/`, and `.masterclass/` are gitignored — they hold your personal content and compiled artifacts.

## Knowledge Base

Drop files into `data/knowledge/` by category:

- `papers/` — PDFs (with optional `-notes.md` companions)
- `books/` — PDFs
- `leetcode/` — Markdown problem sets
- `notes/` — Free-form markdown

Run `/mc-kb-build` to index, then `/mc-kb-search <query>` to search. Uses FAISS + BM25 hybrid search with local HuggingFace embeddings (bge-m3 or bge-small-en, chosen at install time).

## How It Works

- **File-as-state**: All progress lives in file content — no database, no external state. Empty file = not started; has content = resumable.
- **Sequential workflows**: Each workflow is a series of markdown steps executed one at a time by the LLM engine.
- **LLM-as-judge**: The interviewer evaluates code with a structured rubric (correctness, complexity, quality, edge cases, communication).
- **Multilingual**: Communication language, document output language, and interview language are independently configurable.

## Requirements

- Node.js >= 18
- Python >= 3.10 (for knowledge base features)
- [Claude Code](https://claude.ai/code) CLI or IDE extension
