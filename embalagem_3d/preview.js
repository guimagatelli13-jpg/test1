// Renderiza estados avulsos para conferência: node preview.js m1 m2 ...
const { chromium } = require('playwright');
const fs = require('fs');
(async () => {
  const names = process.argv.slice(2);
  const b = await chromium.launch(); const p = await b.newPage();
  p.on('console', m => { if (m.type() === 'error') console.log('ERR', m.text()); });
  p.on('pageerror', e => console.log('PAGEERR', e.message));
  await p.goto('http://localhost:8765/scene.html'); await p.waitForFunction(() => window.READY, null, { timeout: 60000 });
  for (const n of names) {
    const r = await p.evaluate(([n]) => window.renderState(n, 900, 700), [n]);
    fs.writeFileSync(`pv_${n}.png`, Buffer.from(r.img.split(',')[1], 'base64'));
  }
  await b.close(); console.log('ok');
})();
