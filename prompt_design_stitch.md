# Chopp D'Casa — Ficha + Prompt de Design (Stitch)

Segue o padrão de `PROMPT_PADRAO_VITRINE_GOIANIA_STITCH.md`. Lote novo, ainda não entra no INDICE.md principal.

## FICHA

**Negócio**
- Chopp D'Casa — Setor Centro Oeste, Goiânia. Av. Mal. Rondon, 1486, Goiânia-GO, 74563-355 — fica **dentro do Posto Tassara Fama** (posto de gasolina).
- Categoria: Google Maps lista como "Restaurante", mas tanto o Facebook oficial ("Página · Bar de cerveja") quanto a localização marcada no Instagram ("CHOPP D' CASA · Bar") categorizam como **bar/choperia**, não restaurante completo. Tratar como choperia/bar de posto — cardápio provavelmente curto, foco em bebida + petisco, não prato principal robusto. Sinalizar essa divergência de categoria pro cliente/pitch.
- Nota Google Maps: 4,7 (470 avaliações) — base de clientes fiel, apesar da localização "escondida" dentro do posto.
- Facebook oficial (@choppdcasa): 596 seguidores, "Recomendado por 100% (11 avaliações)", posts esporádicos e sem padrão visual de cardápio (ex.: post recente só divulgando trilha sonora do bar + "Aqui a caipirinha é caprichada e trincando de gelada!").
- Solução digital hoje: **nenhuma.** Sem site próprio — o "site" listado no Google Maps ("intagram.com") é typo de instagram.com, ou seja, nem isso resolve. Não usa cardápio digital genérico (vucafood/onpedido). Só rede social solta.

**Contato**
- Telefone: (62) 3292-6928 — linha fixa (padrão "3XXX-XXXX", não celular).
- WhatsApp: **indício positivo, não 100% confirmado.** Verificação via link `wa.me/556232926928` → redireciona normalmente para tela de chat do WhatsApp Web ("Chat on WhatsApp with +55 62 3292-6928"), sem erro de "número inválido/não está no WhatsApp". Isso costuma indicar WhatsApp Business ativado sobre linha fixa (comum pra comércio no Brasil), mas não houve troca de mensagem real pra confirmar 100%. Tratar como "provavelmente ativo no WhatsApp", validar com uma mensagem de teste antes de prometer ao cliente.
- E-mail (achado no Facebook "Sobre"): choperiadcasa@gmail.com.
- Instagram: o próprio Facebook oficial do negócio lista o link **instagram.com/choppdcasa** no campo "Apresentação". Porém, ao tentar abrir esse perfil diretamente (via browser e via busca), ele retorna **"Perfil não está disponível"** — ou foi renomeado/desativado, ou é bloqueio anti-scraping do Instagram (não dá pra distinguir de fora). Também apareceu nos resultados de busca um perfil **@dcasaemporiosorveteria**, indexado como "CHOPP D' CASA", com um post citado como "🌟 Tem novidade por aqui! 🌟 Agora, o Chopp D'Casa virou..." — sugerindo um possível rebrand/expansão pra um empório+sorveteria. Esse perfil também não carregou ao vivo na checagem. **Não deu pra confirmar seguidores nem feed real de nenhum dos dois handles.** Tratar como "Instagram não confirmado com acesso ao vivo" — na hora do contato real, vale perguntar direto ao dono/atendente qual é o Instagram atual.
- Estilo visual (fonte confirmada: capa e foto de perfil do Facebook oficial, que provavelmente é reaproveitada no Instagram): emblema circular estilo "selo de choperia" tradicional — vermelho, preto/grafite, dourado e branco; estrelas, ramo de cevada/trigo, faixa/fita vermelha com o texto "CHOPP D'CASA" e "BAR", caneca de chopp dourada com espuma branca ao fundo escuro. Visual robusto de boteco/choperia de bairro, não é estética de gastronomia refinada.

**Estrutura do cardápio — só as seções**
Baseado no que é conhecido publicamente (Maps + Facebook), sem cardápio publicado formalmente:
- Chopp Artesanal
- Chopp de Vinho
- Drinks/Caipirinha (mencionado em post do Facebook — "caipirinha caprichada")
- Petiscos de bar (inferido pelo segmento — típico de choperia; **não confirmado por fonte direta**, entra como seção provável a validar com o dono)

**Sinal pro pitch de vitrine digital**
- Presença digital hoje é praticamente nula: sem site, Instagram inacessível/possivelmente trocado sem aviso, Facebook com posts soltos (música tocando, foto de caipirinha) sem nenhuma organização de cardápio.
- O emblema/logo é forte e já tem identidade visual pronta (vermelho/preto/dourado, estilo choperia) — o problema não é falta de marca, é a marca não ter vitrine nenhuma pra mostrar o que vende.
- Estar "escondido" dentro de um posto de gasolina é um obstáculo físico de percepção — 4,7 com 470 avaliações mostra que quem já foi gosta, mas quem não conhece pode nem imaginar que existe uma choperia ali dentro. Gancho: "as pessoas já aprovam quando chegam, mas ninguém decide ir só de olhar pro Instagram porque não tem cardápio visível — vamos resolver isso".
- Dono mencionado em review antigo como "Fabio" — **não confirmar/reafirmar como dono atual**, tratar como não-confirmado (pode ter mudado).

---

## PROMPT DE DESIGN (pronto pra colar no Stitch)

```
Vitrine digital de cardápio para "Chopp D'Casa", choperia/bar de chopp artesanal no Setor Centro Oeste, Goiânia-GO (localizada dentro do Posto Tassara Fama).

DIREÇÃO VISUAL
Paleta baseada na identidade já existente do negócio (confirmada via Facebook oficial, não via Instagram ao vivo): vermelho, preto/grafite e dourado/âmbar, com branco de apoio — remetendo ao emblema circular estilo "selo de choperia" que a marca já usa (estrelas, ramo de cevada, fita vermelha, caneca de chopp dourada com espuma). Tom despojado, boteco/choperia de bairro — não é gastronomia refinada, é ambiente de happy hour, som ao vivo/sertanejo, chopp gelado. Visual de vitrine — o objetivo é fazer o chopp e os petiscos parecerem convidativos, não montar um funil de compra.

ESTRUTURA (padrão fixo)
1. Header: logo/nome "Chopp D'Casa", status de aberto/fechado, "Setor Centro Oeste, Goiânia (dentro do Posto Tassara Fama)", link "Mais informações" (Instagram/WhatsApp/endereço/horário).
2. Barra de categorias: dropdown + busca por prato/bebida.
3. Seções de cardápio, uma por categoria real: Chopp Artesanal, Chopp de Vinho, Drinks/Caipirinha, Petiscos de Bar — título + descrição curta + grid de cards (foto quadrada, nome, descrição, preço placeholder).
4. Cada card tem um botão "Peça pelo WhatsApp" — não é carrinho, é um link direto abrindo o WhatsApp com o nome do item já preenchido na mensagem.
5. Rodapé: WhatsApp, Instagram, endereço.

RESTRIÇÕES
Não gere prato/bebida específica com preço real — cards com placeholder, itens reais entram depois fora do Stitch.
NÃO monte sacola, carrinho, cupom de desconto ou calculadora de frete — não existe checkout aqui, é vitrine.
Não invente Instagram, WhatsApp ou avaliação que não foi confirmada na pesquisa — o handle de Instagram atual não foi confirmado ao vivo, não afirme seguidores nem link definitivo.
Layout responsivo, mobile-first. Idioma: português do Brasil.
```
