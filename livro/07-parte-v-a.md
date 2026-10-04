# PARTE V — CONSTRUIR COM IA

Esta é a parte em que as coisas são construídas. Ela pressupõe tudo o que veio antes: se você chegou aqui sem Problem Statement, modelo do processo, requisitos com critérios de aceitação e decisão de arquitetura, volte. A IA vai construir o que você pedir com enorme rapidez — e é exatamente por isso que o que você pede precisa estar certo.

O Capítulo 22 apresenta os dez protocolos de colaboração com IA, que valem para todas as etapas do método. O Capítulo 23 ensina a supervisionar a construção. Os seguintes tratam de cada tipo de solução, subindo a Escada de Intervenção: automação robusta, integrações, aplicações, IA aplicada, RAG e agentes. A ordem é deliberada: cada degrau só é apresentado depois que os de baixo estão dominados.

## Capítulo 22 — IA como colaborador: os dez protocolos

### Uma relação de trabalho, não um oráculo

O Capítulo 2 propôs tratar a IA como um consultor externo extremamente rápido, que sabe muito em geral e nada sobre o seu caso, raramente diz "não sei" e não sofre as consequências dos próprios erros. Este capítulo transforma essa atitude em prática.

Quatro princípios orientam toda colaboração com IA no método:

**Você pensa primeiro quando o pensamento é o ponto.** Em enquadramento, decomposição e decisão, produza sua própria versão antes de consultar a IA. A versão da IA é mais útil como contraste do que como ponto de partida.

**Contexto explícito.** Tudo o que a IA precisa saber para fazer bem a tarefa deve estar na interação: o problema, as restrições, as regras, o que já foi decidido. O que não está ali não existe para ela.

**Saída verificável.** Peça resultados num formato que você consiga conferir: listas numeradas, tabelas, código com testes, afirmações marcadas como verificáveis. Uma saída que você não consegue verificar só tem o valor da sua confiança nela.

**Separe gerar de avaliar.** Não peça à mesma conversa que produziu algo para avaliar se está bom; ela tende a defender o que fez. Para auditar, use uma sessão nova, com instrução de revisor e sem o histórico de criação.

### Como a colaboração costuma dar errado

Seis falhas aparecem repetidamente em projetos com IA. Os protocolos foram desenhados para evitá-las.

| Falha | Como aparece | Defesa |
|---|---|---|
| **Concordância** | A IA aprova sua ideia, elogia sua decisão, muda de opinião quando contestada. | Pedir o argumento contrário; nunca pedir "você concorda?". |
| **Genericidade** | A resposta serviria para qualquer empresa do setor. | Dar contexto específico; pedir que cada afirmação se ligue a um dado do caso. |
| **Iniciativa excessiva** | A IA faz mais do que foi pedido, muda o que não devia. | Restrições explícitas de escopo; leitura do diff. |
| **Completude falsa** | A resposta parece cobrir tudo, mas ignora exceções e casos negativos. | Pedir explicitamente casos negativos, limites e o que ficou de fora. |
| **Deriva** | Em conversas longas, decisões anteriores são esquecidas ou contraditas. | Especificação como documento externo; sessões curtas com contexto reapresentado. |
| **Contaminação** | Dados não confiáveis no contexto (um e-mail, um documento) alteram o comportamento da IA. | Separar instruções de dados; tratar conteúdo externo como dado, nunca como instrução (Capítulo 32). |

### Como ler os protocolos

Cada protocolo tem os mesmos campos: **objetivo**, **quando usar**, **contexto necessário**, **entrada**, **instrução** (um modelo de texto que você adapta), **saída esperada**, **risco**, **validação**, **exemplo** e **anti-exemplo**. As instruções estão escritas como modelos, entre colchetes o que você deve preencher. Não são fórmulas mágicas: o que faz um protocolo funcionar é a estrutura (o que pedir, o que proibir, como verificar), não as palavras exatas. O Apêndice E traz uma versão resumida, em cartões, para consulta rápida.

### Protocolo 1 — Exploração

| Campo | Conteúdo |
|---|---|
| **Objetivo** | Entender rapidamente um domínio, problema ou tecnologia desconhecidos: conceitos, problemas típicos, perguntas a fazer, incertezas. Não soluções. |
| **Quando usar** | No início de um projeto em domínio novo; antes de entrevistas; ao encontrar termos ou práticas que você não conhece. |
| **Contexto necessário** | O que você já sabe; a situação (sem dados sensíveis); para que precisa entender. |
| **Entrada** | Descrição da situação e do seu nível de conhecimento. |
| **Saída esperada** | Glossário curto, problemas típicos classificados por frequência, lista priorizada de perguntas, lista de incertezas, afirmações factuais marcadas para verificação. |
| **Risco** | Absorver um enquadramento genérico como se fosse o do seu caso; aceitar fatos específicos fabricados (normas, prazos, números). |
| **Validação** | Usar as perguntas nas conversas reais e comparar as respostas com as hipóteses da IA; verificar em fonte primária toda afirmação marcada. |

```
Estou começando a entender [domínio/situação]. Contexto: [descrição, sem dados sensíveis].
Meu conhecimento atual: [o que já sei].
Não proponha soluções. Quero:
1. os 10 a 15 conceitos e termos centrais deste domínio, com definição curta;
2. os problemas mais comuns em situações parecidas, marcando cada um como
   "muito comum", "comum" ou "possível";
3. vinte perguntas que eu deveria fazer às pessoas envolvidas, em ordem de prioridade,
   pedindo sempre casos concretos;
4. o que varia muito de uma organização para outra e que eu não devo supor;
5. marque com [VERIFICAR] toda afirmação factual específica (normas, prazos, números).
```

**Exemplo.** Rodrigo nunca tinha trabalhado num laboratório de controle de qualidade. Antes da primeira conversa com Beatriz, usou o protocolo e obteve termos como especificação, desvio, resultado fora de especificação, amostra de retenção, certificado de análise de fornecedor e trilha de auditoria, além de perguntas como "o que acontece, passo a passo, quando um resultado sai fora da especificação?". Uma afirmação sobre exigências regulatórias de guarda de registros veio marcada com [VERIFICAR]; Rodrigo confirmou a exigência real no manual do sistema de qualidade da fábrica, que trazia um prazo diferente do sugerido.

**Anti-exemplo.** "Como resolvo os atrasos dos laudos com IA?" O pedido salta direto para a solução, embute a tecnologia e convida uma resposta genérica, que Rodrigo levaria para a reunião como se fosse conhecimento sobre o laboratório.

### Protocolo 2 — Decomposição

| Campo | Conteúdo |
|---|---|
| **Objetivo** | Criticar e ampliar uma decomposição que você já fez, por outros critérios. |
| **Quando usar** | Depois de produzir sua própria árvore de problemas ou decomposição de solução (sempre em M0 primeiro). |
| **Contexto necessário** | Problem Statement; sua decomposição; critério usado; fatos do Process Map. |
| **Entrada** | A árvore ou lista de partes. |
| **Saída esperada** | Lacunas de cobertura, sobreposições, partes que não atingem a regra de parada, uma decomposição alternativa por outro critério. |
| **Risco** | Trocar sua estrutura pela da IA por ela parecer mais "completa"; incorporar partes genéricas que não existem no seu sistema. |
| **Validação** | Toda parte nova sugerida precisa apontar para algo observado no Process Map ou no System Map; se não aponta, é hipótese a verificar. |

```
Problema: [Problem Statement].
Minha decomposição, pelo critério [etapa/função/entidade/decisão/risco]: [árvore].
Fatos observados no processo: [trechos do Process Map].
Não reescreva minha decomposição. Faça:
1. lacunas: o que o problema inclui e a decomposição não cobre;
2. sobreposições: partes que se repetem;
3. partes que ainda não têm entrada, saída e critério de pronto definíveis;
4. uma decomposição alternativa pelo critério [outro critério], indicando para cada
   parte se ela se apoia nos fatos fornecidos ou se é uma suposição sua.
```

**Exemplo.** Helena e a equipe decompuseram o problema por etapa. A IA, ao propor a decomposição por decisão, destacou "decidir se uma alteração é aceita" como uma parte sem regra definida — o que levou à tabela de decisão de alterações.

**Anti-exemplo.** "Decomponha o problema dos pedidos da confeitaria." Sem a decomposição própria e sem os fatos, a resposta será uma lista genérica de etapas de qualquer comércio, e você não terá como saber o que ela deixou de fora.

### Protocolo 3 — Arquitetura

| Campo | Conteúdo |
|---|---|
| **Objetivo** | Gerar alternativas de solução em diferentes degraus da Escada, com trade-offs explícitos. |
| **Quando usar** | Depois de ter requisitos priorizados e antes de decidir a arquitetura. |
| **Contexto necessário** | Problem Statement, requisitos (com eliminatórios marcados), restrições, recursos e equipe disponíveis. |
| **Entrada** | Requisitos e restrições. |
| **Saída esperada** | Alternativas (incluindo degraus baixos e "comprar"), cada uma com as nove questões de arquitetura respondidas e as condições em que fracassaria. |
| **Risco** | Viés para soluções complexas ou da moda; descrições de ferramentas com capacidades inventadas; nomes de produtos tratados como solução. |
| **Validação** | Mapear cada alternativa nos requisitos; checar critérios eliminatórios; verificar por conta própria qualquer afirmação sobre capacidade de produto. |

```
Problema: [Problem Statement]. Requisitos (os marcados com * são eliminatórios): [lista].
Restrições: [orçamento, equipe, prazo, tecnologia, dados].
Proponha cinco alternativas de solução:
- pelo menos duas nos degraus 0 a 3 da escada (eliminar, reorganizar, padronizar,
  estruturar dados);
- uma que use software pronto, descrito por categoria e funções, sem marcas;
- as demais livres.
Para cada uma: descrição em 3 linhas; degrau; como atende a cada requisito eliminatório;
responsabilidades, dados (fonte da verdade), dependências, riscos, custo relativo,
quem mantém; e em que condições ela fracassaria.
Por fim, indique qual seria a solução mais simples capaz de resolver a maior parte
do problema.
```

**Exemplo.** No Vértice, o protocolo gerou uma alternativa que a equipe não tinha considerado: um painel de fila público para a produção, que, sozinho, reduziria pedidos de urgência ao dar previsibilidade. A ideia foi incorporada à fase 1.

**Anti-exemplo.** "Qual a melhor arquitetura para um sistema de laudos com IA?" O pedido já exclui alternativas sem IA, não traz requisitos e pede "a melhor", convidando a uma resposta única e confiante.

### Protocolo 4 — Decisão

| Campo | Conteúdo |
|---|---|
| **Objetivo** | Testar uma decisão antes de tomá-la: argumentos contrários, riscos não considerados, evidência que falta. |
| **Quando usar** | Antes de registrar uma decisão relevante no Decision Log, especialmente as caras de reverter. |
| **Contexto necessário** | A decisão proposta, as alternativas, a justificativa e a evidência. |
| **Entrada** | O rascunho da entrada do Decision Log. |
| **Saída esperada** | O argumento contrário mais forte, um pré-mortem, riscos novos, evidência que mudaria a decisão, suposições não declaradas. |
| **Risco** | Concordância (a IA apoia sua decisão); o oposto, objeções artificiais; e, o mais grave, deixar a IA decidir. |
| **Validação** | Avaliar cada objeção: procede, não procede (por quê), vira risco registrado. A decisão e sua justificativa continuam escritas por você. |

```
Estou prestes a tomar esta decisão: [entrada do Decision Log].
Não me diga se concorda ou não. Faça:
1. o argumento mais forte contra esta decisão, como se você tivesse de convencer
   quem a tomará;
2. um pré-mortem: seis meses depois, a decisão fracassou. Conte por quê, em três
   cenários diferentes;
3. riscos que não estão registrados;
4. que evidência, se existisse, deveria me fazer mudar de ideia;
5. suposições que estou fazendo sem declarar.
```

**Exemplo.** Ao submeter a decisão DL-07 (IA de triagem em N2), o pré-mortem levantou o cenário em que Helena, depois de algumas semanas, passa a aprovar rascunhos sem ler. Esse risco foi incorporado ao Decision Log com uma forma de monitoramento: auditoria de 10% dos rascunhos aprovados.

**Anti-exemplo.** "Acho que devemos usar N2 para a IA de triagem. Você concorda?" A pergunta convida concordância, e uma resposta positiva será lida como validação — sem ser.

### Protocolo 5 — Especificação

| Campo | Conteúdo |
|---|---|
| **Objetivo** | Encontrar ambiguidades, lacunas, contradições e suposições numa especificação antes de construir. |
| **Quando usar** | Sempre, antes de entregar um AI Delegation Brief para implementação (por IA ou por pessoa). |
| **Contexto necessário** | O brief completo e os documentos a que ele se refere (esquema, regras). |
| **Entrada** | O AI Delegation Brief. |
| **Saída esperada** | Lista de perguntas, suposições que seriam feitas, contradições, critérios faltantes. |
| **Risco** | A IA responder às próprias perguntas e você aceitar as respostas sem decidir; perguntas irrelevantes que diluem as importantes. |
| **Validação** | Você responde a cada pergunta, atualiza o brief e registra as decisões que surgirem. |

```
Leia a especificação abaixo. NÃO implemente nada.
[AI Delegation Brief]
Liste:
1. perguntas que você precisaria fazer para implementar sem supor nada,
   em ordem de impacto;
2. suposições que você faria se tivesse de implementar agora;
3. contradições ou tensões entre regras, restrições e critérios;
4. critérios de aceitação ausentes: casos negativos, limites, dados ausentes ou
   inválidos, duplicidade, concorrência, falha de dependências;
5. qualquer coisa na especificação que possa ser lida de duas formas.
```

**Exemplo.** Aplicado ao brief de verificação de capacidade, o protocolo perguntou: "um pedido aguardando sinal cujo prazo venceu hoje, mas que a automação de expiração ainda não processou, ocupa capacidade?". A pergunta revelou uma janela de inconsistência; a regra R2 ganhou o termo "não expirados segundo o prazo, independentemente do status gravado".

**Anti-exemplo.** Colar o brief e pedir "implemente". A IA vai implementar, preenchendo cada lacuna com uma suposição — e você só descobrirá quais quando algo der errado.

### Protocolo 6 — Implementação

| Campo | Conteúdo |
|---|---|
| **Objetivo** | Construir um componente a partir de uma especificação, de forma incremental e verificável. |
| **Quando usar** | Depois que o Protocolo 5 foi aplicado e o brief está fechado. |
| **Contexto necessário** | O brief; o código ou a configuração existente relevante; as convenções do projeto; o que não pode ser alterado. |
| **Entrada** | Brief + arquivos de contexto. |
| **Saída esperada** | Código ou configuração no escopo pedido, testes para cada critério, lista de suposições e do que não foi feito, explicação das partes não óbvias. |
| **Risco** | Código que parece funcionar e falha em casos não testados; alteração fora do escopo; segredos no código; dependências desnecessárias; testes triviais que sempre passam. |
| **Validação** | Executar os testes você mesmo; ler o diff inteiro; conferir restrições; testar manualmente pelo menos um caso negativo; aplicar o Protocolo 8. |

```
Implemente o componente descrito no brief abaixo.
[AI Delegation Brief]
Regras de trabalho:
1. Antes de escrever código, resuma em até 5 linhas o que vai fazer e liste dúvidas.
   Se houver dúvidas que afetem regras de negócio, pare e pergunte.
2. Altere apenas [arquivos/módulos]. Não mude nomes, estrutura ou comportamento
   fora desse escopo.
3. Não coloque segredos no código; leia-os de [variáveis de ambiente/cofre].
4. Não adicione dependências novas sem justificar.
5. Escreva um teste para cada critério de aceitação, nomeado com o código do critério.
6. Ao final, liste: suposições feitas, o que não foi implementado, e qualquer parte
   do código que mereça revisão cuidadosa.
```

**Exemplo.** Rodrigo usou o protocolo para implementar o registro de amostras do Vértice. Na lista final, a IA declarou ter suposto que o código da amostra seria sempre numérico; a etiqueta pré-impressa tinha um prefixo de letras. A suposição foi corrigida antes de qualquer teste com usuários.

**Anti-exemplo.** "Faz aí a parte de registro de amostras, e aproveita para melhorar o que achar necessário." O convite a "melhorar o que achar necessário" é um convite a mudanças fora do escopo, que você terá de descobrir lendo um diff enorme.

### Protocolo 7 — Teste

| Campo | Conteúdo |
|---|---|
| **Objetivo** | Gerar casos de teste e dados de teste a partir dos critérios de aceitação, incluindo negativos, limites, exceções e regressões. |
| **Quando usar** | Antes ou junto com a implementação; e sempre que houver mudança (para regressão). |
| **Contexto necessário** | Requisitos e critérios de aceitação; regras; modelo de dados. **Não** o código, para que os testes não sejam derivados da implementação. |
| **Entrada** | Critérios de aceitação e regras. |
| **Saída esperada** | Tabela de casos de teste (critério, cenário, dados, resultado esperado), dados de teste fictícios, casos adversariais quando aplicável. |
| **Risco** | Testes derivados do código, que confirmam os erros dele; testes que verificam coisas triviais; ausência de casos negativos. |
| **Validação** | Cada teste aponta para um critério ou regra; faça um "teste de sabotagem": quebre deliberadamente uma regra no código e confirme que algum teste falha. |

```
A partir dos critérios de aceitação e regras abaixo (não do código), gere casos de teste.
[critérios e regras]
Para cada critério: pelo menos um caso normal, um negativo e os limites (exatamente
no limite, logo acima, logo abaixo). Inclua também: dados ausentes, inválidos e
mal formatados; duplicidade; concorrência; falha de serviço externo; e, se o
componente recebe texto de usuários ou de terceiros, entradas com instruções
embutidas.
Formato: tabela com ID, critério, cenário, dados de entrada, resultado esperado.
Gere os dados de teste como fictícios, sem nenhum dado real.
```

**Exemplo.** Para a importação de arquivos dos instrumentos, o protocolo gerou um caso que ninguém tinha pensado: um arquivo com resultados de duas amostras com o mesmo código, de dias diferentes. O teste revelou que a importação sobrescrevia o primeiro resultado.

**Anti-exemplo.** "Escreva testes para este código." A IA lerá o código e escreverá testes que verificam o que o código faz — incluindo os erros.

### Protocolo 8 — Auditoria

| Campo | Conteúdo |
|---|---|
| **Objetivo** | Revisar de forma independente um artefato (código, automação, especificação, documento) contra a especificação, a segurança e a robustez. |
| **Quando usar** | Antes de aceitar qualquer trabalho delegado; antes de colocar em produção; periodicamente em sistemas em operação. |
| **Contexto necessário** | A especificação, o artefato, os checklists relevantes (Apêndice B). Usar uma sessão nova, sem o histórico de criação. |
| **Entrada** | Especificação + artefato. |
| **Saída esperada** | Para cada regra e critério: implementado ou não, onde, com que evidência; achados classificados por gravidade; perguntas para o autor. |
| **Risco** | Falsa tranquilidade ("nenhum problema encontrado"); revisão superficial; achados inventados. |
| **Validação** | Conferir pessoalmente cada achado relevante; calibrar a confiança na auditoria com o "teste do defeito plantado". |

```
Você é revisor. Não foi você que produziu o material abaixo e não deve defendê-lo.
Especificação: [brief]
Artefato: [código/configuração/documento]
1. Para cada regra e critério de aceitação: está atendido? Onde? Como você verificou?
   Se não for possível verificar lendo, diga.
2. Procure especificamente: segredos expostos; entradas não validadas; permissões não
   verificadas; erros engolidos sem registro; efeitos duplicados se executado duas
   vezes; problemas de concorrência; dados sensíveis em logs; comportamento quando
   dependências falham; alterações fora do escopo.
3. Classifique cada achado como crítico, importante ou menor, com justificativa.
4. Liste o que você não conseguiu avaliar.
```

**Exemplo.** O **teste do defeito plantado** funciona assim: antes de submeter um artefato à auditoria, insira deliberadamente dois ou três defeitos conhecidos (uma permissão não verificada, um segredo fixo no código, uma regra com limite invertido). Se a auditoria não encontrar os defeitos plantados, você aprendeu algo importante sobre quanto confiar nela — e sobre que tipo de defeito ela deixa passar. Rodrigo fez isso com a fase 1 do Vértice: a auditoria encontrou o segredo e a permissão, mas não o limite invertido. A partir daí, regras de limite passaram a ser sempre verificadas por teste, não por leitura.

**Anti-exemplo.** Na mesma conversa em que o código foi gerado: "Revise o que você fez e veja se está tudo certo." A resposta mais provável é uma confirmação, com pequenos ajustes cosméticos.

### Protocolo 9 — Documentação

| Campo | Conteúdo |
|---|---|
| **Objetivo** | Produzir documentação a partir dos artefatos reais: guia de uso, manual de operação, explicação de arquitetura, resumo de decisões. |
| **Quando usar** | Ao final de cada fase; antes de entregar o sistema a quem vai operá-lo; quando alguém novo entra no projeto. |
| **Contexto necessário** | Código, especificações, Decision Log, Test Plan, logs reais; o público da documentação. |
| **Entrada** | Os artefatos e a descrição do leitor e da tarefa que ele precisa fazer. |
| **Saída esperada** | Documento orientado a tarefas do leitor, com itens não confirmados nos artefatos marcados. |
| **Risco** | Documentar o comportamento pretendido em vez do real; documentação que envelhece sem ninguém notar. |
| **Validação** | Uma pessoa do público-alvo segue o documento para executar uma tarefa real, sem ajuda; divergências são corrigidas. |

```
Escreva [tipo de documento] para [leitor], que precisa [tarefas que o leitor fará].
Use apenas o que está nos artefatos abaixo: [artefatos].
Organize por tarefa, não por componente. Para cada tarefa: quando fazer, passos,
como saber que deu certo, o que fazer se der errado.
Marque com [NÃO CONFIRMADO] tudo o que você inferiu e não está explícito nos artefatos.
```

**Exemplo.** O manual de operação da importação automática do Vértice foi gerado a partir do brief, do código e de uma semana de logs reais. A analista que o testou não conseguiu resolver um arquivo rejeitado seguindo o manual: faltava dizer onde ficavam os arquivos rejeitados. O passo foi acrescentado.

**Anti-exemplo.** "Escreva a documentação do sistema." Sem leitor definido e sem tarefas, o resultado é uma descrição genérica de componentes que ninguém usa.

### Protocolo 10 — Ensino

| Campo | Conteúdo |
|---|---|
| **Objetivo** | Aprender um conceito ou tecnologia que o projeto exige, usando a IA como tutor. |
| **Quando usar** | Quando você encontra algo que não entende o suficiente para especificar ou verificar. |
| **Contexto necessário** | O que você quer aprender, para quê, seu nível atual. |
| **Entrada** | O tema e o propósito. |
| **Saída esperada** | Explicação em etapas, exemplo do seu contexto, perguntas de verificação com correção, indicação de fontes primárias. |
| **Risco** | Ilusão de entendimento; explicações erradas aceitas por serem claras; dependência do tutor. |
| **Validação** | Explicar o conceito sem ajuda (M0); resolver um problema pequeno sem IA; conferir os pontos centrais numa fonte primária (documentação oficial, material de referência). |

```
Quero aprender [conceito] para [propósito no meu projeto]. Meu nível: [descrição].
1. Explique em etapas curtas, do mais simples ao mais completo, usando um exemplo
   do meu contexto: [contexto].
2. Diga o que é consenso e o que é prática variável ou opinião.
3. Depois me faça cinco perguntas, uma de cada vez, sem dar a resposta. Espere minha
   resposta e corrija.
4. Indique que tipo de fonte primária eu devo consultar para confirmar os pontos
   principais.
```

**Exemplo.** Helena usou o protocolo para entender o que era um webhook antes da conversa com quem configuraria a integração de pagamentos. As perguntas de verificação mostraram que ela tinha entendido o conceito, mas não a necessidade de conciliação para eventos perdidos — que ela passou a exigir.

**Anti-exemplo.** Ler uma explicação longa, achar que entendeu e seguir para a construção. Sem as perguntas de verificação e sem a explicação de volta, não há como distinguir entendimento de familiaridade.

### Combinando protocolos

Os protocolos se encadeiam ao longo do ciclo:

```
 PENSAR       MODELAR        DECIDIR           ESPECIFICAR    CONSTRUIR       TESTAR      VALIDAR/EVOLUIR
 ────────     ─────────      ─────────────     ───────────    ───────────     ─────────   ───────────────
 1 Exploração 2 Decomposição 3 Arquitetura     5 Especificação 6 Implementação 7 Teste    9 Documentação
                             4 Decisão                         8 Auditoria     8 Auditoria
                       10 Ensino — em qualquer momento em que falte entendimento
```

Duas práticas tornam o encadeamento mais seguro. A primeira é **trabalhar em sessões separadas por protocolo**, reapresentando o contexto necessário a cada uma (a partir dos artefatos do projeto, não do histórico de conversa). A segunda é **registrar o uso de IA** no diário de bordo: que protocolo, com que entrada, que resultado, como foi verificado. Isso alimenta a reflexão dos projetos e permite, mais tarde, perceber em que tipo de tarefa a IA ajudou mais e em qual atrapalhou.

> **Anti-padrão: confiar cegamente no output** — *Sintoma:* o resultado da IA é usado sem verificação porque "parece certo", "rodou" ou "a IA sabe mais do que eu sobre isso". *Causa:* fluência e formatação impecáveis produzem confiança; verificar dá trabalho. *Consequência:* erros plausíveis entram no sistema e só aparecem em produção, frequentemente tarde e caros. *Correção:* todo protocolo tem um campo de validação; não pule. A regra é proporcional: quanto maior o custo do erro, mais forte a verificação. E nenhuma verificação consiste em perguntar à própria IA se ela está certa.

### Exercícios

**Exercício 22.1 · F · M0** — Para cada uma das seis falhas de colaboração, descreva um episódio (real ou plausível) do seu uso de IA em que ela aconteceu ou poderia acontecer, e a defesa que teria evitado.

**Exercício 22.2 · P · M2** — Aplique o Protocolo 1 a um domínio que você não conhece (por exemplo, gestão de uma oficina mecânica ou de uma escola de música). Depois, faça uma conversa de quinze minutos com alguém que conhece o domínio usando as perguntas geradas. Registre: quais hipóteses da IA se confirmaram, quais estavam erradas e o que a pessoa disse que a IA não previu.

**Exercício 22.3 · P · M3** — Aplique os Protocolos 5, 6, 7 e 8, em sessões separadas, ao brief da automação de lembretes de Lucas (Exercício 21.2). Registre em cada etapa o que mudou no brief ou no artefato.

**Exercício 22.4 · A · M4** — Faça o teste do defeito plantado: pegue um artefato do seu projeto, insira três defeitos de tipos diferentes (de regra, de segurança, de robustez) e aplique o Protocolo 8 numa sessão nova. Quantos defeitos foram encontrados? Que tipo escapou? Registre o que isso muda na sua forma de verificar.

## Capítulo 23 — Supervisionar a construção

### O que significa supervisionar

Supervisionar a construção (**Implementation Supervision**) não significa escrever o código. Significa controlar quatro coisas: **o escopo** (o que está sendo construído agora, e o que não), **a ordem** (em que sequência as partes são construídas), **a verificação** (como cada parte é confirmada antes da próxima) e **a integração** (como as partes se juntam sem quebrar o que já funcionava).

Uma pessoa do Perfil A consegue supervisionar a construção de um sistema que não saberia programar, desde que mantenha esse controle. Uma pessoa do Perfil C, que sabe programar, pode perder o controle de um sistema que ela mesma está construindo com IA, se abrir mão dessas quatro coisas.

### O ciclo de construção

Cada incremento de construção segue o mesmo ciclo:

```
   ┌──► 1. ESCOLHER A FATIA ── a próxima funcionalidade pequena, de ponta a ponta
   │         │
   │         ▼
   │    2. ESPECIFICAR ─────── brief da fatia (ou trecho do brief geral) + Protocolo 5
   │         │
   │         ▼
   │    3. GERAR ───────────── Protocolo 6, no escopo da fatia
   │         │
   │         ▼
   │    4. ENTENDER ─────────── pedir explicação do que foi feito; ler a estrutura
   │         │
   │         ▼
   │    5. EXECUTAR E TESTAR ── rodar os testes; testar à mão um caso negativo
   │         │
   │         ▼
   │    6. REVISAR O DIFF ───── o que mudou além do esperado?
   │         │
   │         ▼
   │    7. REGISTRAR ────────── commit com mensagem; Decision Log se houve decisão
   │         │
   └─────────┘
```

O ciclo parece longo, mas cada volta pode levar de minutos a poucas horas. O que o torna eficaz é que **nenhuma fatia começa antes de a anterior estar verificada e registrada**. Quando algo quebra, você sabe que foi na última fatia — e sabe voltar ao estado anterior.

### Fatias verticais e o esqueleto andante

A primeira fatia de qualquer sistema deveria ser um **esqueleto andante**: a versão mais simples possível que atravessa todas as camadas, de ponta a ponta. Para o Vértice, o esqueleto andante foi: uma tela onde se registra uma amostra com três campos, uma regra (código único), uma tabela no banco de dados e uma lista que mostra as amostras registradas. Feio, incompleto e funcionando.

O esqueleto andante tem um valor que não é óbvio: ele revela cedo os problemas de infraestrutura — onde o sistema vai rodar, como os usuários vão acessar, como os dados são guardados, como uma nova versão é implantada. Esses problemas, se descobertos no fim, podem inviabilizar tudo o que foi construído.

Depois do esqueleto, cada fatia acrescenta uma funcionalidade completa: "registrar resultado de um ensaio", "revisar e aprovar", "gerar laudo". Construir em fatias horizontais (todo o banco de dados primeiro, depois toda a lógica, depois todas as telas) adia a primeira verificação real para o fim do projeto — que é exatamente quando ela é mais cara.

> **Caso Vértice** — Plano de fatias da fase 1:
>
> | Fatia | Funcionalidade | Critério de pronto |
> |---|---|---|
> | 0 | Esqueleto andante: registrar e listar amostra | Amostra registrada aparece na lista; código duplicado é recusado. |
> | 1 | Registro completo de amostra | Todos os campos obrigatórios, tipos e validações; produção consulta status. |
> | 2 | Registro de resultados | Analista registra resultado; comparação automática com especificação; correção com motivo. |
> | 3 | Revisão e aprovação | Permissões da matriz do Capítulo 14; trilha de auditoria; aprovação em lote por janela. |
> | 4 | Laudo | Laudo gerado só de dados aprovados; numeração; envio. |
> | 5 | Painel de fila | Fila por estado e por idade; visível para a produção. |
>
> Durante a fatia 3, ao revisar o diff, Rodrigo percebeu que a IA tinha alterado a estrutura da tabela de resultados para facilitar a aprovação em lote — removendo, sem avisar, a coluna que guardava o valor anterior em correções. A trilha de auditoria teria deixado de funcionar. A mudança foi revertida, e o brief ganhou uma restrição explícita: "não alterar o esquema do banco de dados; se necessário, propor a alteração e aguardar aprovação".

### Entender o que foi construído sem saber programar

Para supervisionar, você precisa entender o que foi construído em três níveis. Nenhum deles exige escrever código.

**Nível 1 — estrutura.** Quais são as partes (arquivos, módulos, telas, etapas da automação) e o que cada uma faz? Os nomes correspondem aos conceitos da sua especificação? Se a especificação fala de "verificar capacidade" e não há nada com nome parecido, onde isso foi feito?

**Nível 2 — fluxo.** Para uma operação importante, o que acontece passo a passo? Peça à IA (numa sessão de auditoria) que explique, em linguagem simples, o que uma função faz, linha a linha, e compare com as regras da especificação. Atenção: a explicação também pode estar errada. Por isso, o nível 2 se confirma com testes, não com a explicação.

**Nível 3 — sinais de alerta.** Certos padrões indicam problema e podem ser reconhecidos mesmo sem saber programar:

| Sinal de alerta | Por que preocupa |
|---|---|
| Valores fixos no meio do código (um "12" solto, um endereço de e-mail, uma data) | Parâmetros que deveriam estar em configuração; regras escondidas. |
| Algo que parece uma chave, senha ou token | Segredo no código (Capítulo 14). |
| Blocos que capturam erros e não fazem nada com eles | Falhas silenciosas; o sistema "funciona" enquanto erra. |
| Trechos comentados, marcações de "fazer depois" ou "provisório" | Trabalho incompleto que parece completo. |
| Funções enormes que fazem muitas coisas | Difícil de testar e de mudar; regras misturadas. |
| Dependências novas que você não pediu | Novos pontos de falha e de risco. |
| Testes que não verificam nada (sem comparação de resultado) | Falsa evidência. |
| Mudanças em arquivos fora do escopo | Iniciativa excessiva; risco de quebrar o que funcionava. |

### Quando a construção entra em espiral

Uma situação comum: algo não funciona, você pede à IA para corrigir, ela muda, não funciona de outra forma, você pede de novo, e depois de algumas voltas o sistema está pior do que antes e ninguém sabe o que mudou. É a **espiral de correções**.

Os sinais: a IA começa a propor mudanças cada vez maiores para um problema pequeno; correções desfazem correções anteriores; você já não sabe qual era a última versão que funcionava. Quando isso acontecer:

1. **Pare.** Não peça mais uma correção.
2. **Volte ao último estado verificado** (o último commit de uma fatia aprovada).
3. **Reduza o problema.** Qual é o menor caso que reproduz a falha?
4. **Reespecifique.** A falha provavelmente revela uma ambiguidade ou lacuna na especificação. Corrija-a primeiro.
5. **Recomece numa sessão nova**, com o brief atualizado e o caso de falha como critério de aceitação.

A espiral é quase sempre um sintoma de especificação insuficiente ou de fatia grande demais — não de "falta de capacidade da IA".

### Manter o contexto entre sessões

Projetos duram dias ou semanas; conversas com IA, não. Para que cada nova sessão comece com o contexto certo, mantenha um **arquivo de contexto do projeto**: um documento curto, versionado junto com o projeto, que você apresenta no início de cada sessão de construção. Ele contém:

- o Problem Statement, em um parágrafo;
- a arquitetura atual, em poucas linhas, e onde está cada coisa;
- as convenções (nomes, formatos, linguagem, bibliotecas);
- as restrições permanentes ("não alterar o esquema sem aprovação", "segredos só em variáveis de ambiente");
- as decisões vigentes que afetam a construção (referências ao Decision Log);
- o estado atual: fatias concluídas, fatia em andamento.

Esse arquivo é o antídoto contra a deriva (Capítulo 22). Ele também é o que permite trocar de ferramenta de IA, ou entregar o projeto a outra pessoa, sem perder o fio.

### Caminhos de implementação

O ciclo de construção vale para qualquer forma de construir. O que muda é onde cada passo acontece:

| Passo | Sem código (plataforma visual) | Planilha com scripts | Código com assistente |
|---|---|---|---|
| Ambiente de teste | Cópia do fluxo e das tabelas, com dados fictícios | Cópia da planilha | Ambiente de desenvolvimento separado |
| Gerar | Você monta, com ajuda da IA para lógica e fórmulas | IA gera scripts e fórmulas | IA gera código |
| Entender | Inspecionar cada etapa do fluxo | Ler fórmulas; pedir explicação dos scripts | Níveis 1 a 3 |
| Testar | Executar com dados de teste, um caso por vez | Casos de teste numa aba própria | Testes automatizados |
| Revisar mudanças | Histórico de versões da plataforma, se houver; registro manual se não houver | Histórico de versões da planilha | Diff no controle de versões |
| Registrar | Exportar a configuração e guardar com data | Cópia datada + diário | Commit |

Se a plataforma que você usa não tem histórico de versões nem forma de exportar a configuração, isso é um risco a registrar no Decision Log — e um motivo para manter documentação da configuração fora dela.

### Exercícios

**Exercício 23.1 · F · M0** — Para o sistema pessoal de Lucas, defina o esqueleto andante e as três primeiras fatias, com critério de pronto para cada uma.

**Exercício 23.2 · P · M3** — Construa o esqueleto andante do seu projeto usando o ciclo de construção completo. Registre no diário cada volta do ciclo: o que foi pedido, o que foi verificado, o que o diff mostrou.

**Exercício 23.3 · P · M4** — Peça a uma IA que implemente um componente pequeno do seu projeto sem especificação detalhada (apenas uma frase). Depois, aplique a tabela de sinais de alerta ao resultado. Quantos sinais você encontrou? Compare com o resultado do mesmo componente implementado a partir de um brief completo.

**Exercício 23.4 · P · M0** — Escreva o arquivo de contexto do seu projeto. Teste-o: abra uma sessão nova com uma IA, apresente apenas o arquivo e pergunte "o que você entendeu deste projeto e o que não está claro?". Ajuste o arquivo com base na resposta.
