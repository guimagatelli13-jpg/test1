## Apêndice I — Trabalhos comentados

### Como usar este apêndice

Rubricas descrevem níveis com palavras; trabalhos mostram o que essas palavras significam. Este apêndice traz, para três projetos, **dois trabalhos de alunos fictícios** — um no nível 2 (em desenvolvimento) e outro no nível 3, com elementos de nível 4 — e o **comentário de um avaliador**, critério por critério.

Os trabalhos usam cenários do banco de cenários (Parte VII), e não o caso-guia, para não antecipar as respostas do seu próprio P00, P03 e P07. Os números são ilustrativos.

Use-os de duas formas:

1. **Antes de começar um projeto**, leia o trabalho de nível 2 e tente encontrar os problemas sozinho; depois leia o comentário.
2. **Depois de terminar**, avalie o seu trabalho com a rubrica e compare-o com os dois exemplos. Se o seu se parece mais com o de nível 2 num critério crítico, revise antes de considerar o projeto aprovado.

Os trabalhos foram condensados: mostram os trechos que decidem a nota, não o entregável completo.

### I1 — P00 Diagnóstico · Escritório de contabilidade (cenário C2)

*Pedido inicial:* "Todo mês é uma correria atrás de documento de cliente. Dá para a IA cobrar e organizar?"

#### Trabalho A

> **Problem Statement.** O escritório perde muito tempo cobrando documentos dos clientes, o que gera atrasos nas obrigações e estresse na equipe. Queremos automatizar a cobrança com IA para reduzir o tempo gasto e acabar com os atrasos.
>
> **Stakeholders.** Sócio (quer resolver o problema); equipe (quer menos trabalho); clientes (precisam mandar os documentos).
>
> **Fatos levantados.** Os clientes são desorganizados. A equipe gasta muito tempo cobrando. O sócio acha que a IA resolveria.
>
> **System Map.** Elementos: clientes, e-mail, equipe, sistema contábil, sócio, Receita.
>
> **Conversas.** Uma conversa de 40 minutos com o sócio.

**Comentário do avaliador**

| Critério | Nível | Evidência |
|---|---|---|
| Enquadramento (crítico) | 2 | A declaração embute a solução ("automatizar a cobrança com IA"). "Muito tempo" e "acabar com os atrasos" não são verificáveis: não há indicador, linha de base nem proteção. |
| Evidência (crítico) | 1 | "Os clientes são desorganizados" é interpretação, registrada como fato. "O sócio acha que a IA resolveria" é uma posição, não um fato sobre o problema. Nenhum fato tem fonte. |
| Stakeholders | 2 | Lista existe, mas não separa posição de interesse nem registra o que cada um perde. |
| System Map | 2 | Lista de elementos sem fluxos, fronteira ou laços. Não passa no teste do problema. |
| Comunicação (crítico) | 2 | O Problem Statement não foi mostrado a nenhum afetado além do sócio. |

*Resultado:* não aprovado (critérios críticos abaixo de 3).

*Pergunta de devolutiva:* "Se você tivesse de provar ao sócio, com números da caixa de entrada, que o problema existe, o que contaria?"

#### Trabalho B

> **Conversas e levantamento.** Sócio, duas analistas e um cliente. Acompanhei o caminho dos documentos de cinco clientes no fechamento de junho, pela caixa de entrada e pela planilha de controle.
>
> **Fatos, interpretações e hipóteses (trecho).**
>
> | Fatos (fonte) | Interpretações | Hipóteses (como verificar) |
> |---|---|---|
> | No fechamento de junho, 61 de 150 clientes entregaram depois do dia 5 (planilha de controle). | "Os clientes são desorganizados" (sócio). | Os clientes não sabem exatamente o que enviar: comparar a primeira remessa com a lista completa. |
> | 3 dos 5 clientes acompanhados mandaram a primeira remessa incompleta (caixa de entrada). | "Cobrar não adianta" (analista 1). | A cobrança começa tarde: verificar a data da primeira cobrança em 20 clientes. |
> | 9 obrigações entregues com atraso no semestre (registro de multas). | | Poucos clientes concentram os atrasos: contar atrasos por cliente nos últimos 6 meses. |
>
> **Problem Statement.** Para a equipe contábil e para os clientes do escritório, a entrega dos documentos mensais é irregular: em junho, 41% dos clientes (61 de 150) entregaram depois do dia 5, prazo interno necessário para cumprir as obrigações sem acúmulo. Isso concentra o trabalho na última semana do mês e gerou nove obrigações entregues com atraso no semestre, com multa. Queremos que, em três meses, ao menos 80% dos clientes entreguem tudo até o dia 5, sem aumento de reclamações de clientes sobre cobrança e sem aumento de horas extras da equipe. Fora do escopo: troca do sistema contábil e mudança da carteira de clientes.
>
> **Nível do problema.** Subindo: multas e desgaste com clientes (importa, mas depende de fatores fora do alcance). Descendo: "documentos incompletos na primeira remessa" (verificável e com influência direta). Escolhi o nível da entrega até o dia 5, porque importa para o sócio, a equipe tem influência e é mensurável.
>
> **Stakeholders (trecho).**
>
> | Stakeholder | Posição | Interesse | O que perde |
> |---|---|---|---|
> | Sócio | "Quero IA cobrando." | Menos multas e menos pico de trabalho. | — |
> | Analistas | "Cliente tem que mandar no prazo." | Previsibilidade do mês. | Se a cobrança for centralizada, perdem o contato direto com "seus" clientes, que valorizam. |
> | Clientes | "Vocês sempre pedem coisa diferente." | Saber de uma vez o que mandar. | Flexibilidade de mandar aos poucos. |
>
> **System Map (laço principal).** Atraso na entrega → acúmulo no fim do mês → menos tempo para orientar clientes → mais remessas incompletas → mais atraso.
>
> **Validação.** Mostrei a declaração às duas analistas. Correção feita: para 30 clientes, a cobrança já começa no dia 3; registrei essa diferença como fato e ajustei a hipótese.

**Comentário do avaliador**

| Critério | Nível | Evidência |
|---|---|---|
| Enquadramento (crítico) | 4 | Oito elementos presentes; nenhuma solução embutida; indicador, linha de base, meta e duas proteções. Explorou os níveis do problema e justificou a escolha. |
| Evidência (crítico) | 3 | Fatos com fonte; interpretações atribuídas a quem as disse; hipóteses com forma de verificação. |
| Stakeholders | 3 | Posição, interesse e perdas; a perda das analistas antecipa uma resistência real. |
| System Map | 3 | Laço de reforço identificado e plausível. Faltou desenhar a fronteira e os fluxos de informação de forma explícita. |
| Comunicação (crítico) | 3 | Validado com afetados; a reação mudou o registro. |

*Resultado:* aprovado.

*O que faria subir de nível:* no System Map, apontar o ponto de alavancagem (por exemplo, a entrada: uma lista única de documentos por tipo de cliente) e um efeito de segunda ordem provável de cobrar mais cedo.

#### O que separa os dois trabalhos

O trabalho A não está "mal escrito"; está **mal fundamentado**. Ele repete o que o sócio disse. O trabalho B fez três coisas que o A não fez: foi buscar números na caixa de entrada e na planilha, ouviu quem opera o processo e transformou opiniões em hipóteses verificáveis. Nenhuma dessas coisas exige tecnologia; todas exigem tempo de investigação — no caso, cerca de quatro horas a mais.

### I2 — P03 Processo real · Oficina mecânica (cenário C5)

*Pedido inicial:* "Perco cliente porque demoro para mandar orçamento."

#### Trabalho A

> **Process Map.** Cliente traz o carro → mecânico avalia → dono faz o orçamento → dono envia ao cliente → cliente aprova → serviço é feito.
>
> **Desperdícios.** Espera (o cliente espera o orçamento). Retrabalho (às vezes o orçamento muda).
>
> **Proposta.** Implantar um sistema de orçamentos com IA: o mecânico descreve o problema em áudio e a IA gera o orçamento automaticamente com as peças e a mão de obra. Isso vai reduzir o tempo e evitar a perda de clientes.
>
> **Decision Log.** DL-01: usar IA para gerar orçamentos. Justificativa: é o mais rápido.

**Comentário do avaliador**

| Critério | Nível | Evidência |
|---|---|---|
| Mapeamento (crítico) | 2 | É o processo oficial, descrito pelo dono. Não há casos acompanhados, raias, esperas medidas nem exceções. |
| Análise (crítico) | 1 | Desperdícios citados sem evidência; gargalo não identificado; nenhuma árvore de problemas. |
| Proposta (crítico) | 2 | Uma única alternativa, no degrau 6, sem melhoria de processo. A proposta acelera a escrita do orçamento — mas não se sabe se é aí que o tempo se perde. |
| Comunicação (crítico) | 2 | Não há registro de apresentação ao dono nem da reação. |
| Gestão do projeto | 2 | Sem brief combinado; DL sem alternativas. |

*Resultado:* não aprovado.

*Pergunta de devolutiva:* "Escolha os últimos quatro carros que entraram. Em que hora cada um foi diagnosticado e em que hora o orçamento chegou ao cliente? Onde estava o orçamento nesse intervalo?"

#### Trabalho B

> **Casos acompanhados.** Quatro carros, do diagnóstico ao envio do orçamento, com horários tirados das mensagens e das anotações da recepção.
>
> **Process Map real (resumo).** Mecânico diagnostica → manda foto e áudio ao dono pelo celular (atalho: o procedimento diz que deveria preencher a ficha) → *espera* até o fim do dia → dono liga para fornecedores pedindo preço de peças → *espera* retorno dos fornecedores → dono monta o orçamento à noite, em lote → envia na manhã seguinte.
>
> | Caso | Diagnóstico | Orçamento enviado | Tempo | Onde ficou parado |
> |---|---|---|---|---|
> | 1 | seg 9h40 | ter 8h15 | 22h30 | Lote noturno |
> | 2 | seg 14h10 | ter 8h15 | 18h05 | Lote noturno |
> | 3 | ter 10h | qui 9h | 47h | Peça importada sem preço; fornecedor demorou |
> | 4 | ter 15h30 | qua 8h30 | 17h | Lote noturno; orçamento refeito na quinta (mais problemas ao desmontar) |
>
> **Análise.** Execução do orçamento: cerca de 20 minutos por carro. O resto é espera. Desperdícios: espera (lote noturno), busca (preço de peças por telefone, toda vez), retrabalho (orçamento refeito quando a desmontagem revela outro problema), passagem de bastão (mecânico → dono). O atalho da foto existe porque o dono quer ver o problema antes de orçar — necessidade legítima, que a proposta preserva.
>
> **Alternativas pela Escada.** (1) Orçar em duas janelas fixas, às 11h e às 16h, em vez de à noite. (1) Autorizar o mecânico-chefe a orçar serviços da tabela até um valor definido. (2) Tabela de preços dos 20 serviços mais frequentes e lista semanal de preços das peças mais usadas. (2) Orçamento em duas etapas — "preliminar" e "após desmontagem" —, comunicado ao cliente desde o início. (3) Planilha de orçamentos com status. (6) IA para gerar orçamento a partir do áudio — *adiada*: o tempo de escrever o orçamento é pequeno; a espera está antes dele.
>
> **Piloto (uma semana).** Janelas fixas e tabela de preços. Mediana do tempo até o orçamento: de cerca de 20 horas para cerca de 6 horas, em 11 carros. Dois casos ainda demoraram, ambos por peça sem preço na lista.
>
> **Apresentação ao dono.** Aceitou as janelas e a tabela. Recusou dar autonomia ao mecânico-chefe ("ainda não"); registrado no DL-04 com a condição de revisão.

**Comentário do avaliador**

| Critério | Nível | Evidência |
|---|---|---|
| Mapeamento (crítico) | 3 | Processo real com casos, esperas medidas e o atalho explicado pela necessidade que atende. |
| Análise (crítico) | 3 | Desperdícios com evidência dos casos; gargalo (espera antes do orçamento) identificado. Faltou a árvore de problemas desenhada, embora as causas estejam listadas. |
| Proposta (crítico) | 4 | Alternativas em vários degraus, IA adiada com justificativa, piloto com indicador e linha de base. |
| Comunicação (crítico) | 3 | Apresentação registrada, com a reação e a recusa tratadas no Decision Log. |
| Gestão do projeto | 3 | Escopo cumprido; decisão de escopo registrada. |

*Resultado:* aprovado.

*O que faria subir de nível:* analisar o efeito de segunda ordem das janelas fixas (por exemplo, o mecânico passar a acumular diagnósticos para a janela) e comparar o piloto com uma semana equivalente, não só com a média anterior.

#### O que separa os dois trabalhos

O trabalho A propôs uma solução para o lugar onde o dono *achava* que estava o problema. O trabalho B mediu e descobriu que escrever o orçamento leva vinte minutos e esperar leva quase um dia. É a lição do gargalo (Capítulo 5) aplicada: acelerar o que não é gargalo não muda o resultado.

### I3 — P07 IA aplicada · Setor de manutenção de uma escola (cenário C10)

*Tarefa:* classificar os chamados de manutenção, abertos por formulário de texto livre, por área (elétrica, hidráulica, TI, mobiliário e estrutura, limpeza, outro) e por urgência (alta: risco à segurança ou aula impossibilitada; normal: o resto).

#### Trabalho A

> **Conjunto de avaliação.** 20 chamados recentes. Rodei a IA e, para os casos em que concordei com ela, mantive a resposta como gabarito; nos outros, corrigi.
>
> **Versão determinística.** Lista de palavras: "luz" → elétrica; "água" → hidráulica; "computador" → TI; "cadeira" → mobiliário; "sujo" → limpeza.
>
> **Resultados.** IA: 18/20 corretos (90%). Palavras: 9/20 (45%).
>
> **Decisão.** A IA é muito superior. Ela vai classificar e encaminhar automaticamente os chamados para as equipes, inclusive a urgência.

**Comentário do avaliador**

| Critério | Nível | Evidência |
|---|---|---|
| Identificação da oportunidade (crítico) | 2 | A parte foi delimitada, mas a urgência — cujo erro pode ter consequência de segurança — foi tratada como igual à área. |
| Conjunto de avaliação (crítico) | 1 | Gabarito definido depois de ver as respostas da IA (o resultado mede concordância com a IA, não acerto); 20 casos; nenhuma parte separada; limiares não definidos. |
| Comparação (crítico) | 1 | A versão determinística é um espantalho: cinco palavras soltas. Uma alternativa razoável seria mudar a entrada (campos no formulário). |
| Decisão e garantias (crítico) | 1 | Encaminhamento automático sem fallback, sem supervisão e sem análise do custo do erro de urgência. |
| Honestidade (crítico) | 2 | Não declara as limitações do conjunto. |

*Resultado:* não aprovado.

*Pergunta de devolutiva:* "Dos 20 chamados, quantos tinham risco à segurança? O que acontece se a IA classificar um deles como urgência normal?"

#### Trabalho B

> **Conjunto de avaliação.** 120 chamados dos últimos seis meses, anonimizados. Duas pessoas (eu e a coordenadora de manutenção) rotulamos 40 de forma independente: concordância de 37/40 em área e 33/40 em urgência. As divergências de urgência mostraram que "aula impossibilitada" era vago; o guia passou a definir urgência alta como risco físico, vazamento ativo ou sala sem condição de uso. Depois disso, rotulei o restante. 80 casos para desenvolvimento, 40 separados.
>
> **Limiares (definidos antes, com data).** Área: pelo menos 36/40 nos separados para encaminhamento com revisão (N2). Urgência: nenhum falso negativo em casos de risco físico para qualquer automação.
>
> **Versões.** (A) Determinística: formulário com campo de área obrigatório e a pergunta "Há risco à segurança de alguém?" (sim/não). (B) IA classificando área e urgência a partir do texto. (C) Combinação.
>
> **Resultados nos 40 separados.**
>
> | Versão | Área correta | Urgência: falsos negativos em risco físico | Observação |
> |---|---|---|---|
> | A — formulário | 37/40 | 1 | 9 usuários escolheram "outro" na área. |
> | B — IA | 36/40 | 2 | Um deles: "cheiro de queimado na tomada da sala 12" classificado como normal. Variação entre execuções em 3 casos. |
> | C — formulário + IA | 38/40 | 0 | IA sugere área quando o usuário marca "outro"; urgência alta se a pergunta de risco for "sim" **ou** se o texto tiver termos de risco (lista definida com a coordenadora); a IA pode elevar, nunca rebaixar, a urgência. |
>
> **Decisão (DL-07).** Versão C. Área: N2 (a coordenadora confirma o encaminhamento sugerido). Urgência alta: alerta imediato por regra, sem depender da IA. Fallback de indisponibilidade: sem IA, chamados "outro" vão para triagem manual. Auditoria semanal de 10 chamados. Reavaliação a cada mudança de modelo.
>
> **Limitações.** 40 casos separados; o período não incluiu a estação de chuvas, e chamados hidráulicos estão sub-representados; a lista de termos de risco precisa ser revisada a cada trimestre.

**Comentário do avaliador**

| Critério | Nível | Evidência |
|---|---|---|
| Identificação da oportunidade (crítico) | 3 | Área e urgência tratadas de forma distinta pelo custo do erro; IA restrita ao quadrante em que agrega. |
| Conjunto de avaliação (crítico) | 4 | Gabarito prévio, parte separada, limiares datados e concordância entre duas pessoas medida e usada para melhorar o guia. |
| Comparação (crítico) | 3 | Alternativa determinística razoável (mudar a entrada); combinação testada. Faltou comparar custo e manutenção. |
| Decisão e garantias (crítico) | 4 | Assimetria do erro de urgência tratada por arquitetura ("a IA nunca rebaixa"); fallbacks e supervisão definidos. |
| Honestidade (crítico) | 3 | Limitações específicas e relevantes declaradas. |

*Resultado:* aprovado.

#### O que separa os dois trabalhos

O trabalho A mediu a concordância da IA consigo mesma e comparou-a com uma alternativa feita para perder. O trabalho B montou o gabarito antes, mediu onde o erro custa caro e descobriu que a melhor solução para a urgência nem precisava de IA: bastava mudar a pergunta do formulário e criar uma regra que a IA não pode contrariar. Esse é o tipo de conclusão que o P07 existe para produzir.
