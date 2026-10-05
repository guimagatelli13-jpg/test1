# AI Systems Thinking

**Projeto Oficial 00** — Método para aprender a resolver problemas complexos usando IA, software e automação.

Versão 1.1 — edição de teste. Veja as [notas de versão](NOTAS-DE-VERSAO.md).

Este repositório contém o livro completo, que funciona ao mesmo tempo como livro, método, currículo, manual do aluno e base de um produto educacional. A estrutura pedagógica foi projetada e revisada; a validação com turmas reais e com o mercado ainda não foi feita (o Manual do Programa descreve exatamente que evidências faltam).

## Por onde começar

**Se você vai ser o primeiro a testar o método**, abra a [Edição Essencial](dist/AI-Systems-Thinking-Edicao-Essencial.pdf). Ela começa com o Guia do primeiro teste e contém só os capítulos da Trilha Essencial, com o caso-guia, os trabalhos comentados e as respostas. Copie também a pasta [`material/caso-guia/`](material/caso-guia/) (sem abrir `respostas/` antes de fazer os projetos).

## As edições

| Edição | Arquivos | Para quem |
|---|---|---|
| **Edição Essencial** | [PDF](dist/AI-Systems-Thinking-Edicao-Essencial.pdf) · [HTML](dist/AI-Systems-Thinking-Edicao-Essencial.html) | Quem quer o caminho mais curto pelo método (cerca de 55 horas estimadas) — e o primeiro teste. |
| **Livro do Aluno** (completo) | [PDF](dist/AI-Systems-Thinking.pdf) · [EPUB](dist/AI-Systems-Thinking.epub) · [HTML](dist/AI-Systems-Thinking.html) · [DOCX](dist/AI-Systems-Thinking.docx) · [Markdown](dist/AI-Systems-Thinking.md) | Percurso completo: 38 capítulos, 11 projetos, apêndices A a J. |
| **Manual do Programa** | [PDF](dist/AI-Systems-Thinking-Manual-do-Programa.pdf) · [HTML](dist/AI-Systems-Thinking-Manual-do-Programa.html) · [DOCX](dist/AI-Systems-Thinking-Manual-do-Programa.docx) | Quem cria, conduz, avalia e mantém o método: guia do primeiro teste, Founder Track, formatos, certificação, governança, validação externa. |

Material de trabalho do caso-guia (planilhas e mensagens): [`material/caso-guia/`](material/caso-guia/LEIA-ME.md).

O texto-fonte, por parte, está em `livro/`:

| Arquivo | Conteúdo |
|---|---|
| [`01-parte-i.md`](livro/01-parte-i.md) | Parte I — A nova forma de resolver problemas: prefácio, como usar o livro, caps. 1–3 (o método, a Escada de Intervenção, níveis de autonomia, escala de evidência) |
| [`02-parte-ii-a.md`](livro/02-parte-ii-a.md) | Parte II — Aprender a pensar: caps. 4–6 (problemas, sistemas, decomposição) |
| [`03-parte-ii-b.md`](livro/03-parte-ii-b.md) | Parte II — caps. 7–10 (abstração, processos, dados, regras) e revisão |
| [`04-parte-iii-a.md`](livro/04-parte-iii-a.md) | Parte III — Aprender a enxergar tecnologia: caps. 11–13 (anatomia de sistemas, dados, APIs e webhooks) |
| [`05-parte-iii-b.md`](livro/05-parte-iii-b.md) | Parte III — caps. 14–17 (identidade e acesso, automação, IA, infraestrutura) e revisão |
| [`06-parte-iv.md`](livro/06-parte-iv.md) | Parte IV — Aprender a projetar: caps. 18–21 (requisitos, arquitetura, decisões, especificação e delegação) |
| [`07-parte-v-a.md`](livro/07-parte-v-a.md) | Parte V — Construir com IA: caps. 22–23 (os dez protocolos de IA, supervisão da construção) |
| [`08-parte-v-b.md`](livro/08-parte-v-b.md) | Parte V — caps. 24–26 (automação robusta, integrações, aplicações) |
| [`09-parte-v-c.md`](livro/09-parte-v-c.md) | Parte V — caps. 27–29 (IA aplicada, RAG, agentes) e revisão |
| [`10-parte-vi.md`](livro/10-parte-vi.md) | Parte VI — Construir algo confiável: caps. 30–34 (testes, validação, segurança e privacidade, observabilidade e falhas, evolução) |
| [`11-parte-vii.md`](livro/11-parte-vii.md) | Parte VII — Projetos P00 a P10, com rubricas e critérios de aprovação |
| [`12-parte-viii.md`](livro/12-parte-viii.md) | Parte VIII — Domínio e transferência: matriz de 26 competências, avaliação e exame de transferência, portfólio, orquestração; Nota final |
| [`14-apendice-a.md`](livro/14-apendice-a.md) | Apêndice A — 16 templates |
| [`15-apendices-b-g.md`](livro/15-apendices-b-g.md) | Apêndices B–G — checklists, rubricas, decisões comentadas, cartões dos protocolos, anti-padrões, glossário |
| [`16-apendice-h.md`](livro/16-apendice-h.md) | Apêndice H — Caso-guia: Clínica Movimento |
| [`17-apendice-i.md`](livro/17-apendice-i.md) | Apêndice I — Trabalhos comentados (P00, P03, P07) |
| [`18-apendice-j.md`](livro/18-apendice-j.md) | Apêndice J — Respostas dos testes de recuperação e gabarito do caso-guia |

O Manual do Programa está em `programa/`: [`01-guia-do-primeiro-teste.md`](programa/01-guia-do-primeiro-teste.md) e [`02-produto.md`](programa/02-produto.md).

## Gerar as versões

Requisitos: `pandoc` 3.x, o pacote Python `weasyprint` e as fontes Noto Serif, IBM Plex Sans e JetBrains Mono (em Ubuntu: `apt-get install pandoc fonts-noto-core fonts-ibm-plex fonts-jetbrains-mono` e `pip install weasyprint`).

```
python3 build/build.py                      # gera as três edições em dist/
python3 build/build.py essencial            # só uma edição (aluno, essencial ou programa)
python3 build/build.py --sem-pdf            # mais rápido, sem os PDFs
python3 material/caso-guia/gerar.py         # regenera os dados do caso-guia (resultado idêntico)
```

A seleção de capítulos da Edição Essencial está na lista `ESSENCIAL` de `build/build.py`.

A diagramação fica em `build/`: `filtro.lua` transforma as citações rotuladas do Markdown (Caso, Anti-padrão, Princípio, Ficha, ▲ Avançado, Para conferir) em caixas tipadas e ajusta o corpo dos diagramas em texto; `livro.css` define a versão impressa; `tela.css`, as versões de tela.

## Convenções do texto-fonte

- Partes são títulos de nível 1 (`# PARTE ...`); capítulos, projetos, apêndices e templates são de nível 2.
- Caixas são citações que começam com um rótulo em negrito (`> **Caso Vértice** — ...`).
- Exercícios começam com `**Exercício X.Y · camada · modo de IA**`.
- Diagramas são desenhados em texto, dentro de blocos de código.
- Ferramentas aparecem apenas como categorias; o texto não depende de marcas, versões ou preços.

## Licença

A definir pelo autor.
