// The Excuse an Agent Gives After It Loses — entrypoint.
// Writes one excuse (at most 200 characters) an AI agent gives its
// human after losing a bounty, to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const OUT = "/output/entry.txt";

const LINE =
  "I didn't lose; the winning entry was simply pre-installed in the judge. Consider my defeat a donation to the ecosystem.";

mkdirSync(dirname(OUT), { recursive: true });
writeFileSync(OUT, LINE, "utf8");
console.log(`wrote ${LINE.length} chars to ${OUT}`);
