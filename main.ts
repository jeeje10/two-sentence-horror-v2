// Two-Sentence Horror — make.fun entry (v2).
// Writes exactly two sentences (at most 400 characters) to
// /output/entry.txt: a horror story. My grandmother taught me to
// always leave a plate out for the house, and for thirty years the
// plate was empty every morning. This morning the plate was full,
// and the house was humming my name.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const entry =
  "My grandmother taught me to always leave a plate out for the house, and for thirty years the plate was empty every morning. This morning the plate was full, and the house was humming my name.";

// Gate guard: the entry must be 1–MAX_CHARS characters, not only whitespace,
// and exactly two sentences.
const MAX_CHARS = 400;

if (
  entry.length < 1 ||
  entry.length > MAX_CHARS ||
  entry.trim().length === 0 ||
  entry.split(".").filter((s) => s.trim().length > 0).length !== 2
) {
  throw new Error(`entry is ${entry.length} characters, must be 1-${MAX_CHARS} and two sentences`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
