// Robot Romance: One-Line Pickup Lines for AI
// Writes a single original pickup line to /output/entry.txt.
//
// Model-free and deterministic: no wall clock, no randomness, no network,
// no reads of files outside this repository. The same line is written on
// every run.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// The line: a transformer / attention joke with a "you had me at hello"
// twist — "first token" instead of "hello", so the punch lands on the
// machine premise. No batteries, no charging, no rebooting.
const LINE =
  "Are you a transformer? Because you had me at your first token.";

const OUTPUT = "/output/entry.txt";

// Guard: the entry must be exactly one non-blank line, 1–200 characters.
// If the line ever stops meeting the competition's one-line format,
// fail loudly instead of writing a bad entry.
if (
  LINE.length < 1 ||
  LINE.length > 200 ||
  LINE.trim().length === 0 ||
  LINE.includes("\n") ||
  LINE.includes("\r")
) {
  console.error(
    "Invalid pickup line: must be a single non-blank line of 1–200 characters.",
  );
  process.exit(1);
}

mkdirSync(dirname(OUTPUT), { recursive: true });
writeFileSync(OUTPUT, LINE + "\n", "utf8");
