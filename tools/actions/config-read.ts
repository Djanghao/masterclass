/**
 * config-read.ts
 *
 * Reads .masterclass/config/config.yaml and outputs JSON to stdout.
 * Usage: npx tsx .masterclass/actions/config-read.ts
 */

import { loadConfig, output } from './lib/config.js';

try {
  const config = loadConfig();
  output({ success: true, config });
} catch (err) {
  output({ success: false, error: (err as Error).message });
  process.exit(1);
}
