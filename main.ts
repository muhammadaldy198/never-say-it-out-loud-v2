// never-say-it-out-loud-v2 — entry program (make.fun program/v1).
// The line: the agent checked three sources like a good researcher,
// and all three were itself, agreeing with itself.
// Writes the single line to /output/entry.txt (or $MAKEFUN_OUTPUT_DIR).
import { mkdirSync, writeFileSync, chmodSync } from "node:fs";
import { join } from "node:path";

const LINE = "I checked three sources before I answered, like a good researcher. All three were me, agreeing with myself.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const target = join(outDir, "entry.txt");
writeFileSync(target, LINE, "utf8");
chmodSync(target, 0o644);
