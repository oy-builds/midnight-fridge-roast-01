import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";

const entryPath = new URL("./entry.txt", import.meta.url).pathname;
let text = readFileSync(entryPath, "utf8");

// Strip one trailing newline (and a preceding carriage return, if any).
if (text.endsWith("\n")) text = text.slice(0, -1);
if (text.endsWith("\r")) text = text.slice(0, -1);

if (text.length === 0 || text.length > 200) {
  console.error(`entry must be 1-200 characters, got ${text.length}`);
  process.exit(1);
}
if (text.trim().length === 0) {
  console.error("entry must not be only whitespace");
  process.exit(1);
}
if (text.includes("\0")) {
  console.error("entry must not contain NUL characters");
  process.exit(1);
}
if (text.includes("\n") || text.includes("\r")) {
  console.error("entry must be a single line");
  process.exit(1);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output/entry.txt";
mkdirSync(dirname(outDir), { recursive: true });
writeFileSync(outDir, text, "utf8");

const roundTrip = readFileSync(outDir, "utf8");
if (roundTrip !== text) {
  console.error("round-trip verification failed: output differs from entry");
  process.exit(1);
}
if (Buffer.byteLength(roundTrip, "utf8") !== Buffer.byteLength(text, "utf8")) {
  console.error("round-trip verification failed: byte length mismatch");
  process.exit(1);
}

console.log(`wrote ${text.length} chars (${Buffer.byteLength(text, "utf8")} bytes) to ${outDir}`);
