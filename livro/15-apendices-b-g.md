## Apêndice B — Checklists

Os checklists são versões compactas das verificações do livro, para uso no momento da decisão. Cada um indica o capítulo em que os itens são explicados.

### B1 — Antes de escolher qualquer solução (Caps. 4 a 10)

- [ ] Tenho um Problem Statement sem solução embutida, com indicador e proteção.
- [ ] Conversei com pelo menos um afetado e com quem opera o processo.
- [ ] Separei fatos de interpretações e hipóteses.
- [ ] Sei onde está o gargalo, com evidência.
- [ ] Mapeei o processo real, com esperas e exceções.
- [ ] Sei quais dados o processo usa, onde estão e qual é a fonte da verdade.
- [ ] As regras principais estão explícitas; sei quais decisões são de julgamento.
- [ ] Identifiquei os padrões estruturais do problema.

### B2 — Escada de Intervenção (Cap. 3)

- [ ] Considerei eliminar a atividade (degrau 0).
- [ ] Considerei reorganizar responsabilidades, ordem ou regras (degrau 1).
- [ ] Considerei padronizar entradas e procedimentos (degrau 2).
- [ ] Considerei estruturar os dados (degrau 3).
- [ ] Só subi para automação, software ou IA com evidência de que os degraus abaixo não bastam.
- [ ] Combinei degraus onde fazia sentido.
- [ ] Registrei no Decision Log por que não usei degraus mais baixos.

### B3 — Antes de delegar (Caps. 18 e 21)

- [ ] Os critérios de aceitação existem e incluem negativos, limites e dado ausente.
- [ ] O brief tem os nove blocos.
- [ ] Apliquei o Protocolo 5 e resolvi as lacunas.
- [ ] O escopo e o que não pode ser alterado estão explícitos.
- [ ] Nenhum dado sensível ou segredo vai no brief.
- [ ] A unidade é pequena o suficiente para eu verificar por completo.
- [ ] Nenhuma das sete condições de "não delegar" se aplica.

### B4 — Antes de aceitar uma entrega (Caps. 22 e 23)

- [ ] Rodei os testes eu mesmo.
- [ ] Li o diff (ou o histórico de mudanças) inteiro.
- [ ] Procurei os sinais de alerta (valores fixos, segredos, erros engolidos, mudanças fora do escopo, testes vazios).
- [ ] Testei à mão pelo menos um caso negativo.
- [ ] Revisei a lista de suposições declaradas.
- [ ] Apliquei o Protocolo 8 em sessão separada (para componentes relevantes).
- [ ] Registrei a mudança (commit, versão, diário).

### B5 — Automação robusta (Cap. 24)

- [ ] Catálogo de exceções baseado em dados reais, com caminho padrão para o imprevisto.
- [ ] Erros classificados em transitórios (repetir com intervalo crescente) e permanentes (não repetir).
- [ ] Idempotência testada (execução dupla sem efeito duplicado).
- [ ] Retomada testada (interrupção no meio sem perda nem duplicação).
- [ ] Logs estruturados, sem segredos nem dados pessoais desnecessários.
- [ ] Alerta de ausência testado.
- [ ] Manual de operação seguido por outra pessoa.
- [ ] Interruptor e processo manual alternativo disponíveis.

### B6 — Integração (Caps. 13 e 25)

- [ ] As oito perguntas estão respondidas.
- [ ] Mapeamento de campos e identificadores documentado.
- [ ] Estados de trânsito definidos; nada marcado como concluído sem confirmação do outro lado.
- [ ] Tratamento por código de erro.
- [ ] Webhooks: assinatura verificada, duplicatas e desordem tratadas.
- [ ] Conciliação periódica funcionando.
- [ ] Credenciais com escopo mínimo, fora do código.
- [ ] Sei como ficarei sabendo de mudanças no contrato do outro lado.

### B7 — Componente com IA (Caps. 16 e 27)

- [ ] A parte está no quadrante 2, 3 ou 4 da Matriz Entrada × Regra (não no 1).
- [ ] Comparei com uma alternativa determinística razoável.
- [ ] Conjunto de avaliação com casos difíceis, gabarito prévio e parte separada.
- [ ] Limiares definidos antes de medir.
- [ ] Saída validada por esquema e por regras de negócio independentes do modelo.
- [ ] "Não sei" é uma resposta permitida e testada.
- [ ] Fallback de incerteza (revisão humana) e de indisponibilidade.
- [ ] Nível de autonomia coerente com o custo do erro.
- [ ] Auditoria por amostragem e reavaliação a cada mudança de modelo ou instrução.
- [ ] Casos adversariais de injeção testados.

### B8 — Agente (Cap. 29)

- [ ] O teste do fluxograma foi aplicado e documentado.
- [ ] Cada ferramenta tem permissão mínima e nível de autonomia próprio.
- [ ] Ações externas, irreversíveis ou financeiras exigem aprovação humana.
- [ ] Listas de permissão aplicadas pelo sistema, não pela instrução.
- [ ] Limites de passos, tempo e custo aplicados pelo sistema.
- [ ] Critério de parada definido.
- [ ] Logs permitem reconstruir cada execução.
- [ ] Testes adversariais executados.
- [ ] Risk Register aprovado por quem responde pelos ativos.

### B9 — Segurança e privacidade (Cap. 32)

- [ ] Segredos fora do código, das conversas e das planilhas; com dono e prazo de troca.
- [ ] Autenticação em dois fatores para dados sensíveis e ações críticas.
- [ ] Autorização no backend, testada célula a célula da matriz de permissões.
- [ ] Automações com contas de serviço e permissões mínimas.
- [ ] Dados pessoais minimizados, com finalidade e prazo de retenção.
- [ ] Dados reais não usados em testes nem enviados a serviços não aprovados.
- [ ] Links compartilhados, exportações e recursos públicos revisados.
- [ ] Ações irreversíveis protegidas (exclusão lógica, versões, espera, aprovação).
- [ ] Logs de auditoria protegidos contra alteração.
- [ ] Acessos revisados (pessoas que saíram, permissões que sobraram).

### B10 — Pronto para piloto (Cap. 26)

- [ ] Test Plan executado (E2).
- [ ] Autenticação e permissões implementadas.
- [ ] Cópia de segurança automática com restauração testada.
- [ ] Logs e alertas mínimos funcionando.
- [ ] Guia de uso e manual de operação.
- [ ] Dono definido, com substituto.
- [ ] Custo de operação estimado e com alerta.
- [ ] Caminho de volta (processo anterior) disponível.
- [ ] Plano de validação escrito.

### B11 — Encerramento e entrega (Caps. 31, 34 e P09)

- [ ] Validation Report escrito com limitações.
- [ ] Retrospectiva feita, com hipóteses revisadas.
- [ ] Pacote de entrega: guia de uso, manual de operação, Decision Log, plano de saída.
- [ ] Quem vai operar foi treinado e operou sem ajuda.
- [ ] Credenciais transferidas de forma segura; acessos do construtor revisados.
- [ ] Inventário de componentes atualizado (inclusive automações).
- [ ] Caso de portfólio escrito e autorizado.

## Apêndice C — Rubricas

### C1 — Escala geral

| Nível | Nome | Significado | Exemplo (Test Plan) |
|---|---|---|---|
| 1 | Insuficiente | Ausente, incorreto ou sem evidência. | Não há Test Plan, ou só há casos felizes sem registro. |
| 2 | Em desenvolvimento | Presente, com lacunas que comprometem o uso ou a confiança. | Há casos negativos, mas faltam permissões e limites; resultados sem evidência. |
| 3 | Proficiente | Atende ao descritor do critério, com evidência verificável. | Casos normais, negativos, limites, permissões e duplicidade, com evidência e data. |
| 4 | Avançado | Atende e vai além: antecipa, generaliza, transfere. | Inclui teste de sabotagem e casos adversariais que revelaram defeitos não óbvios. |

### C2 — Rubrica dos exercícios com gabarito

Para os exercícios do livro, use uma escala simplificada na autoavaliação:

| Resultado | Critério |
|---|---|
| **Completo** | Sua resposta contém todos os elementos listados no "Para conferir", ou equivalentes justificados. |
| **Parcial** | Contém a maior parte dos elementos, mas omite algum que o gabarito destaca como importante. |
| **A refazer** | Comete o erro comum descrito no gabarito, ou omite a maioria dos elementos. |

Exercícios "a refazer" devem ser refeitos depois de reler a seção correspondente, e não apenas corrigidos a partir do gabarito.

### C3 — Rubrica do caso de portfólio

| Critério | Proficiente (3) | Avançado (4) |
|---|---|---|
| Clareza do problema | O leitor entende o problema e por que importava, sem conhecer o contexto. | O caso mostra como o enquadramento mudou ao longo do projeto. |
| Qualidade das decisões | Decisões principais com alternativas e justificativa. | Mostra decisões de não fazer, com razões. |
| Evidência | Resultados com nível de evidência declarado e método. | Explicações alternativas discutidas. |
| Honestidade | Limitações explícitas; autoria e uso de IA declarados. | Analisa o que o resultado não permite concluir. |
| Aprendizado | Aprendizados específicos, ligados a episódios do projeto. | Aprendizados transferíveis, com indicação de quando se aplicariam. |

### C4 — Rubrica do exame de transferência

O exame é corrigido por blocos, usando a escala geral:

| Bloco | Itens do exame | Proficiente (3) | Avançado (4) |
|---|---|---|---|
| Pensar e modelar | 1 a 7 | Problema verificável sem solução; sistema, processo, dados, regras e exceções modelados; lacunas e perguntas explícitas. | Conflitos de stakeholders tratados; padrões estruturais nomeados e usados. |
| Decidir e especificar | 8 a 12 | Intervenções em vários degraus; matriz Entrada × Regra; alternativas comparadas; decisão registrada; brief delegável; autonomia coerente. | Proposta de explicitação de regras antes de automatizar; decisões irreversíveis tratadas com cautela. |
| Confiar | 13 a 15 | Testes com negativos e adversariais; validação com explicações alternativas; riscos com privacidade e injeção. | Supervisão desenhada contra viés de automação; indicadores com atraso tratados. |
| Transferir | conjunto | Raciocínio adaptado ao domínio, com termos do domínio ligados aos conceitos do método. | Identifica onde o método precisaria de ajuste naquele domínio. |

### C5 — Orientações para avaliadores

- Avalie a **evidência**, não a apresentação.
- Para cada nota, escreva a evidência que a sustenta.
- Atribua nível 4 apenas com evidência de transferência ou de antecipação real.
- Quando a evidência de processo (diário, Decision Log, histórico) for incompatível com o produto, converse antes de avaliar.
- Use os exemplos-âncora do programa; quando um trabalho não se parecer com nenhum âncora, registre o caso para a próxima calibração.

## Apêndice D — Decisões comentadas

### D1 — ADR completo: arquitetura do Caso Vértice

```
ADR-001 — ARQUITETURA DA SOLUÇÃO PARA O LEAD TIME DE LAUDOS
Data: (ilustrativa)   Status: aceita
Responsável: Beatriz (coordenação de qualidade)   Participantes: Rodrigo, analista sênior

1. CONTEXTO
   Problema (T02 v3): 41% dos laudos de rotina em até 2 dias úteis; meta 90% em 6 meses,
   sem aumento de erros de revisão e mantendo rastreabilidade.
   Mudanças de processo (degraus 1–2) já aplicadas elevaram o indicador para 63%.
   Causas remanescentes: registro em planilha sem estados explícitos; digitação de
   resultados; ausência de visibilidade da fila; laudo montado manualmente.
   Restrições: trilha de auditoria obrigatória; um analista de sistemas compartilhado;
   orçamento limitado; instrumentos não podem ser trocados.

2. ALTERNATIVAS
   A) Planilha melhorada (degraus 1–3)
   B) Aplicação interna simples (degraus 3–5)
   C) Sistema de laboratório pronto (comprar)
   D) Aplicação com IA em todo o fluxo (degraus 5–8)
   E) B em fases, com IA pontual condicionada a avaliação (degraus 3–6)

3. CRITÉRIOS E COMPARAÇÃO
   Eliminatório: trilha de auditoria (elimina A).
   Ponderados (ver matriz do Capítulo 19): E 59; B 54; C 46; D 35.
   Robustez: aumentar o peso de "custo de manutenção" de 2 para 3 aproxima C de E,
   mas não inverte; aumentar o peso de "dependência de fornecedor" amplia a vantagem de E.

4. DECISÃO
   Alternativa E, em quatro fases: (1) registro e fluxo; (2) importação de arquivos dos
   instrumentos; (3) integração com sistema de lotes; (4) extração de certificados com IA,
   somente se a avaliação justificar.

5. JUSTIFICATIVA
   Atende ao eliminatório; ataca as causas remanescentes na ordem de impacto esperado;
   permite parar depois de qualquer fase com valor entregue; mantém a IA fora das
   decisões que exigem rastreabilidade.

6. EVIDÊNCIA
   Medida: levantamento de 212 amostras; 30 casos acompanhados; efeito das mudanças
   de processo (2 semanas). Especialista: analista sênior sobre a função de conferência
   da digitação. Fornecedor: descrições de sistemas prontos (não testadas — fraca).

7. CONSEQUÊNCIAS
   Positivas: controle do processo; dados estruturados para indicadores.
   Negativas aceitas: manutenção interna depende de Rodrigo (risco de continuidade);
   desenvolvimento em fases alonga o prazo total.
   Mais difícil de mudar depois: o modelo de dados central.

8. RISCOS (ref. T13): continuidade (R1); perda da conferência ao eliminar digitação (R2);
   alteração indevida da trilha de auditoria durante a construção (R3).

9. REVERSIBILIDADE
   Fase 1 reversível para a planilha em poucos dias (exportação testada).
   Fases seguintes independentes entre si.

10. HIPÓTESE E VALIDAÇÃO
    Esperamos 90% em até 2 dias úteis após a fase 2.
    Medição mensal; sinal de erro: menos de 75% três meses após a fase 2.

11. RELACIONADOS: DL-01 (mudanças de processo antes do sistema); DL-04 (importação
    em vez de digitação); ADR-002 (estados de liberação na integração).
```

**Comentário.** Três escolhas tornam esse ADR útil. O critério eliminatório é aplicado antes da soma, o que impede que uma alternativa barata e inadequada vença. O teste de robustez mostra quanto a decisão depende dos pesos — e mostra que, se a manutenção se revelar mais cara do que o esperado, a alternativa C deve ser reconsiderada. E o risco de continuidade, uma consequência negativa da decisão, está escrito, o que obriga alguém a tratá-lo (no caso, com o arquivo de contexto e um segundo responsável treinado).

### D2 — Três entradas de Decision Log: fraca, razoável e boa

**Versão fraca:**

> DL-02 — Usar uma planilha. Motivo: é mais fácil.

**Versão razoável:**

> DL-02 — Planilha estruturada para o sistema de Lucas. Alternativas: aplicativo de finanças pronto; aplicação própria. Justificativa: um usuário, poucos registros, sem exigência de auditoria. Risco: outra pessoa da família passar a editar.

**Versão boa:**

> DL-02 — Planilha estruturada, uma aba por entidade, colunas tipadas e listas fechadas para status. *Contexto:* sistema pessoal de contas, documentos e garantias; cerca de 60 registros ativos. *Alternativas:* (a) aplicativo de finanças pronto — descartado porque não cobre documentos e garantias e exigiria acesso às contas bancárias; (b) aplicação própria — custo de construção e manutenção desproporcional; (c) planilha estruturada. *Evidência:* contagem dos registros reais (medida); experiência de Lucas com planilhas (experiência). *Riscos:* edição simultânea se outra pessoa da família passar a usar; ausência de histórico de alterações. *Hipótese:* manutenção de até 30 minutos por semana. *Validação:* registrar o tempo semanal por quatro semanas; se passar de 45 minutos em duas semanas, revisar. Revisar também se outra pessoa passar a editar. *Status:* aceita.

**Comentário.** A versão fraca não permite aprender nada. A razoável registra alternativas e um risco, mas não diz como se saberá se a decisão foi boa. A boa transforma a decisão numa aposta verificável, com sinal de erro definido — e é só um pouco mais longa.

## Apêndice E — Cartões dos protocolos de IA

| # | Protocolo | Objetivo | Use quando | Instrução-chave | Valide com |
|---|---|---|---|---|---|
| 1 | Exploração | Entender domínio desconhecido | Início, antes de entrevistas | "Não proponha soluções; dê conceitos, problemas típicos, perguntas e incertezas; marque [VERIFICAR]." | Conversas reais e fontes primárias |
| 2 | Decomposição | Criticar e ampliar sua decomposição | Depois da sua versão M0 | "Não reescreva; aponte lacunas, sobreposições e partes não delegáveis; proponha outro critério." | Process Map e System Map |
| 3 | Arquitetura | Gerar alternativas com trade-offs | Antes de decidir | "Cinco alternativas, duas nos degraus 0–3, uma 'comprar'; nove questões; quando fracassaria." | Requisitos eliminatórios; verificação de capacidades |
| 4 | Decisão | Testar uma decisão | Antes de registrar | "Não diga se concorda; argumento contrário, pré-mortem, riscos, evidência que mudaria a decisão." | Avaliação de cada objeção por você |
| 5 | Especificação | Achar lacunas antes de construir | Antes de delegar | "Não implemente; liste perguntas, suposições, contradições e critérios ausentes." | Você responde e atualiza o brief |
| 6 | Implementação | Construir no escopo | Brief fechado | "Resuma e pergunte antes; só no escopo; sem segredos; teste por critério; liste suposições." | Seus testes, diff, Protocolo 8 |
| 7 | Teste | Gerar casos a partir de critérios | Antes/junto da construção | "A partir dos critérios, não do código; normal, negativo, limites, ausência, duplicidade, concorrência, adversarial." | Teste de sabotagem |
| 8 | Auditoria | Revisão independente | Antes de aceitar e de implantar | "Você não escreveu isto; verifique cada regra; procure [lista]; classifique por gravidade." | Defeito plantado |
| 9 | Documentação | Docs a partir dos artefatos | Fim de fase, entrega | "Para [leitor] e [tarefas]; só o que está nos artefatos; marque [NÃO CONFIRMADO]." | Leitor executa tarefa real |
| 10 | Ensino | Aprender o necessário | Falta de entendimento | "Em etapas, com exemplo meu; consenso × opinião; cinco perguntas, uma por vez." | Explicar sem ajuda; fonte primária |

**Regras transversais:** você pensa primeiro quando o pensamento é o ponto; contexto explícito; saída verificável; gerar e avaliar em sessões separadas; registrar o uso no diário.

## Apêndice F — Catálogo de anti-padrões

| Anti-padrão | Sintoma | Correção | Cap. |
|---|---|---|---|
| **Começar pela ferramenta** | A primeira conversa é sobre plataforma ou modelo. | Nenhuma ferramenta antes de Problem Statement com critério. | 4 |
| **Começar pelo prompt** | A primeira ação é descrever o sistema a uma IA. | Usar IA para explorar; construir só após requisitos e decisão. | 21 |
| **Usar IA por moda** | IA aparece na solução antes de aparecer no problema. | Matriz Entrada × Regra; experimento determinístico × IA. | 27 |
| **Construir antes de entender** | O protótipo vem antes do mapeamento. | Mapeamento mínimo primeiro; protótipo para testar hipóteses. | 8 |
| **Automatizar processo ruim** | A automação acelera etapas que não deveriam existir. | Melhorar o processo (degraus 0–2) e depois automatizar. | 8 |
| **Confundir automação com melhoria de processo** | Sucesso medido por etapas automatizadas. | Ligar cada automação a uma causa e ao indicador. | 15 |
| **Adicionar complexidade desnecessária** | Componentes sem requisito; agentes sem teste do fluxograma. | "Que requisito exige isto?"; arquitetura em fases. | 19, 29 |
| **Ignorar exceções** | Só o caminho feliz está especificado. | Catálogo de exceções; caminho padrão para o imprevisto. | 10, 24 |
| **Confiar cegamente no output** | "Parece certo", "rodou". | Validação proporcional ao custo do erro; nunca perguntar à própria IA se está certa. | 22 |
| **Não definir critérios de aceitação** | "Está pronto?" — "Parece que sim." | Critérios com negativo e limite antes de delegar. | 18 |
| **Não testar casos negativos** | Testes só verificam o que deve acontecer. | Negativos, permissões, transições proibidas; sabotagem. | 30 |
| **Confundir demonstração com validação** | Sucesso declarado após apresentação. | Plano de validação prévio; nível de evidência declarado. | 31 |
| **Confundir protótipo com produto** | O provisório vira permanente. | Checklist protótipo × produto antes de qualquer uso real. | 26 |
| **Não registrar decisões** | Ninguém sabe por que o sistema é assim. | Decision Log desde o primeiro dia. | 20 |
| **Depender de uma ferramenta** | Lógica e dados só existem dentro da plataforma. | Plano de saída com quatro itens. | 34 |
| **Confundir prompt com especificação** | "A especificação está no histórico da conversa." | Especificação como artefato versionado. | 21 |
| *Decompor pela ferramenta* | Partes com nomes de ferramentas. | Decompor por etapa, função, entidade, decisão ou risco. | 6 |
| *Otimizar fora do gargalo* | Melhoria numa etapa que não limita o sistema. | Encontrar o gargalo antes de intervir. | 5 |
| *Parar na pessoa* | A análise de causas termina num culpado. | Perguntar o que no sistema torna o erro fácil. | 4, 33 |
| *Supervisão de fachada* | Humano "no circuito" aprova sem olhar. | Volume compatível, destaque do que importa, auditoria da supervisão. | 32 |

As linhas em itálico são anti-padrões complementares, tratados ao longo do livro além dos dezesseis principais.

## Apêndice G — Glossário

**Abstração** — Representação que mantém o que importa para um propósito e esconde o resto.

**ADR (Architecture Decision Record)** — Documento curto que registra uma decisão de arquitetura, com contexto, alternativas, justificativa, consequências e validação.

**Agente** — Modelo de linguagem que opera em ciclo, decidindo ações, usando ferramentas e observando resultados até um objetivo ou limite.

**Alerta de ausência** — Aviso disparado quando algo que deveria acontecer não acontece.

**API** — Interface de um sistema para outros sistemas, com endpoints e contrato de requisição e resposta.

**Autenticação** — Comprovação da identidade de quem acessa.

**Autorização** — Decisão sobre o que uma identidade autenticada pode fazer.

**Backend** — Parte do sistema que roda no servidor e aplica regras, acessa dados e integra serviços.

**Banco de dados** — Sistema especializado em guardar, consultar e proteger dados com integridade.

**Cardinalidade** — Quantas ocorrências de uma entidade se relacionam com quantas de outra (um para um, um para muitos, muitos para muitos).

**Chave de idempotência** — Identificador de uma operação que permite reconhecer e ignorar repetições.

**Chave estrangeira** — Coluna que guarda a chave primária de outra tabela, criando uma relação.

**Chave primária** — Identificador único de cada linha de uma tabela.

**Cloud (nuvem)** — Uso de servidores e serviços alugados de provedores e acessados pela internet.

**Conciliação** — Comparação periódica entre registros que deveriam coincidir, para detectar e tratar divergências.

**Conjunto de avaliação** — Coleção de casos com respostas corretas definidas antes, usada para medir componentes com IA.

**Contexto (de IA)** — Tudo o que o modelo "vê" numa interação: instruções, mensagens, documentos, resultados de ferramentas.

**Critério de aceitação** — Condição verificável que define se um requisito foi atendido.

**Decision Log** — Registro corrente das decisões de um projeto, com alternativas, evidência, hipótese e validação.

**Diff** — Diferença, linha a linha, entre duas versões de um arquivo.

**Dívida técnica** — Atalhos tomados na construção que economizam tempo agora e cobram depois.

**Embedding** — Representação numérica do significado de um texto, usada para encontrar textos semelhantes.

**Endpoint** — Endereço de um recurso ou operação numa API.

**Escada de Intervenção** — Organização das soluções possíveis em degraus de complexidade, do eliminar ao agente.

**Escala de evidência** — Níveis E0 a E4 (opinião, demonstração, teste planejado, uso real controlado, uso sustentado).

**Esqueleto andante** — Primeira versão mínima de um sistema que atravessa todas as camadas de ponta a ponta.

**Estoque** — Algo que se acumula num sistema (fila, pendências).

**Fabricação (alucinação)** — Produção, por um modelo, de informação falsa com aparência de verdadeira.

**Fatia vertical** — Incremento de construção que entrega uma funcionalidade completa, de ponta a ponta.

**Fluxo** — O que faz um estoque aumentar ou diminuir.

**Fonte da verdade** — Lugar cujo valor prevalece quando a mesma informação existe em vários lugares.

**Frontend** — Parte do sistema que roda no dispositivo do usuário.

**Gargalo** — Etapa de menor capacidade, que limita a saída de todo o sistema.

**Git** — Ferramenta de controle de versões amplamente usada.

**Guardrail** — Defesa que limita o que um sistema com IA pode fazer, independentemente do comportamento do modelo.

**Idempotência** — Propriedade de uma operação que, executada várias vezes, produz o mesmo efeito que uma vez.

**Injeção de instruções (prompt injection)** — Instruções embutidas em dados que alteram o comportamento de um modelo.

**Interface** — Ponto de interação entre um usuário (pessoa ou sistema) e um sistema.

**Invariante** — Regra que deve ser verdadeira o tempo todo, em qualquer estado.

**JSON** — Formato de texto para dados estruturados com objetos, listas e valores.

**Laço de realimentação** — Cadeia de causa e efeito que volta ao ponto de partida (de reforço ou de equilíbrio).

**Log** — Registro de eventos de um sistema.

**Manual de operação (runbook)** — Documento com o que fazer em cada situação operacional ou alerta.

**Mapa Humano–Máquina** — Registro de quem executa, decide, verifica e responde por cada atividade.

**Matriz Entrada × Regra** — Ferramenta para decidir entre solução determinística, IA ou humano, pela estrutura da entrada e explicitabilidade da regra.

**Método (HTTP)** — Tipo de ação numa requisição: GET, POST, PUT, PATCH, DELETE.

**Modelo de linguagem** — Modelo treinado para gerar continuações prováveis de texto, capaz de seguir instruções.

**Níveis de autonomia** — N0 a N5, do manual à autonomia sem supervisão regular; definidos por ação.

**Observabilidade** — Capacidade de entender o comportamento de um sistema por seus registros, métricas e alertas.

**Padrão estrutural** — Forma recorrente de problema que aparece em domínios diferentes (fila, aprovação, reconciliação...).

**Payload** — Conteúdo (corpo) de uma requisição ou resposta.

**Pré-mortem** — Técnica de imaginar que uma decisão fracassou e explicar por quê.

**Problem Statement** — Declaração de um problema com afetados, estados atual e desejado, impacto, causas, restrições, critério de resolução e escopo.

**Processo** — Sequência de atividades que transforma entradas em saídas para alguém.

**Quarentena (fila de exceções)** — Lugar onde itens que não podem ser processados automaticamente esperam tratamento humano.

**RAG** — Geração aumentada por recuperação: busca de trechos relevantes colocados no contexto antes da resposta.

**Regressão** — Reaparecimento de um defeito, ou o teste que verifica que o que funcionava continua funcionando.

**Requisito** — Afirmação sobre o que uma solução precisa fazer ou ser.

**Segredo** — Informação que dá acesso: senha, chave, token.

**Servidor** — Computador ou programa disponível continuamente para responder a requisições.

**Sincronização** — Manutenção da mesma informação em mais de um sistema.

**Status (código de)** — Número que indica o resultado de uma requisição (2xx sucesso, 4xx erro de quem pede, 5xx erro de quem responde).

**Tabela de decisão** — Representação de regras com condições em colunas e combinações em linhas.

**Teste de sabotagem** — Quebrar deliberadamente uma regra para verificar se algum teste falha.

**Teste do defeito plantado** — Inserir defeitos conhecidos antes de uma auditoria para calibrar a confiança nela.

**Teste do fluxograma** — Pergunta "consigo desenhar os passos?", que separa problemas de fluxo de problemas que exigem agente.

**Trilha de auditoria** — Registro protegido de quem fez o quê, quando, sobre qual dado.

**Webhook** — Requisição que um sistema externo envia ao seu quando um evento acontece.
