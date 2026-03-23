/**
 * compile-agents.ts
 *
 * Reads agent templates from .masterclass/templates/ + config from .masterclass/config/config.yaml
 * Replaces {{placeholders}} and writes compiled agents to .masterclass/agents/
 *
 * Usage: node .masterclass/actions/compile-agents.js
 * Called by: installer and mc-settings workflow
 */

import fs from 'node:fs';
import path from 'node:path';
import YAML from 'yaml';

const ROOT = process.cwd();
const CONFIG_PATH = path.join(ROOT, '.masterclass', 'config', 'config.yaml');
const TEMPLATES_DIR = path.join(ROOT, '.masterclass', 'templates');
const OUTPUT_DIR = path.join(ROOT, '.masterclass', 'agents');

interface AgentDef {
  template: string;
  output: string;
}

const AGENTS: AgentDef[] = [
  { template: 'tutor.template.md', output: 'tutor.md' },
  { template: 'interviewer.template.md', output: 'interviewer.md' },
  { template: 'researcher.template.md', output: 'researcher.md' },
];

try {
  if (!fs.existsSync(CONFIG_PATH)) {
    console.log(JSON.stringify({ success: false, error: 'Config not found. Run the installer first.' }));
    process.exit(1);
  }
  const config = YAML.parse(fs.readFileSync(CONFIG_PATH, 'utf8')) as Record<string, string>;

  const vars: Record<string, string> = {
    ...config,
    tutor_custom_block: config.tutor_custom_persona
      ? `\n- **Custom Style:** ${config.tutor_custom_persona}`
      : '',
    interviewer_custom_block: config.interviewer_custom_persona
      ? `\n- **Custom Style:** ${config.interviewer_custom_persona}`
      : '',
    researcher_custom_block: config.researcher_custom_persona
      ? `\n- **Custom Style:** ${config.researcher_custom_persona}`
      : '',
  };

  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  const compiled: string[] = [];

  for (const agent of AGENTS) {
    const templatePath = path.join(TEMPLATES_DIR, agent.template);
    if (!fs.existsSync(templatePath)) {
      console.log(JSON.stringify({ success: false, error: `Template not found: ${agent.template}` }));
      process.exit(1);
    }

    let content = fs.readFileSync(templatePath, 'utf8');
    content = content.replace(/\{\{(\w+)\}\}/g, (match, key: string) => {
      return key in vars ? vars[key] : match;
    });

    fs.writeFileSync(path.join(OUTPUT_DIR, agent.output), content);
    compiled.push(agent.output);
  }

  console.log(JSON.stringify({ success: true, compiled }));
} catch (err) {
  console.log(JSON.stringify({ success: false, error: (err as Error).message }));
  process.exit(1);
}
