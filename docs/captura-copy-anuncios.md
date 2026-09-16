# Folha de captura — copy completa dos 7 anúncios

*16/09/2026. Metadados já preenchidos pela API da Biblioteca de Anúncios. Falta só colar o corpo do texto.*

## Por que isso é manual

Duas barreiras, e nenhuma delas eu contorno daqui:

1. **A ferramenta de Biblioteca de Anúncios que eu uso não devolve o corpo do criativo.** Ela retorna id, página, data de criação, data de veiculação, moeda, URL do snapshot e `ad_creative_link_title` — que é o **título/headline**, não o texto principal. A API pública do Meta tem um campo `ad_creative_bodies`, mas ele não está exposto na ferramenta desta sessão.
2. **`facebook.com` está bloqueado pela política de rede do meu ambiente.** Testei por dois caminhos; ambos retornam bloqueio. Então não consigo abrir as páginas de snapshot para ler o texto.

O que eu já tenho de copy real são os **headlines** — estão na coluna abaixo e não precisam ser recapturados. O que falta é corpo, CTA, formato e link de destino.

---

## Como capturar (≈8 min no total)

Abra cada link, e de cada anúncio copie quatro coisas:

- **Corpo** — o texto acima da imagem/vídeo, na íntegra, com emojis e quebras
- **CTA** — o texto exato do botão (Saiba mais / Cadastre-se / Enviar mensagem…)
- **Formato** — imagem estática, vídeo, carrossel
- **Destino** — o domínio e caminho para onde o clique vai (revela se é LP dedicada, site, WhatsApp ou formulário)

Um atalho: na página do snapshot, o botão **"Ver detalhes do anúncio"** mostra quantas variações de criativo aquele anúncio tem. Se houver mais de uma, copie as duas primeiras — a variação revela o que eles estão testando.

---

## 1. Mais Controle — criativo mais recente

- **Link:** https://www.facebook.com/ads/library/?id=3385750981812787
- **Página:** Mais Controle · **Criado:** 13/09/2026
- **Headline (já capturado):** *(sem título de link — criativo sem headline)*
- **Por que importa:** é o anúncio mais novo de quem tem 69 criativos ativos. O que eles colocaram no ar por último é o que está funcionando.

Corpo:
CTA:
Formato:
Destino:

---

## 2. Mais Controle — a Imersão

- **Link:** https://www.facebook.com/ads/library/?id=1597718795174174
- **Página:** Mais Controle · **Criado:** 02/09/2026
- **Headline:** "Imersão Online Mais Controle - 2ª Edição - 22 e 23 de Setembro"
- **Por que importa:** este é o funil de evento inteiro. O corpo vai mostrar como eles vendem um evento gratuito para depois vender software — e se pedem CNPJ, cargo ou tamanho de operação no cadastro (isso entrega o ICP real deles).

Corpo:
CTA:
Formato:
Destino:

---

## 3. Brickup — RDO grátis

- **Link:** https://www.facebook.com/ads/library/?id=957091823385746
- **Página:** Brickup · **Criado:** 15/09/2026
- **Headline:** "Experimente o RDO grátis da Brickup"
- **Por que importa:** é o wedge freemium que eu recomendei estudar. O corpo vai dizer se o "grátis" é para sempre ou trial, e o que eles seguram atrás do paywall.

Corpo:
CTA:
Formato:
Destino:

---

## 4. SIGO ERP — lucro em tempo real

- **Link:** https://www.facebook.com/ads/library/?id=2262030691312215
- **Página:** SIGO ERP · **Criado:** 15/09/2026
- **Headline:** "O lucro de cada obra em tempo real"
- **Por que importa:** é o headline mais próximo da promessa do ZapObra em todo o levantamento. Vale ver como desenvolvem no corpo — e se prometem em quanto tempo.

Corpo:
CTA:
Formato:
Destino:

---

## 5. Em Obras App — obra atrasada

- **Link:** https://www.facebook.com/ads/library/?id=1410495464582052
- **Página:** Em Obras App · **Criado:** 08/09/2026
- **Headline:** "Sua obra está atrasada? Assuma o controle agora!"
- **Por que importa:** único do grupo atacando prazo em vez de custo. Serve para confirmar que o ângulo de atraso está ocupado e o de custo não.

Corpo:
CTA:
Formato:
Destino:

---

## 6. Obra Nova — a copy parada ⭐

- **Link:** https://www.facebook.com/ads/library/?id=1785484749135256
- **Página:** Obra Nova Gestão de Obras · **Criado:** 29/07/2026 · **parado desde então**
- **Headline:** "O orçamento dizia uma coisa. A obra gasta outra."
- **Por que importa:** é o mais valioso dos sete. A formulação mais precisa da dor que o ZapObra resolve, de um concorrente que desistiu de anunciar. Capture o corpo inteiro — é matéria-prima direta para o seu criativo.

Corpo:
CTA:
Formato:
Destino:

---

## 7. RD O Pro — desconto + RDO manual

- **Link:** https://www.facebook.com/ads/library/?id=1747605096518273
- **Página:** RDOpro · **Criado:** 11/09/2026
- **Headline:** "Aproveite 50% de desconto na primeira compra por tempo limitado. Chega de perder tempo com RDO manual"
- **Por que importa:** o único concorrente que abre preço. Veja se o corpo cita o valor em R$ ou só o percentual — isso diz se o preço aberto é âncora ou isca.

Corpo:
CTA:
Formato:
Destino:

---

## O que fazer com isso depois

Quando preencher, me mande de volta (colar aqui no chat serve). Com os sete corpos em mãos eu consigo:

- Mapear a estrutura de copy que se repete entre eles (abertura, dor, prova, CTA) e dizer qual padrão o ZapObra não está usando
- Listar as palavras que todos usam — e as que ninguém usa, que é onde está o espaço de diferenciação
- Escrever 3 variações de criativo para o ZapObra ancoradas no que o mercado de fato veicula, não no que eu suponho

Se preferir não fazer manualmente: numa máquina sem bloqueio de rede os sete links abrem direto, ou dá para puxar o campo `ad_creative_bodies` pela API oficial da Ad Library com um token do Meta.
