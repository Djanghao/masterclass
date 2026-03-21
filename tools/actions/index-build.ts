/**
 * index-build.ts
 *
 * Scans the knowledge base and builds/updates per-category LlamaIndex vector indexes.
 * Categories are auto-discovered from subdirectories of the knowledge path.
 * Each category gets its own index at data/index/{category}/.
 *
 * Usage: npx tsx tools/actions/index-build.ts [--type=papers,leetcode-problems|all] [--rebuild]
 */

import fs from 'node:fs';
import path from 'node:path';
import {
  Document,
  VectorStoreIndex,
  storageContextFromDefaults,
  Settings,
} from 'llamaindex';
import { OpenAIEmbedding } from '@llamaindex/openai';
import { parseArgs, loadConfig, loadEnv, output } from './lib/config.js';

loadEnv();

function configureEmbeddings(): void {
  if (!process.env.OPENAI_API_KEY) {
    output({ success: false, error: 'OPENAI_API_KEY not set. Set it in your environment to build the index.' });
    process.exit(1);
  }
  Settings.embedModel = new OpenAIEmbedding({ model: 'text-embedding-3-small' });
}

function discoverCategories(knowledgePath: string): string[] {
  return fs.readdirSync(knowledgePath, { withFileTypes: true })
    .filter(d => d.isDirectory())
    .map(d => d.name);
}

function scanLeetcodeProblems(categoryPath: string): Document[] {
  const docs: Document[] = [];

  for (const subcategory of fs.readdirSync(categoryPath, { withFileTypes: true })) {
    if (!subcategory.isDirectory()) continue;
    const subcategoryPath = path.join(categoryPath, subcategory.name);

    for (const problem of fs.readdirSync(subcategoryPath, { withFileTypes: true })) {
      if (!problem.isDirectory()) continue;

      const match = problem.name.match(/^(\d+)_(\w+)_(.+)$/);
      if (!match) continue;

      const [, id, difficulty, slug] = match;
      const problemMdPath = path.join(subcategoryPath, problem.name, 'description', 'problem.md');
      if (!fs.existsSync(problemMdPath)) continue;

      const content = fs.readFileSync(problemMdPath, 'utf8');
      if (!content.trim()) continue;

      const relativePath = path.relative(process.cwd(), path.join(subcategoryPath, problem.name));

      docs.push(new Document({
        text: content,
        id_: relativePath,
        metadata: {
          category: subcategory.name,
          difficulty,
          id,
          slug,
          type: 'leetcode-problem',
          path: relativePath,
          name: slug.replace(/-/g, ' '),
        },
      }));
    }
  }

  return docs;
}

function scanMarkdownDir(dir: string, category: string, docs: Document[]): void {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      scanMarkdownDir(fullPath, category, docs);
    } else if (entry.name.endsWith('.md')) {
      const content = fs.readFileSync(fullPath, 'utf8');
      if (!content.trim()) continue;

      const relativePath = path.relative(process.cwd(), fullPath);
      const subdir = path.relative(path.join(process.cwd(), 'data', 'knowledge', category), path.dirname(fullPath));

      docs.push(new Document({
        text: content,
        id_: relativePath,
        metadata: {
          type: category,
          path: relativePath,
          name: entry.name.replace(/\.md$/, ''),
          category: subdir !== '.' ? subdir : undefined,
        },
      }));
    }
  }
}

function scanCategory(knowledgePath: string, category: string): Document[] {
  const categoryPath = path.join(knowledgePath, category);
  if (!fs.existsSync(categoryPath)) return [];

  if (category === 'leetcode-problems') {
    return scanLeetcodeProblems(categoryPath);
  }

  const docs: Document[] = [];
  scanMarkdownDir(categoryPath, category, docs);
  return docs;
}

interface CategoryResult {
  category: string;
  mode: 'full' | 'incremental';
  documentsIndexed?: number;
  inserted?: number;
  updated?: number;
  deleted?: number;
  unchanged?: number;
}

async function buildCategoryIndex(
  category: string,
  docs: Document[],
  indexBaseDir: string,
  rebuild: boolean,
): Promise<CategoryResult> {
  const persistDir = path.join(indexBaseDir, category);

  if (rebuild && fs.existsSync(persistDir)) {
    fs.rmSync(persistDir, { recursive: true });
    console.error(`  Removed old index for ${category} (--rebuild)`);
  }

  fs.mkdirSync(persistDir, { recursive: true });

  const storageContext = await storageContextFromDefaults({ persistDir });
  const hasExistingIndex = fs.existsSync(path.join(persistDir, 'doc_store.json'));

  if (!hasExistingIndex) {
    console.error(`  Building full index for ${category}: ${docs.length} documents...`);
    await VectorStoreIndex.fromDocuments(docs, { storageContext });
    return { category, mode: 'full', documentsIndexed: docs.length };
  }

  console.error(`  Updating ${category} incrementally...`);
  const index = await VectorStoreIndex.init({ storageContext });
  const docStore = storageContext.docStore;

  const existingRefs = await docStore.getAllRefDocInfo() ?? {};
  const existingIds = new Set(Object.keys(existingRefs));
  const currentIds = new Set(docs.map(d => d.id_));

  let inserted = 0, updated = 0, deleted = 0, unchanged = 0;

  for (const doc of docs) {
    const existingHash = await docStore.getDocumentHash(doc.id_);
    if (!existingHash) {
      await index.insert(doc);
      inserted++;
    } else if (existingHash !== doc.hash) {
      await index.deleteRefDoc(doc.id_, true);
      await index.insert(doc);
      updated++;
    } else {
      unchanged++;
    }
  }

  for (const oldId of existingIds) {
    if (!currentIds.has(oldId)) {
      await index.deleteRefDoc(oldId, true);
      deleted++;
    }
  }

  console.error(`  ${category}: inserted=${inserted} updated=${updated} deleted=${deleted} unchanged=${unchanged}`);
  return { category, mode: 'incremental', inserted, updated, deleted, unchanged };
}

async function main(): Promise<void> {
  const args = parseArgs();
  const typeArg = args.type || 'all';
  const rebuild = process.argv.includes('--rebuild');

  configureEmbeddings();

  let knowledgePath: string;
  try {
    const config = loadConfig();
    knowledgePath = path.resolve(config.knowledge_path || 'data/knowledge');
  } catch {
    knowledgePath = path.resolve('data/knowledge');
  }

  if (!fs.existsSync(knowledgePath)) {
    output({ success: false, error: `Knowledge path not found: ${knowledgePath}` });
    process.exit(1);
  }

  const allCategories = discoverCategories(knowledgePath);
  const requested = typeArg === 'all'
    ? allCategories
    : typeArg.split(',').map(s => s.trim()).filter(Boolean);

  const missing = requested.filter(c => !allCategories.includes(c));
  if (missing.length > 0) {
    output({ success: false, error: `Categories not found: ${missing.join(', ')}. Available: ${allCategories.join(', ')}` });
    process.exit(1);
  }

  console.error(`Knowledge path: ${knowledgePath}`);
  console.error(`Available categories: ${allCategories.join(', ')}`);
  console.error(`Building: ${requested.join(', ')}`);

  const indexBaseDir = path.join(process.cwd(), 'data', 'index');
  const results: CategoryResult[] = [];

  for (const category of requested) {
    const docs = scanCategory(knowledgePath, category);
    console.error(`Scanned ${docs.length} documents from ${category}`);

    if (docs.length === 0) {
      console.error(`  Skipping ${category}: no documents found`);
      continue;
    }

    const result = await buildCategoryIndex(category, docs, indexBaseDir, rebuild);
    results.push(result);
  }

  if (results.length === 0) {
    output({ success: false, error: 'No documents found to index in any requested category.' });
    process.exit(1);
  }

  output({ success: true, categories: results });
}

main().catch((err: Error) => {
  output({ success: false, error: err.message });
  process.exit(1);
});
