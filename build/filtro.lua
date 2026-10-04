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
        return pandoc.Div(el.content, pandoc.Attr("", { "caixa", par[2] }))
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
    if txt:match("^PARTE") then
      el.classes:insert("parte")
    elseif txt:match("^APÊNDICE") then
      el.classes:insert("parte")
      el.classes:insert("apendices")
    end
  elseif el.level == 2 then
    if txt:match("^Capítulo") then
      el.classes:insert("capitulo")
    elseif txt:match("^P%d%d") then
      el.classes:insert("projeto")
    elseif txt:match("^Apêndice") or txt:match("^T%d%d") then
      el.classes:insert("apendice")
    end
  end
  return el
end
