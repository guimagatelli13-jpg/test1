# PARTE B — O PRODUTO EDUCACIONAL

O Livro do Aluno foi escrito para quem aprende. Esta parte do Manual é escrita para quem vai **criar, conduzir, avaliar e manter** o método como produto educacional: o fundador, mentores, avaliadores, coordenadores de turma, parceiros corporativos.

Ela segue o próprio método. Trata o produto como um sistema, com problema, stakeholders, decisões, riscos e validação. E aplica a si mesma a regra que o livro aplica a tudo: **distinguir o que foi projetado do que foi comprovado**. Tudo o que esta parte descreve é estrutura. Nada aqui foi, ainda, validado com alunos ou com o mercado — e o Capítulo M4 diz exatamente o que precisaria acontecer para que fosse.

> **Atenção** — Neste Manual, os capítulos M1 a M4 pertencem ao próprio Manual. Referências a capítulos numerados de 1 a 38, aos projetos P00 a P10 e aos apêndices A a J remetem ao Livro do Aluno.

## Capítulo M1 — Founder Track

### O princípio da independência

O fundador de um método educacional enfrenta uma tentação: ser a peça que faz tudo funcionar. Ele explica melhor, responde às dúvidas, corrige os projetos, percebe quando um aluno está perdido. No início, isso parece qualidade. Na verdade, é um defeito de projeto: **um produto que depende do fundador não escala, não sobrevive à ausência dele e não pode ser avaliado**, porque não se sabe se os resultados vêm do método ou da pessoa.

O Founder Track descreve como o criador do método deve trabalhar para que o produto funcione sem ele. Ele tem nove frentes.

### 1. Aprender

Antes de ensinar o método, o fundador precisa praticá-lo integralmente. O primeiro passo é o teste descrito na Parte A deste Manual, que percorre a Trilha Essencial com o caso-guia; depois dele, o fundador completa o restante:

- fazer **todos os projetos, P00 a P10**, em domínios diferentes, com as mesmas regras de aprovação do aluno, avaliados por outra pessoa;
- manter o próprio **diário de bordo** e o próprio portfólio;
- registrar, em cada projeto, **onde o livro foi insuficiente**: o conceito que faltou, o exercício que não preparou, o template que não serviu.

Esse registro é a primeira fonte de melhoria do produto. Um fundador que não fez os projetos não sabe onde o aluno vai tropeçar.

### 2. Testar

O material precisa ser testado com pessoas reais antes de qualquer oferta em escala:

- **leitura acompanhada** — leitores dos perfis A, B e C leem um capítulo pensando em voz alta, enquanto alguém registra onde hesitam, onde se perdem, onde se entediam;
- **percurso cognitivo** — para cada exercício, alguém tenta resolvê-lo usando apenas o que veio antes no livro; se precisar de algo que não foi ensinado, há um problema de pré-requisito;
- **piloto pequeno** — uma turma reduzida percorre uma parte do livro com acompanhamento próximo, para observar o ritmo real, as dúvidas recorrentes e os projetos que travam.

### 3. Documentar

As decisões sobre o currículo são decisões de arquitetura do produto e devem ser registradas como tal: um **Decision Log do currículo**, com ADRs para decisões pedagógicas importantes ("por que a Parte II não tem exercícios com IA", "por que P07 é aprovado mesmo quando a IA perde"). Isso permite que outros mantenham o produto sem desfazer, por desconhecimento, decisões que tinham boas razões.

Além disso, cada versão do material tem **notas de versão** (o que mudou e por quê) e cada papel do produto (mentor, avaliador, coordenador) tem um **guia próprio**.

### 4. Validar

Validar o produto educacional significa obter evidência de que **o aluno aprende a resolver problemas que nunca viu antes** — a promessa central. Isso exige medir, no mínimo:

- **desempenho no exame de transferência**, antes e depois da formação, com problemas equivalentes e nunca vistos, corrigidos por avaliadores que não conhecem o aluno nem sabem se a prova é de entrada ou de saída;
- **aprovação nos projetos na primeira tentativa**, por projeto e por perfil de aluno;
- **concordância entre avaliadores** — duas pessoas, corrigindo o mesmo projeto de forma independente, chegam ao mesmo nível?;
- **aplicação posterior** — meses depois, o aluno aplicou o método num problema real? Com que resultado? (Com evidência, não só com declaração.)

A escala de evidência do Capítulo 31 vale aqui. "Os alunos gostaram" é E0. "Os alunos foram aprovados nos projetos" é E2 para o produto. "Os alunos melhoraram no exame de transferência, numa comparação adequada" é E3. "Ex-alunos continuam aplicando o método com resultados verificáveis" é E4.

### 5. Revisar

O produto tem ciclos de revisão regulares (Capítulo M3) e revisões extraordinárias quando: um exercício ou projeto tem taxa de reprovação muito alta ou muito baixa; avaliadores discordam sistematicamente num critério; uma mudança tecnológica torna um trecho enganoso; alunos de um perfil abandonam sistematicamente numa parte.

### 6. Transformar experiência em material

Os melhores exemplos e exercícios vêm de projetos reais. Mas a passagem de um projeto real para material didático exige cuidado. O protocolo:

1. **Autorização.** Obter consentimento de quem forneceu o caso.
2. **Anonimização e composição.** Remover tudo o que identifica pessoas e organizações; quando necessário, combinar elementos de vários casos (como os casos deste livro).
3. **Extração dos pontos de decisão.** O valor didático de um caso está nos momentos em que algo poderia ter sido decidido de outra forma. Identifique-os.
4. **Contraexemplo.** Para cada decisão, registre a alternativa plausível e por que ela seria pior — ou melhor em outro contexto.
5. **Conversão em exercício.** Transforme o ponto de decisão numa pergunta com contexto suficiente, e escreva o gabarito comentado (elementos de uma boa resposta e erros comuns).
6. **Teste pedagógico** (próxima seção).
7. **Marcação dos números.** Números de casos compostos são marcados como ilustrativos.

### 7. Testar pedagogicamente cada novo conteúdo

Todo capítulo, exercício ou projeto novo — ou revisado — passa por cinco testes antes de entrar no material:

| Teste | Pergunta | Como aplicar |
|---|---|---|
| **Clareza** | Um leitor do perfil A entende? | Leitura acompanhada com um leitor A. |
| **Desafio** | Um leitor do perfil B aprende algo que não sabia? | Leitura com um leitor B; pedir que aponte o que é novo. |
| **Crescimento** | Um leitor do perfil C encontra aprofundamento? | Verificar a existência de camada avançada útil. |
| **Pré-requisitos** | Tudo o que é necessário foi ensinado antes? | Percurso cognitivo. |
| **Transferência** | Há pelo menos uma variação que impede a repetição mecânica? | Revisão por um avaliador. |

### 8. Medir resultados

Um painel mínimo do produto acompanha quatro famílias de indicadores. A distinção entre elas importa, porque indicadores fáceis de medir (como engajamento) são frequentemente os menos significativos.

| Família | Exemplos | Cuidado |
|---|---|---|
| **Engajamento** | Progresso por parte; tempo por projeto; abandono por parte. | Engajamento alto não significa aprendizado. |
| **Aprendizagem** | Aprovação por projeto; desempenho no exame de transferência; evolução do autodiagnóstico versus evidências. | Requer avaliação independente e calibrada. |
| **Resultado** | Aplicação posterior com evidência; qualidade dos portfólios; avaliação de terceiros atendidos no P09. | Exige acompanhamento por meses; amostras pequenas. |
| **Produto** | Conclusão; recomendação espontânea; recompra corporativa; custo de entrega por aluno. | Não confundir intenção declarada com comportamento. |

### 9. Atualizar

O material é versionado (por exemplo, versão principal e revisão: 1.0, 1.1, 2.0). Mudanças de revisão corrigem e melhoram sem alterar a estrutura; mudanças de versão principal alteram a estrutura, os projetos ou os critérios de aprovação. Alunos em andamento concluem na versão em que começaram, salvo correções. Certificados indicam a versão do método em que foram obtidos.

### O teste de independência

O produto funciona sem o fundador quando todos os itens abaixo existem e foram testados por alguém que não é o fundador:

- [ ] O livro completo, com gabaritos comentados dos exercícios.
- [ ] Os templates, checklists e rubricas, utilizáveis sem explicação adicional.
- [ ] Exemplos-âncora para cada rubrica: trabalhos reais (anonimizados) ou realistas nos níveis 2, 3 e 4, com a justificativa do nível. (O Apêndice I do Livro do Aluno traz os primeiros, para P00, P03 e P07.)
- [ ] O guia do avaliador, com o processo de calibração.
- [ ] O guia do mentor, com as dificuldades previstas por parte e as intervenções recomendadas.
- [ ] O banco de cenários e o banco de exames de transferência e de capstones, com renovação planejada. (O caso-guia do Apêndice H é o primeiro caso completo com material de trabalho.)
- [ ] O processo de governança e de atualização, com responsáveis que não sejam apenas o fundador.
- [ ] Pelo menos uma turma conduzida e avaliada inteiramente por outras pessoas, com resultados comparáveis aos das turmas conduzidas pelo fundador.

O último item é a prova real. Até ele acontecer, a independência é uma hipótese.

## Capítulo M2 — Experiência do aluno e formatos de oferta

### A jornada do aluno

Independentemente do formato, a jornada tem as mesmas etapas:

```
 ENTRADA ──────────► TRILHA ──────────► CICLOS ────────────────────► AVALIAÇÃO
 autodiagnóstico     F / P / A          leitura + exercícios +       projetos, exame,
                                        projeto, ao longo do livro   defesa
                                                                         │
                                                                         ▼
                     CERTIFICAÇÃO ◄────────────────────────────── PORTFÓLIO
                     (se aplicável)                               3 a 5 casos
```

### Onde os alunos devem tropeçar

O projeto pedagógico permite prever, como hipóteses a verificar nos pilotos, os pontos de dificuldade e preparar respostas:

| Ponto | Quem tende a tropeçar | Por quê | Resposta prevista |
|---|---|---|---|
| Parte II | Perfil B e C | Parece lenta ("quando vamos construir?"). | Mostrar cedo o Caso Vértice completo; P00 com stakeholder real. |
| Parte III | Perfil A | Muitos conceitos novos de uma vez. | Fichas como referência; exercícios F; sessão de dúvidas nos formatos acompanhados. |
| P01 | Perfil A | Primeira construção; ferramenta desconhecida. | Caminho "sem código" detalhado; par com perfil B ou C. |
| P04 e P06 | Todos | Volume de trabalho; frustração com espirais de correção. | Fatias menores; revisão do arquivo de contexto; mentoria focada em supervisão. |
| P07 | Perfil B | Resistência a resultados em que a IA perde. | Reforçar que se avalia a decisão, não a tecnologia vencedora. |
| P09 | Todos | Encontrar um terceiro; dependência da agenda dele. | Banco de organizações parceiras; prazos flexíveis com escopo ajustável. |
| P10 | Todos | Ambiguidade; ansiedade da defesa. | Defesa simulada com variações; exemplos-âncora. |

### Formatos de oferta

O mesmo método pode ser oferecido em quatro formatos. A tabela descreve a **estrutura proposta** de cada um. Durações, tamanhos de turma e proporções são hipóteses de projeto, a serem ajustadas pelos pilotos; nenhum preço é sugerido aqui (ver Capítulo M4).

| Elemento | Autodirigido | Formação acompanhada | Programa intensivo | Treinamento corporativo |
|---|---|---|---|---|
| **Para quem** | Pessoas com disciplina para estudar sozinhas. | Pessoas que se beneficiam de ritmo, grupo e devolutiva. | Pessoas com tempo concentrado e alguma base (perfis B e C). | Equipes de uma organização. |
| **Componentes** | Livro, templates, banco de cenários, avaliação por pares, comunidade opcional. | Livro + encontros periódicos + mentoria + avaliação dos projetos por avaliador. | Livro + imersão com trabalho diário supervisionado. | Livro + adaptação aos processos da organização + mentoria + avaliação. |
| **Projetos** | P00 a P10, com avaliação por pares e autoavaliação. | P00 a P10, com avaliação por avaliador. | Seleção: P00, P03, P06 ou P07, P10 reduzido; os demais como opcionais. | P00, P03 e P09 em processos reais da organização; demais conforme o objetivo. |
| **Duração indicativa** | Definida pelo aluno. | Vários meses. | Algumas semanas. | Definida com a organização. |
| **Papéis** | Aluno; par avaliador. | Aluno; mentor; avaliador; coordenador. | Aluno; mentor dedicado; avaliador. | Aluno; mentor; avaliador; patrocinador interno; responsável por dados e segurança da organização. |
| **Certificação** | Possível com avaliação paga de P09, P10 e exame (opcional). | Sim, nos níveis do Capítulo M3. | Parcial (nível correspondente aos projetos feitos). | Sim, nos níveis; resultados também medidos nos indicadores da organização. |
| **Riscos principais** | Abandono; autoavaliação complacente. | Custo de mentoria e avaliação; dependência de bons mentores. | Perda de profundidade; projetos superficiais; falta de tempo de uso real para validação. | Conflito entre aprendizagem e entrega; sigilo; pressão por resultados rápidos. |
| **O que precisa ser validado** | Taxa de conclusão; qualidade da avaliação por pares. | Ganho no exame de transferência; viabilidade econômica. | Se a versão reduzida produz transferência comparável. | Efeito nos indicadores da organização; recompra. |

Algumas observações sobre cada formato:

**Autodirigido.** É o formato mais escalável e o que mais depende da qualidade do material. É também o que mais exige o teste de independência do Capítulo M1. A avaliação por pares precisa de regras claras e de exemplos-âncora acessíveis.

**Formação acompanhada.** O mentor não ensina o conteúdo — o livro faz isso. O mentor faz o que o livro não pode fazer: observa o raciocínio, faz perguntas de variação, ajuda a sair de bloqueios, devolve com especificidade. O guia do mentor deve proibir explicitamente que o mentor faça o trabalho pelo aluno.

**Programa intensivo.** O risco é a compressão destruir a transferência: projetos feitos sem tempo de uso real não chegam a E3, e a reflexão fica superficial. A versão intensiva deve declarar honestamente o que não cobre e deve, sempre que possível, incluir um acompanhamento posterior de algumas semanas para o projeto ser usado de verdade.

**Treinamento corporativo.** Trabalhar com problemas reais da organização é a maior vantagem e o maior risco. Vantagem: transferência imediata e resultados mensuráveis. Risco: o projeto vira entrega de consultoria e o aprendizado fica em segundo plano; ou o sigilo impede o uso de dados e ferramentas. A oferta corporativa precisa de um acordo explícito sobre dados, ferramentas de IA aprovadas, papel do gestor, propriedade dos artefatos e critérios de sucesso. A adaptação deve acontecer por meio de cenários e exemplos da organização, sem alterar o núcleo do método (ciclo, princípios, competências, critérios de aprovação).

### Papéis

| Papel | Responsabilidade | Não é responsabilidade |
|---|---|---|
| **Aluno** | Estudar, praticar, registrar, entregar com honestidade. | Agradar o avaliador. |
| **Mentor** | Fazer perguntas, observar raciocínio, desbloquear, devolver com especificidade. | Fazer o trabalho; dar a resposta antes do aluno tentar. |
| **Avaliador** | Aplicar rubricas com base em evidência; participar da calibração. | Avaliar quem também mentora (separação de funções, quando possível). |
| **Coordenador** | Ritmo da turma, logística, acompanhamento de abandono, coleta de dados do produto. | Alterar critérios de aprovação. |
| **Patrocinador (corporativo)** | Garantir acesso a problemas, dados e tempo; remover obstáculos. | Escolher quem é aprovado. |

## Capítulo M3 — Avaliação, certificação e governança

### Níveis de certificação

A estrutura proposta tem três níveis. Cada um atesta algo específico e, igualmente importante, não atesta outras coisas.

| Nível | Requisitos | Atesta | Não atesta |
|---|---|---|---|
| **Praticante** | P00 a P04 aprovados; autodiagnóstico de entrada e saída. | Capacidade de enquadrar problemas, mapear processos e construir automações robustas em contexto próprio. | Capacidade de construir aplicações, usar IA aplicada com rigor ou trabalhar para terceiros. |
| **Construtor** | Praticante + P05 a P08 aprovados. | Capacidade de integrar sistemas, construir aplicações, comparar soluções com e sem IA e projetar agentes com limites. | Capacidade de conduzir projetos para terceiros até validação. |
| **Profissional** | Construtor + P09 e P10 aprovados + exame de transferência + defesa. | Capacidade de resolver problemas novos e ambíguos de terceiros, de ponta a ponta, com evidência E3. | Especialização técnica profunda em qualquer tecnologia específica; competência jurídica. |

A certificação é uma **atestação interna do programa**, baseada nas rubricas e evidências descritas neste livro. Ela não é uma acreditação externa e não deve ser apresentada como tal. Se no futuro houver acreditação por terceiros, ela deve ser declarada com o nome da entidade e o escopo exato.

### Avaliadores e calibração

A credibilidade da certificação depende da consistência da avaliação. Por isso:

- **Requisitos do avaliador.** Ter concluído o método no nível Profissional (ou ter competência equivalente demonstrada por avaliação), e ter participado do processo de calibração.
- **Calibração inicial.** Novos avaliadores corrigem um conjunto de trabalhos-âncora (com níveis já definidos) e comparam suas notas com as de referência. Divergências são discutidas até que a interpretação da rubrica seja compartilhada.
- **Dupla correção por amostragem.** Uma parte dos projetos é corrigida por dois avaliadores independentes. A concordância é acompanhada; quando cai, há nova sessão de calibração.
- **Revisão da rubrica.** Critérios com discordância persistente entre avaliadores calibrados indicam rubrica ambígua — e devem ser reescritos, com novos exemplos-âncora.
- **Separação de funções.** Sempre que possível, quem mentora um aluno não é quem avalia seus projetos somativos.

### Integridade e uso de IA

A política de integridade segue o Capítulo 36: modos de IA declarados e respeitados; evidência de processo como parte da avaliação; transferência avaliada em condições controladas; uso não declarado invalida o projeto. Além disso:

- trabalhos com resultados inconsistentes com a evidência de processo são encaminhados a uma conversa de verificação (o aluno explica e responde a variações);
- a política é revisada a cada versão, porque as formas de usar IA mudam.

### Recurso

O aluno pode contestar uma avaliação. O recurso é analisado por um avaliador diferente, que tem acesso aos artefatos e à justificativa da primeira avaliação. A decisão é registrada com justificativa. Recursos recorrentes sobre o mesmo critério são sinal de que a rubrica precisa de revisão.

### Governança

O produto precisa de uma estrutura de governança simples e explícita:

| Elemento | Definição proposta |
|---|---|
| **Responsável pelo currículo** | Uma pessoa ou comitê com autoridade sobre o conteúdo, os projetos e os critérios de aprovação. Deve incluir pelo menos uma pessoa além do fundador. |
| **Processo de mudança** | Mudanças relevantes são propostas como ADR do currículo, com justificativa, evidência (dados de turmas, feedback de avaliadores) e impacto em alunos em andamento. |
| **Conflito de interesse** | Avaliadores não avaliam pessoas com quem têm relação comercial ou pessoal; patrocinadores corporativos não interferem em aprovações. |
| **Dados dos alunos** | Trabalhos e dados pessoais dos alunos são protegidos com os princípios do Capítulo 32; uso de trabalhos como exemplo exige consentimento e anonimização. |
| **Transparência** | Critérios de aprovação, rubricas e níveis de certificação são públicos para os alunos desde o início. |

### Atualização e obsolescência

O método foi escrito para resistir à obsolescência tecnológica, mas o material inevitavelmente envelhece em alguns pontos. A política de atualização:

- **Revisão periódica completa**, com intervalo definido pela governança (sugere-se uma revisão ao menos anual, e semestral para os capítulos da Parte V e para o Capítulo 16).
- **Revisão de obsolescência**, aplicada a cada revisão: procurar menções a ferramentas, interfaces, modelos, marcas, preços e versões; para cada uma, perguntar se é exemplo ou fundamento; substituir por princípio sempre que possível; marcar com data as afirmações sobre capacidades atuais da IA.
- **Gatilhos de revisão extraordinária**: mudança tecnológica que torne um trecho enganoso; padrão de reprovação ou discordância de avaliadores; erro relatado.
- **Errata pública** entre versões.

## Capítulo M4 — Validação externa e comercialização

### Estrutura comercial não é validação comercial

Este livro descreve uma **estrutura comercial**: formatos de oferta, papéis, níveis de certificação, processos de avaliação e governança. Essa estrutura foi projetada com cuidado, mas é uma hipótese. **Validação comercial** é outra coisa: evidência, obtida no mundo real, de que pessoas e organizações precisam do produto, pagam por ele, concluem, aprendem, aplicam e recomendam.

Até o momento desta edição, **nenhuma validação comercial foi obtida**. Não há dados de mercado, preços testados, turmas concluídas, depoimentos ou resultados de alunos. Qualquer afirmação em sentido contrário, em material de divulgação, seria falsa.

O resto deste capítulo aplica o próprio método ao produto: formula as hipóteses, define a evidência necessária e propõe a sequência de experimentos.

### O produto como problema

Antes de qualquer oferta, o produto merece um Problem Statement próprio, escrito com os oito elementos — e sujeito às mesmas regras: sem solução embutida, com indicador e proteção. Uma formulação provisória, a ser testada:

> "Pessoas e equipes que já têm acesso a IA, software e automação frequentemente não conseguem transformar esse acesso em soluções que resolvam problemas reais de forma confiável: constroem coisas que não resolvem o problema, que falham em operação ou cujo efeito ninguém consegue demonstrar. Queremos que quem conclui a formação seja capaz de resolver, com evidência, problemas novos em contextos que nunca viu — medido pelo desempenho em exames de transferência e pela aplicação posterior verificada — sem criar dependência de ferramentas específicas nem de quem conduz a formação."

Cada parte dessa frase é uma hipótese: que o problema existe, para quem, com que intensidade, e que a formação o resolve.

### Hipóteses a validar

| # | Hipótese | Como testar | Evidência que contaria |
|---|---|---|---|
| H1 | O problema existe e é sentido por um público identificável. | Entrevistas de enquadramento (Capítulo 4) com pessoas dos perfis A, B e C e com gestores. | Casos concretos e recentes de projetos com IA ou automação que fracassaram pelas razões descritas. |
| H2 | O método produz aprendizagem transferível. | Piloto com exame de transferência antes e depois, corrigido às cegas. | Melhora consistente nos itens do exame, em comparação adequada. |
| H3 | Os alunos concluem. | Pilotos nos formatos autodirigido e acompanhado. | Taxas de conclusão por formato e por perfil, e motivos de abandono conhecidos. |
| H4 | Os alunos aplicam depois. | Acompanhamento de egressos por alguns meses. | Projetos reais com evidência (portfólio, avaliação de terceiros). |
| H5 | Há disposição real de pagar. | Ofertas reais com preço, a públicos definidos. | Pagamentos efetivos — não respostas a pesquisas de intenção. |
| H6 | O custo de entrega é sustentável. | Medição do tempo de mentoria e avaliação por aluno nos pilotos. | Custo por aluno compatível com o preço praticado, no formato. |
| H7 | Organizações percebem valor. | Piloto corporativo com indicadores da própria organização. | Efeito nos indicadores combinados e decisão de continuidade ou expansão. |
| H8 | O produto funciona sem o fundador. | Turma conduzida e avaliada por outras pessoas. | Resultados comparáveis aos das turmas do fundador. |

Para cada hipótese, os limiares de sucesso devem ser definidos **antes** do experimento, como no P07. Definir o limiar depois de ver o resultado é a forma mais comum de se convencer de que um produto funciona.

### Sequência de experimentos

Uma sequência razoável, em que cada etapa só começa se a anterior produzir evidência suficiente:

1. **Validação pedagógica pequena.** Uma turma reduzida, sem cobrança ou com valor simbólico, percorrendo pelo menos as Partes I a IV e os projetos P00 a P03, com exame de transferência antes e depois. Objetivo: H1, H2 (parcial), H3 (parcial) e correções do material.
2. **Piloto pago.** Uma turma completa, com preço real, no formato acompanhado. Objetivo: H3, H5, H6.
3. **Piloto autodirigido.** Material completo com avaliação por pares e certificação opcional. Objetivo: H3, H5, H8 (parcial).
4. **Piloto corporativo.** Uma organização, com problema real e indicadores próprios. Objetivo: H7.
5. **Acompanhamento de egressos.** Contato com concluintes das etapas anteriores, meses depois. Objetivo: H4.
6. **Turma sem o fundador.** Objetivo: H8.

Só depois dessas etapas faz sentido falar em escala — e, mesmo então, com os indicadores do Capítulo M1 acompanhados continuamente.

### O que seria necessário para falar em product-market fit

"Product-market fit" — o ajuste entre produto e mercado — é uma expressão frequentemente usada sem critério. Para este produto, ela só deveria ser usada quando houver, simultaneamente:

- **demanda paga e recorrente**, de públicos definidos, sem depender de esforço extraordinário de venda do fundador;
- **conclusão e aprendizagem demonstradas**, com melhora no exame de transferência em comparações adequadas;
- **aplicação posterior verificada** em parte relevante dos egressos;
- **recomendação espontânea** e, no caso corporativo, **recompra ou expansão**;
- **viabilidade econômica** do formato, com custo de entrega coberto;
- **independência do fundador** demonstrada;
- **evidência qualitativa forte**: alunos e organizações que, perguntados, relatam que ficariam significativamente prejudicados se o produto deixasse de existir — e cujo comportamento (uso, pagamento, recomendação) é coerente com essa resposta.

Nenhum desses itens deve ser declarado com base em uma única turma, em pesquisas de intenção ou em depoimentos selecionados.

### Preço

Este livro não sugere preços. Preço é uma decisão a ser tomada com evidência, e não há evidência ainda. O método para chegar a ele:

- calcular o **custo de entrega** por aluno em cada formato (incluindo tempo de mentoria e avaliação, que tende a ser o maior custo dos formatos acompanhados);
- formular **hipóteses de valor** por público (o que o aluno ou a organização deixa de perder ou passa a ganhar);
- testar com **ofertas reais**, em que a pessoa de fato paga ou não paga;
- registrar a decisão no Decision Log do produto, com hipótese e validação, como qualquer outra decisão.

### O que não fazer

- Não inventar números de mercado, de alunos, de resultados ou de satisfação.
- Não usar depoimentos fictícios, editados ou sem consentimento.
- Não chamar o método de "comprovado" antes da evidência descrita.
- Não prometer empregos, renda ou resultados profissionais.
- Não apresentar a certificação interna como acreditação externa.
- Não confundir o interesse gerado pela palavra "IA" com demanda pelo produto. Muitas pessoas querem aprender "a usar IA"; o produto oferece outra coisa — e essa diferença precisa ser testada, não suposta.

### O método aplicado ao método

Há uma coerência que vale a pena explicitar no fim. Tudo o que este livro ensina — enquadrar antes de construir, registrar decisões, testar casos negativos, validar com evidência, declarar limitações, projetar para a falha, não depender de uma única pessoa ou ferramenta — se aplica ao próprio produto. Um método que ensina a distinguir demonstração de validação não pode ser vendido com base em demonstrações. Essa é, ao mesmo tempo, a maior exigência e a maior oportunidade do produto: se ele funcionar, a evidência de que funciona será do mesmo tipo que ele ensina a produzir.
