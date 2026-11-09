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

while (i < n) {
  while (i < n && /[\s]/.test(text[i])) i++;
  if (i >= n) break;
  const open = text.indexOf('{', i);
  if (open === -1) break;
  const prelude = text.slice(i, open).trim();
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
    const idx = order.indexOf(key);
    if (idx !== -1) order.splice(idx, 1);
  }
  order.push(key);
  map.set(key, block);
  i = j + 1;
}

let outText = '';
for (const key of order) {
  const block = map.get(key);
  outText += block + '\n\n';
}

fs.writeFileSync(out, outText.trim() + '\n', 'utf8');
console.log('Wrote cleaned CSS to', out);
