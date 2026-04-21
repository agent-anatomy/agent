# agent

> One config folder for every AI coding agent.

Write your project instructions once in `.agent/`. Sync to Claude Code, Cursor, Codex, Windsurf, Copilot, Aider, Gemini — in one command.

Part of [agent-anatomy](https://github.com/agent-anatomy) — boilerplates for every AI coding agent.

---

## The problem

Every AI coding agent reads from a different file:

| Agent | Reads from |
|-------|-----------|
| Claude Code | `CLAUDE.md` + `.claude/` |
| OpenAI Codex | `AGENTS.md` |
| Gemini CLI | `GEMINI.md` |
| Windsurf | `.windsurfrules` |
| Cursor | `.cursorrules` |
| GitHub Copilot | `.github/copilot-instructions.md` |
| Aider | `CONVENTIONS.md` |

Same content. Seven files. One change = seven edits.

---

## The solution

`.agent/` is the universal control center. One folder. Any agent.

```
.agent/
├── agent.md                    ← main instructions (edit this)
├── agent.local.md.example      → copy → agent.local.md (gitignored)
├── settings.json               ← permissions + config
├── settings.local.json.example → copy → settings.local.json (gitignored)
├── commands/
│   ├── review.md               ← review staged changes
│   ├── fix-issue.md            ← fix a bug
│   └── deploy.md               ← pre-deploy checklist
├── rules/
│   ├── code-style.md           ← coding conventions
│   ├── testing.md              ← test rules
│   └── api-conventions.md      ← API patterns
└── agents/
    ├── code-reviewer.md        ← strict review persona
    └── security-auditor.md     ← security audit persona
```

---

## Usage

```bash
# 1. Clone into your project
git clone https://github.com/agent-anatomy/agent .agent-boilerplate
cp -r .agent-boilerplate/.agent ./.agent
rm -rf .agent-boilerplate

# 2. Edit .agent/agent.md — fill in your project details

# 3. Sync to all agents
npx @agent-anatomy/agent

# Or sync to specific agents only
npx @agent-anatomy/agent claude
npx @agent-anatomy/agent cursor codex
npx @agent-anatomy/agent windsurf copilot aider

# Dry run — see what would be written without writing
npx @agent-anatomy/agent --dry-run
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

All files are plain copies of `.agent/agent.md`. Edit once, sync everywhere.

---

## What to commit vs gitignore

Commit `.agent/` (except local overrides). The generated files are optional.

```gitignore
# personal overrides — never commit
.agent/agent.local.md
.agent/settings.local.json

# optional: ignore generated agent configs if you prefer single source
CLAUDE.md
AGENTS.md
GEMINI.md
.windsurfrules
.cursorrules
.github/copilot-instructions.md
CONVENTIONS.md
```

---

## Agent-specific features

`.agent/` covers the universal 80%: project context, commands, rules, personas.

For agent-specific features (Claude's `settings.json` permissions, Cursor's `.mdc` rule types, Aider's `.aider.conf.yml`) — use the individual boilerplates:

| Agent | Full boilerplate |
|-------|-----------------|
| Claude Code | [agent-anatomy/claude](https://github.com/agent-anatomy/claude) |
| Cursor | [agent-anatomy/cursor](https://github.com/agent-anatomy/cursor) |
| OpenAI Codex | [agent-anatomy/codex](https://github.com/agent-anatomy/codex) |
| Windsurf | [agent-anatomy/windsurf](https://github.com/agent-anatomy/windsurf) |
| GitHub Copilot | [agent-anatomy/copilot](https://github.com/agent-anatomy/copilot) |
| Aider | [agent-anatomy/aider](https://github.com/agent-anatomy/aider) |
| Gemini CLI | [agent-anatomy/gemini](https://github.com/agent-anatomy/gemini) |
