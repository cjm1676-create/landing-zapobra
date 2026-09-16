# Decisão de trial + copy pronta — ZapObra

*16/09/2026. Complementa o Benchmark v2.*

---

## Correção à v2

Na v2 eu disse que os 7 dias do ZapObra viraram "passivo competitivo" diante dos 15 do Gerencia Obras. Ao montar a comparação completa, essa leitura não se sustenta. Segue a tabela inteira:

| Concorrente | Trial | Pede cartão? | Tem mídia paga ativa? |
|---|---|---|---|
| Gerencia Obras | **15 dias** | Não identificado | **Não** — zero anúncios, em qualquer período |
| ConstrAI | **14 dias** | Não identificado | Sim (Meta) |
| **RD O Pro** | **7 dias** | **Não** | **Sim — Meta + Google.** O operador mais maduro do mercado |
| Meu Construtor | **7 dias** | Não identificado | Não encontrado no Meta |
| **ZapObra** | **7 dias** | **Não** | — |
| Obra no Bolso IA | **3 dias** | Sim (Hotmart) | Não (parou em 10/07) |

**7 dias é a norma do mercado, não a exceção.** O concorrente com a operação mais madura — o único que compra Meta e Google ao mesmo tempo — roda exatamente os mesmos 7 dias sem cartão que vocês. O Meu Construtor também. Quem dá 14–15 dias são justamente os que não estão comprando atenção: o Gerencia Obras, com 15 dias, tem zero anúncios em qualquer período. Ou seja, **o lead que vê o anúncio de vocês dificilmente vai ver o 15 do lado.** A comparação lado a lado que eu projetei na v2 quase não acontece na prática.

Isso muda a decisão: o problema não é a duração. É o que cabe dentro dela.

---

## Qual é o problema real

O ZapObra só prova valor quando entra **gasto real de obra**. O ciclo de compra numa obra pequena é de 2 a 4 compras por semana. Em 7 dias corridos o sujeito lança talvez 3 a 5 notas — suficiente para entender o mecanismo, apertado para sentir "agora eu sei onde está meu dinheiro".

E o relógio começa no cadastro, não na primeira compra. Quem se cadastra numa sexta perde o fim de semana. Quem se cadastra entre compras queima 3 dias sem ter o que lançar.

**O risco não é "7 é menor que 15". É "7 dias de calendário podem virar 3 dias de uso real".** É esse buraco que a decisão precisa fechar.

---

## Três caminhos

| | O que faz | Custo | Resolve o buraco? |
|---|---|---|---|
| **A. Subir para 14 dias** | Iguala ConstrAI, encosta no Gerencia Obras | Dobra o tempo até a decisão de compra; alonga o CAC payback; mais leads mornos ocupando suporte | Sim, por força bruta |
| **B. Manter 7 e justificar** | Reposiciona 7 como promessa de velocidade | Zero. Só copy | Não — só reenquadra |
| **C. Manter 7 + prorrogação a pedido** ✅ | Headline continua 7; quem precisa responde uma palavra no Zap e ganha +7 | Quase zero. Uma regra no bot | **Sim** — e ainda gera sinal de intenção |

### Recomendação: C

Mantém o headline alinhado com o RD O Pro (7 dias, sem cartão — a norma de quem realmente compete), não alonga o ciclo para a maioria, e dá saída para exatamente quem tem o problema: o cara que não teve compras na semana. O pedido de prorrogação é, ele próprio, um **evento de intenção altíssima** — quem pede mais tempo quer usar. Vira gatilho de contato comercial no melhor momento possível, coisa que 14 dias corridos não te dão.

E é um gesto nativo do produto: resolver pelo WhatsApp, com uma palavra, é a promessa da marca aplicada à própria régua de trial.

**Faça junto, independente do caminho:** garantia formal de devolução. Nenhum dos concorrentes analisados oferece — é o único espaço realmente vago. Garantia de 7 ou 14 dias no primeiro pagamento derruba a objeção onde ela de fato trava a venda, que é no *pagar*, não no *testar*.

---

## Copy pronta

### Caminho C — recomendado (7 dias + prorrogação)

**Hero — nota sob o botão** (`index.html:62`)
> Sem cartão de crédito · Pronto em 2 minutos

*Mantém. Já está certa.*

**Bloco de números — card 1** (`index.html:233-235`)
> **7 dias**
> de teste grátis
> Precisou de mais tempo? Responde PRORROGAR no Zap e ganha mais 7, sem falar com ninguém.

**CTA da seção de preços** (`index.html:284-285`)
> Começar teste grátis de 7 dias
> Sem cartão de crédito · Prorrogável pelo WhatsApp

**FAQ — item novo** (inserir após "É muito caro?", `index.html:325`)
> **E se 7 dias não derem tempo de testar direito?**
> Dão, se a obra estiver comprando. Mas semana de obra é imprevisível — se a sua foi parada, responde PRORROGAR no WhatsApp e a gente libera mais 7 dias na hora. Sem formulário, sem falar com vendedor, sem cartão.

**FAQ — trocar a resposta de "É muito caro?"** (`index.html:325`)
> Os planos foram pensados para caber no orçamento de pequenas e médias construtoras — e você só escolhe um depois de ver o sistema rodando com as notas da sua obra. Se assinar e não servir, devolvemos o primeiro pagamento.

*(Só publique a última frase se a garantia for aprovada.)*

**Mensagem do bot no dia 5 do trial** (não está na landing, mas fecha o ciclo)
> Faltam 2 dias do seu teste. Você já lançou [N] gastos na obra [NOME]. Se a semana foi fraca de compras e você quer testar melhor, responde PRORROGAR que eu libero mais 7 dias.

---

### Caminho B — manter 7 e justificar

**Bloco de números — card 1** (`index.html:233-235`)
> **7 dias**
> de teste grátis
> Uma semana inteira de obra: as compras, os pagamentos, o diário. Dá para ver o custo real fechar.

**CTA da seção de preços** (`index.html:284`)
> Testar por uma semana de obra

**FAQ — item novo**
> **Por que só 7 dias?**
> Porque é o que basta. Em uma semana de obra passam as compras de material, o pagamento da equipe e as ocorrências do canteiro — é o ciclo completo que o ZapObra organiza. Teste mais tempo que isso e você só vai repetir a mesma semana.

---

### Caminho A — subir para 14 dias

**Hero — nota sob o botão** (`index.html:62`)
> 14 dias grátis · Sem cartão de crédito · Pronto em 2 minutos

**Bloco de números — card 1** (`index.html:233-235`)
> **14 dias**
> de teste grátis
> Duas semanas de obra real: tempo de sobra para as compras, os pagamentos e o fechamento do mês parcial.

**CTA da seção de preços** (`index.html:284-285`)
> Começar teste grátis de 14 dias
> Sem cartão de crédito

**FAQ — cadastro** (`index.html:301`)
> É rápido: acesse o link de teste grátis, informe seu WhatsApp e confirme com o código enviado. Em menos de 2 minutos você já pode cadastrar sua primeira obra — e tem 14 dias para usar sem pagar nada.

---

## Notas de implementação

**O número do trial vem da API, mas nem todo lugar acompanha.** Em `script.js:145` o CTA de preços é montado com `'Começar teste grátis de ' + (d.trial || 7) + ' dias'` — esse texto se ajusta sozinho se o endpoint `planos-publicos` passar a devolver `trial: 14`.

**Mas o "7 dias" do bloco de números está escrito à mão** em `index.html:233`. Se mudar o trial no backend sem tocar no HTML, a landing passa a exibir **7 dias no bloco de números e 14 dias no botão de preços, na mesma página.** Qualquer caminho que mexa na duração precisa alterar os dois pontos juntos.

**Touchpoints do trial na landing, para conferência:**

| Local | Linha | Texto atual |
|---|---|---|
| Hero, nota do CTA | `index.html:62` | Sem cartão de crédito · Pronto em 2 minutos |
| Bloco de números, card 1 | `index.html:233-235` | 7 dias / de teste grátis / Use com as suas obras reais… |
| Bloco de números, card 2 | `index.html:240` | Não pedimos cartão de crédito no cadastro. |
| CTA de preços | `index.html:284-285` | Começar teste grátis de 7 dias / Sem cartão de crédito |
| FAQ, cadastro | `index.html:301` | …acesse o link de teste grátis… |
| FAQ, "É muito caro?" | `index.html:325` | …Você testa grátis antes de decidir. |
| CTA final | `index.html:343` | ✓ Sem cartão de crédito |
| Rodapé | `index.html:357` | Teste grátis, sem cartão de crédito. |
| CTA de preços (JS) | `script.js:145` | `'…de ' + (d.trial \|\| 7) + ' dias'` |
