# Modelo 3D da embalagem do CamClean

Cena em three.js com a caixa (dobras articuladas), o berço, a capa, o cartucho reserva e o guia.
As imagens da seção 6.9 do relatório saem daqui.

Para gerar de novo:

1. `npm install` nesta pasta (instala o three.js e precisa do Playwright com Chromium).
2. Copiar `fig_manual_f1.png` e `fig_manual_f2.png` (arte do guia rápido) para esta pasta.
3. Servir a pasta: `python3 -m http.server 8765`.
4. `node figures.js` gera as cinco pranchas `fig_emb3d_*.png` com fundo branco.
   `node preview.js m1 m2 ...` renderiza estados avulsos para conferência.

Os estados (montagem `m1`–`m8`, desmontagem `d1`–`d4`, `exploded`, `closedFront`, `closedBack`, `shipper`)
ficam no objeto `S` de `scene.js`; os ângulos de cada dobra são definidos em `box.set({...})`.
