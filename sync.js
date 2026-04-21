#!/usr/bin/env node

/**
 * Reads AGENT.md and syncs it to every AI coding agent's expected config location.
 * No dependencies. Run with: node sync.js  OR  npx agent-sync
 */

const fs = require('fs');
const path = require('path');

const cwd = process.cwd();
const source = path.join(cwd, 'AGENT.md');

if (!fs.existsSync(source)) {
  console.error('AGENT.md not found in current directory.');
  process.exit(1);
}

const content = fs.readFileSync(source, 'utf8');

const targets = [
  // Claude Code
  { file: 'CLAUDE.md', label: 'Claude Code' },
  // OpenAI Codex
  { file: 'AGENTS.md', label: 'OpenAI Codex' },
  // Gemini CLI
  { file: 'GEMINI.md', label: 'Gemini CLI' },
  // Windsurf
  { file: '.windsurfrules', label: 'Windsurf' },
  // Cursor (legacy)
  { file: '.cursorrules', label: 'Cursor' },
  // GitHub Copilot
  { file: '.github/copilot-instructions.md', label: 'GitHub Copilot', mkdir: '.github' },
  // Aider
  { file: 'CONVENTIONS.md', label: 'Aider' },
];

const args = process.argv.slice(2);
const selected = args.length
  ? targets.filter(t => args.some(a => t.label.toLowerCase().includes(a.toLowerCase())))
  : targets;

if (!selected.length) {
  console.error(`No matching agents found for: ${args.join(', ')}`);
  console.error(`Available: ${targets.map(t => t.label).join(', ')}`);
  process.exit(1);
}

selected.forEach(({ file, label, mkdir }) => {
  if (mkdir) fs.mkdirSync(path.join(cwd, mkdir), { recursive: true });
  fs.writeFileSync(path.join(cwd, file), content);
  console.log(`✓ ${label.padEnd(20)} → ${file}`);
});

console.log(`\nSynced ${selected.length} agent config${selected.length > 1 ? 's' : ''} from AGENT.md`);
