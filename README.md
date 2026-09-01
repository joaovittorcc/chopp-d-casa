# Chopp D'Casa — Cardápio Digital (Vitrine)

Site demo de vitrine digital para pitch. Construído a partir de export do Google Stitch, com dados reais confirmados via pesquisa (`prompt_design_stitch.md`). Não é um site de delivery: não existe carrinho, sacola, cupom ou cálculo de frete — cada card tem um botão **"Peça pelo WhatsApp"** que abre uma conversa já com o nome do item preenchido.

## Cardápio Demonstrativo

Todos os itens e preços estão marcados com `exemplo: true` em `js/produtos-data.js`, e o site mostra um aviso fixo no topo: "CARDÁPIO DEMONSTRATIVO". **Não existe cardápio real publicado pelo Chopp D'Casa em lugar nenhum** — a ficha de pesquisa confirma apenas as **4 seções** do cardápio (não pratos/preços específicos), então todos os 8 itens do site (2 por seção) foram criados aqui como placeholders plausíveis, no mesmo padrão visual do export do Stitch.

## Dados reais confirmados

- Endereço: Av. Mal. Rondon, 1486, Setor Centro Oeste, Goiânia-GO, 74563-355 — **dentro do Posto Tassara Fama** (posto de gasolina).
- Categoria: Google Maps lista como "Restaurante", mas Facebook oficial ("Bar de cerveja") e Instagram ("Bar") indicam **bar/choperia**, não restaurante completo — divergência a sinalizar pro cliente no pitch.
- Nota Google Maps: **4,7 (470 avaliações)**.
- Telefone: (62) 3292-6928 — linha fixa (padrão "3XXX-XXXX", não celular).
- E-mail (achado no Facebook "Sobre"): choperiadcasa@gmail.com.
- Seções confirmadas do cardápio: Chopp Artesanal, Chopp de Vinho, Drinks/Caipirinha (citada em post do Facebook — "a caipirinha é caprichada e trincando de gelada"), Petiscos de Bar (inferida pelo segmento, não confirmada por fonte direta).
- Solução digital hoje: nenhuma — sem site próprio, sem cardápio digital genérico, só rede social solta.

**⚠️ Atenção — WhatsApp PROVÁVEL, não confirmado 100%:** o telefone (62) 3292-6928 está em formato de linha fixa. O link `wa.me/556232926928` redireciona normalmente pra tela de chat do WhatsApp Web ("Chat on WhatsApp with +55 62 3292-6928"), sem erro de número inválido — isso costuma indicar WhatsApp Business ativado sobre linha fixa (comum no comércio brasileiro), mas **não houve troca de mensagem real confirmando**. Tratar como "provável WhatsApp" e **validar com o cliente antes de qualquer uso real** — se o bar usa outro número, o `WHATSAPP_NUMBER` em `js/main.js` precisa ser atualizado.

**⚠️ Atenção — Instagram NÃO confirmado ao vivo:** o Facebook oficial lista `instagram.com/choppdcasa` no campo "Apresentação", mas o perfil retorna "Perfil não está disponível" ao tentar abrir (renomeado, desativado, ou bloqueio anti-scraping — não dá pra saber de fora). Também apareceu um perfil `@dcasaemporiosorveteria` indexado como "CHOPP D' CASA", sugerindo possível rebrand/expansão — também não carregou ao vivo. **Não afirmamos seguidores nem link definitivo** e, por isso, o site não exibe nenhum link de Instagram. Perguntar ao dono/atendente qual é o Instagram atual na hora do contato real.

## O que o export do Stitch precisou de ajuste

- **Sem carrinho/sacola**: o export não trazia carrinho (correto para o briefing).
- **Badge "Aberto agora" fabricado**: as duas telas do Stitch (desktop e mobile) mostravam um indicador pulsante "Aberto agora" sem nenhum horário real por trás — **removido**, porque a ficha de pesquisa não confirma horário de funcionamento nenhum. Diferente do lote anterior (Boteco Posto 15), aqui não havia dado de horário pra substituir o badge, então a informação simplesmente não aparece no site.
- **Preços fabricados**: a tela desktop trazia preços específicos (R$ 8,00, R$ 9,00, R$ 13,00, R$ 10,00, R$ 25,00, R$ 45,00) e a tela mobile usava "R$ --,--" como placeholder. Nenhum é preço real do Chopp D'Casa — aqui foram substituídos por valores redondos plausíveis, deixados claramente como exemplo via `exemplo: true`, aviso no topo do site e neste README.
- **Imagens de produto com vazamento de UI ou marca fabricada**: das 6 fotos de produto geradas pelo Stitch (3 em Chopp Artesanal, 1 em Chopp de Vinho, 2 em Petiscos), cada uma foi baixada e inspecionada visualmente antes de decidir usar:
  - **Chopp Escuro 300ml** (tela desktop) e **Chopp Pilsen 500ml** (tela mobile-desktop): a própria foto trazia **vazamento de UI/screenshot** colado na imagem — barra de título de visualizador de foto com metadados de câmera num caso, painel lateral "Cardápio Digital > Cardápio" do próprio Stitch no outro. **Descartadas, `imagem: null`.**
  - **Chopp Pilsen 300ml** e **Fritas com Calabresa**: a IA gerou um copo de chopp com a marca **"CHOPP D'CASA" gravada/estampada no vidro**, como se fosse copo real da casa — isso fabricaria uma "prova visual" de identidade que não existe de verdade. **Descartadas por precaução, `imagem: null`.**
  - **Chopp de Vinho 300ml** e **Porção de Fritas**: únicas duas imagens limpas (sem vazamento de UI, sem marca fabricada) — mantidas via hotlink `lh3.googleusercontent.com`, como vieram do Stitch.
  - Nenhuma imagem foi gerada pro Stitch para **Drinks/Caipirinha** — a seção existia só como âncora vazia; os 2 itens dessa seção foram adicionados aqui sem foto (`imagem: null`), seguindo o mesmo padrão do lote anterior para seções sem card desenhado.
- **Logo/emblema é ilustração de IA, não o logo real**: o "selo" circular vermelho/preto/dourado usado no header (`img/logo-selo-ai.png`) foi gerado pelo Stitch a partir da *descrição textual* do emblema real (capa/foto de perfil do Facebook oficial) — **não é um arquivo do logo real** extraído do Facebook/Instagram, só uma aproximação visual da identidade descrita na ficha. Substituir pelo arquivo de logo real do cliente assim que disponível.
- **Instagram removido de toda a navegação**: a barra inferior mobile do export trazia "Drinks" e "Petiscos" como atalhos de navegação de app; aqui a barra ficou com Menu, Pedir (WhatsApp) e Local (rola até o rodapé com endereço), já que não existe link de Instagram confirmado pra incluir.
- **Botões "Pedir via WhatsApp" sem link**: os botões de card não tinham `href`/função real — ligados a `pedirPeloWhatsapp(produtoId)`, que abre `wa.me` com o nome do item já preenchido na mensagem.

## Rodando localmente

```bash
npm install
npm run dev
```

Sobe o Tailwind em modo watch + live-server na porta **4231**.

Para gerar o CSS de produção sem subir servidor:

```bash
npm run build:css
```
