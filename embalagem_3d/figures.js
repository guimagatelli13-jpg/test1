// Compõe as pranchas finais (renders 3D + cotas, rótulos e setas em SVG)
const { chromium } = require('playwright');
const ACC = '#1f5fa8', WARN = '#b3541e', INK = '#1a1a1a', MUT = '#666666', G2 = '#cfcfcf';

const css = `body{margin:0;background:#fff;font-family:'DejaVu Serif',serif;color:${INK}}
.fig{background:#fff;padding:16px;box-sizing:border-box;display:inline-block}
.wrap{position:relative;display:inline-block}.wrap img{display:block}.wrap svg{position:absolute;left:0;top:0}
.row{display:flex;gap:10px;align-items:flex-end}
.grid{display:grid;gap:12px}
.p{border:1.5px solid ${G2};border-radius:10px;padding:8px 10px 12px;position:relative}
.n{position:absolute;top:10px;left:10px;width:30px;height:30px;border-radius:50%;background:${INK};color:#fff;font-weight:bold;font-size:16px;display:flex;align-items:center;justify-content:center;z-index:2}
.t{font-weight:bold;font-size:17px;margin-top:2px}.d{font-size:14px;line-height:1.35;margin-top:3px;color:#333}
.cap{font-size:15px;color:${MUT};text-align:center;margin-top:4px}`;

const arrowDefs = `<defs><marker id="aw" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="4.2" markerHeight="4.2" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="${WARN}"/></marker>
<marker id="ad" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" markerUnits="userSpaceOnUse" orient="auto-start-reverse"><path d="M0,1 L10,5 L0,9 z" fill="${INK}"/></marker></defs>`;
const curve = (a, c, b, col = WARN, w = 5) => `<path d="M ${a[0]} ${a[1]} Q ${c[0]} ${c[1]} ${b[0]} ${b[1]}" fill="none" stroke="${col}" stroke-width="${w}" stroke-linecap="round" marker-end="url(#aw)"/>`;

(async () => {
  const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 2200, height: 1600 } });
  p.on('pageerror', e => console.log('PAGEERR', e.message));
  await p.goto('http://localhost:8765/scene.html'); await p.waitForFunction(() => window.READY, null, { timeout: 60000 });
  const R = (name, w, h, pts = []) => p.evaluate(([n, w, h, pts]) => window.renderState(n, w, h, pts), [name, w, h, pts]);
  const svg = (w, h, inner) => `<svg width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">${arrowDefs}${inner}</svg>`;
  const html = [];

  // ---------------------------------------------------------------- 1. vistas com cotas
  {
    const w = 900, h = 1000;
    const pts = [[0, 0, 22.5], [95.5, 0, 22.5], [0, 0, 52], [95.5, 0, 52],            // largura
      [-0.6, 1, 22.6], [-0.6, 181.4, 22.6], [-32, 1, 22.6], [-32, 181.4, 22.6],           // altura
      [95.9, 0, 22.6], [95.9, 0, -0.5], [128, 0, 22.6], [128, 0, -0.5]];                 // profundidade
    const f = await R('closedFront', w, h, pts); const P = f.pts;
    const dim = (a, b, ea, eb, t, off = [0, 0]) => {
      const mx = (b[0] + a[0]) / 2 + off[0], my = (b[1] + a[1]) / 2 + off[1];
      return `<line x1="${ea[0]}" y1="${ea[1]}" x2="${a[0]}" y2="${a[1]}" stroke="${MUT}" stroke-width="1.2"/><line x1="${eb[0]}" y1="${eb[1]}" x2="${b[0]}" y2="${b[1]}" stroke="${MUT}" stroke-width="1.2"/>
      <line x1="${a[0]}" y1="${a[1]}" x2="${b[0]}" y2="${b[1]}" stroke="${INK}" stroke-width="1.6" marker-start="url(#ad)" marker-end="url(#ad)"/>
      <rect x="${mx - 28}" y="${my - 16}" width="56" height="30" fill="white"/><text x="${mx}" y="${my + 7}" font-size="24" text-anchor="middle" font-family="DejaVu Serif" font-weight="bold">${t}</text>`;
    };
    const ov = dim(P[2], P[3], P[0], P[1], '95', [0, 0]) + dim(P[6], P[7], P[4], P[5], '180', [0, 0]) + dim(P[10], P[11], P[8], P[9], '22', [34, 6]);
    const back = await R('closedBack', w, h);
    html.push(`<div class="fig" id="vistas"><div class="row">
      <div><div class="wrap"><img src="${f.img}" width="${w}" height="${h}">${svg(w, h, ov)}</div><div class="cap">frente · cotas externas em mm</div></div>
      <div><div class="wrap"><img src="${back.img}" width="${w}" height="${h}"></div><div class="cap">verso e lateral com código de barras</div></div></div></div>`);
  }
  // ---------------------------------------------------------------- 2. vista explodida
  {
    const w = 1800, h = 1150;
    const L = [
      ['Lacre de lote · CC-904', 'une a aba superior à frente', [78, 46, -176], 'R'],
      ['Caixa · CC-901', 'papel-cartão 300 g/m², janela 50 × 30', [60, 45, -60], 'R'],
      ['Capa CamClean Slide', 'tampa fechada, sob a janela', [40, 116, -300], 'R'],
      ['Cartucho reserva', 'em envelope de papel, no bolso', [95, 89, -315], 'R'],
      ['Berço · CC-902', 'paredes de 13 mm e bolso lateral', [94.5, 66, -250], 'R'],
      ['Guia rápido · CC-903', 'sanfona de 4 dobras, atrás do berço', [92, 25, -236], 'R'],
    ];
    const r = await R('exploded', w, h, L.map(l => l[2]));
    let ov = '';
    const usedL = [], usedR = [];
    const order = L.map((l, i) => i).sort((i, j) => r.pts[i][1] - r.pts[j][1]); let last = -1e9;
    order.forEach((i) => { const l = L[i];
      const [x, y] = r.pts[i]; const side = l[3];
      const ty = Math.max(y, last + 78); last = ty;
      const tx = side === 'L' ? 70 : w - 70; const ex = side === 'L' ? tx + 330 : tx - 330;
      ov += `<polyline points="${x},${y} ${ex},${ty} ${side === 'L' ? tx + 330 : tx - 330},${ty}" fill="none" stroke="${MUT}" stroke-width="1.4"/><circle cx="${x}" cy="${y}" r="5" fill="${INK}"/>
        <text x="${side === 'L' ? tx : tx}" y="${ty - 6}" font-size="25" font-weight="bold" text-anchor="${side === 'L' ? 'start' : 'end'}" font-family="DejaVu Serif">${l[0]}</text>
        <text x="${tx}" y="${ty + 24}" font-size="20" fill="${MUT}" text-anchor="${side === 'L' ? 'start' : 'end'}" font-family="DejaVu Serif">${l[1]}</text>`;
    });
    html.push(`<div class="fig" id="explodida"><div class="wrap"><img src="${r.img}" width="${w}" height="${h}">${svg(w, h, ov)}</div></div>`);
  }
  // ---------------------------------------------------------------- 3 e 4. sequências
  async function seq(id, frames, cols) {
    const s = 640; let cells = '';
    for (let i = 0; i < frames.length; i++) {
      const fr = frames[i]; const pts = (fr.arrows || []).flat();
      const r = await R(fr.n, s, s, pts); let ov = '';
      (fr.arrows || []).forEach((a, k) => { const q = r.pts.slice(k * 3, k * 3 + 3); ov += curve(q[0], q[1], q[2]); });
      cells += `<div class="p"><div class="n">${i + 1}</div><div class="wrap"><img src="${r.img}" width="${s}" height="${s}" style="width:100%;height:auto">${svg(s, s, ov).replace('<svg ', '<svg style="width:100%;height:auto" ')}</div>
        <div class="t">${fr.t}</div><div class="d">${fr.d}</div></div>`;
    }
    html.push(`<div class="fig" id="${id}" style="width:${cols * 420 + 32}px"><div class="grid" style="grid-template-columns:repeat(${cols},1fr)">${cells}</div></div>`);
  }
  const mid = (a, b, d = [0, 0, 0]) => [(a[0] + b[0]) / 2 + d[0], (a[1] + b[1]) / 2 + d[1], (a[2] + b[2]) / 2 + d[2]];
  const line = (a, b) => [a, mid(a, b), b];
  await seq('montagem', [
    { n: 'm1', t: 'Caixa plana', d: 'Chega da gráfica já colada na aba lateral.' },
    { n: 'm2', t: 'Abrir o tubo', d: 'Aperte as duas dobras laterais até a caixa ficar em esquadro.', arrows: [line([-55, 131, 11], [-10, 131, 11]), line([150, 131, 11], [106, 131, 11])] },
    { n: 'm3', t: 'Fechar o fundo', d: 'De cabeça para baixo: abas de pó e lingueta inferior.', arrows: [[[47, 268, 34], [47, 282, 2], [47, 250, -18]]] },
    { n: 'm4', t: 'Dobrar o berço', d: 'Levante as quatro paredes e a divisória do bolso.', arrows: [[[-30, 2, -89], [-34, 34, -89], [-8, 26, -89]], [[123, 2, -89], [127, 34, -89], [101, 26, -89]]] },
    { n: 'm5', t: 'Acomodar a capa', d: 'Capa com a tampa fechada; cartucho reserva no bolso.', arrows: [line([-18, 90, -89], [-18, 22, -89]), line([104, 70, -86], [104, 24, -86])] },
    { n: 'm6', t: 'Guia no fundo', d: 'Deslize o guia dobrado encostado no verso da caixa.', arrows: [line([-22, 330, 11], [-22, 200, 11])] },
    { n: 'm7', t: 'Inserir o berço', d: 'Desça o berço até o fundo: a câmera fica sob a janela.', arrows: [line([-22, 420, 11], [-22, 210, 11])] },
    { n: 'm8', t: 'Fechar e lacrar', d: 'Abas de pó, aba superior com lingueta e lacre de lote.', arrows: [[[150, 250, 40], [140, 200, 40], [86, 184, 24]]] },
  ], 4);
  await seq('desmontagem', [
    { n: 'd1', t: 'Romper o lacre e abrir', d: 'Puxe a lingueta da aba superior.', arrows: [[[47, 196, 34], [47, 232, 24], [47, 228, -18]]] },
    { n: 'd2', t: 'Puxar o berço', d: 'O berço sai inteiro, com a capa e o cartucho.', arrows: [line([-22, 220, 11], [-22, 330, 11])] },
    { n: 'd3', t: 'Separar o conteúdo', d: 'Capa, cartucho reserva, guia e berço.' },
    { n: 'd4', t: 'Planificar e descartar', d: 'Caixa e berço abertos, sem plástico: coleta seletiva de papel.' },
  ], 4);
  // ---------------------------------------------------------------- 5. caixa coletiva
  {
    const w = 1400, h = 1050;
    const pts = [[0, 0, 4], [200, 0, 4], [-6, 0, 0], [-6, 230, 0], [206, 0, 0], [206, 0, -190]];
    const r = await R('shipper', w, h, pts); const P = r.pts;
    const dl = (a, b, t, dx = 0, dy = 0) => `<line x1="${a[0]}" y1="${a[1]}" x2="${b[0]}" y2="${b[1]}" stroke="${INK}" stroke-width="1.6" marker-start="url(#ad)" marker-end="url(#ad)"/><rect x="${(a[0] + b[0]) / 2 - 34 + dx}" y="${(a[1] + b[1]) / 2 - 16 + dy}" width="68" height="30" fill="white"/><text x="${(a[0] + b[0]) / 2 + dx}" y="${(a[1] + b[1]) / 2 + 8 + dy}" font-size="23" font-weight="bold" text-anchor="middle" font-family="DejaVu Serif">${t}</text>`;
    const ov = dl([P[0][0], P[0][1] + 30], [P[1][0], P[1][1] + 30], '200', 0, 22) + dl([P[2][0] - 30, P[2][1]], [P[3][0] - 30, P[3][1]], '230', -30, 0);
    html.push(`<div class="fig" id="coletiva"><div class="wrap"><img src="${r.img}" width="${w}" height="${h}">${svg(w, h, ov)}</div></div>`);
  }

  await p.setContent(`<!doctype html><html><head><meta charset="utf-8"><style>${css}</style></head><body>${html.join('<br>')}</body></html>`);
  await p.waitForTimeout(500);
  for (const id of ['vistas', 'explodida', 'montagem', 'desmontagem', 'coletiva']) {
    const el = await p.$('#' + id); await el.screenshot({ path: `fig_emb3d_${id}.png` });
  }
  await b.close(); console.log('ok');
})();
