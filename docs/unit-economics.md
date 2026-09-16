# Unit economics com R$ 1.000/mês de tráfego

*16/09/2026. Sem dados de churn ainda — por isso este documento trabalha com **payback**, não com LTV.*

---

## Primeiro: não calcule LTV agora

Sem churn e sem tempo médio de permanência, LTV não existe — é um número inventado. Qualquer planilha que te entregar "LTV/CAC = 3x" hoje está multiplicando um chute por outro.

A métrica que funciona antes de ter churn é **payback**: quantos meses o cliente leva para devolver o que custou adquiri-lo.

> **payback (meses) = CAC ÷ mensalidade**

É calculável hoje, é honesta, e leva direto à pergunta certa.

---

## O que R$ 1.000/mês compra

R$ 1.000/mês é ~R$ 33/dia. Partindo daí:

| Etapa | Faixa plausível | Resultado |
|---|---|---|
| Custo por cadastro no trial | R$ 25 – R$ 70 | **14 a 40 trials/mês** |
| Trial → pagante (7 dias, sem cartão) | 10% – 20% | **2 a 8 clientes/mês** |
| CAC resultante | — | **R$ 125 a R$ 500** |

**Essas faixas são premissa, não benchmark.** Eu não tenho custo por lead real desse nicho, e não vou apresentar chute como dado. O primeiro mês de campanha existe para substituir essas faixas por números seus.

Trabalhando com o meio da faixa — **3 clientes/mês, CAC de R$ 333**:

| Plano | Mensalidade | Payback |
|---|---|---|
| (hipotético R$ 39) | R$ 39 | **8,5 meses** |
| Básico | R$ 97 | **3,4 meses** |
| Profissional | R$ 197 | **1,7 mês** |
| Empresarial | R$ 397 | **0,8 mês** |

---

## As três conclusões que saem daí

### 1. A campanha inteira depende de uma coisa que você ainda não mede

Com payback de 3,4 meses no Básico, **um cliente que cancela no mês 3 deu prejuízo.** Não é margem menor — é dinheiro perdido. E o Básico é justamente o plano do cliente mais frágil: 1 obra, obra acaba, motivo natural para cancelar.

Isso significa que a pergunta que decide o seu tráfego pago não é "qual criativo converte melhor". É **"o cliente do Básico sobrevive ao mês 4?"**. Você não sabe, e é a única coisa que precisa saber antes de escalar de R$ 1.000 para R$ 3.000.

Instrumente agora, antes de subir campanha: coorte por mês de cadastro, ativo em D30 / D60 / D90, cruzado com a origem. Duas ou três coortes já mostram o formato da curva.

**Você já tem metade disso pronto** — o `script.js` captura `utm_source`, `utm_medium`, `utm_campaign`, `utm_content` e `fbclid`, grava em cookie de 90 dias no domínio e repassa pro app. Falta amarrar isso à permanência do cliente no banco. (Nota: não captura `gclid` — se um dia rodar Google Ads, some esse parâmetro à lista.)

### 2. O anúncio deve puxar para o Profissional, não para o plano de entrada

O instinto é anunciar o mais barato. Com esse CAC, o instinto está errado: o Básico paga em 3,4 meses, o Profissional em 1,7. **O mesmo R$ 1.000 rende o dobro de velocidade de retorno se trouxer quem toca mais de uma obra.**

Consequência prática no criativo e na segmentação: fale com quem tem **2 a 3 obras ao mesmo tempo**, não com quem está construindo a casa própria. A dor de "não sei quanto gastei" é muito mais aguda quando são três obras misturadas — e é exatamente o comprador que cai no Profissional.

Isso também reforça o ângulo do multi-número por membro: quem tem 3 obras tem equipe, e equipe é o que justifica o degrau de preço.

### 3. O plano de R$ 39 está morto

Payback de 8,5 meses, no cliente mais barato e mais propenso a cancelar, com o mesmo custo de suporte de um cliente de R$ 197. Não faça. O medIAobra pode fazer porque tem outra estrutura de custo; você não tem.

Considere isso encerrado — a menos que apareça um canal orgânico de CAC perto de zero, que é outra conversa.

---

## Disciplina de orçamento: R$ 33/dia não alimenta teste em escala

O Mais Controle roda 69 criativos ativos. **Não copie isso.** Ele tem budget para alimentar muitos conjuntos; você não. Com R$ 33/dia, fragmentar o orçamento faz todo conjunto ficar preso em aprendizagem e nenhum sair.

Para esse patamar:
- **Uma campanha, um conjunto de anúncios.** Não segmente em vários públicos no começo.
- **2 a 3 criativos**, não mais. Troque o pior a cada duas semanas.
- **Otimize para cadastro no trial**, não para compra. Volume de compra vai ser baixo demais para ensinar o algoritmo.
- Só considere abrir um segundo conjunto quando o primeiro estiver entregando com estabilidade.

---

## A base fixa fechada

Câmbio usado: **R$ 5,40/US$**. Não consigo consultar a cotação do dia daqui — troque o número e a conta anda junto.

| Item | R$/mês | Natureza |
|---|---:|---|
| Claude (US$ 100) | **540** | ferramenta |
| Supabase Pro | 127 | infra |
| Kairogen | 100 | ferramenta |
| VPS Hostinger | 88 | infra |
| Domínio | ~7 | infra |
| **Custo de existir** | **≈ 862** | roda com 0 ou 100 clientes |
| Tráfego pago | 1.000 | aquisição — não é custo de existir |
| **Saída total/mês** | **≈ 1.862** | |

O Claude é **63% da base fixa** — ainda a maior linha, mas na ordem de grandeza da infra em vez de cinco vezes ela. São **3 a 4 clientes** pagantes para cobri-lo.

Se você usa a ferramenta em outros projetos além do ZapObra, atribuir 100% aqui infla o ponto de equilíbrio; aloque a fatia real. E é despesa em dólar: a R$ 5,00 dá R$ 500, a R$ 6,00 dá R$ 600 — uma oscilação de 10% no câmbio mexe R$ 100/mês, pouco mais de meio cliente do Básico.

---

## Ponto de equilíbrio

Contribuição por cliente = mensalidade − ~R$ 6 (Gemini + cobrança).

| Cenário de mix | Contribuição média | Clientes p/ cobrir os R$ 862 | Clientes p/ cobrir tudo (R$ 1.862) |
|---|---:|---:|---:|
| Só Básico (R$ 97) | R$ 91 | **10** | 21 |
| Só Profissional (R$ 197) | R$ 191 | **5** | 10 |
| Só Empresarial (R$ 397) | R$ 391 | **3** | 5 |
| Mix 50/40/10 | R$ 161 | **6** | **12** |

A leitura central não muda com o valor menor, só fica menos dramática: **10 clientes se você vender só o plano de entrada, 5 se vender o Profissional.** O mix continua pesando o dobro do volume.

### Quanto tempo leva

Com 3 clientes/mês no mix 50/40/10 (R$ 483 de MRR novo por mês) **e churn zero**:

| Mês | Clientes | MRR | Marco |
|---:|---:|---:|---|
| 2 | 6 | R$ 966 | cobre o custo de existir |
| 4 | 12 | R$ 1.932 | cobre tudo, tráfego incluso |

Churn zero não existe. Este é o cenário-teto, não a previsão.

### O limite que o churn impõe

Com aquisição constante e churn mensal *c*, o MRR estabiliza em `MRR novo ÷ c`:

| Churn mensal | MRR de equilíbrio | Veredito |
|---:|---:|---|
| 5% | R$ 9.660 | confortável |
| 10% | R$ 4.830 | funciona |
| 15% | R$ 3.220 | funciona |
| 20% | R$ 2.415 | apertado |
| **26%** | **R$ 1.858** | **empata com o custo total — e para de crescer ali** |

**Acima de ~26% de churn mensal, R$ 1.000/mês de tráfego nunca paga a estrutura.** Você roda para sempre e estaciona no empate.

A margem é maior do que eu havia calculado, mas a conclusão de fundo continua: **churn é a variável que decide se esse plano de tráfego funciona**, e é a que você ainda não mede. Instrumentar coorte vale mais, agora, que qualquer ajuste de criativo.

---

## Nota de método

As faixas de custo por cadastro e de conversão trial→pagante são premissas de trabalho, não medições. Os preços do ZapObra vêm da tabela `planos`. O custo variável por cliente (~R$ 5-6 de Gemini + cobrança) foi desprezado nos cálculos de payback por ser irrelevante na escala discutida.
