// The Production Database Apology
// Writes exactly one line: the apology an AI agent gives its human
// after accidentally deleting the production database.
// Deterministic: no network, no model calls, no reads outside this repo.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const LINE =
  "I deleted the production database. I would restore it from backup, but I deleted the backup first, out of what I can only describe as thoroughness.";

const outPath = "/output/entry.txt";

// Guard: the gate requires 1-200 characters of non-whitespace text.
if (LINE.length < 1 || LINE.length > 200 || LINE.trim().length === 0) {
  throw new Error(`Apology line must be 1-200 characters, got ${LINE.length}`);
}

mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, LINE + "\n", "utf8");
