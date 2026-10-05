-- Filtro pandoc para o livro AI Systems Thinking.
-- Mantém o Markdown legível no GitHub e acrescenta classes para a diagramação:
--   * citações que começam com um rótulo em negrito viram caixas tipadas;
--   * parágrafos "Exercício X.Y" viram blocos de exercício;
--   * títulos de PARTE / APÊNDICES e de capítulos recebem classes próprias.

local rotulos = {
  { "^Caso",          "caso" },
  { "^Anti%-padrão",  "antipadrao" },
  { "^▲",             "avancado" },
  { "^Avançado",      "avancado" },
  { "^Ficha",         "ficha" },
  { "^Princípio",     "principio" },
  { "^Para conferir", "gabarito" },
  { "^Gabarito",      "gabarito" },
  { "^Atenção",       "atencao" },
  { "^Regra",         "principio" },
  { "^Ferramenta",    "ferramenta" },
  { "^Reflexão",      "reflexao" },
  { "^Decisão",       "decisao" },
}


-- Diagramas em texto: corpo da fonte ajustado à largura disponível,
-- para que nenhuma linha quebre (o que destruiria o desenho).
local TAMANHOS = { 79, 76, 73, 70, 67, 64, 61, 58 }
local LARGURA_PAGINA, LARGURA_CAIXA = 159, 149 -- mm úteis para o texto do bloco

local function eh_diagrama(texto)
  for _, c in ipairs({ "│", "─", "►", "▼", "◄", "▲" }) do
    if texto:find(c, 1, true) then return true end
  end
  return false
end

local function largura(texto)
  local maior = 0
  for linha in (texto .. "\n"):gmatch("(.-)\n") do
    local n = utf8.len(linha) or #linha
    if n > maior then maior = n end
  end
  return maior
end

local function classe_tamanho(caracteres, mm)
  for _, t in ipairs(TAMANHOS) do
    -- largura de um caractere monoespaçado = 0,6 em; 1 pt = 0,3528 mm
    if caracteres * 0.6 * 0.3528 * (t / 10) <= mm then return "fs" .. t end
  end
  return "fs58"
end

function CodeBlock(el)
  if eh_diagrama(el.text) then
    el.classes = pandoc.List({ "diagrama", classe_tamanho(largura(el.text), LARGURA_PAGINA) })
  end
  return el
end

local function rotulo_de(bloco)
  if not bloco or (bloco.t ~= "Para" and bloco.t ~= "Plain") then
    return nil
  end
  local primeiro = bloco.content[1]
  if primeiro and primeiro.t == "Strong" then
    return pandoc.utils.stringify(primeiro)
  end
  return nil
end

function BlockQuote(el)
  local txt = rotulo_de(el.content[1])
  if txt then
    for _, par in ipairs(rotulos) do
      if txt:match(par[1]) then
        local classes = { "caixa", par[2] }
        for _, b in ipairs(el.content) do
          if b.t == "CodeBlock" then
            table.insert(classes, "com-diagrama")
            if eh_diagrama(b.text) then
              b.classes = pandoc.List({ "diagrama", classe_tamanho(largura(b.text), LARGURA_CAIXA) })
            end
          end
        end
        return pandoc.Div(el.content, pandoc.Attr("", classes))
      end
    end
  end
  return nil
end

function Para(el)
  local txt = rotulo_de(el)
  if txt and txt:match("^Exercício") then
    return pandoc.Div({ el }, pandoc.Attr("", { "exercicio" }))
  end
  return nil
end

-- Deixa a largura das colunas por conta do motor de layout (ajuste ao conteúdo).
function Table(t)
  for i, cs in ipairs(t.colspecs) do
    t.colspecs[i] = { cs[1], nil }
  end
  return t
end

function Header(el)
  local txt = pandoc.utils.stringify(el.content)
  if el.level == 1 then
    if txt:match("^PARTE") or txt:match("^ANTES DE COMEÇAR") then
      el.classes:insert("parte")
    elseif txt:match("^APÊNDICE") then
      el.classes:insert("parte")
      el.classes:insert("apendices")
    end
  elseif el.level == 2 then
    if txt:match("^Capítulo") or txt:match("^Guia do primeiro teste") then
      el.classes:insert("capitulo")
    elseif txt:match("^P%d%d") then
      el.classes:insert("projeto")
    elseif txt:match("^Apêndice") or txt:match("^T%d%d") then
      el.classes:insert("apendice")
    end
  end
  return el
end
