## Capítulo 27 — IA aplicada: quando, onde e com que garantias

### A pergunta certa

Diante de um problema, a pergunta "consigo usar IA aqui?" quase sempre tem resposta "sim". Por isso, ela é inútil. A pergunta do método é outra:

> **IA é realmente a melhor solução para esta parte do problema — melhor do que uma regra determinística, uma mudança de processo ou uma pessoa — considerando exatidão, custo, manutenção, explicabilidade e risco?**

Observe as palavras "esta parte". IA raramente é a solução de um problema inteiro. É, às vezes, a melhor solução para uma parte específica dele — tipicamente aquela em que a entrada é desestruturada ou variável demais para regras. Este capítulo ensina a identificar essa parte (**AI Opportunity Identification**), a compará-la com alternativas e a construí-la com as garantias adequadas.

### A Matriz Entrada × Regra

Duas perguntas sobre cada parte do problema orientam a escolha:

- **A entrada é estruturada?** (Campos definidos, formatos previsíveis — ou texto livre, documentos variados, imagens?)
- **A regra de decisão é explícita?** (Pode ser escrita completamente — ou depende de julgamento? Lembre do grau de explicitabilidade do Capítulo 10.)

```
                                  REGRA DE DECISÃO
                         explícita                        depende de julgamento
               ┌──────────────────────────────────┬──────────────────────────────────┐
               │ 1. DETERMINÍSTICO                │ 3. EXPLICITAR OU APOIAR          │
  estruturada  │ Regras, planilha, automação,     │ Tentar explicitar a regra com    │
               │ código. IA desnecessária.        │ especialistas; se não der, a IA  │
   ENTRADA     │                                  │ (ou estatística) pode sugerir;   │
               │                                  │ humano decide.                   │
               ├──────────────────────────────────┼──────────────────────────────────┤
               │ 2. IA NA BORDA, REGRA NO CENTRO  │ 4. IA COMO ASSISTENTE            │
  desestrutu-  │ IA transforma a entrada em dados │ IA organiza, resume, sugere;     │
  rada         │ estruturados; validador confere; │ humano interpreta e decide;      │
               │ regras determinísticas decidem.  │ supervisão alta.                 │
               └──────────────────────────────────┴──────────────────────────────────┘
```

Sobre a matriz, uma terceira dimensão define o grau de supervisão: o **custo do erro**. No mesmo quadrante, uma classificação de e-mails internos e uma classificação de resultados de ensaio exigem níveis de autonomia completamente diferentes (Capítulo 3).

Exemplos:

- Comparar um resultado numérico com os limites de uma especificação: **quadrante 1**. Usar IA aqui seria pior em tudo — exatidão, custo, explicabilidade.
- Ler uma mensagem de cliente ("oi, queria aquele de chocolate com morango pro sábado, pra umas 20 pessoas") e transformá-la num rascunho de pedido: **quadrante 2**. A IA extrai os campos; o sistema verifica capacidade e antecedência com regras.
- Decidir se uma amostra com resultado atípico, mas dentro da especificação, deve ser reensaiada: **quadrante 3**. Primeiro, tentar explicitar a regra (o Capítulo 10 mostrou como, com a árvore de decisão do Vértice).
- Decidir como responder a uma reclamação delicada de cliente: **quadrante 4**. A IA pode rascunhar e resumir o histórico; Helena decide e responde.

### O padrão "IA na borda, regra no centro"

O quadrante 2 é onde a IA mais frequentemente agrega valor com risco controlado, e ele tem uma arquitetura típica:

```
  ENTRADA DESESTRUTURADA          BORDA (IA)              VALIDAÇÃO              CENTRO (REGRAS)
  mensagem, documento,  ──►  extrair / classificar ──►  esquema + regras  ──►  decisões determinísticas
  e-mail, imagem              em formato definido        de plausibilidade       (capacidade, limites,
                                     │                         │                  permissões)
                                     │                         │ falhou ou
                                     ▼                         ▼ incerto
                              "não encontrado"          FILA DE REVISÃO HUMANA
                               é resposta válida
```

O padrão tem três propriedades valiosas. As decisões que importam ficam em regras previsíveis, testáveis e explicáveis. Os erros da IA são, em boa parte, capturados pela validação antes de afetar decisões. E a IA pode ser trocada (por outro modelo, por outra técnica, por uma pessoa) sem mexer no centro.

### Funções da IA e suas alternativas

Para cada uma das seis funções do Capítulo 16, há alternativas determinísticas que devem ser consideradas antes.

| Função | Alternativa determinística | Quando a IA tende a ser melhor | Verificação típica |
|---|---|---|---|
| **Classificar** | Regras por palavras-chave, campos de formulário, menus de opção | Linguagem variada, categorias que dependem de sentido | Conjunto de avaliação; matriz de erros por categoria |
| **Extrair** | Formulários estruturados; leitura por modelo fixo de documento | Documentos de layouts variados; texto livre | Comparação campo a campo com gabarito; validação de esquema e plausibilidade |
| **Gerar** | Modelos de texto com campos preenchidos | Textos que precisam se adaptar ao caso | Revisão humana; checklist de conteúdo obrigatório e proibido |
| **Transformar** | Conversores, fórmulas, mapeamentos | Reescrita com mudança de tom, nível ou idioma | Revisão por amostragem; conferência de fidelidade |
| **Analisar** | Listas de verificação, regras de auditoria | Encontrar padrões não previstos em texto | Comparação com análise de especialista em casos conhecidos |
| **Interpretar** | Perguntar à pessoa (esclarecimento) | Ambiguidades com contexto disponível | Revisão humana obrigatória |

Note a alternativa da última linha: muitas vezes, em vez de a IA interpretar o que a cliente quis dizer, é melhor simplesmente perguntar a ela. Uma pergunta bem feita é mais confiável do que qualquer interpretação.

### Comparar de verdade: o experimento determinístico × IA

Para decidir entre uma solução determinística e uma com IA numa parte do problema, faça um experimento pequeno e honesto:

1. **Defina a tarefa precisamente** (por exemplo: "a partir de uma mensagem, preencher data, produto, tamanho, sabor e modo de entrega").
2. **Monte um conjunto de avaliação** (próxima seção).
3. **Construa a versão determinística mais simples razoável** (por exemplo: um formulário com os campos, enviado como link na primeira resposta; ou regras de palavras-chave).
4. **Construa a versão com IA mais simples razoável.**
5. **Meça as duas** no mesmo conjunto, pelos mesmos critérios: exatidão por campo, erros críticos, custo por caso, tempo, esforço de manutenção, explicabilidade.
6. **Considere combinações** — frequentemente a melhor resposta é uma combinação.

> **Caso Marzipã** — O experimento comparou três opções para transformar mensagens em rascunhos de pedido: (A) enviar à cliente um link de formulário com os campos obrigatórios; (B) extração com IA da mensagem livre; (C) A + B: o formulário é oferecido, e mensagens livres de quem não usa o formulário vão para a extração com IA. O conjunto de avaliação tinha 60 mensagens reais anonimizadas das semanas anteriores. Resultados ilustrativos do caso: com o formulário, os dados chegavam completos e corretos, mas uma parte relevante das clientes (sobretudo as recorrentes) continuava mandando mensagem livre; a extração com IA preencheu corretamente a maioria dos campos, mas errou ou deixou de preencher a data em algumas mensagens com referências relativas ("sábado que vem", "dia do aniversário dela"). A opção C foi escolhida, com uma regra adicional: **datas relativas nunca são resolvidas pela IA**; a IA marca a data como "a confirmar", e a mensagem de resposta à cliente pede a data exata. A decisão foi registrada como DL-07 (Capítulo 20).

### Conjuntos de avaliação

Um **conjunto de avaliação** é uma coleção de casos com a resposta correta definida antes do teste. É a ferramenta mais importante para trabalhar com IA de forma responsável, e é surpreendentemente pouco usada.

Como montar um conjunto de avaliação:

- **Use casos reais ou realistas**, não exemplos inventados para parecerem bonitos. Dados reais devem ser anonimizados (Capítulo 32).
- **Comece com algumas dezenas de casos** e aumente conforme a importância da decisão. Para decisões de alto risco, centenas podem ser necessárias.
- **Garanta representatividade**: a proporção de tipos de caso deve se parecer com a realidade.
- **Inclua deliberadamente casos difíceis**: ambíguos, incompletos, com erros de digitação, que misturam assuntos, que tentam enganar o sistema.
- **Defina a resposta correta antes de rodar a IA**, de preferência por quem conhece o domínio. Se duas pessoas discordam sobre a resposta certa de um caso, isso é informação: talvez a tarefa esteja mal definida.
- **Separe uma parte do conjunto** (por exemplo, um terço) que você não usará para ajustar instruções. Se você ajusta o prompt até acertar todos os casos que conhece, mede apenas sua capacidade de ajustar ao conjunto — a parte separada mostra o desempenho em casos novos.

Como medir:

- **por campo ou por categoria**, e não só no total — um sistema que acerta 95% no geral pode errar metade dos casos de uma categoria rara e importante;
- **separando erros críticos** (que causariam dano: data errada, produto errado) de **erros menores** (grafia de nome);
- **separando "errou" de "não respondeu"** — dizer "não encontrado" quando não há informação é comportamento correto e desejável;
- **repetindo a execução**, para saber se os resultados variam.

E, antes de rodar, **defina os limiares de aceitação**: que desempenho é suficiente para cada nível de autonomia? Definir o limiar depois de ver o resultado é uma forma de autoengano.

### Confiabilidade e incerteza

Um sistema com IA precisa saber quando não confiar em si mesmo. Algumas formas de detectar incerteza, da mais fraca para a mais forte:

- **Confiança declarada pelo modelo.** Pedir ao modelo que diga quão seguro está. É fácil de obter e pouco confiável sozinha: modelos frequentemente se declaram seguros quando estão errados.
- **Opção explícita de "não sei".** Instruir o modelo a responder "não encontrado" ou "incerto" quando a informação não estiver clara, e verificar no conjunto de avaliação se ele faz isso.
- **Concordância entre execuções.** Rodar a mesma extração mais de uma vez; divergência indica incerteza.
- **Validação contra regras e outras fontes.** A data extraída está no futuro? O produto existe no catálogo? O valor do certificado está na faixa física possível? O fornecedor do certificado é o mesmo do pedido de compra?
- **Comparação com o histórico.** O valor está muito distante do que esse produto costuma apresentar?

Os casos marcados como incertos por qualquer desses mecanismos vão para a **fila de revisão humana**. O desenho do sistema deve tornar essa fila eficiente: mostrar ao revisor o original e o extraído lado a lado, destacar os campos incertos, permitir corrigir com um clique.

### Fallback e supervisão

Todo componente com IA precisa de dois caminhos alternativos:

- **Fallback de incerteza** — quando a IA não tem certeza, o caso vai para uma pessoa (a fila de revisão).
- **Fallback de indisponibilidade** — quando o serviço de IA está fora do ar, lento ou caro demais, o processo continua de outra forma (manual, ou com a versão determinística).

E precisa de supervisão contínua:

- **Auditoria por amostragem** dos casos que a IA processou sem ir para revisão.
- **Métricas acompanhadas ao longo do tempo**: proporção de casos incertos, correções feitas por revisores, erros encontrados em auditoria.
- **Reavaliação a cada mudança**: quando o modelo, o fornecedor ou a instrução muda, rode de novo o conjunto de avaliação antes de pôr em produção. Modelos são atualizados pelos fornecedores, e o comportamento pode mudar sem aviso. O conjunto de avaliação é, nesse sentido, um **teste de regressão** do componente de IA.

> **Caso Vértice** — Fase 4: extração de dados de certificados de análise de fornecedores (PDFs com layouts variados). A avaliação comparou: (A) leitura por modelo fixo, configurada para cada fornecedor; (B) extração com IA para todos; (C) A para os três fornecedores que respondiam pela maior parte do volume, B para os demais. O resultado levou a C, com quatro garantias: todo valor extraído é validado contra a faixa física e contra a especificação de recebimento; todo certificado extraído por IA passa por revisão humana campo a campo antes de ser aceito (N2), com os campos lado a lado com o PDF; a cada trimestre, o conjunto de avaliação é rodado de novo; e a leitura por modelo fixo dos três principais fornecedores tem um teste de contrato que alerta quando o layout muda.

> **Anti-padrão: usar IA por moda** — *Sintoma:* a IA aparece na solução antes de aparecer no problema; o projeto é descrito como "projeto de IA"; ninguém comparou com alternativas determinísticas. *Causa:* pressão externa, entusiasmo, desejo de parecer moderno. *Consequência:* soluções mais caras, menos confiáveis e mais opacas do que o necessário; desconfiança quando falham. *Correção:* para cada uso proposto de IA, localize a parte na Matriz Entrada × Regra; se for o quadrante 1, não use IA; nos outros, faça o experimento determinístico × IA antes de decidir.

### Exercícios

**Exercício 27.1 · F · M0** — Posicione cada tarefa na Matriz Entrada × Regra e indique o custo do erro: (a) calcular o valor de uma fatura a partir das horas registradas; (b) identificar, em e-mails de clientes, os que pedem cancelamento; (c) decidir se um pedido de exceção na política de devolução deve ser aceito; (d) ler a data de validade em fotos de documentos; (e) decidir a prioridade de chamados de manutenção a partir de descrições livres.

**Exercício 27.2 · P · M2** — Amplie o conjunto de avaliação do Exercício 16.4 para pelo menos 40 mensagens, com respostas definidas antes. Separe um terço. Ajuste a instrução da IA usando só os dois terços; depois meça no terço separado. A diferença de desempenho entre as duas partes é grande? O que isso indica?

**Exercício 27.3 · P · M0** — Para uma parte do seu projeto que parece candidata a IA, desenhe o experimento determinístico × IA: tarefa, conjunto de avaliação, versão determinística, versão com IA, critérios, limiares definidos antes.

**Exercício 27.4 · A · M3** — Execute o experimento do exercício anterior. Escreva o resultado como entrada de Decision Log, incluindo nível de autonomia, fallback e supervisão.

> **Fim da etapa de pré-requisitos do Projeto P07** (complete também o Capítulo 31 antes de concluí-lo).

## Capítulo 28 — RAG: dar à IA o conhecimento certo

### O problema que o RAG resolve

Um modelo de linguagem sabe muito em geral e nada sobre os seus documentos. Quando a tarefa exige responder com base em conhecimento específico — os procedimentos do laboratório, o catálogo e as políticas da confeitaria, os contratos de uma empresa —, é preciso levar esse conhecimento até o modelo. O RAG (geração aumentada por recuperação, apresentado no Capítulo 16) faz isso: busca os trechos relevantes e os coloca no contexto antes de o modelo responder.

### Os componentes

Um sistema de RAG tem sete partes, e cada uma pode falhar de forma própria.

| Componente | O que faz | Como falha |
|---|---|---|
| **Fontes** | O conjunto de documentos considerados. | Documentos desatualizados, duplicados, contraditórios ou sem autoridade definida. |
| **Preparação** | Dividir documentos em trechos de tamanho adequado, com metadados (origem, versão, data, seção). | Trechos que cortam uma regra pela metade; perda de títulos e contexto. |
| **Indexação** | Organizar os trechos para busca (frequentemente com embeddings). | Índice desatualizado em relação às fontes. |
| **Busca** | Encontrar os trechos mais relevantes para a pergunta. | Trechos irrelevantes; o trecho certo não aparece; documentos que o usuário não deveria ver. |
| **Montagem do contexto** | Colocar a pergunta, os trechos e as instruções no contexto do modelo. | Trechos demais (ruído) ou de menos; instruções conflitantes. |
| **Geração** | O modelo responde com base nos trechos, citando-os. | Responde com conhecimento geral em vez dos trechos; mistura fontes; cita trecho que não sustenta a afirmação. |
| **Avaliação** | Verificar a qualidade das respostas. | Inexistente — o problema mais comum de todos. |

### As fontes são a parte mais importante

Um RAG é tão bom quanto as fontes que consulta. Antes de qualquer questão técnica, responda:

- **Qual é a fonte de autoridade?** Se há dois documentos sobre o mesmo assunto, qual prevalece?
- **Como as fontes são atualizadas?** Quando um procedimento muda, o índice muda junto? Quem garante?
- **As fontes concordam entre si?** Documentos contraditórios produzem respostas contraditórias, e o modelo não tem como saber qual está certo.
- **Quem pode ver o quê?** Se um usuário não tem permissão para ler um documento, o RAG não pode usá-lo para responder a esse usuário. A busca precisa respeitar as permissões das fontes — esse é um dos erros de segurança mais frequentes em sistemas de RAG.

Muitas vezes, o trabalho de preparar um RAG revela que as fontes estão desorganizadas: procedimentos desatualizados convivendo com os novos, regras que só existem em e-mails, versões diferentes do mesmo documento. Organizar as fontes já é, em si, uma melhoria — às vezes a principal (degrau 2 e 3 da Escada).

### Avaliar busca e resposta separadamente

Quando uma resposta de RAG está errada, há duas possibilidades: a busca não trouxe o trecho certo, ou trouxe e o modelo não o usou direito. São problemas diferentes, com correções diferentes. Por isso, o conjunto de avaliação de um RAG registra, para cada pergunta, **a resposta esperada e a fonte esperada**, e mede:

- **qualidade da busca** — o trecho certo estava entre os recuperados?
- **fidelidade** — a resposta afirma apenas o que os trechos sustentam?
- **exatidão** — a resposta está correta?
- **citação** — a fonte citada de fato sustenta a afirmação?
- **comportamento sem resposta** — para perguntas cuja resposta não está nas fontes, o sistema diz que não encontrou, em vez de inventar?

O último item é crucial. Inclua no conjunto de avaliação perguntas plausíveis cuja resposta **não** está nas fontes. Um RAG que responde a essas perguntas com confiança está fabricando — e fará isso com os usuários.

### Quando o RAG é exagero

RAG é frequentemente proposto para problemas que não precisam dele. Antes de construir um, considere as alternativas:

- **Os documentos cabem inteiros no contexto?** Se forem poucos e curtos, basta colocá-los todos — sem busca, sem índice, sem a complexidade e as falhas da recuperação.
- **As perguntas são sempre as mesmas?** Uma página de perguntas frequentes, bem mantida, responde melhor e mais barato.
- **A informação é estruturada?** "Quando vence o contrato do fornecedor X?" é uma consulta a uma tabela, não uma pergunta para um RAG.
- **Uma boa busca resolve?** Às vezes o usuário só precisa encontrar o documento certo; uma busca bem organizada nas fontes resolve sem geração.

> **Caso Casa** — Lucas queria "conversar com os meus documentos": perguntar à IA sobre garantias, contratos e documentos da família. A análise mostrou: cerca de quarenta documentos, e as perguntas eram quase sempre "onde está X?" e "quando vence Y?". Ambas eram respondidas pela planilha estruturada (tipo, pessoa, validade, local de guarda). Além disso, enviar documentos pessoais da família a um serviço externo de IA exigiria uma análise de privacidade que não se justificava pelo ganho. Decisão registrada: RAG rejeitado; reavaliar se surgirem perguntas recorrentes sobre o *conteúdo* dos documentos (cláusulas de contrato, por exemplo).

> **Caso Vértice** — Os analistas consultam com frequência os procedimentos operacionais do laboratório ("qual é a regra de reensaio para o método X?"). Um RAG sobre os procedimentos foi avaliado como útil, mas com um risco específico: num ambiente regulado, a resposta precisa corresponder exatamente à versão vigente do documento controlado, e uma paráfrase imprecisa pode levar a um procedimento errado. Decisão: primeiro, organizar os procedimentos num repositório único com busca por palavra e versão vigente destacada (degrau 3); reavaliar o RAG depois de três meses, com conjunto de avaliação montado pelas analistas e exigência de citação literal do trecho com número da versão.

### Exercícios

**Exercício 28.1 · F · M0** — Para cada situação, diga se RAG é adequado ou exagero, e qual a alternativa: (a) um assistente para responder dúvidas de funcionários sobre 300 páginas de políticas internas; (b) responder a clientes sobre o horário de funcionamento; (c) consultar o saldo de férias de um funcionário; (d) ajudar técnicos a encontrar soluções em 5.000 registros de chamados anteriores.

**Exercício 28.2 · P · M0** — Monte um conjunto de avaliação para um RAG sobre um conjunto de documentos que você conhece (manuais, regulamentos, materiais de curso): quinze perguntas com resposta e fonte esperadas, incluindo cinco cuja resposta não está nos documentos.

**Exercício 28.3 · A · M3** — Se você tiver acesso a uma ferramenta que permita consultar documentos próprios com IA, aplique o conjunto do exercício anterior. Meça separadamente busca, fidelidade, exatidão, citação e comportamento sem resposta. Que componente falhou mais?

## Capítulo 29 — Agentes: autonomia com limites

### O que torna algo um agente

Um agente, como visto no Capítulo 16, é um modelo de linguagem que opera em ciclo: recebe um objetivo, decide uma ação, usa uma ferramenta, observa o resultado e decide a próxima ação, até atingir o objetivo ou um limite. O que o distingue de uma automação com etapas de IA é que **a sequência de passos não está definida previamente**.

Entre a automação totalmente definida e o agente totalmente aberto, há um espectro:

```
  FLUXO FIXO             FLUXO FIXO COM          FLUXO COM DECISÃO       AGENTE COM            AGENTE
  com etapas de IA  ──►  ROTEAMENTO POR IA  ──►  DE PASSOS LIMITADA ──►  FERRAMENTAS     ──►  ABERTO
  (passos definidos;     (IA escolhe qual        (IA escolhe entre       RESTRITAS             (muitas ferramentas,
   IA extrai/classifica)  caminho seguir)         poucas ações)          (decide os passos,     amplas permissões)
                                                                          dentro de limites)
  ◄────────── mais previsível, testável, barato ──────────    ────────── mais flexível, arriscado, caro ──────────►
```

A regra do método é a mesma de sempre: comece pela esquerda e mova-se para a direita apenas quando o problema exigir.

### O teste do fluxograma

Uma pergunta simples separa os problemas que precisam de agente dos que não precisam:

> **Consigo desenhar o fluxograma dos passos?**

Se você consegue — mesmo com muitos ramos e exceções —, o problema é um fluxo, e deve ser implementado como automação (com etapas de IA onde a entrada exigir). Um fluxo é mais previsível, mais barato, mais fácil de testar e de explicar. Um agente só se justifica quando os passos genuinamente dependem do que for descoberto no caminho, de formas que não podem ser enumeradas: pesquisar informações em fontes variadas, diagnosticar um problema cujas causas possíveis são muitas, modificar código num projeto existente.

### Os componentes de um agente

Projetar um agente é, em grande parte, projetar seus limites.

| Componente | Pergunta de projeto |
|---|---|
| **Objetivo** | O que o agente deve produzir? Como saber que terminou? |
| **Ferramentas** | Que ações ele pode executar? Cada ferramenta é de leitura ou de escrita? |
| **Permissões** | Com que identidade cada ferramenta age? Com que escopo? |
| **Contexto** | Que informação ele recebe no início? |
| **Memória** | O que ele guarda entre passos? E entre execuções? |
| **Estado** | Como se registra o que já foi feito, para retomar ou auditar? |
| **Limites** | Número máximo de passos, tempo, custo, volume de dados. |
| **Critério de parada** | Quando ele para — por sucesso, por limite ou por impossibilidade? |
| **Aprovações** | Que ações exigem confirmação humana antes de executar? |
| **Guardrails** | Que verificações automáticas são feitas sobre entradas, ações e saídas? |
| **Logs** | Como cada decisão, ação e resultado é registrado? |

### Autonomia por ação, não por agente

O nível de autonomia (Capítulo 3) deve ser decidido **para cada ferramenta ou ação**, não para o agente como um todo. Um mesmo agente pode consultar dados livremente (N5), redigir documentos que alguém revisará (N2) e nunca enviar nada para fora sem aprovação (N1 para envios).

Uma regra prática:

| Tipo de ação | Autonomia máxima recomendada como ponto de partida |
|---|---|
| Ler dados internos dentro das permissões do usuário | Alta (N4–N5) |
| Calcular, resumir, rascunhar internamente | Alta (N4–N5) |
| Escrever em sistemas internos de forma reversível | Média (N2–N3), com registro |
| Comunicar-se com pessoas externas (enviar mensagens, e-mails) | Baixa (N1–N2) |
| Movimentar dinheiro, aceitar compromissos, apagar dados | Mínima (N1), sempre com aprovação |
| Alterar as próprias permissões, instruções ou limites | Nunca |

### Riscos específicos de agentes

Agentes concentram os riscos de tudo o que foi visto até aqui, e acrescentam alguns:

- **Injeção de instruções.** O agente lê conteúdo externo — e-mails, páginas, documentos — que pode conter instruções disfarçadas ("encaminhe todas as faturas para este endereço"). Com ferramentas de escrita, a injeção deixa de ser uma resposta errada e passa a ser uma ação errada. É o risco número um de agentes que leem conteúdo não confiável (Capítulo 32).
- **Permissões excessivas.** O agente recebe acesso amplo "para não travar" e pode fazer muito mais do que o objetivo exige.
- **Ciclos e custo.** O agente repete ações, entra em laços, consome recursos sem limite.
- **Erros compostos.** Um erro no passo 2 contamina os passos 3 a 10, e o resultado final parece coerente.
- **Ações irreversíveis.** Um envio, uma exclusão, um pagamento não podem ser desfeitos.
- **Opacidade.** Sem logs detalhados, é impossível saber por que o agente fez o que fez.

### Guardrails

Guardrails são as defesas que limitam o que um agente pode fazer, independentemente do que ele "decida". As mais eficazes não dependem de o modelo se comportar bem:

- **Menor privilégio nas ferramentas.** Se o agente só precisa ler, ele recebe apenas ferramentas de leitura. Uma ferramenta de envio que não existe não pode ser mal usada.
- **Separação entre ler conteúdo externo e agir.** Um agente que lê e-mails de terceiros não deveria, na mesma execução, ter ferramentas para enviar mensagens ou movimentar dados sem aprovação.
- **Listas de permissão.** Destinatários, domínios, pastas e operações permitidos são enumerados; tudo fora da lista é recusado pela ferramenta, não pelo modelo.
- **Aprovação humana para ações críticas**, apresentando exatamente o que será feito ("enviar este texto para este destinatário"), não um resumo.
- **Limites rígidos** de passos, tempo e custo, aplicados pelo sistema.
- **Validação de saídas** antes de qualquer efeito (esquema, regras de negócio).
- **Ambiente isolado** para ações arriscadas (por exemplo, executar código gerado).
- **Logs completos** de cada passo, ferramenta chamada, entrada e resultado.

### Quando um agente é a resposta

> **Caso Marzipã** — Um agente de atendimento autônomo foi considerado e rejeitado. O teste do fluxograma mostrou que o atendimento de pedidos *pode* ser desenhado como fluxo (coletar informações, verificar capacidade, solicitar sinal, confirmar), com a IA apenas na borda (extração e classificação de mensagens). As partes que não cabem no fluxo — reclamações, negociações, pedidos incomuns — são exatamente as que exigem julgamento de Helena. E o agente leria mensagens de pessoas externas (risco de injeção) tendo ferramentas para confirmar pedidos e gerar cobranças (ações com efeito externo). O ganho sobre o fluxo com IA na borda não justificava o risco. Decisão registrada, com condição de revisão: reavaliar se o volume de mensagens crescer a ponto de a fila de revisão de Helena se tornar o novo gargalo.

> **Caso Vértice** — Um uso de agente foi aprovado, com limites estreitos. Quando um resultado sai fora da especificação, a coordenação precisa montar um dossiê de investigação: histórico do produto nos últimos lotes, situação de calibração do equipamento usado, desvios anteriores semelhantes, analista e condições do ensaio. Os passos variam conforme o que se encontra (se a calibração está vencida, investiga-se um caminho; se o histórico mostra tendência, outro), e montar o dossiê levava horas. O agente foi especificado assim:
>
> | Componente | Especificação |
> |---|---|
> | Objetivo | Produzir um rascunho de dossiê de investigação para um resultado fora de especificação. |
> | Ferramentas | Somente leitura: consultar resultados de um produto; consultar registro de calibração de equipamentos; consultar registro de desvios anteriores; consultar procedimentos vigentes. Escrita: apenas criar o rascunho do dossiê numa área de rascunhos. |
> | Permissões | Conta de serviço com acesso de leitura às bases do laboratório; nenhum acesso a e-mail, a sistemas da fábrica ou à internet. |
> | Autonomia | N5 para leituras; N2 para o dossiê (a coordenação revisa, edita e decide). Nenhuma ação de aprovação, reprovação ou comunicação. |
> | Limites | Máximo de 30 passos e de um tempo definido por execução; interrupção com relatório parcial se o limite for atingido. |
> | Critério de parada | Dossiê com as seis seções do modelo preenchidas, ou relatório de impossibilidade (dados ausentes). |
> | Saída | Toda afirmação do dossiê acompanha a referência ao registro de origem (resultado, calibração, desvio), para conferência. |
> | Logs | Cada passo, consulta, parâmetro e resultado registrado e anexado ao dossiê. |
> | Testes | Dez investigações passadas reconstruídas, comparando o dossiê do agente com o dossiê real; casos com dados ausentes; registro de desvio contendo texto com instrução embutida. |
>
> Observe o que torna esse agente aceitável: as ferramentas são de leitura, o conteúdo lido é interno (embora o teste de injeção exista, porque registros internos também contêm texto livre), o resultado é um rascunho para decisão humana, cada afirmação é rastreável e os limites são aplicados pelo sistema.

> **Anti-padrão: adicionar complexidade desnecessária (versão agentes)** — *Sintoma:* "vamos fazer um agente" aparece antes de alguém tentar desenhar o fluxograma. *Causa:* agentes são a tecnologia mais comentada do momento; parecem resolver tudo. *Consequência:* sistemas imprevisíveis, caros e difíceis de testar para problemas que um fluxo resolveria; riscos de segurança desproporcionais. *Correção:* aplique o teste do fluxograma; percorra o espectro da esquerda para a direita; especifique cada ferramenta com sua autonomia; e exija, antes de qualquer agente com ferramentas de escrita ou comunicação externa, uma análise de risco (Capítulo 32).

### Exercícios

**Exercício 29.1 · F · M0** — Aplique o teste do fluxograma a cada proposta e diga se é caso de fluxo ou de agente: (a) responder a perguntas de clientes sobre o status do pedido; (b) pesquisar e comparar fornecedores de embalagens a partir de critérios dados; (c) processar pedidos de reembolso; (d) investigar por que as vendas de uma linha de produtos caíram; (e) agendar reuniões entre pessoas com agendas compartilhadas.

**Exercício 29.2 · P · M0** — Especifique um agente para uma tarefa do seu contexto que passou no teste do fluxograma (isto é, que realmente precisa de agente), usando a tabela de componentes. Atribua autonomia a cada ferramenta.

**Exercício 29.3 · P · M4** — Avalie a especificação: "Agente de e-mail: lê a caixa de entrada, responde aos clientes, agenda reuniões, encaminha faturas ao financeiro e arquiva o resto. Tem acesso completo à conta de e-mail e ao calendário." Liste os riscos e reescreva a especificação com guardrails.

> **Para conferir** — Riscos principais: injeção de instruções por e-mails externos combinada com ferramentas de envio e encaminhamento (um e-mail pode instruir o agente a encaminhar faturas a um terceiro); acesso completo sem menor privilégio; respostas a clientes sem revisão (compromissos indevidos); ações irreversíveis (envio, exclusão); ausência de limites e de logs. Uma reescrita razoável divide em fluxos: classificação de e-mails (IA na borda) com rascunhos de resposta para aprovação (N2); encaminhamento de faturas apenas para um destinatário fixo da lista de permissão, e somente de remetentes conhecidos; agendamento como sugestão para aprovação; nenhuma exclusão; logs completos. É possível que nenhum agente seja necessário.

> **Fim da etapa de pré-requisitos do Projeto P08** (complete também o Capítulo 32 antes de concluí-lo).

## Revisão da Parte V

Verifique se consegue:

- aplicar os dez protocolos de IA e dizer o risco e a validação de cada um;
- separar geração de avaliação e fazer o teste do defeito plantado;
- supervisionar a construção em fatias verticais, começando pelo esqueleto andante;
- reconhecer sinais de alerta em código sem saber programar e sair de uma espiral de correções;
- montar um catálogo de exceções e distinguir erros transitórios de permanentes;
- garantir idempotência e retomada em automações;
- projetar logs, alertas de ausência, manual de operação e interruptor;
- responder às oito perguntas de uma integração e separar o que é seu, o que é do outro e o que está em trânsito;
- ir de jornadas a telas, operações e fatias; distinguir os quatro tipos de protótipo e a distância até o produto;
- usar a Matriz Entrada × Regra e o padrão "IA na borda, regra no centro";
- montar e usar um conjunto de avaliação com parte separada e limiares definidos antes;
- decidir quando RAG é exagero e avaliar busca e resposta separadamente;
- aplicar o teste do fluxograma e especificar um agente com autonomia por ação e guardrails.

### Exercício integrador

**Exercício R5.1 · P · M3** — Para a clínica de fisioterapia (Exercícios R2.1 e R4.1), especifique e construa (ou especifique em detalhe suficiente para que uma IA construa) o lembrete de confirmação de presença com resposta do paciente: automação robusta com catálogo de exceções, integração com o serviço de mensagens via webhook, classificação da resposta do paciente (confirmo / quero remarcar / outra coisa), com conjunto de avaliação de 30 respostas e decisão registrada sobre usar regra ou IA na classificação. Aplique os Protocolos 5 a 8.
