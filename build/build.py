#!/usr/bin/env python3
"""Gera as versões do livro AI Systems Thinking a partir de livro/*.md.

Saídas em dist/:
  AI-Systems-Thinking.md    versão integral em um único arquivo Markdown
  AI-Systems-Thinking.pdf   versão diagramada para impressão (A4)
  AI-Systems-Thinking.html  versão de leitura em tela (arquivo único)
  AI-Systems-Thinking.epub  e-book
  AI-Systems-Thinking.docx  versão editável

Requisitos: pandoc (>= 3.0) e o pacote Python weasyprint.
Uso:  python3 build/build.py [--sem-pdf]
"""

import pathlib
import subprocess
import sys

RAIZ = pathlib.Path(__file__).resolve().parent.parent
LIVRO = RAIZ / "livro"
BUILD = RAIZ / "build"
DIST = RAIZ / "dist"
TMP = BUILD / "tmp"
NOME = "AI-Systems-Thinking"


def pandoc(*args):
    cmd = ["pandoc", str(BUILD / "metadata.yaml"), *args]
    subprocess.run(cmd, check=True, cwd=RAIZ)


def main():
    DIST.mkdir(exist_ok=True)
    TMP.mkdir(exist_ok=True)

    capitulos = sorted(p for p in LIVRO.glob("*.md") if p.name[0].isdigit())
    if not capitulos:
        sys.exit("Nenhum arquivo encontrado em livro/.")

    integral = TMP / "integral.md"
    partes = [p.read_text(encoding="utf-8").strip() for p in capitulos]
    integral.write_text("\n\n".join(partes) + "\n", encoding="utf-8")

    md_final = DIST / f"{NOME}.md"
    cabecalho = (
        "# AI Systems Thinking\n\n"
        "**Projeto Oficial 00** — Método para aprender a resolver problemas "
        "complexos usando IA, software e automação.\n\n"
        "*Primeira edição — versão 1.0 (edição de validação).*\n\n"
    )
    md_final.write_text(cabecalho + integral.read_text(encoding="utf-8"), encoding="utf-8")

    comuns = [
        str(integral),
        "--from=markdown",
        "--lua-filter", str(BUILD / "filtro.lua"),
        "--toc", "--toc-depth=2",
        "--standalone",
    ]

    # HTML para impressão -> PDF
    html_impressao = TMP / "impressao.html"
    pandoc(*comuns, "--to=html5", "--css", str(BUILD / "livro.css"),
           "-o", str(html_impressao))

    if "--sem-pdf" not in sys.argv:
        from weasyprint import HTML
        pdf = DIST / f"{NOME}.pdf"
        doc = HTML(filename=str(html_impressao), base_url=str(BUILD)).render()
        doc.write_pdf(str(pdf))
        print(f"PDF: {pdf.relative_to(RAIZ)} — {len(doc.pages)} páginas")

    # HTML de tela (arquivo único)
    pandoc(*comuns, "--to=html5", "--css", str(BUILD / "tela.css"),
           "--embed-resources", "-o", str(DIST / f"{NOME}.html"))

    # EPUB
    pandoc(*comuns, "--to=epub3", "--css", str(BUILD / "tela.css"),
           "--split-level=2", "-o", str(DIST / f"{NOME}.epub"))

    # DOCX
    pandoc(*comuns, "--to=docx", "-o", str(DIST / f"{NOME}.docx"))

    palavras = len(integral.read_text(encoding="utf-8").split())
    print(f"Arquivos-fonte: {len(capitulos)} · palavras: {palavras}")
    print("Saídas em dist/.")


if __name__ == "__main__":
    main()
