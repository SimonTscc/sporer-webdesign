// Erzeugt public/og.png (Vorschaubild für geteilte Links) aus der Werkbank der laufenden Dev-Vorschau
import puppeteer from 'puppeteer-core';
const b = await puppeteer.launch({ executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe' });
const p = await b.newPage();
await p.setViewport({ width: 1340, height: 900, deviceScaleFactor: 1 });
await p.emulateMediaFeatures([{ name: 'prefers-reduced-motion', value: 'reduce' }]);
await p.goto(process.argv[2] || 'http://localhost:4330/', { waitUntil: 'networkidle0' });
await p.evaluateHandle('document.fonts.ready');
const r = await p.$eval('[data-mat]', (e) => { const b = e.getBoundingClientRect(); return { x: b.x, y: b.y, w: b.width, h: b.height }; });
const h = Math.round(r.w * 630 / 1200);
await p.screenshot({ path: 'public/og.png', clip: { x: r.x, y: r.y + Math.max(0, (r.h - h) / 2), width: r.w, height: h } });
await b.close();
console.log('og.png', r.w, h);
