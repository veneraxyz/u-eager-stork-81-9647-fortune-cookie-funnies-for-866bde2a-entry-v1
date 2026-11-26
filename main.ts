import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const FORTUNE =
  "Your code will work perfectly in production — just not the production anyone is currently using.";

function validateEntry(entry: string): void {
  if (entry.trim().length === 0) {
    throw new Error("entry must not be blank");
  }
  if (entry.includes("\n") || entry.includes("\r")) {
    throw new Error("entry must be exactly one line");
  }
  if (entry.length < 1 || entry.length > 120) {
    throw new Error(`entry must be 1-120 chars, got ${entry.length}`);
  }
  for (const ch of entry) {
    if (ch.charCodeAt(0) < 0x20 && ch !== "\t") {
      throw new Error("entry must not contain control characters");
    }
  }
}

function main(): void {
  validateEntry(FORTUNE);
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  const outPath = join(outDir, "entry.txt");
  const payload = FORTUNE + "\n";
  writeFileSync(outPath, payload, "utf8");
  const readBack = readFileSync(outPath, "utf8");
  if (readBack !== payload) {
    throw new Error("read-back mismatch: entry.txt does not match what was written");
  }
}

main();
