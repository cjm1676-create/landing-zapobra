# Benchmark pelo método Blue Ocean — o que foi feito e o que falta

*16/09/2026. Aplica o passo a passo de "Benchmark na Prática" (Vitor Reis, Blue Ocean, 2026) ao levantamento do ZapObra. Complementa `benchmark-concorrentes.md`.*

---

## Status do checklist

O método tem 4 etapas e 8 itens de checklist. **Consegui executar 2 e meio.** O motivo é sempre o mesmo: este ambiente bloqueia a saída de rede para o Google, para o `facebook.com` e para todos os sites de concorrente. A única porta aberta é a API da Biblioteca de Anúncios do Meta — que é, por sorte, a etapa mais densa do método.

| # | Item do checklist | Status | Por quê |
|---|---|---|---|
| 1 | Pesquisar no Google e ver quem ganha o leilão pago | ❌ | Busca aqui devolve só orgânico; não vejo patrocinado |
| 2 | Visitar as LPs e identificar o funil de cada um | ⚠️ parcial | Por busca pública, não por leitura do site |
| 3 | Central de Transparência: formatos, títulos, palavras-chave | ❌ | Bloqueado. Tentei 3 caminhos, todos falharam |
| 4 | Inserir concorrentes na Biblioteca do Meta | ✅ | Feito por `page_id` via API |
| 5 | Identificar criativos repetidos em várias campanhas | ✅ | Feito — análise abaixo |
| 6 | Observar o destino de cada anúncio | ❌ | Exige abrir a página do snapshot; `facebook.com` bloqueado |
| 7 | Lead test em pelo menos um concorrente | ❌ | Sites bloqueados — e é decisão sua, não minha |
| 8 | Anotar tempo de resposta e canal do 1º contato | ❌ | Depende do item 7 |

**Tradução:** a etapa 3 do método (Meta) está feita com profundidade. As etapas 1, 2 e 4 estão em aberto e valem mais do que tudo que já entreguei.

---

## Etapa 3 relida pelas lentes do método

O método dá três critérios de leitura que eu ainda não tinha aplicado. Aplicando-os aos dados que já tenho, muda a interpretação.

### Lente 1 — volume como maturidade

O método fixa a régua: **15 a 20 anúncios simultâneos = operação madura, com budget consistente.**

| Anunciante | Ativos | Leitura pelo método |
|---|---:|---|
| Mais Controle | 69 | Muito acima da régua. Operação madura e cara |
| Brickup | 17 | Exatamente na faixa. Operação madura |
| RD O Pro | ~6 | Abaixo. Ainda escalando ou deliberadamente estreito |
| Em Obras App | 3 | Não é operação, é presença |
| Vobi / SIGO ERP | 1 cada | Teste isolado |

**A categoria inteira tem dois operadores maduros.** Esse é o conjunto competitivo real da etapa 3 — não os doze nomes que levantei.

### Lente 2 — repetição de criativo aponta o vencedor

O método: quando o mesmo criativo aparece em três ou mais campanhas, o algoritmo o escolheu; é o que mais performa.

**Brickup é o caso mais limpo do mercado.** Os 17 anúncios ativos carregam **o mesmo headline**: *"Experimente o RDO grátis da Brickup"*. Não é variação, é repetição total, sustentada em três ondas (22–24/06, 18–24/08, 15/09). Pelo critério do método, esta é **a mensagem mais validada da categoria**. Quem quiser copiar uma estrutura que comprovadamente roda, copia essa: oferta gratuita nomeada + verbo de experimentação + marca.

**Mais Controle** repete *"Mais Controle para sua Obra!"* em dezenas de peças. Mesma leitura de validação — mas a mensagem é genérica. É cavalo de batalha de volume, não gancho.

**RD O Pro está em fase de teste, não de escala.** Roda dois ângulos concorrentes em paralelo — desconto/urgência e autoridade de fundador — e renovou criativo em 10–11/09. Pelo método, criativo que muda com frequência é sinal de quem ainda está ajustando.

### Lente 3 — longevidade indica resultado (e a correção que ela me impõe)

O método: anunciante que mantém o mesmo anúncio por meses está obtendo resultado; troca frequente indica teste.

Isso me obriga a **corrigir uma coisa que eu te falei com entusiasmo demais**. Eu disse que *"O orçamento dizia uma coisa. A obra gasta outra."* (Obra Nova) era "a melhor copy do mercado, parada e livre para pegar".

Pela lente do método, a leitura é outra e menos animadora: foram **3 anúncios, todos criados em 29/07, e nada depois**. Campanha que sobe num dia e morre não é tesouro esquecido — é, com mais probabilidade, mensagem que não converteu, ou anunciante que ficou sem budget. Não dá para distinguir os dois casos de fora.

A copy continua bem escrita e o diagnóstico da dor continua certo. Mas **não há evidência nenhuma de que ela funcionou**, e o método trataria "subiu e parou em um dia" como sinal negativo. Se for usar, use como ponto de partida para teste próprio — não como fórmula validada. O mesmo padrão vale para o Obra no Bolso IA: 5 anúncios em 10/07, nada desde então.

O contraste ensina mais que qualquer um dos dois isolados: **Brickup manteve a mesma mensagem por quase três meses; Obra Nova largou a dela em um dia.** É essa diferença que separa mensagem que funciona de mensagem que soa bem.

---

## O que fazer agora, na ordem do método

### Etapa 1 — Google (você, ~10 min)

Pesquise no Google, em aba anônima, e anote **quem aparece como patrocinado**:

- `sistema de gestão de obras`
- `controle de gastos de obra`
- `app para gestão de obra`
- `planilha controle de obra` (alta intenção de quem está no status quo)
- `diário de obra digital`

Anote quem se repete em mais de um termo — esses são os que investem com regularidade. Já sabemos que o **RD O Pro** compra "sistema de gestão de obras" (campanha `24035246590`).

### Etapa 2 — Central de Transparência (você, ~10 min)

`https://adstransparency.google.com/?region=BR`, por domínio, nesta ordem:

1. `maiscontroleerp.com.br` — dono do leilão no Meta; se dominar o Google também, sobra pouco espaço
2. `brickup.app` — a oferta grátis costuma vir acompanhada de busca
3. `zeobra.com.br` — seu concorrente direto não compra Meta; pode estar todo no Google
4. `rdopro.com.br` — confirmar formatos além do Search
5. `sigoerp.com.br`, `vobi.com.br`, `meuconstrutor.ia.br`

Por domínio, anote: **formato predominante** (Search puro = captura de demanda existente; PMAX = distribuição ampla), **títulos dos anúncios de pesquisa** (revelam as palavras que o ICP digita) e **há quanto tempo o mesmo anúncio roda** (longevidade = está funcionando).

### Etapa 3 — completar o Meta (você, ~8 min)

Falta só o item 6: o **destino** de cada anúncio. Está tudo pronto em `captura-copy-anuncios.md` — sete links, com página, data e headline já preenchidos. Por anúncio, anote para onde o clique vai: LP dedicada, site, WhatsApp ou formulário nativo. É isso que confirma o modelo de funil de cada um.

### Etapa 4 — lead test (a que mais vale)

O método é explícito: é a etapa mais profunda, e nenhuma ferramenta substitui. Dois alvos, nesta ordem:

**1. A Imersão do Mais Controle (22 e 23 de setembro).** É a melhor oportunidade do trimestre e tem prazo. Evento gratuito, fricção baixa, e expõe a máquina comercial inteira: o que o formulário pergunta (CNPJ? cargo? nº de obras? isso entrega o ICP real deles), como é a régua de e-mail até o evento, como vendem software dentro de um evento gratuito, e o follow-up depois. Inscreva-se esta semana — depois do dia 23 a janela fecha.

**2. O RDO grátis do Brickup.** Revela o outro modelo: onde exatamente fica o paywall entre o grátis permanente e o pago, e como é a régua de upsell. Isso responde direto a pergunta de qual fatia do ZapObra daria para abrir de graça.

Anote nos dois: **tempo até o primeiro contato**, canal (ligação, WhatsApp, e-mail), se é humano ou automação, quais perguntas de qualificação fazem, e quantos follow-ups mandam antes de desistir.

Eu não faço essa etapa por você — são os sites estão bloqueados aqui, e cadastrar-se em funil de terceiro com dados de contato é decisão sua. Mas quando tiver os retornos, me traga: com tempo de resposta e perguntas de qualificação na mão eu monto a comparação contra a sua régua atual.

---

## Onde isso deixa o benchmark

O que está sólido: o mapa do leilão no Meta, a identificação dos dois únicos operadores maduros, a mensagem mais validada da categoria (Brickup) e a separação em camadas de concorrência.

O que continua em aberto: **metade da inteligência de canal** (todo o Google) e **toda a inteligência comercial** (lead test). O método é claro em dizer que a segunda é a mais valiosa das quatro etapas — e é justamente a que nenhuma automação entrega.

Se você fizer as etapas 1, 2 e 4 nesta semana, o benchmark fica completo pelos critérios do próprio método. Hoje ele está em 2,5 de 8.
