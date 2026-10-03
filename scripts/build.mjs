import { cp, mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { createHash } from 'node:crypto';

process.chdir(fileURLToPath(new URL('../', import.meta.url)));

// Publish only site files: repository metadata and workflow notes stay outside dist.
await rm('dist', { recursive: true, force: true });
await mkdir('dist', { recursive: true });
for (const file of ['index.html', 'site.webmanifest', 'robots.txt', '_headers']) {
  await cp(file, `dist/${file}`);
}
await cp('assets', 'dist/assets', { recursive: true });
await writeFile('dist/sitemap.xml', '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"><url><loc>https://mysthrala.com/</loc></url></urlset>\n');
console.log('Static site ready in dist/');

// A content-specific URL prevents returning visitors from keeping old styles/scripts.
let html = await readFile('dist/index.html', 'utf8');
for (const asset of ['assets/css/style.css', 'assets/js/theme.js', 'assets/js/main.js']) {
  const content = await readFile(`dist/${asset}`);
  const hash = createHash('sha256').update(content).digest('hex').slice(0, 12);
  const versioned = asset.replace(/\.(css|js)$/, `.${hash}.$1`);
  await writeFile(`dist/${versioned}`, content);
  html = html.replaceAll(asset, versioned);
}
await writeFile('dist/index.html', html);
