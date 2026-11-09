const fs = require('fs');
const path = require('path');
const src = path.join(__dirname, '..', 'src', 'index.css');
const out = path.join(__dirname, '..', 'src', 'index.cleaned.css');
const text = fs.readFileSync(src, 'utf8');

function normalizePrelude(s) {
  return s.replace(/\s+/g, ' ').trim();
}

let i = 0;
const n = text.length;
let order = [];
const map = new Map();

// Capture any leading prologue (comments or whitespace before first rule)
let prologue = '';
let firstBrace = text.indexOf('{');
if (firstBrace > 0) {
  // find start of the prelude preceding first brace
  const before = text.slice(0, firstBrace);
  // if there's leading non-selector content (comments), keep as prologue until first rule start
  // we'll detect if before contains a selector by searching for a "}\n" prior; simple heuristic: if starts with comment or whitespace
  if (/^\s*(\/\*|\/\/|$)/.test(before) && before.includes('\n')) {
    // keep initial chunk until the first newline before the prelude
    // but simpler: keep everything up to the first selector start (we'll include it back when scanning blocks)
    // leave prologue empty to avoid duplication
  }
}

while (i < n) {
  // skip whitespace
  while (i < n && /[\s]/.test(text[i])) i++;
  if (i >= n) break;
  // find next open brace
  const open = text.indexOf('{', i);
  if (open === -1) break;
  const prelude = text.slice(i, open).trim();
  // find matching closing brace
  let depth = 0;
  let j = open;
  for (; j < n; j++) {
    if (text[j] === '{') depth++;
    else if (text[j] === '}') {
      depth--;
      if (depth === 0) break;
    }
  }
  if (j >= n) break;
  const block = text.slice(i, j + 1).trim();
  const key = normalizePrelude(prelude);
  if (map.has(key)) {
    // remove previous occurrence from order
    const idx = order.indexOf(key);
    if (idx !== -1) order.splice(idx, 1);
  }
  order.push(key);
  map.set(key, block);
  i = j + 1;
}

// Build output: join blocks in order of their last occurrence
let outText = '';
for (const key of order) {
  const block = map.get(key);
  outText += block + '\n\n';
}

fs.writeFileSync(out, outText.trim() + '\n', 'utf8');
console.log('Wrote cleaned CSS to', out);
