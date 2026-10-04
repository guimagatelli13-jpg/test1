# APÊNDICES

Os apêndices reúnem o material de uso: templates, checklists, rubricas, exemplos comentados de decisões, cartões dos protocolos de IA, o catálogo de anti-padrões e o glossário. Eles foram escritos para serem copiados, impressos e usados — no estudo, nos projetos e no trabalho.

## Apêndice A — Templates

Os dezesseis templates a seguir correspondem aos artefatos do método. Cada um traz quando usar, o formulário em texto simples (para copiar para qualquer editor) e uma lista de verificação.

Três regras de uso valem para todos:

- **Proporcionalidade.** Preencha com a profundidade que o custo do erro justifica. Para um problema pessoal pequeno, uma linha por campo pode bastar.
- **Campo vazio é informação.** Se você não consegue preencher um campo, não invente: escreva "desconhecido" e o que precisaria fazer para descobrir.
- **Versão e data.** Todo artefato tem versão e data. Artefatos sem data não podem ser comparados com o que aconteceu depois.

## T01 — Project Brief

**Quando usar:** no início de qualquer projeto, para combinar escopo, restrições e critérios com quem tem o problema. Revise sempre que o escopo mudar.

```
PROJECT BRIEF
Projeto: ______________________   Versão: ____   Data: ________
Responsável: __________________   Quem aprova este brief: ____________

1. PROBLEMA (resumo de 3 a 5 linhas; detalhe no T02)

2. PARA QUEM (stakeholders principais; detalhe no T05)

3. OBJETIVO E CRITÉRIO DE SUCESSO
   Indicador principal: ________  Linha de base: ________  Meta: ________  Prazo: ____
   Indicador(es) de proteção: ________

4. ESCOPO
   Dentro:
   Fora (explicitamente):

5. RESTRIÇÕES
   Prazo:            Orçamento:          Equipe/tempo disponível:
   Tecnologia:       Dados (o que pode e não pode ser usado, onde):
   Legais/regulatórias (a confirmar com quem responde por elas):

6. RECURSOS DISPONÍVEIS (pessoas, acessos, ferramentas, dados)

7. DECISÕES JÁ TOMADAS (e por quem) — registrar no Decision Log

8. RISCOS DO PROJETO (o que pode impedir o projeto de acontecer)

9. ENTREGAS E MARCOS
   | Marco | Entrega | Data prevista | Critério de pronto |

10. COMUNICAÇÃO
    Cadência de atualização: ________  Canal: ________  Participantes: ________

11. ENCERRAMENTO
    O que acontece ao final (quem opera, quem mantém, o que é entregue):
```

**Verificação**

- [ ] O problema está descrito sem solução embutida.
- [ ] Há indicador, linha de base (ou método para obtê-la), meta e prazo.
- [ ] O que está fora do escopo está escrito.
- [ ] Restrições de dados estão explícitas.
- [ ] Quem aprova o brief leu e concordou.
- [ ] O encerramento está definido (quem fica com a solução).

## T02 — Problem Statement

**Quando usar:** sempre, antes de qualquer decisão de solução. É o artefato a que todos os outros se referem.

```
PROBLEM STATEMENT
Projeto: ______________________   Versão: ____   Data: ________   Autor: ________

1. AFETADOS — Para quem isto é um problema?

2. ESTADO ATUAL — O que acontece hoje, de forma observável? (fatos, com fonte)

3. ESTADO DESEJADO — O que deveria acontecer?

4. IMPACTO — Por que a diferença importa? Quanto custa (tempo, dinheiro, erros, risco)?

5. CAUSAS
   Conhecidas (com evidência):
   Hipóteses (a verificar, com o que as confirmaria ou refutaria):

6. RESTRIÇÕES — O que não pode mudar ou não pode ser violado?

7. CRITÉRIO DE RESOLUÇÃO
   Indicador principal: ________  Como é medido: ________
   Linha de base: ________ (ou método e prazo para obtê-la)
   Meta: ________  Prazo: ________
   Indicador(es) de proteção (não podem piorar): ________

8. FORA DO ESCOPO

DECLARAÇÃO (um parágrafo, integrando os elementos acima):

REGISTRO DE APOIO
| Fatos (fonte) | Interpretações (de quem) | Hipóteses (como verificar) |
|               |                          |                            |

VALIDAÇÃO COM AFETADOS
Mostrado a: ________  Em: ________  Reação/ajustes: ________
```

**Verificação**

- [ ] Não menciona nenhuma solução, ferramenta ou tecnologia.
- [ ] O estado atual contém fatos com fonte, não só interpretações.
- [ ] O critério de resolução mede o problema, não a solução.
- [ ] Há pelo menos um indicador de proteção.
- [ ] O nível do problema é aquele em que ele importa, você tem influência e é verificável.
- [ ] Pelo menos um afetado reconheceu a declaração.

## T03 — System Map

**Quando usar:** depois das primeiras conversas, para entender o sistema em que o problema existe. Atualize quando descobrir elementos ou relações novas.

```
SYSTEM MAP
Projeto: ______________________   Versão: ____   Data: ________

1. FRONTEIRA — O que está dentro do sistema? Por que a fronteira está aqui?

2. AMBIENTE — O que influencia, mas será tratado como dado?

3. ATORES — pessoas, papéis, organizações
   | Ator | Papel no sistema |

4. ELEMENTOS NÃO HUMANOS — equipamentos, documentos, sistemas, repositórios
   | Elemento | Função | Quem usa |

5. FLUXOS
   Material:     De ______ para ______ (o quê)
   Informação:   De ______ para ______ (o quê, em que formato)
   Decisão:      Quem decide o quê, para quem
   Dinheiro:     De ______ para ______

6. ESTOQUES — onde as coisas se acumulam (e tamanho típico)

7. GARGALO (provável) — etapa de menor capacidade, com evidência

8. LAÇOS
   Reforço:     A → B → C → A  (descrição)
   Equilíbrio:  A → B → (−) A  (descrição)

9. ATRASOS RELEVANTES — efeitos que demoram a aparecer

10. PONTOS DE ALAVANCAGEM (gargalo, entrada, regras, informação)

DIAGRAMA (desenhe abaixo ou anexe)
```

**Verificação (quatro testes)**

- [ ] Teste do estranho: alguém de fora explica o caminho de um item olhando o mapa.
- [ ] Teste do afetado: quem vive o sistema reconhece o mapa como real.
- [ ] Teste do problema: dá para apontar onde o problema aparece e duas hipóteses de causa.
- [ ] Teste da intervenção: dá para apontar onde cada solução atuaria e seus efeitos de segunda ordem.

## T04 — Process Map

**Quando usar:** para descobrir e representar o processo real. Faça um mapa do processo oficial e outro do real, quando forem diferentes.

```
PROCESS MAP
Processo: ______________________   Versão: real / oficial   Data: ________
Início (evento que dispara): ________   Fim (resultado entregue): ________
Casos acompanhados (identificação anonimizada e data): ________

1. PAPÉIS (raias)

2. ATIVIDADES
   | # | Atividade (verbo + objeto) | Papel | Entrada | Saída | Ferramenta/registro | Tempo de execução | Espera antes |

3. DECISÕES
   | # | Pergunta | Opções | Quem decide | Regra (ref. tabela de decisão) |

4. EXCEÇÕES
   | # | Exceção | O que dispara | Frequência | Tratamento atual | Quem decide |

5. RETRABALHO — retornos, causa, frequência, tempo acrescentado

6. DESPERDÍCIOS
   Espera:       Retrabalho:       Transcrição:
   Busca:        Aprovação redundante:       Interrupção:
   Lotes:        Passagens de bastão (quantas):

7. TEMPO TOTAL (mediana dos casos) ______  dos quais em execução ______  em espera ______

8. DIFERENÇAS ENTRE OFICIAL E REAL — e a necessidade que cada atalho atende

DIAGRAMA EM RAIAS (desenhe abaixo ou anexe)
```

**Verificação**

- [ ] Baseado em casos reais acompanhados, não só em descrições.
- [ ] Esperas medidas (ou estimadas com método declarado).
- [ ] Exceções registradas com frequência e tratamento.
- [ ] Pelo menos dois executores reconheceram o mapa.
- [ ] Cada atalho tem a necessidade correspondente identificada.

## T05 — Stakeholder Map

**Quando usar:** no enquadramento, e sempre que um novo grupo afetado aparecer.

```
STAKEHOLDER MAP
Projeto: ______________________   Versão: ____   Data: ________

| Stakeholder | Papel (sofre / causa / decide / opera / paga / pode bloquear) |
| Posição (o que pede) | Interesse (o que precisa) | Influência (alta/baixa) |
| O que perde se a situação mudar | Como envolver |

GRADE INFLUÊNCIA × INTERESSE
                interesse baixo        interesse alto
influência alta [manter informado]     [envolver de perto]
influência baixa [monitorar]           [consultar]
(Lembrete: quem opera a solução tem influência real maior que a formal.)

CONFLITOS DE INTERESSE IDENTIFICADOS — e como afetam o critério de resolução

QUEM AINDA NÃO FOI OUVIDO
```

**Verificação**

- [ ] Posição e interesse separados para cada stakeholder.
- [ ] "O que perde" preenchido para todos.
- [ ] Quem vai operar a solução está incluído e foi ouvido.
- [ ] Conflitos de interesse explicitados.

## T06 — Requirements

**Quando usar:** depois do Problem Statement e dos modelos, antes da arquitetura.

```
REQUIREMENTS
Projeto: ______________________   Versão: ____   Data: ________

| ID | Tipo | Requisito | Origem (causa / stakeholder / regra) | Prioridade | Critérios (ref. T07) | Teste (ref. T11) |
| R01 | Funcional |  |  | Deve |  |  |
| R02 | Qualidade |  |  | Deveria |  |  |
| R03 | Dados |  |  |  |  |  |
| R04 | Segurança/privacidade |  |  |  |  |  |
| R05 | Restrição |  |  |  |  |  |
| R06 | Transição |  |  |  |  |  |

Tipos: Funcional · Qualidade · Dados · Segurança/privacidade · Restrição · Transição
Prioridades: Deve · Deveria · Poderia · Não agora

LISTA "NÃO AGORA" (ideias reconhecidas e conscientemente adiadas)
```

**Verificação**

- [ ] Cada requisito é necessário, verificável, não ambíguo, atômico, priorizado e viável.
- [ ] Nenhum requisito usa palavras ambíguas (rápido, fácil, adequado, suportar, tratar, etc.) sem medida.
- [ ] Requisitos são independentes de solução sempre que possível.
- [ ] No máximo metade está em "Deve".
- [ ] Cada requisito tem origem; cada causa importante tem requisito.
- [ ] Há requisitos de qualidade e de transição.

## T07 — Acceptance Criteria

**Quando usar:** para cada requisito "Deve" (e para os demais, quando forem implementados), antes de especificar ou delegar.

```
ACCEPTANCE CRITERIA
Requisito: R__ — ______________________   Versão: ____   Data: ________

| ID | Tipo | Dado (contexto/estado inicial) | Quando (ação/evento) | Então (resultado observável) |
| CA-1 | Normal |  |  |  |
| CA-2 | Negativo |  |  |  |
| CA-3 | Limite (no limite) |  |  |  |
| CA-4 | Limite (logo acima/abaixo) |  |  |  |
| CA-5 | Dado ausente/inválido |  |  |  |
| CA-6 | Duplicidade |  |  |  |
| CA-7 | Concorrência |  |  |  |
| CA-8 | Falha de dependência |  |  |  |
(remova os tipos que não se aplicam, justificando)

DEFINIÇÃO DE PRONTO DO PROJETO (vale para toda entrega)
[ ] Todos os critérios passam em testes registrados
[ ] Nenhum segredo no código ou na configuração visível
[ ] Logs das operações principais funcionando
[ ] Documentação de operação atualizada
[ ] Decisões registradas no Decision Log
```

**Verificação**

- [ ] Cada "Então" é observável por outra pessoa sem interpretação.
- [ ] Há pelo menos um caso negativo e um caso limite.
- [ ] Os limites dizem se são inclusivos ou exclusivos.
- [ ] O comportamento com dado ausente é definido (sem valores padrão implícitos).

## T08 — Architecture Decision Record

**Quando usar:** para decisões de estrutura caras de reverter.

```
ADR-___ — TÍTULO DA DECISÃO
Data: ________   Status: proposta / aceita / substituída por ADR-___ / revertida
Responsável pela decisão: ________   Participantes: ________

1. CONTEXTO
   Problema e requisitos relevantes (ref. T02, T06):
   Restrições:
   Forças em tensão:

2. ALTERNATIVAS CONSIDERADAS
   A) ________  Degrau da Escada: __  Descrição:
   B) ________  Degrau da Escada: __  Descrição:
   C) ________  Degrau da Escada: __  Descrição:
   (incluir "comprar" quando aplicável)

3. CRITÉRIOS E COMPARAÇÃO
   Eliminatórios: ________
   | Critério | Peso | A | B | C |
   Robustez: a decisão muda se o peso de ________ variar em uma unidade? ____

4. DECISÃO

5. JUSTIFICATIVA (ligada a requisitos e critérios)

6. EVIDÊNCIA (com tipo: medida / teste / experiência / especialista / fornecedor / IA / suposição)

7. CONSEQUÊNCIAS
   Positivas:
   Negativas (aceitas conscientemente):
   O que fica mais difícil de mudar:

8. RISCOS (ref. T13)

9. REVERSIBILIDADE — como reverter e quanto custa

10. HIPÓTESE E VALIDAÇÃO
    Esperamos que: ________
    Saberemos em: ________ (data/evento)  por meio de: ________
    Sinal de que a decisão foi errada: ________

11. RELACIONADOS (outros ADRs, entradas do Decision Log)
```

**Verificação**

- [ ] Pelo menos três alternativas reais, em degraus diferentes.
- [ ] Critérios eliminatórios separados dos ponderados.
- [ ] Evidência classificada por tipo.
- [ ] Consequências negativas escritas.
- [ ] Hipótese com data e sinal de erro.

## T09 — Decision Log

**Quando usar:** desde o primeiro dia do projeto, para todas as decisões que atendem aos critérios do Capítulo 20 (cara de reverter, afeta outros, não óbvia, contestada, depende de hipótese, aceita risco).

```
DECISION LOG
Projeto: ______________________

| ID | Data | Decisão | Contexto | Alternativas | Justificativa | Evidência (tipo) |
| Riscos | Hipótese | Validação (como/quando/sinal de erro) | Responsável | Status | Revisão |

ENTRADA (formato estendido, para decisões relevantes)
DL-__  ________________________________   Data: ______  Status: ______
Contexto:
Alternativas: (a) ______ (b) ______ (c) ______
Justificativa:
Evidência:            Tipo: medida / teste / experiência / especialista / fornecedor / IA / suposição
Riscos:
Hipótese:
Validação:            Quando: ______   Sinal de erro: ______
Responsável:
Revisão (preencher na retrospectiva): confirmada / refutada / inconclusiva — comentário:
```

**Verificação**

- [ ] Toda decisão tem alternativas, não só a escolhida.
- [ ] "Riscos: nenhum" não aparece.
- [ ] Toda hipótese tem forma de validação e data.
- [ ] Decisões revisadas na retrospectiva têm o campo de revisão preenchido.

## T10 — AI Delegation Brief

**Quando usar:** sempre que delegar a construção de um componente a uma IA (ou a uma pessoa, ou a um fornecedor).

```
AI DELEGATION BRIEF
Componente: ______________________   Versão: ____   Data: ________   Autor: ________

1. CONTEXTO
   Sistema em que o componente vive:
   Problema que ajuda a resolver (ref. T02 / DL):
   O que já existe em volta (anexos: esquema, código, convenções):

2. OBJETIVO — o que exatamente este componente deve fazer

3. RESTRIÇÕES
   Tecnologia/linguagem/plataforma:
   O que NÃO pode ser alterado:
   Segurança (segredos, permissões, dados):
   Desempenho/custo:
   Dependências permitidas:

4. DADOS
   Entradas (nome, tipo, formato, origem, obrigatoriedade):
   Saídas (nome, tipo, formato, destino):

5. REGRAS (numeradas: R1, R2... — cada regra uma linha, com parâmetros explícitos)

6. CRITÉRIOS DE ACEITAÇÃO (ref. T07, ou listados aqui)

7. FORMATO DA ENTREGA
   (código/configuração, onde, estrutura, explicações exigidas)

8. TESTES EXIGIDOS
   (um por critério; casos negativos; adversariais se houver texto de terceiros)

9. ACEITAÇÃO
   Como vou verificar:
   O que acontece se não passar:

INSTRUÇÕES DE TRABALHO
- Antes de implementar, resuma o entendimento e liste dúvidas; pare se houver dúvida sobre regra.
- Não altere nada fora do escopo definido.
- Não coloque segredos no código.
- Ao final, liste suposições feitas e o que não foi implementado.

REGISTRO PÓS-ENTREGA
Dúvidas levantadas e respostas: ________
Suposições declaradas e decisão sobre cada uma: ________
Resultado da verificação: ________
```

**Verificação (antes de enviar)**

- [ ] Protocolo 5 aplicado e lacunas resolvidas.
- [ ] Nenhuma regra importante deixada para quem constrói.
- [ ] Restrições de escopo explícitas.
- [ ] Nenhum dado real sensível no brief ou nos anexos.
- [ ] A unidade é pequena o suficiente para ser verificada por completo.

## T11 — Test Plan

**Quando usar:** antes de construir (planejamento) e durante a verificação (execução e registro).

```
TEST PLAN
Componente/sistema: ______________________   Versão testada: ____   Data: ________

1. ESCOPO — o que será testado
2. FORA DO ESCOPO — o que não será testado, e por quê
3. AMBIENTE — onde (nunca produção, exceto aceitação planejada)
4. DADOS DE TESTE — fictícios; como foram montados
5. CRITÉRIOS DE SAÍDA — o que precisa passar para aceitar
6. RESPONSÁVEIS — quem executa, quem verifica

CASOS
| ID | Cobre (CA/regra/invariante) | Tipo | Cenário | Entrada | Esperado | Obtido | Passou? | Evidência | Data |

Tipos: normal · negativo · limite · ausente/inválido · exceção · estado · permissão ·
       duplicidade · concorrência · falha de dependência · adversarial · regressão · aceitação

TESTE DE SABOTAGEM
| Regra sabotada | Como | Teste(s) que falharam | Conclusão |

COMPONENTES COM IA
Conjunto de avaliação: ______ casos (separados: ______)  Limiares definidos em: ______
| Métrica | Limiar | Resultado (execução 1 / 2 / 3) |

DEFEITOS ENCONTRADOS
| ID | Descrição | Gravidade | Correção | Reteste |
```

**Verificação**

- [ ] Há mais casos negativos (incluindo permissão e estado) do que você acharia confortável.
- [ ] Cada caso aponta para um critério, regra ou invariante.
- [ ] Toda execução tem evidência e data.
- [ ] O teste de sabotagem foi aplicado às regras críticas.
- [ ] Os testes podem ser repetidos (regressão).

## T12 — Validation Report

**Quando usar:** ao fim de um piloto ou período de uso real, para responder se o problema foi resolvido.

```
VALIDATION REPORT
Projeto: ______________________   Período avaliado: ________   Data: ________

1. PROBLEMA E INDICADOR (ref. T02)
2. HIPÓTESE (ref. Decision Log)
3. MÉTODO
   Comparação: antes/depois · etapas · grupo de comparação
   Linha de base (como e quando medida):
   Outras mudanças no período:
   Sazonalidade e explicações alternativas consideradas:
4. RESULTADOS
   Indicador principal: linha de base ______ → resultado ______ (meta ______)
   Indicadores de proteção:
   Evidência qualitativa (observações, conversas):
   Adoção (a solução é usada como previsto? surgiram atalhos?):
5. NÍVEL DE EVIDÊNCIA ATINGIDO: E0 / E1 / E2 / E3 / E4 — justificativa
6. EFEITOS NÃO ESPERADOS (inclusive segunda ordem; o gargalo mudou?)
7. LIMITAÇÕES
8. CONCLUSÃO: validado · parcialmente validado · não validado
9. PRÓXIMOS PASSOS
```

**Verificação**

- [ ] O plano de validação foi escrito antes do piloto.
- [ ] Linha de base e resultado medidos da mesma forma.
- [ ] Explicações alternativas consideradas e discutidas.
- [ ] Limitações escritas.
- [ ] A conclusão é proporcional à evidência.

## T13 — Risk Register

**Quando usar:** desde a decisão de arquitetura; revisado a cada fase, a cada incidente e antes de ampliar autonomia ou escala.

```
RISK REGISTER
Projeto: ______________________   Versão: ____   Data: ________

ATIVOS A PROTEGER (dados, dinheiro, operação, reputação, pessoas):

QUATRO PERGUNTAS
1. O que estamos protegendo?
2. De quê / de quem? (erro humano, automação defeituosa, fornecedor, má-fé, injeção)
3. Como pode dar errado?
4. O que faremos? (evitar · reduzir · transferir · aceitar)

| ID | Risco | Causa | Consequência | Prob. (B/M/A) | Impacto (B/M/A) |
| Controles existentes | Controles planejados | Responsável | Status | Próxima revisão |

AUTOMAÇÕES, COMPONENTES COM IA E AGENTES
| Componente | Identidade | Permissões | Pior comportamento possível | Como seria percebido | Como seria interrompido |

DEPENDÊNCIAS ENTRE RISCOS E ARQUITETURA
(riscos cujo impacto mudaria se a arquitetura mudasse)
```

**Verificação**

- [ ] Os riscos de privacidade e de exposição de dados foram considerados.
- [ ] Componentes que leem conteúdo de terceiros têm risco de injeção registrado.
- [ ] O pior comportamento de cada automação foi considerado.
- [ ] Riscos altos têm controle de arquitetura, não só instrução ou boa vontade.
- [ ] Cada risco tem responsável.

## T14 — Retrospective

**Quando usar:** ao fim de cada fase ou projeto, e periodicamente durante a operação.

```
RETROSPECTIVE
Projeto: ______________________   Período: ________   Participantes: ________

1. O QUE FUNCIONOU E DEVE SER MANTIDO

2. O QUE NÃO FUNCIONOU — E POR QUÊ (causas no sistema e no processo, não em pessoas)

3. O QUE APRENDEMOS QUE NÃO SABÍAMOS
   Sobre o problema:
   Sobre a tecnologia:
   Sobre o método / nosso modo de trabalhar:

4. REVISÃO DE HIPÓTESES
   | Decisão (DL/ADR) | Hipótese | Resultado observado | Confirmada / refutada / inconclusiva |

5. CALIBRAÇÃO — previsões feitas × resultados

6. AÇÕES
   | Ação | Responsável | Prazo |

7. ITENS PARA A LISTA DE EVOLUÇÃO / DÍVIDA TÉCNICA
```

**Verificação**

- [ ] As causas estão no sistema, não em culpados.
- [ ] Pelo menos duas hipóteses do Decision Log foram revisadas.
- [ ] Cada ação tem responsável e prazo.
- [ ] Há pelo menos um aprendizado específico (não genérico).

## T15 — Portfolio Case

**Quando usar:** ao concluir cada projeto (versão curta) e para os casos principais do portfólio (versão completa).

```
PORTFOLIO CASE
Título: ______________________   Projeto: P__   Período: ________
Papel do autor: ________   Outras pessoas envolvidas: ________   Uso de IA: ________

PROBLEMA
CONTEXTO (anonimizado se necessário)
SITUAÇÃO ANTERIOR (com indicador na linha de base)
ANÁLISE (o achado principal)
DECISÕES (2 ou 3, com alternativas e justificativa)
ARQUITETURA (diagrama + porquê)
IMPLEMENTAÇÃO (o que foi delegado e como foi supervisionado)
TESTES (o que revelaram)
VALIDAÇÃO (método e nível de evidência)
RESULTADOS (com nível de evidência declarado)
LIMITAÇÕES
APRENDIZADOS (específicos)
PRÓXIMOS PASSOS

VERSÃO DE UMA PÁGINA
Problema (2 linhas) · Decisão principal (2 linhas) · Resultado com evidência (2 linhas) ·
Limitação principal (1 linha) · Aprendizado principal (1 linha)
```

**Verificação (honestidade)**

- [ ] Todo resultado declara seu nível de evidência.
- [ ] Nenhum dado confidencial ou pessoal.
- [ ] Autorização do terceiro, quando houver.
- [ ] Autoria e uso de IA declarados.
- [ ] Números ilustrativos marcados ou ausentes.
- [ ] Limitações presentes.

## T16 — Competency Assessment

**Quando usar:** ao fim de cada projeto (para as competências avaliadas nele) e ao fim da formação (todas).

```
COMPETENCY ASSESSMENT
Aluno: ________   Avaliador: ________ (ou autoavaliação / par)   Data: ________
Projetos considerados: ________

Níveis: 1 Reconhece · 2 Aplica com apoio · 3 Aplica com autonomia · 4 Transfere

| # | Competência | Nível | Evidência (artefato, projeto) | Próximo passo |
| 1 | Problem Framing |  |  |  |
| 2 | Systems Thinking |  |  |  |
| 3 | Decomposition |  |  |  |
| 4 | Abstraction |  |  |  |
| 5 | Process Mapping |  |  |  |
| 6 | Data Thinking |  |  |  |
| 7 | Rule Modeling |  |  |  |
| 8 | Automation Thinking |  |  |  |
| 9 | AI Opportunity Identification |  |  |  |
| 10 | Technology Literacy |  |  |  |
| 11 | Requirements |  |  |  |
| 12 | Architecture |  |  |  |
| 13 | Technical Decision Making |  |  |  |
| 14 | Specification |  |  |  |
| 15 | AI Delegation |  |  |  |
| 16 | Implementation Supervision |  |  |  |
| 17 | Integration |  |  |  |
| 18 | Testing |  |  |  |
| 19 | Validation |  |  |  |
| 20 | Risk Analysis |  |  |  |
| 21 | Security Awareness |  |  |  |
| 22 | Documentation |  |  |  |
| 23 | Communication |  |  |  |
| 24 | Project Management |  |  |  |
| 25 | Orchestration |  |  |  |
| 26 | Metacognition |  |  |  |

CALIBRAÇÃO
Competências em que autoavaliação e avaliação diferem em 2 níveis ou mais: ________
Discussão e conclusão: ________

SÍNTESE
Pontos fortes (com evidência):
Pontos a desenvolver (com plano):
```

**Verificação**

- [ ] Cada nível tem evidência apontada.
- [ ] Nível 4 só é atribuído com evidência de transferência (variação ou problema novo).
- [ ] Diferenças grandes entre autoavaliação e avaliação foram discutidas.
