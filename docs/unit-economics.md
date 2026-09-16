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

## O que ainda falta para fechar o modelo

Me falta **quanto dá, em reais por mês, Claude Code + Kairogen somados** — e que fatia disso você atribui ao ZapObra, se usa em outros projetos. Não vou estimar: o valor varia por plano e por câmbio, e errar aí contamina o ponto de equilíbrio inteiro.

Com esse número eu fecho:
- o ponto de equilíbrio real em número de clientes, por plano;
- quantos meses de R$ 1.000/mês até o MRR cobrir a base fixa;
- em que MRR faz sentido subir o tráfego, e para quanto.

Uma referência de ordem de grandeza enquanto isso: a R$ 97, três clientes por mês adicionam **R$ 291 de MRR por mês**. O MRR é cumulativo e o tráfego é recorrente, então a curva vira a favor — mas leva alguns meses, e o quanto depende exatamente do número que falta.

---

## Nota de método

As faixas de custo por cadastro e de conversão trial→pagante são premissas de trabalho, não medições. Os preços do ZapObra vêm da tabela `planos`. O custo variável por cliente (~R$ 5-6 de Gemini + cobrança) foi desprezado nos cálculos de payback por ser irrelevante na escala discutida.
