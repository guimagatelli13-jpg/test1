# Caso-guia: Clínica Movimento — material de trabalho

Material simulado para fazer os exercícios e projetos do livro sem precisar de uma organização real. A descrição do caso, as entrevistas e o guia de rotulagem estão no **Apêndice H** do livro.

| Arquivo | O que é | Usado em |
|---|---|---|
| `agenda.csv` | Planilha de agenda da recepção, 03/08 a 28/08/2026, como ela existe na clínica (com os defeitos de uma planilha real). | P00, P03, P02, P04 |
| `pacientes.csv` | Cadastro dos pacientes. Telefones usam o DDD fictício (00). | P03, P02, P05, P06 |
| `pacotes.csv` | Planilha de controle de pacotes mantida pela dona, atualizada às sextas. | P03, P02 |
| `mensagens.csv` | 60 mensagens de pacientes, sem rótulo. | P07 |
| `respostas/` | Rotulagem de referência, análise de referência e estatísticas. **Não abra antes de fazer o seu trabalho.** | Correção |
| `gerar.py` | Script que gera todos os arquivos (semente fixa; o resultado é sempre o mesmo). | Manutenção |

Todos os nomes, números e situações são fictícios.

Para regenerar: `python3 gerar.py`. Para conferir uma análise de agenda: `python3 respostas/analise-de-referencia.py`.
