import * as THREE from './node_modules/three/build/three.module.js';

// ============================================================ base
const T = 0.45;                       // espessura do papel-cartão (mm)
const rad = (d) => d * Math.PI / 180;
const C = { ink: '#1a1a1a', mut: '#666666', acc: '#1f5fa8', band: '#dbe7f5', warn: '#b3541e' };

const renderer = new THREE.WebGLRenderer({ antialias: true, preserveDrawingBuffer: true, alpha: false });
renderer.setPixelRatio(1);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.setClearColor(0xffffff, 1);

const scene = new THREE.Scene();
scene.add(new THREE.HemisphereLight(0xffffff, 0xe2e2e2, 1.9));
const sun = new THREE.DirectionalLight(0xffffff, 1.5);
sun.castShadow = true; sun.shadow.mapSize.set(4096, 4096); sun.shadow.bias = -0.0004; sun.shadow.normalBias = 0.6;
Object.assign(sun.shadow.camera, { left: -700, right: 700, top: 700, bottom: -700, near: 10, far: 4000 });
scene.add(sun); scene.add(sun.target);
const fill = new THREE.DirectionalLight(0xffffff, 0.95); scene.add(fill); scene.add(fill.target);
const ground = new THREE.Mesh(new THREE.PlaneGeometry(6000, 6000), new THREE.ShadowMaterial({ opacity: 0.16 }));
ground.rotation.x = -Math.PI / 2; ground.receiveShadow = true; scene.add(ground);

const camera = new THREE.PerspectiveCamera(22, 1, 5, 8000);
function aim(pos, target, w, h, fov = 22) {
  camera.fov = fov; camera.aspect = w / h; camera.position.set(...pos); camera.lookAt(...target); camera.updateProjectionMatrix();
  const t = new THREE.Vector3(...target);
  sun.position.set(t.x - 500, t.y + 1900, t.z + 700); sun.target.position.copy(t);
  fill.position.set(...pos); fill.target.position.copy(t);
}

// ============================================================ materiais
const M = {
  paper: new THREE.MeshStandardMaterial({ color: 0xfcfcfa, roughness: 0.88 }),
  paperIn: new THREE.MeshStandardMaterial({ color: 0xeceae4, roughness: 0.9 }),
  berco: new THREE.MeshStandardMaterial({ color: 0xf1efe9, roughness: 0.9 }),
  kraft: new THREE.MeshStandardMaterial({ color: 0xc9a877, roughness: 0.95 }),
  kraftIn: new THREE.MeshStandardMaterial({ color: 0xb8956a, roughness: 0.95 }),
  envelope: new THREE.MeshStandardMaterial({ color: 0xe0cfaf, roughness: 0.9 }),
  case: new THREE.MeshStandardMaterial({ color: 0x2c2d30, roughness: 0.62 }),
  plateau: new THREE.MeshStandardMaterial({ color: 0x55585e, roughness: 0.35, metalness: 0.35 }),
  frame: new THREE.MeshStandardMaterial({ color: 0x18191b, roughness: 0.3, metalness: 0.6 }),
  tampa: new THREE.MeshStandardMaterial({ color: 0x141416, roughness: 0.55 }),
  floor: new THREE.MeshStandardMaterial({ color: 0x0c0c0d, roughness: 0.5 }),
  seal: new THREE.MeshStandardMaterial({ color: 0x1f5fa8, roughness: 0.5 }),
};
const edgeMat = new THREE.LineBasicMaterial({ color: 0x55575c });
const edgeDark = new THREE.LineBasicMaterial({ color: 0x0a0a0a });

// ============================================================ formas
const rectPts = (x, y, w, h) => [[x, y], [x + w, y], [x + w, y + h], [x, y + h]];
function shapeOf(pts, holes = []) {
  const s = new THREE.Shape(); s.moveTo(...pts[0]); pts.slice(1).forEach(p => s.lineTo(...p)); s.closePath();
  holes.forEach(h => { const p = new THREE.Path(); p.moveTo(...h[0]); h.slice(1).forEach(q => p.lineTo(...q)); p.closePath(); s.holes.push(p); });
  return s;
}
function roundRect(x, y, w, h, r, top = true, bottom = true) {
  const s = new THREE.Shape(); const rb = bottom ? r : 0, rt = top ? r : 0;
  s.moveTo(x + rb, y); s.lineTo(x + w - rb, y); if (rb) s.quadraticCurveTo(x + w, y, x + w, y + rb);
  s.lineTo(x + w, y + h - rt); if (rt) s.quadraticCurveTo(x + w, y + h, x + w - rt, y + h);
  s.lineTo(x + rt, y + h); if (rt) s.quadraticCurveTo(x, y + h, x, y + h - rt);
  s.lineTo(x, y + rb); if (rb) s.quadraticCurveTo(x, y, x + rb, y); return s;
}
function tongue(w, d, dir) { // lingueta com cantos chanfrados; dir=+1 cresce para +y
  const s = dir;
  return shapeOf([[0, 0], [w, 0], [w, s * (d - 4)], [w - 4, s * d], [4, s * d], [0, s * (d - 4)]]);
}

// painel de papel-cartão: ocupa z ∈ [-T, 0]; face externa em -z (lado de fora)
function panel(shape, o = {}) {
  const g = new THREE.Group();
  const geo = new THREE.ExtrudeGeometry(shape, { depth: o.t || T, bevelEnabled: false, curveSegments: 10 });
  const mesh = new THREE.Mesh(geo, [o.mat || M.paper, o.mat || M.paper]);
  mesh.position.z = -(o.t || T); mesh.castShadow = true; mesh.receiveShadow = true; g.add(mesh);
  const e = new THREE.LineSegments(new THREE.EdgesGeometry(geo, 25), o.edge || edgeMat); e.position.z = mesh.position.z; g.add(e);
  if (o.inner) { // face interna com cor própria
    const inner = new THREE.Mesh(new THREE.ShapeGeometry(shape), o.inner); inner.position.z = 0.03; inner.receiveShadow = true; g.add(inner);
  }
  if (o.tex) {
    const [x0, y0, w, h] = o.rect;
    const pm = new THREE.MeshStandardMaterial({ map: o.tex, roughness: 0.8, alphaTest: 0.5 });
    const pl = new THREE.Mesh(new THREE.PlaneGeometry(w, h), pm);
    pl.position.set(x0 + w / 2, y0 + h / 2, -(o.t || T) - 0.05); pl.rotation.y = Math.PI; pl.receiveShadow = true; g.add(pl);
  }
  return g;
}

// ============================================================ texturas impressas
function canvasTex(wmm, hmm, draw, k = 10) {
  const c = document.createElement('canvas'); c.width = Math.round(wmm * k); c.height = Math.round(hmm * k);
  const x = c.getContext('2d'); x.scale(k, k); draw(x, wmm, hmm);
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 8; return t;
}
const F = (px, w = '') => `${w} ${px}px "DejaVu Serif", serif`;
function pill(x, X, y, w, h, fill, text, col, fs) {
  x.fillStyle = fill; x.beginPath(); x.roundRect(X, y, w, h, h / 2); x.fill();
  x.fillStyle = col; x.font = F(fs, 'bold'); x.textAlign = 'center'; x.textBaseline = 'middle'; x.fillText(text, X + w / 2, y + h / 2 + 0.2);
}
const WIN = { x: 12, y: 22, w: 50, h: 30 };     // janela vista de fora (mm, a partir do canto superior esquerdo)
const texFront = canvasTex(95, 180, (x, W, H) => {
  x.fillStyle = '#ffffff'; x.fillRect(0, 0, W, H);
  x.fillStyle = C.ink; x.font = F(5.2, 'bold'); x.textAlign = 'left'; x.textBaseline = 'alphabetic';
  x.save(); x.letterSpacing = '0.9px'; x.fillText('CAMCLEAN', 9, 14); x.restore();
  x.strokeStyle = C.acc; x.lineWidth = 0.7; x.beginPath(); x.roundRect(WIN.x - 2, WIN.y - 2, WIN.w + 4, WIN.h + 4, 2); x.stroke();
  x.fillStyle = C.mut; x.font = F(2.7); x.fillText('veja o', 66, 34); x.fillText('mecanismo', 66, 37.5);
  x.strokeStyle = C.mut; x.lineWidth = 0.35; x.beginPath(); x.moveTo(66, 40); x.lineTo(64.5, 42.5); x.stroke();
  x.fillStyle = C.ink; x.font = F(7.4, 'bold'); x.fillText('Câmera limpa', 9, 76); x.fillText('a cada', 9, 85.5); x.fillText('abertura.', 9, 95);
  x.fillStyle = '#444'; x.font = F(3.6); x.fillText('Capa com tampa deslizante e', 9, 105); x.fillText('limpeza mecânica da lente.', 9, 109.6);
  pill(x, 9, 117, 25, 7, C.acc, 'iPhone 17', '#fff', 3.3);
  x.fillStyle = '#2c2d30'; x.beginPath(); x.arc(42, 120.5, 3.2, 0, 7); x.fill(); x.fillStyle = C.ink; x.font = F(3.3); x.textAlign = 'left'; x.fillText('preto', 47, 121.8);
  x.fillStyle = C.acc; x.fillRect(0, 142, W, 38);
  x.fillStyle = '#fff'; x.font = F(4.6, 'bold'); x.fillText('Abriu, limpou.', 9, 156); x.fillText('Fechou, protegeu.', 9, 163.5);
  x.font = F(3.1); x.fillText('inclui 1 cartucho de limpeza reserva', 9, 172.5);
  x.clearRect(WIN.x, WIN.y, WIN.w, WIN.h);
});
const texBack = canvasTex(95, 180, (x, W, H) => {
  x.fillStyle = '#fff'; x.fillRect(0, 0, W, H);
  x.fillStyle = C.ink; x.font = F(5.6, 'bold'); x.textAlign = 'left'; x.fillText('Como funciona', 9, 18);
  const steps = [['1', 'Encaixe o celular pelo', 'lado da câmera.'], ['2', 'Deslize a tampa: a escova', 'e a microfibra limpam a lente.'], ['3', 'Feche: limpa de novo', 'e protege a câmera.'], ['4', 'Troque o cartucho quando', 'a microfibra escurecer.']];
  steps.forEach(([n, a, b], i) => {
    const y = 32 + i * 19; x.fillStyle = C.acc; x.beginPath(); x.arc(13, y, 3.6, 0, 7); x.fill();
    x.fillStyle = '#fff'; x.font = F(3.8, 'bold'); x.textAlign = 'center'; x.textBaseline = 'middle'; x.fillText(n, 13, y + 0.2);
    x.textAlign = 'left'; x.textBaseline = 'alphabetic'; x.fillStyle = C.ink; x.font = F(3.4); x.fillText(a, 20, y - 0.6); x.fillText(b, 20, y + 4);
  });
  x.strokeStyle = '#d0d0d0'; x.lineWidth = 0.3; x.beginPath(); x.moveTo(9, 112); x.lineTo(86, 112); x.stroke();
  x.fillStyle = C.ink; x.font = F(3.1, 'bold'); x.fillText('Conteúdo', 9, 121); x.font = F(3.0);
  ['1 capa CamClean Slide com cartucho montado', '1 cartucho de limpeza reserva', '1 guia rápido'].forEach((t, i) => x.fillText('· ' + t, 9, 127 + i * 4.4));
  // símbolo de reciclagem simplificado
  x.strokeStyle = C.acc; x.lineWidth = 1.1; x.beginPath(); x.arc(17, 160, 6, 0.3, 1.9); x.stroke(); x.beginPath(); x.arc(17, 160, 6, 2.4, 4.0); x.stroke(); x.beginPath(); x.arc(17, 160, 6, 4.5, 6.0); x.stroke();
  x.fillStyle = C.ink; x.font = F(3.1, 'bold'); x.fillText('Embalagem 100% papel-cartão', 27, 158.5); x.font = F(2.9); x.fillText('Descarte na coleta seletiva de papel.', 27, 163);
  x.fillStyle = C.mut; x.font = F(2.5); x.fillText('Contém ímãs pequenos. Manter longe de crianças de até 3 anos.', 9, 173);
});
const texSide1 = canvasTex(22, 180, (x, W, H) => {
  x.fillStyle = '#fff'; x.fillRect(0, 0, W, H);
  x.save(); x.translate(W / 2, H / 2); x.rotate(-Math.PI / 2);
  // código de barras
  let s = 7; const bars = []; for (let i = 0; i < 58; i++) { s = (s * 9301 + 49297) % 233280; bars.push(0.25 + (s / 233280) * 0.75); }
  let bx = -68; x.fillStyle = '#111'; bars.forEach((w, i) => { if (i % 2 === 0) x.fillRect(bx, -7, w, 11); bx += w; });
  x.font = F(2.4); x.textAlign = 'left'; x.fillText('7 891234 567895', -68, 7.4);
  x.font = F(3.3, 'bold'); x.fillText('CC-100-IP17-PT', 0, -2); x.font = F(2.8); x.fillText('lote 2611-001 · preto', 0, 3.4);
  x.restore();
});
const texSide2 = canvasTex(22, 180, (x, W, H) => {
  x.fillStyle = '#fff'; x.fillRect(0, 0, W, H);
  x.save(); x.translate(W / 2, H / 2); x.rotate(-Math.PI / 2);
  x.fillStyle = C.ink; x.font = F(6, 'bold'); x.textAlign = 'center'; x.textBaseline = 'middle'; x.fillText('CamClean', -30, -2.5);
  x.fillStyle = C.acc; x.font = F(3.6); x.fillText('iPhone 17 · preto', 42, -2.5);
  x.fillStyle = C.mut; x.font = F(2.6); x.fillText('capa com limpeza mecânica da câmera', -6, 5.2);
  x.restore();
});
const texLid = canvasTex(95, 22, (x, W, H) => {
  x.fillStyle = '#fff'; x.fillRect(0, 0, W, H); x.fillStyle = C.ink; x.font = F(3.6, 'bold'); x.textAlign = 'center'; x.textBaseline = 'middle';
  x.fillText('CamClean', W / 2, 9); x.fillStyle = C.mut; x.font = F(2.6); x.fillText('abra pela lingueta', W / 2, 14.5);
});
const texCaseLogo = canvasTex(40, 6, (x, W, H) => { x.clearRect(0, 0, W, H); x.fillStyle = '#7d7f84'; x.font = F(3.4); x.textAlign = 'center'; x.textBaseline = 'middle'; x.save(); x.letterSpacing = '1px'; x.fillText('CAMCLEAN', W / 2, H / 2); x.restore(); }, 20);
const texShip = canvasTex(200, 230, (x, W, H) => {
  x.fillStyle = 'rgba(0,0,0,0)'; x.clearRect(0, 0, W, H);
  x.fillStyle = '#ffffff'; x.fillRect(20, 120, 160, 70);
  x.fillStyle = '#111'; x.font = F(9, 'bold'); x.textAlign = 'left'; x.fillText('CamClean Slide', 28, 138);
  x.font = F(6); x.fillText('iPhone 17 · preto', 28, 150); x.fillText('20 unidades', 28, 161);
  x.font = F(5); x.fillStyle = '#333'; x.fillText('lote 2611-001 · 1,3 kg', 28, 172); x.fillText('CC-100-IP17-PT', 28, 182);
  x.strokeStyle = '#2b2b2b'; x.lineWidth = 1.4; x.beginPath(); x.moveTo(160, 40); x.lineTo(160, 18); x.moveTo(152, 26); x.lineTo(160, 18); x.lineTo(168, 26); x.stroke();
  x.beginPath(); x.moveTo(176, 40); x.lineTo(176, 18); x.moveTo(168, 26); x.lineTo(176, 18); x.lineTo(184, 26); x.stroke();
  x.fillStyle = '#2b2b2b'; x.font = F(5); x.textAlign = 'center'; x.fillText('este lado para cima', 168, 50);
}, 6);

// ============================================================ caixa individual (cartucho, fecho de encaixe invertido)
function buildBox() {
  const root = new THREE.Group(), body = new THREE.Group(); root.add(body);
  const gB = new THREE.Group(); body.add(gB);
  gB.add(panel(shapeOf(rectPts(0, 0, 95, 180)), { tex: texBack, rect: [0, 0, 95, 180], inner: M.paperIn }));
  const gS1 = new THREE.Group(); gS1.position.x = 95; gB.add(gS1);
  gS1.add(panel(shapeOf(rectPts(0, 0, 22, 180)), { tex: texSide1, rect: [0, 0, 22, 180], inner: M.paperIn }));
  const gF = new THREE.Group(); gF.position.x = 22; gS1.add(gF);
  const hole = rectPts(95 - WIN.x - WIN.w, 180 - WIN.y - WIN.h, WIN.w, WIN.h);
  gF.add(panel(shapeOf(rectPts(0, 0, 95, 180), [hole]), { tex: texFront, rect: [0, 0, 95, 180], inner: null }));
  const gS2 = new THREE.Group(); gS2.position.x = 95; gF.add(gS2);
  gS2.add(panel(shapeOf(rectPts(0, 0, 22, 180)), { tex: texSide2, rect: [0, 0, 22, 180], inner: M.paperIn }));
  const gG = new THREE.Group(); gG.position.x = 22; gS2.add(gG);
  const glue = panel(shapeOf([[0, 0], [12, 6], [12, 174], [0, 180]])); glue.position.z = T * 1.1; gG.add(glue);
  // topo: aba com lingueta presa ao verso; abas de pó nas laterais
  const lidT = new THREE.Group(); lidT.position.y = 180 + T; gB.add(lidT);
  lidT.add(panel(shapeOf(rectPts(0, 0, 95, 22)), { tex: texLid, rect: [0, 0, 95, 22] }));
  const tonT = new THREE.Group(); tonT.position.y = 22; lidT.add(tonT);
  const tt = panel(tongue(95, 15, 1)); tt.position.z = T * 1.1; tonT.add(tt);
  const dT1 = new THREE.Group(); dT1.position.y = 180; gS1.add(dT1); dT1.add(panel(shapeOf([[0, 0], [1, 16], [18, 18], [22, 0]])));
  const dT2 = new THREE.Group(); dT2.position.y = 180; gS2.add(dT2); dT2.add(panel(shapeOf([[0, 0], [4, 18], [21, 16], [22, 0]])));
  // base: aba com lingueta presa à frente
  const lidB = new THREE.Group(); lidB.position.y = -T; gF.add(lidB); lidB.add(panel(shapeOf(rectPts(0, -22, 95, 22))));
  const tonB = new THREE.Group(); tonB.position.y = -22; lidB.add(tonB);
  const tb = panel(tongue(95, 15, -1)); tb.position.z = T * 1.1; tonB.add(tb);
  const dB1 = new THREE.Group(); gS1.add(dB1); dB1.add(panel(shapeOf([[0, 0], [1, -16], [18, -18], [22, 0]])));
  const dB2 = new THREE.Group(); gS2.add(dB2); dB2.add(panel(shapeOf([[0, 0], [4, -18], [21, -16], [22, 0]])));
  // lacre (frente + aba superior)
  const sealA = new THREE.Mesh(new THREE.PlaneGeometry(16, 14), M.seal); sealA.position.set(95 - 78, 173, -T - 0.12); sealA.rotation.y = Math.PI; gF.add(sealA);
  const sealB = new THREE.Mesh(new THREE.PlaneGeometry(16, 9), M.seal); sealB.position.set(78, 4.5, -T - 0.12); sealB.rotation.y = Math.PI; lidT.add(sealB);
  const sealT = canvasTex(16, 14, (x, W, H) => { x.fillStyle = C.acc; x.fillRect(0, 0, W, H); x.fillStyle = '#fff'; x.font = F(2.4, 'bold'); x.textAlign = 'center'; x.fillText('LACRE', W / 2, 6); x.font = F(2); x.fillText('2611-001', W / 2, 9.6); }, 20);
  sealA.material = new THREE.MeshStandardMaterial({ map: sealT, roughness: 0.5 });
  body.position.y = 1;
  const p0 = { phi: 90, dT: 90, lT: 90, tT: 90, dB: 90, lB: 90, tB: 90, seal: true };
  function set(o = {}) {
    const p = { ...p0, ...o };
    gS1.rotation.y = -rad(p.phi); gF.rotation.y = -rad(180 - p.phi); gS2.rotation.y = -rad(p.phi); gG.rotation.y = -rad(180 - p.phi);
    lidT.rotation.x = rad(p.lT); tonT.rotation.x = rad(p.tT); dT1.rotation.x = rad(p.dT); dT2.rotation.x = rad(p.dT);
    lidB.rotation.x = -rad(p.lB); tonB.rotation.x = -rad(p.tB); dB1.rotation.x = -rad(p.dB); dB2.rotation.x = -rad(p.dB);
    sealA.visible = sealB.visible = p.seal;
    return root;
  }
  set(); return { root, body, set };
}

// ============================================================ berço
function buildBerco() {
  const root = new THREE.Group();
  const o = { mat: M.berco };
  root.add(panel(shapeOf(rectPts(0, 0, 93, 178), [rectPts(76, 14, 13, 150)]), o));
  const wL = new THREE.Group(); root.add(wL); wL.add(panel(shapeOf([[0, 0], [-13, 2], [-13, 176], [0, 178]]), o));
  const wR = new THREE.Group(); wR.position.x = 93; root.add(wR); wR.add(panel(shapeOf([[0, 0], [13, 2], [13, 176], [0, 178]]), o));
  const wB = new THREE.Group(); root.add(wB); wB.add(panel(shapeOf([[0, 0], [2, -13], [91, -13], [93, 0]]), o));
  const wT = new THREE.Group(); wT.position.y = 178; root.add(wT); wT.add(panel(shapeOf([[0, 0], [2, 13], [91, 13], [93, 0]]), o));
  const dv = new THREE.Group(); dv.position.x = 76; root.add(dv); dv.add(panel(shapeOf(rectPts(0, 14, 13, 150)), o));
  function set(a = 90, d = 90) { wL.rotation.y = rad(a); wR.rotation.y = -rad(a); wB.rotation.x = -rad(a); wT.rotation.x = rad(a); dv.rotation.y = -rad(d); return root; }
  set(); return { root, set };
}

// ============================================================ capa CamClean (costas voltadas para +z)
function buildCase() {
  const g = new THREE.Group();
  const add = (geo, mat, z, edges = false, xy = [0, 0]) => { const m = new THREE.Mesh(geo, mat); m.position.set(xy[0], xy[1], z); m.castShadow = true; m.receiveShadow = false; g.add(m); if (edges) { const e = new THREE.LineSegments(new THREE.EdgesGeometry(geo, 30), edgeDark); e.position.copy(m.position); g.add(e); } return m; };
  add(new THREE.ExtrudeGeometry(roundRect(0, 0, 74.4, 152.5, 13), { depth: 10.6, bevelEnabled: true, bevelThickness: 0.5, bevelSize: 0.5, bevelSegments: 2, curveSegments: 16 }), M.case, 0);
  const win = rectPts(10, 115.5, 52.3, 31.4);
  const pl = roundRect(1.2, 112.2, 72, 39.45, 12.2, true, false); const hp = new THREE.Path(); hp.moveTo(...win[0]); win.slice(1).forEach(q => hp.lineTo(...q)); hp.closePath(); pl.holes.push(hp);
  add(new THREE.ExtrudeGeometry(pl, { depth: 2.2, bevelEnabled: false, curveSegments: 16 }), M.plateau, 10.8, true);
  add(new THREE.ShapeGeometry(shapeOf(win)), M.floor, 11.15);
  add(new THREE.BoxGeometry(25, 30.4, 1.1), M.tampa, 12.1, true, [10.5 + 12.5, 116 + 15.2]);
  for (let i = 0; i < 5; i++) { add(new THREE.BoxGeometry(0.32, 13.3, 0.16), M.frame, 12.75, false, [10.5 + 17 + i * 0.8, 131.2]); }
  const logo = new THREE.Mesh(new THREE.PlaneGeometry(40, 6), new THREE.MeshStandardMaterial({ map: texCaseLogo, transparent: true, roughness: 0.6 }));
  logo.position.set(37.2, 70, 11.15); g.add(logo);
  return g;
}

// ============================================================ envelope do cartucho reserva e guia em sanfona
function buildEnvelope() {
  const g = new THREE.Group();
  const geo = new THREE.BoxGeometry(17, 34, 2.0); const m = new THREE.Mesh(geo, M.envelope); m.castShadow = m.receiveShadow = true; m.position.set(8.5, 17, 1); g.add(m);
  const e = new THREE.LineSegments(new THREE.EdgesGeometry(geo), edgeMat); e.position.copy(m.position); g.add(e);
  const t = canvasTex(17, 34, (x, W, H) => {
    x.fillStyle = '#e0cfaf'; x.fillRect(0, 0, W, H); x.strokeStyle = '#b79e75'; x.lineWidth = 0.3; x.beginPath(); x.moveTo(0, 8); x.lineTo(W / 2, 13); x.lineTo(W, 8); x.stroke();
    x.fillStyle = '#5a4a32'; x.font = F(2.1, 'bold'); x.textAlign = 'center'; x.fillText('cartucho', W / 2, 22); x.fillText('reserva', W / 2, 25);
  }, 20);
  const pl = new THREE.Mesh(new THREE.PlaneGeometry(17, 34), new THREE.MeshStandardMaterial({ map: t, roughness: 0.9 })); pl.position.set(8.5, 17, 2.03); g.add(pl);
  return g;
}
let guideTex = [];
function buildGuide() {
  const g = new THREE.Group(); const hinges = [];
  let parent = g;
  for (let i = 0; i < 4; i++) {
    const h = new THREE.Group(); if (i) h.position.x = 90; parent.add(h); hinges.push(h);
    const geo = new THREE.BoxGeometry(90, 170, 0.18);
    const mats = [M.paper, M.paper, M.paper, M.paper, new THREE.MeshStandardMaterial({ map: guideTex[i], roughness: 0.85 }), new THREE.MeshStandardMaterial({ map: guideTex[(i + 2) % 4], roughness: 0.85 })];
    const m = new THREE.Mesh(geo, mats); m.position.set(45, 85, 0); m.castShadow = m.receiveShadow = true; h.add(m);
    const e = new THREE.LineSegments(new THREE.EdgesGeometry(geo), edgeMat); e.position.copy(m.position); h.add(e);
    parent = h;
  }
  function set(beta) { // beta=180: fechado em sanfona; 0: aberto
    hinges[1].rotation.y = -rad(beta); hinges[2].rotation.y = rad(beta); hinges[3].rotation.y = -rad(beta);
    hinges[1].position.z = 0; return g;
  }
  set(178); return { root: g, set };
}

// ============================================================ caixa coletiva
function buildShipper(units) {
  const g = new THREE.Group(); const W = 200, D = 190, H = 230, t = 3;
  const ex = { mat: M.kraft, t, inner: M.kraftIn, edge: edgeMat };
  const wall = (shape, opts = {}) => panel(shape, { ...ex, ...opts });
  // fundo
  const base = wall(shapeOf(rectPts(0, 0, W, D))); base.rotation.x = -Math.PI / 2; base.position.set(0, t, 0); // ocupa y 0..t
  base.rotation.x = Math.PI / 2; base.position.set(0, 0, -D); g.add(base);
  // paredes: frente (z=0), fundo (z=-D), esquerda (x=0), direita (x=W)
  const front = wall(shapeOf(rectPts(0, 0, W, H)), { tex: texShip, rect: [0, 0, W, H] }); front.rotation.y = Math.PI; front.position.set(W, 0, 0); g.add(front);
  const back = wall(shapeOf(rectPts(0, 0, W, H))); back.position.set(0, 0, -D); g.add(back);
  const left = wall(shapeOf(rectPts(0, 0, D, H))); left.rotation.y = Math.PI / 2; left.position.set(0, 0, 0); g.add(left);
  const right = wall(shapeOf(rectPts(0, 0, D, H))); right.rotation.y = -Math.PI / 2; right.position.set(W, 0, -D); g.add(right);
  // abas abertas para fora
  const flap = (w, d, pos, ry, open) => { const h = new THREE.Group(); h.position.set(...pos); h.rotation.y = ry; g.add(h); const f = new THREE.Group(); f.position.y = H; h.add(f); f.add(wall(shapeOf(rectPts(0, 0, w, d)))); f.rotation.x = -rad(open); };
  flap(W, D / 2, [W, 0, 0], Math.PI, 115); flap(W, D / 2, [0, 0, -D], 0, 115);
  flap(D, W / 2 - 2, [0, 0, 0], Math.PI / 2, 105); flap(D, W / 2 - 2, [W, 0, -D], -Math.PI / 2, 105);
  // unidades: 2 pilhas de 10, deitadas com a frente para cima
  units.forEach((u, i) => {
    const col = Math.floor(i / 10), lvl = i % 10;
    u.root.rotation.set(-Math.PI / 2, 0, 0);
    u.root.position.set(5 + col * 95.5, t + 0.5 + lvl * 22.6, -5);
    g.add(u.root);
  });
  return g;
}

// ============================================================ objetos da cena
const box = buildBox(); scene.add(box.root);
const berco = buildBerco(); scene.add(berco.root);
const capa = buildCase(); scene.add(capa);
const env = buildEnvelope(); scene.add(env);
let guide = null;

function hideAll() { [box.root, berco.root, capa, env, guide && guide.root].forEach(o => o && (o.visible = false)); extras.forEach(o => scene.remove(o)); extras.length = 0; }
const extras = [];

// conteúdo dentro da caixa (coordenadas da caixa em pé, sem rotação)
function packIn(o, off = [0, 0, 0]) {
  // o: posição da caixa no mundo; off: deslocamento do conjunto
  const bx = o[0] + 1 + off[0], by = o[1] + 1 + 1 + off[1], bz = o[2] + T + 0.03 + off[2] + 1.0;
  berco.set(90, 90); berco.root.rotation.set(0, 0, 0); berco.root.position.set(bx, by, bz);
  capa.rotation.set(0, 0, 0); capa.position.set(bx + 0.9, by + 12.75, bz + 0.05);
  env.rotation.set(0, 0, 0); env.position.set(bx + 77.6, by + 70, bz + 0.05);
  guide.set(178); guide.root.rotation.set(0, 0, 0); guide.root.position.set(bx + 1.5, by + 4, bz - T - 0.6);
  [berco.root, capa, env, guide.root].forEach(x => x.visible = true);
}

// ============================================================ render e projeção
function shot(w, h) {
  renderer.setSize(w, h, false); renderer.render(scene, camera);
  return renderer.domElement.toDataURL('image/png');
}
function proj(v, w, h) { const p = new THREE.Vector3(...v).project(camera); return [(p.x + 1) / 2 * w, (1 - p.y) / 2 * h]; }

// ============================================================ estados das imagens
const S = {};
// --- embalagem fechada (duas vistas)
S.closedFront = (w, h) => {
  hideAll(); box.root.visible = true; box.set({}); box.root.rotation.set(0, 0, 0); box.root.position.set(0, 0, 0); packIn([0, 0, 0]);
  aim([300, 250, 470], [47, 92, 11], w, h, 24);
};
S.closedBack = (w, h) => {
  hideAll(); box.root.visible = true; box.set({}); box.root.rotation.set(0, 0, 0); box.root.position.set(0, 0, 0); packIn([0, 0, 0]);
  aim([-300, 250, -430], [47, 92, 11], w, h, 24);
};
// --- vista explodida (caixa deitada, conteúdo saindo pela abertura de cima)
S.exploded = (w, h) => {
  hideAll(); box.root.visible = true; box.set({ lT: -10, tT: 0, dT: -12 });
  box.root.rotation.set(-Math.PI / 2, 0, 0); box.root.position.set(0, 23, 0);
  // eixo y da caixa -> -z do mundo; eixo z da caixa -> +y do mundo
  const place = (obj, bx, by, bz, extraRotZ = 0) => { obj.rotation.set(-Math.PI / 2, 0, extraRotZ); obj.position.set(bx, 23 + bz, -by); obj.visible = true; };
  guide.set(176); place(guide.root, 2.5, 2 + 225 + 4, 1);
  berco.set(90, 90); place(berco.root, 1, 2 + 225, 34);
  place(capa, 1.9, 2 + 225 + 12.75, 34 + 46);
  place(env, 1 + 77.6, 2 + 225 + 70, 34 + 30);
  aim([420, 520, 300], [48, 40, -260], w, h, 26);
};
// --- montagem
S.m1 = (w, h) => { hideAll(); box.root.visible = true; box.set({ phi: 0, dT: 0, lT: 0, tT: 0, dB: 0, lB: 0, tB: 0, seal: false }); box.root.rotation.set(-Math.PI / 2, 0, 0); box.root.position.set(0, 1.5, 0); aim([150, 430, 240], [60, 0, -95], w, h, 32); };
S.m2 = (w, h) => { hideAll(); box.root.visible = true; box.set({ dT: 0, lT: 0, tT: 0, dB: 0, lB: 0, tB: 0, seal: false }); box.root.rotation.set(0, 0, 0); box.root.position.set(0, 40, 0); aim([330, 300, 520], [47, 125, 11], w, h, 30); };
S.m3 = (w, h) => { hideAll(); box.root.visible = true; box.set({ dT: 0, lT: 0, tT: 0, dB: 90, lB: 58, tB: 30, seal: false }); box.root.rotation.set(0, 0, Math.PI); box.root.position.set(95, 220, 0); aim([330, 380, 520], [47, 140, 11], w, h, 30); };
S.m4 = (w, h) => { hideAll(); berco.set(52, 25); berco.root.visible = true; berco.root.rotation.set(-Math.PI / 2, 0, 0); berco.root.position.set(0, T, 0); aim([230, 420, 260], [46, 0, -89], w, h, 30); };
S.m5 = (w, h) => {
  hideAll(); berco.set(90, 90); berco.root.visible = true; berco.root.rotation.set(-Math.PI / 2, 0, 0); berco.root.position.set(0, T, 0);
  capa.visible = true; capa.rotation.set(-Math.PI / 2, 0, 0); capa.position.set(0.9, T + 55, -12.75);
  env.visible = true; env.rotation.set(-Math.PI / 2, 0, 0); env.position.set(77.6, T + 30, -70);
  aim([230, 430, 260], [46, 20, -89], w, h, 30);
};
S.m6 = (w, h) => {
  hideAll(); box.root.visible = true; box.set({ dT: -8, lT: -6, tT: 0, seal: false }); box.root.rotation.set(0, 0, 0); box.root.position.set(0, 0, 0);
  guide.root.visible = true; guide.set(178); guide.root.rotation.set(0, 0, 0); guide.root.position.set(2.5, 2 + 150, 0.6);
  aim([360, 400, 560], [47, 170, 11], w, h, 32);
};
S.m7 = (w, h) => { hideAll(); box.root.visible = true; box.set({ dT: -8, lT: -6, tT: 0, seal: false }); box.root.rotation.set(0, 0, 0); box.root.position.set(0, 0, 0); packIn([0, 0, 0], [0, 205, 0]); aim([360, 420, 560], [47, 190, 11], w, h, 34); };
S.m8 = (w, h) => { hideAll(); box.root.visible = true; box.set({}); box.root.rotation.set(0, 0, 0); box.root.position.set(0, 0, 0); packIn([0, 0, 0]); aim([300, 330, 470], [47, 100, 11], w, h, 30); };
// --- abertura e desmontagem
S.d1 = (w, h) => { hideAll(); box.root.visible = true; box.set({ lT: -28, tT: 10, dT: 40, seal: false }); box.root.rotation.set(0, 0, 0); box.root.position.set(0, 0, 0); packIn([0, 0, 0]); aim([300, 360, 470], [47, 110, 11], w, h, 30); };
S.d2 = (w, h) => { hideAll(); box.root.visible = true; box.set({ lT: -28, tT: 10, dT: -10, seal: false }); box.root.rotation.set(0, 0, 0); box.root.position.set(0, 0, 0); packIn([0, 0, 0], [0, 120, 0]); aim([330, 380, 520], [47, 150, 11], w, h, 32); };
S.d3 = (w, h) => {
  hideAll(); box.root.visible = true; box.set({ lT: -28, tT: 10, dT: -10, seal: false }); box.root.rotation.set(0, 0, 0); box.root.position.set(-40, 0, -60);
  berco.set(90, 90); berco.root.visible = true; berco.root.rotation.set(-Math.PI / 2, 0, 0); berco.root.position.set(80, T, 100);
  capa.visible = true; capa.rotation.set(-Math.PI / 2, 0, 0.12); capa.position.set(200, 0.6, 90);
  env.visible = true; env.rotation.set(-Math.PI / 2, 0, -0.3); env.position.set(185, 0.6, -40);
  guide.root.visible = true; guide.set(60); guide.root.rotation.set(-Math.PI / 2, 0, 0.05); guide.root.position.set(-60, 0.6, 200);
  aim([460, 700, 700], [80, 40, 40], w, h, 34);
};
S.d4 = (w, h) => {
  hideAll(); box.root.visible = true; box.set({ phi: 0, dT: 0, lT: 0, tT: 0, dB: 0, lB: 0, tB: 0, seal: false }); box.root.rotation.set(-Math.PI / 2, 0, 0); box.root.position.set(-40, 1.5, 20);
  berco.set(0, 0); berco.root.visible = true; berco.root.rotation.set(-Math.PI / 2, 0, 0); berco.root.position.set(140, T, 10);
  aim([200, 560, 330], [110, 0, -80], w, h, 34);
};
// --- caixa coletiva
let shipper = null;
S.shipper = (w, h) => {
  hideAll(); if (!shipper) { const us = []; for (let i = 0; i < 20; i++) { const b = buildBox(); b.set({}); us.push(b); } shipper = buildShipper(us); scene.add(shipper); }
  shipper.visible = true;
  const loose = buildBox(); loose.set({}); loose.root.rotation.set(0, -0.35, 0); loose.root.position.set(300, 0, -150); scene.add(loose.root); extras.push(loose.root);
  const loose2 = buildBox(); loose2.set({}); loose2.root.rotation.set(-Math.PI / 2, 0, 0.3); loose2.root.position.set(330, 23, 120); scene.add(loose2.root); extras.push(loose2.root);
  aim([700, 720, 780], [190, 90, -50], w, h, 30);
};
function hideShipper() { if (shipper) shipper.visible = false; }

// ============================================================ API para o Playwright
async function loadGuideTex() {
  const load = (src) => new Promise(r => { const i = new Image(); i.onload = () => r(i); i.src = src; });
  const [a, b] = await Promise.all([load('fig_manual_f1.png'), load('fig_manual_f2.png')]);
  const cell = (img, col, row) => { const W = img.width; const pad = 36, gap = 28; const cw = (W - 2 * pad - 2 * gap) / 3; const top = 132; const rh = (img.height - top - pad - gap) / 2; return [pad + col * (cw + gap), top + row * (rh + gap), cw, rh]; };
  const make = (img, cells) => canvasTex(90, 170, (x, W, H) => {
    x.fillStyle = '#fff'; x.fillRect(0, 0, W, H);
    cells.forEach((cc, i) => { const [sx, sy, sw, sh] = cell(img, ...cc); const ch = H / 3 - 2; const cw = ch * sw / sh; const dw = Math.min(cw, W - 6); const dh = dw * sh / sw; x.drawImage(img, sx, sy, sw, sh, (W - dw) / 2, 1.5 + i * (H / 3) + (H / 3 - 3 - dh) / 2, dw, dh); });
  }, 8);
  guideTex = [make(a, [[0, 0], [1, 0], [2, 0]]), make(a, [[0, 1], [1, 1], [2, 1]]), make(b, [[0, 0], [1, 0], [2, 0]]), make(b, [[0, 1], [1, 1], [2, 1]])];
  guide = buildGuide(); scene.add(guide.root);
}
window.renderState = (name, w, h, pts = []) => {
  hideShipper(); S[name](w, h);
  const img = shot(w, h);
  return { img, pts: pts.map(p => proj(p, w, h)) };
};
loadGuideTex().then(() => { window.READY = true; });
