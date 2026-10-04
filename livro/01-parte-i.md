# PARTE I — A NOVA FORMA DE RESOLVER PROBLEMAS

Esta parte apresenta o que o livro se propõe a ensinar, por que essa competência ficou mais importante depois que a IA barateou a produção de software, e qual é o método que organiza todo o resto.

Ao final dela, você terá um vocabulário comum com o livro: a diferença entre tarefa e problema, o ciclo de nove movimentos, os seis princípios, a Escada de Intervenção e os níveis de autonomia. Todos esses instrumentos serão usados e aprofundados nas partes seguintes.

## Prefácio

Existe uma cena que se repete em empresas, laboratórios, escritórios e casas. Alguém chega com um pedido pronto: "quero usar IA para responder os clientes", "preciso de um sistema para controlar as amostras", "quero automatizar minhas planilhas". O pedido soa razoável. A ferramenta existe. Em poucas horas, alguém consegue montar algo que funciona na demonstração.

Semanas depois, a situação costuma ser uma destas: o sistema foi abandonado porque ninguém o usa; ele funciona, mas o problema original continua lá; ele funciona e criou um problema novo, às vezes pior; ou ninguém sabe dizer se ele funciona, porque nunca se definiu o que "funcionar" significaria.

Em quase todos esses casos, o que faltou não foi habilidade com a ferramenta. Faltou entender o problema antes de escolher a solução, descrever com precisão o que deveria ser construído, e verificar com evidência se o resultado resolvia o que motivou o trabalho.

Durante muito tempo, essa falta ficava parcialmente escondida pelo custo de construir. Como fazer software era caro e lento, a própria lentidão forçava conversas, especificações e revisões. Assistentes de IA mudaram essa equação: hoje é possível produzir uma primeira versão de código, de automação, de texto ou de análise em uma fração do tempo que isso exigia. A construção ficou barata. Decidir errado não ficou.

Este livro existe para desenvolver a competência que ficou exposta por essa mudança: **pensar sobre problemas suficientemente bem para decidir onde IA, software, automação e sistemas podem aumentar sua capacidade de resolvê-los — e então conduzir a solução até ela estar comprovadamente funcionando.**

Não é um livro sobre como escrever prompts. Prompts aparecem, mas como uma das formas de comunicar uma especificação, e não como o centro do trabalho. Também não é um curso de programação. Você vai entender como sistemas digitais são construídos, vai especificar componentes e supervisionar sua implementação, mas não precisa ter programado antes. O que você precisa é disposição para pensar com rigor e para registrar o que pensou.

O livro foi escrito para funcionar sozinho. Ele é ao mesmo tempo:

- um **livro**, que pode ser lido do início ao fim;
- um **método**, com instrumentos que se repetem e se acumulam;
- um **currículo**, com uma progressão de onze projetos;
- um **manual do aluno**, com exercícios, gabaritos comentados, rubricas e templates;
- a **base de um produto educacional**, com uma parte dedicada a quem vai conduzir turmas, avaliar alunos e manter o material atualizado.

Esta é a primeira versão. A estrutura pedagógica foi projetada e revisada com cuidado, mas ainda não foi validada com turmas reais. A Parte IX descreve exatamente que evidências precisam ser obtidas antes de se afirmar que o método produz os resultados que promete. Preferimos dizer isso aqui, na primeira página, do que deixar a impressão de que o produto já está comprovado.

Uma última observação. Os casos usados ao longo do livro — um laboratório de controle de qualidade, uma confeitaria e a administração de uma casa — são fictícios e compostos a partir de situações comuns. Os números que aparecem neles são ilustrativos e servem para tornar o raciocínio concreto; não são dados de pesquisa.

## Como usar este livro

### Para quem é

O livro foi escrito pensando em três perfis de leitor. Você provavelmente se reconhece em um deles.

**Perfil A — nunca programou.** Você usa computador no trabalho, talvez planilhas com alguma fórmula, e quer entender como transformar problemas do seu dia a dia em soluções com tecnologia. Para você, a Parte III (literacia tecnológica) é essencial e foi escrita a partir do zero. Os blocos marcados como *Fundamental* garantem o conceito mínimo de cada assunto. Você não precisará escrever código sozinho; vai aprender a especificar, delegar e verificar.

**Perfil B — usa IA e automação, mas não projeta sistemas.** Você já pede coisas a assistentes de IA, talvez já tenha montado automações em plataformas visuais. O risco para você é achar que o livro é óbvio nas primeiras páginas e pular para a parte de construção. Não faça isso. As Partes II e IV são exatamente o que falta para que suas automações deixem de ser frágeis. Os exercícios de auditoria e os casos negativos vão mostrar onde o seu jeito atual de trabalhar falha.

**Perfil C — profissional técnico.** Você programa ou já trabalhou com sistemas. Para você, parte da Parte III será revisão rápida. O ganho está em três lugares: no enquadramento de problemas e modelagem de processos (que técnicos frequentemente pulam), na disciplina de decisão e validação, e no uso de IA como colaborador em todas as etapas, não só na escrita de código. Os blocos *▲ Avançado* e os desafios marcados com **A** foram escritos para você.

### O que você vai conseguir fazer ao final

O objetivo é que, diante de um problema que você nunca viu, em um domínio que não é o seu, você consiga:

1. formular o problema de modo que ele possa ser resolvido e verificado;
2. mapear o sistema em que o problema existe: pessoas, fluxos, ferramentas, fronteiras;
3. mapear o processo real, incluindo esperas, retrabalho e exceções;
4. identificar os dados envolvidos, suas fontes e sua qualidade;
5. identificar as regras, inclusive as que ninguém escreveu;
6. reconhecer onde há oportunidades de intervenção — e onde não há;
7. propor alternativas em diferentes níveis de complexidade;
8. comparar alternativas por critérios explícitos e decidir, registrando a decisão;
9. especificar o que deve ser construído, com critérios de aceitação;
10. delegar partes da construção a IA ou a outras pessoas, sabendo o que não delegar;
11. supervisionar a construção em incrementos verificáveis;
12. testar, inclusive os casos em que as coisas dão errado;
13. validar se a solução resolve o problema original, com evidência;
14. evoluir a solução e coordenar pessoas, sistemas e IAs ao longo do tempo.

Essa lista é o critério de sucesso do livro. Ela volta no Capítulo 36, na forma de um exame de transferência.

### Como o livro está organizado

| Parte | Função | Pergunta central |
|---|---|---|
| I — A nova forma de resolver problemas | Apresentar o método e seus instrumentos | O que muda quando construir fica barato? |
| II — Aprender a pensar | Desenvolver o raciocínio anterior a qualquer tecnologia | Qual é o problema e como o sistema funciona hoje? |
| III — Aprender a enxergar tecnologia | Dar literacia sobre os componentes de sistemas digitais | Do que sistemas digitais são feitos? |
| IV — Aprender a projetar | Transformar entendimento em decisões e especificações | O que exatamente deve ser construído, e por quê? |
| V — Construir com IA | Conduzir a construção usando IA como colaborador | Como construir sem perder o controle? |
| VI — Construir algo confiável | Testar, validar, proteger, observar, evoluir | Como saber que funciona e continuará funcionando? |
| VII — Projetos | Aplicar tudo em onze projetos progressivos | Consigo fazer isso de verdade? |
| VIII — Domínio e transferência | Avaliar competências e transferi-las | Aprendi o conceito ou decorei o procedimento? |
| IX — O produto educacional | Orientar quem conduz, avalia e mantém o método | Como isso funciona sem depender do autor? |

A progressão segue uma ordem deliberada: **pensar → modelar → decidir → especificar → construir → testar → validar → evoluir → orquestrar.** Capítulos posteriores pressupõem os anteriores e não ensinam de novo o que já deveria estar dominado; quando retomam um conceito, é para usá-lo em um nível mais alto. Se você chegar a um capítulo e sentir que falta base, a referência ao capítulo anterior está indicada no texto.

### Camadas: Fundamental, Prática e Avançado

Nem todo leitor precisa da mesma profundidade em todos os assuntos. O texto principal de cada capítulo é escrito para ser acessível a todos. Além dele:

- **Fundamental (F)** — o conceito mínimo. Se você é do Perfil A, garanta que domina tudo o que é marcado assim antes de avançar.
- **Prática (P)** — aplicação do conceito em situação concreta. É o nível esperado de todos os leitores.
- **Avançado (A)** — aprofundamento para quem já domina o básico, sinalizado no texto por caixas *▲ Avançado* e, nos exercícios, pela letra **A**. Pular essas partes não compromete a progressão.

### Os cinco modos de uso de IA

Um livro que ensina a usar IA precisa ensinar também a não depender dela. Por isso, todos os exercícios e projetos indicam o modo em que a IA pode ser usada.

| Modo | Nome | O que significa | Por que existe |
|---|---|---|---|
| **M0** | Sem IA | Você faz sozinho, sem nenhum assistente. | Construir o raciocínio próprio que depois vai supervisionar a IA. |
| **M1** | IA crítica | Você produz primeiro. Depois, a IA apenas critica. | Aprender a receber crítica sem terceirizar o pensamento. |
| **M2** | IA alternativas | A IA gera opções; você compara, decide e justifica. | Ampliar o espaço de soluções mantendo a decisão com você. |
| **M3** | IA implementa | Você especifica; a IA constrói; você verifica. | Praticar delegação e supervisão. |
| **M4** | Auditoria | Você recebe um resultado (geralmente produzido por IA) e precisa encontrar o que está errado. | Treinar a desconfiança qualificada. |

O princípio por trás dos modos atravessa o livro inteiro:

> **Princípio da responsabilidade** — A IA pode construir. Você continua responsável por decidir se aquilo deveria existir, como deveria funcionar e se está correto.

Respeite os modos. Fazer um exercício M0 com IA não é trapaça contra o livro; é trapaça contra a sua própria formação. O exercício existe para que você descubra o que consegue pensar sozinho.

### Exercícios, gabaritos e projetos

Os exercícios são numerados por capítulo (Exercício 4.2 é o segundo exercício do Capítulo 4) e marcados com camada e modo, por exemplo: **Exercício 4.2 · P · M0**. Muitos exercícios têm uma caixa **Para conferir** com um gabarito comentado: não uma resposta única, mas os elementos que uma boa resposta precisa conter e os erros mais comuns. Use-a depois de fazer o exercício, nunca antes.

Os onze projetos (P00 a P10) estão reunidos na Parte VII, mas **não devem ser feitos só no final**. Cada projeto fica disponível quando você termina os capítulos de que ele depende:

| Projeto | Faça depois de | Tema |
|---|---|---|
| P00 — Diagnóstico | Capítulo 5 | Transformar situação vaga em problema definido |
| P01 — Automação pessoal | Capítulo 15 | Automação simples e de baixo risco |
| P02 — Sistema pessoal | Capítulo 19 | Sistema pequeno com dados, estados e decisões |
| P03 — Processo real | Capítulo 20 | Mapear um processo real e propor melhoria |
| P04 — Automação robusta | Capítulo 24 | Exceções, logs e recuperação |
| P05 — Integração | Capítulo 25 | Integrar dois ou mais sistemas |
| P06 — Aplicação | Capítulo 26 e Capítulo 30 | Aplicação funcional de ponta a ponta |
| P07 — IA aplicada | Capítulo 27 e Capítulo 31 | Comparar solução determinística e solução com IA |
| P08 — Sistema com agente | Capítulos 29 e 32 | Contexto, ferramentas, limites e supervisão |
| P09 — Projeto profissional | Parte VI completa | Problema real de terceiro |
| P10 — Capstone | Livro completo | Problema altamente ambíguo, de ponta a ponta |

Projetos têm rubrica, critérios de aprovação e um resultado de portfólio. Um projeto só está concluído quando seus critérios de aprovação são atendidos — não quando você "terminou de fazer".

### O diário de bordo

Desde o primeiro capítulo, mantenha um diário de bordo: um arquivo de texto, um caderno, o que preferir. Ao final de cada sessão de estudo ou de trabalho em projeto, registre cinco linhas:

```
DATA:
O QUE FIZ:            (uma ou duas frases)
O QUE DECIDI E POR QUÊ:
O QUE A IA FEZ E COMO VERIFIQUEI:
O QUE ERREI OU ME SURPREENDEU:
DÚVIDA ABERTA:
```

Parece burocracia. Não é. O diário é a matéria-prima de três coisas que o livro vai pedir depois: o Decision Log dos projetos, os casos de portfólio e a reflexão metacognitiva que diferencia quem aprendeu de quem apenas executou. Quem não registra não consegue reconstruir, meses depois, por que tomou uma decisão — e portanto não consegue aprender com ela.

### Trilhas e ritmo

As estimativas abaixo são estimativas de projeto pedagógico, ainda não medidas com turmas reais (a Parte IX explica como medi-las). Use-as para planejar, não como promessa.

| Trilha | Para quem | Como percorrer |
|---|---|---|
| Fundamental | Perfil A | Leitura integral; todos os exercícios F e P; caminho "sem código" nos projetos. |
| Prática | Perfil B | Leitura integral; atenção redobrada às Partes II, IV e VI; exercícios M4 obrigatórios. |
| Avançada | Perfil C | Leitura rápida da Parte III; todos os blocos ▲ e exercícios A; caminho "com código" nos projetos. |

O ritmo que tende a funcionar melhor é regular e moderado: algumas sessões por semana, com um projeto sempre em andamento. A leitura sem projeto produz a sensação de ter entendido; o projeto revela o que de fato foi entendido.

Se você estuda sozinho, combine com alguém (um colega, um amigo) para apresentar seus projetos P03, P06 e P09. Explicar uma decisão para outra pessoa é uma das formas mais eficazes de descobrir que ela era fraca. Se você estuda em grupo ou com mentor, a Parte IX descreve os formatos acompanhados.

### Materiais necessários

Você vai precisar de pouco:

- um computador com acesso à internet;
- um editor de texto e uma ferramenta de notas (para o diário e os artefatos);
- uma planilha eletrônica;
- acesso a pelo menos um assistente de IA de uso geral;
- a partir do Projeto P01, acesso a alguma forma de automação: uma plataforma de automação visual, recursos de automação da sua planilha ou de seu sistema de e-mail, ou um ambiente para executar pequenos programas;
- a partir do Projeto P06, alguma forma de construir uma aplicação simples: uma plataforma de construção sem código, um assistente de programação ou um ambiente de desenvolvimento.

O livro não exige nenhuma ferramenta específica e não recomenda marcas. Quando um exemplo precisar de uma ferramenta, ele descreverá a *categoria* (por exemplo, "plataforma de automação visual") e o que você deve procurar nela.

### Convenções visuais

Ao longo do texto, você encontrará caixas com funções diferentes:

> **Caso Vértice / Caso Marzipã / Caso Casa** — a evolução de um dos três casos recorrentes.

> **Anti-padrão** — um erro recorrente, com sintoma, causa e correção.

> **Princípio** — uma regra do método que vale em qualquer contexto.

> **Ficha** — referência compacta de um conceito tecnológico, sempre com as mesmas perguntas.

> **▲ Avançado** — aprofundamento opcional.

> **Para conferir** — gabarito comentado de um exercício.

Diagramas são desenhados em texto, de propósito: você deve conseguir reproduzi-los num caderno ou num editor qualquer. Um diagrama que só existe numa ferramenta específica não serve como instrumento de pensamento.

### Sobre ferramentas, marcas e versões

Ferramentas mudam rápido; o método foi escrito para durar mais do que elas. Por isso o livro fala de *interfaces*, *bancos de dados*, *APIs*, *modelos de linguagem* e *plataformas de automação*, e não de produtos. Quando você estiver lendo, algumas capacidades da IA terão melhorado e outras ferramentas terão surgido. Isso não muda a competência central: entender o problema, decidir, especificar, verificar. Sempre que o livro afirmar algo sobre o que a IA "consegue" ou "não consegue" fazer, trate como afirmação a ser verificada no momento do uso — o Capítulo 16 ensina como.

### Os três casos recorrentes

**Caso Vértice.** O laboratório de controle de qualidade de uma fábrica de médio porte que produz alimentos e cosméticos. O laboratório recebe amostras da produção e de fornecedores, executa ensaios, compara resultados com especificações e emite laudos que liberam ou bloqueiam lotes. A coordenadora, Beatriz, chega ao início do livro com um pedido: "precisamos de um sistema com IA para os laudos". Esse caso representa ambientes técnicos, regulados e com muitas regras.

**Caso Marzipã.** Uma confeitaria pequena que produz bolos e doces sob encomenda. A dona, Helena, trabalha com duas confeiteiras e um entregador terceirizado. Os pedidos chegam por mensagens de texto, com informações incompletas e alterações de última hora. Helena chega com outro pedido: "quero um chatbot com IA para atender os clientes". Esse caso representa pequenos negócios, com recursos limitados e alta variação.

**Caso Casa.** Lucas organiza a administração doméstica de uma família de quatro pessoas: contas, assinaturas, documentos com validade, garantias de produtos, consultas médicas, prazos escolares. Ele chega dizendo: "vivo pagando multa e perdendo prazo; quero automatizar minha vida". Esse caso representa sistemas pessoais, de baixo risco técnico, mas com dados sensíveis.

Os três casos evoluem ao longo do livro pela mesma cadeia: **situação → problema → sistema → processo → dados → regras → oportunidades → alternativas → arquitetura → implementação → teste → validação → evolução.** Você vai ver cada caso parcialmente em vários capítulos. No início da Parte VII, o Caso Vértice aparece completo, do começo ao fim, para que você veja a cadeia inteira antes de percorrê-la nos seus próprios projetos.

### Autodiagnóstico de entrada

Antes de começar, responda às afirmações abaixo com 0 (não consigo), 1 (consigo com dificuldade ou ajuda) ou 2 (consigo com segurança). Guarde as respostas no diário de bordo: você vai repetir este diagnóstico no Capítulo 36 e comparar.

| # | Afirmação | 0–2 |
|---|---|---|
| 1 | Consigo distinguir o problema de alguém da solução que essa pessoa está pedindo. | |
| 2 | Consigo desenhar como um processo de trabalho funciona de verdade, incluindo exceções. | |
| 3 | Consigo identificar quais dados um processo usa, de onde vêm e onde ficam guardados. | |
| 4 | Consigo escrever as regras de decisão de um processo de forma que outra pessoa as aplique igual a mim. | |
| 5 | Consigo explicar o que é uma API e o que acontece quando dois sistemas se integram. | |
| 6 | Consigo propor três soluções diferentes para um problema, com custos e riscos distintos. | |
| 7 | Consigo escrever critérios que permitam dizer, sem discussão, se algo construído está correto. | |
| 8 | Consigo pedir a uma IA a construção de um componente e verificar se o resultado está certo. | |
| 9 | Consigo testar algo pensando nos casos em que ele deveria falhar. | |
| 10 | Consigo provar para outra pessoa que uma solução resolveu o problema original. | |

Não existe pontuação "boa" de entrada. O diagnóstico serve para que você saiba onde prestar mais atenção e, no final, para medir o próprio percurso.

## Capítulo 1 — De tarefas a problemas

### Duas pessoas, o mesmo pedido

Imagine que duas pessoas recebem, no mesmo dia, o mesmo pedido de Helena, a dona da Confeitaria Marzipã: "quero um chatbot com IA para atender os clientes".

A primeira pessoa trata o pedido como uma tarefa. Pesquisa ferramentas de chatbot, escolhe uma, pede a um assistente de IA um texto de instruções para o robô ("você é o atendente simpático de uma confeitaria..."), conecta ao aplicativo de mensagens, testa com algumas perguntas e entrega. A demonstração é ótima: o robô responde educadamente, explica os sabores, informa o endereço.

Na segunda semana, o robô confirma um bolo de três andares para um sábado em que a confeitaria já estava com a produção esgotada. Informa um preço desatualizado. Promete entrega num bairro que o entregador não atende. Uma cliente pede para mudar o recheio de um pedido já em produção, o robô responde "claro, alterado!", e ninguém na confeitaria fica sabendo. Helena desliga o robô e volta a responder tudo sozinha — agora desconfiada de tecnologia.

A segunda pessoa trata o pedido como o sintoma de um problema. Antes de escolher qualquer ferramenta, faz perguntas. Por que um chatbot? "Porque eu passo o dia respondendo mensagem e não consigo produzir." Quais mensagens tomam mais tempo? "As de pedido. A pessoa manda 'quero um bolo pra sábado' e eu tenho que perguntar tudo: tamanho, sabor, recheio, se vai buscar ou receber, endereço, nome pra pôr no bolo." O que dá errado hoje? "Esqueço de anotar alteração. Aceito pedido demais pro mesmo dia. Às vezes o sinal não cai e eu não percebo." Quanto custa um erro? "Um bolo errado num aniversário é uma cliente que não volta."

Ao final da conversa, o problema não é "falta um chatbot". O problema é: **pedidos chegam incompletos e desestruturados, a capacidade de produção não é verificada antes da confirmação, e alterações e pagamentos não são registrados num lugar único — o que consome o tempo de Helena e gera erros com custo alto para o negócio.**

Esse problema admite várias soluções, e um chatbot autônomo é uma das piores para a parte mais crítica (confirmar pedidos), embora a IA possa ser muito útil em outra parte (organizar as mensagens que chegam em rascunhos de pedido para Helena aprovar). Você verá essa história se desenrolar ao longo do livro.

As duas pessoas tinham acesso às mesmas ferramentas. A diferença entre elas não era técnica. Era a pergunta que cada uma fez primeiro.

### Tarefa, problema, sintoma e solução disfarçada

Vale fixar quatro termos que o livro vai usar com precisão.

Uma **situação** é o estado de coisas como alguém o percebe, geralmente de forma vaga: "os laudos atrasam", "vivo perdendo prazo", "o atendimento é uma bagunça".

Um **sintoma** é uma manifestação observável de que algo não vai bem: o cliente reclamou, a multa chegou, o lote ficou parado esperando laudo.

Um **problema** é uma diferença entre o estado atual e um estado desejado, que importa para alguém, que pode ser descrita e — idealmente — medida, e que existe dentro de restrições. Um problema bem formulado diz *para quem* é um problema, *qual* é a diferença, *por que* importa e *como se saberia* que foi resolvido.

Uma **tarefa** é uma ação já escolhida: "faça um chatbot", "monte uma planilha", "automatize os e-mails". Toda tarefa carrega uma decisão embutida — a decisão de que aquela ação resolve algum problema. Quando a tarefa chega pronta, essa decisão quase nunca foi examinada.

É por isso que tantos pedidos são **soluções disfarçadas de problema**. "Precisamos de um sistema com IA para os laudos" já escolheu a forma (sistema), a tecnologia (IA) e o objeto (laudos), sem dizer qual é a diferença entre o que acontece hoje e o que deveria acontecer.

O primeiro movimento do método é sempre desfazer esse disfarce: voltar da tarefa para o problema. Não por purismo, mas porque o espaço de soluções muda completamente. "Fazer um chatbot" tem uma solução. "Reduzir o tempo de Helena gasto com pedidos e eliminar erros de capacidade e alteração" tem dezenas — de uma mensagem-modelo com os campos obrigatórios até um sistema de pedidos com IA na triagem.

> **Princípio** — Toda tarefa esconde uma decisão. Antes de executá-la, descubra qual problema ela supostamente resolve e se é a melhor forma de resolvê-lo.

Isso não significa recusar pedidos ou transformar cada conversa num interrogatório. Muitas vezes a tarefa pedida é, de fato, uma boa solução. A diferença é que, depois de examinar o problema, você sabe *por que* ela é boa, *o que* ela precisa garantir e *como* verificar se funcionou.

### A transformação que este livro busca

O ponto de partida típico é este:

> "Tenho uma tarefa. Quero que a IA faça."

O ponto de chegada é este:

> "Tenho um problema. Consigo entender o sistema, decompor o problema, identificar dados e regras, avaliar alternativas tecnológicas, projetar uma solução, delegar partes da construção para IA ou software, testar o resultado, validar se ele realmente resolve o problema e evoluí-lo."

A distância entre essas duas frases não é de conhecimento sobre ferramentas. É de **estrutura de pensamento**. A segunda frase descreve uma sequência de operações intelectuais que pode ser aprendida, praticada e avaliada. Este livro trata cada uma delas como uma competência, com definição, comportamento observável e forma de avaliação (a matriz completa está no Capítulo 35).

### Procedimento e conceito

Há duas maneiras de aprender algo, e a diferença entre elas é o que decide se você conseguirá resolver problemas que nunca viu.

Quem aprende um **procedimento** aprende uma sequência de passos que funciona num tipo de situação: "para automatizar o envio de lembretes, crie um gatilho de data, uma condição de status e uma ação de e-mail". Quando a situação muda um pouco — o lembrete agora depende de uma resposta do cliente, ou precisa evitar mensagens duplicadas —, o procedimento quebra, e quem só o conhece fica sem saída.

Quem aprende um **conceito** aprende *por que* os passos existem: um gatilho é o evento que inicia a automação; uma condição filtra os casos em que ela deve agir; uma ação muda algo no mundo; e toda ação que muda o mundo precisa considerar o que acontece se for executada duas vezes. Com o conceito, a pessoa reconstrói o procedimento adequado para a situação nova.

Este livro usa procedimentos — templates, checklists, protocolos — porque eles são úteis e reduzem erros. Mas cada procedimento vem acompanhado do conceito que o justifica, e a avaliação foi desenhada para distinguir quem entendeu de quem decorou: os projetos e exercícios variam domínio, ferramenta, usuário, escala e risco justamente para que a repetição mecânica não funcione.

### O que este método resolve

Na prática, projetos que envolvem tecnologia falham por três razões principais, e o método foi organizado para atacar as três.

**Construir a coisa errada.** O sistema funciona, mas resolve um problema que não existia, ou resolve o problema de uma pessoa ignorando o de outras, ou ataca o sintoma em vez da causa. As Partes I e II existem para isso.

**Construir a coisa certa do jeito errado.** O sistema resolve o problema certo, mas é frágil: quebra com entradas inesperadas, duplica registros, expõe dados, depende de uma pessoa que sabe "como mexer", custa mais para manter do que economiza. As Partes III, IV e V existem para isso.

**Não saber se funcionou.** O sistema foi entregue, mas ninguém sabe dizer se ele resolveu o problema, porque nunca se definiu o que mediria isso. As decisões erradas não são descobertas, e as certas não são reconhecidas. A Parte VI existe para isso.

### O que este livro não é

Para evitar expectativas erradas, é útil dizer claramente o que este livro não pretende ser.

**Não é um curso de prompts.** Você aprenderá a comunicar intenções e especificações para uma IA, mas o centro do trabalho está antes (entender, decidir) e depois (verificar). Um prompt excelente para o problema errado continua produzindo a solução errada.

**Não é um curso de programação.** Você vai ler trechos de código, entender estruturas de dados e supervisionar implementações, mas o objetivo não é formar programadores. Quem já programa vai encontrar aqui o que costuma faltar a programadores: enquadramento de problemas, modelagem de processos e validação.

**Não é um tutorial de ferramentas.** Nenhuma ferramenta específica é ensinada. Ferramentas aparecem como exemplos de categorias.

**Não é propaganda de IA.** Em vários momentos o livro vai recomendar *não* usar IA, ou usá-la apenas numa pequena parte do problema. A pergunta nunca é "consigo usar IA?", mas "IA é a melhor solução para esta parte do problema?".

**Não é um curso jurídico.** Segurança e privacidade são tratadas como pensamento de risco, e não como interpretação de legislação. Quando houver obrigação legal envolvida, o livro indicará que é preciso consultar quem é responsável por ela.

**Não é uma promessa de resultado profissional.** O livro desenvolve competências e produz evidências de portfólio. O que você fará com elas depende de muitos fatores que nenhum material controla.

### Um mapa dos erros que o livro combate

Alguns erros aparecem com tanta frequência que merecem nome. Este livro chama esses erros de **anti-padrões** e os trata explicitamente no capítulo em que podem ser corrigidos. Eles se agrupam em quatro famílias.

| Família | Anti-padrão | Onde é tratado |
|---|---|---|
| **Começar errado** | Começar pela ferramenta | Cap. 4 |
| | Começar pelo prompt | Cap. 21 |
| | Usar IA por moda | Cap. 27 |
| | Construir antes de entender | Cap. 8 |
| **Automatizar errado** | Automatizar processo ruim | Cap. 8 |
| | Confundir automação com melhoria de processo | Cap. 15 |
| | Adicionar complexidade desnecessária | Cap. 19 e Cap. 29 |
| | Ignorar exceções | Cap. 10 e Cap. 24 |
| **Confiar errado** | Confiar cegamente no output | Cap. 22 |
| | Não definir critérios de aceitação | Cap. 18 |
| | Não testar casos negativos | Cap. 30 |
| | Confundir demonstração com validação | Cap. 31 |
| | Confundir protótipo com produto | Cap. 26 |
| **Sustentar errado** | Não registrar decisões | Cap. 20 |
| | Depender de uma ferramenta | Cap. 34 |
| | Confundir prompt com especificação | Cap. 21 |

O Apêndice F reúne todos eles num catálogo de consulta, com sintomas, causas e correções.

### Exercícios

**Exercício 1.1 · F · M0** — Para cada pedido abaixo, identifique a decisão embutida (o que já foi escolhido) e reescreva-o como uma pergunta sobre o problema.

a) "Quero uma planilha para controlar as férias da equipe."
b) "Precisamos de um aplicativo para os pacientes marcarem consulta."
c) "Quero que a IA leia os contratos e me diga o que tem de errado."
d) "Automatiza o envio das notas fiscais por e-mail."

> **Para conferir** — Uma boa resposta separa *forma*, *tecnologia* e *objeto* do pedido. No item (b), por exemplo, a decisão embutida é que o problema está no ato de marcar (e não, digamos, em faltas, remarcações ou na agenda dos profissionais) e que um aplicativo é o meio adequado. Uma boa pergunta seria: "O que acontece hoje com o agendamento que causa prejuízo, e para quem?". Respostas que apenas trocam a palavra ("uma ferramenta para agendar") não desfizeram o disfarce.

**Exercício 1.2 · F · M0** — Escolha um pedido que você recebeu ou fez recentemente no trabalho ou em casa. Escreva: (a) a situação como foi descrita; (b) os sintomas observáveis; (c) uma primeira formulação do problema; (d) a tarefa que foi pedida; (e) se a tarefa ainda parece a melhor solução depois de (c). Guarde esta resposta: ela pode virar o ponto de partida do Projeto P00.

**Exercício 1.3 · P · M0** — Retome a história das duas pessoas e do chatbot. Liste todos os problemas que surgiram na segunda semana e, para cada um, diga que pergunta, se feita antes da construção, teria revelado o risco.

**Exercício 1.4 · P · M1** — Escreva, sem ajuda, um parágrafo explicando a um colega a diferença entre aprender um procedimento e aprender um conceito, com um exemplo do seu trabalho. Depois peça a uma IA que critique seu parágrafo: o exemplo é bom? A distinção ficou clara? Registre no diário quais críticas você aceitou e quais rejeitou, e por quê.

## Capítulo 2 — O que a IA mudou e o que ela não mudou

### O que ficou barato

Assistentes baseados em modelos de linguagem tornaram baratas várias atividades que antes exigiam tempo de pessoas qualificadas:

- **produzir uma primeira versão** de código, texto, tabela, automação, análise ou especificação;
- **explicar** um conceito, um trecho de código, um documento técnico, sob demanda e no nível que você pedir;
- **transformar** conteúdo de uma forma em outra: um e-mail em uma lista de campos, uma tabela em um texto, uma descrição em um diagrama;
- **lidar com entradas não estruturadas**: ler mensagens escritas de qualquer jeito, documentos em formatos variados, anotações, e extrair delas algo organizado;
- **gerar alternativas**: dez formas de decompor um problema, cinco arquiteturas possíveis, vinte casos de teste.

A consequência mais importante não é que "a IA faz o trabalho". É que **o custo de experimentar caiu**. Construir uma versão para ver se uma ideia funciona, que antes levava semanas, pode levar horas. Isso muda o modo como se deve trabalhar: dá para testar mais hipóteses, mais cedo.

### O que não ficou barato

Outras coisas continuam exatamente tão caras quanto antes — e algumas ficaram relativamente mais caras, porque agora são o gargalo.

**Decidir qual problema resolver.** Nenhum modelo sabe qual é o problema de Helena sem conversar com Helena, observar a confeitaria e entender o que custa caro para ela. A IA pode ajudar a fazer melhores perguntas, mas a resposta está no mundo.

**Saber o que é "correto".** Para julgar se um sistema de pedidos está certo, é preciso saber quais são as regras do negócio — incluindo as que ninguém escreveu. A IA preenche lacunas com suposições plausíveis. Plausível não é correto.

**Verificar.** Produzir algo ficou rápido; verificar se está certo não ficou na mesma proporção. Um sistema gerado em uma hora pode exigir um dia de testes cuidadosos. Quem não reserva tempo para verificar acumula erros na mesma velocidade em que acumula entregas.

**Assumir as consequências.** Quando um lote é liberado com base num laudo errado, quando um cliente recebe o bolo errado, quando um dado pessoal vaza, a responsabilidade é de pessoas. Nenhum assistente responde por isso.

**Mudar o comportamento das pessoas.** Um processo depende de gente que precisa adotar uma nova forma de trabalhar. Isso continua exigindo conversa, negociação, treinamento e tempo.

### O gargalo mudou de lugar

Uma forma útil de visualizar a mudança é pensar onde se concentra o esforço de um projeto.

```
ANTES                                   AGORA
esforço                                 esforço
  │                                       │
  │        ████                           │  ████                    ████
  │        ████                           │  ████                    ████
  │  ██    ████    ██                     │  ████    ██    ██        ████
  │  ██    ████    ██    ██               │  ████    ██    ██   ██   ████
  └──────────────────────────             └─────────────────────────────────
   entender construir verificar          entender especif. construir verificar
            (dominante)                     e decidir              e validar
```

Antes, construir era a etapa dominante e todas as outras se organizavam em torno dela. Agora, a construção encolheu, e as etapas que a cercam — entender, decidir, especificar, verificar — passaram a determinar o resultado. Quem continua investindo a maior parte do tempo em "fazer" e quase nada em "entender" e "verificar" está otimizando a parte errada do processo.

Isso tem uma consequência prática que atravessa o livro: **a qualidade do que você recebe de uma IA é limitada pela qualidade do que você consegue especificar e verificar.** Se você não sabe descrever o que é um pedido válido na Confeitaria Marzipã, nenhum assistente vai construir um sistema que só aceite pedidos válidos — e você não vai perceber quando ele aceitar um inválido.

### Os novos riscos

A redução do custo de construção trouxe riscos que antes eram raros.

**Erros plausíveis.** O output de um modelo de linguagem tem a forma de algo correto: código bem indentado, texto fluente, tabela organizada. Erros de forma eram fáceis de notar; erros de conteúdo embrulhados em forma impecável não são. É mais fácil desconfiar de um texto mal escrito do que de um código elegante que trata errado o caso em que o cliente cancela.

**Velocidade que amplifica erros.** Se você constrói dez automações num dia sem critérios de aceitação, terá dez automações não verificadas operando no mundo real. O erro de enquadramento que antes custava um projeto agora pode se espalhar por vários.

**Ilusão de competência.** Ler uma explicação clara dá a sensação de ter entendido. Ver um sistema funcionar dá a sensação de que ele está correto. Nenhuma das duas sensações é evidência. O livro usa exercícios sem IA (modo M0) e de auditoria (modo M4) para expor essa ilusão.

**Dependência.** Quem só consegue resolver problemas pedindo à IA não consegue avaliar a resposta da IA. E não consegue trabalhar quando a ferramenta muda, sai do ar ou não pode ser usada por razões de sigilo.

**Opacidade.** Sistemas construídos rapidamente, por pedidos sucessivos a uma IA, frequentemente não têm documentação, decisões registradas nem alguém que saiba explicar como funcionam. Quando quebram, ninguém sabe por onde começar.

### Três atitudes erradas e uma certa

Diante da IA, três atitudes são comuns e todas atrapalham.

**IA como mágica.** A pessoa acredita que basta pedir. Descreve o resultado desejado em uma frase e espera que o sistema entenda o contexto, as regras e os casos especiais. Quando o resultado falha, conclui que precisa de um prompt melhor — e não de um entendimento melhor do problema.

**IA como inimiga.** A pessoa rejeita a IA por princípio, por medo ou por uma experiência ruim. Perde a capacidade de experimentar rapidamente, de explorar alternativas e de delegar trabalho mecânico, e fica limitada ao que consegue fazer sozinha.

**IA como oráculo.** A pessoa usa a IA como fonte de verdade: pergunta e acredita. É a atitude mais perigosa, porque parece responsável ("eu pesquisei") e não é.

A atitude que o livro ensina é tratar a **IA como colaborador intelectual e técnico sob supervisão**. Uma analogia útil: a IA se comporta como um consultor externo extremamente rápido, que conhece muita coisa em termos gerais e nada sobre a sua situação específica — a menos que você conte —, que raramente diz "não sei" por iniciativa própria e que não sofre as consequências se errar. Você aproveitaria muito esse consultor. Mas não assinaria nada que ele produzisse sem ler, não o deixaria decidir sozinho o que é importante para o seu negócio e certamente daria a ele todo o contexto necessário antes de pedir qualquer coisa. O Capítulo 22 transforma essa atitude em dez protocolos de colaboração.

### O que é durável

Se as ferramentas mudam a cada poucos meses, o que vale a pena aprender? Este livro aposta em competências que não dependem de nenhuma versão de modelo ou plataforma:

- formular problemas de modo verificável;
- enxergar sistemas, fluxos e efeitos indiretos;
- mapear processos reais;
- pensar em dados: entidades, estados, fontes, qualidade;
- explicitar regras e exceções;
- reconhecer os componentes de um sistema digital e como se conectam;
- tomar decisões comparando alternativas e registrá-las;
- especificar com critérios de aceitação;
- delegar com contexto e verificar o que foi delegado;
- testar pensando em como as coisas falham;
- validar com evidência;
- pensar em risco, segurança e privacidade;
- coordenar pessoas, sistemas e IAs.

Uma pessoa com essas competências se beneficia de cada nova ferramenta que surge, porque sabe onde encaixá-la e como avaliá-la. Uma pessoa sem elas fica dependente da próxima ferramenta prometer resolver o que ela não sabe formular.

> **Atenção** — Este livro foi escrito num momento em que as capacidades dos modelos de IA mudam com frequência. Afirmações como "modelos de linguagem podem produzir informações falsas com aparência de verdadeiras" descrevem comportamentos amplamente observados no momento da escrita. Antes de projetar algo que dependa de uma capacidade ou limitação específica, verifique-a com testes próprios, usando o método do Capítulo 27. Não confie em afirmações gerais — nem nas deste livro — quando a decisão for importante.

### Exercícios

**Exercício 2.1 · F · M0** — Pense em uma tarefa que você já fez ou pediu a uma IA. Estime quanto tempo foi gasto em cada etapa: entender o que era preciso, especificar, construir/produzir, verificar. A distribuição se parece mais com o gráfico "antes" ou "agora"? O que isso revela?

**Exercício 2.2 · P · M0** — Para cada um dos cinco riscos novos (erros plausíveis, velocidade que amplifica erros, ilusão de competência, dependência, opacidade), descreva uma situação concreta, do seu contexto, em que ele poderia acontecer, e uma prática que o reduziria.

**Exercício 2.3 · P · M4** — Peça a uma IA uma explicação de um assunto que você conhece muito bem (da sua profissão, de um hobby). Leia com atenção e marque: o que está correto, o que está impreciso, o que está errado e o que está ausente. O exercício mostra, num terreno que você domina, o tipo de erro que você não notaria num terreno que não domina.

> **Para conferir** — Se você não encontrou nenhum problema, faça perguntas mais específicas e mais próximas da prática real da sua área (casos limite, exceções, situações em que a regra geral não vale). Erros costumam aparecer quando se sai do conhecimento genérico. Anote os padrões: a explicação era confiante quando estava errada? Ela distinguia o que é consenso do que é opinião?

## Capítulo 3 — O método

### A competência central

O livro inteiro desenvolve uma única competência, que pode ser enunciada assim:

> **Diante de um problema, conduzir o caminho do entendimento à solução validada, decidindo em cada etapa qual combinação de pessoas, processos, software, automação e IA aumenta a capacidade de resolvê-lo — e permanecendo responsável pelo resultado.**

Três palavras dessa frase merecem atenção.

*Conduzir* significa que você não precisa executar todas as etapas sozinho, mas precisa saber em que etapa está, o que ela exige e quando ela terminou.

*Decidindo* significa que cada etapa termina numa escolha, e escolhas podem ser comparadas, justificadas e revisadas.

*Responsável* significa que delegar a construção não delega a responsabilidade. É você quem responde pela pergunta "isto deveria existir, funciona como deveria e está correto?".

### O ciclo de nove movimentos

O método organiza o trabalho em nove movimentos. Cada movimento tem uma pergunta central, produz um artefato e tem um erro típico.

| # | Movimento | Pergunta central | Artefatos principais | Erro típico |
|---|---|---|---|---|
| 1 | **Pensar** | Qual é o problema real, para quem, e como saberemos que foi resolvido? | Problem Statement, Project Brief, Stakeholder Map | Aceitar a tarefa pedida como se fosse o problema. |
| 2 | **Modelar** | Como o sistema e o processo funcionam hoje, com quais dados e regras? | System Map, Process Map, modelo de dados, tabelas de regras | Modelar o processo oficial em vez do real. |
| 3 | **Decidir** | Que tipo de intervenção, com qual arquitetura, e por quê? | Decision Log, ADR, Risk Register | Escolher a solução antes de gerar alternativas. |
| 4 | **Especificar** | O que exatamente deve ser construído, e como saberemos se está correto? | Requirements, Acceptance Criteria, AI Delegation Brief | Confundir intenção com especificação. |
| 5 | **Construir** | Como construir em incrementos que possam ser verificados um a um? | O próprio sistema, histórico de versões | Construir tudo de uma vez e testar no final. |
| 6 | **Testar** | Funciona como especificado, inclusive quando algo dá errado? | Test Plan, resultados de teste | Testar só o caso feliz. |
| 7 | **Validar** | Resolve o problema que motivou o projeto? | Validation Report | Confundir demonstração com validação. |
| 8 | **Evoluir** | O que aprendemos, e o que deve mudar agora? | Retrospective, Decision Log atualizado | Tratar a entrega como fim. |
| 9 | **Orquestrar** | Como coordenar pessoas, sistemas e IAs ao longo de tudo isso? | Mapa Humano–Máquina, plano de orquestração | Perder a visão do todo ao delegar as partes. |

O ciclo não é uma cascata. Ele tem retornos, e os retornos são uma parte saudável do trabalho:

```
        ┌──────────────────────────── ORQUESTRAR ────────────────────────────┐
        │                                                                    │
        │   PENSAR ──► MODELAR ──► DECIDIR ──► ESPECIFICAR ──► CONSTRUIR     │
        │     ▲          ▲            ▲             ▲              │         │
        │     │          │            │             │              ▼         │
        │     │          │            │             └──────────  TESTAR      │
        │     │          │            │       (falha: spec ambígua)│         │
        │     │          │            └──── (alternativa inviável) │         │
        │     │          └────── (modelo incompleto)               ▼         │
        │     └────────────── (não resolve o problema) ◄──────  VALIDAR      │
        │                                                          │         │
        │                         EVOLUIR ◄────────────────────────┘         │
        └────────────────────────────────────────────────────────────────────┘
```

Um teste que falha porque a especificação era ambígua manda você de volta para *Especificar*. Uma validação que mostra que a solução não muda o indicador que importava manda você de volta para *Pensar*. Isso não é fracasso do método; é o método funcionando. O fracasso é não ter os artefatos que permitem descobrir para onde voltar.

*Orquestrar* aparece envolvendo os outros oito movimentos porque não é uma etapa, mas uma camada: em qualquer momento, alguém precisa saber quem está fazendo o quê, o que depende do quê e o que ainda não foi verificado. Em projetos pequenos, essa camada é quase invisível. Em projetos com várias pessoas, vários sistemas e várias IAs trabalhando ao mesmo tempo, ela se torna o trabalho principal (Capítulo 38).

### Os seis princípios

Os movimentos dizem *o que* fazer. Os princípios dizem *como* decidir quando não há regra clara. Eles valem em qualquer domínio e com qualquer ferramenta.

> **Princípio 1 — Problema antes de solução.** Nenhuma ferramenta é escolhida antes de o problema estar formulado de modo verificável.

> **Princípio 2 — Intervenção mínima suficiente.** Entre as soluções que resolvem o problema, prefira a mais simples. Cada camada de complexidade precisa ser justificada pelo problema, não pela disponibilidade da tecnologia.

> **Princípio 3 — Evidência antes de confiança.** Nada é considerado correto porque parece correto, porque funcionou uma vez ou porque foi produzido por uma ferramenta sofisticada. Confiança é proporcional à evidência.

> **Princípio 4 — Responsabilidade não se delega.** Você pode delegar a execução a pessoas, software ou IA. Não pode delegar a responsabilidade de decidir se algo deveria existir e se está correto.

> **Princípio 5 — Decisões registradas são decisões revisáveis.** Uma decisão que não foi registrada, com alternativas e justificativa, não pode ser aprendida, contestada nem revertida com segurança.

> **Princípio 6 — Projete para a falha.** Todo sistema vai receber entradas inesperadas, depender de algo que sai do ar e ser usado de formas não previstas. A pergunta não é "vai falhar?", mas "o que acontece quando falhar?".

Quando dois princípios parecerem conflitar, explicite o conflito no Decision Log. Por exemplo: a solução mais simples (Princípio 2) pode não ter recuperação de falhas adequada (Princípio 6). A decisão sobre quanto de robustez é necessário depende do custo do erro — e essa avaliação precisa estar escrita.

### A Escada de Intervenção

O instrumento mais usado do livro é a Escada de Intervenção. Ela organiza as soluções possíveis para qualquer problema em degraus de complexidade crescente.

```
  8  DELEGAR AUTONOMIA      agente com ferramentas, limites e supervisão
  7  RECUPERAR CONHECIMENTO IA que consulta fontes (RAG)
  6  INCORPORAR IA PONTUAL  classificar, extrair, gerar, com revisão
  5  CONSTRUIR SOFTWARE     aplicação com interface, lógica e dados
  4  AUTOMATIZAR REGRAS     gatilho → condição → ação, determinístico
  3  ESTRUTURAR DADOS       tabela única, campos validados, fonte da verdade
  2  PADRONIZAR             checklist, template, formulário, nomenclatura
  1  REORGANIZAR            mudar responsabilidade, ordem, acordo, regra
  0  ELIMINAR               a atividade precisa mesmo existir?
```

Cada degrau acima aumenta, em geral, quatro coisas: o **custo de construir**, o **custo de manter**, o **risco** (há mais coisas que podem dar errado) e a **opacidade** (fica mais difícil entender por que o sistema fez o que fez). Em troca, aumenta a capacidade de lidar com volume, variação e complexidade.

A regra de uso é simples de enunciar e difícil de praticar:

> **Regra da Escada** — Comece a busca por soluções pelos degraus mais baixos. Suba um degrau apenas quando houver evidência de que os degraus abaixo não resolvem o problema, ou resolvem com custo maior do que o degrau acima.

Algumas observações sobre a escada:

**Os degraus se combinam.** Uma boa solução raramente fica num degrau só. No Caso Marzipã, a solução final combina o degrau 1 (Helena passa a confirmar pedidos só depois de verificar a capacidade do dia), o degrau 2 (uma mensagem-modelo com os campos obrigatórios), o degrau 3 (uma tabela única de pedidos), o degrau 4 (lembretes automáticos de pagamento) e o degrau 6 (IA que transforma mensagens livres em rascunhos de pedido). Nenhum degrau 8: um agente autônomo atendendo clientes foi considerado e rejeitado, por razões que você verá no Capítulo 29.

**Os degraus baixos não são "soluções menores".** Eliminar uma etapa inútil ou mudar quem é responsável por uma aprovação pode resolver mais do que qualquer software. E soluções dos degraus 0 a 3 são pré-requisito para as de cima: automatizar regras (4) exige dados estruturados (3), que exigem padronização (2).

**Pular degraus é o erro mais caro.** Quem salta direto para o degrau 6 ou 8 sem passar pelos de baixo constrói IA sobre dados desorganizados, regras não explícitas e um processo que ninguém entende. O resultado é um sistema caro, opaco e que automatiza a confusão.

> **Caso Casa** — Lucas queria "automatizar a vida". Quando aplicou a Escada, descobriu que três assinaturas que pagava todo mês não eram usadas por ninguém da família (degrau 0: eliminar), que metade das multas vinha de contas que chegavam por correio para um endereço antigo (degrau 1: reorganizar — atualizar o endereço e migrar para débito em conta) e que o resto do problema era não ter uma lista única de vencimentos (degrau 3: estruturar dados). Só depois disso uma automação de lembretes (degrau 4) fez sentido. Ele resolveu a maior parte do problema antes de automatizar qualquer coisa.

### Níveis de autonomia

Sempre que uma automação ou uma IA participa de um processo, é preciso decidir quanto ela pode fazer sem um humano. O livro usa seis níveis.

| Nível | Nome | O que a máquina faz | O que o humano faz |
|---|---|---|---|
| **N0** | Manual | Nada. | Tudo. |
| **N1** | Sugestão | Sugere uma ação ou resposta. | Decide e executa. |
| **N2** | Preparação | Prepara a ação (rascunho, registro, cálculo). | Revisa e aprova; a máquina executa após aprovação. |
| **N3** | Execução com veto | Executa e notifica. | Pode reverter dentro de um prazo. |
| **N4** | Execução com auditoria | Executa. | Audita uma amostra periodicamente. |
| **N5** | Autonomia | Executa sem supervisão regular. | Intervém só quando há alarme. |

A escolha do nível depende principalmente de quatro fatores:

- **custo do erro** — quanto custa uma ação errada?
- **reversibilidade** — dá para desfazer? Com que facilidade?
- **confiabilidade medida** — que evidência existe de que a máquina acerta nesse tipo de caso?
- **volume** — quantos casos por dia? Supervisão humana em cada caso é viável?

Um erro comum é tratar o nível de autonomia como característica da tecnologia ("esse agente é autônomo"). Não é. É uma **decisão de projeto**, tomada para cada ação, e pode mudar com o tempo: uma automação pode começar em N2 e, depois de semanas de evidência de acerto, passar a N3. Ou pode descer de N4 para N2 depois de um incidente.

> **Caso Marzipã** — Na solução de Helena, a IA que lê mensagens e monta rascunhos de pedido opera em N2: Helena revisa e aprova cada rascunho antes que vire pedido. O lembrete de pagamento opera em N3: é enviado automaticamente, e Helena pode cancelar se souber de algo que a automação não sabe. Confirmar um pedido nunca passa de N1: a confirmação envolve compromisso com a cliente e capacidade de produção, e o custo de um erro é alto.

### A escala de evidência

O Princípio 3 pede confiança proporcional à evidência. Para isso é preciso uma forma de dizer *quanta* evidência existe. O livro usa cinco níveis, que serão aprofundados no Capítulo 31.

| Nível | Nome | O que significa |
|---|---|---|
| **E0** | Opinião | "Acho que funciona." |
| **E1** | Demonstração | Funcionou nos exemplos que eu mostrei. |
| **E2** | Teste planejado | Passou num conjunto de testes definido antes, incluindo casos negativos e limites. |
| **E3** | Uso real controlado | Funcionou com usuários reais, num piloto, com o resultado medido contra o problema original. |
| **E4** | Uso sustentado | Continua funcionando ao longo do tempo, com métricas acompanhadas e falhas tratadas. |

Grande parte dos sistemas construídos com IA é declarada "pronta" em E1. Este livro pede, no mínimo, E2 para qualquer coisa que vá ser usada por outra pessoa, e E3 para qualquer coisa que vá ser chamada de solução para um problema.

### Os artefatos do método

Cada movimento produz artefatos. O Apêndice A traz templates completos para os dezesseis principais:

| Movimento | Artefatos |
|---|---|
| Pensar | T01 Project Brief · T02 Problem Statement · T05 Stakeholder Map |
| Modelar | T03 System Map · T04 Process Map |
| Especificar | T06 Requirements · T07 Acceptance Criteria · T10 AI Delegation Brief |
| Decidir | T08 Architecture Decision Record · T09 Decision Log · T13 Risk Register |
| Testar e validar | T11 Test Plan · T12 Validation Report |
| Evoluir | T14 Retrospective |
| Transversais | T15 Portfolio Case · T16 Competency Assessment |

Um desses artefatos deve ser começado já, antes de ser estudado em detalhe no Capítulo 20: o **Decision Log**, a lista das decisões do seu trabalho. Até lá, use uma versão mínima, com quatro campos por decisão:

```
DECISÃO:         o que foi decidido, numa frase
ALTERNATIVAS:    o que mais foi considerado
POR QUÊ:         a razão principal da escolha
COMO SABEREMOS:  o que indicaria, mais adiante, se a decisão foi boa ou ruim
```

Vários exercícios das Partes II a IV pedem que você registre decisões. Use essa versão mínima até o Capítulo 20, que acrescenta evidência, riscos, hipóteses e validação.

Artefatos não são burocracia quando cumprem uma de três funções: **ajudar você a pensar** (o ato de preencher revela lacunas), **comunicar** (outra pessoa, ou uma IA, consegue trabalhar a partir dele) ou **lembrar** (daqui a seis meses, alguém entende o que foi feito e por quê). Um artefato que não cumpre nenhuma dessas funções deve ser simplificado ou eliminado.

### Proporcionalidade

O método é o mesmo para uma automação de lembretes pessoais e para a reorganização de um laboratório inteiro. A profundidade não.

| Escala do problema | Exemplo | Profundidade dos artefatos |
|---|---|---|
| Pessoal, baixo risco | Lembrete de contas de Lucas | Meia página: problema, regra, critério de aceitação, três testes. |
| Equipe pequena, risco moderado | Pedidos da Marzipã | Problem Statement, Process Map, modelo de dados, Decision Log curto, Test Plan, piloto de duas semanas. |
| Organização, risco alto | Laudos do Vértice | Todos os artefatos, revisados por mais de uma pessoa, com Risk Register e validação formal. |

Um bom praticante percebe quando está fazendo método demais para um problema pequeno — e, principalmente, quando está fazendo método de menos para um problema grande. A regra prática: **a profundidade da análise deve ser proporcional ao custo de errar**, não ao tamanho do que será construído. Uma automação de três passos que envia dados de clientes para fora da empresa merece mais análise do que um sistema grande que só reorganiza dados internos não sensíveis.

### Exercícios

**Exercício 3.1 · F · M0** — Sem consultar o texto, escreva os nove movimentos e a pergunta central de cada um. Depois compare com a tabela. Os movimentos que você esqueceu ou confundiu indicam onde o seu modelo mental ainda está fraco.

**Exercício 3.2 · P · M0** — Para o problema que você formulou no Exercício 1.2, proponha pelo menos uma solução em cada degrau da Escada, do 0 ao 6. Algumas serão absurdas; tudo bem. Depois marque as que parecem viáveis e escreva qual seria o degrau mais baixo capaz de resolver a maior parte do problema.

> **Para conferir** — O objetivo do exercício não é acertar "a" solução, e sim forçar a busca nos degraus baixos. Se todas as suas soluções viáveis estão nos degraus 4 a 6, revise: em quase todo problema real existe alguma eliminação, reorganização ou padronização possível. Se você não conseguiu propor nada no degrau 0, pergunte: alguma etapa do processo existe só porque "sempre foi assim"?

**Exercício 3.3 · P · M0** — Para cada ação abaixo, escolha o nível de autonomia (N0 a N5) que você daria a uma automação e justifique com os quatro fatores (custo do erro, reversibilidade, confiabilidade, volume):

a) Classificar e-mails recebidos em pastas.
b) Enviar a um cliente a confirmação de que seu pagamento foi recebido.
c) Aprovar o reembolso de despesas abaixo de um valor.
d) Excluir arquivos de clientes com mais de cinco anos.
e) Responder a perguntas sobre o horário de funcionamento de uma loja.

> **Para conferir** — Não há resposta única, mas há justificativas fracas. (d) envolve ação irreversível sobre dados possivelmente sujeitos a obrigações de guarda: qualquer nível acima de N2 exige justificativa muito forte. (e) tem baixo custo de erro e alto volume: N4 ou N5 é razoável *se* a informação vier de uma fonte única e atualizada. Em (b), o ponto crítico é de onde vem a informação de que o pagamento foi recebido: se vier diretamente do sistema de pagamento, N4 é razoável; se for inferida de uma mensagem do cliente ("já paguei!"), nada acima de N1.

**Exercício 3.4 · A · M2** — Peça a uma IA que proponha uma solução para o problema do Exercício 1.2. Classifique a solução proposta nos degraus da Escada. Em seguida, pergunte à IA qual seria a solução mais simples possível que ainda resolvesse a maior parte do problema. Compare as duas respostas e registre no diário: a primeira proposta da IA estava no degrau mínimo suficiente? O que isso sugere sobre como pedir soluções?
