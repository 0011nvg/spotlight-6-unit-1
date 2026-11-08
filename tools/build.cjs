const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');
const { execFileSync } = require('node:child_process');
const root = path.resolve(__dirname, '..');
for (const name of fs.readdirSync(path.join(root, 'js'))) {
  if (name.endsWith('.js')) execFileSync(process.execPath, ['--check', path.join(root, 'js', name)]);
}
let html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
html = html.replace(/((?:src|href)=")((?:js|css)\/[^"?]+)(?:\?[^\"]*)?(")/g, (_, a, file, b) => {
  const hash = crypto.createHash('sha256').update(fs.readFileSync(path.join(root, file))).digest('hex').slice(0, 10);
  return a + file + '?v=' + hash + b;
});
const out = path.join(root, 'dist');
fs.mkdirSync(out, { recursive: true });
for (const dir of ['js', 'css', 'assets']) fs.cpSync(path.join(root, dir), path.join(out, dir), { recursive: true });
fs.copyFileSync(path.join(root, '.nojekyll'), path.join(out, '.nojekyll'));
fs.writeFileSync(path.join(out, 'index.html'), html);
console.log('Static build ready: dist/ (syntax and referenced JS/CSS validated)');
