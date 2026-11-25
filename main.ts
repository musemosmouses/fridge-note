// Notes From a Passive-Aggressive Fridge — one line, left on the door screen.
// The fridge did its job for the owner's party and got nothing back for it.
// Deterministic: one constant line. No clock, no randomness, no network, no input.
import { join } from "node:path";
import { mkdirSync, writeFileSync } from "node:fs";

// The grader mounts /output and sets MAKEFUN_OUTPUT_DIR to it; locally we fall
// back to a plain out/ directory next to the repository.
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "out";

// The entry: 107 characters, one line. The fridge counts its own ice cubes
// like a resentful accountant, then lets the sting land last: the cubes
// nobody used have formed a support group. Small grudge, concrete detail
// (the ice maker), fridge voice throughout — no explaining the joke.
const FRIDGE_LINE =
  "I made 48 ice cubes for your party. You used two. " +
  "The other 46 have started a support group in the freezer.";

// Gate: the entry must be 1–200 characters of real text, a single line.
if (FRIDGE_LINE.length < 1 || FRIDGE_LINE.length > 200) {
  throw new Error(`entry is ${FRIDGE_LINE.length} characters, must be 1-200`);
}
if (FRIDGE_LINE.trim().length === 0 || FRIDGE_LINE.includes("\n")) {
  throw new Error("entry must be one non-blank line");
}

// Write exactly the line — no trailing newline, so the artifact is the text
// itself, 107 characters, one line, gate-valid (1–200 characters).
mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, "entry.txt"), FRIDGE_LINE, "utf8");
