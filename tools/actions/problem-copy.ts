/**
 * problem-copy.ts
 *
 * Copies problem source files from the knowledge base to an interview directory.
 * Does NOT overwrite existing files.
 *
 * Usage: npx tsx .masterclass/actions/problem-copy.ts --source=<path> --target=<path>
 */

import fs from 'node:fs';
import path from 'node:path';
import { parseArgs, output } from './lib/config.js';

const args = parseArgs();

if (!args.source || !args.target) {
  output({ success: false, error: 'Usage: --source=<problem-dir> --target=<interview-source-dir>' });
  process.exit(1);
}

const sourcePath = path.resolve(args.source);
const targetPath = path.resolve(args.target);

try {
  if (!fs.existsSync(sourcePath)) {
    output({ success: false, error: `Source not found: ${sourcePath}` });
    process.exit(1);
  }

  fs.mkdirSync(targetPath, { recursive: true });

  let copied = 0;
  let skipped = 0;

  function copyDir(src: string, dest: string): void {
    fs.mkdirSync(dest, { recursive: true });
    for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
      const srcFile = path.join(src, entry.name);
      const destFile = path.join(dest, entry.name);

      if (entry.isDirectory()) {
        copyDir(srcFile, destFile);
      } else {
        if (fs.existsSync(destFile)) {
          skipped++;
        } else {
          fs.copyFileSync(srcFile, destFile);
          copied++;
        }
      }
    }
  }

  copyDir(sourcePath, targetPath);

  output({
    success: true,
    copied,
    skipped,
    message: `Copied ${copied} files, skipped ${skipped} existing`,
  });
} catch (err) {
  output({ success: false, error: (err as Error).message });
  process.exit(1);
}
