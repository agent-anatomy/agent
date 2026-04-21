#!/usr/bin/env node

/**
 * Reads .agent/agent.md and syncs it to every AI coding agent's expected config location.
 * No dependencies. Run with: node sync.js  OR  npx @agent-anatomy/agent
 */

const fs = require('fs');
const path = require('path');

const cwd = process.cwd();
const source = path.join(cwd, '.agent', 'agent.md');

if (!fs.existsSync(source)) {
  console.error('Error: .agent/agent.md not found in current directory.');
  console.error('Clone the boilerplate: https://github.com/agent-anatomy/agent');
  process.exit(1);
}

const content = fs.readFileSync(source, 'utf8');

const targets = [
  { file: 'CLAUDE.md',                             label: 'Claude Code'    },
  { file: 'AGENTS.md',                             label: 'OpenAI Codex'   },
  { file: 'GEMINI.md',                             label: 'Gemini CLI'     },
  { file: '.windsurfrules',                        label: 'Windsurf'       },
  { file: '.cursorrules',                          label: 'Cursor'         },
  { file: '.github/copilot-instructions.md',       label: 'Copilot', mkdir: '.github' },
  { file: 'CONVENTIONS.md',                        label: 'Aider'          },
];

const args = process.argv.slice(2).filter(a => !a.startsWith('--'));
const dryRun = process.argv.includes('--dry-run');

const selected = args.length
  ? targets.filter(t => args.some(a => t.label.toLowerCase().includes(a.toLowerCase())))
  : targets;

if (!selected.length) {
  console.error(`No matching agents for: ${args.join(', ')}`);
  console.error(`Available: ${targets.map(t => t.label).join(', ')}`);
  process.exit(1);
}

console.log(`Source: .agent/agent.md${dryRun ? ' (dry run)' : ''}\n`);

selected.forEach(({ file, label, mkdir }) => {
  if (!dryRun) {
    if (mkdir) fs.mkdirSync(path.join(cwd, mkdir), { recursive: true });
    fs.writeFileSync(path.join(cwd, file), content);
  }
  console.log(`✓ ${label.padEnd(20)} → ${file}`);
});

console.log(`\n${dryRun ? 'Would sync' : 'Synced'} ${selected.length} agent config${selected.length > 1 ? 's' : ''}`);
