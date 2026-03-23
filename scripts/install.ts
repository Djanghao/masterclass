import * as p from '@clack/prompts';
import fs from 'node:fs';
import path from 'node:path';
import { execSync } from 'node:child_process';
import YAML from 'yaml';

const ROOT = process.cwd();
const SRC = path.join(ROOT, 'src');
const SCRIPTS = path.join(ROOT, 'scripts');
const OUTPUT = path.join(ROOT, '.masterclass');

// ── Types ────────────────────────────────────────────────────────────
interface Command {
  name: string;
  desc: string;
  path: string;
  args: boolean;
}

interface Platform {
  name: string;
  target_dir: string;
  template_type: string;
  skill_format?: boolean;
  filename: string;
}

interface UserConfig {
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

// ── Command registry ────────────────────────────────────────────────
const COMMANDS: Command[] = [
  { name: 'mc-start', desc: 'Initialize MasterClass session and select an agent', path: '0-start/start', args: false },
  { name: 'mc-course-plan', desc: 'Create or adjust course roadmap', path: '1-setup/course-plan', args: false },
  { name: 'mc-lesson-plan', desc: 'Plan a specific lesson', path: '2-teaching/lesson-plan', args: true },
  { name: 'mc-lesson-teach', desc: 'Interactive teaching session', path: '2-teaching/lesson-teach', args: true },
  { name: 'mc-interview-run', desc: 'Run mock interview', path: '3-interview/interview-run', args: true },
  { name: 'mc-context', desc: 'Update learner profile', path: 'shared/context', args: false },
  { name: 'mc-settings', desc: 'View and modify settings', path: '4-maintenance/settings', args: false },
  { name: 'mc-help', desc: 'Detect project state and suggest next steps', path: 'shared/help', args: false },
];

// ── Runtime dependencies for .masterclass/package.json ──────────────
const RUNTIME_DEPS = {
  yaml: '^2.7.1',
};

// ── Embedding model options ─────────────────────────────────────────
const EMBED_MODELS: Record<string, { name: string; dim: number; min_gpu_gb: number; multilingual: boolean; description: string }> = {
  'bge-m3': {
    name: 'BAAI/bge-m3',
    dim: 1024,
    min_gpu_gb: 2.0,
    multilingual: true,
    description: 'Multilingual (zh/en/ja/ko), 1024 dim, ~2GB — best quality',
  },
  'bge-small-en': {
    name: 'BAAI/bge-small-en-v1.5',
    dim: 384,
    min_gpu_gb: 0.5,
    multilingual: false,
    description: 'English only, 384 dim, ~130MB — fast and lightweight',
  },
};

const PYTHON_DEPS = [
  'llama-index-core',
  'llama-index-readers-file',
  'llama-index-embeddings-huggingface',
  'llama-index-vector-stores-faiss',
  'llama-index-retrievers-bm25',
  'faiss-cpu',
  'sentence-transformers',
  'pymupdf',
];

// ── Helpers ──────────────────────────────────────────────────────────
function ensureDir(dir: string): void {
  fs.mkdirSync(dir, { recursive: true });
}

function copyDirRecursive(src: string, dest: string): void {
  ensureDir(dest);
  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      copyDirRecursive(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

function renderTemplate(template: string, vars: Record<string, string>): string {
  let result = template;
  for (const [key, value] of Object.entries(vars)) {
    result = result.replaceAll(`{{${key}}}`, value);
  }
  return result;
}

// ── Main ─────────────────────────────────────────────────────────────
async function main(): Promise<void> {
  p.intro('🎓 MasterClass Installer');

  // Check for existing installation
  const configPath = path.join(OUTPUT, 'config', 'config.yaml');
  if (fs.existsSync(configPath)) {
    const overwrite = await p.confirm({
      message: 'Existing installation detected. Overwrite config?',
      initialValue: false,
    });
    if (p.isCancel(overwrite)) { p.cancel('Installation cancelled.'); process.exit(0); }
    if (!overwrite) {
      p.log.info('Keeping existing config. Reinstalling files...');
      const config = YAML.parse(fs.readFileSync(configPath, 'utf8')) as UserConfig;
      // Read existing model choice or default
      const modelConfigPath = path.join(ROOT, 'data', '.index', 'model.json');
      let existingModel = 'bge-m3';
      if (fs.existsSync(modelConfigPath)) {
        try { existingModel = JSON.parse(fs.readFileSync(modelConfigPath, 'utf8')).model; } catch {}
      }
      await installFiles(config, existingModel);
      p.outro('✅ Reinstall complete.');
      return;
    }
  }

  // ── Collect user config ───────────────────────────────────────────
  const config = await p.group({
    user_name: () => p.text({
      message: 'What should agents call you?',
      placeholder: 'your name',
      validate: (v) => v.length === 0 ? 'Name is required' : undefined,
    }),
    communication_language: () => p.text({
      message: 'Communication language (agents speak this)',
      initialValue: '中文',
    }),
    document_output_language: () => p.text({
      message: 'Document output language',
      initialValue: 'English',
    }),
    tutor_name: () => p.text({
      message: 'Name your Tutor agent',
      initialValue: 'Alex',
    }),
    tutor_persona_style: () => p.select({
      message: 'Tutor teaching style',
      options: [
        { value: 'patient', label: 'Patient — step-by-step, encouraging' },
        { value: 'strict', label: 'Strict — direct, high expectations' },
        { value: 'socratic', label: 'Socratic — questions that lead to discovery' },
        { value: 'custom', label: 'Custom — describe your own style' },
      ],
    }),
    tutor_custom_persona: ({ results }) => {
      if (results.tutor_persona_style !== 'custom') return Promise.resolve('');
      return p.text({ message: 'Describe your custom tutor style' });
    },
    interviewer_name: () => p.text({
      message: 'Name your Interviewer agent',
      initialValue: 'Jordan',
    }),
    interviewer_language: () => p.text({
      message: 'Interview language',
      initialValue: 'English',
    }),
    interviewer_persona_style: () => p.select({
      message: 'Interviewer style',
      options: [
        { value: 'friendly', label: 'Friendly — supportive, clear hints' },
        { value: 'realistic', label: 'Realistic — like a real FAANG interview' },
        { value: 'custom', label: 'Custom — describe your own style' },
      ],
    }),
    interviewer_custom_persona: ({ results }) => {
      if (results.interviewer_persona_style !== 'custom') return Promise.resolve('');
      return p.text({ message: 'Describe your custom interviewer style' });
    },
    lessons_path: () => p.text({
      message: 'Course content directory',
      initialValue: 'docs/course',
    }),
    progress_path: () => p.text({
      message: 'Progress tracking directory',
      initialValue: 'docs/progress',
    }),
    knowledge_path: () => p.text({
      message: 'Knowledge base directory',
      initialValue: 'data/knowledge',
    }),
  }, {
    onCancel: () => { p.cancel('Installation cancelled.'); process.exit(0); },
  }) as UserConfig;

  // ── Embedding model selection ──────────────────────────────────
  const embedModel = await p.select({
    message: 'Embedding model for knowledge base search',
    options: Object.entries(EMBED_MODELS).map(([key, m]) => ({
      value: key,
      label: `${key} — ${m.description}`,
    })),
  });
  if (p.isCancel(embedModel)) { p.cancel('Installation cancelled.'); process.exit(0); }

  // ── Write config ──────────────────────────────────────────────────
  ensureDir(path.join(OUTPUT, 'config'));
  fs.writeFileSync(configPath, YAML.stringify(config, { indent: 2, lineWidth: 0 }));
  p.log.success('Config saved to .masterclass/config/config.yaml');

  await installFiles(config, embedModel as string);
  p.outro('✅ MasterClass installed. Run /mc-start to begin.');
}

// ── Install files ────────────────────────────────────────────────────
async function installFiles(config: UserConfig, embedModel: string): Promise<void> {
  const spinner = p.spinner();

  // 1. Copy source files to .masterclass/
  spinner.start('Copying source files...');

  // engine.xml
  fs.copyFileSync(
    path.join(SRC, 'engine.xml'),
    path.join(OUTPUT, 'engine.xml'),
  );

  // workflows
  const workflowsSrc = path.join(SRC, 'workflows');
  if (fs.existsSync(workflowsSrc)) {
    copyDirRecursive(workflowsSrc, path.join(OUTPUT, 'workflows'));
  }

  // agent templates → .masterclass/templates/
  const templatesSrc = path.join(SRC, 'agents');
  if (fs.existsSync(templatesSrc)) {
    copyDirRecursive(templatesSrc, path.join(OUTPUT, 'templates'));
  }

  spinner.stop('Source files copied.');

  // 2. Compile action scripts (TS → JS)
  spinner.start('Compiling action scripts...');
  execSync('npx tsc -p tsconfig.actions.json', { cwd: ROOT, stdio: 'pipe' });
  spinner.stop('Action scripts compiled.');

  // 3. Install runtime dependencies in .masterclass/
  spinner.start('Installing runtime dependencies...');

  const runtimePkg = {
    name: 'masterclass-runtime',
    type: 'module',
    private: true,
    dependencies: RUNTIME_DEPS,
  };
  fs.writeFileSync(
    path.join(OUTPUT, 'package.json'),
    JSON.stringify(runtimePkg, null, 2) + '\n',
  );
  execSync('npm install', { cwd: OUTPUT, stdio: 'pipe' });

  spinner.stop('Runtime dependencies installed.');

  // 4. Compile agents (using the newly installed runtime)
  spinner.start('Compiling agents...');
  const compileAgents = path.join(OUTPUT, 'actions', 'js', 'compile-agents.js');
  if (fs.existsSync(compileAgents)) {
    execSync(`node "${compileAgents}"`, { cwd: ROOT, stdio: 'pipe' });
    spinner.stop('Agents compiled.');
  } else {
    spinner.stop('Agent compiler not found. Skipping.');
  }

  // 5. Generate IDE skill files
  spinner.start('Generating IDE skill files...');

  const platformCodesPath = path.join(SCRIPTS, 'ide', 'platform-codes.yaml');
  const platforms = YAML.parse(fs.readFileSync(platformCodesPath, 'utf8')) as Record<string, Platform>;

  for (const [, platform] of Object.entries(platforms)) {
    if (typeof platform !== 'object' || !platform.target_dir) continue;

    const templatePath = path.join(SCRIPTS, 'ide', 'templates', `${platform.template_type}-workflow.md`);
    if (!fs.existsSync(templatePath)) {
      p.log.warn(`Template not found for ${platform.name}: ${templatePath}`);
      continue;
    }
    const template = fs.readFileSync(templatePath, 'utf8');

    for (const cmd of COMMANDS) {
      const rendered = renderTemplate(template, {
        name: cmd.name,
        description: cmd.desc,
        workflow_rel_path: cmd.path,
        args_line: cmd.args ? 'Pass parameter: $ARGUMENTS' : '',
      });

      if (platform.skill_format) {
        const skillDir = path.join(ROOT, platform.target_dir, cmd.name);
        ensureDir(skillDir);
        fs.writeFileSync(path.join(skillDir, platform.filename), rendered.trimEnd() + '\n');
      } else {
        ensureDir(path.join(ROOT, platform.target_dir));
        fs.writeFileSync(path.join(ROOT, platform.target_dir, `${cmd.name}.md`), rendered.trimEnd() + '\n');
      }
    }

    p.log.success(`${platform.name} skills generated in ${platform.target_dir}/`);
  }

  spinner.stop('IDE skill files generated.');

  // 6. Set up Python venv for knowledge base
  spinner.start('Setting up Python environment...');
  const venvPath = path.join(OUTPUT, 'venv');
  if (!fs.existsSync(path.join(venvPath, 'bin', 'python'))) {
    execSync(`python3 -m venv "${venvPath}"`, { cwd: ROOT, stdio: 'pipe' });
  }
  const pip = path.join(venvPath, 'bin', 'pip');

  // Detect CUDA and install matching torch (GPU wheel from PyTorch index, CPU fallback)
  const cpuIndex = 'https://download.pytorch.org/whl/cpu';
  let torchIndex = cpuIndex;
  let cudaLabel = 'CPU-only';
  try {
    const smiHeader = execSync('nvidia-smi', { stdio: 'pipe' }).toString();
    const cudaMatch = smiHeader.match(/CUDA Version:\s*(\d+)\.(\d+)/);
    if (cudaMatch) {
      const major = parseInt(cudaMatch[1], 10);
      if (major >= 12) {
        torchIndex = 'https://download.pytorch.org/whl/cu126';
        cudaLabel = `CUDA ${cudaMatch[1]}.${cudaMatch[2]} → cu126`;
      } else if (major === 11) {
        torchIndex = 'https://download.pytorch.org/whl/cu118';
        cudaLabel = `CUDA ${cudaMatch[1]}.${cudaMatch[2]} → cu118`;
      }
    }
  } catch {}

  p.log.info(`Installing torch (${cudaLabel})`);
  try {
    execSync(`"${pip}" install -q torch --index-url ${torchIndex}`, { cwd: ROOT, stdio: 'pipe', timeout: 600000 });
  } catch {
    if (torchIndex !== cpuIndex) {
      p.log.warn('GPU torch install failed, falling back to CPU-only');
      execSync(`"${pip}" install -q torch --index-url ${cpuIndex}`, { cwd: ROOT, stdio: 'pipe', timeout: 600000 });
    } else {
      throw new Error('Failed to install torch');
    }
  }
  execSync(`"${pip}" install -q ${PYTHON_DEPS.join(' ')}`, { cwd: ROOT, stdio: 'pipe', timeout: 600000 });
  spinner.stop('Python environment ready.');

  // 7. Copy KB scripts to .masterclass/actions/py/
  spinner.start('Copying knowledge base scripts...');
  const kbSrc = path.join(SRC, 'actions', 'py');
  const kbDest = path.join(OUTPUT, 'actions', 'py');
  ensureDir(kbDest);
  for (const file of ['device.py', 'build.py', 'search.py']) {
    fs.copyFileSync(path.join(kbSrc, file), path.join(kbDest, file));
  }
  spinner.stop('Knowledge base scripts copied.');

  // 8. Save embedding model config
  const indexDir = path.join(ROOT, 'data', '.index');
  ensureDir(indexDir);
  fs.writeFileSync(
    path.join(indexDir, 'model.json'),
    JSON.stringify({ model: embedModel }, null, 2) + '\n',
  );
  p.log.success(`Embedding model: ${embedModel} (${EMBED_MODELS[embedModel].description})`);

  // 9. Create user content directories
  const lessonsPath = config.lessons_path || 'docs/course';
  const progressPath = config.progress_path || 'docs/progress';
  ensureDir(path.join(ROOT, lessonsPath));
  ensureDir(path.join(ROOT, progressPath));

  const lcPath = path.join(ROOT, progressPath, 'learning-context.md');
  if (!fs.existsSync(lcPath)) {
    fs.writeFileSync(lcPath, '');
  }

  p.log.success('Directory structure ready.');
}

main().catch((err: Error) => {
  p.cancel(`Error: ${err.message}`);
  process.exit(1);
});
