import fs from 'node:fs';
import path from 'node:path';
import YAML from 'yaml';

export interface MasterClassConfig {
  user_name: string;
  communication_language: string;
  document_output_language: string;
  tutor_name: string;
  tutor_persona_style: string;
  tutor_custom_persona: string;
  interviewer_name: string;
  interviewer_language: string;
  interviewer_persona_style: string;
  interviewer_custom_persona: string;
  lessons_path: string;
  progress_path: string;
  knowledge_path: string;
}

export function loadEnv(): void {
  const envPath = path.join(process.cwd(), '.masterclass', '.env');
  if (!fs.existsSync(envPath)) return;
  const content = fs.readFileSync(envPath, 'utf8');
  for (const line of content.split('\n')) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;
    const eqIdx = trimmed.indexOf('=');
    if (eqIdx === -1) continue;
    const key = trimmed.slice(0, eqIdx).trim();
    const value = trimmed.slice(eqIdx + 1).trim();
    if (!process.env[key]) process.env[key] = value;
  }
}

export function parseArgs(): Record<string, string> {
  const args: Record<string, string> = {};
  for (const arg of process.argv.slice(2)) {
    const match = arg.match(/^--(\w[\w-]*)=(.+)$/);
    if (match) args[match[1]] = match[2];
  }
  return args;
}

export function loadConfig(): MasterClassConfig {
  const configPath = path.join(process.cwd(), '.masterclass', 'config', 'config.yaml');
  if (!fs.existsSync(configPath)) {
    throw new Error('Config not found. Run the installer first.');
  }
  return YAML.parse(fs.readFileSync(configPath, 'utf8')) as MasterClassConfig;
}

export function output(data: Record<string, unknown>): void {
  console.log(JSON.stringify(data));
}
