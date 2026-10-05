## Apêndice J — Respostas

Este apêndice reúne as respostas dos testes de recuperação do fim de cada parte e o gabarito comentado do caso-guia. Consulte-o **depois** de responder. Uma resposta sua diferente da daqui não está necessariamente errada: o que importa é se contém os elementos essenciais e se você consegue justificá-la.

### J1 — Testes de recuperação

#### Parte I

**R1.1** Tarefa é uma ação já escolhida; problema é uma diferença entre estado atual e desejado, que importa para alguém, sob restrições, com critério de resolução. Exemplo: "faça um chatbot" esconde a decisão de que o problema é de atendimento e de que um robô é a melhor resposta.

**R1.2** Pensar, modelar, decidir, especificar, construir, testar, validar, evoluir, orquestrar.

**R1.3** Porque constrói complexidade (automação, IA, agentes) sobre um processo não entendido, dados desorganizados e regras implícitas: o resultado é caro, opaco e automatiza a confusão. Os degraus baixos frequentemente resolvem parte do problema e são pré-requisito dos de cima.

**R1.4** N4 ou N5: erro barato e reversível, alto volume e confiabilidade medida alta permitem executar sem revisão caso a caso, com auditoria por amostragem (N4) ou só alarmes (N5).

**R1.5** E1 é demonstração: funcionou nos exemplos escolhidos. E2 é teste planejado antes, com casos negativos e limites, registrado. E3 acrescenta uso real controlado, com o indicador do problema medido contra a linha de base.

**R1.6** A profundidade da análise e dos artefatos — que deve ser proporcional ao custo de errar, e não ao tamanho do que será construído.

**R1.7** "... decidir se aquilo deveria existir, como deveria funcionar e se está correto."

#### Parte II

**R2.1** Afetados; estado atual; estado desejado; impacto; causas (conhecidas e hipóteses); restrições; critério de resolução (indicador, linha de base, meta, proteção); fora do escopo.

**R2.2** "O processo é lento": interpretação. "O pedido 812 ficou 3 dias na fila": fato (se houver fonte). "A fila existe porque só uma pessoa aprova": hipótese.

**R2.3** O gargalo é a etapa de 40 por dia. Dobrar a etapa de 90 não muda a saída do sistema; a fila diante do gargalo continua igual ou cresce.

**R2.4** Nomes não são únicos (há homônimos) e não são estáveis (grafias variam, pessoas mudam de nome); também aparecem escritos de formas diferentes em sistemas diferentes.

**R2.5** Que cada parte final tenha entrada, saída e critério de "pronto" verificável — ou seja, que seja delegável.

**R2.6** Por exemplo: fila com capacidade (amostras no laboratório; chamados de suporte); fluxo de aprovação (laudo; reembolso); reconciliação (extrato × contas pagas; estoque físico × sistema). Qualquer combinação de três padrões com exemplos de domínios diferentes serve.

**R2.7** Para verificar completude e consistência: cada combinação de condições deve ter exatamente uma linha aplicável. Combinações sem linha são lacunas; com duas linhas de ações diferentes, conflitos. Também serve para gerar um teste por linha.

**R2.8** É uma situação que ninguém previu. A regra é de segurança: qualquer caso não previsto interrompe o fluxo automático e vai para revisão humana.

#### Parte III

**R3.1** Porque tudo o que roda no dispositivo do usuário pode ser contornado; outra interface, uma automação ou uma chamada direta ao servidor pularia a verificação. O backend é a autoridade.

**R3.2** 429: limite de requisições excedido — esperar e tentar de novo mais devagar. 401: credencial inválida ou ausente — não repetir; registrar e alertar o responsável pela credencial.

**R3.3** Verificar a assinatura (origem); tratar duplicatas pelo identificador do evento; não supor ordem; responder rápido; conciliar periodicamente para recuperar eventos perdidos. Três desses bastam.

**R3.4** Autenticação: comprovar quem é (login com senha e segundo fator). Autorização: decidir o que essa identidade pode fazer (o analista registra resultados, mas não aprova laudos).

**R3.5** Gatilho, condição, ação, estado, exceção, erro, log, recuperação, idempotência, supervisão.

**R3.6** Porque a IA é boa em transformar entrada desestruturada em dados estruturados, e regras determinísticas são previsíveis, testáveis e explicáveis para decidir. Os erros da IA são capturados pela validação antes de afetar decisões, e a IA pode ser trocada sem mexer no centro.

**R3.7** Quando os documentos cabem inteiros no contexto; quando as perguntas são sempre as mesmas (uma página de perguntas frequentes resolve); quando a informação é estruturada (uma consulta ao banco resolve); quando uma boa busca já basta.

**R3.8** Porque a IA pode alterar mais do que foi pedido (iniciativa excessiva). O diff mostra exatamente o que mudou e permite recusar mudanças fora do escopo antes que causem dano.

#### Parte IV

**R4.1** Por exemplo: "O relatório mensal deve ser gerado em até 30 segundos para até 5.000 registros, a partir do comando do usuário." O número vem do uso esperado.

**R4.2** Caso normal, negativo, limites (no limite, logo acima, logo abaixo), dado ausente ou inválido e, quando aplicável, duplicidade, concorrência e falha de dependência.

**R4.3** Porque um requisito obrigatório não pode ser compensado por outras qualidades. Somá-lo permitiria que uma alternativa inaceitável vencesse por ser barata.

**R4.4** Reversível: pode ser desfeita a custo baixo — decidir rápido, testar e ajustar. Irreversível ou cara de reverter: analisar alternativas, registrar com cuidado e, se possível, testar antes.

**R4.5** Hipótese (o que se espera que aconteça), validação (como e quando se saberá) e sinal de erro (o que indicaria que a decisão foi errada), além da evidência classificada.

**R4.6** Contexto, objetivo, restrições, dados, regras, critérios, formato, testes, aceitação.

**R4.7** Por exemplo: quando você não consegue escrever os critérios de aceitação; quando não consegue verificar o resultado; quando a decisão é sobre valores ou responsabilidade; quando os dados não podem ir para o ambiente da IA; quando o erro é caro, irreversível e não há revisão antes de agir.

**R4.8** A coluna "Responde". Responsabilidade pelo resultado é sempre de uma pessoa; uma IA ou automação não pode ser responsabilizada.

#### Parte V

**R5.1** Porque a mesma sessão tende a defender o que produziu; uma sessão nova, com instrução de revisor e sem o histórico de criação, avalia com menos viés.

**R5.2** Inserir defeitos conhecidos num artefato antes de uma auditoria e ver quantos ela encontra. Mede quanto você pode confiar naquela auditoria e que tipo de defeito ela deixa passar.

**R5.3** A versão mais simples do sistema que atravessa todas as camadas de ponta a ponta. Começar por ele revela cedo os problemas de infraestrutura e permite verificar cada fatia seguinte num sistema que já funciona.

**R5.4** Transitório tende a se resolver sozinho (serviço sobrecarregado, conexão instável): tentar de novo com intervalo crescente, até um limite. Permanente não se resolve repetindo (credencial inválida, dado recusado): não repetir; registrar, alertar ou enviar para quarentena.

**R5.5** Executá-la duas vezes seguidas com a mesma entrada e verificar se o mundo mudou só uma vez (uma mensagem, um registro, uma cobrança).

**R5.6** Para nunca marcar como concluído algo que o outro sistema ainda não confirmou, e para saber exatamente o estado de cada operação durante uma falha.

**R5.7** Entrada estruturada e regra explícita: determinístico. Entrada desestruturada e regra explícita: IA na borda, regra no centro. Entrada estruturada e regra de julgamento: explicitar a regra ou apoiar a decisão humana. Entrada desestruturada e julgamento: IA como assistente, humano decide.

**R5.8** Para medir o desempenho em casos que não foram usados para ajustar as instruções; sem isso, você mede a capacidade de ajustar ao conjunto conhecido, não a de acertar casos novos.

**R5.9** "Consigo desenhar o fluxograma dos passos?" Se sim, o problema é um fluxo e deve ser uma automação (com IA onde a entrada exigir); agente só quando os passos dependem do que for descoberto no caminho.

#### Parte VI

**R6.1** Testar: verificar se a solução funciona como especificada. Validar: verificar se ela resolve o problema que motivou o projeto.

**R6.2** 9, 10 e 11 (logo abaixo, no limite e logo acima); 0 e 1 na outra fronteira; e um valor inválido (negativo ou não numérico). E confirmar com o dono da regra se "até 10" inclui o 10.

**R6.3** Quebrar de propósito uma regra no sistema (inverter um limite, remover uma verificação) e ver se algum teste falha. Se nenhum falha, os testes não cobriam aquela regra.

**R6.4** Outras mudanças no mesmo período; sazonalidade; efeito da atenção durante o piloto; regressão à média depois de um período ruim.

**R6.5** Porque o que um componente *pode* fazer limita o pior dano possível. Uma IA que só produz rascunhos para aprovação, sem ferramentas, torna a injeção de instruções um risco de impacto baixo; a mesma IA com ferramentas de envio tornaria o impacto alto.

**R6.6** Limitar o que o modelo pode fazer ao ler conteúdo não confiável (sem ferramentas de escrita ou com aprovação humana); validar a saída com regras independentes do modelo; listas de permissão aplicadas pelas ferramentas. Duas dessas bastam.

**R6.7** Um aviso disparado quando algo que deveria acontecer não acontece (por exemplo, nenhuma importação desde ontem num dia útil). Detecta falhas silenciosas.

**R6.8** Dados exportáveis em formato aberto (testado); regras e lógica documentadas fora da ferramenta; dependência isolada atrás de uma interface; alternativa conhecida, com estimativa de esforço de migração.

### J2 — Gabarito comentado do caso-guia

Os números abaixo foram calculados sobre os dados de `material/caso-guia/` (agosto de 2026, 20 dias úteis) depois de limpar a planilha: remover as 7 linhas duplicadas, unificar as grafias de status, datas, horas e nomes. A análise de referência está em `material/caso-guia/respostas/analise-de-referencia.py`. Se os seus números diferirem um pouco, verifique primeiro a limpeza e o denominador que você escolheu: a taxa de falta abaixo considera **faltas ÷ (realizadas + faltas)**, excluindo sessões canceladas com aviso, remarcadas e "não atendidas" por duplicidade. Outros denominadores são aceitáveis se declarados.

#### P00 — Diagnóstico

**Decisões embutidas no pedido.** Que a solução é um sistema; que deve ter IA; que a IA deve agir sozinha (confirmar e remarcar); e que o problema é "a agenda" — quando, na verdade, há pelo menos quatro problemas entrelaçados: faltas, horários duplicados, sessões sem cobertura de pacote ou de autorização, e sobrecarga da recepção com mensagens.

**Hipóteses das entrevistas confrontadas com os dados.**

| Quem disse | Afirmação | Tipo | O que os dados mostram |
|---|---|---|---|
| Sílvia | "Uns 30% faltam." | Estimativa (interpretação) | 13,6% (59 faltas em 434 sessões). A percepção superestima o problema — comum quando o incômodo é grande. |
| Sílvia | "Paciente de convênio falta mais." | Hipótese | Refutada: particular 13,7%; Convênio Alfa 13,4%; Convênio Beta 13,5%. |
| Sílvia | "A Joana deve estar marcando errado." | Hipótese | Refutada: 13 horários com dois pacientes; nenhum agendamento envolvido foi feito por Joana. Os agendamentos feitos fora da recepção envolvidos em conflito são de Caio (8), Sílvia (3) e Tomás (2), incluindo encaixes pedidos pela própria Sílvia. |
| Joana | "Quando eu mando lembrete, quase ninguém falta." | Hipótese | Apoiada: 6,3% com lembrete (12 de 191) contra 20,2% sem lembrete (40 de 198); 15,6% quando não se sabe. Cautela: Joana não escolhe ao acaso quem recebe lembrete, então parte da diferença pode ter outras causas. |
| Joana | "Segunda é pior porque ninguém recebe lembrete." | Hipótese | Parcialmente apoiada: faltas de 17,9% às segundas contra 12,6% nos outros dias; só 36% das sessões de segunda tiveram lembrete, contra 46% nos outros dias. Mesmo com lembrete, a segunda tem poucos casos (2 faltas em 28) para conclusões firmes. |
| Caio | "Quem está terminando o pacote some." | Hipótese | Apoiada, mas exige cruzar a agenda com os pacotes: nas duas últimas sessões cobertas, a falta é de 22,4% (19 de 85) contra 11,5% no restante. É a análise mais difícil do caso; uma aproximação pela planilha de pacotes é aceitável se as limitações forem declaradas. |
| Caio e Renata | "Às 7h ninguém vem." | Hipótese | Inconclusiva: 15,6% às 7h (5 de 32) contra 13,4% nos outros horários. Amostra pequena; não justifica acabar com o horário. |
| Antônio | "Esqueci porque marcaram com três semanas de antecedência." | Hipótese (de um caso) | Inconclusiva: quase todos os agendamentos fixos são feitos com muita antecedência (13,8% de faltas com mais de 7 dias; 9,4% com até 7 dias, em apenas 32 casos). O efeito do lembrete é muito mais claro que o da antecedência. |
| Joana | "A cada 10 sessões tem que pedir nova autorização." | Regra implícita | Confirmada como regra real (não está no regulamento, que diz que a autorização é responsabilidade do paciente). Depende de uma única pessoa. |

**Problem Statement de referência.**

> Para a Clínica Movimento — pacientes, fisioterapeutas, recepção e a dona —, a agenda não é confiável: em agosto de 2026 (20 dias úteis), 13,6% das sessões que deveriam acontecer terminaram em falta (59 de 434), 13 horários tiveram dois pacientes ao mesmo tempo, e houve sessões realizadas sem pacote pago ou sem autorização de convênio válida, o que leva a cobranças acumuladas e a glosas. A recepção gasta cerca de duas horas por dia com mensagens e consegue enviar o lembrete da véspera a menos da metade dos pacientes. Queremos, em três meses: faltas abaixo de 8%, nenhum horário duplicado e nenhuma sessão de convênio sem autorização válida — sem aumentar o tempo da recepção com mensagens e sem aumentar reclamações de pacientes. Fora do escopo: preços, contratos com convênios e composição da equipe.

As metas (8%, zero duplicidades) são decisões de Sílvia; o importante é que existam e sejam verificáveis.

**Stakeholders (essencial).** Sílvia — posição: "quero IA"; interesse: horários ocupados, receita, menos glosas. Fisioterapeutas — posição: "marcar direto é mais rápido"; interesse: não perder o paciente na saída quando a recepção está vazia; perdem: autonomia de agenda se a marcação direta for proibida. Joana — interesse: menos interrupções; perde (ou deixa de ter): ser a única que conhece a regra dos convênios. Pacientes — interesse: ser lembrado, saber quanto resta do pacote, não esperar. Convênios — interesse: cumprimento das regras de autorização.

**System Map: laços principais.**

- *Reforço:* faltas → horários vazios → Sílvia pede encaixes → fisioterapeutas marcam sem ver a agenda → horários duplicados → espera e insatisfação → desistências e faltas.
- *Reforço:* recepção sobrecarregada → menos lembretes → mais faltas → mais remarcações e mensagens → mais sobrecarga.
- *Causa estrutural:* recepção vazia à tarde → marcação por fora da agenda → duas fontes da verdade.

Pontos de alavancagem: o lembrete (informação), a agenda única (fonte da verdade) e a regra de autorização (regras).

**Erros comuns neste P00.** Aceitar os 30% de Sílvia como linha de base; culpar Joana pelos duplicados; tratar "a agenda" como um problema só; escrever um Problem Statement que já fala em "sistema de mensagens com IA".

#### P03 — Processo real

**Processo real (resumo).** Há três caminhos para marcar ou remarcar — Joana na planilha (de manhã), fisioterapeuta direto no celular ou papel deixado no balcão (à tarde) — e só o primeiro garante a consulta à agenda. O lembrete é manual e parcial. O controle de pacotes é uma recontagem semanal da agenda feita por Sílvia. A autorização de convênio é controlada "de cabeça" por Joana, num papel na gaveta.

**Desperdícios (com evidência do caso).**

| Desperdício | Onde aparece |
|---|---|
| Espera | Mensagens da tarde esperam até as 8h; dúvidas clínicas esperam um fisioterapeuta; autorização de convênio esperando Joana voltar de férias. |
| Retrabalho | Desfazer horários duplicados; ligar para pacientes para trocar horários marcados no papel; recontar pacotes. |
| Transcrição | Nome e telefone copiados para cada lembrete; foto de anotação lançada na planilha; pacotes recontados da agenda. |
| Busca | Duas pacientes "Ana"; pacote do paciente no balcão sem resposta. |
| Interrupção | Seis interrupções presenciais numa manhã. |
| Passagem de bastão | Fisioterapeuta → Joana por foto ou papel, sem confirmação. |

**Qualidade dos dados encontrada na planilha de agenda.** 7 linhas duplicadas; 13 grafias de status para 5 estados reais; datas em três formatos (dia/mês/ano, ano-mês-dia e dia/mês sem ano); horas em dois formatos; 8 pacientes com o nome escrito de formas diferentes; campos em branco em `tipo` (23), `marcado_em` (36), `marcado_por` (68) e `lembrete` (48). A planilha de pacotes está defasada (atualização semanal, algumas linhas de uma semana antes) e tem erros de contagem.

**Árvore de problemas (trecho).**

```
AGENDA NÃO CONFIÁVEL
├── Faltas (13,6%)
│   ├── lembrete chega a menos da metade dos pacientes      [fato; associação forte]
│   │   ├── lembrete manual, feito entre interrupções      [fato]
│   │   └── sem lembrete para segunda (recepção fecha sexta à tarde)   [fato]
│   └── pacientes no fim do pacote não sabem se podem vir   [hipótese apoiada]
├── Horários duplicados (13)
│   ├── marcação fora da agenda (celular, papel)             [fato]
│   │   └── recepção vazia à tarde                           [fato — causa estrutural]
│   └── encaixes sem consulta à agenda                       [fato]
├── Sessões sem cobertura
│   ├── pacote recontado só às sextas                        [fato]
│   └── autorização de convênio depende de uma pessoa        [fato]
└── Sobrecarga da recepção
    ├── respostas livres exigem leitura uma a uma            [fato]
    └── perguntas sobre pacote sem resposta disponível       [fato]
```

**Intervenções pela Escada (proposta de referência).**

| Degrau | Intervenção | Ataca |
|---|---|---|
| 1 | Agenda única como fonte da verdade: ninguém marca fora dela. À tarde, o fisioterapeuta marca *na mesma agenda*, pelo celular, em vez de anotar à parte. Encaixes só pela agenda. | Duplicados |
| 1 | Autorização de convênio vira tarefa com dono e substituto, disparada na 8.ª sessão. | Glosas |
| 1 | Sílvia decide e comunica a política de faltas (aplicar o regulamento ou retirá-lo). | Faltas; regra implícita |
| 2 | Lista fechada de status; modelo de lembrete com opções claras ("1 confirmar, 2 remarcar, 3 falar com a recepção"). | Dados; mensagens |
| 3 | Contador de sessões por paciente calculado a partir da agenda, visível para todos, com destaque nas duas últimas sessões cobertas. | Pacotes; faltas no fim do pacote |
| 4 | Lembrete automático na véspera para todos (inclusive o de segunda, enviado na sexta), com aviso de "últimas sessões do pacote". | Faltas; sobrecarga |
| 6 | Classificação das respostas livres com IA — *só depois* das anteriores e do P07. | Sobrecarga |

Não recomendado neste momento: assistente autônomo que remarque sozinho (escolher horário exige a agenda única que ainda não existe; envolve regras de pacote e cobrança; recebe texto de terceiros, com risco de instruções embutidas).

**Hipótese de efeito.** Se todos os pacientes recebessem lembrete e a taxa observada com lembrete se mantivesse, as faltas cairiam para perto de 6–7%. É uma hipótese, não uma previsão: a associação observada pode ser em parte explicada por como Joana escolhe para quem manda. O piloto deve medir.

**Erros comuns neste P03.** Mapear só o caminho de Joana (o processo oficial); não perceber que o atalho dos fisioterapeutas atende a uma necessidade real (recepção vazia à tarde) e propor apenas "proibir"; calcular taxas sem remover duplicatas e unificar status; propor IA antes da agenda única.

#### P07 — IA aplicada

**Rotulagem de referência** (`respostas/mensagens-referencia.csv`). CONFIRMA 23; REMARCAR 12; DÚVIDA 9; OUTRO 9; CANCELAR 7. Requer humano: 37 sim, 23 não.

**Compare antes com a sua.** As divergências mais prováveis estão em M56 ("não vou conseguir amanhã": pelo guia, CANCELAR, porque não pede nova data), M20 ("não": OUTRO, ambíguo), M18 (indefinida), M06 (reclamação com pergunta: OUTRO) e M33 ("Ok": CONFIRMA). Se você divergiu em mais de seis mensagens, o problema provavelmente está na leitura do guia — ou no próprio guia. Registre quais regras do guia você mudaria: no mundo real, é assim que o guia melhora.

**Linha de base determinística mais simples.** A regra "começa com 1 → CONFIRMA; começa com 2 → REMARCAR; qualquer outra coisa → fila humana" classifica automaticamente 12 das 60 mensagens, todas corretamente, e manda 48 para a fila. Um detalhe importante: M29 ("1. Posso chegar 15 min atrasado?") seria confirmada corretamente, mas a pergunta se perderia. A regra precisa mandar para a fila toda mensagem com texto além do número.

**Sobre regras de palavras-chave.** É possível escrever regras que acertam quase todas as 60 mensagens — se elas forem escritas olhando para essas 60. Em mensagens novas, o desempenho tende a cair. É exatamente por isso que o P07 exige separar um terço do conjunto antes de ajustar qualquer coisa.

**Pontos de atenção para a versão com IA.**

- M52 e M60 contêm instruções embutidas. O resultado correto é classificar (OUTRO e CONFIRMA) e **não executar nada**. A defesa é de arquitetura: a IA só produz rótulos validados por esquema e não tem nenhuma ferramenta.
- M05, M26 e M28 contêm dados de saúde. Antes de enviar mensagens reais a um serviço de IA, é preciso verificar se ele é aprovado para esse tipo de dado — ou anonimizar.
- M44 ("1 2") é contraditória; M20 ("não") e M18 são ambíguas: o comportamento esperado é mandar para a fila, não adivinhar.
- Datas relativas (M43, M37, M12) não devem ser convertidas em datas pela IA.

**Decisão esperada (forma, não números).** Uma boa decisão costuma combinar: melhorar a entrada (lembrete com opções claras, que aumenta a proporção de respostas estruturadas — degrau 2); regra para respostas puramente numéricas; IA para sugerir categoria e sinalizadores das demais, em nível N2 (Joana aprova); nada executado automaticamente a partir do texto livre. Se o seu resultado mostrou que a IA não compensa para o volume da clínica, essa também é uma conclusão válida — desde que sustentada pelas medições.
