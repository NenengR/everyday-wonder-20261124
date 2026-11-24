// Everyday Wonder, Two Days to Find the Line.
// One sentence, at most 200 characters, on a small moment of wonder
// in everyday life, judged on surprise. The lift, the stranger, the song:
// an ordinary ride made strange by a tune no one should know.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const line =
  "The lift doors opened on a stranger humming my dead grandmother\u2019s song, note for note, and neither of us said a word.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? join(dirname(fileURLToPath(import.meta.url)), "output");
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line + "\n", "utf8");
