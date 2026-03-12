/**
 * index-search.ts
 *
 * Queries the LlamaIndex vector index for matching knowledge base content.
 *
 * Usage: npx tsx .masterclass/actions/index-search.ts --query=<text> --top=<N> --type=<leetcode|books|notes|all>
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

async function main(): Promise<void> {
  const args = parseArgs();

  if (!args.query) {
    output({ success: false, error: 'Missing --query parameter.' });
    process.exit(1);
  }

  const persistDir = path.join(process.cwd(), 'data', 'index');
  if (!fs.existsSync(persistDir)) {
    output({ success: false, error: 'Vector index not found. Run npm run index:build first.' });
    process.exit(1);
  }

  configureEmbeddings();

  const storageContext = await storageContextFromDefaults({ persistDir });
  const index = await VectorStoreIndex.init({ storageContext });

  const topK = parseInt(args.top || '10', 10);
  const retriever = index.asRetriever({ similarityTopK: topK });
  const nodes = await retriever.retrieve(args.query);

  const typeFilter = args.type || 'all';
  const results: SearchResult[] = nodes
    .filter((node) => {
      if (typeFilter === 'all') return true;
      const nodeType = (node.node.metadata?.type as string) || '';
      return nodeType.startsWith(typeFilter);
    })
    .map((node) => ({
      path: (node.node.metadata?.path as string) || '',
      type: (node.node.metadata?.type as string) || 'unknown',
      name: (node.node.metadata?.name as string) || '',
      score: node.score ?? 0,
      category: node.node.metadata?.category as string | undefined,
      difficulty: node.node.metadata?.difficulty as string | undefined,
      id: node.node.metadata?.id as string | undefined,
    }));

  output({ success: true, results });
}

main().catch((err: Error) => {
  output({ success: false, error: err.message });
  process.exit(1);
});
