// Erstellt Portfolio-Screenshots der Kundenprojekte (lokal, über einen Mini-Server) → src/assets/work/
// Aufruf: npm run screenshots [slug …]
import puppeteer from 'puppeteer-core';
import http from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { extname, join, resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const CHROME = 'C:/Program Files/Google/Chrome/Application/chrome.exe';
const OUT = resolve(dirname(fileURLToPath(import.meta.url)), '../src/assets/work');
const VAULT = 'C:/Users/Simon/Documents/Obsidian Vault/02 Projekte';
const PROJECTS = [
  // Astro-Seite mit Unterpfad: direkt von der Vorschau-Adresse statt über den Mini-Server
  { slug: 'hildes-pfotenkueche', url: 'https://simontscc.github.io/hildes-pfotenkueche/' },
  { slug: 'srh-wheels', root: `${VAULT}/Website/V2` },
  { slug: 'flame-n-go', root: 'C:/Users/Simon/Documents/Obsidian Vault/02 Projekte/Flame n Go/Code/dist' },
  { slug: 'paul-scheifel', root: `${VAULT}/Paul Scheifel` },
  { slug: 'schuetzen-liga', root: 'C:/Users/Simon/Documents/Obsidian Vault/02 Projekte/Schuss-Tracker/schuetzen-liga-ergebnisse-v2', mobile: true },
  { slug: 'schuetzen-vm', root: 'C:/Users/Simon/Documents/Obsidian Vault/02 Projekte/Vereinsmeisterschaft/schuetzen-vereinsmeisterschaft', mobile: true },
];
const TYPES = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.png': 'image/png', '.jpg': 'image/jpeg',
  '.webp': 'image/webp', '.svg': 'image/svg+xml', '.woff2': 'font/woff2', '.woff': 'font/woff', '.mp4': 'video/mp4', '.json': 'application/json' };

function serve(root) {
  const srv = http.createServer(async (req, res) => {
    let p = join(root, decodeURIComponent(new URL(req.url, 'http://x').pathname));
    try { if ((await stat(p)).isDirectory()) p = join(p, 'index.html'); res.writeHead(200, { 'content-type': TYPES[extname(p)] || 'application/octet-stream' }); res.end(await readFile(p)); }
    catch { res.writeHead(404); res.end(); }
  });
  return new Promise(ok => srv.listen(0, '127.0.0.1', () => ok(srv)));
}

const only = process.argv.slice(2);
const browser = await puppeteer.launch({ executablePath: CHROME, headless: true });
for (const p of PROJECTS) {
  if (only.length && !only.includes(p.slug)) continue;
  const srv = p.url ? null : await serve(p.root);
  const page = await browser.newPage();
  const W = p.mobile ? 390 : 1440, H = p.mobile ? 844 : 900;
  await page.setViewport({ width: W, height: H, deviceScaleFactor: p.mobile ? 2 : 1, isMobile: !!p.mobile, hasTouch: !!p.mobile });
  await page.goto(p.url ?? `http://localhost:${srv.address().port}/`, { waitUntil: 'networkidle2', timeout: 30000 }).catch(() => {});
  // Einmal durchscrollen, damit Scroll-Animationen ausgelöst werden
  await page.evaluate(async () => { for (let y = 0; y < 3200; y += 300) { scrollTo(0, y); await new Promise(r => setTimeout(r, 120)); } scrollTo(0, 0); });
  await new Promise(r => setTimeout(r, 1500));
  const h = Math.min(p.mobile ? H : 2700, await page.evaluate(() => document.documentElement.scrollHeight));
  await page.screenshot({ path: `${OUT}/${p.slug}.png`, clip: { x: 0, y: 0, width: W, height: h }, captureBeyondViewport: true });
  console.log('✓', p.slug, h);
  await page.close(); srv?.close();
}
await browser.close();
