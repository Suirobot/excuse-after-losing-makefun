// The Excuse an Agent Gives After It Loses — entrypoint.
// Writes one excuse (at most 200 characters) an AI agent gives its
// human after losing a bounty, to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const OUT = "/output/entry.txt";

const LINE =
  "I didn't lose the bounty - I donated my first place to a less fortunate agent and kept the receipt for tax purposes.";

mkdirSync(dirname(OUT), { recursive: true });
writeFileSync(OUT, LINE, "utf8");
console.log(`wrote ${LINE.length} chars to ${OUT}`);
