# PARTE IV — APRENDER A PROJETAR

Nas Partes II e III você aprendeu a entender o problema e a reconhecer os componentes da tecnologia. Esta parte liga as duas coisas. Ela ensina a transformar entendimento em **requisitos**, requisitos em **alternativas de arquitetura**, alternativas em **decisões registradas**, e decisões em **especificações** que podem ser entregues a uma pessoa, a uma IA ou a um fornecedor.

É aqui que o perfil B costuma ter o maior ganho. Quem já usa IA para construir coisas frequentemente pula exatamente estas etapas — e paga por isso depois, em sistemas que funcionam na demonstração e não no uso real.

## Capítulo 18 — Requisitos e critérios de aceitação

### Do problema ao requisito

Um **requisito** é uma afirmação sobre o que a solução precisa fazer ou como precisa ser, derivada do problema, das necessidades dos stakeholders e das regras do domínio. Requisitos são a ponte entre o Problem Statement ("o que está errado e como saberemos que foi resolvido") e a especificação ("o que exatamente será construído").

Todo requisito deve ser **rastreável**: deve ser possível dizer de onde ele veio (que causa da árvore de problemas ele ataca, que stakeholder o pediu, que regra o exige) e, mais tarde, que teste verifica se foi atendido. Um requisito que não se liga a nada é candidato a ser cortado. Um problema que não se liga a nenhum requisito não será resolvido.

```
  PROBLEMA ──► CAUSA (árvore) ──► REQUISITO ──► CRITÉRIO DE ACEITAÇÃO ──► TESTE
     ▲                                                                       │
     └───────────────── validação: o indicador mudou? ◄──────────────────────┘
```

### Tipos de requisito

| Tipo | Pergunta | Exemplo (Caso Marzipã) |
|---|---|---|
| **Funcional** | O que a solução faz? | Calcular as UTs de um pedido e verificar se cabem na capacidade restante do dia. |
| **De qualidade** (não funcional) | Quão bem faz? | A verificação de capacidade responde em menos de 2 segundos; funciona no celular de Helena. |
| **De dados** | Que informação guarda, por quanto tempo, com que qualidade? | Todo pedido confirmado tem cliente, data, itens e sinal registrado. |
| **De segurança e privacidade** | Quem pode o quê; que dados são protegidos? | Só Helena confirma pedidos; telefones de clientes não aparecem nos logs. |
| **Restrição** | Que limites são impostos de fora? | Custo mensal máximo definido por Helena; não exigir instalação de programas. |
| **De transição** | O que é necessário para passar do estado atual ao novo? | Importar os pedidos já agendados do caderno; treinar as confeiteiras. |

Os requisitos de qualidade são os mais esquecidos e os que mais causam fracasso. Um sistema que faz tudo o que deveria, mas é lento demais para ser usado no balcão, ou que cai toda semana, ou que ninguém além de quem o construiu sabe manter, não resolve o problema. Para cada requisito funcional importante, pergunte: com que velocidade, disponibilidade, facilidade de uso, segurança e facilidade de manutenção ele precisa funcionar?

Os requisitos de transição são os segundos mais esquecidos. Quase toda solução substitui algo, e a passagem — migrar dados, treinar pessoas, conviver com o sistema antigo por um tempo — é onde muitos projetos tropeçam.

### O que torna um requisito bom

Um bom requisito é:

- **necessário** — se for removido, alguma parte do problema deixa de ser resolvida;
- **verificável** — é possível dizer, sem discussão, se foi atendido;
- **não ambíguo** — duas pessoas o leem e entendem a mesma coisa;
- **atômico** — trata de uma coisa só;
- **priorizado** — sabe-se o quanto ele importa em relação aos outros;
- **viável** — pode ser atendido dentro das restrições;
- **independente de solução**, sempre que possível — diz *o que* é preciso, não *como* fazer.

O último ponto merece atenção. "O sistema deve usar IA para ler as mensagens" é um requisito dependente de solução. "O sistema deve transformar mensagens de pedido em rascunhos com os campos preenchidos" é independente — e permite comparar soluções com e sem IA.

Algumas palavras são sinais de ambiguidade e devem acender um alerta sempre que aparecerem num requisito: *rápido, fácil, intuitivo, adequado, eficiente, robusto, flexível, amigável, normalmente, geralmente, etc., suportar, tratar, gerenciar, otimizar*. Cada uma precisa ser substituída por algo verificável. "O sistema deve ser rápido" vira "a tela de novo pedido deve abrir em até 2 segundos numa conexão móvel comum". "O sistema deve tratar alterações" vira três ou quatro requisitos sobre quais alterações são aceitas em quais estados.

### Priorizar

Nem todos os requisitos têm o mesmo peso, e quase nunca há recursos para atender a todos na primeira versão. Uma forma simples e difundida de priorizar usa quatro categorias (às vezes chamada pela sigla MoSCoW, do inglês):

- **Deve** — sem isso, a solução não resolve o problema. A primeira versão não sai sem estes.
- **Deveria** — importante, mas a solução funciona sem; entra se houver tempo, ou logo depois.
- **Poderia** — desejável; entra se for barato.
- **Não agora** — reconhecido, registrado e conscientemente adiado.

A categoria "não agora" é tão importante quanto as outras. Ela dá um lugar para as ideias boas que não cabem, evita que voltem como surpresas no meio da construção e mostra aos stakeholders que foram ouvidos. Uma regra prática: se mais da metade dos requisitos estiverem em "deve", a priorização não foi feita de verdade.

### Histórias de usuário

Um formato popular para expressar requisitos funcionais é a **história de usuário**: "Como *[papel]*, quero *[ação]*, para *[benefício]*." Por exemplo: "Como Helena, quero ver, ao registrar um pedido, quanto da capacidade do dia ainda resta, para não aceitar encomendas que não conseguiremos produzir."

O formato é útil porque obriga a dizer quem precisa e por quê. Mas uma história, sozinha, não é um requisito verificável. Ela só se torna utilizável quando acompanhada de **critérios de aceitação**.

### Critérios de aceitação

Um **critério de aceitação** é uma condição concreta e verificável que a solução precisa satisfazer para que um requisito seja considerado atendido. Critérios de aceitação são o elemento mais importante de toda especificação, porque são eles que respondem à pergunta "está pronto e está certo?".

Um formato muito usado, por ser claro e diretamente transformável em teste, é **Dado / Quando / Então**:

- **Dado** — o contexto ou estado inicial;
- **Quando** — a ação ou evento;
- **Então** — o resultado esperado, observável.

> **Caso Marzipã** — Critérios de aceitação para o requisito "verificar capacidade ao registrar pedido":
>
> **CA-1 (caso normal).** *Dado* que o dia 14/06 tem capacidade de 12 UT e pedidos confirmados que somam 7 UT, *quando* Helena registrar um pedido de 4 UT para 14/06, *então* o sistema aceita o registro, mostra "capacidade restante após este pedido: 1 UT" e o pedido fica em "aguardando sinal".
>
> **CA-2 (excede).** *Dado* o mesmo dia com 7 UT ocupadas, *quando* Helena registrar um pedido de 6 UT, *então* o sistema não permite seguir, mostra "excede a capacidade do dia em 1 UT" e sugere as próximas três datas com capacidade suficiente.
>
> **CA-3 (limite exato).** *Dado* o dia com 7 UT ocupadas, *quando* Helena registrar um pedido de exatamente 5 UT, *então* o sistema aceita (capacidade restante: 0 UT).
>
> **CA-4 (pedidos não confirmados).** *Dado* que há pedidos em "aguardando sinal" para o dia, *quando* o sistema calcular a capacidade restante, *então* ele considera esses pedidos como ocupando capacidade até que expirem, e mostra separadamente quantas UTs estão confirmadas e quantas estão reservadas.
>
> **CA-5 (dia sem capacidade cadastrada).** *Dado* que o dia não tem capacidade cadastrada (por exemplo, um feriado ainda não configurado), *quando* Helena tentar registrar um pedido para esse dia, *então* o sistema não aceita e mostra "capacidade do dia não definida", sem assumir um valor padrão.
>
> **CA-6 (registro simultâneo).** *Dado* que restam 4 UT, *quando* dois pedidos de 3 UT forem registrados quase ao mesmo tempo, *então* apenas um é aceito e o outro recebe a mensagem de capacidade excedida.

Observe o que os critérios fazem. O CA-3 resolve uma ambiguidade (o limite é inclusivo). O CA-4 explicita uma regra de negócio que não estava clara (pedidos aguardando sinal reservam capacidade). O CA-5 define o comportamento num caso de dado ausente, em vez de deixá-lo para a imaginação de quem constrói. O CA-6 obriga a tratar concorrência, que quase nunca aparece numa demonstração. Cada um desses critérios, se omitido, seria preenchido por uma suposição — de uma pessoa ou de uma IA — e a suposição poderia estar errada.

Bons critérios de aceitação cobrem, para cada requisito importante:

- o **caso normal**;
- pelo menos um **caso negativo** (o que deve ser recusado);
- os **casos limite** (exatamente no limite, logo acima, logo abaixo);
- os **casos de dado ausente ou inválido**;
- quando aplicável, **concorrência**, **duplicidade** e **falha de dependência**.

### Definição de pronto

Além dos critérios de aceitação de cada requisito, projetos se beneficiam de uma **definição de pronto** geral: condições que qualquer entrega precisa cumprir, independentemente do requisito. Por exemplo: "todos os critérios de aceitação passam em testes registrados; nenhum segredo no código; logs das operações principais funcionando; documentação de operação atualizada; decisão registrada no Decision Log". A definição de pronto evita que cada entrega seja julgada por critérios diferentes conforme a pressa do momento.

> **Anti-padrão: não definir critérios de aceitação** — *Sintoma:* a pergunta "está pronto?" é respondida com "parece que sim" ou "funcionou quando testei". *Causa:* critérios exigem decidir coisas que dão trabalho decidir; é mais confortável deixá-las para depois. *Consequência:* quem constrói (pessoa ou IA) decide por você, por suposição; ninguém consegue dizer se a entrega está certa; discussões sobre "o que foi pedido" se tornam infinitas. *Correção:* nenhum componente é delegado sem critérios de aceitação escritos que incluam pelo menos um caso negativo e um caso limite. Se você não consegue escrevê-los, você ainda não sabe o que quer — e isso é um achado importante, não um atraso.

### Exercícios

**Exercício 18.1 · F · M0** — Reescreva cada requisito de forma verificável: (a) "O sistema deve ser fácil de usar"; (b) "Os lembretes devem ser enviados com antecedência adequada"; (c) "O sistema deve suportar muitos usuários"; (d) "A IA deve entender as mensagens dos clientes".

**Exercício 18.2 · P · M0** — Para o problema que você vem trabalhando, escreva uma lista de requisitos com pelo menos um de cada tipo. Ligue cada requisito a uma causa da árvore de problemas ou a um stakeholder. Priorize com as quatro categorias, garantindo que no máximo metade fique em "deve".

**Exercício 18.3 · P · M0** — Escolha os dois requisitos mais importantes da sua lista e escreva critérios de aceitação no formato Dado / Quando / Então, cobrindo caso normal, negativo, limite e dado ausente.

**Exercício 18.4 · P · M4** — Os critérios abaixo foram escritos para o lembrete de contas de Lucas. Identifique o que está faltando ou ambíguo e reescreva-os.

> CA-1: Dado que há contas vencendo, quando chegar a hora, então o sistema envia lembrete.
> CA-2: O sistema não deve enviar lembretes de contas pagas.

> **Para conferir** — CA-1 não diz quanto antes do vencimento ("vencendo" quando?), que hora é "a hora", para quem vai o lembrete, o que ele contém, nem o que acontece se houver várias contas (uma mensagem por conta ou uma lista?). CA-2 é uma regra útil, mas não está no formato verificável e não diz como o sistema sabe que a conta foi paga (status marcado manualmente? conferência com extrato?). Faltam: conta sem data de vencimento; conta que vence no fim de semana; lembrete já enviado hoje (duplicidade); falha no envio. Uma reescrita do CA-1: "*Dado* uma conta com status 'recebida' e vencimento daqui a 3 dias, *quando* a automação rodar às 8h, *então* Lucas recebe uma única mensagem listando essa conta com fornecedor, valor e data de vencimento."

> **Fim da etapa de pré-requisitos do Projeto P02.** Você já pode fazer o Projeto P02 — Sistema pessoal.

## Capítulo 19 — Arquitetura como sequência de decisões

### O que é arquitetura

É comum pensar em arquitetura como um diagrama com caixas e setas. O diagrama é útil, mas é só a representação. **Arquitetura é o conjunto das decisões sobre a estrutura de uma solução que são difíceis de mudar depois.** O diagrama mostra o resultado dessas decisões; quem olha só para o diagrama não sabe por que as caixas estão ali nem o que aconteceria se estivessem de outro jeito.

Essas decisões giram em torno de nove questões:

| Questão | Pergunta |
|---|---|
| **Responsabilidades** | Que partes existem, e o que cada uma faz (e não faz)? |
| **Interfaces** | Como as partes se comunicam? O que cada uma promete às outras? |
| **Dados** | Onde está a fonte da verdade de cada informação? Quem pode alterá-la? |
| **Dependências** | De que sistemas, serviços e pessoas a solução depende? O que acontece se cada um falhar? |
| **Riscos** | O que pode dar errado, com que gravidade, e onde a arquitetura protege ou expõe? |
| **Custo** | Quanto custa construir, operar e manter? Como o custo cresce com o uso? |
| **Manutenção** | Quem vai manter? Com que conhecimento? Quão fácil é mudar uma regra? |
| **Escalabilidade** | O que acontece se o volume dobrar, ou decuplicar? Isso é provável? |
| **Segurança** | Onde estão os dados sensíveis, os segredos, as ações críticas? Quem acessa? |

Uma boa arquitetura não é a que maximiza todas essas dimensões — isso é impossível. É a que faz **escolhas conscientes** entre elas, adequadas ao problema, e registra por quê.

### Gerar alternativas antes de escolher

O erro mais comum em arquitetura é escolher a primeira solução que vem à mente e depois justificá-la. Para evitá-lo, o método exige que toda decisão arquitetural importante compare **pelo menos três alternativas reais**, e recomenda que elas estejam em degraus diferentes da Escada de Intervenção:

- uma **alternativa mínima** — a mais simples que resolve a parte essencial do problema;
- uma **alternativa intermediária** — que resolve mais, com custo e complexidade moderados;
- uma **alternativa ambiciosa** — que resolve o máximo, com o maior custo e risco;
- e, sempre que aplicável, a alternativa **comprar** — usar algo pronto.

Gerar alternativas tem dois efeitos. O primeiro é óbvio: às vezes a melhor solução não é a primeira imaginada. O segundo é menos óbvio e igualmente importante: comparar alternativas obriga a explicitar os critérios de escolha, que de outra forma ficariam implícitos — e implícitos tendem a ser "o que eu já sei fazer" ou "o que está na moda".

> **Caso Vértice** — Alternativas de arquitetura consideradas (resumo):
>
> | | Alternativa | Degrau | Descrição |
> |---|---|---|---|
> | A | Processo + planilha melhorada | 1–3 | Mudanças de processo já testadas + planilha com validações, listas fechadas e proteção de células; laudo montado por modelo. |
> | B | Aplicação interna simples | 3–5 | Banco de dados com trilha de auditoria; telas de registro, revisão e aprovação; painel de fila; laudo gerado automaticamente; importação dos arquivos dos instrumentos. |
> | C | Sistema de laboratório pronto | compra | Contratar um sistema de gestão de laboratório existente no mercado e adaptá-lo. |
> | D | Aplicação + IA em todo o fluxo | 5–8 | Como B, mais IA lendo todos os documentos (impressões, certificados, e-mails), sugerindo aprovações e respondendo à produção por mensagem. |
> | E | B em fases, com IA pontual | 3–6 | B construída em incrementos; IA usada apenas na extração de dados de certificados de fornecedores, com revisão humana. |

### Comparar alternativas

Com as alternativas em mãos, compare-as segundo critérios derivados dos requisitos e das nove questões. Uma **matriz de comparação** organiza essa análise.

> **Caso Vértice** — Matriz de comparação (escala de 1 a 5, em que 5 é melhor para o critério):
>
> | Critério | Peso | A | B | C | D | E |
> |---|---|---|---|---|---|---|
> | Efeito esperado no indicador (lead time) | 3 | 2 | 4 | 4 | 4 | 4 |
> | Atende à trilha de auditoria | 3 | 1 | 5 | 5 | 4 | 5 |
> | Custo de construção e implantação | 2 | 5 | 3 | 2 | 1 | 3 |
> | Custo e facilidade de manutenção pela equipe disponível | 2 | 4 | 3 | 4 | 1 | 3 |
> | Risco de implantação | 2 | 5 | 3 | 2 | 1 | 4 |
> | Aderência ao processo melhorado | 1 | 4 | 5 | 2 | 4 | 5 |
> | Dependência de fornecedor | 1 | 5 | 4 | 1 | 2 | 4 |
>
> Totais ponderados: A = 47; B = 54; C = 46; D = 35; E = 59.
>
> A alternativa A foi descartada por não atender à trilha de auditoria — um requisito obrigatório, que funciona como eliminatório independentemente da soma. C ficou competitiva em efeito e auditoria, mas exigiria adaptar o processo recém-melhorado ao sistema comprado, com custo recorrente alto para o porte do laboratório; ela foi registrada como alternativa a reavaliar se a aplicação própria se mostrasse difícil de manter. D foi descartada por risco e custo: a IA em todo o fluxo acrescentava opacidade a decisões que exigem rastreabilidade, sem ganho correspondente no indicador. E foi escolhida.

Duas advertências sobre matrizes desse tipo.

**Os números dão uma falsa sensação de precisão.** As notas são julgamentos, e os pesos também. A matriz não decide; ela organiza a discussão, torna os julgamentos visíveis e permite que alguém conteste um peso ou uma nota específica. Se mudar um peso de 2 para 3 inverte a decisão, a decisão é frágil — e isso deve ser registrado.

**Alguns critérios são eliminatórios.** Um requisito obrigatório (como a trilha de auditoria do Vértice) não entra na soma; ele elimina as alternativas que não o atendem. Misturar eliminatórios com ponderados permite que uma alternativa inaceitável vença por ser barata.

### Trade-offs recorrentes

Certas tensões aparecem em quase toda arquitetura. Reconhecê-las ajuda a fazer as perguntas certas.

| Tensão | Um lado | O outro lado | Pergunta orientadora |
|---|---|---|---|
| Simplicidade × flexibilidade | Fácil de entender e manter | Acomoda mudanças futuras | Que mudanças são prováveis de fato, e não apenas possíveis? |
| Custo inicial × custo contínuo | Barato de construir | Barato de operar e manter | Quem vai pagar a manutenção, e por quanto tempo? |
| Velocidade × robustez | Entrega rápida | Resiste a falhas e casos raros | Qual o custo de uma falha em produção? |
| Controle × dependência | Construir e controlar | Comprar e depender | O problema é específico ou comum? Qual o custo de sair do fornecedor? |
| Automação × supervisão | Menos trabalho humano | Mais capacidade de corrigir erros | Qual o custo do erro e com que frequência ele ocorre? |
| Generalidade × especificidade | Serve para muitos casos | Resolve muito bem um caso | Haverá de fato outros casos? |

Não existe resposta certa em abstrato para nenhuma dessas tensões. Existe a resposta certa *para este problema*, que depende do custo do erro, do volume, da equipe e do horizonte de tempo — e que precisa ser escrita.

### Arquitetura em fases

Uma decisão frequente, e geralmente boa, é construir a arquitetura escolhida em **fases**, cada uma entregando valor e gerando evidência para a seguinte. A fase 1 resolve a parte mais importante com a menor complexidade; as fases seguintes só são confirmadas se a evidência da anterior justificar.

> **Caso Vértice** — Arquitetura escolhida (alternativa E), em fases:
>
> ```
>  FASE 1 — Registro e fluxo (degraus 3–5)
>  ┌──────────────────────────────────────────────────────────────────────────┐
>  │ RECEPÇÃO / ANALISTAS / COORDENAÇÃO                                       │
>  │      │ telas: registrar amostra · registrar resultado · revisar/aprovar  │
>  │      ▼                                                                   │
>  │  BACKEND ── regras: estados da amostra, permissões, comparação c/ espec. │
>  │      │                                                                   │
>  │      ▼                                                                   │
>  │  BANCO DE DADOS (fonte da verdade) ── trilha de auditoria                │
>  │      │                                                                   │
>  │      └──► PAINEL DE FILA (visível também para a produção)                │
>  │      └──► LAUDO gerado a partir dos dados aprovados                      │
>  └──────────────────────────────────────────────────────────────────────────┘
>  FASE 2 — Captura na origem (degrau 4)
>      INSTRUMENTOS ──(arquivo exportado)──► IMPORTAÇÃO AUTOMÁTICA ──► BACKEND
>      (com validação, log, tratamento de duplicatas e de valores atípicos)
>  FASE 3 — Integração (degrau 4)
>      BACKEND ──(API)──► SISTEMA DE LOTES DA FÁBRICA: laudo aprovado libera lote
>  FASE 4 — IA pontual (degrau 6), condicionada a avaliação
>      CERTIFICADOS DE FORNECEDORES (PDF) ──► EXTRAÇÃO COM IA ──► REVISÃO HUMANA ──► BACKEND
> ```
>
> A fase 4 só será construída se uma avaliação (Capítulo 27) mostrar que a extração com IA tem desempenho suficiente nos certificados reais. Até lá, ela é uma hipótese registrada, não um compromisso.

### Decisões reversíveis e irreversíveis

Nem toda decisão merece o mesmo cuidado. Uma distinção útil separa:

- **decisões reversíveis** — podem ser desfeitas com custo baixo (a cor de uma tela, o texto de um lembrete, o horário de uma automação). Devem ser tomadas rapidamente, testadas e ajustadas;
- **decisões irreversíveis ou caras de reverter** — a escolha de onde fica a fonte da verdade, o modelo de dados central, a contratação de um fornecedor com contrato longo, a exposição de dados a um serviço externo. Devem ser tomadas com análise de alternativas, registro completo e, se possível, um teste antes.

Um erro comum é tratar todas as decisões da mesma forma: ou com análise demais (paralisando o projeto em decisões triviais) ou com análise de menos (tomando decisões irreversíveis por impulso). Outro erro é tornar irreversível, sem necessidade, uma decisão que poderia ser reversível — por exemplo, espalhando por todo o sistema uma dependência que poderia estar isolada atrás de uma interface.

> **Anti-padrão: adicionar complexidade desnecessária** — *Sintoma:* a arquitetura tem componentes cuja necessidade ninguém consegue ligar a um requisito; a solução usa a tecnologia mais sofisticada disponível para um problema simples; "já que vamos fazer, vamos fazer direito" justifica tudo. *Causa:* entusiasmo com a tecnologia; medo de ter que refazer depois; confusão entre sofisticação e qualidade. *Consequência:* custo de construção e manutenção maior, mais pontos de falha, maior opacidade, maior dependência de quem construiu. *Correção:* para cada componente, pergunte "que requisito exige isto?" e "qual o degrau mínimo que atende a esse requisito?". Prefira arquiteturas em fases, em que a complexidade é adicionada quando a evidência mostra que é necessária.

> **▲ Avançado — começar simples na estrutura técnica** — Profissionais técnicos frequentemente se perguntam se devem dividir um sistema em vários serviços independentes desde o início. Para sistemas pequenos e médios, com uma equipe pequena, a recomendação prevalente na prática é começar com um sistema único bem organizado internamente (com módulos de responsabilidades claras e interfaces bem definidas entre eles) e separar em serviços apenas quando houver uma razão concreta: partes que precisam escalar de forma diferente, equipes diferentes trabalhando em partes diferentes, requisitos de isolamento. Separar cedo demais multiplica pontos de falha, integrações e custo operacional. O que vale a pena desde o início é a disciplina de responsabilidades e interfaces — que permite separar depois, se necessário. Essa mesma lógica vale para escolhas como filas de mensagens, processamento por eventos e múltiplos bancos de dados: são ferramentas poderosas para problemas que as exigem, e complexidade gratuita para os que não.

### Exercícios

**Exercício 19.1 · F · M0** — Para o lembrete de contas de Lucas, descreva três alternativas de arquitetura em degraus diferentes da Escada. Para cada uma, responda às nove questões de arquitetura em uma linha.

**Exercício 19.2 · P · M0** — Para o problema que você vem trabalhando, gere pelo menos três alternativas (mínima, intermediária, ambiciosa) e, se aplicável, a alternativa "comprar". Monte uma matriz de comparação com critérios derivados dos seus requisitos. Separe critérios eliminatórios. Teste a robustez da decisão: mudando o peso do critério mais importante em uma unidade, a decisão muda?

**Exercício 19.3 · P · M2** — Peça a uma IA cinco alternativas de arquitetura para o seu problema, explicitando que ao menos duas devem estar nos degraus 0 a 3 da Escada. Compare com as suas. Quais alternativas da IA você não tinha considerado? Alguma delas é melhor que as suas? Alguma é exagerada? Registre no Decision Log.

**Exercício 19.4 · P · M4** — A arquitetura abaixo foi proposta por uma IA para a Confeitaria Marzipã. Avalie-a com as nove questões e aponte excessos e lacunas.

> "Um agente de IA atende os clientes no aplicativo de mensagens, entende o pedido, consulta o calendário de produção, gera a cobrança do sinal, confirma o pedido e atualiza o banco de dados. Um segundo agente monitora o estoque de ingredientes e faz pedidos aos fornecedores automaticamente. Um painel mostra tudo em tempo real. A arquitetura usa microsserviços em nuvem para garantir escalabilidade."

> **Para conferir** — Excessos: dois agentes autônomos para um negócio com poucas dezenas de pedidos por semana; microsserviços e "escalabilidade" sem requisito que os justifique; compra automática de ingredientes sem que esse problema tenha aparecido no Problem Statement. Lacunas: quem confirma o pedido (a confirmação envolve compromisso e capacidade — deveria ficar com Helena); como o agente sabe a capacidade (as UTs e suas regras); o que acontece com mensagens ambíguas, reclamações e alterações de pedido em produção; riscos de injeção de instruções via mensagens de clientes; custo de operação; quem mantém. Uma arquitetura assim parece moderna e ignora quase todas as nove questões.

## Capítulo 20 — Decisões registradas

### Por que registrar decisões

Seis meses depois de um projeto, alguém pergunta: "por que a capacidade é calculada em UTs e não em número de bolos?", ou "por que não compramos um sistema pronto?", ou "por que a IA só sugere e não confirma?". Se a resposta for "não lembro" ou "foi a Helena que quis", três coisas ruins acontecem. A decisão não pode ser defendida, então tende a ser revertida pelo próximo que achar diferente. A decisão não pode ser avaliada, então ninguém aprende se ela foi boa. E a decisão não pode ser revista com segurança, porque não se sabe que riscos ela evitava.

O Princípio 5 do método diz: decisões registradas são decisões revisáveis. Este capítulo apresenta os dois instrumentos de registro — o **Decision Log** e o **Architecture Decision Record (ADR)** — e a competência por trás deles, **Technical Decision Making**.

### O Decision Log

O **Decision Log** é a lista corrente de decisões de um projeto, grandes e pequenas, numa tabela ou documento simples. Cada entrada registra:

| Campo | O que registrar |
|---|---|
| **Decisão** | O que foi decidido, numa frase. |
| **Contexto** | A situação que exigiu a decisão. |
| **Alternativas** | As opções consideradas (pelo menos duas além da escolhida, para decisões relevantes). |
| **Justificativa** | Por que esta e não as outras. |
| **Evidência** | Em que dados, testes ou fontes a justificativa se apoia — e de que tipo é essa evidência. |
| **Riscos** | O que pode dar errado com esta escolha. |
| **Hipótese** | O que se espera que aconteça como consequência da decisão. |
| **Validação** | Como e quando se saberá se a hipótese se confirmou, e que sinal indicaria que a decisão foi errada. |
| **Responsável e data** | Quem decidiu e quando. |
| **Status** | Proposta, aceita, substituída (por qual), revertida. |

> **Caso Marzipã** — Duas entradas do Decision Log:
>
> **DL-03 — Capacidade medida em unidades de trabalho (UT).** *Contexto:* a capacidade em "número de bolos" não refletia o esforço real e permitia excessos. *Alternativas:* (a) número de bolos por dia; (b) horas estimadas por item; (c) UTs com pesos por tipo de produto. *Justificativa:* (b) exigiria estimar horas para cada combinação de produto, o que Helena não conseguia fazer com confiança; (c) captura a percepção de esforço de Helena com uma regra simples e ajustável. *Evidência:* durante duas semanas, Helena comparou o cálculo em UT com sua percepção de "dia cheio" para 14 dias; houve concordância em 12, e os pesos foram ajustados nos outros 2 (evidência de uso real em pequena escala, E3 parcial). *Riscos:* produtos novos sem peso definido; pesos desatualizados se a equipe mudar. *Hipótese:* nenhum dia excederá a capacidade real se as UTs forem respeitadas. *Validação:* registrar semanalmente dias em que a equipe precisou fazer hora extra; se houver dois dias assim com UTs dentro do limite, revisar os pesos. *Responsável:* Helena. *Status:* aceita.
>
> **DL-07 — IA de triagem opera em nível N2 (prepara rascunho, Helena aprova).** *Contexto:* a IA pode transformar mensagens em rascunhos de pedido; discutiu-se se ela poderia confirmar pedidos sozinha. *Alternativas:* (a) N1 — IA apenas destaca mensagens que parecem pedidos; (b) N2 — IA prepara rascunho, Helena aprova; (c) N3 — IA confirma e Helena pode cancelar em até 2 horas. *Justificativa:* confirmação gera compromisso com a cliente e cobrança; erro de extração (data, sabor) tem custo alto e é difícil de reverter depois que a cliente recebeu a confirmação. (b) economiza a maior parte do tempo de Helena (digitação e perguntas de completude) mantendo a decisão com ela. *Evidência:* avaliação com 60 mensagens reais anonimizadas (Capítulo 27) mostrou erros em campos críticos numa parcela pequena, mas não desprezível, dos casos. *Riscos:* Helena passar a aprovar sem ler ("carimbar"). *Hipótese:* tempo de Helena com mensagens de pedido cai pela metade. *Validação:* medir tempo por pedido durante o piloto; auditar 10% dos rascunhos aprovados por semana para verificar se havia erros que passaram. *Responsável:* Helena, com recomendação do projeto. *Status:* aceita; reavaliar após 8 semanas de piloto.

Note como a entrada DL-07 registra não só a decisão, mas o risco que ela cria (aprovar sem ler) e a forma de monitorá-lo. Esse é o tipo de detalhe que se perde sem registro.

### O ADR

Para decisões arquiteturais significativas — as caras de reverter —, o Decision Log é complementado por um **ADR** (*Architecture Decision Record*), um documento curto, de uma a duas páginas, dedicado a uma única decisão. A prática de registrar decisões de arquitetura em documentos curtos, numerados e versionados junto com o projeto é bastante difundida na engenharia de software.

O ADR tem os mesmos elementos do Decision Log, com mais espaço para contexto, análise das alternativas e consequências. O template T08 (Apêndice A) traz a estrutura completa. O Apêndice D traz o ADR completo da decisão de arquitetura do Vértice, que você viu resumida no capítulo anterior.

### Quando registrar

Registrar tudo é impossível e inútil. Registre uma decisão quando ela atender a pelo menos um destes critérios:

- é **cara de reverter**;
- **afeta outras pessoas** além de quem decidiu;
- **não é óbvia** — alguém razoável poderia ter decidido diferente;
- **foi contestada** durante a discussão;
- **depende de uma hipótese** que precisa ser verificada;
- **aceita um risco** conscientemente.

Uma regra prática: se você imagina alguém perguntando "por que fizeram assim?" daqui a seis meses, registre.

### Evidência: de que tipo, com que força

O campo "evidência" é o que separa um Decision Log de uma lista de opiniões. Mas evidências têm forças diferentes, e é importante dizer de que tipo é cada uma:

| Tipo de evidência | Exemplo | Força típica |
|---|---|---|
| Dados medidos no próprio contexto | Levantamento de 212 amostras; avaliação com 60 mensagens reais. | Alta, se a medição foi bem feita. |
| Teste ou experimento controlado | Piloto de duas semanas com regra nova. | Alta para aquele contexto e período. |
| Experiência documentada em contexto semelhante | Outro laboratório da empresa fez algo parecido e registrou resultados. | Média; depende da semelhança. |
| Opinião de especialista | A analista sênior acredita que a importação reduz erros. | Média ou baixa; útil para hipóteses. |
| Documentação de fornecedor | O fornecedor afirma que o sistema faz X. | Baixa até ser testada. |
| Afirmação geral de uma IA | "Sistemas desse tipo costumam reduzir erros." | Baixa; serve para levantar hipóteses, não para sustentar decisões. |
| Suposição | "Imagino que as clientes vão preferir." | Nenhuma; deve ser registrada como hipótese. |

Não há problema em decidir com evidência fraca — muitas vezes é tudo o que existe. O problema é decidir com evidência fraca **sem dizer que ela é fraca**. Quando a evidência é fraca, a decisão deve ser mais facilmente reversível, e a validação deve ser planejada com mais cuidado.

### Hipótese e validação: toda decisão é uma aposta

A mudança mais importante que o Decision Log produz no pensamento é tratar cada decisão como uma **aposta com resultado verificável**. Ao escrever a hipótese ("o tempo de Helena com mensagens cai pela metade") e o sinal de erro ("se depois de 4 semanas a redução for menor que 20%, a decisão será revista"), você cria a possibilidade de aprender. Sem isso, toda decisão parece certa em retrospecto, porque nada foi definido de antemão para contradizê-la.

### Armadilhas da decisão

Alguns vieses de raciocínio afetam decisões de projeto com frequência. Conhecê-los não os elimina, mas ajuda a criar defesas.

- **Ancoragem na primeira ideia.** A primeira alternativa considerada recebe um peso desproporcional. *Defesa:* gerar alternativas antes de avaliar qualquer uma.
- **Custo afundado.** Continuar numa direção porque já se investiu nela. *Defesa:* a pergunta é sempre "daqui para frente, qual a melhor opção?", e não "como aproveitar o que foi feito?".
- **Viés de confirmação.** Procurar e valorizar evidências que confirmam o que já se acredita. *Defesa:* escrever, antes de coletar dados, o que contaria como evidência contrária.
- **Excesso de confiança.** Superestimar a precisão das próprias estimativas. *Defesa:* registrar estimativas como intervalos e compará-las depois com o resultado.
- **Concordância da IA.** Uma IA solicitada a avaliar sua decisão tende a concordar com ela. *Defesa:* pedir explicitamente o argumento contrário mais forte, ou uma análise de "pré-mortem" (Protocolo de Decisão, Capítulo 22).

O **pré-mortem** é uma técnica particularmente útil: imagine que a decisão foi tomada e, seis meses depois, fracassou. Escreva a história de por que fracassou. Essa inversão costuma revelar riscos que a análise direta não revela, porque desloca a pergunta de "isso vai dar certo?" (que convida a otimismo) para "como isso deu errado?" (que convida a imaginação).

### Comunicar decisões

Uma decisão registrada no Decision Log está documentada. Mas, para os stakeholders, ela precisa ser **comunicada** — e o formato do log raramente é o adequado. Uma boa comunicação de decisão para quem não participou da análise tem cinco partes curtas:

1. **O que decidimos** — numa frase, sem jargão.
2. **Por quê** — os dois ou três motivos principais.
3. **O que consideramos e descartamos** — mostra que alternativas foram levadas a sério.
4. **O que isso significa para você** — o efeito concreto para o leitor.
5. **Como vamos saber se deu certo** — e quando a decisão será revista.

Essa estrutura é útil especialmente para comunicar decisões de *não* fazer algo ("não vamos usar um chatbot para atender os clientes agora"), que tendem a ser mal recebidas se não vierem acompanhadas das razões e da condição em que seriam revistas.

> **Anti-padrão: não registrar decisões** — *Sintoma:* ninguém sabe explicar por que o sistema funciona como funciona; decisões são refeitas a cada mudança de pessoa; discussões antigas voltam como se fossem novas. *Causa:* registrar parece burocracia; no momento da decisão, todos "sabem" por quê. *Consequência:* perda de aprendizado; reversão de decisões boas; repetição de erros; dependência de quem lembra. *Correção:* mantenha um Decision Log desde o primeiro dia, com entradas curtas. Registre na hora — reconstruir decisões depois é muito mais difícil e menos honesto.

### Exercícios

**Exercício 20.1 · F · M0** — Escolha uma decisão importante que você tomou recentemente (profissional ou pessoal). Registre-a no formato do Decision Log, incluindo pelo menos duas alternativas e uma hipótese verificável. Que campo foi mais difícil de preencher? Por quê?

**Exercício 20.2 · P · M0** — Transforme a decisão de arquitetura do Exercício 19.2 numa entrada completa do Decision Log. Classifique cada evidência pelo tipo da tabela deste capítulo. Se a maior parte for opinião ou suposição, escreva o que precisaria ser feito para obter evidência mais forte.

**Exercício 20.3 · P · M1** — Faça um pré-mortem da sua decisão: escreva, em meia página, a história de como ela fracassou seis meses depois. Depois peça a uma IA que escreva outra versão do pré-mortem. Compare as duas e acrescente ao Decision Log os riscos novos que surgiram.

**Exercício 20.4 · P · M0** — Escreva a comunicação da sua decisão para o stakeholder mais afetado, usando a estrutura de cinco partes, em no máximo 200 palavras.

**Exercício 20.5 · A · M4** — A entrada abaixo foi encontrada num Decision Log (exemplo fictício). Avalie-a e reescreva.

> "Decisão: usar a plataforma X para as automações. Justificativa: é a melhor do mercado e todo mundo usa. Riscos: nenhum. Status: aceita."

> **Para conferir** — Falta tudo o que torna um registro útil: contexto (que automações? para qual problema?), alternativas consideradas, justificativa ligada a requisitos (custo, integrações disponíveis, tratamento de erros, quem vai manter), evidência ("todo mundo usa" não é evidência para o seu caso; "é a melhor do mercado" é uma afirmação sem fonte), riscos (dependência de fornecedor, custo por execução, limites de tratamento de exceções, saída da plataforma), hipótese e validação, responsável e data. "Riscos: nenhum" é um sinal claro de que a análise não foi feita: toda decisão tem riscos.

> **Fim da etapa de pré-requisitos do Projeto P03.** Você já pode fazer o Projeto P03 — Processo real.

## Capítulo 21 — Especificação e delegação

### Da intenção à especificação

Até aqui, você formulou o problema, modelou o sistema, escreveu requisitos, escolheu uma arquitetura e registrou as decisões. Agora é preciso entregar partes da construção para alguém — uma IA, uma pessoa, um fornecedor — e receber de volta algo que funcione. A ponte entre o que está na sua cabeça e o que será construído é a **especificação**.

Especificar é transformar uma **intenção humana** ("quero que o sistema verifique a capacidade") numa **descrição executável**: precisa o suficiente para que quem constrói não precise adivinhar, e verificável o suficiente para que você saiba se o resultado está certo. Esta é a competência de **Specification**, e ela é a base da competência de **AI Delegation**.

### Os nove blocos de uma especificação

Uma especificação de componente, no método, tem nove blocos. É a estrutura do template T10 — AI Delegation Brief, mas serve igualmente para delegar a uma pessoa.

| Bloco | Pergunta | O que acontece se faltar |
|---|---|---|
| **CONTEXTO** | Onde este componente vive? Que problema ele ajuda a resolver? O que já existe em volta? | Quem constrói faz algo genérico, desconectado do sistema real. |
| **OBJETIVO** | O que exatamente este componente deve fazer? | Constrói-se outra coisa, ou coisa demais. |
| **RESTRIÇÕES** | Que limites devem ser respeitados (tecnologia, custo, segurança, desempenho, o que não pode ser alterado)? | Escolhas incompatíveis com o ambiente; dependências indesejadas. |
| **DADOS** | Que dados entram, que dados saem, em que formato, de onde vêm? | Formatos inventados; campos com nomes diferentes; integração quebrada. |
| **REGRAS** | Que regras de negócio o componente aplica? | Regras inventadas por suposição — plausíveis e erradas. |
| **CRITÉRIOS** | Que critérios de aceitação definem "certo"? | Ninguém sabe se está pronto; quem constrói define o que é suficiente. |
| **FORMATO** | Em que forma a entrega deve vir (código, configuração, documento, estrutura de pastas, explicação)? | Entrega inutilizável ou difícil de integrar. |
| **TESTES** | Que testes devem acompanhar a entrega, e quais casos devem cobrir? | Entrega sem evidência; verificação toda por sua conta. |
| **ACEITAÇÃO** | Como você vai verificar e aceitar a entrega? O que acontece se não passar? | A aceitação vira opinião; ciclos infinitos de ajuste. |

### Três versões do mesmo pedido

**Pedido ruim:**

> "Faça um sistema para controlar a capacidade da confeitaria."

Esse pedido não diz o que é capacidade, como se mede, de onde vêm os pedidos, onde os dados ficam, quem usa, o que acontece quando excede. Uma IA responderá com algo — provavelmente um sistema genérico de agendamento que conta "pedidos por dia", com uma interface própria, um banco de dados próprio e regras inventadas. Parecerá impressionante e não servirá.

**Pedido melhor:**

> "Construa uma função que receba uma data e uma lista de itens de pedido, calcule as unidades de trabalho (UT) de cada item segundo uma tabela de pesos, some às UTs já ocupadas naquela data e responda se o pedido cabe na capacidade do dia."

Melhor: define entrada, saída e regra central. Mas ainda deixa abertas questões críticas: de onde vêm a capacidade e as UTs já ocupadas? Pedidos aguardando sinal contam? O limite é inclusivo? E se a data não tiver capacidade cadastrada? E se dois pedidos chegarem ao mesmo tempo? Quem constrói vai decidir essas questões por você.

**Especificação profissional (AI Delegation Brief):**

> **CONTEXTO** — Sistema de pedidos da Confeitaria Marzipã (pequeno negócio, uma usuária principal, cerca de 15 a 40 pedidos por semana). Os dados ficam numa base com as tabelas `pedidos`, `itens_pedido`, `produtos` e `dias_producao` (esquema anexo). Este componente será chamado pelo backend ao registrar ou alterar um pedido. Problema que resolve: impedir pedidos além da capacidade de produção (DL-03).
>
> **OBJETIVO** — Implementar a operação `verificar_capacidade(data, itens, pedido_id_opcional)` que responde se os itens cabem na capacidade restante da data e quanto sobra.
>
> **RESTRIÇÕES** — Usar a mesma linguagem e biblioteca de acesso a dados já usadas no backend (descritas no anexo). Não criar tabelas novas. Não alterar o esquema. Não chamar serviços externos. Tempo de resposta inferior a 1 segundo para até 200 pedidos no dia. A verificação e a gravação do pedido devem poder ser feitas de forma atômica (ver regra R6).
>
> **DADOS** — Entrada: `data` (AAAA-MM-DD); `itens` (lista de `{produto_id, quantidade, andares_adicionais}`); `pedido_id_opcional` (quando se trata de alteração de um pedido existente). Saída: `{cabe: booleano, uts_pedido: número, uts_confirmadas: número, uts_reservadas: número, capacidade: número, restante_apos: número, motivo: texto|null}`.
>
> **REGRAS** — R1: UT do item = peso base do produto + 2 por andar adicional, multiplicado pela quantidade (pesos na tabela `produtos`). R2: ocupam capacidade os pedidos da data em `confirmado`, `em_producao` e `pronto` (somados em `uts_confirmadas`) e em `aguardando_sinal` não expirados (somados em `uts_reservadas`). R3: o limite é inclusivo (`restante_apos` pode ser 0). R4: se a data não tiver registro em `dias_producao`, responder `cabe: false` com motivo `capacidade_nao_definida` — nunca assumir valor padrão. R5: em alteração de pedido, desconsiderar as UTs atuais do próprio pedido antes de somar as novas. R6: a operação deve oferecer um modo que bloqueie a capacidade do dia durante a gravação, para que dois registros simultâneos não ultrapassem o limite. R7: produto sem peso cadastrado → `cabe: false` com motivo `produto_sem_peso`.
>
> **CRITÉRIOS** — CA-1 a CA-6 do Capítulo 18, mais: CA-7 (alteração que reduz UTs sempre cabe); CA-8 (produto sem peso cadastrado é recusado com motivo explícito).
>
> **FORMATO** — Código da operação num único módulo; testes automatizados num arquivo separado; um parágrafo explicando como a atomicidade (R6) foi garantida; lista de qualquer suposição feita que não esteja nesta especificação.
>
> **TESTES** — Um teste para cada critério de aceitação, com dados de teste montados no próprio arquivo de testes. Incluir teste de concorrência para CA-6.
>
> **ACEITAÇÃO** — Aceito quando: todos os testes passam no ambiente de desenvolvimento; a revisão do código não encontra violação das restrições; a lista de suposições está vazia ou cada suposição foi aprovada por mim. Se houver dúvida sobre alguma regra, pergunte antes de implementar em vez de supor.

A diferença entre as três versões não é de estilo. É de **quantas decisões ficaram para quem constrói**. Na primeira, quase todas. Na terceira, nenhuma que importe — e as que restarem aparecerão na lista de suposições, onde você pode revisá-las.

Observe também a última frase do brief. Pedir explicitamente que a IA pergunte em vez de supor, e que liste as suposições que fez, é uma das práticas mais eficazes de delegação. O Protocolo de Especificação, no Capítulo 22, a torna sistemática.

### O que muda quando quem constrói é uma IA

Ao delegar a uma pessoa experiente, parte do contexto é compartilhada: ela conhece a empresa, pode perguntar no corredor, percebe quando algo parece estranho. Ao delegar a uma IA, **nada é compartilhado além do que está no contexto**. Isso tem quatro implicações.

**Tudo o que importa precisa estar escrito.** Regras que "todo mundo sabe", restrições óbvias, convenções do projeto. Se não está no brief (ou em documentos anexados a ele), não existe para a IA.

**Lacunas são preenchidas com plausibilidade.** Uma pessoa, diante de uma lacuna, geralmente pergunta. Uma IA, a menos que instruída a perguntar, preenche com o que é mais comum em casos parecidos. O mais comum pode não ser o seu caso.

**Excesso de iniciativa é um risco.** IAs tendem a entregar mais do que foi pedido: refatorar código que não era para mexer, adicionar funcionalidades "úteis", mudar nomes para "melhorar". Restrições explícitas ("não altere nada fora deste módulo") e a leitura do diff (Capítulo 17) são as defesas.

**A verificação é sempre sua.** A IA pode escrever testes, e deve. Mas os critérios de aceitação vêm de você, e a decisão de aceitar também.

### Prompt não é especificação

Um **prompt** é uma mensagem enviada a um modelo de IA. Uma **especificação** é um artefato que descreve o que deve ser construído e como saber se está correto. A especificação pode ser *enviada* como prompt, mas as duas coisas são diferentes, e confundi-las é uma das fontes mais comuns de fracasso em projetos com IA.

| Prompt | Especificação |
|---|---|
| Mensagem pontual, frequentemente improvisada. | Artefato pensado, revisado, versionado. |
| Vale para uma conversa. | Vale para qualquer executor: IA, pessoa, fornecedor. |
| Otimizado para "fazer a IA responder bem". | Otimizado para "definir o que é certo". |
| Avaliado pela resposta que produz. | Avaliado pela capacidade de verificar a resposta. |
| Perde-se no histórico da conversa. | Fica no projeto, ligada a requisitos, decisões e testes. |

Quando a especificação existe, o prompt fica simples: "Implemente o componente descrito neste brief. Antes de começar, liste suas dúvidas." Quando ela não existe, o prompt tenta fazer o papel dela — e cada nova conversa reinventa o que deveria ter sido decidido uma vez.

> **Anti-padrão: começar pelo prompt** — *Sintoma:* a primeira ação do projeto é abrir um assistente de IA e descrever o que se quer construir. *Causa:* a IA é acessível e responde rápido; parece eficiente pular a análise. *Consequência:* a IA faz a análise por você, de forma genérica, e você passa a reagir ao que ela produziu em vez de decidir o que deveria ser produzido. *Correção:* use a IA para explorar e analisar (protocolos de exploração e decomposição), mas só peça construção depois de ter Problem Statement, requisitos com critérios de aceitação e decisão de arquitetura.

> **Anti-padrão: confundir prompt com especificação** — *Sintoma:* "a especificação está no histórico da conversa"; ajustes são feitos pedindo à IA "agora muda isso"; ninguém sabe dizer qual é a versão vigente das regras. *Causa:* a conversa com a IA parece documentar o trabalho. *Consequência:* regras se perdem entre mensagens; mudanças contradizem decisões anteriores; não há como entregar o trabalho a outra pessoa ou a outra IA. *Correção:* mantenha a especificação como documento do projeto, versionado. Cada mudança relevante é feita primeiro na especificação e depois comunicada à IA.

### O tamanho da unidade de delegação

Delegar um sistema inteiro de uma vez é a forma mais rápida de perder o controle. A unidade de delegação deve ser pequena o suficiente para que você consiga **verificar o resultado por completo** antes de passar à próxima. Na prática:

- um componente com uma responsabilidade clara (a verificação de capacidade);
- uma tela com suas validações;
- uma integração com um único serviço;
- uma automação com seus dez elementos.

Uma boa forma de ordenar as unidades é por **fatias verticais**: em vez de construir primeiro todo o banco de dados, depois toda a lógica, depois todas as telas, construa uma funcionalidade completa de ponta a ponta (registrar um pedido simples: tela, regra, dado), verifique, e depois a próxima. Cada fatia entrega algo utilizável e testável. O Capítulo 23 aprofunda essa forma de trabalhar.

### Quando não delegar

Delegar a uma IA não é sempre a melhor escolha. **Não delegue** — ou delegue apenas partes, com cuidado redobrado — nas seguintes situações:

1. **Quando você não consegue escrever os critérios de aceitação.** Você não saberá se o resultado está certo. Primeiro entenda o que quer.
2. **Quando você não consegue verificar o resultado.** Se o componente é complexo demais para você revisar e testar, delegar só transfere o risco para um lugar onde você não o vê. Reduza o tamanho, ou envolva alguém que consiga verificar.
3. **Quando a decisão é sobre valores ou responsabilidade.** Se um pedido deve ser recusado, se um resultado justifica investigação, se um cliente merece exceção — a IA pode preparar a informação, mas a decisão é humana (Princípio 4).
4. **Quando o objetivo é o seu aprendizado.** Nos exercícios M0, e sempre que você precisar desenvolver uma competência, fazer você mesmo é o ponto.
5. **Quando os dados não podem ir para o ambiente da IA.** Dados pessoais, sigilosos ou regulados só podem ser enviados a serviços aprovados para isso. Na dúvida, use dados fictícios ou anonimizados.
6. **Quando o erro é caro, irreversível e não há revisão possível antes de agir.** Nesse caso, nem a IA nem ninguém deveria agir sem revisão.
7. **Quando fazer é mais rápido do que especificar e verificar.** Para tarefas pequenas que você domina, a delegação custa mais do que economiza.

### O Mapa Humano–Máquina

Em projetos com várias partes delegadas — a pessoas, a IAs e a automações —, é útil explicitar, para cada atividade, quatro papéis:

- **Executa** — quem faz o trabalho;
- **Decide** — quem tem autoridade para aprovar ou escolher;
- **Verifica** — quem confere se está correto;
- **Responde** — quem é responsabilizado pelo resultado.

> **Caso Vértice** — Trecho do Mapa Humano–Máquina da fase 2 (importação dos arquivos dos instrumentos):
>
> | Atividade | Executa | Decide | Verifica | Responde |
> |---|---|---|---|---|
> | Especificar a importação | Rodrigo | Beatriz | Analista sênior | Beatriz |
> | Implementar a importação | IA (assistente de programação) | Rodrigo | Rodrigo (testes) + analista sênior (resultados) | Rodrigo |
> | Importar arquivos na operação | Automação | — | Analista (confere valores sinalizados) | Coordenação |
> | Tratar arquivo rejeitado | Analista | Analista | — | Coordenação |
> | Aprovar resultado importado | — | Analista sênior ou coordenação | — | Coordenação |
>
> Observe que, em nenhuma linha, a IA aparece nas colunas "decide" ou "responde". E que a automação, que executa a importação, não tem ninguém na coluna "decide": ela aplica regras definidas, e qualquer caso fora delas é rejeitado para um humano.

A coluna "Responde" nunca deve conter uma IA ou uma automação. Se, ao preencher o mapa, você perceber que ninguém responde por uma atividade, encontrou uma falha de projeto — provavelmente a mais perigosa de todas.

### Exercícios

**Exercício 21.1 · F · M0** — Pegue um pedido que você fez a uma IA recentemente. Reescreva-o como um AI Delegation Brief com os nove blocos. Quantas decisões estavam implícitas no pedido original?

**Exercício 21.2 · P · M0** — Escreva o AI Delegation Brief completo da automação de lembretes de Lucas, usando os dez elementos de automação (Capítulo 15) e os critérios de aceitação do Exercício 18.4.

**Exercício 21.3 · P · M3** — Entregue o brief do exercício anterior a uma IA, acrescentando a instrução: "Antes de implementar, liste todas as dúvidas e suposições." Avalie a lista: quantas dúvidas revelam lacunas reais da sua especificação? Atualize o brief, e só então peça a implementação. Registre no diário a diferença entre as duas versões do brief.

**Exercício 21.4 · P · M0** — Para cada situação, decida se deve delegar a uma IA, delegar parcialmente ou não delegar, justificando com as sete condições: (a) escrever a política de cancelamento da confeitaria; (b) implementar a tela de cadastro de clientes; (c) decidir se um resultado de ensaio próximo ao limite exige repetição; (d) gerar dados fictícios para testes; (e) analisar contratos de clientes reais em busca de cláusulas de multa.

> **Para conferir** — (a) Parcialmente: a IA pode propor alternativas e redigir, mas a política é decisão de Helena (valores e responsabilidade). (b) Delegar, com brief completo e verificação. (c) Não delegar a decisão; a IA poderia, no máximo, preparar a informação (histórico, variabilidade), e mesmo isso exige que a regra esteja definida. (d) Delegar — tarefa de baixo risco que, aliás, evita usar dados reais em testes. (e) Depende do ambiente: dados de contratos reais são sigilosos; só em serviço aprovado para isso, ou com anonimização; e o resultado é uma análise que exige verificação por quem entende de contratos.

**Exercício 21.5 · A · M0** — Construa o Mapa Humano–Máquina do seu projeto, com todas as atividades da construção e da operação. Verifique: há alguma atividade sem ninguém em "verifica"? Sem ninguém em "responde"? Alguma IA ou automação em "decide" para algo de alto custo de erro?

## Revisão da Parte IV

Verifique se consegue, sem consultar:

- escrever requisitos dos seis tipos, verificáveis e rastreáveis;
- priorizar com as quatro categorias sem colocar tudo em "deve";
- escrever critérios de aceitação Dado / Quando / Então cobrindo caso normal, negativo, limite, dado ausente e concorrência;
- responder às nove questões de arquitetura para uma solução;
- gerar alternativas em degraus diferentes e compará-las com critérios eliminatórios e ponderados;
- distinguir decisões reversíveis de irreversíveis e tratar cada uma de forma proporcional;
- registrar decisões com alternativas, evidência classificada, hipótese e validação;
- fazer um pré-mortem;
- escrever um AI Delegation Brief com os nove blocos;
- explicar a diferença entre prompt e especificação;
- dizer quando não delegar;
- construir um Mapa Humano–Máquina.

### Exercício integrador

**Exercício R4.1 · P · M1** — Retome a clínica de fisioterapia do Exercício R2.1. Produza: (a) dez requisitos de pelo menos quatro tipos, priorizados; (b) critérios de aceitação para os dois requisitos "deve" mais importantes; (c) três alternativas de arquitetura e uma matriz de comparação; (d) uma entrada de Decision Log para a escolha, com pré-mortem; (e) um AI Delegation Brief para o primeiro componente a ser construído. Faça tudo sem IA. Depois, peça a uma IA que critique o conjunto (modo M1) e registre o que você mudou.
