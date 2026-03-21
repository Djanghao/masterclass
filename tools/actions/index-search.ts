/**
 * index-search.ts
 *
 * Queries per-category LlamaIndex vector indexes.
 * Supports comma-separated types to search multiple categories in parallel,
 * retrieving top K from each and merging results by score.
 *
 * Usage: npx tsx .masterclass/actions/index-search.ts --query=<text> --top=<N> --type=<papers,leetcode-problems|all>
 */

import fs from 'node:fs';
import path from 'node:path';
import {
  VectorStoreIndex,
  storageContextFromDefaults,
  Settings,
} from 'llamaindex';
import { OpenAIEmbedding } from '@llamaindex/openai';
import { parseArgs, loadEnv, output } from './lib/config.js';

loadEnv();

interface SearchResult {
  path: string;
  type: string;
  name: string;
  score: number;
  category?: string;
  difficulty?: string;
  id?: string;
}

function configureEmbeddings(): void {
  if (!process.env.OPENAI_API_KEY) {
    output({ success: false, error: 'OPENAI_API_KEY not set.' });
    process.exit(1);
  }
  Settings.embedModel = new OpenAIEmbedding({ model: 'text-embedding-3-small' });
}

function discoverIndexedCategories(indexBaseDir: string): string[] {
  if (!fs.existsSync(indexBaseDir)) return [];
  return fs.readdirSync(indexBaseDir, { withFileTypes: true })
    .filter(d => d.isDirectory() && fs.existsSync(path.join(indexBaseDir, d.name, 'doc_store.json')))
    .map(d => d.name);
}

async function searchCategory(
  category: string,
  query: string,
  topK: number,
  indexBaseDir: string,
): Promise<SearchResult[]> {
  const persistDir = path.join(indexBaseDir, category);
  if (!fs.existsSync(path.join(persistDir, 'doc_store.json'))) return [];

  const storageContext = await storageContextFromDefaults({ persistDir });
  const index = await VectorStoreIndex.init({ storageContext });
  const retriever = index.asRetriever({ similarityTopK: topK });
  const nodes = await retriever.retrieve(query);

  return nodes.map((node) => ({
    path: (node.node.metadata?.path as string) || '',
    type: (node.node.metadata?.type as string) || category,
    name: (node.node.metadata?.name as string) || '',
    score: node.score ?? 0,
    category: node.node.metadata?.category as string | undefined,
    difficulty: node.node.metadata?.difficulty as string | undefined,
    id: node.node.metadata?.id as string | undefined,
  }));
}

async function main(): Promise<void> {
  const args = parseArgs();

  if (!args.query) {
    output({ success: false, error: 'Missing --query parameter.' });
    process.exit(1);
  }

  const indexBaseDir = path.join(process.cwd(), 'data', 'index');
  const available = discoverIndexedCategories(indexBaseDir);

  if (available.length === 0) {
    output({ success: false, error: 'No indexes found. Run npm run index:build first.' });
    process.exit(1);
  }

  configureEmbeddings();

  const typeArg = args.type || 'all';
  const requested = typeArg === 'all'
    ? available
    : typeArg.split(',').map(s => s.trim()).filter(Boolean);

  const valid = requested.filter(c => available.includes(c));
  if (valid.length === 0) {
    output({ success: false, error: `No matching indexes. Requested: ${requested.join(', ')}. Available: ${available.join(', ')}` });
    process.exit(1);
  }

  const topK = parseInt(args.top || '5', 10);

  const allResults = await Promise.all(
    valid.map(category => searchCategory(category, args.query, topK, indexBaseDir))
  );

  const merged = allResults
    .flat()
    .sort((a, b) => b.score - a.score);

  output({ success: true, searched: valid, available, results: merged });
}

main().catch((err: Error) => {
  output({ success: false, error: err.message });
  process.exit(1);
});
