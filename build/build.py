#!/usr/bin/env python3
"""Gera as edições do AI Systems Thinking.

Edições (saídas em dist/):
  aluno      Livro do Aluno completo — PDF, EPUB, HTML, DOCX e Markdown integral
  essencial  Edição Essencial (Trilha Essencial + guia do primeiro teste) — PDF e HTML
  programa   Manual do Programa (guia do primeiro teste + produto educacional) — PDF, HTML e DOCX

Requisitos: pandoc (>= 3.0) e o pacote Python weasyprint.
Uso:  python3 build/build.py [aluno|essencial|programa ...] [--sem-pdf]
      (sem nomes de edição, gera todas)
"""

import pathlib
import re
import subprocess
import sys

RAIZ = pathlib.Path(__file__).resolve().parent.parent
BUILD = RAIZ / "build"
DIST = RAIZ / "dist"
TMP = BUILD / "tmp"
VERSAO = "versão 1.1 (edição de teste)"

SUBTITULO = "Método para aprender a resolver problemas complexos usando IA, software e automação"

# Seções (títulos de nível 2) que compõem a Edição Essencial.
ESSENCIAL = [
    r"Prefácio", r"Como usar este livro",
    r"Capítulo [1-9] —", r"Capítulo 10 —", r"Capítulo 11 —",
    r"Capítulo 1[5-6] —", r"Capítulo 1[8-9] —", r"Capítulo 2[0-3] —",
    r"Capítulo 27 —", r"Capítulo 29 —", r"Capítulo 3[0-2] —", r"Capítulo 36 —",
    r"Revisão da Parte",
    r"Como funcionam os projetos", r"P0[0137] —",
    r"Nota final",
    r"Apêndice [ACEGHIJ] —",
    r"T0[2-57] —", r"T09 —", r"T1[0-2] —",
]


def ler(caminho):
    return pathlib.Path(caminho).read_text(encoding="utf-8").strip() + "\n"


def fontes_livro():
    arquivos = sorted(p for p in (RAIZ / "livro").glob("*.md") if p.name[0].isdigit())
    return "\n\n".join(ler(p) for p in arquivos)


def unidades(markdown):
    """Divide o Markdown em unidades iniciadas por títulos de nível 1 ou 2 (fora de código)."""
    blocos, atual, dentro_codigo = [], [], False
    for linha in markdown.split("\n"):
        semcit = re.sub(r"^>\s?", "", linha)
        if semcit.lstrip().startswith("```"):
            dentro_codigo = not dentro_codigo
        if not dentro_codigo and re.match(r"^#{1,2} ", linha):
            if atual:
                blocos.append(atual)
            atual = []
        atual.append(linha)
    if atual:
        blocos.append(atual)
    return ["\n".join(b) for b in blocos]


def essencial():
    guia = "# ANTES DE COMEÇAR\n\n" + ler(RAIZ / "programa" / "01-guia-do-primeiro-teste.md")
    escolhidas = []
    for u in unidades(fontes_livro()):
        titulo = u.split("\n", 1)[0]
        if titulo.startswith("# "):
            escolhidas.append(u)
        elif any(re.match(r"## " + padrao, titulo) for padrao in ESSENCIAL):
            escolhidas.append(u)
    return guia + "\n\n" + "\n\n".join(escolhidas)


def programa():
    intro = (
        "# PARTE A — O PRIMEIRO TESTE\n\n"
        "Este Manual acompanha o Livro do Aluno e é escrito para quem cria, conduz, avalia e mantém "
        "o método. A Parte A orienta o primeiro teste do material, feito por uma única pessoa — "
        "normalmente o próprio criador — antes de haver turmas. A Parte B trata do produto educacional: "
        "Founder Track, formatos de oferta, avaliação, certificação, governança e validação externa.\n\n"
    )
    return intro + ler(RAIZ / "programa" / "01-guia-do-primeiro-teste.md") + "\n\n" + ler(RAIZ / "programa" / "02-produto.md")


EDICOES = {
    "aluno": dict(
        nome="AI-Systems-Thinking",
        texto=fontes_livro,
        titulo="AI Systems Thinking",
        subtitulo=SUBTITULO,
        autor=f"Livro do Aluno · {VERSAO}",
        formatos=["pdf", "html", "epub", "docx", "md"],
    ),
    "essencial": dict(
        nome="AI-Systems-Thinking-Edicao-Essencial",
        texto=essencial,
        titulo="AI Systems Thinking",
        subtitulo="Edição Essencial — o caminho mais curto pelo método, com o guia do primeiro teste",
        autor=f"Edição Essencial · {VERSAO}",
        formatos=["pdf", "html"],
    ),
    "programa": dict(
        nome="AI-Systems-Thinking-Manual-do-Programa",
        texto=programa,
        titulo="AI Systems Thinking",
        subtitulo="Manual do Programa — para quem cria, conduz, avalia e mantém o método",
        autor=f"Manual do Programa · {VERSAO}",
        formatos=["pdf", "html", "docx"],
    ),
}


def pandoc(entrada, edicao, *args):
    cmd = [
        "pandoc", str(BUILD / "metadata.yaml"), str(entrada),
        "--from=markdown", "--lua-filter", str(BUILD / "filtro.lua"),
        "--toc", "--toc-depth=2", "--standalone",
        "-M", f"title={edicao['titulo']}",
        "-M", f"subtitle={edicao['subtitulo']}",
        "-M", f"author={edicao['autor']}",
        *args,
    ]
    subprocess.run(cmd, check=True, cwd=RAIZ)


def gerar(chave, com_pdf=True):
    ed = EDICOES[chave]
    texto = ed["texto"]()
    fonte = TMP / f"{chave}.md"
    fonte.write_text(texto, encoding="utf-8")
    nome = ed["nome"]

    if "md" in ed["formatos"]:
        cab = (f"# {ed['titulo']}\n\n**Projeto Oficial 00** — {ed['subtitulo']}.\n\n"
               f"*{ed['autor']}.*\n\n")
        (DIST / f"{nome}.md").write_text(cab + texto, encoding="utf-8")

    if "pdf" in ed["formatos"] and com_pdf:
        html = TMP / f"{chave}-impressao.html"
        pandoc(fonte, ed, "--to=html5", "--css", str(BUILD / "livro.css"), "-o", str(html))
        from weasyprint import HTML
        doc = HTML(filename=str(html), base_url=str(BUILD)).render()
        doc.write_pdf(str(DIST / f"{nome}.pdf"))
        print(f"{chave}: PDF com {len(doc.pages)} páginas")

    if "html" in ed["formatos"]:
        pandoc(fonte, ed, "--to=html5", "--css", str(BUILD / "tela.css"), "--embed-resources",
               "-o", str(DIST / f"{nome}.html"))
    if "epub" in ed["formatos"]:
        pandoc(fonte, ed, "--to=epub3", "--css", str(BUILD / "tela.css"), "--split-level=2",
               "-o", str(DIST / f"{nome}.epub"))
    if "docx" in ed["formatos"]:
        pandoc(fonte, ed, "--to=docx", "-o", str(DIST / f"{nome}.docx"))

    print(f"{chave}: {len(texto.split())} palavras")


def main():
    DIST.mkdir(exist_ok=True)
    TMP.mkdir(exist_ok=True)
    pedidas = [a for a in sys.argv[1:] if not a.startswith("--")] or list(EDICOES)
    for chave in pedidas:
        gerar(chave, com_pdf="--sem-pdf" not in sys.argv)
    print("Saídas em dist/.")


if __name__ == "__main__":
    main()
