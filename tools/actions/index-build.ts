/**
 * index-build.ts
 *
 * Scans the knowledge base and builds/updates a LlamaIndex vector index.
 * First run: full build. Subsequent runs: incremental (only changed/new/deleted docs).
 *
 * Usage: npx tsx tools/actions/index-build.ts [--type=leetcode|books|notes|all] [--rebuild]
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

function scanLeetcodeProblems(knowledgePath: string): Document[] {
  const leetcodePath = path.join(knowledgePath, 'leetcode-problems');
  if (!fs.existsSync(leetcodePath)) return [];

  const docs: Document[] = [];

  for (const category of fs.readdirSync(leetcodePath, { withFileTypes: true })) {
    if (!category.isDirectory()) continue;
    const categoryPath = path.join(leetcodePath, category.name);

    for (const problem of fs.readdirSync(categoryPath, { withFileTypes: true })) {
      if (!problem.isDirectory()) continue;

      const match = problem.name.match(/^(\d+)_(\w+)_(.+)$/);
      if (!match) continue;

      const [, id, difficulty, slug] = match;
      const problemMdPath = path.join(categoryPath, problem.name, 'description', 'problem.md');
      if (!fs.existsSync(problemMdPath)) continue;

      const content = fs.readFileSync(problemMdPath, 'utf8');
      if (!content.trim()) continue;

      const relativePath = path.relative(process.cwd(), path.join(categoryPath, problem.name));

      docs.push(new Document({
        text: content,
        id_: relativePath,
        metadata: {
          category: category.name,
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

function scanBooks(knowledgePath: string): Document[] {
  const booksPath = path.join(knowledgePath, 'books');
  if (!fs.existsSync(booksPath)) return [];

  const docs: Document[] = [];
  scanMarkdownDir(booksPath, 'book', docs);
  return docs;
}

function scanNotes(knowledgePath: string): Document[] {
  const notesPath = path.join(knowledgePath, 'notes');
  if (!fs.existsSync(notesPath)) return [];

  const docs: Document[] = [];
  scanMarkdownDir(notesPath, 'note', docs);
  return docs;
}

function scanMarkdownDir(dir: string, type: string, docs: Document[]): void {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      scanMarkdownDir(fullPath, type, docs);
    } else if (entry.name.endsWith('.md')) {
      const content = fs.readFileSync(fullPath, 'utf8');
      if (!content.trim()) continue;

      const relativePath = path.relative(process.cwd(), fullPath);

      docs.push(new Document({
        text: content,
        id_: relativePath,
        metadata: {
          type,
          path: relativePath,
          name: entry.name.replace(/\.md$/, ''),
        },
      }));
    }
  }
}

async function main(): Promise<void> {
  const args = parseArgs();
  const type = args.type || 'all';
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

  let docs: Document[] = [];
  const limit = args.limit ? parseInt(args.limit, 10) : 0;

  if (type === 'all' || type === 'leetcode') {
    const leetcodeDocs = scanLeetcodeProblems(knowledgePath);
    docs.push(...leetcodeDocs);
    console.error(`Scanned ${leetcodeDocs.length} LeetCode problems`);
  }

  if (type === 'all' || type === 'books') {
    const bookDocs = scanBooks(knowledgePath);
    docs.push(...bookDocs);
    console.error(`Scanned ${bookDocs.length} book entries`);
  }

  if (type === 'all' || type === 'notes') {
    const noteDocs = scanNotes(knowledgePath);
    docs.push(...noteDocs);
    console.error(`Scanned ${noteDocs.length} note entries`);
  }

  if (limit > 0 && docs.length > limit) {
    docs = docs.slice(0, limit);
    console.error(`Limited to ${limit} documents`);
  }

  if (docs.length === 0) {
    output({ success: false, error: 'No documents found to index.' });
    process.exit(1);
  }

  const persistDir = path.join(process.cwd(), 'data', 'index');

  if (rebuild && fs.existsSync(persistDir)) {
    fs.rmSync(persistDir, { recursive: true });
    console.error('Removed old index (--rebuild)');
  }

  fs.mkdirSync(persistDir, { recursive: true });

  const storageContext = await storageContextFromDefaults({ persistDir });
  const hasExistingIndex = fs.existsSync(path.join(persistDir, 'doc_store.json'));

  if (!hasExistingIndex) {
    console.error(`Building index for ${docs.length} documents...`);
    await VectorStoreIndex.fromDocuments(docs, { storageContext });
    output({ success: true, mode: 'full', documentsIndexed: docs.length, persistDir });
    return;
  }

  // Incremental update
  console.error('Updating index incrementally...');
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

  // Delete docs no longer on disk (only when scanning all types)
  if (type === 'all') {
    for (const oldId of existingIds) {
      if (!currentIds.has(oldId)) {
        await index.deleteRefDoc(oldId, true);
        deleted++;
      }
    }
  }

  console.error(`Inserted: ${inserted}, Updated: ${updated}, Deleted: ${deleted}, Unchanged: ${unchanged}`);
  output({ success: true, mode: 'incremental', inserted, updated, deleted, unchanged, persistDir });
}

main().catch((err: Error) => {
  output({ success: false, error: err.message });
  process.exit(1);
});
