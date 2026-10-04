## Capítulo 7 — Abstração

### Um mapa não é o território

Um mapa de metrô mostra as estações e as conexões, e omite quase tudo o mais: distâncias reais, ruas, prédios, relevo. Por isso ele é útil. Se mostrasse tudo, seria tão complicado quanto a cidade e não ajudaria ninguém a decidir onde descer.

Abstrair é isso: **manter o que importa para um propósito e esconder o resto**. Toda representação — um System Map, um Process Map, um modelo de dados, uma especificação — é uma abstração. A questão nunca é se você está abstraindo, mas se está abstraindo bem: mantendo o que é relevante para a decisão em jogo e descartando o que só atrapalha.

Este capítulo é curto porque abstração não é uma técnica com passos, e sim uma capacidade que se exercita em tudo o que você fizer daqui em diante. Mas há três ideias sobre ela que mudam a forma de trabalhar.

### Primeira ideia: o propósito define a abstração

A mesma coisa tem abstrações diferentes conforme o propósito. Um pedido da Confeitaria Marzipã é:

- para **Helena**, quando aceita o pedido: cliente, data, produto, tamanho, preço, sinal pago ou não;
- para a **confeiteira**, na produção: sabor da massa, recheio, cobertura, decoração, texto, horário em que precisa estar pronto;
- para o **entregador**: endereço, janela de horário, nome de quem recebe, telefone, cuidado de transporte;
- para a **contabilidade**: valor, data do pagamento, forma de pagamento.

Nenhuma dessas visões está errada. Cada uma é a abstração certa para uma decisão diferente. Um erro comum em sistemas é criar uma única visão "completa" do pedido e mostrá-la para todos, o que obriga cada pessoa a procurar, no meio de informação irrelevante, a pouca informação de que precisa. O erro oposto é ter visões separadas que não se conectam, de modo que uma alteração de recheio feita na visão de Helena não chega à visão da confeiteira.

A solução é ter **um modelo único por baixo** (o pedido, com todas as informações) e **visões diferentes por cima** (o que cada papel vê). Essa ideia vai reaparecer na Parte III como a separação entre dados e interface.

### Segunda ideia: abstrações escondem — às vezes o que não deviam

Toda abstração esconde algo. O risco é esconder algo que importa.

Se o modelo do Vértice tratar todas as amostras como iguais ("uma amostra é uma amostra"), ele esconde a diferença entre amostras de rotina e amostras de investigação de desvio — que têm regras, prazos e responsáveis completamente diferentes. Se o modelo da Marzipã tratar a capacidade de produção como "número de bolos por dia", ele esconde que um bolo de três andares ocupa a equipe tanto quanto seis bolos simples.

Para detectar abstrações perigosas, pergunte:

- **"Existem dois casos que este modelo trata como iguais, mas que as pessoas tratam de forma diferente?"** Se existirem, a abstração está grossa demais.
- **"Existem detalhes neste modelo que nenhuma decisão usa?"** Se existirem, ela está fina demais.

### Terceira ideia: problemas diferentes têm a mesma forma

Esta é a ideia mais importante do capítulo, e talvez uma das mais importantes do livro, porque é ela que permite resolver problemas que você nunca viu.

Quando você abstrai o suficiente, descobre que problemas de domínios completamente diferentes têm a **mesma estrutura**. A aprovação de um laudo no laboratório e a aprovação de um reembolso de despesas numa empresa são, em forma, o mesmo problema: um item é submetido, alguém com autoridade revisa, decide (aprovar, rejeitar, devolver para correção) e a decisão é registrada e comunicada. As regras de cada um são diferentes; a forma é a mesma.

Reconhecer a forma permite reaproveitar tudo o que se sabe sobre ela: as perguntas a fazer, os erros comuns, as soluções que costumam funcionar, os testes necessários. O livro chama essas formas recorrentes de **padrões estruturais**.

| Padrão | Forma | Exemplos em domínios diferentes | Perguntas que o padrão sugere |
|---|---|---|---|
| **Fila com capacidade** | Itens chegam, esperam e são atendidos por um recurso limitado. | Amostras no laboratório, pacientes na triagem, chamados de suporte. | Qual o ritmo de chegada e de saída? Há prioridade? O que acontece em picos? |
| **Fluxo de aprovação** | Item é submetido, revisado por alguém com autoridade e aprovado, rejeitado ou devolvido. | Laudos, reembolsos, contratos, publicações. | Quem pode aprovar? Com base em quê? O que acontece se o aprovador está ausente? |
| **Ciclo de vida com estados** | Um item passa por estados definidos, com transições permitidas. | Pedido, chamado, amostra, conta a pagar. | Quais estados? Quais transições são proibidas? Quem pode mudar o estado? |
| **Coleta de informação incompleta** | Algo precisa de um conjunto de informações que chega aos poucos, de forma desorganizada. | Pedidos por mensagem, cadastro de clientes, sinistros de seguro. | O que é obrigatório? Como pedir o que falta? Quando parar de esperar? |
| **Agendamento com restrição** | Alocar itens em espaços de tempo ou recursos limitados. | Produção diária da confeitaria, salas de reunião, agenda médica. | Qual a unidade de capacidade? Itens diferentes ocupam capacidades diferentes? |
| **Reconciliação** | Comparar dois registros que deveriam coincidir e tratar as diferenças. | Extrato bancário × contas pagas, estoque físico × sistema, pedidos × entregas. | Qual é a chave de comparação? O que é diferença aceitável? Quem resolve divergências? |
| **Triagem e roteamento** | Classificar itens que chegam e encaminhá-los para o destino certo. | E-mails de atendimento, documentos recebidos, amostras por tipo de ensaio. | Quais as categorias? O que fazer com o que não se encaixa? Qual o custo de errar o destino? |
| **Lembrete e prazo** | Algo precisa acontecer até uma data, e alguém precisa ser avisado. | Contas a pagar, renovação de documentos, calibração de equipamentos. | Quanto antes avisar? E se o aviso for ignorado? Como saber que foi feito? |
| **Verificação contra especificação** | Comparar uma medida ou característica com limites definidos. | Resultado de ensaio × especificação, orçamento × limite, peso × tolerância. | De onde vêm os limites? Qual versão vale? O que fazer perto do limite? |
| **Consolidação** | Juntar informações de várias fontes num único resultado. | Laudo a partir de vários ensaios, relatório mensal, painel de indicadores. | As fontes usam o mesmo formato e identificadores? O que fazer quando uma falta? |

Quase todo problema real é uma combinação de alguns desses padrões. O problema do Vértice combina fila com capacidade, ciclo de vida com estados, verificação contra especificação, fluxo de aprovação e consolidação. O da Marzipã combina coleta de informação incompleta, agendamento com restrição, ciclo de vida com estados e lembrete. O de Lucas combina lembrete e prazo, reconciliação e ciclo de vida.

Quando você encontrar um problema novo, uma das primeiras perguntas deve ser: **"que padrões estão presentes aqui?"**. Cada padrão reconhecido traz consigo um conjunto de perguntas já testadas.

### Interfaces: a abstração que permite construir

Há uma forma especial de abstração que será essencial na Parte III: a **interface**. Uma interface é a forma de usar algo sem precisar saber como ele funciona por dentro. Você usa uma tomada elétrica sem saber como a energia é gerada; usa um caixa eletrônico sem saber como o banco registra a transação.

Boas interfaces permitem que as partes de um sistema sejam construídas, trocadas e testadas separadamente. Se a parte que verifica capacidade de produção na Marzipã tiver uma interface clara ("recebo uma data e uma lista de itens; respondo se cabe e quanto da capacidade sobra"), ela pode ser implementada com uma planilha hoje e com um sistema amanhã, sem que as outras partes precisem mudar. Essa ideia liga a decomposição do Capítulo 6 à arquitetura do Capítulo 19.

### Exercícios

**Exercício 7.1 · F · M0** — Escolha um objeto do seu trabalho (um documento, um pedido, um paciente, um contrato). Liste as informações que três papéis diferentes precisam sobre ele. O que é comum aos três? O que é específico de cada um?

**Exercício 7.2 · P · M0 · Transferência** — Identifique os padrões estruturais presentes em cada situação. Para cada padrão identificado, escreva uma pergunta que ele sugere e que você faria primeiro.

a) Uma escola de idiomas precisa garantir que cada aluno faça a prova de nivelamento antes da primeira aula, e que as turmas não ultrapassem 12 alunos.
b) Uma clínica veterinária quer avisar tutores sobre vacinas que estão para vencer.
c) Uma empresa de manutenção recebe chamados por e-mail, telefone e formulário, e precisa enviá-los para a equipe certa.
d) Um condomínio quer conferir se as taxas pagas pelos moradores batem com o que foi cobrado.
e) Uma editora recebe manuscritos, que passam por avaliação de dois pareceristas e decisão do editor.

> **Para conferir** — (a) agendamento com restrição (turmas de até 12), ciclo de vida (aluno inscrito → nivelado → matriculado) e verificação (fez a prova antes da aula?). (b) lembrete e prazo, possivelmente com reconciliação (quem já vacinou?). (c) triagem e roteamento, com coleta de informação incompleta (chamados chegam sem dados necessários). (d) reconciliação. (e) fluxo de aprovação com consolidação (dois pareceres). Se você identificou apenas um padrão por situação, olhe de novo: problemas reais quase sempre combinam vários.

**Exercício 7.3 · P · M0** — No modelo que você está construindo para o seu problema, encontre: (a) um caso em que duas coisas diferentes estão sendo tratadas como iguais; (b) um detalhe que nenhuma decisão usa. Corrija o modelo.

## Capítulo 8 — Processos

### O que é um processo

Um **processo** é uma sequência de atividades que transforma entradas em saídas para alguém, normalmente atravessando mais de uma pessoa ou papel. Receber uma amostra e emitir um laudo é um processo. Receber uma mensagem e entregar um bolo é um processo. Receber uma conta e pagá-la no prazo também é.

O System Map do Capítulo 5 mostra *quem* e *o quê* compõem o sistema. O Process Map mostra *como*, *em que ordem* e *com que esperas* as coisas acontecem. É no processo que se vê onde o tempo se perde, onde a informação muda de mãos e onde as exceções aparecem.

Mapear processos (**Process Mapping**) é provavelmente a competência com maior retorno imediato deste livro. Muitos projetos poderiam parar aqui: o mapeamento revela problemas que se resolvem com uma conversa, uma regra nova ou a eliminação de uma etapa.

### O processo oficial e o processo real

Toda organização tem dois processos para cada atividade. O **processo oficial** é o que está no procedimento escrito, no fluxograma da parede ou na cabeça do gestor. O **processo real** é o que as pessoas de fato fazem.

A diferença entre os dois não é desonestidade ou indisciplina. Quase sempre, o processo real existe porque o oficial não funciona em algum caso, e as pessoas encontraram um jeito de fazer funcionar. Esses ajustes — chamados informalmente de "jeitinhos", "gambiarras" ou "atalhos" — são uma das fontes mais ricas de informação num mapeamento. Cada um deles aponta para uma necessidade que o processo oficial não atende.

> **Caso Vértice** — O procedimento escrito diz que amostras urgentes devem ser solicitadas à coordenação, que define a prioridade. Na prática, supervisores de produção ligam diretamente para o analista que conhecem. O atalho existe porque a coordenação nem sempre está disponível e o supervisor precisa de resposta rápida. Se o novo processo simplesmente "reforçar a regra oficial", o atalho vai continuar existindo, só que escondido. Se o novo processo resolver a necessidade (uma forma rápida, sempre disponível, de pedir urgência com critérios claros), o atalho perde a razão de existir.

Mapear o processo oficial é fácil e quase inútil. O trabalho está em descobrir o real.

### Como descobrir o processo real

Quatro técnicas, usadas em conjunto, dão uma boa imagem do processo real.

**Seguir um caso.** Escolha um item concreto — uma amostra, um pedido, uma conta — e acompanhe seu caminho do início ao fim, registrando cada passo, quem fez, quando, com que ferramenta e quanto tempo ficou parado. Faça isso com três a cinco casos diferentes, incluindo pelo menos um que deu errado. É a técnica mais reveladora e a menos usada.

**Observar.** Passe algumas horas ao lado de quem executa o processo. Observe sem interromper; anote as interrupções, as consultas a outras pessoas, as buscas por informação, as telas abertas, os papéis consultados.

**Entrevistar com casos concretos.** Em vez de "como funciona o registro de amostras?", pergunte "me mostre como você registrou a última amostra". Peça para ver o que a pessoa vê. Pergunte sobre a última vez que algo deu errado.

**Ler os rastros.** Planilhas, e-mails, registros, carimbos, horários de envio. Os rastros mostram o que aconteceu de fato e permitem medir tempos sem depender da memória das pessoas.

#### Roteiro de entrevista de processo

O roteiro abaixo funciona para a maioria dos processos. Adapte a linguagem ao contexto.

1. "Qual é o seu papel neste processo? O que chega até você e o que você entrega?"
2. "Me mostre a última vez que você fez isso, passo a passo, na tela ou no papel."
3. "De onde vem a informação de que você precisa? Ela vem sempre completa?"
4. "O que você faz quando falta alguma coisa?"
5. "Quanto tempo isso leva quando corre bem? E quando não corre bem, o que costuma acontecer?"
6. "Quais são os casos estranhos ou especiais? Me conte o último."
7. "Você precisa esperar alguém ou alguma coisa em algum ponto?"
8. "Tem algo que você faz que não está no procedimento, mas que é necessário?"
9. "Se você pudesse mudar uma coisa neste processo, qual seria?"
10. "Quem mais eu deveria ouvir sobre isso?"

A pergunta 8 deve ser feita com cuidado e em ambiente de confiança: a pessoa está contando que faz algo "fora da regra". Deixe claro que o objetivo é melhorar o processo, não apontar culpados — e cumpra essa promessa.

A pergunta 9 é útil, mas trate a resposta como hipótese. Quem executa uma etapa enxerga muito bem os problemas da sua etapa e pouco os das outras.

### O que registrar num Process Map

Um Process Map útil registra:

- **atividades** — o que é feito (verbo + objeto: "registrar amostra", "digitar resultado");
- **papéis** — quem faz, organizados em raias (*swimlanes*), uma por papel;
- **decisões** — pontos em que o caminho se divide ("resultado dentro da especificação?");
- **passagens de bastão** — quando o trabalho muda de mãos;
- **esperas** — onde o item fica parado, e por quanto tempo;
- **entradas e saídas** — o que cada atividade recebe e entrega;
- **ferramentas e registros** — onde a informação é escrita ou lida;
- **exceções** — os caminhos alternativos, com sua frequência aproximada;
- **retrabalho** — os retornos a etapas anteriores.

> **Caso Vértice** — Process Map (processo real, amostras de rotina; tempos ilustrativos, medianas de 30 casos acompanhados):
>
> ```
> PRODUÇÃO     │ coleta amostra ─► etiqueta à mão ─► leva ao lab
>              │                                       │
> RECEPÇÃO     │                                       ▼
>              │                        confere etiqueta ─◇ ok? ──não──► liga p/ produção ─┐
>              │                                          │sim           (espera: 2–24h)   │
>              │                                          ▼                                 │
>              │                        registra na planilha ◄──────────────────────────────┘
>              │                                          │
>              │                         ESPERA: FILA DE ANÁLISE (mediana 7h)
>              │                                          │
> ANALISTA     │                        analisa ─► imprime resultado
>              │                                          │
>              │                         ESPERA: digitação (mediana 5h; digita em lote)
>              │                                          │
>              │                        digita resultados na planilha ─► compara c/ especificação
>              │                                          │
>              │                         ESPERA: FILA DE REVISÃO (mediana 16h)
>              │                                          │
> COORDENAÇÃO  │                        revisa ─◇ dados ok? ──não──► devolve ao analista ──┐
>              │                                │sim              (retrabalho: ~1 em 8)    │
>              │                                ▼                                          │
>              │                        aprova ─► monta laudo ─► envia por e-mail  ◄───────┘
>              │                                                        │
> PRODUÇÃO     │                                                 libera/bloqueia lote
> ```
>
> O mapa mostra que, de um tempo total mediano de cerca de 32 horas úteis, a análise propriamente dita ocupa pouco mais de 2 horas. O resto é espera. A maior espera é a fila de revisão, seguida pela fila de análise e pela espera de digitação. O retrabalho por erro de dados atinge cerca de uma amostra em cada oito e acrescenta, quando ocorre, quase um dia.

### Analisar o processo

Com o mapa em mãos, procure sistematicamente seis tipos de desperdício. Eles aparecem em quase todo processo de trabalho com informação.

| Desperdício | Como aparece | Pergunta de análise |
|---|---|---|
| **Espera** | O item fica parado aguardando alguém ou algo. | Por que espera? O que precisaria acontecer para não esperar? |
| **Retrabalho** | O item volta para uma etapa anterior. | Por que voltou? O erro poderia ser evitado ou detectado antes? |
| **Transcrição** | A mesma informação é copiada de um lugar para outro. | Por que a informação não nasce no lugar onde será usada? |
| **Busca** | Alguém procura informação que deveria estar à mão. | Onde a informação deveria estar? Por que não está? |
| **Aprovação redundante** | Alguém aprova algo que já foi verificado, ou que não precisaria de aprovação. | O que essa aprovação protege? Há outra forma de proteger? |
| **Interrupção** | Uma atividade é interrompida por outra de maior prioridade. | Quem decide prioridade? Há um canal próprio para urgências? |

Além disso, observe dois fenômenos que não são desperdícios em si, mas os amplificam:

**Processamento em lote.** No Vértice, o analista digita resultados em lote (várias amostras de uma vez) e a coordenação revisa em lote (uma vez por dia). Lotes são eficientes para quem executa a etapa, mas aumentam a espera de cada item. Uma amostra que fica pronta às 9h espera até o fim do dia para ser digitada e até o dia seguinte para ser revisada.

**Passagens de bastão.** Cada vez que o trabalho muda de mãos, há espera (o próximo precisa perceber que chegou algo), perda de contexto (o próximo não sabe o que o anterior sabia) e diluição de responsabilidade. Processos com muitas passagens de bastão são lentos mesmo quando cada pessoa é rápida.

### Melhorar antes de automatizar

Depois de analisado o processo, a tentação é automatizar. Resista por um momento e passe pelos degraus baixos da Escada de Intervenção. Há sete movimentos de melhoria de processo que não exigem tecnologia:

1. **Eliminar** uma etapa que não protege nada nem agrega nada.
2. **Combinar** etapas feitas por pessoas diferentes que poderiam ser feitas por uma só.
3. **Reordenar** para que a informação necessária esteja disponível quando a decisão é tomada.
4. **Paralelizar** etapas que não dependem uma da outra.
5. **Padronizar** entradas para reduzir exceções e retrabalho.
6. **Aproximar a decisão da informação**, dando autoridade a quem tem a informação para decidir.
7. **Reduzir o tamanho do lote**, processando itens à medida que chegam.

> **Caso Vértice** — Antes de qualquer sistema, a equipe testou três mudanças por duas semanas: (1) a coordenação passou a revisar em duas janelas fixas por dia, em vez de uma, e uma analista sênior recebeu autorização (prevista no sistema de qualidade, mas nunca usada) para revisar ensaios de rotina — redução de lote e aproximação da decisão; (2) etiquetas pré-impressas com código sequencial foram entregues à produção — padronização na entrada; (3) pedidos de urgência passaram a ser feitos por um canal único, com três critérios definidos — eliminação do atalho. A mediana do tempo total caiu de cerca de 32 para cerca de 20 horas úteis, sem nenhuma linha de código. A digitação de resultados, que era o que Beatriz queria resolver com "IA para laudos", continuou existindo — e passou a ser o próximo alvo, agora com evidência de que valia a pena.

> **Anti-padrão: automatizar processo ruim** — *Sintoma:* a automação acelera uma etapa que não deveria existir, ou reproduz em software um fluxo cheio de esperas e retrabalho. *Causa:* o processo atual é tomado como dado; a pergunta é "como fazer isto mais rápido?" em vez de "isto deveria ser feito assim?". *Consequência:* o processo ruim fica mais rápido, mais caro de mudar (porque agora está codificado) e mais difícil de questionar ("o sistema exige"). *Correção:* mapeie o processo real, analise os desperdícios e aplique os movimentos de melhoria antes de automatizar. Automatize o processo melhorado, não o atual.

> **Anti-padrão: construir antes de entender** — *Sintoma:* a primeira entrega do projeto é um protótipo, e o mapeamento do processo "fica para depois". *Causa:* construir com IA é tão rápido que parece mais barato construir e ajustar do que entender primeiro. *Consequência:* o protótipo cristaliza um entendimento errado do processo; as pessoas passam a discutir o protótipo em vez do problema; ajustes sucessivos produzem um sistema remendado. *Correção:* protótipos rápidos são excelentes *depois* de um mapeamento mínimo, como forma de testar hipóteses sobre o processo. Antes dele, são uma forma cara de adiar perguntas.

### Exceções no processo

Todo processo tem um **caminho principal** (o que acontece na maioria dos casos) e **caminhos de exceção** (o que acontece quando algo foge do normal). Num mapeamento, as exceções tendem a ser subestimadas, porque as pessoas descrevem o caminho principal e esquecem os outros.

As exceções importam por três razões. Primeiro, consomem uma parcela desproporcional do tempo e da atenção: o caso normal leva minutos, a exceção leva horas. Segundo, é nelas que estão as regras implícitas, porque é nelas que alguém precisa decidir algo que o procedimento não prevê. Terceiro, é nelas que as automações quebram.

Para cada exceção encontrada, registre: o que dispara a exceção, com que frequência aproximada ocorre, o que se faz hoje e quem decide. O Capítulo 10 transforma essa lista em regras; o Capítulo 24 mostra como automações devem tratá-las.

### Exercícios

**Exercício 8.1 · F · M0** — Mapeie um processo pessoal simples (por exemplo, pagar uma conta que chega por e-mail) com raias, decisões, esperas e exceções. Mesmo processos simples costumam ter exceções que não percebemos: quais são as do seu?

**Exercício 8.2 · P · M0** — Faça uma entrevista de processo com alguém, usando o roteiro deste capítulo, sobre um processo de trabalho dessa pessoa. Depois, siga pelo menos dois casos concretos. Desenhe o Process Map real e compare com o que a pessoa descreveu no início da entrevista. Liste as diferenças.

**Exercício 8.3 · P · M0** — No mapa do exercício anterior, identifique os seis tipos de desperdício. Para cada um encontrado, proponha um dos sete movimentos de melhoria, sem tecnologia.

**Exercício 8.4 · P · M4** — O mapa abaixo foi produzido por uma IA a partir de uma descrição de um processo de reembolso de despesas. Encontre o que provavelmente está faltando ou errado, considerando o que você sabe sobre processos reais.

```
FUNCIONÁRIO  │ preenche formulário ─► anexa recibos ─► envia
GESTOR       │                                          └─► aprova ─► encaminha
FINANCEIRO   │                                                          └─► paga
```

> **Para conferir** — O mapa mostra só o caminho feliz. Faltam: a decisão do gestor (aprovar, rejeitar, devolver para correção) e o que acontece em cada caso; a verificação do financeiro (recibo legível? dentro da política? valor confere?); esperas (quanto tempo o pedido fica com o gestor?); exceções (recibo perdido, despesa fora da política, gestor de férias, valor acima de limite que exige outra aprovação); retrabalho (devoluções); comunicação ao funcionário sobre o status; registro (onde fica a informação de que foi pago?). Um mapa assim é um bom exemplo de output plausível e inútil: parece completo e não revela nada.

**Exercício 8.5 · A · M0 · Transferência** — Escolha um processo que você conhece apenas como usuário (renovar uma matrícula, marcar uma consulta, devolver um produto comprado pela internet). Desenhe o Process Map do ponto de vista da organização, a partir do que você observa como usuário. Marque com "?" tudo o que você está inferindo. Liste as perguntas que precisaria fazer a alguém de dentro para validar o mapa.

## Capítulo 9 — Dados

### Pensar em dados sem pensar em banco de dados

Todo processo depende de informação: o que se sabe sobre cada amostra, cada pedido, cada conta. Antes de falar em planilhas ou bancos de dados — o que faremos na Parte III —, é preciso pensar nos dados como parte do problema. Essa é a competência de **Data Thinking**: entender que informações o processo precisa conhecer, lembrar, verificar e comunicar, de onde elas vêm e quão confiáveis são.

A maior parte dos problemas que parecem "de sistema" é, na verdade, de dados: informação que não existe, que existe em vários lugares com valores diferentes, que é copiada à mão, que chega tarde ou que ninguém sabe se está correta. Nenhum software resolve um problema de dados que não foi entendido.

### Entidades, atributos e relações

Para modelar os dados de um processo, comece pelas **entidades**: as coisas sobre as quais o processo precisa guardar informação. Um bom teste é perguntar "do que as pessoas falam quando descrevem o trabalho?" — os substantivos que se repetem costumam ser entidades.

Cada entidade tem **atributos**: as informações que se guardam sobre ela. E entidades se conectam por **relações**.

> **Caso Marzipã** — Entidades identificadas nas conversas com Helena:
>
> | Entidade | Atributos principais | Observações |
> |---|---|---|
> | **Cliente** | nome, telefone, endereço(s), observações | Uma cliente pode ter vários endereços (casa, trabalho, salão de festa). |
> | **Pedido** | cliente, data de entrega, janela de horário, forma de entrega, endereço de entrega, status, valor total, observações | O centro do modelo. |
> | **Item do pedido** | produto, tamanho, sabor, recheio, cobertura, texto, quantidade, preço | Um pedido pode ter vários itens (bolo + 50 docinhos). |
> | **Produto** | nome, tamanhos disponíveis, preço por tamanho, unidades de trabalho, antecedência mínima | "Unidades de trabalho" é a forma de medir capacidade (Capítulo 10). |
> | **Pagamento** | pedido, valor, data, tipo (sinal ou saldo), forma, comprovante | Um pedido tem em geral dois pagamentos. |
> | **Dia de produção** | data, capacidade total em unidades de trabalho, observações | Capacidade varia: feriados, folgas, eventos. |
>
> Relações: uma cliente faz muitos pedidos; um pedido tem muitos itens; cada item se refere a um produto; um pedido tem zero, um ou dois pagamentos; cada pedido é produzido num dia de produção.

A forma de expressar relações em linguagem comum é perguntar, nos dois sentidos, "quantos?". Uma cliente pode ter quantos pedidos? Muitos. Um pedido pertence a quantas clientes? Uma. Essa relação é de **um para muitos**. Um item pode estar em vários pedidos? Não: cada item pertence a um pedido. Um produto aparece em vários itens? Sim. Essa contagem — chamada de **cardinalidade** — é o que, mais tarde, define como os dados serão organizados em tabelas.

Errar a cardinalidade produz problemas sérios e difíceis de corrigir depois. Se o modelo assumir que cada pedido tem um único item, o dia em que alguém pedir um bolo e cinquenta docinhos vai exigir dois pedidos "falsos", ou um campo de observação com tudo escrito à mão — e a verificação de capacidade deixará de funcionar.

### Identificadores

Cada ocorrência de uma entidade precisa ser identificável sem ambiguidade. Isso parece óbvio e é fonte de uma quantidade surpreendente de problemas.

**Nomes não são identificadores.** Há muitas "Ana Paula" entre as clientes de qualquer confeitaria. Telefone é um identificador melhor, mas não perfeito (pessoas trocam de número, famílias compartilham).

**Identificadores precisam ser únicos e estáveis.** No Vértice, o código da amostra era escrito à mão pela produção, no formato "produto + data". Quando dois turnos coletavam o mesmo produto no mesmo dia, havia dois códigos iguais. A etiqueta pré-impressa com número sequencial, mencionada no capítulo anterior, resolveu um problema de identificador — não de etiqueta.

**Identificadores não devem carregar significado que pode mudar.** Um código de pedido como "SAB-0614-ANA" (sábado, 14 de junho, Ana) parece prático, mas quando a entrega muda para domingo, o código fica errado ou precisa mudar — e tudo o que se referia a ele quebra. Identificadores estáveis costumam ser sequenciais ou aleatórios, e o significado fica nos atributos.

### Estados

Muitas entidades passam por **estados** ao longo do tempo. Um pedido pode estar em rascunho, aguardando sinal, confirmado, em produção, pronto, entregue, concluído ou cancelado. Uma amostra pode estar recebida, em análise, aguardando revisão, aprovada, reprovada ou em investigação.

O estado é um dos atributos mais importantes de qualquer modelo, porque é ele que determina **o que pode acontecer em seguida**. Um pedido em produção não deveria ter o sabor alterado sem uma decisão explícita. Uma amostra reprovada não deveria gerar laudo de liberação. Neste capítulo, basta identificar os estados de cada entidade; no próximo, você vai modelar as regras que governam as mudanças de estado.

Uma armadilha frequente é representar o estado de forma implícita: a cor de uma célula na planilha, uma pasta no e-mail, a posição de um papel na mesa. Estados implícitos não podem ser consultados, contados nem verificados. Torná-los explícitos — um campo "status" com valores definidos — é uma das intervenções mais simples e úteis do degrau 3 da Escada.

### Fonte da verdade

Quando a mesma informação existe em mais de um lugar, é preciso decidir qual deles é a **fonte da verdade**: o lugar cujo valor prevalece quando há divergência.

Na Marzipã, o sabor de um bolo podia estar em três lugares: na conversa com a cliente, no caderno de Helena e no papel colado na geladeira da cozinha. Quando a cliente pedia uma alteração por mensagem, Helena às vezes atualizava o caderno e esquecia o papel da cozinha. Qual era o sabor "certo"? Não havia resposta, e o bolo saía com o que estivesse escrito no lugar que a confeiteira consultou.

O princípio é: **cada informação deve ter uma única fonte da verdade, e todas as outras ocorrências devem ser derivadas dela** — cópias atualizadas automaticamente, ou consultas à fonte. Cópias manuais divergem; é uma questão de tempo.

### Dados que nascem e dados que são copiados

Uma distinção útil para encontrar problemas: alguns dados **nascem** em um ponto do processo (o resultado de um ensaio nasce no instrumento; o pedido nasce na conversa com a cliente) e outros são **copiados** de um lugar para outro (o resultado é digitado na planilha; o pedido é anotado no caderno).

Cada cópia manual é uma oportunidade de erro e de atraso. O princípio da **captura na origem** diz que um dado deve ser registrado de forma estruturada o mais perto possível de onde nasce, por quem tem a informação, e daí em diante circular sem ser redigitado. No Vértice, isso significa capturar o resultado diretamente do arquivo que o instrumento já gera, em vez de imprimi-lo e digitá-lo. Essa observação vai virar, no Capítulo 24, uma automação de importação.

### Qualidade dos dados

Dados podem estar presentes e mesmo assim ser inúteis. Seis dimensões ajudam a avaliar a qualidade dos dados de um processo:

| Dimensão | Pergunta | Exemplo de problema |
|---|---|---|
| **Completude** | Os campos necessários estão preenchidos? | Pedido sem horário de entrega. |
| **Exatidão** | O valor corresponde à realidade? | Telefone digitado com um dígito trocado. |
| **Consistência** | O mesmo dado tem o mesmo valor em todos os lugares? | Sabor diferente no caderno e na cozinha. |
| **Atualidade** | O valor está atualizado para o momento da decisão? | Capacidade do dia não reflete a folga de uma confeiteira. |
| **Unicidade** | Cada coisa aparece uma vez só? | Mesma cliente cadastrada três vezes, com grafias diferentes. |
| **Validade** | O valor está num formato e intervalo permitido? | Data de entrega "sábado que vem"; pH igual a 23. |

Antes de construir qualquer coisa que dependa de dados existentes, faça uma **avaliação de qualidade por amostragem**: pegue de vinte a cinquenta registros e verifique cada dimensão. O resultado frequentemente muda o projeto. Se 30% dos registros de clientes estão duplicados, uma automação que envia lembretes vai mandar três mensagens para a mesma pessoa.

### Perguntas do ciclo de vida dos dados

Para cada entidade importante, faça cinco perguntas:

1. **Quem cria?** Em que momento do processo, com que informação?
2. **Quem lê?** Para que decisão?
3. **Quem altera?** Em que circunstâncias? A alteração precisa ser registrada (quem mudou, quando, de quê para quê)?
4. **Quando deixa de ser necessária?** Há prazo de guarda? Pode ser apagada?
5. **Quem não deveria ver?** Há informação pessoal ou sensível?

A pergunta 3 é especialmente importante em ambientes regulados. No Vértice, um resultado de ensaio não pode simplesmente ser sobrescrito: qualquer alteração precisa registrar quem mudou, quando, o valor anterior e o motivo. Essa exigência de **trilha de auditoria** muda o tipo de solução possível; uma planilha comum, em que qualquer pessoa pode alterar qualquer célula sem registro, não a atende.

A pergunta 5 antecipa o que o Capítulo 32 vai tratar em profundidade. Por ora, guarde um princípio: **colete apenas os dados de que o processo realmente precisa**. Dado que não é coletado não pode vazar.

> **Caso Casa** — As entidades do sistema de Lucas são poucas: conta (fornecedor, valor, vencimento, forma de pagamento, status), documento (tipo, pessoa, número, validade, onde está guardado), garantia (produto, data de compra, prazo, onde está a nota fiscal) e compromisso (tipo, pessoa, data). A pergunta 5 foi a que mais mudou o projeto: o número de documentos de identidade e dados de saúde dos filhos não precisavam estar no sistema para que os lembretes funcionassem. Bastava registrar o *tipo* de documento, a *validade* e *onde* ele está guardado.

### Exercícios

**Exercício 9.1 · F · M0** — Modele as entidades, atributos e relações de uma biblioteca comunitária que empresta livros. Inclua pelo menos quatro entidades. Para cada relação, escreva a cardinalidade nos dois sentidos.

> **Para conferir** — Uma boa resposta distingue **título** (a obra) de **exemplar** (a cópia física): um título tem muitos exemplares, e o que se empresta é o exemplar. Entidades mínimas: usuário, título, exemplar, empréstimo; frequentemente também reserva e multa. Cardinalidades: um usuário tem muitos empréstimos, cada empréstimo é de um usuário; um título tem muitos exemplares, cada exemplar é de um título; cada empréstimo (no modelo mais simples) se refere a um exemplar, e um exemplar tem muitos empréstimos ao longo do tempo. Se o seu modelo tem só "livro", ele não consegue representar duas cópias do mesmo título nem saber qual delas está emprestada.

**Exercício 9.2 · P · M0** — Para o modelo do exercício anterior, identifique os estados de cada entidade que os tenha. Qual é a fonte da verdade para "este livro está disponível"?

**Exercício 9.3 · P · M4** — A tabela abaixo é um trecho fictício, mas realista, dos registros de clientes de uma pequena loja. Avalie a qualidade pelas seis dimensões e liste cada problema encontrado.

| Nome | Telefone | Cidade | Último pedido | Status |
|---|---|---|---|---|
| Ana Souza | (11) 98888-1234 | São Paulo | 12/03/2026 | ativa |
| ana souza | 11988881234 | SP | 2026-03-12 | Ativo |
| Carlos Lima | | Campinas | 31/02/2026 | ativo |
| Mariana Reis | (11) 9777-12 | São Paulo | 05/01/2026 | inativa |
| Pedro Alves | (21) 99999-0000 | Rio | ontem | ativo |

> **Para conferir** — Unicidade: as duas primeiras linhas são provavelmente a mesma pessoa. Consistência: grafias diferentes da cidade ("São Paulo", "SP"), do status ("ativa", "Ativo", "ativo") e do formato de data. Completude: telefone ausente para Carlos. Validade: 31/02 não existe; "ontem" não é data; telefone de Mariana tem dígitos faltando. Atualidade: não há como saber se "ativo" está atualizado, nem o que significa. Se você encontrou menos de oito problemas, olhe de novo.

**Exercício 9.4 · P · M0** — Para o problema que você vem trabalhando, liste as entidades principais, seus identificadores e estados. Indique a fonte da verdade de cada informação crítica e onde há cópias manuais. Aplique as cinco perguntas do ciclo de vida a pelo menos uma entidade.

**Exercício 9.5 · A · M0 · Transferência** — Um clube esportivo quer controlar o uso de quadras: sócios reservam horários, podem levar convidados (com taxa), e reservas não usadas sem aviso geram penalidade. Modele as entidades e relações. Identifique pelo menos uma relação muitos-para-muitos e explique como ela aparece no mundo real.

## Capítulo 10 — Regras

### O que são regras

Uma **regra** determina o que deve acontecer em função de condições. "Se o resultado do ensaio estiver fora da especificação, a amostra deve ser reprovada e uma investigação aberta." "Pedidos de bolos personalizados precisam de pelo menos três dias de antecedência." "Contas com débito automático não precisam de lembrete."

Regras são o que transforma dados em decisões. São também o que diferencia uma automação útil de uma perigosa: uma automação aplica regras com perfeição — inclusive regras erradas, incompletas ou desatualizadas. Este capítulo trata da competência de **Rule Modeling**: descobrir, explicitar, verificar e organizar as regras de um processo.

### Regras explícitas, implícitas e tácitas

As regras de um processo existem em três estados.

**Explícitas** estão escritas em algum lugar: procedimento, política, contrato, especificação técnica. "A amostra é aprovada se todos os resultados estiverem dentro dos limites da especificação vigente."

**Implícitas** não estão escritas, mas as pessoas sabem enunciá-las se perguntadas. "Amostras do cliente X sempre têm prioridade." "Não aceitamos bolo de três andares para entrega fora da cidade."

**Tácitas** são aplicadas sem que a pessoa consiga enunciá-las com facilidade. "Eu olho o resultado e sei se precisa repetir." Elas são fruto de experiência e frequentemente envolvem julgamento de vários fatores ao mesmo tempo.

Regras explícitas são as mais fáceis de automatizar, mas também é preciso verificá-las: o documento pode estar desatualizado em relação ao que se faz. Regras implícitas precisam ser explicitadas, o que geralmente exige conversa com várias pessoas, porque cada uma conhece uma parte. Regras tácitas são as mais difíceis e as mais valiosas de entender, porque é nelas que mora o conhecimento especializado.

### Como extrair regras implícitas e tácitas

Pedir "me diga as regras" raramente funciona. As pessoas não guardam regras na forma de lista; guardam casos. Por isso, as técnicas mais eficazes trabalham com casos.

**Pedir o último caso.** "Qual foi a última vez que você recusou um pedido? Por quê?" Cada resposta revela uma regra (ou parte de uma).

**Contrastar casos.** "Por que este pedido foi aceito e aquele parecido foi recusado?" A diferença entre dois casos semelhantes com decisões diferentes isola a condição que importa.

**Explorar variações.** "E se a entrega fosse no domingo? E se fosse para outra cidade? E se a cliente já tivesse pago tudo?" Cada variação testa os limites de uma regra.

**Procurar exceções à regra.** "Isso vale sempre? Já houve um caso em que não valeu?" Regras ditas como absolutas costumam ter exceções que a pessoa só lembra quando perguntada diretamente.

**Pensar em voz alta.** Peça à pessoa que tome decisões reais em voz alta, explicando cada passo. "Estou olhando este resultado... está perto do limite, então vou ver o histórico do produto... nos últimos lotes ficou estável, então não repito." Esta é a técnica mais eficaz para regras tácitas.

> **Caso Marzipã** — Ao contrastar pedidos aceitos e recusados, surgiu uma regra que Helena nunca tinha formulado: ela não media capacidade em "número de bolos", mas intuitivamente em esforço. Um bolo simples de um andar "dá pouco trabalho"; um de três andares com decoração "vale por uns seis simples"; cem docinhos "valem por uns dois bolos". A partir disso, definiu-se a **unidade de trabalho (UT)**: bolo simples = 1 UT; bolo decorado de um andar = 2 UT; cada andar adicional = +2 UT; cada 50 doces = 1 UT. A capacidade de um dia normal, com as duas confeiteiras, ficou em 12 UT. A regra tácita ("sei quando o dia está cheio") virou uma regra explícita e verificável. Helena ajustou os pesos durante duas semanas, comparando o cálculo com sua percepção, até ficarem confiáveis.

### Representar regras

Regras escritas em parágrafos são difíceis de verificar. Quatro representações tornam regras mais precisas — e mais fáceis de delegar a uma IA ou a um software.

#### Regras "se–então"

A forma mais simples. Cada regra tem condições e uma consequência.

```
SE   produto é personalizado
E    antecedência até a data de entrega < 3 dias
ENTÃO recusar o pedido, ou oferecer um produto do catálogo padrão
```

Funciona bem para regras isoladas. Quando há muitas regras que interagem, fica difícil saber se cobrem todos os casos e se alguma contradiz outra.

#### Tabelas de decisão

Uma tabela de decisão lista as condições em colunas e as combinações possíveis em linhas, com a ação correspondente a cada combinação. É a representação mais útil para regras com várias condições, porque **torna visíveis os casos não cobertos**.

> **Caso Marzipã** — Regra de aceitação de pedidos:
>
> | # | Antecedência suficiente? | Capacidade disponível no dia? | Entrega na área atendida? | Ação |
> |---|---|---|---|---|
> | 1 | sim | sim | sim | Aceitar e solicitar sinal. |
> | 2 | sim | sim | não | Aceitar somente para retirada; oferecer essa opção. |
> | 3 | sim | não | — | Oferecer outra data. |
> | 4 | não | — | — | Recusar personalizado; oferecer catálogo pronta-entrega. |
>
> O traço (—) significa "não importa". Ao montar a tabela, Helena percebeu uma lacuna: o que fazer com clientes recorrentes que pedem com antecedência curta? Ela às vezes aceitava, "se desse". A tabela forçou uma decisão: a regra 4 ganhou uma exceção explícita — para clientes com três ou mais pedidos anteriores, Helena decide caso a caso (a decisão volta para um humano, de forma consciente).

Uma tabela de decisão completa tem uma linha para cada combinação relevante. Com três condições de sim/não, há oito combinações; o uso de "não importa" reduz o número de linhas. Verificar uma tabela de decisão é simples: para cada combinação possível, existe exatamente uma linha que se aplica? Se existir nenhuma, há uma lacuna; se existir mais de uma com ações diferentes, há um conflito.

#### Árvores de decisão

Uma árvore representa a mesma lógica de uma tabela, mas como uma sequência de perguntas. É mais natural para regras em que a ordem das perguntas importa, ou em que algumas perguntas só fazem sentido dependendo da resposta anterior.

```
Resultado dentro da especificação?
├── sim → Resultado a menos de 5% de algum limite?
│         ├── não → aprovar
│         └── sim → histórico do produto estável nos últimos 10 lotes?
│                   ├── sim → aprovar com observação
│                   └── não → repetir o ensaio
└── não → É a primeira vez que este ensaio falha para esta amostra?
          ├── sim → repetir o ensaio (uma vez)
          └── não → reprovar e abrir investigação
```

> **Caso Vértice** — Essa árvore nasceu de uma sessão de "pensar em voz alta" com a analista mais experiente. A regra "olho e sei se precisa repetir" virou três condições explícitas. Note que a árvore ainda depende de duas definições que precisaram ser escritas: o que é "histórico estável" e por que 5%. A segunda foi definida pela coordenação a partir da variabilidade conhecida de cada método — e passou a ser um parâmetro por ensaio, não um número fixo.

#### Máquinas de estado

No Capítulo 9, você identificou os estados das entidades. Uma **máquina de estado** define quais transições entre estados são permitidas, o que as dispara e que condições precisam ser verdadeiras.

```
                         sinal pago
   RASCUNHO ──► AGUARDANDO SINAL ─────────► CONFIRMADO ──► EM PRODUÇÃO ──► PRONTO
       │               │                        │               │            │
       ▼               ▼                        ▼               ▼            ▼
   DESCARTADO      EXPIRADO                 CANCELADO       CANCELADO     ENTREGUE
                   (prazo do sinal          (pedido da      (só com          │
                    vencido)                 cliente)        decisão de      │ saldo pago
                                                             Helena)         ▼
                                                                         CONCLUÍDO
```

A máquina de estado responde a perguntas que, sem ela, ficam para ser decididas na hora — geralmente mal:

- Um pedido pode voltar de *em produção* para *confirmado*? (Não. Alterações em produção são tratadas como exceção.)
- Um pedido *expirado* pode ser reativado? (Sim, voltando para *aguardando sinal*, se ainda houver capacidade.)
- O que acontece com o sinal quando um pedido *confirmado* é cancelado? (Depende da antecedência: essa é outra tabela de decisão.)

Máquinas de estado são uma das ferramentas mais poderosas para especificar sistemas, porque transformam um processo inteiro em um conjunto finito de situações e passagens verificáveis. Quase todo bug de sistema de gestão é, no fundo, uma transição de estado que não deveria ser permitida ou um estado que não foi previsto.

#### Invariantes

Um **invariante** é uma regra que deve ser verdadeira o tempo todo, em qualquer estado. "Todo pedido confirmado tem um sinal registrado." "A soma das UTs dos pedidos confirmados de um dia nunca excede a capacidade do dia." "Nenhum laudo aprovado tem resultado fora da especificação sem uma investigação concluída."

Invariantes são excelentes para testes (Capítulo 30) e para auditoria: em qualquer momento, basta verificar se todos continuam verdadeiros. Se um não for, há um erro em algum lugar.

### Regras precisam de dono

Regras mudam. A capacidade da Marzipã muda quando uma confeiteira sai de férias; a especificação de um produto muda quando o cliente revisa o contrato; o prazo de antecedência muda quando Helena decide aceitar mais encomendas. Por isso, para cada regra, registre:

- **quem é o dono** — quem tem autoridade para mudá-la;
- **de onde ela vem** — política interna, contrato, exigência legal, decisão de negócio, limite técnico;
- **quando foi definida e revisada** — e por qual motivo;
- **quais valores são parâmetros** — números e limites que devem poder ser ajustados sem refazer a regra.

A separação entre **regra** e **parâmetro** é especialmente útil. "Pedidos personalizados exigem antecedência mínima de N dias" é a regra; N = 3 é o parâmetro. Quando a regra for implementada em software, os parâmetros devem ficar num lugar onde o dono da regra consiga alterá-los — e não escondidos no meio do código, onde só quem programou consegue mexer.

### Exceções

No Capítulo 8 você listou as exceções do processo. Agora é preciso decidir como tratá-las. Há três tipos:

**Exceções previsíveis com regra.** Acontecem com alguma frequência e podem ser tratadas por uma regra própria. "Se a cliente pedir alteração depois da confirmação e antes da produção, aceitar se não aumentar as UTs; caso contrário, verificar capacidade."

**Exceções previsíveis sem regra.** Sabe-se que acontecem, mas cada caso exige julgamento. A regra, nesse caso, é sobre **quem decide**: "alterações em pedidos já em produção são decididas por Helena". O sistema não precisa saber a resposta; precisa saber para quem perguntar.

**Exceções imprevistas.** Algo que ninguém imaginou. A regra aqui é a de **segurança**: "qualquer situação não prevista interrompe o fluxo automático e vai para revisão humana". Esse "caminho padrão para o desconhecido" é obrigatório em qualquer automação séria e será retomado no Capítulo 24.

> **Anti-padrão: ignorar exceções** — *Sintoma:* a especificação ou a automação descreve só o caminho principal; quando perguntado "e se...?", o responsável diz "isso é raro". *Causa:* exceções são chatas de levantar, e o caminho principal já dá a sensação de completude. *Consequência:* o sistema funciona na demonstração e falha na operação; exceções não tratadas viram trabalho manual escondido, dados inconsistentes ou decisões erradas tomadas automaticamente. *Correção:* para cada etapa, pergunte "o que pode chegar aqui diferente do normal?"; classifique cada exceção nos três tipos; e garanta que existe um caminho padrão para o imprevisto.

### Regras e julgamento

Nem tudo pode ou deve virar regra explícita. Algumas decisões dependem de tantos fatores, de forma tão variável, que tentar escrevê-las como regra produz algo frágil e enganoso. A avaliação de se uma reclamação de cliente merece reembolso, a interpretação de um resultado de ensaio muito atípico, a decisão de aceitar ou não um pedido incomum — tudo isso envolve julgamento.

Para cada decisão do processo, é útil classificar o **grau de explicitabilidade**:

- **totalmente explicitável** — pode ser escrita como regra completa (comparação com limite de especificação);
- **parcialmente explicitável** — uma regra cobre a maioria dos casos e o resto vai para julgamento humano (aceitação de pedidos, com exceção para clientes recorrentes);
- **essencialmente de julgamento** — pode ter critérios orientadores, mas a decisão final é humana (abrir ou não uma investigação ampliada de desvio).

Essa classificação será decisiva no Capítulo 27, quando você aprender a decidir se uma parte do problema deve ser resolvida por regra determinística, por IA ou por uma pessoa. Por enquanto, guarde a observação: **a IA não transforma julgamento em regra**. Ela pode ajudar quem julga, oferecendo informação, sugestões ou rascunhos. Mas uma decisão que antes dependia de julgamento continua dependendo dele, mesmo quando uma IA participa.

### Exercícios

**Exercício 10.1 · F · M0** — Escreva como regras "se–então" a política de devolução de uma loja que você conhece (ou invente uma plausível). Depois transforme-as numa tabela de decisão. A tabela revelou alguma lacuna ou conflito?

**Exercício 10.2 · P · M0** — Desenhe a máquina de estado de uma conta a pagar no sistema de Lucas: estados, transições, o que dispara cada transição e quais transições são proibidas. Inclua o que acontece quando uma conta é paga em duplicidade.

> **Para conferir** — Uma boa resposta tem pelo menos: prevista (cadastrada antes de chegar), recebida (boleto ou fatura disponível), agendada, paga, conferida (pagamento confirmado no extrato) e vencida. A transição "paga → conferida" depende de uma reconciliação com o extrato — padrão estrutural do Capítulo 7. O pagamento em duplicidade não é um estado da conta, mas uma exceção que exige ação (pedir estorno ou crédito) e talvez uma entidade própria ("crédito a recuperar"). Se a sua máquina vai direto de "recebida" para "paga", sem conferência, você está confiando que todo pagamento iniciado foi concluído — exatamente o tipo de suposição que gera multas.

**Exercício 10.3 · P · M0** — Faça uma sessão de "pensar em voz alta" com alguém que toma uma decisão recorrente no trabalho (ou com você mesmo, numa decisão sua). Registre a fala e extraia as regras. Represente-as como árvore ou tabela. Classifique cada regra como explícita, implícita ou tácita, e cada decisão pelo grau de explicitabilidade.

**Exercício 10.4 · P · M4** — Uma IA produziu a tabela de decisão abaixo para a aprovação de reembolsos de despesas. Verifique completude e consistência.

| Valor | Tem recibo? | Dentro da política? | Ação |
|---|---|---|---|
| até 200 | sim | sim | aprovar automaticamente |
| até 200 | não | — | rejeitar |
| acima de 200 | sim | sim | enviar ao gestor |
| acima de 200 | sim | não | rejeitar |
| qualquer | sim | não | enviar ao financeiro |

> **Para conferir** — Lacunas: valor acima de 200 sem recibo não está coberto; valor até 200 com recibo e fora da política só é coberto pela última linha. Conflito: um reembolso acima de 200, com recibo e fora da política, se encaixa tanto na linha 4 (rejeitar) quanto na linha 5 (enviar ao financeiro). Ambiguidade: "até 200" inclui exatamente 200? "Acima de 200" começa em 200,01? A tabela também não diz o que fazer quando não há como saber se está dentro da política. Esse é um exemplo típico de output plausível de IA: bem formatado, aparentemente completo e com erros que só uma verificação sistemática encontra.

**Exercício 10.5 · A · M0** — Escreva três invariantes para o modelo de dados do Exercício 9.1 (biblioteca). Para cada um, descreva uma situação concreta que o violaria e como ela poderia acontecer na prática.

## Revisão da Parte II

Você chegou ao fim da parte que não fala de tecnologia. Antes de seguir, verifique se consegue fazer, sem consultar o texto, cada uma das coisas abaixo.

- Distinguir situação, sintoma, problema e tarefa, e reescrever uma tarefa como problema.
- Escrever um Problem Statement com os oito elementos, incluindo indicador, linha de base, meta e indicador de proteção.
- Separar fatos, interpretações e hipóteses numa conversa.
- Mapear stakeholders distinguindo posição e interesse.
- Desenhar um System Map com fronteira, atores, fluxos, estoques e laços.
- Encontrar o gargalo de um processo e explicar por que melhorar outra etapa não ajuda.
- Decompor um problema por pelo menos três critérios e aplicar a regra de parada.
- Reconhecer padrões estruturais num problema novo.
- Mapear o processo real, com esperas, exceções e retrabalho, e propor melhorias sem tecnologia.
- Modelar entidades, atributos, relações, identificadores, estados e fonte da verdade.
- Avaliar a qualidade de dados pelas seis dimensões.
- Representar regras como tabela de decisão, árvore e máquina de estado; encontrar lacunas e conflitos.
- Classificar exceções e decisões pelo grau de explicitabilidade.

### Exercício integrador · P · M0

**Exercício R2.1 · P · M0** — Uma clínica de fisioterapia com quatro profissionais tem o seguinte relato da dona: "A agenda é um caos. Pacientes faltam, a gente remarca por mensagem, às vezes dois pacientes aparecem no mesmo horário, e eu não sei quantas sessões cada um ainda tem no pacote que comprou. Quero um sistema com IA que resolva isso."

Sem usar IA, produza:

1. as decisões embutidas no pedido;
2. um Problem Statement provisório, marcando o que precisaria ser levantado (linha de base, meta);
3. um mapa de stakeholders com posição e interesse;
4. um System Map com pelo menos um laço;
5. os padrões estruturais presentes;
6. um Process Map provisório do agendamento, com exceções;
7. o modelo de entidades, com estados da entidade principal;
8. uma tabela de decisão para remarcações e uma máquina de estado para sessões;
9. três intervenções nos degraus 0 a 2 da Escada, antes de qualquer sistema.

> **Para conferir** — Elementos que uma boa resposta contém: o pedido embute que a solução é um sistema, com IA, e que o problema é "a agenda" (quando há pelo menos três problemas distintos: faltas, conflitos de horário e controle de pacotes). Padrões: agendamento com restrição, ciclo de vida (sessão: agendada → confirmada → realizada / falta / remarcada / cancelada), lembrete e prazo, reconciliação (sessões do pacote × realizadas). Entidades mínimas: paciente, profissional, pacote, sessão, horário. Conflitos de horário indicam ausência de fonte única da verdade da agenda. Intervenções de degrau baixo: confirmação ativa de presença na véspera (degrau 1), política explícita de faltas e remarcações comunicada aos pacientes (degrau 1 e 2), agenda única compartilhada em vez de agendas pessoais (degrau 3). Se a sua primeira intervenção foi "um sistema de agendamento", releia o Capítulo 3. Se a sua resposta não tem nenhuma exceção no Process Map (paciente atrasado, profissional doente, pacote vencido, pagamento pendente), releia o Capítulo 8.
