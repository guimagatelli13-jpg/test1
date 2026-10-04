# PARTE III — APRENDER A ENXERGAR TECNOLOGIA

Você não precisa se tornar especialista em tecnologia para resolver problemas com ela. Mas precisa reconhecer seus componentes, saber para que cada um serve, como se conectam, quando usar e quando não usar cada um — e como verificar se foram construídos corretamente. Sem isso, você não consegue especificar o que quer, não entende o que a IA constrói e não percebe quando algo está errado.

Esta parte apresenta os componentes de sistemas digitais como **conceitos**, não como produtos. Cada conceito importante termina numa **Ficha** com as mesmas nove perguntas, para consulta rápida. Leitores do Perfil C podem percorrer a parte rapidamente, concentrando-se nas fichas e nos blocos ▲ Avançado; leitores do Perfil A devem lê-la com calma, fazendo todos os exercícios F.

## Capítulo 11 — Anatomia de um sistema digital

### A estrutura que se repete

Quase todo sistema digital — de um aplicativo de banco a uma planilha com automações, de um sistema de laboratório a uma loja online — pode ser descrito pela mesma estrutura em camadas:

```
   USUÁRIO            a pessoa (ou outro sistema) que quer fazer algo
      │
      ▼
   INTERFACE          por onde o usuário interage: telas, formulários, mensagens
      │
      ▼
   LÓGICA             as regras: o que é permitido, o que calcular, o que fazer em seguida
      │
      ▼
   DADOS              o que o sistema lembra: registros, histórico, configurações
      │
      ▼
   INTEGRAÇÕES        conexões com outros sistemas
      │
      ▼
   SERVIÇOS EXTERNOS  pagamentos, mensagens, mapas, IA...
```

Essa estrutura é uma abstração — o tipo que o Capítulo 7 recomendou. Ela não descreve como nenhum sistema específico foi construído; descreve as funções que todo sistema precisa cumprir. Quando você olha para um sistema qualquer e se pergunta "onde está a interface, onde estão as regras, onde estão os dados?", começa a entendê-lo.

### Seguindo uma ação pelas camadas

A melhor forma de entender as camadas é seguir uma ação concreta por elas. Imagine que a Confeitaria Marzipã já tenha um pequeno sistema de pedidos, e Helena vai registrar um pedido novo.

1. **Usuário → interface.** Helena abre a tela de novo pedido no celular, escolhe a cliente, a data, o produto, e toca em "Salvar".
2. **Interface → lógica.** O aplicativo envia os dados do pedido para o servidor. Antes disso, a própria tela pode ter feito verificações simples: a data não está no passado, os campos obrigatórios estão preenchidos.
3. **Lógica.** No servidor, as regras são aplicadas: o produto exige três dias de antecedência? A data atende? Somando as unidades de trabalho deste pedido às dos pedidos confirmados do dia, a capacidade é respeitada?
4. **Lógica → dados.** Se tudo estiver certo, o pedido é gravado no banco de dados com o status "aguardando sinal" e um identificador único.
5. **Lógica → integrações → serviços externos.** O sistema pede ao serviço de pagamentos que gere uma cobrança do sinal, e ao serviço de mensagens que envie à cliente o resumo do pedido com o link de pagamento.
6. **Resposta.** O servidor responde ao aplicativo: "pedido 1.284 registrado, aguardando sinal". A tela mostra a confirmação a Helena.

Cada passo pode falhar, e cada falha tem um lugar. Se a mensagem não chegou à cliente, o problema está na integração ou no serviço externo, não no banco de dados. Se o sistema aceitou um pedido além da capacidade, o problema está na lógica. Saber em que camada algo aconteceu é metade do diagnóstico — e permite pedir correções precisas, a uma pessoa ou a uma IA.

### Interface

A **interface** é o ponto de contato entre o usuário e o sistema. A palavra lembra telas, mas interfaces têm muitas formas: um formulário na web, um aplicativo no celular, uma mensagem de texto, um e-mail, um comando de voz, uma planilha, um botão físico, um arquivo deixado numa pasta. Quando o "usuário" é outro sistema, a interface também existe — é a API, que veremos no Capítulo 13.

Uma boa interface faz três coisas: **mostra o estado** (o usuário sabe em que situação está o pedido), **evita erros** (não deixa escolher uma data impossível; pede confirmação antes de cancelar) e **dá retorno** (o usuário sabe se a ação funcionou ou não). Uma interface ruim faz o contrário e transfere para o usuário o trabalho de lembrar, conferir e adivinhar.

#### Frontend e backend

Em sistemas que funcionam pela internet, a lógica se divide em duas partes.

O **frontend** é a parte que roda no dispositivo do usuário: o navegador, o aplicativo do celular. Ele desenha as telas, reage aos toques e cliques e envia pedidos ao servidor.

O **backend** é a parte que roda no servidor: recebe os pedidos do frontend, aplica as regras de negócio, lê e grava dados, conversa com outros sistemas.

Essa divisão tem uma consequência que todo projetista de sistemas precisa conhecer:

> **Princípio** — Regras que importam devem ser aplicadas no backend. Verificações no frontend servem para conforto do usuário; não para segurança nem para integridade. Qualquer coisa que roda no dispositivo do usuário pode ser contornada por ele.

Se a verificação de capacidade da Marzipã existir apenas na tela, basta alguém enviar o pedido por outro caminho (outra versão do aplicativo, uma chamada direta ao servidor, uma automação mal configurada) para que ela não aconteça. Isso não exige má-fé: frequentemente, quem contorna a regra é uma segunda interface construída depois, por alguém que não sabia que a regra estava só na primeira.

### Servidor

Um **servidor** é um computador (ou um programa num computador) que fica funcionando continuamente, esperando pedidos e respondendo a eles. O modelo é chamado **cliente–servidor**: o cliente (o aplicativo de Helena) faz um pedido; o servidor processa e responde.

```
   CLIENTE                                     SERVIDOR
  (aplicativo)  ──── pedido (requisição) ────►  aplica regras
                                                lê/grava dados
                ◄─────── resposta ───────────   devolve resultado
```

Esse ciclo de **requisição e resposta** é a unidade básica de quase toda comunicação entre sistemas. Ele vai reaparecer, com mais detalhes, no Capítulo 13.

### Cloud

**Cloud** (nuvem) é o nome dado ao modelo em que servidores, bancos de dados, armazenamento e outros serviços são alugados de um provedor e acessados pela internet, em vez de comprados e mantidos pela própria organização. Em vez de ter um computador na sala dos fundos, a Marzipã usa serviços que rodam em centros de dados de terceiros e paga pelo uso.

A nuvem oferece vários níveis de serviço. No nível mais baixo, você aluga capacidade de computação e cuida de tudo o que roda nela. No nível mais alto, você usa um software pronto, acessado pelo navegador, e não cuida de nada além dos seus dados. Entre os extremos, há serviços gerenciados: banco de dados que o provedor mantém, filas de mensagens, funções que rodam só quando chamadas, serviços de IA.

### Onde estão as camadas num sistema improvisado

Muitos "sistemas" reais não foram construídos como sistemas. São planilhas, e-mails, cadernos e mensagens que, juntos, cumprem as funções das camadas — mal.

> **Caso Vértice** — Antes do projeto, as camadas do laboratório estavam distribuídas assim:
>
> | Camada | Onde estava | Problema |
> |---|---|---|
> | Interface | A própria planilha, aberta por todos | Interface e dados misturados: quem vê pode alterar. |
> | Lógica | Na cabeça dos analistas e da coordenação; algumas fórmulas | Regras não verificáveis; dependem de quem está trabalhando. |
> | Dados | Planilha compartilhada + folhas impressas + e-mails | Sem fonte da verdade única; sem trilha de auditoria. |
> | Integrações | E-mail com o laudo anexado | Manual; sem confirmação de recebimento. |
> | Serviços externos | Nenhum | — |
>
> A planilha não era o problema em si. O problema era que ela acumulava funções de três camadas, sem as proteções que cada camada exige. Essa leitura orientou a arquitetura do Capítulo 19.

### Formas de construir

Para implementar um sistema, existe um espectro de abordagens. Nenhuma é melhor em absoluto; cada uma é adequada para certos problemas.

| Abordagem | O que é | Bom para | Limitações típicas |
|---|---|---|---|
| **Planilha estruturada** | Planilha com colunas definidas, validações, fórmulas e permissões. | Poucos usuários, poucos dados, regras simples, início de qualquer projeto. | Integridade fraca, permissões limitadas, difícil auditar alterações. |
| **Software pronto (contratado como serviço)** | Produto existente que resolve um problema conhecido. | Problemas comuns (agenda, finanças, gestão de estoque, sistemas de laboratório). | Pouca flexibilidade; dependência do fornecedor; custo recorrente. |
| **Plataforma sem código ou de baixo código** | Ferramentas para montar telas, dados e automações visualmente. | Sistemas internos de complexidade moderada, construídos por não programadores. | Limites de escala e de lógica complexa; dependência da plataforma. |
| **Plataforma de automação visual** | Conecta serviços por gatilhos e ações, sem código. | Integrações e automações entre sistemas existentes. | Tratamento de exceções frequentemente limitado; custo por execução. |
| **Código, com assistente de IA** | Software escrito em linguagem de programação, gerado ou apoiado por IA. | Lógica específica, integrações complexas, controle total. | Exige mais capacidade de verificação e manutenção; precisa de ambiente para rodar. |

A pergunta "**construir ou comprar?**" deve ser feita sempre. Se o problema é comum — e muitos são —, é provável que exista software pronto que o resolve melhor do que qualquer coisa que você construiria. Construir faz sentido quando o problema é específico, quando o software pronto exigiria mudar o processo de um jeito inaceitável, ou quando o custo do pronto é desproporcional. Essa decisão é uma das primeiras do Decision Log (Capítulo 20).

### Fichas do capítulo

> **Ficha — Interface**
>
> | Pergunta | Resposta |
> |---|---|
> | O que é? | O ponto onde um usuário (pessoa ou sistema) interage com o sistema: telas, formulários, mensagens, arquivos, APIs. |
> | Para que serve? | Permitir que o usuário veja o estado, faça ações e receba retorno sem conhecer o funcionamento interno. |
> | Onde aparece? | Em toda parte: aplicativos, sites, planilhas, e-mails, assistentes de mensagem, painéis. |
> | Como se relaciona? | Envia ações para a lógica e exibe dados vindos dela. Um mesmo sistema pode ter várias interfaces sobre a mesma lógica. |
> | Quando usar? | Uma interface própria se justifica quando o usuário precisa de uma visão específica para decidir ou agir. |
> | Quando não usar? | Quando uma interface existente (e-mail, planilha, mensagem) já atende; criar telas novas aumenta custo e treinamento. |
> | Erro comum? | Mostrar tudo para todos; pôr regras importantes só na interface; não mostrar o estado atual. |
> | Como delegar para IA? | Descreva o usuário, a tarefa que ele faz na tela, os dados exibidos e editáveis, as validações e as mensagens de erro e sucesso. |
> | Como verificar? | Teste com um usuário real executando uma tarefa real, sem ajuda; observe onde hesita ou erra. |

> **Ficha — Frontend**
>
> | Pergunta | Resposta |
> |---|---|
> | O que é? | A parte do sistema que roda no dispositivo do usuário (navegador ou aplicativo). |
> | Para que serve? | Desenhar a interface, reagir às ações do usuário e conversar com o backend. |
> | Onde aparece? | Sites, aplicativos de celular, painéis web. |
> | Como se relaciona? | Envia requisições ao backend e exibe as respostas. Não deve ser a única barreira para regras. |
> | Quando usar? | Sempre que houver interface própria; validações no frontend melhoram a experiência. |
> | Quando não usar? | Para guardar segredos (chaves, senhas de sistema) ou aplicar regras de segurança: tudo no frontend é visível e alterável. |
> | Erro comum? | Colocar chaves de acesso ou regras de negócio críticas no código do frontend. |
> | Como delegar para IA? | Especifique telas, estados de cada tela (carregando, vazio, erro, sucesso), validações e qual endpoint do backend cada ação chama. |
> | Como verificar? | Teste cada estado da tela, incluindo erro de conexão e resposta de erro do backend; verifique que nenhum segredo aparece no código entregue ao navegador. |

> **Ficha — Backend**
>
> | Pergunta | Resposta |
> |---|---|
> | O que é? | A parte do sistema que roda no servidor e aplica regras, acessa dados e integra serviços. |
> | Para que serve? | Ser a autoridade sobre o que é permitido e o que é verdade no sistema. |
> | Onde aparece? | Atrás de qualquer aplicativo ou site que guarda dados ou aplica regras. |
> | Como se relaciona? | Recebe requisições do frontend ou de outros sistemas (via API), consulta o banco de dados, chama serviços externos. |
> | Quando usar? | Quando há regras que precisam ser garantidas, dados compartilhados entre usuários ou integrações com segredos. |
> | Quando não usar? | Em soluções de degraus baixos (planilha, automação visual) que já cumprem a função sem backend próprio. |
> | Erro comum? | Confiar nos dados que chegam do frontend sem validar de novo; não registrar erros. |
> | Como delegar para IA? | Especifique cada operação: entrada, regras, efeitos nos dados, saída, erros possíveis e respostas para cada um. |
> | Como verificar? | Testes que chamam o backend diretamente, incluindo entradas inválidas e não autorizadas, sem passar pela interface. |

> **Ficha — Servidor**
>
> | Pergunta | Resposta |
> |---|---|
> | O que é? | Um computador ou programa que fica disponível continuamente para receber requisições e respondê-las. |
> | Para que serve? | Hospedar o backend, bancos de dados e serviços que precisam estar sempre acessíveis. |
> | Onde aparece? | Em qualquer serviço acessado pela internet; hoje, geralmente na nuvem. |
> | Como se relaciona? | É onde o backend e frequentemente o banco de dados rodam; recebe requisições de clientes. |
> | Quando usar? | Quando algo precisa funcionar sem que o computador do usuário esteja ligado, ou ser compartilhado. |
> | Quando não usar? | Quando um serviço gerenciado ou uma plataforma pronta já fornece a função sem que você precise manter um servidor. |
> | Erro comum? | Ninguém ser responsável por ele: atualizações de segurança, monitoramento e cópias de segurança esquecidas. |
> | Como delegar para IA? | Peça a configuração explicando o que precisa rodar, quem precisa acessar, quais portas e serviços são necessários e quais não devem estar expostos. |
> | Como verificar? | Confira o que está acessível de fora (só o necessário), se há monitoramento e se a restauração a partir da cópia de segurança funciona. |

> **Ficha — Cloud**
>
> | Pergunta | Resposta |
> |---|---|
> | O que é? | Modelo de uso de servidores e serviços alugados de um provedor, acessados pela internet e pagos conforme o uso. |
> | Para que serve? | Evitar comprar e manter infraestrutura; escalar conforme a necessidade; usar serviços gerenciados. |
> | Onde aparece? | Na maioria dos sistemas modernos, inclusive nos serviços de IA. |
> | Como se relaciona? | Hospeda servidores, bancos de dados, armazenamento, filas e modelos de IA. |
> | Quando usar? | Quase sempre, para organizações sem equipe de infraestrutura. |
> | Quando não usar? | Quando restrições legais, contratuais ou de sigilo exigem que dados fiquem em ambiente próprio, ou quando o custo de uso contínuo supera o de ter infraestrutura própria. |
> | Erro comum? | Não acompanhar custos (cobrança por uso pode crescer sem aviso); deixar recursos expostos publicamente por engano; não saber onde os dados ficam armazenados. |
> | Como delegar para IA? | Especifique requisitos de disponibilidade, região dos dados, acesso, orçamento e limites de gasto; peça a configuração com o mínimo de permissões. |
> | Como verificar? | Revise permissões e o que está público; configure alertas de custo; teste a recuperação de falhas. |

### Exercícios

**Exercício 11.1 · F · M0** — Escolha um aplicativo que você usa (de banco, de entregas, de transporte). Descreva uma ação sua nele passando pelas seis camadas: o que acontece em cada uma? Marque o que você sabe e o que está inferindo.

**Exercício 11.2 · F · M0** — Para cada situação, diga em que camada o problema provavelmente está: (a) o aplicativo mostra um saldo diferente do que aparece no site; (b) você consegue agendar uma consulta num horário que já estava ocupado; (c) o pagamento foi feito, mas o pedido continua como "aguardando pagamento"; (d) o botão "salvar" não faz nada.

> **Para conferir** — (a) Provavelmente dados ou integração: duas interfaces lendo fontes diferentes, ou uma delas desatualizada (falta de fonte da verdade única). (b) Lógica: a regra de conflito de horário não está sendo aplicada no backend — ou está só numa das interfaces. (c) Integração: o aviso do serviço de pagamentos não chegou ou não foi processado (você verá isso no Capítulo 13, com webhooks). (d) Interface ou comunicação entre frontend e backend: o pedido não está sendo enviado, ou a resposta de erro não está sendo mostrada.

**Exercício 11.3 · P · M0** — Descreva as camadas do "sistema" atual do problema que você vem trabalhando, no formato da tabela do Caso Vértice. Onde há camadas misturadas? Que problemas isso causa?

**Exercício 11.4 · P · M2** — Para o seu problema, peça a uma IA que liste opções de software pronto que resolvem problemas semelhantes, descrevendo-as pela categoria e pelas funções (não pela marca). Depois, avalie: o problema é comum o suficiente para que comprar seja melhor do que construir? Registre a resposta como uma primeira entrada do seu Decision Log, com justificativa.

## Capítulo 12 — Como sistemas guardam e representam dados

### Do modelo à representação

No Capítulo 9 você modelou dados conceitualmente: entidades, atributos, relações, estados. Agora é preciso entender como esse modelo se transforma em algo que um sistema consegue guardar e trocar. Duas representações dominam quase tudo o que você vai encontrar: **tabelas** (em planilhas e bancos de dados) e **documentos estruturados** (dos quais o formato mais comum é o JSON).

### Tabelas, linhas e colunas

Numa tabela, cada **linha** representa uma ocorrência de uma entidade (um pedido, uma cliente) e cada **coluna** representa um atributo (data de entrega, telefone). Até aí, nada que uma planilha não faça.

A diferença está em três conceitos que transformam um conjunto de tabelas num modelo confiável.

**Chave primária.** Uma coluna (ou combinação de colunas) que identifica cada linha de forma única. É o identificador do Capítulo 9 implementado: o número do pedido, o código da amostra.

**Chave estrangeira.** Uma coluna que guarda a chave primária de outra tabela, criando a relação entre elas. A tabela de pedidos não guarda o nome e o telefone da cliente; guarda o identificador da cliente, e os dados dela ficam na tabela de clientes. Assim, se o telefone mudar, muda num lugar só.

**Restrições.** Regras que o próprio sistema de dados garante: este campo não pode ser vazio; este valor tem de ser único; esta chave estrangeira tem de apontar para uma linha que existe; este número tem de estar entre 0 e 14.

> **Caso Marzipã** — O modelo conceitual do Capítulo 9 vira tabelas assim (trecho):
>
> ```
> CLIENTES                         PEDIDOS                               ITENS_PEDIDO
> ┌────┬────────────┬──────────┐   ┌──────┬────────────┬─────────┬─────────────┐   ┌────┬───────────┬────────────┬────┬──────┐
> │ id │ nome       │ telefone │   │ id   │ cliente_id │ entrega │ status      │   │ id │ pedido_id │ produto_id │ qt │ UTs  │
> ├────┼────────────┼──────────┤   ├──────┼────────────┼─────────┼─────────────┤   ├────┼───────────┼────────────┼────┼──────┤
> │ 17 │ Ana Souza  │ 1198...  │◄──┤ 1284 │ 17         │ 14/06   │ aguard_sinal│◄──┤ 91 │ 1284      │ 3          │ 1  │ 4    │
> │ 22 │ Rita Melo  │ 1197...  │   │ 1285 │ 22         │ 14/06   │ confirmado  │   │ 92 │ 1284      │ 8          │ 2  │ 2    │
> └────┴────────────┴──────────┘   └──────┴────────────┴─────────┴─────────────┘   └────┴───────────┴────────────┴────┴──────┘
>                                    cliente_id → CLIENTES.id                         pedido_id → PEDIDOS.id
> ```
>
> A relação "um pedido tem muitos itens" é implementada colocando o identificador do pedido em cada item — e não criando colunas "item1", "item2", "item3" na tabela de pedidos, que é o erro mais comum em planilhas.

#### Relações muitos-para-muitos

No Exercício 9.5, você encontrou uma relação muitos-para-muitos (sócios e reservas com convidados, por exemplo). Tabelas não representam esse tipo de relação diretamente. A solução é uma **tabela intermediária** que registra cada par: se um ensaio pode ser feito em vários equipamentos, e um equipamento faz vários ensaios, cria-se uma tabela "ensaio_equipamento" com uma linha para cada combinação permitida. Reconhecer quando essa tabela é necessária é um sinal de que você entendeu o modelo.

### Tipos de dados

Cada coluna deve ter um **tipo**: texto, número inteiro, número decimal, data, data e hora, verdadeiro/falso, ou um valor de uma lista fechada (os estados possíveis de um pedido, por exemplo). Parece detalhe; é uma das maiores fontes de erro em sistemas improvisados.

Uma data guardada como texto ("14/06", "sábado", "14 de junho") não pode ser comparada nem ordenada com segurança. Um valor monetário guardado como texto ("R$ 120,00") não pode ser somado. Um estado guardado como texto livre ("confirmado", "Confirmado", "confirmado!") não pode ser contado. Definir tipos é a primeira linha de defesa da qualidade de dados que você estudou no Capítulo 9: ela garante validade por construção.

### Planilha ou banco de dados?

Planilhas são a forma mais acessível de guardar dados em tabelas, e para muitos problemas são a escolha certa — especialmente no início. Bancos de dados são sistemas especializados em guardar, consultar e proteger dados. A pergunta não é qual é "melhor", e sim quando uma planilha deixa de ser suficiente.

| Necessidade | Planilha | Banco de dados |
|---|---|---|
| Poucos usuários, um de cada vez | Atende bem. | Atende, com mais esforço de construção. |
| Vários usuários alterando ao mesmo tempo | Risco de conflito e sobrescrita. | Projetado para isso. |
| Restrições de integridade (único, obrigatório, relação válida) | Limitadas; fáceis de contornar. | Garantidas pelo sistema. |
| Trilha de auditoria (quem alterou o quê, quando) | Fraca ou inexistente. | Possível de implementar de forma confiável. |
| Permissões finas (quem vê e altera cada coisa) | Limitadas. | Possíveis em nível detalhado. |
| Volume (dezenas de milhares de linhas, muitas consultas) | Fica lenta e frágil. | Projetado para isso. |
| Ser lido e alterado por outros sistemas | Possível, mas frágil. | Natural, geralmente via backend e API. |
| Usuário não técnico alterar estrutura e ver tudo | Muito fácil. | Exige interface construída. |

A última linha é ao mesmo tempo a força e a fraqueza da planilha: qualquer pessoa pode ver e mudar tudo, inclusive a estrutura. Isso é ótimo para explorar e péssimo para proteger.

> **Caso Casa** — Para Lucas, uma planilha estruturada é suficiente: um único usuário principal, poucos registros, nenhuma exigência de auditoria. A decisão registrada foi: "planilha com uma aba por entidade, colunas tipadas, listas fechadas para status e validação de datas; reavaliar se outra pessoa da família passar a editar".

> **Caso Vértice** — Para o laboratório, a exigência de trilha de auditoria e de permissões (analistas registram, só a coordenação aprova, ninguém altera resultado aprovado) tornou a planilha insuficiente para o registro de resultados. Essa constatação entrou no Decision Log como uma das razões para a arquitetura do Capítulo 19.

### JSON

Quando sistemas trocam dados entre si, raramente trocam tabelas. Trocam documentos estruturados, e o formato mais usado para isso é o **JSON** (lê-se "djêison"). Você vai encontrá-lo em praticamente toda API, em configurações de automações, em respostas estruturadas de IA.

JSON tem apenas alguns elementos:

- **objetos**, entre chaves `{ }`, que são conjuntos de pares *nome: valor*;
- **listas** (ou *arrays*), entre colchetes `[ ]`, que são sequências de valores;
- **valores**, que podem ser texto (entre aspas), número, verdadeiro/falso (`true`/`false`), nulo (`null`), outro objeto ou outra lista.

Um pedido da Marzipã em JSON:

```json
{
  "id": 1284,
  "cliente": {
    "id": 17,
    "nome": "Ana Souza",
    "telefone": "+5511988881234"
  },
  "entrega": {
    "data": "2026-06-14",
    "janela": "14:00-16:00",
    "modo": "entrega",
    "endereco": "Rua das Flores, 120"
  },
  "itens": [
    { "produto_id": 3, "descricao": "Bolo decorado 2 andares", "quantidade": 1, "uts": 4, "preco": 280.00 },
    { "produto_id": 8, "descricao": "Brigadeiro (50 un.)", "quantidade": 2, "uts": 2, "preco": 90.00 }
  ],
  "status": "aguardando_sinal",
  "sinal_pago": false,
  "observacoes": null
}
```

Ler JSON é uma habilidade que vale a pena treinar. Observe como a estrutura reflete o modelo: a cliente é um objeto dentro do pedido; os itens são uma lista de objetos; a data está num formato padronizado (ano-mês-dia), que pode ser comparado e ordenado; o estado é um texto de uma lista fechada; a ausência de observações é representada por `null`, e não por um texto vazio ou por "nenhuma".

#### Esquemas: o contrato da estrutura

Um JSON pode ter qualquer forma. Para que dois sistemas se entendam, é preciso combinar qual forma é aceita: quais campos existem, quais são obrigatórios, de que tipo é cada um, quais valores são permitidos. Esse acordo se chama **esquema** (*schema*). Há formatos padronizados para escrever esquemas de JSON, e a maioria das ferramentas consegue validar automaticamente se um documento segue o esquema.

Esquemas são especialmente importantes quando um dos lados é uma IA. Se você pede a um modelo de linguagem que extraia um pedido de uma mensagem e devolva JSON, ele pode devolver algo que *parece* certo, mas tem um campo com nome diferente, uma data em formato errado ou um estado inexistente. Validar o resultado contra um esquema, antes de usá-lo, é a forma mais barata de pegar esses erros (Capítulo 27).

> **▲ Avançado — transações e consistência** — Quando uma operação envolve várias alterações nos dados (criar um pedido, criar seus itens e descontar a capacidade do dia), é importante que ela aconteça por inteiro ou não aconteça. Bancos de dados oferecem **transações**: um conjunto de alterações que é confirmado de uma vez ou desfeito por completo se algo falhar no meio. Sem transações, uma falha no meio do caminho pode deixar um pedido sem itens ou uma capacidade descontada para um pedido que não existe. Outra questão é a **concorrência**: duas pessoas registrando, ao mesmo tempo, pedidos que cabem individualmente na capacidade restante, mas não juntos. A verificação "cabe?" e a gravação precisam ser feitas de forma atômica, senão os dois pedidos passam. Esse tipo de defeito quase nunca aparece em demonstrações e é comum em produção. Ao delegar a implementação de regras de capacidade, estoque ou saldo, peça explicitamente que a IA trate concorrência e explique como o fez.

> **▲ Avançado — bancos relacionais e bancos de documentos** — Bancos de dados que organizam tudo em tabelas relacionadas por chaves são chamados **relacionais** e são consultados, em geral, por uma linguagem padronizada de consultas. Há também bancos que guardam **documentos** (frequentemente em formato parecido com JSON), mais flexíveis quanto à estrutura e menos rígidos quanto a relações e restrições. Para sistemas de gestão com entidades bem definidas, relações e regras de integridade — como a maioria dos casos deste livro —, o modelo relacional costuma ser a escolha padrão. Bancos de documentos fazem sentido quando a estrutura varia muito entre registros ou quando os dados são naturalmente hierárquicos e lidos inteiros.

### Fichas do capítulo

> **Ficha — JSON**
>
> | Pergunta | Resposta |
> |---|---|
> | O que é? | Formato de texto para representar dados estruturados com objetos (nome: valor), listas e valores simples. |
> | Para que serve? | Trocar dados entre sistemas, configurar ferramentas, obter respostas estruturadas de IA. |
> | Onde aparece? | APIs, webhooks, automações, arquivos de configuração, saídas de modelos de linguagem. |
> | Como se relaciona? | É o "envelope" mais comum das mensagens de uma API; reflete o modelo de dados; é validado por esquemas. |
> | Quando usar? | Sempre que dois sistemas precisam trocar dados estruturados, ou quando você quer que uma IA devolva dados em forma utilizável. |
> | Quando não usar? | Para armazenar grandes volumes de dados relacionados que serão consultados de várias formas (use banco de dados); para leitura humana corrida (use texto). |
> | Erro comum? | Datas e números como texto em formatos ambíguos; nomes de campos inconsistentes; aceitar JSON sem validar. |
> | Como delegar para IA? | Forneça o esquema (campos, tipos, obrigatórios, valores permitidos) e um exemplo válido; peça que a saída siga exatamente o esquema. |
> | Como verificar? | Valide automaticamente contra o esquema; teste com exemplos inválidos para garantir que são rejeitados. |

> **Ficha — Banco de dados**
>
> | Pergunta | Resposta |
> |---|---|
> | O que é? | Sistema especializado em guardar, consultar e proteger dados de forma organizada e confiável. |
> | Para que serve? | Ser a fonte da verdade de um sistema, com integridade, concorrência, permissões e histórico. |
> | Onde aparece? | Atrás de praticamente todo sistema que guarda informação compartilhada. |
> | Como se relaciona? | É acessado pelo backend; raramente deve ser acessado diretamente pela interface ou por outros sistemas. |
> | Quando usar? | Vários usuários simultâneos, restrições de integridade, auditoria, permissões finas, volume, integração com outros sistemas. |
> | Quando não usar? | Problemas pequenos, de um usuário, sem exigência de integridade forte: uma planilha estruturada resolve com muito menos custo. |
> | Erro comum? | Modelar mal as relações (colunas "item1, item2..."), não definir restrições, não ter cópia de segurança testada. |
> | Como delegar para IA? | Entregue o modelo conceitual (entidades, atributos, tipos, relações com cardinalidade, restrições e invariantes) e peça a estrutura com justificativas. |
> | Como verificar? | Tente inserir dados que violam cada restrição e confirme que são rejeitados; verifique se cada invariante do modelo é garantido; teste restaurar uma cópia de segurança. |

### Exercícios

**Exercício 12.1 · F · M0** — Transforme o modelo da biblioteca comunitária (Exercício 9.1) em tabelas, indicando chave primária, chaves estrangeiras e o tipo de cada coluna.

**Exercício 12.2 · F · M0** — Leia o JSON do pedido da Marzipã e responda: quantos itens tem o pedido? Qual o total de UTs? O pedido pode entrar em produção? Por quê?

**Exercício 12.3 · P · M4** — O JSON abaixo foi devolvido por uma IA encarregada de extrair um pedido de uma mensagem. Liste todos os problemas, considerando o esquema implícito no exemplo do capítulo.

```json
{
  "id": "novo",
  "cliente": "Rita",
  "entrega": { "data": "sábado", "janela": "à tarde", "modo": "Entrega" },
  "itens": { "produto": "bolo de chocolate", "quantidade": "1" },
  "status": "confirmado",
  "sinal_pago": "não"
}
```

> **Para conferir** — Problemas: `id` deveria ser gerado pelo sistema, não pela extração; `cliente` é texto em vez de objeto com identificador e telefone; `data` não está em formato de data (e "sábado" é ambíguo); `janela` não segue o padrão; `modo` com maiúscula foge da lista fechada; `itens` é objeto, e não lista; não há `produto_id` nem UTs; `quantidade` é texto; `status` "confirmado" é grave — uma extração nunca deveria decidir que o pedido está confirmado; `sinal_pago` é texto em vez de verdadeiro/falso; falta endereço para modo entrega. Alguns problemas (formato) um validador de esquema pega; outros (o status "confirmado") exigem uma regra de negócio: a extração só pode produzir pedidos em estado "rascunho".

**Exercício 12.4 · P · M0** — Para o problema que você vem trabalhando, decida se os dados devem ficar numa planilha ou num banco de dados, usando a tabela comparativa. Registre a decisão no Decision Log com a justificativa e o critério que faria você mudar de ideia.

**Exercício 12.5 · A · M3** — Peça a uma IA que gere a estrutura de tabelas (incluindo restrições) para o modelo do clube esportivo (Exercício 9.5). Antes de pedir, escreva você mesmo três restrições que a estrutura precisa garantir. Verifique se a resposta da IA as garante, e tente descrever um dado inválido que a estrutura proposta aceitaria.

## Capítulo 13 — APIs e webhooks

### Por que sistemas precisam conversar

A confeitaria tem um serviço de pagamentos, um aplicativo de mensagens, um calendário e, talvez, um sistema de pedidos. O laboratório tem instrumentos, um sistema da fábrica que controla lotes, um servidor de e-mail. Nenhum desses sistemas resolve o problema sozinho. O valor aparece quando eles trocam informação: quando o pagamento confirmado muda o status do pedido, quando o laudo aprovado libera o lote no sistema da fábrica.

Essa troca acontece, na maioria dos casos, por meio de **APIs** e **webhooks**. Entender esses dois conceitos é o que permite projetar integrações (Capítulo 25) e avaliar se uma ferramenta "se conecta" de verdade com outra.

### O que é uma API

Uma **API** (interface de programação de aplicações) é a interface de um sistema para outros sistemas. Assim como uma tela é a forma de uma pessoa usar um sistema, uma API é a forma de um programa usar outro.

Uma analogia útil é um guichê de atendimento de um órgão público bem organizado. Você não entra no arquivo para pegar seu documento; vai ao guichê certo, preenche o formulário padronizado daquele guichê, se identifica, entrega, e recebe uma resposta num formato previsível: o documento, um número de protocolo ou uma recusa com o motivo. O guichê esconde como o órgão funciona por dentro, e o formulário define exatamente o que você pode pedir e como.

Numa API, cada "guichê" é um **endpoint**, o "formulário" é a **requisição**, e a "resposta" segue um formato combinado. As regras de quais guichês existem, que formulários aceitam e que respostas devolvem formam o **contrato** da API, normalmente descrito na sua documentação.

### Anatomia de uma requisição

Vamos usar como exemplo um serviço de pagamentos fictício, que a Marzipã poderia usar para cobrar sinais. Os nomes e endereços abaixo são ilustrativos; serviços reais seguem estruturas parecidas.

#### Exemplo 1 — consultar uma cobrança

```
GET https://api.pagamentos-exemplo.com/v1/cobrancas/cob_8841
Authorization: Bearer chave_secreta_da_marzipa
Accept: application/json
```

Resposta:

```
HTTP 200 OK
Content-Type: application/json

{
  "id": "cob_8841",
  "valor": 185.00,
  "status": "pendente",
  "descricao": "Sinal do pedido 1284",
  "vencimento": "2026-06-11",
  "link_pagamento": "https://pagar.exemplo.com/cob_8841"
}
```

Os elementos:

- **Método** (`GET`): o tipo de ação. `GET` significa "quero ler".
- **Endpoint** (`https://api.pagamentos-exemplo.com/v1/cobrancas/cob_8841`): o endereço do recurso. Observe a estrutura: o serviço, a versão da API (`v1`), o tipo de recurso (`cobrancas`) e o identificador de uma cobrança específica.
- **Headers** (cabeçalhos): informações sobre a requisição. `Authorization` carrega a credencial que identifica quem está pedindo (Capítulo 14). `Accept` diz em que formato se quer a resposta.
- **Código de status** (`200 OK`): o resultado da requisição em forma numérica. `200` significa sucesso.
- **Corpo da resposta**: os dados, aqui em JSON.

#### Exemplo 2 — criar uma cobrança

```
POST https://api.pagamentos-exemplo.com/v1/cobrancas
Authorization: Bearer chave_secreta_da_marzipa
Content-Type: application/json
Idempotency-Key: pedido-1284-sinal

{
  "valor": 185.00,
  "descricao": "Sinal do pedido 1284",
  "vencimento": "2026-06-11",
  "referencia_externa": "pedido-1284"
}
```

Resposta:

```
HTTP 201 Created

{
  "id": "cob_8841",
  "status": "pendente",
  "link_pagamento": "https://pagar.exemplo.com/cob_8841",
  "referencia_externa": "pedido-1284"
}
```

Agora o método é `POST` ("quero criar"), e a requisição tem um **corpo** (o *payload*) com os dados da cobrança. O status `201` significa "criado". A resposta traz o identificador que o serviço de pagamentos atribuiu à cobrança, e que a Marzipã precisa guardar para consultar ou cancelar depois.

Dois detalhes merecem atenção. O campo `referencia_externa` permite que o serviço de pagamentos guarde o identificador do pedido da Marzipã, o que vai ser essencial quando o pagamento for confirmado e for preciso saber a que pedido ele pertence. E o cabeçalho `Idempotency-Key` — que muitos serviços oferecem — diz ao serviço: "se você receber outra requisição com esta mesma chave, não crie uma segunda cobrança; devolva a primeira". Isso protege contra um problema real: se a conexão cair depois que a cobrança foi criada, mas antes de a resposta chegar, o sistema da Marzipã não sabe se deu certo e tenta de novo. Sem a chave, a cliente recebe duas cobranças. Você vai encontrar esse conceito — **idempotência** — de novo no Capítulo 24.

#### Os métodos mais comuns

| Método | Intenção | Exemplo |
|---|---|---|
| `GET` | Ler um recurso ou uma lista | Consultar uma cobrança; listar pedidos do dia. |
| `POST` | Criar um recurso ou disparar uma ação | Criar uma cobrança; enviar uma mensagem. |
| `PUT` | Substituir um recurso inteiro | Atualizar todos os dados de uma cliente. |
| `PATCH` | Alterar parte de um recurso | Mudar só o status de um pedido. |
| `DELETE` | Remover ou cancelar um recurso | Cancelar uma cobrança pendente. |

Essas são convenções amplamente seguidas, mas cada API define seu próprio contrato. Sempre confira na documentação o que cada endpoint faz de fato.

### Códigos de status e erros

A resposta de uma API sempre traz um código numérico de status. Os códigos seguem uma convenção: os que começam com 2 indicam sucesso; com 4, erro de quem pediu; com 5, erro de quem respondeu. Conhecer os principais é essencial para projetar o tratamento de erros.

| Código | Significado | O que geralmente fazer |
|---|---|---|
| `200` OK | Sucesso. | Usar a resposta. |
| `201` Created | Recurso criado. | Guardar o identificador retornado. |
| `400` Bad Request | Requisição mal formada. | Não repetir igual; corrigir os dados. Registrar. |
| `401` Unauthorized | Credencial ausente ou inválida. | Não repetir; verificar a credencial. Alertar alguém. |
| `403` Forbidden | Credencial válida, mas sem permissão para isso. | Não repetir; revisar permissões. |
| `404` Not Found | Recurso não existe (ou endpoint errado). | Verificar identificador e endereço. |
| `409` Conflict | Conflito com o estado atual (ex.: já existe). | Consultar o estado atual antes de decidir. |
| `422` Unprocessable | Dados bem formados, mas inválidos para a regra (ex.: valor negativo). | Corrigir os dados; mostrar o motivo. |
| `429` Too Many Requests | Limite de requisições excedido. | Esperar e tentar de novo mais tarde, mais devagar. |
| `500` Internal Server Error | Erro do serviço. | Tentar de novo algumas vezes, com intervalo crescente; depois, alertar. |
| `503` Service Unavailable | Serviço temporariamente fora. | Tentar de novo mais tarde. |

A coluna da direita é uma das coisas mais importantes desta parte do livro. **Alguns erros devem ser repetidos, outros nunca.** Repetir uma requisição que falhou por credencial inválida (401) não adianta e pode bloquear a conta. Não repetir uma que falhou por instabilidade momentânea (503) faz o sistema desistir à toa. Uma especificação de integração que não diz o que fazer em cada caso está incompleta.

Além do código, APIs bem feitas devolvem no corpo uma mensagem explicando o erro:

```
HTTP 422 Unprocessable Entity

{
  "erro": "vencimento_invalido",
  "mensagem": "A data de vencimento não pode ser anterior à data atual."
}
```

### Contratos e versões

O **contrato** de uma API é tudo o que ela promete: quais endpoints existem, que métodos aceitam, que campos são obrigatórios, que formato têm as respostas, que erros podem acontecer, quantas requisições são permitidas por minuto. Integrar dois sistemas é, essencialmente, construir algo que respeita o contrato do outro lado e tolera o que o contrato não garante.

Contratos mudam. Por isso, muitas APIs têm **versões** (o `v1` no endereço). Uma mudança que quebra quem já usa a API — remover um campo, mudar um formato — deveria vir numa versão nova, com prazo para migrar. Nem todos os fornecedores fazem isso bem. Ao depender de uma API externa, pergunte: como ficarei sabendo de mudanças? O que acontece com minha integração se um campo sumir?

Dois outros elementos do contrato aparecem com frequência:

- **Paginação.** Listas grandes são devolvidas em partes ("páginas"). Uma integração que lê só a primeira página e acha que leu tudo é um erro clássico.
- **Limites de taxa.** O serviço limita quantas requisições você pode fazer num período. Ultrapassar gera `429`.

### Webhooks: quando o outro sistema avisa você

Com uma API, seu sistema pergunta e o outro responde. Mas como a Marzipã fica sabendo que a cliente pagou o sinal? Uma opção é perguntar periodicamente ao serviço de pagamentos: "a cobrança cob_8841 já foi paga?". Isso se chama **polling** (consulta periódica). Funciona, mas é ineficiente — a maioria das perguntas recebe "ainda não" — e atrasado — se a consulta é a cada hora, a confirmação pode levar uma hora para ser percebida.

A alternativa é o **webhook**: você informa ao serviço de pagamentos um endereço do seu sistema, e *ele* faz uma requisição para esse endereço quando algo acontece. O sentido da comunicação se inverte.

```
   POLLING                                       WEBHOOK

   Marzipã ── "já pagou?" ──► Pagamentos         Pagamentos ── "pagou!" ──► Marzipã
   Marzipã ◄── "ainda não" ── Pagamentos          (quando o evento acontece)
   Marzipã ── "já pagou?" ──► Pagamentos
   Marzipã ◄── "sim" ──────── Pagamentos
```

Um webhook típico de pagamento confirmado:

```
POST https://marzipa.exemplo.com/webhooks/pagamentos
Content-Type: application/json
X-Assinatura: t=1781179200,v1=5f2a9c...

{
  "evento": "cobranca.paga",
  "id_evento": "evt_55102",
  "ocorrido_em": "2026-06-10T15:42:10Z",
  "dados": {
    "id": "cob_8841",
    "valor_pago": 185.00,
    "referencia_externa": "pedido-1284"
  }
}
```

O sistema da Marzipã recebe isso e muda o pedido 1.284 para "confirmado". Simples na demonstração — e cheio de armadilhas na operação. Webhooks exigem cuidados que todo projetista precisa conhecer:

**Verificar a origem.** Qualquer um que descubra o endereço pode enviar uma requisição dizendo "cobrança paga". Por isso, serviços sérios assinam seus webhooks (o cabeçalho `X-Assinatura` do exemplo), e o receptor deve verificar a assinatura antes de acreditar na mensagem. Sem isso, alguém poderia confirmar pedidos sem pagar.

**Esperar duplicatas.** Se o serviço de pagamentos não receber a confirmação de que o webhook chegou (por exemplo, porque o sistema da Marzipã demorou para responder), ele envia de novo. O mesmo evento pode chegar duas ou três vezes. O receptor precisa reconhecer eventos já processados (pelo `id_evento`) e ignorá-los.

**Esperar desordem.** Eventos podem chegar fora de ordem: "cobrança cancelada" antes de "cobrança criada", por exemplo. O receptor não pode supor que a ordem de chegada é a ordem dos acontecimentos.

**Responder rápido.** O receptor deve confirmar o recebimento rapidamente (com `200`) e processar o evento depois, se o processamento for demorado. Muitos serviços consideram falha uma resposta que demora alguns segundos.

**Ter um plano para webhooks perdidos.** Se o sistema da Marzipã estiver fora do ar quando o webhook for enviado, e o serviço desistir depois de algumas tentativas, o pagamento nunca será registrado. Uma prática robusta é combinar webhook com uma **conciliação periódica**: uma vez por dia, consultar via API todas as cobranças pagas e conferir com os pedidos. É o padrão estrutural de reconciliação do Capítulo 7, aplicado a integrações.

### Sincronização

Quando a mesma informação precisa existir em dois sistemas — a lista de clientes no sistema de pedidos e no aplicativo de mensagens, por exemplo —, surge o problema da **sincronização**. Três perguntas definem uma estratégia:

1. **Qual é a fonte da verdade?** Se a cliente atualizar o telefone, onde isso acontece, e quem copia de quem?
2. **Em que direção a informação flui?** Sincronização de mão única (A copia para B) é muito mais simples e segura do que de mão dupla (A e B podem alterar, e as alterações se propagam).
3. **Com que frequência e o que fazer em conflito?** Se os dois lados foram alterados desde a última sincronização, qual vale?

A recomendação, sempre que possível, é **evitar sincronização de mão dupla**. Ela cria conflitos difíceis de resolver e erros difíceis de diagnosticar. Prefira uma fonte da verdade única, com os outros sistemas consultando-a ou recebendo cópias de mão única.

### Fichas do capítulo

> **Ficha — API**
>
> | Pergunta | Resposta |
> |---|---|
> | O que é? | A interface de um sistema para outros sistemas: um conjunto de endpoints com contrato definido de requisição e resposta. |
> | Para que serve? | Permitir que um programa leia dados de outro ou peça que ele execute ações, sem acesso aos seus detalhes internos. |
> | Onde aparece? | Serviços de pagamento, mensagens, mapas, calendários, sistemas de gestão, serviços de IA. |
> | Como se relaciona? | É a interface do backend para outros sistemas; usa autenticação; troca dados geralmente em JSON; é complementada por webhooks. |
> | Quando usar? | Para integrar sistemas de forma confiável e automática. |
> | Quando não usar? | Quando a troca é rara e manual resolve com segurança; quando uma plataforma de automação já oferece a integração pronta e suficiente. |
> | Erro comum? | Ignorar erros, repetir requisições que não deviam ser repetidas, não tratar paginação e limites, supor que o contrato nunca muda. |
> | Como delegar para IA? | Forneça a documentação do endpoint (ou o trecho relevante), o que deve ser enviado, o que fazer com a resposta e o que fazer em cada código de erro. |
> | Como verificar? | Teste com dados válidos, inválidos, credencial errada, recurso inexistente e simulação de serviço fora do ar; confira os logs de cada caso. |

> **Ficha — Webhook**
>
> | Pergunta | Resposta |
> |---|---|
> | O que é? | Uma requisição que um sistema externo envia para o seu sistema quando um evento acontece. |
> | Para que serve? | Ser avisado de eventos (pagamento confirmado, mensagem recebida, arquivo enviado) sem precisar perguntar periodicamente. |
> | Onde aparece? | Pagamentos, mensageria, formulários, repositórios de código, plataformas de automação. |
> | Como se relaciona? | É o sentido inverso de uma API; frequentemente dispara automações (é um tipo de gatilho, Capítulo 15). |
> | Quando usar? | Quando é preciso reagir a eventos externos com rapidez. |
> | Quando não usar? | Quando não há como receber requisições externas com segurança; quando uma consulta periódica é suficiente e mais simples. |
> | Erro comum? | Não verificar a assinatura; processar duplicatas; supor ordem; não ter conciliação para eventos perdidos. |
> | Como delegar para IA? | Especifique o evento, a verificação de assinatura, a regra para duplicatas (pelo identificador do evento), o efeito nos dados e a conciliação periódica. |
> | Como verificar? | Envie o mesmo evento duas vezes, eventos fora de ordem, um evento com assinatura inválida; desligue o receptor e verifique se a conciliação recupera o evento perdido. |

### Exercícios

**Exercício 13.1 · F · M0** — Para cada ação, escolha o método mais adequado (`GET`, `POST`, `PATCH`, `DELETE`): (a) listar as amostras aguardando revisão; (b) registrar uma nova amostra; (c) mudar o status de uma amostra para "aprovada"; (d) cancelar o registro de uma amostra feito por engano; (e) consultar a especificação de um produto.

**Exercício 13.2 · F · M0** — Uma integração recebeu, em sequência, os códigos 503, 503, 200. Outra recebeu 401, 401, 401. Explique o que provavelmente aconteceu em cada caso e o que a integração deveria ter feito.

**Exercício 13.3 · P · M0** — Escreva a requisição (método, endpoint, headers e corpo em JSON) para criar no sistema da Marzipã uma alteração de pedido: a cliente quer trocar o recheio de um item. Depois, escreva três respostas possíveis: sucesso, alteração recusada porque o pedido está em produção, e pedido inexistente. Use códigos de status adequados.

> **Para conferir** — Uma boa resposta usa `PATCH` (alteração parcial) num endpoint como `/v1/pedidos/1284/itens/91`, com corpo contendo apenas o campo alterado. As respostas: `200` com o item atualizado; `409` (conflito com o estado atual) com uma mensagem explicando que o pedido está em produção e que alterações nesse estado exigem decisão de Helena; `404` para pedido inexistente. Se você usou `422` para o caso do pedido em produção, também é defensável — o importante é que a resposta explique o motivo e que o código permita ao cliente distinguir "dados errados" de "momento errado".

**Exercício 13.4 · P · M4** — Uma IA escreveu a seguinte descrição de como o sistema da Marzipã deve tratar o webhook de pagamento: "Quando receber o webhook `cobranca.paga`, buscar o pedido pela referência externa e mudar o status para confirmado. Responder 200." Liste o que está faltando para que isso funcione com segurança na operação real.

> **Para conferir** — Falta: verificar a assinatura antes de processar; tratar duplicatas pelo `id_evento`; verificar se o valor pago corresponde ao sinal esperado; verificar se o pedido está de fato em "aguardando sinal" (e o que fazer se estiver em outro estado, como "expirado" ou "cancelado"); o que fazer se a referência externa não corresponder a nenhum pedido; registrar o evento recebido em log; responder rápido e processar depois se for demorado; conciliação periódica para eventos perdidos; e verificar capacidade de novo antes de confirmar, se o pedido estava expirado. São pelo menos oito lacunas numa descrição de duas frases que "parece certa".

**Exercício 13.5 · A · M0 · Transferência** — Uma clínica quer que, quando um paciente confirmar presença respondendo uma mensagem, a agenda seja atualizada automaticamente. O serviço de mensagens oferece webhook para mensagens recebidas. Desenhe o fluxo completo, incluindo: verificação de origem, identificação do paciente e da consulta, o que conta como "confirmação", duplicatas, mensagens ambíguas e o que fazer quando o webhook não chega.
