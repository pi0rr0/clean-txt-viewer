import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const root = new URL("../", import.meta.url);

test("includes the complete local-only Markdown workflow", async () => {
  const [page, css, layout, packageJson] = await Promise.all([
    readFile(new URL("app/page.tsx", root), "utf8"),
    readFile(new URL("app/globals.css", root), "utf8"),
    readFile(new URL("app/layout.tsx", root), "utf8"),
    readFile(new URL("package.json", root), "utf8"),
  ]);

  assert.match(page, /Clean TXT Viewer/);
  assert.match(page, /file\.text\(\)/);
  assert.match(page, /DOMPurify\.sanitize/);
  assert.match(page, /hljs\.highlight/);
  assert.match(page, /link\.target = "_blank"/);
  assert.match(page, /noopener noreferrer/);
  assert.match(page, /\.txt,\.md/);
  assert.match(page, /startIn: "downloads"/);
  assert.match(page, /reader-header__filename/);
  assert.doesNotMatch(page, /brand-mark|filename-icon/);
  assert.doesNotMatch(page, /fetch\(|localStorage|sessionStorage|indexedDB/);
  assert.match(css, /\.markdown-body table/);
  assert.match(css, /list-style: disc outside/);
  assert.match(css, /list-style: decimal outside/);
  assert.match(css, /text-decoration-line: underline/);
  assert.match(css, /\.markdown-body\.markdown-body > \* \+ \*/);
  assert.match(css, /prefers-reduced-motion/);
  assert.match(layout, /title: "Clean TXT Viewer"/);
  assert.doesNotMatch(layout, /codex-preview|_sites-preview/);
  assert.doesNotMatch(packageJson, /react-loading-skeleton/);
});
