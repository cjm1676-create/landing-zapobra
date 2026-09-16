# Preços reais do mercado e ângulos de venda

*16/09/2026. Baseado nas páginas de planos capturadas por você — medIAobra, Mais Controle e Obra no Bolso IA. Esses são dados de primeira mão, lidos na fonte: a camada mais confiável de todo o benchmark.*

---

## Duas correções minhas, primeiro

**1. Eu disse que o medIAobra "não existe operacionalmente".** Errado. Tem página de planos completa, dois planos, cobrança mensal e anual, e uma política de mensagens detalhada. Eu concluí isso de "zero anúncios no Meta + pouca presença em busca" — que é o mesmo viés que já me fez errar com o Obra Manager. **Ausência de mídia não é ausência de produto.** Terceira vez que esse atalho me trai; parei de usá-lo.

**2. Eu disse que "prestação de contas ao dono da obra" era espaço vago.** Não é. O Mais Controle vende exatamente isso como add-on **Portal do Cliente, R$ 69/mês** — gestão de pagamentos, lembrete por WhatsApp e e-mail, fotos e vídeos da obra, cronograma, painel com indicadores. O espaço não está vago: está **desmembrado e caro**. O que muda a recomendação, para melhor (ver ângulo 4).

---

## A escada de preços do mercado

| Produto | Entrada | Topo | O que limita |
|---|---|---|---|
| **medIAobra** | **Grátis** (15 registros / 7 dias) | **R$ 39/mês** | Obras e usuários **ilimitados**; limite é **50 msgs WhatsApp/mês** |
| **ZapObra** | — | **R$ 97** → R$ 197 → R$ 397 | Obras (1/3/∞) e membros (2/5/15) |
| **Obra no Bolso IA** | 3 dias grátis | **R$ 97** → R$ 169,90 | Obras ativas (1 → múltiplas) |
| **RD O Pro** | 7 dias grátis | R$ 104,50 → R$ 175 | Obras e usuários (10/10, 20/20) |
| **Meu Construtor** | 7 dias grátis | R$ 149,90 | não apurado |
| **Mais Controle** | Diagnóstico + Imersão | **R$ 269 base + add-ons** | Módulos vendidos separadamente |

### O choque frontal que você precisa ver

**ZapObra Básico: R$ 97/mês, 1 obra.**
**Obra no Bolso IA "Obra Organizada": R$ 97,00/mês, 1 obra ativa.**

Mesmo preço, mesmo limite de obra, mesma promessa (controle de gastos via WhatsApp por texto, áudio e imagem, IA direta no WhatsApp, diário de obra, sistema web com gestão financeira). Um lead que abrir as duas abas não vai achar diferença no que está escrito.

E no degrau de cima **você fica pior**: ZapObra Profissional custa R$ 197 por 3 obras; o Gestão Profissional deles custa **R$ 169,90 por múltiplas obras**. Mais barato e menos limitado.

### E o R$ 39 do medIAobra

Obras ilimitadas e usuários ilimitados por R$ 39/mês destrói a lógica de cobrar por obra — que é a sua e a de quase todo mundo. Na comparação nua, "obras ilimitadas por R$ 39" contra "1 obra por R$ 97" não tem defesa.

Mas leia a letra miúda: **50 mensagens de WhatsApp por mês**, com pacote adicional de +50 por R$ 12,90. Não é plano ilimitado — é plano medido, com o medidor no lugar que o usuário não olha na hora de comparar. Cinquenta mensagens é menos de duas por dia útil. Qualquer obra ativa estoura isso na primeira semana.

O desenho deles é coerente: empurram o uso para o **"Chat no painel ilimitado"** e racionam o WhatsApp. Ou seja, **venderam um produto WhatsApp-first e estão migrando o uso para fora do WhatsApp.**

---

## O evento que vale mais que todo o resto: 01/10

A página do medIAobra diz, textualmente: *"WhatsApp: 50 msgs/mês — política da Meta a partir de 01/10, não nossa. Pacote +50 R$ 12,90."*

Se isso se confirmar, **todo concorrente que roda na API oficial do WhatsApp vai ser forçado a medir mensagem em duas semanas.** Eles já precificaram: R$ 12,90 por 50 mensagens = **R$ 0,258 por mensagem**.

Faça a conta no seu produto. Uma obra ativa com 10 lançamentos por dia gera ~300 mensagens/mês. Na régua deles, isso é 250 mensagens acima da franquia = 5 pacotes = **R$ 64,50/mês só de mensagem**. Num plano de R$ 97, isso come dois terços da receita.

**E aqui está a sua posição — que é boa e frágil ao mesmo tempo.** O ZapObra não roda na API oficial: roda **WAHA com engine WEBJS** num VPS próprio, com custo de infra fixo de ~R$ 222/mês independente do volume de mensagens. Seu custo marginal por mensagem é praticamente zero. Enquanto o mercado é empurrado para o medidor, você pode oferecer mensagem ilimitada sem que isso apareça no seu custo.

Duas ressalvas honestas, porque isso não é vitória de graça:

- **Não verifiquei a política da Meta.** É afirmação de concorrente numa página de vendas, e o meu ambiente não alcança a documentação da Meta. Confirme antes de construir campanha em cima.
- **WEBJS é engine não oficial.** A vantagem de custo é real hoje, mas vem com risco de bloqueio de conta e não é garantida no tempo. Trate como **janela**, não como fosso. E se um dia migrar para a API oficial, o plano de R$ 97 com mensagem ilimitada deixa de fechar — vale já modelar esse cenário antes de prometer "ilimitado" por escrito.

---

## O que você já tem e não está vendendo

Cruzando o schema do ZapObra com o que os outros cobram à parte:

**Multi-número por membro.** O Obra no Bolso IA vende "Gestão Compartilhada — cada membro usa seu próprio número de WhatsApp" como o principal motivo do salto de R$ 97 para **R$ 169,90**. O ZapObra tem `usuarios_tenant` com telefone por usuário e 2 membros já no plano Básico de R$ 97. **Você entrega por R$ 97 o que eles cobram R$ 169,90 para entregar** — e sua landing não diz isso em lugar nenhum.

**Portal do cliente.** O Mais Controle cobra **R$ 69/mês** por um Portal do Cliente. O ZapObra tem o papel `cliente` com acesso somente leitura, já implementado e bloqueado por `ACOES_ESCRITA`. É a mesma função, inclusa. Também não está na página.

Esses dois não exigem desenvolver nada. Exigem escrever.

---

## Seis ângulos de venda

Em ordem de força, considerando o que é verdadeiro hoje.

### 1. Mensagem ilimitada (janela de outubro)
O mais forte e o mais perecível. A partir de 01/10 o mercado passa a ter franquia; você não. Ângulo: *"Sem franquia de mensagem. Mande quantas notas precisar — sua obra não cabe em 50 mensagens por mês."* Só publique depois de confirmar a política da Meta e de decidir se sustenta o ilimitado caso migre de engine.

### 2. Cada um da equipe no próprio número, desde o plano de entrada
Concreto, verificável e já existe. *"Mestre, comprador e engenheiro, cada um no seu WhatsApp. Sem custo extra, desde o plano de entrada."*

### 3. Contra a pilha de add-ons do ERP
O Mais Controle começa em R$ 269 e cobra à parte Diário de Obras (+R$ 60), Portal do Cliente (R$ 69), BI (+R$ 99), Compras IA (+R$ 90), Estoque (+R$ 99), Usuário extra (+R$ 40). Uma configuração realista passa de R$ 400. Ângulo: *"Diário de obra, portal do cliente e relatórios já vêm juntos. Você não monta um orçamento pra usar o sistema."*

### 4. Prestação de contas ao dono da obra — agora com preço de referência
Não é espaço vago, é espaço caro. Isso melhora o argumento em vez de piorar: existe demanda validada e há um número na mesa (R$ 69/mês). *"Mostre ao seu cliente onde foi o dinheiro dele — incluso, não é módulo extra."*

### 5. Teste limitado por uso, não por calendário
O "Plano Estagiário" do medIAobra dá **15 registros em 7 dias**. É melhor desenho que o seu trial puro por tempo, e resolve exatamente o problema que eu tentei resolver com prorrogação: numa semana parada de compras, o relógio não queima o teste, porque o limite é de lançamentos, não de dias. Vale considerar migrar o trial para "N lançamentos" ou "N lançamentos ou 7 dias, o que vier depois".

### 6. Preço — e aqui você precisa mexer, não só comunicar
O R$ 97 por 1 obra não se sustenta ao lado de um concorrente idêntico no mesmo valor e de um R$ 39 com obras ilimitadas. Três saídas possíveis:
- **Descolar do "por obra"**, que é onde o medIAobra te ataca e o Obra no Bolso te empata;
- **Diferenciar o R$ 97 por inclusão** (multi-número + portal do cliente + mensagem ilimitada) em vez de por limite;
- **Criar um degrau abaixo** para brigar na faixa de R$ 39–59, aceitando margem menor na entrada.

**Correção:** eu escrevi aqui que o ponto de equilíbrio era ~3 clientes no Básico, usando só a infra (~R$ 222/mês). Está errado — a base fixa real inclui ferramentas de operação (Claude Code, Kairogen) e existe ainda o tráfego pago. Com a base fixa maior, **o degrau de entrada barato fica pior, não melhor**: a R$ 39 a contribuição por cliente é quase nula e o custo de suporte é o mesmo de um cliente de R$ 197. O R$ 39 do medIAobra é jogada de quem tem base fixa perto de zero ou está comprando participação. Ver `unit-economics.md` para o cálculo correto.

---

## O que confirmar antes de agir

1. **A política da Meta de 01/10** — é a base do ângulo mais forte e vem de página de concorrente.
2. **Se o ZapObra sustenta mensagem ilimitada** em qualquer cenário de engine.
3. **Se o papel `cliente` está pronto para uso de cliente final** (não só tecnicamente existente).
4. **Se os planos do ZapObra na tabela `planos` batem com o que o endpoint `planos-publicos` devolve hoje** — a landing lê do endpoint, e este documento usa a tabela.

---

## Nota de método

Os preços de medIAobra, Mais Controle e Obra no Bolso IA vêm das páginas de planos capturadas por você — leitura direta da fonte, a informação mais confiável deste benchmark. Os planos do ZapObra vêm da tabela `planos`. Os demais preços (RD O Pro, Meu Construtor) continuam vindo de busca pública e não foram confirmados na fonte. A afirmação sobre a política da Meta é do medIAobra, não verificada por mim.
