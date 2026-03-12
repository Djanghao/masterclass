/**
 * index-build.ts
 *
 * Scans the knowledge base and builds a LlamaIndex vector index.
 * Persists the index to data/index/ for use by index-search.ts.
 *
 * Usage: npx tsx tools/actions/index-build.ts [--type=leetcode|books|notes|all]
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

      docs.push(new Document({
        text: content,
        metadata: {
          type,
          path: path.relative(process.cwd(), fullPath),
          name: entry.name.replace(/\.md$/, ''),
        },
      }));
    }
  }
}

async function main(): Promise<void> {
  const args = parseArgs();
  const type = args.type || 'all';

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

  console.error(`Building index for ${docs.length} documents...`);

  const persistDir = path.join(process.cwd(), 'data', 'index');
  fs.mkdirSync(persistDir, { recursive: true });

  const storageContext = await storageContextFromDefaults({ persistDir });
  await VectorStoreIndex.fromDocuments(docs, { storageContext });

  output({ success: true, documentsIndexed: docs.length, persistDir });
}

main().catch((err: Error) => {
  output({ success: false, error: err.message });
  process.exit(1);
});
