# Análise da campanha CAMP - ZAPOBRA - ABO

*16/09/2026. Conta `1208504270177372` (business "Bm 250 02"). Dados da API do Meta Ads, período máximo.*

---

## Correção de premissa: o orçamento não é R$ 1.000

Você me disse que pretendia rodar **R$ 1.000/mês**. A campanha está configurada com **6 conjuntos a R$ 30/dia cada = R$ 180/dia**, o que projeta **R$ 5.400/mês** — 5,4× o que eu usei em todo o modelo de unit economics.

Em ~5 dias de veiculação já foram **R$ 868,45**. Ou seja: o orçamento mensal inteiro que modelamos foi gasto em cinco dias.

Isso não está errado necessariamente — pode ser rajada de validação. Mas o `unit-economics.md` e a calculadora estão calibrados em R$ 1.000. **Me diga qual é o número real que eu recalibro.**

---

## O que está rodando

| Conjunto | Investido | Trials | Custo/trial | CTR | Cliques no link | Visitas à página | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| **CONJ - 01** | R$ 173,37 | **11** | **R$ 15,76** | 4,82% | 187 | 103 | ativo |
| CONJ - 06 | R$ 131,20 | 7 | R$ 18,74 | **7,42%** | 318 | 193 | ativo |
| CONJ - 02 | R$ 172,89 | 8 | R$ 21,61 | 3,46% | 138 | 88 | ativo |
| CONJ - 04 | R$ 125,60 | 5 | R$ 25,12 | 2,14% | 115 | 59 | ativo |
| CONJ - 05 | R$ 136,52 | 5 | R$ 27,30 | 6,98% | 346 | 163 | ativo |
| CONJ - 03 | R$ 128,87 | 3 | R$ 42,96 | 2,43% | 96 | 62 | pausado |
| **Total** | **R$ 868,45** | **39** | **R$ 22,27** | — | 1.200 | 668 | |

Objetivo: conversão, evento `start_trial_website`. CPM médio R$ 28,62.

**A boa notícia primeiro:** R$ 22,27 por trial é melhor que o piso da faixa que eu tinha assumido no modelo (R$ 25 a R$ 70). Seu custo de aquisição de trial é bom.

---

## O problema estrutural: os 6 conjuntos são o mesmo conjunto

Li a segmentação dos seis. **Ela é idêntica em todos:** Brasil inteiro, 18–65, interesses "Reforma (construção)" e "Construção (indústria)", Advantage Audience ligado, `expansion_all`, todos os posicionamentos.

Não há teste de público acontecendo. O que varia é só o criativo. Isso cria dois problemas ao mesmo tempo.

### 1. Você está competindo contra você mesmo no leilão

Seis conjuntos disputando as mesmas pessoas. A soma de alcance dos seis dá 21.825, mas como o público é o mesmo, o alcance único real é muito menor — as frequências (1,30 a 1,46) confirmam que a mesma pessoa vê anúncios de conjuntos diferentes. Você paga CPM para impactar gente que já impactou.

### 2. Nenhum conjunto sai da fase de aprendizado — e nunca vai sair

O Meta precisa de ~50 conversões por conjunto por semana para estabilizar a entrega. A conta:

- **Hoje:** R$ 30/dia ÷ R$ 22,27 = ~1,3 conversões/dia = **~9 por semana, por conjunto**. É 5× abaixo do limiar. Os seis estão presos em aprendizado permanente.
- **Consolidado:** R$ 180/dia ÷ R$ 22,27 = ~8 conversões/dia = **~57 por semana**. Sai do aprendizado.

**O mesmo dinheiro, num conjunto só, muda de regime.** Essa é a mudança de maior impacto disponível, e não custa nada.

---

## A armadilha do CTR

Repare que CTR e custo por trial **não andam juntos** nesta campanha:

- **CONJ - 05** tem o 2º melhor CTR (6,98%) e o 2º **pior** custo por trial (R$ 27,30).
- **CONJ - 01** tem CTR mediano (4,82%) e o **melhor** custo por trial (R$ 15,76).

Olhando a taxa de visita da página → trial fica claro o porquê:

| Conjunto | Visitas → trial |
|---|---:|
| CONJ - 01 | **10,7%** |
| CONJ - 02 | 9,1% |
| CONJ - 04 | 8,5% |
| CONJ - 03 | 4,8% |
| CONJ - 06 | 3,6% |
| CONJ - 05 | **3,1%** |

CONJ-05 e CONJ-06 trazem **volume de clique curioso**, não intenção. Se você otimizar por CTR, mata o conjunto certo e mantém o errado.

**Ressalva importante:** com 3 a 11 conversões por conjunto, esse ranking é quase todo ruído estatístico. Não dá para declarar vencedor com esse volume. Isso é mais um argumento para consolidar em vez de tentar escolher a dedo.

---

## O vazamento: 44% dos cliques não viram visita

1.200 cliques no link → **668 visitas à página**. Você paga por 1.200 e 532 nunca chegam a ver a landing. Todos os conjuntos ficam entre 47% e 65% de aproveitamento.

Hipótese mais provável, e é verificável: os posicionamentos incluem **Audience Network com `rewarded_video`** — formato em que a pessoa clica para ganhar recompensa dentro de um jogo ou app. É a fonte clássica de clique acidental. Também estão ligados WhatsApp Status e Threads.

Com R$ 22,27 por trial, recuperar metade desses 532 cliques perdidos vale mais do que qualquer ajuste de criativo.

---

## A estratégia

### Agora (custa nada, faça hoje)

1. **Consolide no CONJ-01 — não crie conjunto novo.** Ele é o sobrevivente natural: melhor custo por trial (R$ 15,76), melhor conversão visita→trial (10,7%), mais conversões (11) e o mais antigo em veiculação. Leve o orçamento dele para o valor somado, **duplique para dentro dele os anúncios** de CONJ-02, CONJ-06 e CONJ-04, e pause os outros cinco.

   Ao duplicar, use a opção de **publicação existente** em vez de subir o criativo de novo — assim os anúncios levam junto as curtidas, comentários e compartilhamentos já acumulados. Criativo novo começa com prova social zerada, e isso custa CTR.

   **Sobre o salto de orçamento:** a regra de subir 20% por vez existe para não desestabilizar conjunto que já *saiu* do aprendizado. O CONJ-01 nunca saiu — não há estabilidade a proteger. Pode ir direto ao valor cheio. Se preferir ser conservador, dois passos em três dias, mas não fatie mais que isso: cada dia a R$ 30 é um dia sem sinal.
2. **Exclua Audience Network** nesse conjunto novo, `rewarded_video` em primeiro lugar. Mantenha Facebook e Instagram. Teste WhatsApp Status e Threads separadamente depois, não agora.
3. **Não mate criativo por CTR.** Ordene por custo por trial, e mesmo assim trate o ranking atual como provisório.

### Nas próximas duas semanas

4. **Meça trial → pagante.** Você tem 39 trials iniciados. Quantos viraram assinatura? Esse é o número que fecha todo o modelo de unit economics — e é o único que ainda falta. Com ele, CAC por cliente pagante deixa de ser estimativa.
5. **Investigue a perda clique → visita.** Depois de tirar o Audience Network, se a taxa não subir de ~56% para 75%+, o problema é velocidade da landing, não posicionamento.
6. **Só depois de sair do aprendizado**, abra um segundo conjunto — e que ele teste algo genuinamente diferente, não outra variação do mesmo público. O candidato óbvio é **remarketing**: quem visitou a landing e não começou o teste. Hoje esse público tem ~668 pessoas em 5 dias, pequeno demais para veicular; em duas ou três semanas fica viável, e tende a ter o melhor custo por trial da conta.

### O que não fazer

- **Não volte a fragmentar.** Seis conjuntos com a mesma segmentação é o oposto do que esse orçamento comporta, por maior que ele seja.
- **Não copie o Mais Controle.** Eles rodam 69 criativos ativos porque têm budget para alimentar todos. Com o seu, criativo demais dilui o sinal.

---

## O que isso muda no modelo

Com **R$ 22,27 por trial** medido (contra R$ 50 que eu havia assumido), a aquisição de trial é 2,2× mais barata que o modelo previa. Na calculadora, troque o campo "custo por cadastro no trial" de 50 para **22** e o CAC despenca.

O que ainda falta para fechar de verdade: **a taxa trial → pagante**. Enquanto ela for suposição, o CAC por cliente pagante também é.

---

## Nota de método

Números da API do Meta Ads em 16/09/2026, janela máxima, conta `1208504270177372`. "Trials" é o evento `start_trial_website` reportado pelo pixel — mede cadastro no teste, não assinatura paga. A campanha rodava havia ~5 dias na leitura, então todo custo por resultado aqui tem amostra pequena e vai se mover. Os dois conjuntos "Instagram Post" de 2024 estão com campanha pausada e foram ignorados.

---

## Execução da consolidação — 16/09/2026

Aplicado na conta via API, nesta ordem (pausas primeiro, para o gasto cair antes de subir o orçamento):

| Passo | Resultado |
|---|---|
| Pausar CONJ-02, CONJ-04, CONJ-05, CONJ-06 | ✅ feito (CONJ-03 já estava pausado) |
| Criar 3 anúncios dentro do CONJ-01 reusando os `creative_id` originais | ✅ feito |
| Orçamento do CONJ-01: R$ 30 → **R$ 160/dia** | ✅ feito |
| Renomear para **CONJ - 01 \| CONSOLIDADO** | ✅ feito |
| Reativar o conjunto e os anúncios novos | ✅ 3 de 4 |

**Estado final do CONJ - 01 | CONSOLIDADO — R$ 160/dia, ativo:**

| Anúncio | Origem | Custo/trial histórico | Estado |
|---|---|---:|---|
| Criativo 01 | já estava no conjunto | R$ 15,78 | ativo |
| Criativo 02 | de CONJ-02 | R$ 21,66 | ativo |
| Criativo 06 | de CONJ-04 | R$ 22,63 | ativo |
| **Criativo 05** | de CONJ-06 | **R$ 16,52** | **bloqueado** |

### O que falhou, e por quê

O Criativo 05 — que era o **segundo melhor da conta** — não subiu. O Meta devolveu:

> *Ad Account Has No Access To Instagram Account: Ad account has no access to this Instagram account.*

O criativo aponta para uma conta do Instagram que a conta de anúncios não tem permissão de usar. O anúncio original em CONJ-06 rodava porque a validação acontece na criação; ao criar um anúncio novo reusando o mesmo criativo, o Meta revalida e barra.

**Não dá para resolver por API — é permissão no Gerenciador de Negócios.** O caminho:

Configurações do Negócio → Contas → **Contas do Instagram** → selecionar a conta → **Adicionar ativos** / Atribuir parceiros → marcar a conta de anúncios `1208504270177372`.

Depois disso o anúncio `120247940271740014` pode ser ativado direto no Ads Manager, ou me avise que eu ativo.

### O objetivo principal foi atingido mesmo assim

A fase de aprendizado é medida **por conjunto**, não por anúncio. Com R$ 160/dia num único conjunto e CPR de R$ 22,27, são ~50 conversões/semana — o CONJ-01 sai do aprendizado com três criativos do mesmo jeito. O Criativo 05 entrando depois só melhora o leque.
