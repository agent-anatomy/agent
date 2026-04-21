# agent

> One config file for every AI coding agent.

Write `AGENT.md` once. Sync it to Claude Code, Cursor, Codex, Windsurf, Copilot, Aider, and Gemini CLI in one command.

Part of [agent-anatomy](https://github.com/agent-anatomy) — boilerplates for every AI coding agent.

---

## The problem

Every AI coding agent reads from a different file:

| Agent | Reads from |
|-------|-----------|
| Claude Code | `CLAUDE.md` |
| OpenAI Codex | `AGENTS.md` |
| Gemini CLI | `GEMINI.md` |
| Windsurf | `.windsurfrules` |
| Cursor | `.cursorrules` |
| GitHub Copilot | `.github/copilot-instructions.md` |
| Aider | `CONVENTIONS.md` |

Same content. Seven files. One change = seven edits.

---

## The solution

Write your project instructions once in `AGENT.md`. Sync everywhere.

```bash
# 1. Copy AGENT.md into your project
cp /path/to/agent/AGENT.md ./AGENT.md

# 2. Edit it
# (fill in your project description, stack, rules, commands)

# 3. Sync to all agents
npx @agent-anatomy/agent

# or sync to specific agents only
npx @agent-anatomy/agent claude cursor
```

---

## What gets written

```
CLAUDE.md                          ← Claude Code
AGENTS.md                          ← OpenAI Codex
GEMINI.md                          ← Gemini CLI
.windsurfrules                     ← Windsurf
.cursorrules                       ← Cursor
.github/copilot-instructions.md    ← GitHub Copilot
CONVENTIONS.md                     ← Aider
```

All files are plain copies of `AGENT.md`. Edit `AGENT.md`, re-run sync, done.

---

## Usage

```bash
# Sync to all agents
npx @agent-anatomy/agent

# Sync to specific agents
npx @agent-anatomy/agent claude
npx @agent-anatomy/agent cursor codex
npx @agent-anatomy/agent windsurf copilot aider
```

Or run locally without npx:

```bash
node sync.js
node sync.js claude cursor
```

---

## What to put in AGENT.md

```markdown
# Project

A TypeScript API that handles payments for SaaS customers.

## Stack
- Language: TypeScript
- Framework: Express
- Database: PostgreSQL

## Commands
npm install / npm run dev / npm test / npm run build

## Rules
- Follow existing code style
- Write tests for all new functionality
- Never modify files in generated/

## Do not touch
- generated/
- *.lock files
```

---

## What to commit vs gitignore

Commit `AGENT.md`. The generated files are optional to commit — your team can run sync locally.

```gitignore
# Optional: ignore generated agent configs
CLAUDE.md
AGENTS.md
GEMINI.md
.windsurfrules
.cursorrules
.github/copilot-instructions.md
CONVENTIONS.md
```

Or commit them all — either works.

---

## Agent-specific config

`AGENT.md` covers the universal 80%: project context, commands, rules.

For agent-specific features (Claude's `.claude/commands/`, Cursor's `.mdc` rule types, Aider's `.aider.conf.yml`) — use the individual boilerplates from [agent-anatomy](https://github.com/agent-anatomy).

---

## Other agents

| Agent | Full boilerplate |
|-------|-----------------|
| Claude Code | [agent-anatomy/claude](https://github.com/agent-anatomy/claude) |
| Cursor | [agent-anatomy/cursor](https://github.com/agent-anatomy/cursor) |
| OpenAI Codex | [agent-anatomy/codex](https://github.com/agent-anatomy/codex) |
| Windsurf | [agent-anatomy/windsurf](https://github.com/agent-anatomy/windsurf) |
| GitHub Copilot | [agent-anatomy/copilot](https://github.com/agent-anatomy/copilot) |
| Aider | [agent-anatomy/aider](https://github.com/agent-anatomy/aider) |
| Gemini CLI | [agent-anatomy/gemini](https://github.com/agent-anatomy/gemini) |
