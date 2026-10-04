# PARTE II — APRENDER A PENSAR

Nenhum capítulo desta parte fala de software. Isso é deliberado. As competências que você vai desenvolver aqui — formular problemas, enxergar sistemas, decompor, abstrair, mapear processos, pensar em dados e explicitar regras — são anteriores a qualquer tecnologia e determinam a qualidade de tudo o que vier depois.

A maioria dos exercícios desta parte está no modo M0, sem IA. A razão é simples: nas Partes IV e V você vai usar a IA intensamente para gerar alternativas, especificar e construir. Para supervisionar esse trabalho, você precisa de um raciocínio próprio contra o qual comparar o que a IA produz. É esse raciocínio que se constrói aqui.

## Capítulo 4 — Problemas

> **Caso Vértice** — Beatriz coordena o laboratório de controle de qualidade da fábrica. Numa reunião com a diretoria industrial, ouviu mais uma vez que "os laudos atrasam e a produção fica parada esperando". Saiu da reunião com uma decisão: "precisamos de um sistema com IA para os laudos". Ela pediu ajuda a Rodrigo, analista de sistemas que atende várias áreas da fábrica, e a você. A primeira conversa vai determinar o resto do projeto.

### O que há de errado com o pedido

Nada, à primeira vista. Beatriz conhece o laboratório, tem um sintoma real ("os laudos atrasam"), uma consequência séria ("a produção fica parada") e uma proposta. Mas a proposta já contém três decisões que ninguém examinou: que a solução é *um sistema*, que ele deve ter *IA* e que o objeto é *o laudo*. Se você aceitar o pedido como está, a conversa seguinte será sobre que sistema, que IA e que formato de laudo — e o problema real pode estar em outro lugar.

Este capítulo ensina a transformar uma situação como essa em um problema formulado. É a competência que o livro chama de **Problem Framing** (enquadramento de problemas), e é a primeira da matriz de competências porque todas as outras dependem dela.

### A anatomia de um problema bem formulado

Um problema bem formulado responde a oito perguntas. Nem sempre todas as respostas estarão disponíveis no início — e descobrir quais faltam já é parte do trabalho.

| # | Elemento | Pergunta | No Caso Vértice (versão inicial) |
|---|---|---|---|
| 1 | Afetados | Para quem isto é um problema? | Produção, coordenação de qualidade, analistas. |
| 2 | Estado atual | O que acontece hoje, de forma observável? | "Os laudos atrasam." (ainda vago) |
| 3 | Estado desejado | O que deveria acontecer? | "Laudos no prazo." (que prazo?) |
| 4 | Impacto | Por que a diferença importa? Quanto custa? | Lotes parados; pressão para liberar. |
| 5 | Causas | O que se sabe e o que se supõe sobre as causas? | Ainda não se sabe. |
| 6 | Restrições | O que não pode mudar ou não pode ser violado? | Rastreabilidade exigida; equipe reduzida. |
| 7 | Critério de resolução | Como saberemos que foi resolvido? | Ainda não definido. |
| 8 | Fora do escopo | O que, explicitamente, não será tratado? | Ainda não definido. |

Preencher essa tabela na primeira conversa é impossível, e tudo bem. O valor da tabela está em mostrar onde estão as lacunas. Nesse momento, "os laudos atrasam" é um sintoma, não um estado atual: não diz quanto atrasam, quais laudos, desde quando, em que proporção.

### Perguntas que abrem o problema

Algumas perguntas produzem respostas muito mais úteis do que outras. Compare.

| Pergunta fraca | Por que é fraca | Pergunta melhor |
|---|---|---|
| "O que você quer que o sistema faça?" | Convida a descrever a solução já imaginada. | "O que acontece hoje que não deveria acontecer?" |
| "Os laudos atrasam muito?" | Admite "sim" como resposta e não gera dado. | "Qual foi o último laudo que atrasou? Quanto tempo levou e onde ficou parado?" |
| "Qual é o problema?" | Abstrata demais; produz opinião. | "Me mostre como foi a última amostra, da chegada ao laudo." |
| "A IA ajudaria?" | Pressupõe a solução. | "Se esse problema fosse resolvido amanhã, o que mudaria para você?" |
| "Quem é o responsável?" | Soa como busca de culpado. | "Quem precisa fazer o quê para uma amostra virar laudo?" |

O padrão por trás das perguntas melhores é pedir **instâncias concretas e recentes** em vez de generalizações. "Normalmente leva uns três dias" é uma opinião sobre uma média que ninguém calculou. "A amostra 4.517 chegou na segunda às 10h e o laudo saiu na sexta às 16h; ficou dois dias esperando revisão" é um fato que pode ser verificado e que sugere uma causa.

### Fatos, interpretações e hipóteses

Durante o enquadramento, você vai ouvir uma mistura de três tipos de afirmação, e é essencial separá-los.

Um **fato** é algo observável e verificável: "o laudo da amostra 4.517 foi emitido quatro dias úteis depois da coleta".

Uma **interpretação** é um julgamento sobre fatos: "o laboratório é lento".

Uma **hipótese** é uma explicação ainda não verificada: "os laudos atrasam porque os analistas perdem tempo digitando resultados".

As três são úteis. O erro é tratar interpretações e hipóteses como fatos. Quando Beatriz diz "o problema é que digitamos tudo à mão", ela está oferecendo uma hipótese plausível — e talvez correta. Mas se o projeto partir dela como fato, vai construir uma solução para a digitação, e se o atraso real estiver na fila de revisão, nada mudará.

Uma prática simples: durante as conversas iniciais, anote cada afirmação relevante numa de três colunas. Ao final, a coluna de hipóteses vira uma lista de coisas a verificar, e a de fatos vira a base do Problem Statement.

> **Caso Vértice** — Depois de duas conversas e de acompanhar o percurso de três amostras, a lista ficou assim (trecho):
>
> | Fatos | Interpretações | Hipóteses |
> |---|---|---|
> | Os resultados dos instrumentos saem impressos e são digitados numa planilha. | "A planilha é uma bagunça." | A digitação causa erros que geram retrabalho na revisão. |
> | Toda amostra precisa ser revisada e aprovada pela coordenadora ou por sua substituta. | "A Beatriz é o gargalo." | A fila de aprovação é a maior parte do tempo de espera. |
> | Amostras urgentes interrompem a rotina várias vezes ao dia. | "Tudo é urgente aqui." | As interrupções aumentam o tempo das amostras de rotina. |
> | Algumas amostras chegam sem etiqueta ou com código repetido. | "A produção não colabora." | Identificação falha causa atrasos antes mesmo da análise. |
>
> Observe que nenhuma das hipóteses fala de "IA" ou de "sistema". Elas falam do processo.

### Do sintoma à causa, com cuidado

Perguntar "por quê?" repetidamente é uma técnica conhecida para ir do sintoma à causa: os laudos atrasam — por quê? Porque ficam esperando revisão — por quê? Porque só duas pessoas podem aprovar — por quê? E assim por diante.

A técnica é útil, mas tem duas armadilhas que você deve conhecer.

A primeira é **assumir uma causa única**. Em sistemas reais, quase todo efeito tem várias causas que se combinam. Se você seguir uma única cadeia de porquês, vai encontrar *uma* causa, não necessariamente a mais importante. A correção é, a cada nível, perguntar "por que mais?" e abrir ramos.

A segunda é **parar na pessoa**. Cadeias de porquês tendem a terminar em alguém ("porque o analista esqueceu"). Isso raramente é útil. Pessoas esquecem, erram e se distraem — e continuarão fazendo isso. A pergunta produtiva é: "o que no sistema torna esse erro fácil de cometer e difícil de perceber?".

### Subir e descer o problema

Todo problema pode ser formulado em vários níveis. Duas perguntas movem você entre eles.

**"Por que isso importa?"** sobe um nível. Os laudos atrasam → por que importa? → lotes ficam parados → por que importa? → a fábrica perde prazo de entrega e ocupa espaço de estoque → por que importa? → custo e relação com clientes.

**"Como isso se manifesta?"** desce um nível. Os laudos atrasam → como se manifesta? → amostras de rotina levam de um a seis dias → como se manifesta? → amostras esperam na bancada de revisão.

Subir demais leva a problemas enormes e sem fronteira ("a fábrica precisa ser mais eficiente"). Descer demais leva a problemas pequenos que talvez não importem ("a planilha não tem filtro por data"). O nível certo é aquele em que três condições se encontram: **o problema importa** para alguém com poder de decisão, **você tem influência** sobre suas causas e **é possível verificar** se ele foi resolvido.

### Quem tem o problema

Um problema raramente é de uma pessoa só. E pessoas diferentes veem o mesmo problema de formas diferentes, às vezes incompatíveis. Por isso o enquadramento inclui um **mapa de stakeholders** — as pessoas e grupos que afetam ou são afetados pela situação.

Para cada stakeholder, registre:

- **papel** em relação ao problema (sofre, causa, decide, opera, paga, pode bloquear);
- **interesse** — o que essa pessoa quer de fato, que pode ser diferente do que ela pede (a *posição*);
- **influência** — quanto ela pode afetar o sucesso da solução;
- **o que ela perde** se a situação mudar.

A distinção entre **posição** e **interesse** é uma das ideias mais úteis do enquadramento. A posição da diretoria industrial é "liberem os laudos mais rápido". O interesse é não ter lotes parados nem ser surpreendida por bloqueios. Esse interesse também poderia ser atendido, em parte, por uma previsão confiável de quando cada laudo sairá — uma solução completamente diferente.

A última pergunta da lista, "o que ela perde", é frequentemente esquecida e explica a maioria das resistências. Um sistema que torna visível a fila de cada analista pode ser excelente para a coordenação e ameaçador para os analistas. Ignorar isso não faz a resistência desaparecer; só a torna invisível até a implantação.

Uma forma prática de visualizar o mapa é uma grade de influência e interesse:

```
                         INTERESSE NO PROBLEMA
                    baixo                      alto
              ┌───────────────────────┬───────────────────────┐
         alta │  MANTER INFORMADO     │  ENVOLVER DE PERTO    │
              │  Diretoria financeira │  Coordenação (Beatriz)│
 INFLUÊNCIA   │  TI corporativa       │  Diretoria industrial │
              ├───────────────────────┼───────────────────────┤
        baixa │  MONITORAR            │  CONSULTAR            │
              │  Compras              │  Analistas            │
              │                       │  Supervisores de turno│
              └───────────────────────┴───────────────────────┘
```

Os analistas aparecem com baixa influência formal, mas são eles que vão operar qualquer solução. Uma regra prática: **quem opera a solução tem influência real maior do que a formal**. Trate-os como se estivessem no quadrante superior direito.

### Medir o problema sem inventar números

O critério de resolução precisa de uma medida. Isso assusta muita gente ("não temos dados"), mas medir não exige um sistema de indicadores. Exige três escolhas.

**Um indicador.** O que, se mudasse, mostraria que o problema diminuiu? Para o Vértice: o tempo entre a coleta da amostra e a emissão do laudo (chamado no laboratório de *lead time* do laudo). Note que o indicador mede o problema, não a solução. "Número de laudos gerados pelo sistema" mede a solução e não diz nada sobre o problema.

**Uma linha de base.** Qual o valor do indicador hoje? Se não houver registro, levante: pegue as amostras das últimas quatro semanas, procure nos registros (planilha, e-mails, carimbos) a data de coleta e a data do laudo. Uma amostragem honesta de trinta casos vale mais do que a média que "todo mundo sabe".

**Uma meta e um prazo.** Onde se quer chegar, e até quando. A meta é uma decisão de quem tem o problema, não um cálculo técnico. Seu papel é ajudar a torná-la verificável e realista.

Além do indicador principal, quase sempre é preciso um ou dois **indicadores de proteção**: medidas que não podem piorar enquanto se melhora o principal. Acelerar laudos à custa de mais erros não resolve o problema de ninguém.

> **Caso Vértice** — Rodrigo levantou os registros das quatro semanas anteriores: 212 amostras de rotina. O tempo entre coleta e laudo variou de 1 a 6 dias úteis; 41% saíram em até 2 dias. (Números ilustrativos do caso.) Beatriz e a diretoria industrial definiram a meta: 90% das amostras de rotina com laudo em até 2 dias úteis, em até seis meses. Indicador de proteção: a taxa de erros encontrados na revisão não pode aumentar.

### O Problem Statement

Toda essa investigação converge num documento curto: o **Problem Statement** (declaração do problema). Ele cabe em um parágrafo, e cada palavra conta. Compare três versões.

**Versão 1 — solução disfarçada:**
"Precisamos de um sistema com IA para gerar os laudos do laboratório."

**Versão 2 — sintoma:**
"Os laudos do laboratório atrasam e a produção fica parada esperando."

**Versão 3 — problema formulado:**
"Para a produção e a coordenação de qualidade, o tempo entre a coleta de uma amostra de rotina e a emissão do laudo varia de 1 a 6 dias úteis, e apenas 41% dos laudos saem em até 2 dias (levantamento de quatro semanas, 212 amostras). Isso mantém lotes bloqueados, gera pressão por liberações apressadas e retrabalho. Queremos que, em até seis meses, ao menos 90% dos laudos de rotina sejam emitidos em até 2 dias úteis, sem aumento da taxa de erros detectados em revisão e mantendo a rastreabilidade exigida pelo sistema de qualidade. Estão fora do escopo a substituição de equipamentos e a alteração de especificações de produto."

A versão 3 não menciona sistema, IA ou laudo automático. Ela não precisa: deixa o espaço de soluções aberto e define com clareza como qualquer solução será julgada. Talvez a melhor solução seja uma combinação de mudanças de processo, um sistema simples e alguma automação; talvez inclua IA em algum ponto. Essa decisão vem depois, no Capítulo 19.

O Apêndice A traz o template T02 — Problem Statement, com os campos e perguntas de verificação. O T01 — Project Brief amplia o Problem Statement com stakeholders, restrições, recursos e prazos, e é o documento que inicia qualquer projeto.

> **Anti-padrão: começar pela ferramenta** — *Sintoma:* a primeira conversa do projeto é sobre qual plataforma, qual modelo de IA ou qual aplicativo usar. *Causa:* a ferramenta é concreta e dá sensação de progresso; o problema é abstrato e dá trabalho. *Consequência:* a ferramenta define o problema que será resolvido, em vez do contrário. *Correção:* proíba-se de mencionar ferramentas até ter um Problem Statement com critério de resolução. Se alguém insistir, anote a ferramenta numa lista de "alternativas a considerar" e volte às perguntas.

### O mesmo exercício nos outros casos

> **Caso Marzipã** — O Capítulo 1 já mostrou a conversa com Helena. O Problem Statement ficou assim: "Na Confeitaria Marzipã, pedidos chegam por mensagem com informações incompletas e são registrados de forma dispersa. Helena gasta parte significativa do dia completando informações por mensagem, e nas últimas oito semanas houve erros de pedido (sabor, data ou personalização) e duas ocasiões em que se aceitaram mais encomendas do que a capacidade do dia. Queremos que todo pedido confirmado tenha as informações completas registradas num único lugar, que nenhum pedido seja confirmado além da capacidade do dia, e que o tempo de Helena com mensagens de pedido caia pela metade em três meses — sem piorar a experiência das clientes." Note a última frase: um indicador de proteção qualitativo, que precisará de uma forma de verificação (Capítulo 31).

> **Caso Casa** — "Nos últimos doze meses, a família pagou multas e juros por atraso em contas em pelo menos sete ocasiões, perdeu o prazo de renovação de um documento e não acionou uma garantia por não encontrar a nota fiscal. Queremos chegar a zero atrasos evitáveis em seis meses, com um custo de manutenção para Lucas de no máximo trinta minutos por semana." O limite de esforço de manutenção é uma restrição essencial em sistemas pessoais: uma solução que exige uma hora por dia será abandonada.

### Exercícios

**Exercício 4.1 · F · M0** — Classifique cada afirmação como fato, interpretação ou hipótese. Para cada interpretação e hipótese, escreva que fato a sustentaria ou refutaria.

a) "Os clientes estão insatisfeitos com o prazo de entrega."
b) "Em março, 14 dos 60 pedidos foram entregues depois da data combinada."
c) "Os atrasos acontecem porque o fornecedor de embalagens é lento."
d) "O sistema de vendas é ruim."
e) "Quando o vendedor A está de férias, os pedidos atrasam mais."

**Exercício 4.2 · P · M0** — Os três Problem Statements abaixo têm defeitos. Identifique-os usando os oito elementos da anatomia de um problema e reescreva o melhor dos três.

a) "Precisamos de um aplicativo para melhorar a comunicação entre a escola e os pais."
b) "A equipe de suporte é lenta e os clientes reclamam muito. Queremos ser mais rápidos."
c) "O tempo médio de resposta a chamados de suporte é de 30 horas. Queremos implementar um chatbot com IA até o fim do trimestre para reduzi-lo."

> **Para conferir** — (a) é uma solução disfarçada: o problema de comunicação não está descrito (o que acontece hoje que não deveria?), nem os afetados, nem o critério. (b) tem afetados e um sintoma, mas nenhum fato mensurável, nenhuma meta e nenhuma restrição; "ser mais rápidos" não permite verificar resolução. (c) é o melhor ponto de partida, porque tem um fato e um indicador, mas comete o erro de embutir a solução (chatbot) e fixar a meta na implementação em vez de no indicador. Uma reescrita de (c): "O tempo médio até a primeira resposta a chamados de suporte é de 30 horas (dados do último trimestre). Queremos que 80% dos chamados recebam primeira resposta útil em até 4 horas úteis até o fim do próximo trimestre, sem queda na taxa de resolução no primeiro contato." Se a sua reescrita ainda menciona chatbot, refaça.

**Exercício 4.3 · P · M0** — Escolha uma situação vaga do seu trabalho ou da sua vida. Faça uma conversa de enquadramento com alguém afetado por ela (ou consigo mesmo, se for pessoal), usando apenas perguntas da coluna "pergunta melhor". Registre fatos, interpretações e hipóteses em três colunas. Depois escreva um Problem Statement com os oito elementos.

**Exercício 4.4 · P · M0** — Para a situação do exercício anterior, construa o mapa de stakeholders. Para cada um, separe posição e interesse e responda: o que essa pessoa perde se a situação mudar?

**Exercício 4.5 · A · M1** — Pegue o Problem Statement do Exercício 4.3. Peça a uma IA que atue como o stakeholder mais cético e critique o seu enquadramento: o que ele contestaria? Que fato ele exigiria? Revise o Problem Statement e registre no diário de bordo o que mudou e por quê.

**Exercício 4.6 · P · M0 · Transferência** — Um hospital de pequeno porte diz: "precisamos de um sistema de inteligência artificial para reduzir as filas do pronto-atendimento". Sem acesso a ninguém do hospital, escreva: (a) as decisões embutidas no pedido; (b) dez perguntas que você faria na primeira conversa, todas pedindo instâncias concretas; (c) três hipóteses de causa que não envolvam tecnologia; (d) um indicador principal e um indicador de proteção plausíveis.

## Capítulo 5 — Sistemas

### Por que pensar em sistemas

No Capítulo 4, você formulou o problema. Mas um problema não existe isolado: ele é o comportamento de um sistema. Os laudos atrasam não porque alguém decidiu atrasá-los, mas porque a forma como amostras, pessoas, equipamentos, regras e informações se conectam produz atraso. Se você mudar uma peça sem entender as conexões, pode não mudar nada — ou piorar outra coisa.

Pensamento sistêmico (**Systems Thinking**) é a capacidade de enxergar essas conexões. Este capítulo apresenta os conceitos mínimos e a ferramenta principal: o **System Map**.

### Elementos, relações, propósito, fronteira

Um sistema é um conjunto de **elementos** interligados por **relações**, que juntos produzem um comportamento — às vezes chamado de **função** ou **propósito** do sistema. Os elementos podem ser pessoas, papéis, equipamentos, documentos, softwares, regras, organizações externas.

A ideia central é que **o comportamento do sistema vem mais das relações do que dos elementos**. Troque todos os analistas do laboratório por outros igualmente competentes e, se as relações (quem passa o que para quem, quando, com que informação) continuarem as mesmas, os laudos continuarão atrasando do mesmo jeito. É por isso que "contratar mais gente" ou "comprar um software" frequentemente não resolve: muda elementos e mantém relações.

Todo sistema tem uma **fronteira** — a linha que separa o que você vai considerar parte do sistema do que vai tratar como ambiente. A fronteira é uma escolha de quem analisa, não um fato da natureza. Uma fronteira estreita demais deixa causas importantes de fora (se o sistema do Vértice for só "o laboratório", a forma como a produção coleta e identifica amostras fica invisível). Uma fronteira larga demais paralisa a análise (se o sistema for "a fábrica inteira", nunca se chega a lugar algum). Uma boa fronteira inclui tudo aquilo que **afeta diretamente o problema e sobre o que é possível agir**, e trata o resto como ambiente: coisas que influenciam, mas que você vai considerar dadas.

### Estoques e fluxos

Dois conceitos simples explicam boa parte do comportamento de sistemas de trabalho.

Um **estoque** é algo que se acumula: amostras aguardando análise, pedidos aguardando confirmação, contas a pagar, mensagens não respondidas. Um **fluxo** é o que faz o estoque aumentar ou diminuir: amostras que chegam, amostras analisadas por dia.

```
   chegada de amostras          ┌───────────────────┐         amostras analisadas
   (≈ 50 por dia)  ───────────► │ AMOSTRAS NA FILA  │ ───────────►  (≈ 45 por dia)
                                │   (estoque)       │
                                └───────────────────┘
```

Três consequências práticas:

**Se a entrada é maior que a saída, o estoque cresce — sempre.** Não importa o esforço ou a boa vontade. Se chegam 50 amostras por dia e o laboratório consegue concluir 45, a fila cresce cerca de 5 por dia até que algo mude: chegam menos, sai mais ou alguém para de registrar.

**O tempo de espera depende do tamanho da fila.** Existe uma relação básica entre os três: o tempo médio que um item passa no sistema é aproximadamente o tamanho médio da fila dividido pelo ritmo de saída. Se há 90 amostras na fila e o laboratório conclui 45 por dia, uma amostra que chega agora vai esperar, em média, cerca de dois dias — antes mesmo de ser analisada. Isso explica por que um laboratório com analistas rápidos pode ter laudos lentos: o problema é a fila, não a velocidade de cada análise.

**Estoques escondem problemas e amortecem variações.** Uma fila grande dá a sensação de que "sempre tem trabalho"; uma fila zero deixa o sistema vulnerável a picos. Sistemas saudáveis têm estoques pequenos e controlados, não nulos.

### Gargalos

Em qualquer sequência de etapas, a etapa com menor capacidade limita a saída de todo o sistema. Essa etapa é o **gargalo**.

```
  REGISTRO        ANÁLISE         REVISÃO          EMISSÃO
  80/dia    ──►   60/dia    ──►   35/dia    ──►    100/dia
                                  ▲
                                  └── gargalo: o sistema inteiro sai a ≈ 35/dia
```

Duas consequências contraintuitivas:

**Melhorar uma etapa que não é o gargalo não melhora o sistema.** No exemplo acima, se o registro passar a processar 200 amostras por dia, os laudos não sairão mais rápido. A fila diante da revisão só vai crescer mais depressa. Essa é a armadilha clássica da automação: automatiza-se a etapa que é mais fácil de automatizar, não a que limita o sistema.

**O gargalo se move.** Quando você resolve o gargalo atual, outra etapa se torna o novo gargalo. Isso não é fracasso, é progresso — mas significa que é preciso acompanhar o sistema depois de cada mudança, e não apenas a etapa que foi mudada.

### Laços de realimentação

Os comportamentos mais difíceis de entender em sistemas vêm de **laços de realimentação** (*feedback loops*): cadeias de causa e efeito que voltam ao ponto de partida.

Um **laço de reforço** amplifica o que já está acontecendo. No Vértice:

```
       atraso dos laudos ─────────(+)──────────► pressão da produção
              ▲                                         │
              │                                        (+)
             (+)                                        ▼
       retrabalho na revisão ◄───(+)──── mais erros ◄─(+)── pedidos de urgência
                                                            e interrupções
```

Atraso gera pressão; pressão gera pedidos de urgência; urgências interrompem a rotina e aumentam erros; erros geram retrabalho; retrabalho aumenta o atraso. O laço se alimenta. Sistemas com laços de reforço ativos tendem a piorar sozinhos — ou a melhorar sozinhos, se o laço for invertido.

Um **laço de equilíbrio** tende a estabilizar o sistema em torno de algum ponto:

```
       fila grande ───(+)──► coordenação organiza mutirão ───(+)──► mais revisões por dia
            ▲                                                              │
            └─────────────────────────(−)──────────────────────────────────┘
                                 (fila diminui; mutirão acaba)
```

Quando a fila fica grande demais, a coordenação faz um mutirão; a fila diminui; o mutirão acaba; a fila volta a crescer. O sistema oscila. Esse tipo de laço é comum e explica por que muitas organizações vivem em ciclos de "crise e alívio": a solução atua só quando o problema é visível.

Reconhecer laços muda o tipo de intervenção. Num laço de reforço negativo, a intervenção mais valiosa é aquela que **quebra o laço** em algum ponto. No Vértice, uma fila de urgências separada, com regras claras sobre o que é urgente, pode quebrar a ligação entre pressão e interrupção — sem nenhuma tecnologia.

### Atrasos e efeitos de segunda ordem

Em sistemas, os efeitos de uma mudança frequentemente demoram a aparecer. Se a produção começa a coletar amostras com etiquetas melhores hoje, a redução do retrabalho na revisão talvez só apareça em uma ou duas semanas, quando as amostras antigas saírem da fila. Quem não espera o atraso conclui que a mudança não funcionou — ou, pior, adiciona outra mudança antes de a primeira fazer efeito e depois não sabe qual das duas funcionou.

**Efeitos de segunda ordem** são as consequências das consequências. A primeira ordem de um sistema que mostra a fila de cada analista é "a coordenação sabe onde está cada amostra". A segunda ordem pode ser "analistas passam a escolher amostras fáceis para manter a fila pequena", o que aumenta o tempo das difíceis. Perguntar "e depois, o que acontece?" duas vezes, para cada mudança proposta, é uma das práticas mais baratas e mais negligenciadas.

### Pontos de alavancagem

Alguns pontos de um sistema permitem mudanças grandes com intervenções pequenas. Eles costumam estar em quatro lugares:

- **no gargalo**, onde qualquer ganho de capacidade aumenta a saída de todo o sistema;
- **na entrada**, onde a qualidade do que chega determina o retrabalho de tudo o que vem depois (uma amostra bem identificada na coleta evita problemas em todas as etapas seguintes);
- **nas regras**, onde uma mudança de critério altera o comportamento de muitas pessoas ao mesmo tempo (definir o que é urgente);
- **na informação**, onde tornar visível algo que era invisível muda decisões (mostrar a fila real à diretoria industrial pode reduzir a pressão por urgências falsas).

Note que nenhum desses pontos é "adicionar tecnologia". Tecnologia pode ser o meio de atuar num ponto de alavancagem, mas o ponto vem primeiro.

### O System Map

O **System Map** é a representação do sistema que você vai usar como referência durante o projeto. Ele não precisa ser bonito. Precisa responder a seis perguntas:

1. **Fronteira** — o que está dentro e o que está fora?
2. **Atores** — que pessoas, papéis e organizações participam?
3. **Elementos não humanos** — que equipamentos, documentos, sistemas e repositórios de informação existem?
4. **Fluxos** — o que se move entre os elementos? Separe quatro tipos: material (amostras, produtos), informação (resultados, pedidos), decisão (aprovações, prioridades) e dinheiro.
5. **Estoques** — onde as coisas se acumulam?
6. **Laços** — que cadeias de causa e efeito retornam ao ponto de partida?

> **Caso Vértice** — O System Map da primeira versão ficou assim:
>
> ```
>  AMBIENTE: diretoria industrial · clientes da fábrica · fornecedores · auditorias externas
> ┌───────────────────────────────── FRONTEIRA DO SISTEMA ──────────────────────────────────┐
> │                                                                                          │
> │  PRODUÇÃO ──(amostra física + etiqueta)──► RECEPÇÃO ──► [FILA DE ANÁLISE] ──► ANALISTAS │
> │     ▲                                     (registro      (estoque)           │   ▲      │
> │     │                                      na planilha)                      │   │      │
> │     │                                                         (impressão)    ▼   │      │
> │     │                                                       INSTRUMENTOS ────┘   │      │
> │     │                                                                            │      │
> │     │                                     (digitação dos resultados na planilha) │      │
> │     │                                                                            ▼      │
> │     │                                                                [FILA DE REVISÃO]  │
> │     │                                                                   (estoque)       │
> │     │                                                                        │          │
> │     │                                                                        ▼          │
> │     │      ◄─────────(laudo por e-mail: libera/bloqueia lote)──────── COORDENAÇÃO       │
> │     │                                                                (aprovação)        │
> │     └──── (pedidos de urgência, por telefone e mensagem) ───────────────► ANALISTAS     │
> │                                                                                          │
> │  ESPECIFICAÇÕES DE PRODUTO (documentos controlados) ··········· consultadas na análise  │
> │  LOTES BLOQUEADOS NO ESTOQUE DA FÁBRICA (estoque físico afetado pelo sistema)           │
> └──────────────────────────────────────────────────────────────────────────────────────────┘
>   Laço de reforço: atraso → pressão → urgências → interrupções → erros → retrabalho → atraso
> ```
>
> Ao desenhar o mapa, Rodrigo percebeu algo que ninguém tinha mencionado: os pedidos de urgência chegam diretamente aos analistas, sem passar pela coordenação. Isso significa que ninguém decide prioridades — elas são decididas por quem liga com mais insistência.

O template T03 — System Map (Apêndice A) organiza essas perguntas num formato reutilizável.

### Como saber se o mapa está bom

Um System Map útil passa em quatro testes:

- **Teste do estranho:** uma pessoa que não conhece o lugar consegue, olhando o mapa, explicar o caminho de uma amostra (ou de um pedido, ou de uma conta)?
- **Teste do afetado:** quem trabalha no sistema reconhece o mapa como verdadeiro? Se a reação for "não é bem assim", o mapa mostra o sistema oficial, não o real.
- **Teste do problema:** é possível apontar no mapa onde o problema se manifesta e pelo menos duas hipóteses de causa?
- **Teste da intervenção:** é possível apontar no mapa onde cada solução proposta atuaria e que efeitos de segunda ordem ela poderia causar?

### Exercícios

**Exercício 5.1 · F · M0** — Para cada item, diga se é estoque ou fluxo, e em que sistema faz sentido: (a) e-mails não lidos; (b) pedidos recebidos por dia; (c) contas a pagar no mês; (d) pacientes atendidos por hora; (e) livros emprestados e não devolvidos; (f) novos cadastros por semana.

**Exercício 5.2 · P · M0** — Um escritório de contabilidade recebe cerca de 120 documentos de clientes por semana. A triagem consegue processar 200 por semana, a digitação 150, a conferência 90 e o arquivamento 300. (a) Onde está o gargalo? (b) O que acontece com a fila diante da conferência ao longo de um mês? (c) O sócio propõe automatizar a digitação com IA. Que efeito isso terá sobre o tempo total? (d) Proponha duas intervenções que atuem no gargalo, sendo pelo menos uma sem tecnologia.

> **Para conferir** — (a) Conferência, com 90 por semana. (b) A fila cresce cerca de 30 documentos por semana (entram 120, saem 90), ou seja, aproximadamente 120 a mais ao fim de um mês, e o tempo de espera aumenta continuamente. (c) Nenhum efeito sobre a saída; a digitação já processa mais do que a conferência. A fila diante da conferência continua crescendo no mesmo ritmo. (d) Exemplos: redistribuir parte do tempo de quem faz triagem ou arquivamento (com capacidade ociosa) para a conferência; reduzir o que precisa ser conferido (conferência por amostragem em documentos de baixo risco, com regra explícita); melhorar a qualidade na entrada para reduzir o tempo por conferência. Se você propôs "automatizar a conferência com IA", pergunte-se se isso está no degrau mínimo suficiente e como seria verificado.

**Exercício 5.3 · P · M0** — Desenhe o System Map da situação que você vem trabalhando desde o Exercício 1.2, respondendo às seis perguntas. Aplique os quatro testes. Se possível, mostre o mapa a alguém que vive o sistema e registre a reação.

**Exercício 5.4 · P · M0** — No seu mapa, identifique pelo menos um laço de reforço e um de equilíbrio. Para o de reforço, proponha um ponto onde ele poderia ser quebrado.

**Exercício 5.5 · A · M0 · Transferência** — Numa biblioteca comunitária, livros atrasados geram multas; as multas fazem com que alguns usuários evitem voltar à biblioteca para devolver; os livros não devolvidos reduzem o acervo disponível; com menos acervo, menos pessoas frequentam; com menos frequência, a biblioteca recebe menos doações. Desenhe o laço, identifique se é de reforço ou equilíbrio, e proponha uma intervenção de degrau 1 (reorganizar) que o quebre. Depois, aponte um efeito de segunda ordem possível dessa intervenção.

> **Fim da etapa de pré-requisitos do Projeto P00.** Você já pode fazer o Projeto P00 — Diagnóstico (Parte VII). Ele consolida os Capítulos 4 e 5 num caso real seu.

## Capítulo 6 — Decomposição

### Por que decompor

Um problema como "reduzir o tempo dos laudos" é grande demais para ser resolvido de uma vez. Ninguém consegue segurá-lo inteiro na cabeça, nenhuma pessoa ou IA consegue construí-lo numa tarefa só, e nenhum teste consegue verificar tudo de uma vez. Decompor é dividir algo complexo em partes que possam ser **entendidas, resolvidas e verificadas** separadamente — e depois recombinadas.

A decomposição é também o que torna a delegação possível. Você não delega "um sistema de laudos" para uma IA; delega um componente com entradas, saídas e critérios de aceitação definidos. Quem não sabe decompor só consegue delegar pedidos vagos, e pedidos vagos produzem resultados que não podem ser verificados.

### Cinco critérios de decomposição

Não existe uma única forma correta de dividir um problema. Existem critérios diferentes, e cada um revela coisas diferentes. Os cinco mais úteis são:

| Critério | Pergunta | Divide em | Útil para |
|---|---|---|---|
| **Por etapa** | Em que ordem as coisas acontecem? | Fases de um fluxo | Encontrar esperas, gargalos, passagens de bastão. |
| **Por função** | Que capacidades o sistema precisa ter? | Responsabilidades (registrar, calcular, notificar...) | Projetar componentes de software. |
| **Por entidade** | Sobre o que o sistema precisa saber? | Coisas do domínio (amostra, lote, laudo...) | Modelar dados. |
| **Por decisão** | Onde alguém precisa escolher? | Pontos de decisão e suas regras | Explicitar regras, encontrar onde IA ou automação poderiam atuar. |
| **Por risco** | O que pode dar errado e com que gravidade? | Partes críticas e não críticas | Decidir onde concentrar testes, supervisão e cuidado. |

O mesmo problema, decomposto de formas diferentes, mostra faces diferentes. No Vértice:

- **por etapa:** coleta, recepção, registro, fila de análise, análise, registro de resultados, revisão, aprovação, emissão, comunicação;
- **por função:** identificar amostras, priorizar, registrar resultados, comparar com especificação, aprovar, comunicar decisão, rastrear histórico;
- **por entidade:** amostra, lote, produto, especificação, ensaio, resultado, analista, laudo;
- **por decisão:** esta amostra é urgente? este resultado está dentro da especificação? é preciso repetir o ensaio? o laudo pode ser aprovado? o lote é liberado?;
- **por risco:** aprovar um laudo com resultado errado (crítico); atrasar um laudo de rotina (moderado); erro de digitação num campo informativo (baixo).

Um bom praticante usa mais de um critério e cruza os resultados. A decomposição por etapa mostra onde está o atraso; a por decisão mostra onde estão as regras implícitas; a por risco mostra onde não se pode errar.

### Decompor o problema e decompor a solução

Há uma distinção importante que muitas pessoas confundem.

**Decompor o problema** é dividir as causas e manifestações do problema. O resultado é uma árvore de problemas: o problema principal no topo, as causas abaixo, as causas das causas mais abaixo.

**Decompor a solução** é dividir o que será construído ou mudado. O resultado é uma árvore de componentes ou de ações.

A decomposição do problema vem primeiro, e é dela que deriva a da solução. Se você decompõe a solução antes de decompor o problema, acaba construindo componentes que não atacam nenhuma causa importante.

> **Caso Vértice** — Árvore de problemas (versão de trabalho, com hipóteses ainda a verificar):
>
> ```
> LAUDOS DE ROTINA LEVAM DE 1 A 6 DIAS (meta: 90% em até 2)
> ├── Tempo antes da análise
> │   ├── amostras chegam sem identificação ou com código repetido   [hipótese, verificar]
> │   ├── registro manual na recepção acumula em horários de pico     [fato observado]
> │   └── fila de análise sem critério de prioridade                  [fato]
> ├── Tempo durante a análise
> │   ├── interrupções por pedidos de urgência                        [fato; frequência a medir]
> │   └── espera por equipamento ocupado                              [hipótese]
> ├── Tempo entre análise e revisão
> │   ├── digitação de resultados impressos                           [fato]
> │   └── erros de digitação detectados na revisão → retrabalho       [hipótese, medir taxa]
> └── Tempo de revisão e aprovação
>     ├── só duas pessoas podem aprovar                               [fato; regra do sistema de qualidade]
>     ├── aprovação feita em lote, uma vez por dia                    [fato observado]
>     └── laudo montado manualmente a partir da planilha              [fato]
> ```
>
> A árvore deixa claro que "gerar o laudo" (o que Beatriz pediu) é apenas uma folha de um dos quatro ramos. Se o ramo dominante for "tempo antes da análise", um sistema de laudos não resolveria quase nada.

### O que faz uma boa decomposição

Algumas propriedades distinguem uma decomposição útil de uma lista de itens.

**Cobertura.** As partes, juntas, cobrem o todo. Se o problema é o tempo total e sua árvore não tem nada sobre "tempo antes da análise", falta uma parte.

**Não sobreposição.** As partes não se repetem. Se "digitação" aparece em dois ramos diferentes, você vai contar o mesmo efeito duas vezes ou atribuir a mesma tarefa a dois responsáveis. A combinação de cobertura e não sobreposição é conhecida em consultoria pela sigla MECE (*mutually exclusive, collectively exhaustive*). É um ideal útil, ainda que raramente atingido por completo em problemas reais.

**Interfaces claras.** Para cada parte, deve ser possível dizer o que entra, o que sai e de quem ou para quem. Uma parte sem interface definida não pode ser construída nem testada isoladamente.

**Coesão.** Cada parte faz uma coisa, ou um conjunto de coisas muito relacionadas. "Registrar a amostra e enviar e-mail ao gerente de produção" são duas responsabilidades; juntá-las numa parte só torna essa parte difícil de mudar.

**Baixo acoplamento.** Mudar uma parte deve afetar o mínimo possível das outras. Se trocar o formato do laudo exige mudar o registro de amostras, as partes estão acopladas demais.

**Tamanho adequado.** Cada parte deve ser pequena o suficiente para ser entendida, construída e verificada por uma pessoa (ou uma IA) numa unidade razoável de trabalho, e grande o suficiente para ter sentido sozinha.

### Quando parar de decompor

Decompor indefinidamente é tão ruim quanto não decompor: você termina com centenas de peças minúsculas que ninguém consegue recombinar. O critério de parada do método é:

> **Regra de parada** — Pare de decompor uma parte quando você conseguir escrever, para ela, uma entrada, uma saída e um critério de "pronto" verificável. Nesse ponto, a parte é *delegável*: pode ser entregue a uma pessoa, a uma IA ou a um componente de software, e você saberá dizer se o resultado está certo.

"Melhorar o registro de amostras" ainda não é delegável: não diz o que entra, o que sai nem como verificar. "Ao receber uma amostra, registrar código, produto, lote, data e hora da coleta e tipo de análise solicitada, rejeitando o registro se o código já existir ou se algum campo obrigatório estiver vazio" é delegável.

### Interfaces entre as partes

Depois de decompor, é preciso olhar para as fronteiras entre as partes. A maioria dos problemas de sistemas reais acontece nas **interfaces**: na passagem de uma etapa para outra, de uma pessoa para outra, de um sistema para outro. É ali que a informação se perde, que o formato muda, que ninguém sabe quem é responsável.

Para cada interface, pergunte:

- O que passa de uma parte para a outra? Em que formato?
- Quem é responsável por garantir que o que passa está correto?
- O que acontece se o que chega estiver incompleto ou errado?
- Como a parte que recebe sabe que algo chegou?

No Vértice, a interface entre "análise" e "revisão" é uma folha impressa do instrumento, que o analista digita numa planilha, que a coordenação abre quando tem tempo. Três problemas cabem nessa frase: mudança de formato (impresso para digitado), ausência de sinal (ninguém avisa que algo chegou) e responsabilidade difusa (se a digitação estiver errada, quem percebe?).

> **Anti-padrão: decompor pela ferramenta** — *Sintoma:* as partes do problema têm nomes de ferramentas ("a parte do WhatsApp", "a parte da planilha", "a parte da IA"). *Causa:* a pessoa pensa a partir dos meios disponíveis, não das funções necessárias. *Consequência:* a solução fica presa às ferramentas atuais; trocar uma ferramenta exige redesenhar tudo; funções que nenhuma ferramenta cobre ficam invisíveis. *Correção:* decomponha por etapa, função, entidade, decisão ou risco. Ferramentas entram depois, como forma de implementar uma parte.

### Decompor com IA

A decomposição é uma das atividades em que a IA pode ajudar muito — e em que mais facilmente atrapalha. Ajuda porque sugere critérios e partes que você não considerou. Atrapalha porque produz decomposições genéricas, que parecem completas mas ignoram o que é específico do seu caso.

A ordem recomendada é sempre a mesma: **primeiro você decompõe sozinho (M0), depois usa a IA para criticar ou ampliar (M1 ou M2)**. Se a IA decompuser primeiro, você tende a aceitar a estrutura dela e só ajustar detalhes — e perde a oportunidade de perceber o que o seu conhecimento do caso revela. O Protocolo de Decomposição, no Capítulo 22, detalha como fazer isso bem.

### Exercícios

**Exercício 6.1 · F · M0** — Decomponha "organizar uma festa de aniversário para 40 pessoas" por etapa, por função e por risco. Compare as três listas: que itens aparecem só em uma delas?

**Exercício 6.2 · P · M0** — Construa a árvore de problemas da situação que você vem trabalhando. Marque cada folha como fato ou hipótese. Verifique cobertura e não sobreposição.

**Exercício 6.3 · P · M0** — Os itens abaixo são partes de uma decomposição feita para o problema "pedidos da Confeitaria Marzipã chegam incompletos e há erros de capacidade". Identifique os problemas da decomposição (sobreposição, falta de cobertura, nomes de ferramenta, partes não delegáveis) e reescreva-a.

1. Chatbot do WhatsApp
2. Planilha de pedidos
3. Melhorar o atendimento
4. Verificar se o pedido está completo
5. Controlar pagamentos e sinal
6. Ver se cabe no dia
7. IA para entender mensagens
8. Conferir os dados do pedido antes de confirmar

> **Para conferir** — Itens 1, 2 e 7 são ferramentas, não funções. O item 3 é vago demais para ser delegável. Os itens 4 e 8 se sobrepõem. Falta cobertura para alterações de pedido e para a comunicação com as clientes. Uma reescrita por função poderia ser: (a) coletar as informações obrigatórias do pedido; (b) verificar completude; (c) verificar capacidade do dia de entrega; (d) registrar o pedido num lugar único; (e) controlar sinal e pagamento final; (f) registrar e comunicar alterações; (g) confirmar ou recusar o pedido para a cliente. Cada uma ainda pode ser decomposta até atingir a regra de parada.

**Exercício 6.4 · P · M0** — Escolha uma parte da sua árvore de problemas e uma possível solução para ela. Decomponha a solução até que pelo menos três partes satisfaçam a regra de parada. Para cada uma, escreva entrada, saída e critério de pronto.

**Exercício 6.5 · A · M1** — Mostre sua árvore de problemas (Exercício 6.2) a uma IA e peça que ela aponte lacunas, sobreposições e ramos que parecem genéricos demais. Avalie cada crítica: aceite, rejeite ou registre como hipótese a verificar. Escreva no diário uma linha sobre cada crítica rejeitada, explicando por quê.

**Exercício 6.6 · P · M0 · Transferência** — Uma ONG distribui cestas de alimentos para 300 famílias por mês e diz que "a distribuição é caótica". Sem mais informação, proponha decomposições por etapa, entidade e decisão. Em seguida, liste cinco perguntas que você precisaria fazer para saber qual das decomposições é mais útil para o problema real.
