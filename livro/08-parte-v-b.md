## Capítulo 24 — Automação robusta

### Da demonstração à operação

No Capítulo 15, você conheceu os dez elementos de uma automação e viu que a maioria das automações define apenas três: gatilho, condição e ação. Este capítulo trata dos outros sete — exceções, erros, logs, recuperação, idempotência, estado e supervisão — e de como projetá-los. É a diferença entre uma automação que funciona quando você está olhando e uma que funciona às três da manhã de um sábado, quando o serviço de mensagens está instável e chegou um arquivo com formato diferente.

O caso deste capítulo é a fase 2 do Vértice: a importação automática dos arquivos que os instrumentos do laboratório já exportam, eliminando a impressão e a digitação de resultados.

### Começar pelo catálogo de exceções

Antes de projetar qualquer tratamento, construa um **catálogo de exceções**: para cada entrada e cada etapa da automação, pergunte "o que pode chegar ou acontecer diferente do normal?". Use três fontes: o Process Map (as exceções que já acontecem hoje), os dados reais (examine dezenas de exemplos verdadeiros, não três) e a imaginação sistemática (formato, conteúdo, tempo, duplicidade, ausência, volume).

> **Caso Vértice** — Catálogo de exceções da importação (trecho), montado após examinar 120 arquivos reais de três instrumentos:
>
> | # | Exceção | Frequência observada | Tratamento |
> |---|---|---|---|
> | E1 | Arquivo com formato diferente (versão de software do instrumento atualizada) | rara | Rejeitar o arquivo inteiro; alertar Rodrigo; não importar nada parcial. |
> | E2 | Código de amostra inexistente no sistema | ocasional | Colocar o resultado em quarentena; avisar a analista; não criar amostra automaticamente. |
> | E3 | Código de amostra existente, mas em estado que não aceita resultado (já aprovada) | rara | Quarentena; avisar a coordenação. |
> | E4 | Mesmo arquivo importado de novo | ocasional | Ignorar, registrando "arquivo já importado". |
> | E5 | Resultado repetido para o mesmo ensaio (reensaio legítimo) | comum | Registrar como novo resultado vinculado, marcado como "reensaio"; não sobrescrever. |
> | E6 | Valor fora da faixa física possível (pH 23) | rara | Quarentena; avisar a analista. |
> | E7 | Valor atípico, mas possível (muito longe do histórico do produto) | ocasional | Importar, marcar como "atípico" para conferência obrigatória antes da revisão. |
> | E8 | Unidade diferente da esperada | rara | Rejeitar o resultado; nunca converter automaticamente. |
> | E9 | Arquivo incompleto (gravação interrompida) | rara | Rejeitar; aguardar nova versão do arquivo. |
> | E10 | Qualquer situação não prevista | — | Quarentena e alerta. Nunca seguir adiante "do jeito que der". |
>
> A exceção E7 merece destaque. Ela existe porque a digitação, que a automação substitui, tinha uma função escondida: a analista percebia valores estranhos ao digitar (Capítulo 15). A automação precisava preservar essa função de forma explícita.

Três decisões de projeto aparecem no catálogo e valem para quase toda automação:

- **Rejeitar inteiro ou processar item a item?** Quando a estrutura do arquivo está errada (E1, E9), nada nele é confiável: rejeite inteiro. Quando a estrutura está certa e um item tem problema (E2, E6), processe os outros e separe o problemático.
- **Quarentena.** Itens que não podem ser processados automaticamente vão para uma **fila de quarentena** (também chamada de fila de exceções), com o motivo registrado, para tratamento humano. A quarentena é o "caminho padrão para o desconhecido" do Capítulo 10, implementado.
- **Nunca corrigir silenciosamente.** Converter unidades, completar campos, ajustar formatos por suposição produz dados que parecem corretos e não são. Se a automação não sabe com certeza, ela não corrige; separa e avisa.

### Erros: transitórios e permanentes

Exceções são situações previstas nos dados ou no processo. **Erros** são falhas na execução: um serviço que não responde, uma conexão que cai, uma permissão negada. Para tratá-los, a distinção principal é:

- **Erros transitórios** — tendem a se resolver sozinhos (serviço sobrecarregado, conexão instável, limite de requisições). Tratamento: **tentar de novo**, com intervalos crescentes entre as tentativas (por exemplo, 1 minuto, 5 minutos, 30 minutos), até um limite; depois, alertar.
- **Erros permanentes** — não se resolvem repetindo (credencial inválida, dado rejeitado pela regra do destino, recurso inexistente). Tratamento: **não repetir**; registrar, alertar e, se for um item, enviar para quarentena.

A tabela de códigos de status do Capítulo 13 é, em boa parte, um guia para essa classificação. Repetir erros permanentes desperdiça recursos e pode causar bloqueios; não repetir erros transitórios faz a automação desistir à toa.

### Idempotência

Uma operação é **idempotente** quando executá-la várias vezes produz o mesmo efeito que executá-la uma vez. É uma das propriedades mais importantes de qualquer automação que mude algo no mundo, porque **toda automação, cedo ou tarde, vai executar a mesma coisa mais de uma vez**: o gatilho dispara duas vezes, o webhook chega duplicado, alguém reprocessa manualmente depois de uma falha, a execução é interrompida no meio e recomeça.

Quatro técnicas garantem idempotência:

1. **Chave de idempotência.** Cada operação tem um identificador único derivado do que ela representa (não da hora em que foi executada). Antes de agir, verifica-se se uma operação com essa chave já foi feita. No Vértice: a chave de cada resultado importado é a combinação de código da amostra, ensaio, instrumento e data e hora da medição registradas pelo próprio instrumento.
2. **Registro de itens processados.** Guardar a lista do que já foi processado (arquivos, eventos, mensagens) e consultá-la antes de processar. No Vértice: uma impressão digital do conteúdo de cada arquivo importado (E4).
3. **Criar ou atualizar, em vez de sempre criar.** Se já existe, atualiza; se não existe, cria — em vez de criar de novo.
4. **Usar as garantias do outro lado.** Muitos serviços aceitam uma chave de idempotência na requisição (Capítulo 13). Use-a sempre que existir.

Um teste simples revela se uma automação é idempotente: **execute-a duas vezes seguidas com a mesma entrada**. Se o mundo mudou duas vezes — duas mensagens, dois registros, duas cobranças —, ela não é.

> **▲ Avançado — gravar e avisar sem inconsistência** — Um problema clássico aparece quando uma operação precisa, ao mesmo tempo, mudar dados no banco e avisar outro sistema (enviar uma mensagem, chamar uma API). Se ela grava e depois avisa, uma falha entre os dois passos deixa o dado mudado sem aviso; se avisa e depois grava, uma falha deixa um aviso sobre algo que não aconteceu. Uma solução muito usada é registrar a intenção de avisar *na mesma transação* que muda os dados — numa tabela de "mensagens a enviar" — e ter um processo separado que lê essa tabela, envia e marca como enviada, de forma idempotente. Esse arranjo, conhecido como padrão *outbox* (caixa de saída), troca a ilusão de simultaneidade por uma garantia explícita: tudo o que foi gravado será avisado pelo menos uma vez, e o receptor trata duplicatas. Ao delegar operações desse tipo, pergunte explicitamente à IA como ela garante a consistência entre gravar e avisar.

### Estado e retomada

Automações que processam vários itens precisam lembrar onde estão. Se a importação de um arquivo com 40 resultados falha no 23º, o que acontece quando ela recomeça? Sem **estado por item**, há duas opções ruins: começar do zero (e duplicar os 22 primeiros, se não for idempotente) ou abandonar o arquivo (e perder os 18 restantes).

A solução é registrar o estado de cada item ("importado", "em quarentena", "pendente") e fazer a automação, ao recomeçar, processar apenas os pendentes. Junto com a idempotência, isso torna a automação **retomável**: pode ser interrompida em qualquer ponto e continuar sem dano.

### Logs que servem para alguma coisa

Um log útil responde, para qualquer execução, às perguntas: o que entrou, o que foi feito, o que deu certo, o que deu errado e por quê. Para isso, cada registro deve ter campos estruturados, não apenas texto livre:

```
data_hora: 2026-07-02T09:14:07
execucao_id: imp-20260702-0914
etapa: importar_resultado
item: amostra 26-04471 / ensaio pH / instrumento PH-02
resultado: quarentena
motivo: E6 valor_fora_faixa_fisica (valor=23.1, faixa=0-14)
duracao_ms: 38
```

Com campos estruturados, os logs podem ser filtrados, contados e transformados em métricas (Capítulo 33). Três cuidados: registre o suficiente para diagnosticar sem precisar reproduzir; **não registre segredos nem dados pessoais desnecessários**; e mantenha um identificador de execução que permita juntar todos os registros de uma mesma rodada.

### Recuperação e manual de operação

Para cada alerta que a automação pode disparar, alguém precisa saber o que fazer. Isso é registrado num **manual de operação** (*runbook*): para cada situação, o sintoma, a causa provável, os passos de diagnóstico, a ação e como confirmar que foi resolvido.

> **Caso Vértice** — Trecho do manual de operação:
>
> **Alerta: "arquivo rejeitado por formato (E1)".** *Causa provável:* atualização de software do instrumento. *Diagnóstico:* abrir o arquivo na pasta `rejeitados/`; comparar o cabeçalho com o modelo em `docs/formatos/`. *Ação:* registrar os resultados manualmente pela tela de registro (o processo manual continua disponível); abrir chamado para Rodrigo ajustar o leitor. *Confirmação:* os resultados aparecem na fila de revisão; o arquivo é movido para `rejeitados/tratados/` com uma nota.

Observe a ação: **o processo manual continua disponível**. Toda automação crítica deve ter um caminho alternativo para quando ela falhar, e as pessoas precisam saber usá-lo. Uma automação que eliminou completamente a capacidade de fazer o trabalho à mão transformou cada falha em parada.

### Supervisão

Uma automação sem supervisão degrada em silêncio. Quatro mecanismos, proporcionais ao risco:

- **Alerta de ausência.** Avisa quando algo que deveria acontecer não aconteceu ("nenhum arquivo importado desde ontem às 14h, num dia útil"). É o alerta mais esquecido e um dos mais úteis: a automação que parou não gera erros — simplesmente para.
- **Resumo periódico.** Um relatório diário ou semanal com o que foi processado, o que foi para quarentena, o que falhou.
- **Auditoria por amostragem.** Periodicamente, uma pessoa confere uma amostra do que a automação fez contra a fonte original. No Vértice: uma vez por semana, cinco resultados importados são comparados com o arquivo e com o visor do instrumento.
- **Interruptor.** Uma forma simples e conhecida de pausar a automação imediatamente, sem precisar de quem a construiu. Se algo está dando errado em escala, a primeira ação é parar o dano.

### O teste da automação robusta

Antes de colocar uma automação em operação, verifique:

- [ ] Cada exceção do catálogo tem um caso de teste, e o tratamento foi observado.
- [ ] A automação foi executada duas vezes seguidas com a mesma entrada, sem efeito duplicado.
- [ ] A automação foi interrompida no meio e retomada, sem perda nem duplicação.
- [ ] Cada erro transitório simulado gerou novas tentativas; cada erro permanente simulado não gerou.
- [ ] Os logs de uma execução com falha permitem diagnosticar a falha sem reproduzi-la.
- [ ] O alerta de ausência foi testado (a automação foi desligada e o alerta chegou).
- [ ] O manual de operação foi seguido por alguém que não construiu a automação.
- [ ] O interruptor funciona e alguém além do construtor sabe usá-lo.
- [ ] O processo manual alternativo existe e foi praticado.

### Exercícios

**Exercício 24.1 · F · M0** — Para a automação de lembretes de Lucas, monte o catálogo de exceções com pelo menos oito itens, com frequência estimada e tratamento.

**Exercício 24.2 · P · M0** — Classifique cada erro como transitório ou permanente e diga o tratamento: (a) o serviço de mensagens respondeu 503; (b) a planilha de contas foi renomeada e a automação não a encontra; (c) a API respondeu 429; (d) a credencial do e-mail expirou; (e) a conexão caiu no meio do envio.

> **Para conferir** — (a) Transitório: repetir com intervalo crescente. (b) Permanente: não repetir; alertar — é um erro de configuração. (c) Transitório: esperar e repetir mais devagar. (d) Permanente até alguém renovar a credencial: não repetir; alertar o responsável. (e) Transitório, com um cuidado: a mensagem pode ter sido enviada antes de a conexão cair. Antes de repetir, verifique se o envio aconteceu (ou use chave de idempotência), para não duplicar.

**Exercício 24.3 · P · M0** — Projete a idempotência da automação "quando um pagamento é confirmado, enviar à cliente uma mensagem de agradecimento e mudar o pedido para confirmado". Qual é a chave de idempotência? O que acontece se o webhook chegar três vezes? E se a mensagem for enviada, mas a mudança de status falhar?

> **Para conferir** — A chave natural é o identificador do evento de pagamento (ou o identificador da cobrança, se só pode haver um pagamento por cobrança). Antes de agir, verifica-se se esse evento já foi processado. A ordem das ações importa: mudar o status primeiro (que é a fonte da verdade) e enviar a mensagem depois, registrando que foi enviada. Se a mensagem for enviada e a mudança de status falhar, uma nova tentativa reenviará a mensagem — por isso o registro "mensagem de confirmação enviada para o pedido X" deve ser consultado antes do envio. Uma resposta que diz apenas "verificar se o pedido já está confirmado" funciona para o status, mas não protege contra mensagens duplicadas.

**Exercício 24.4 · A · M3** — Implemente (ou especifique para implementação por IA) uma automação real do seu contexto com os dez elementos, e aplique o teste da automação robusta inteiro. Registre quais itens falharam na primeira vez.

> **Fim da etapa de pré-requisitos do Projeto P04.** Você já pode fazer o Projeto P04 — Automação robusta.

## Capítulo 25 — Integrações

### Integrar é decidir sobre fronteiras

No Capítulo 13, você aprendeu como sistemas conversam: APIs, webhooks, sincronização. Este capítulo ensina a **projetar** uma integração — o que é, essencialmente, tomar uma série de decisões sobre a fronteira entre dois sistemas que você não controla inteiramente.

A competência de **Integration** é especialmente importante porque integrações são o lugar onde os sistemas mais falham. Cada lado funciona bem sozinho; os problemas aparecem na passagem: um campo com nome diferente, um identificador que não corresponde, uma resposta que demora, um evento que não chega.

### As oito perguntas de uma integração

Toda integração precisa responder a oito perguntas, e a especificação dela é, basicamente, o registro dessas respostas.

1. **Que evento ou necessidade dispara a troca?** (Pagamento confirmado; laudo aprovado; todo dia às 18h.)
2. **Em que direção a informação flui?** (De A para B; de B para A; nos dois sentidos — evite.)
3. **Qual é a fonte da verdade de cada campo?** (O status do pagamento é do serviço de pagamentos; o status do pedido é do sistema da Marzipã.)
4. **Como os identificadores se correspondem?** (O pedido 1.284 da Marzipã é a cobrança cob_8841 no serviço de pagamentos: onde fica essa correspondência?)
5. **Que transformações são necessárias?** (Formatos de data, unidades, códigos de estado diferentes nos dois lados.)
6. **O que acontece em cada tipo de falha?** (Tabela de erros e tratamentos.)
7. **Como se detecta e corrige divergência?** (Conciliação periódica.)
8. **Como se fica sabendo de mudanças no contrato do outro lado?** (Versões, avisos, monitoramento.)

### Mapear campos e identificadores

A parte mais trabalhosa de uma integração costuma ser o **mapeamento**: para cada informação que passa, de onde vem, para onde vai, com que transformação.

> **Caso Marzipã** — Mapeamento da integração de pagamentos:
>
> | Sistema da Marzipã | Direção | Serviço de pagamentos | Transformação / regra |
> |---|---|---|---|
> | `pedido.id` | → | `referencia_externa` | Prefixar com "pedido-" |
> | `pedido.valor_sinal` | → | `valor` | Duas casas decimais; nunca zero ou negativo |
> | `pedido.prazo_sinal` | → | `vencimento` | Formato AAAA-MM-DD |
> | `pagamento.cobranca_id` | ← | `id` | Guardar na criação da cobrança |
> | `pagamento.status` | ← | `status` | `paga` → `confirmado`; `expirada` → `expirado`; `estornada` → alerta para Helena |
> | `pagamento.valor_pago` | ← | `valor_pago` | Se diferente do valor do sinal → não confirmar; alerta |
>
> A correspondência de identificadores fica guardada dos dois lados: a Marzipã guarda o `id` da cobrança; o serviço guarda a `referencia_externa`. Isso permite conciliar em qualquer direção.

Observe a linha do estorno: o mapeamento revelou um estado do outro sistema que o modelo da Marzipã não previa. Integrações frequentemente expõem estados e casos que o seu modelo ignorava. Quando isso acontecer, atualize o modelo e as regras — não "encaixe" o estado novo no mais parecido.

### Padrões de integração

Há poucas formas fundamentais de integrar sistemas, e cada uma tem seu lugar.

| Padrão | Como funciona | Bom para | Cuidados |
|---|---|---|---|
| **Direta por API** | Um sistema chama a API do outro. | Integrações sob seu controle, com lógica específica. | Tratamento de erros, credenciais, mudanças de contrato. |
| **Por eventos (webhook)** | Um sistema avisa o outro quando algo acontece. | Reagir rápido a acontecimentos externos. | Assinatura, duplicatas, ordem, conciliação. |
| **Por plataforma de automação** | Uma plataforma intermediária conecta os dois. | Integrações padronizadas entre serviços conhecidos, sem código. | Tratamento de exceções da plataforma; custo por execução; dependência. |
| **Por troca de arquivos** | Um sistema gera um arquivo; o outro o lê de uma pasta ou servidor. | Sistemas antigos, instrumentos, grandes volumes periódicos. | Formato, arquivos incompletos, duplicidade, nomes. |
| **Por banco de dados compartilhado** | Dois sistemas leem e escrevem nas mesmas tabelas. | Raramente recomendável. | Acoplamento forte; um sistema pode quebrar o outro; regras contornadas. |

A troca de arquivos parece antiquada, mas é exatamente o que o Vértice usa na fase 2: os instrumentos exportam arquivos, e a importação os lê. É simples, auditável e não exige que os instrumentos tenham API. Não descarte uma solução por parecer pouco moderna.

### Quando o outro lado falha

O sistema do outro lado vai ficar fora do ar, responder devagar, mudar o formato ou rejeitar requisições. A pergunta de projeto é: **o que o meu sistema faz, e em que estado fica, enquanto isso?**

> **Caso Vértice** — Fase 3: quando um laudo é aprovado, o sistema do laboratório precisa avisar o sistema de lotes da fábrica para liberar o lote. O projeto separou dois estados que, numa versão ingênua, seriam um só:
>
> ```
>  LAUDO:      aprovado ───────────────────────────────────────────────────────────
>  LIBERAÇÃO:  pendente_envio ──► enviada ──► confirmada_pelo_sistema_de_lotes
>                   │                │
>                   │ falha          │ sem confirmação em 15 min
>                   ▼                ▼
>               nova tentativa   consulta o estado do lote via API
>               (1, 5, 30 min)   (o lote pode ter sido liberado e a resposta, perdida)
>                   │
>                   │ esgotadas as tentativas
>                   ▼
>               alerta à coordenação + instrução de liberação manual no sistema de lotes
> ```
>
> O laudo aprovado é um fato do laboratório e não depende da integração. A liberação do lote é um fato do sistema de lotes, e o laboratório só a considera concluída quando o sistema de lotes a confirma. Durante uma falha, o painel mostra "aprovado — liberação pendente", e a produção sabe exatamente o que está acontecendo. Uma conciliação diária compara laudos aprovados com lotes liberados e aponta qualquer divergência.

Essa separação — **o que é meu, o que é do outro e o que está em trânsito** — é a ideia mais útil para projetar integrações. Ela evita o erro clássico de marcar algo como concluído localmente quando a outra ponta ainda não confirmou.

### Testar integrações

Integrações são difíceis de testar porque dependem de sistemas que você não controla. Quatro práticas ajudam:

- **Ambientes de teste do fornecedor.** Muitos serviços oferecem um ambiente de testes (às vezes chamado de *sandbox*) com dados fictícios e sem efeitos reais. Use-o sempre que existir.
- **Simulação do outro lado.** Para testar falhas, substitua o serviço externo por um simulador que responde o que você quiser: erro 500, demora de 30 segundos, formato inesperado, webhook duplicado.
- **Testes de contrato.** Verifique periodicamente se o outro lado ainda responde no formato esperado — por exemplo, uma consulta diária que confere se os campos usados continuam existindo.
- **Conciliação como teste contínuo.** A conciliação periódica é, na prática, um teste que roda todo dia em produção. Divergências encontradas são defeitos ou falhas a investigar.

### Exercícios

**Exercício 25.1 · F · M0** — Responda às oito perguntas de integração para "quando Lucas paga uma conta pelo aplicativo do banco, a planilha de contas deve marcar a conta como paga". Que dificuldades aparecem na pergunta 4?

**Exercício 25.2 · P · M0** — Monte o mapeamento de campos de uma integração entre um formulário de inscrição online e uma planilha de participantes de um evento, incluindo transformações e o que fazer com inscrições duplicadas.

**Exercício 25.3 · P · M4** — Uma pessoa descreve: "Quando o laudo é aprovado, o sistema chama a API do sistema de lotes e marca o lote como liberado no nosso painel." Aponte os problemas dessa descrição à luz do caso Vértice e reescreva-a.

> **Para conferir** — Problemas: o painel marca o lote como liberado sem confirmação do sistema de lotes; não há tratamento para o sistema de lotes fora do ar ou para respostas perdidas; não há estados de trânsito; não há novas tentativas nem alerta; não há conciliação. Reescrita: "Quando o laudo é aprovado, a liberação entra em 'pendente de envio'. O sistema chama a API do sistema de lotes; com resposta de sucesso, passa a 'enviada' e só se torna 'confirmada' quando o sistema de lotes confirma o novo estado do lote. Em falha, há novas tentativas com intervalo crescente; esgotadas, alerta à coordenação com instrução de liberação manual. Uma conciliação diária compara laudos aprovados e lotes liberados."

**Exercício 25.4 · A · M3** — Implemente (ou especifique para implementação por IA) uma integração real entre dois serviços que você usa, incluindo conciliação. Teste com o serviço de destino simulado em pelo menos três tipos de falha.

> **Fim da etapa de pré-requisitos do Projeto P05.** Você já pode fazer o Projeto P05 — Integração.

## Capítulo 26 — Da arquitetura ao protótipo: aplicações

### Juntar as camadas

Uma **aplicação** junta tudo o que foi visto até aqui: usuários, interfaces, lógica, dados, integrações e serviços externos. Este capítulo ensina a sair de uma arquitetura no papel e chegar a um protótipo funcional, e depois a reconhecer a distância entre esse protótipo e um produto.

O exemplo é o sistema de pedidos da Marzipã, cuja arquitetura foi decidida ao longo dos capítulos anteriores.

### Oito passos da arquitetura ao protótipo

**1. Jornadas principais.** Liste as tarefas que cada tipo de usuário precisa fazer, do começo ao fim, em linguagem de usuário. Não comece pelas telas; comece pelo que as pessoas precisam conseguir fazer.

> **Caso Marzipã** — Jornadas:
>
> - J1 — Helena transforma um rascunho de pedido (vindo da triagem de mensagens) em pedido registrado.
> - J2 — Helena registra um pedido manualmente (cliente ligou ou veio ao balcão).
> - J3 — Helena registra uma alteração pedida pela cliente.
> - J4 — A confeiteira vê o que precisa produzir hoje e amanhã, com todos os detalhes.
> - J5 — O entregador vê as entregas do dia, com endereço, horário e contato.
> - J6 — Helena vê a agenda da semana e a capacidade restante de cada dia.

**2. Telas e estados.** Para cada jornada, defina as telas necessárias. Para cada tela: que dados mostra, que ações permite, que validações faz e — o ponto mais esquecido — quais são seus **estados**: carregando, vazia, com dados, com erro, ação bem-sucedida.

| Tela | Usuário | Mostra | Ações | Estados especiais |
|---|---|---|---|---|
| Rascunhos | Helena | Rascunhos pendentes, com campos destacados quando incertos | Abrir, descartar | Vazia ("nenhum rascunho"); erro de carregamento |
| Pedido (edição) | Helena | Campos do pedido; capacidade do dia em tempo real | Salvar, solicitar sinal, cancelar | Capacidade excedida; dia sem capacidade definida; produto sem peso |
| Produção do dia | Confeiteira | Itens a produzir, ordenados por horário de entrega; alterações recentes destacadas | Marcar item como pronto | Pedido alterado depois de impresso (destaque forte) |
| Entregas do dia | Entregador | Endereço, janela, contato, observações de transporte | Marcar como entregue; registrar problema | Sem entregas; entrega reagendada |
| Agenda | Helena | Dias da semana com UTs confirmadas, reservadas e restantes | Ajustar capacidade de um dia | Dia acima de 90% destacado |

Repare que a tela da confeiteira não mostra preço nem sinal, e a do entregador não mostra sabor: é a abstração por papel do Capítulo 7, implementada.

**3. Modelo de dados.** Já feito nos Capítulos 9 e 12. Confira se cada tela tem os dados de que precisa e se não há telas pedindo dados que o modelo não tem.

**4. Operações do backend.** Liste as operações que as telas e integrações vão chamar, cada uma com entrada, regras, efeitos e erros. Essa lista é a especificação da lógica.

| Operação | Chamada por | Regras principais | Erros |
|---|---|---|---|
| `criar_pedido` | Tela de pedido | Antecedência; capacidade (verificação atômica); campos obrigatórios; estado inicial "aguardando sinal" | Capacidade excedida; dia sem capacidade; dados inválidos |
| `alterar_pedido` | Tela de pedido | Tabela de decisão de alterações por estado; recálculo de UTs | Estado não permite; capacidade excedida |
| `confirmar_pagamento` | Webhook de pagamento | Assinatura; duplicata; valor confere; estado "aguardando sinal" | Assinatura inválida; valor divergente; pedido em outro estado |
| `listar_producao` | Tela de produção | Pedidos confirmados ou em produção do dia; ordem por horário | — |
| `expirar_pedidos` | Automação diária | Pedidos aguardando sinal com prazo vencido → expirado; libera capacidade | — |

**5. Integrações.** Já projetadas no Capítulo 25 (pagamentos) e a projetar no Capítulo 27 (triagem com IA). Liste-as com seus estados de trânsito.

**6. Plano de fatias.** Ordene a construção em fatias verticais (Capítulo 23), começando pelo esqueleto andante. Para a Marzipã: fatia 0 = registrar pedido simples e listar; fatia 1 = capacidade; fatia 2 = tela de produção; fatia 3 = pagamentos; fatia 4 = alterações; fatia 5 = rascunhos vindos da triagem.

**7. Esqueleto andante.** Construa, teste e coloque à disposição de pelo menos um usuário real — ainda que só para olhar.

**8. Iterar com usuários.** A cada fatia, observe usuários reais executando jornadas reais (próxima seção).

### Tipos de protótipo

"Protótipo" é uma palavra usada para coisas muito diferentes. Vale distinguir quatro:

| Tipo | O que é | Serve para | Não serve para |
|---|---|---|---|
| **Protótipo de tela** | Telas desenhadas ou clicáveis, sem lógica real. | Validar jornadas e entendimento com usuários, rapidamente. | Validar regras, desempenho, integrações. |
| **Protótipo funcional** | Lógica e dados reais, em ambiente de teste, com dados fictícios. | Validar regras, fluxos e integração entre camadas. | Afirmar que o sistema está pronto para operação. |
| **Piloto** | Uso real, por poucos usuários, por tempo limitado, com supervisão reforçada e caminho de volta. | Obter evidência de nível E3 (Capítulo 31). | Escala; ausência de supervisão. |
| **Produto** | Sistema em operação regular, com tudo o que isso exige. | Resolver o problema de forma sustentada. | — |

Com IA, um protótipo de tela pode ser feito em minutos, e um protótipo funcional em horas. Isso é uma enorme vantagem para aprender cedo — desde que ninguém confunda o protótipo com o produto.

### Testar com usuários

Antes de cada fatia importante ser considerada pronta, observe de três a cinco usuários reais executando uma jornada. O roteiro é simples:

1. Dê uma tarefa realista, sem explicar a tela ("uma cliente pediu para trocar o recheio do bolo de sábado; registre isso").
2. Peça que a pessoa pense em voz alta.
3. **Não ajude.** Anote onde hesita, onde erra, o que procura e não encontra, o que diz.
4. Ao final, pergunte o que foi mais difícil.

Poucos usuários costumam revelar os problemas mais graves de uma interface. O que você observa vale muito mais do que o que as pessoas dizem que fariam.

> **Anti-padrão: confundir protótipo com produto** — *Sintoma:* o protótipo que funcionou na demonstração passa a ser usado no dia a dia "provisoriamente", e o provisório se torna permanente. *Causa:* o protótipo resolve o caso feliz, e o resto parece detalhe. *Consequência:* o sistema opera sem autenticação adequada, sem cópia de segurança, sem tratamento de erros, sem logs, sem ninguém responsável — até o primeiro incidente sério. *Correção:* antes de qualquer uso real, percorra a lista abaixo e decida, item a item, o que é necessário para aquele nível de uso. Registre no Decision Log o que foi conscientemente deixado de fora e por quanto tempo.

A distância entre protótipo e produto, em itens:

| Item | No protótipo | No produto |
|---|---|---|
| Autenticação e permissões | Frequentemente ausentes ou simplificadas | Matriz de permissões implementada no backend |
| Dados | Fictícios | Reais, migrados, com qualidade verificada |
| Tratamento de erros | Caso feliz | Catálogo de exceções e erros tratados |
| Logs e alertas | Ausentes | Observabilidade proporcional ao risco |
| Cópias de segurança | Ausentes | Automáticas, com restauração testada |
| Segredos | Às vezes no código | Em cofre ou variáveis de ambiente |
| Desempenho | Não medido | Medido no volume esperado |
| Documentação | Ausente | Guia de uso e manual de operação |
| Responsável | Quem construiu | Dono definido, com substituto |
| Custo de operação | Desconhecido | Estimado e monitorado |
| Caminho de volta | Não pensado | Processo manual alternativo existe |

### Exercícios

**Exercício 26.1 · F · M0** — Para o sistema pessoal de Lucas, escreva as jornadas principais e, para cada uma, as telas (ou abas de planilha) necessárias, com seus estados especiais.

**Exercício 26.2 · P · M0** — Escreva a lista de operações do backend de uma aplicação simples de reservas de quadras (Exercício 9.5), com regras e erros de cada uma.

**Exercício 26.3 · P · M3** — Construa um protótipo de tela de uma jornada do seu projeto com ajuda de IA. Teste com duas pessoas usando o roteiro deste capítulo. Registre o que você mudaria.

**Exercício 26.4 · P · M0** — Para um protótipo seu (deste ou de projetos anteriores), percorra a tabela protótipo × produto e decida, para cada item, o que seria necessário antes de um piloto com usuários reais.

> **Fim da etapa de pré-requisitos do Projeto P06** (complete também o Capítulo 30 antes de concluí-lo).
