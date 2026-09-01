/**
 * CARDÁPIO - Chopp D'Casa
 *
 * FORMATO DE CADA PRODUTO:
 * {
 *   id, categoria (artesanal|vinho|drinks|petiscos), nome, descricao, preco,
 *   imagem: "https://..." ou null,
 *   destaque: false,
 *   exemplo: true          // true = item de demonstração
 * }
 *
 * IMPORTANTE: Todos os itens abaixo são EXEMPLOS (exemplo: true). Não existe
 * cardápio real publicado pelo Chopp D'Casa em lugar nenhum (sem site, sem
 * Instagram acessível, Facebook só com posts soltos) — a ficha de pesquisa
 * (prompt_design_stitch.md) confirma apenas as 4 SEÇÕES do cardápio (Chopp
 * Artesanal, Chopp de Vinho, Drinks/Caipirinha, Petiscos de Bar), nunca
 * pratos/preços específicos. Itens e preços aqui são placeholders plausíveis
 * pra preencher o layout, sem nenhuma correspondência com o cardápio real.
 *
 * IMAGENS: o export do Stitch gerou fotos de IA pra Chopp Artesanal (3),
 * Chopp de Vinho (1) e Petiscos (2). Ao inspecionar cada uma visualmente:
 * - 2 delas traziam vazamento de UI de app/screenshot (barra de título de
 *   visualizador de imagem, painel lateral "Cardápio Digital > Cardápio")
 *   coladas na própria foto — descartadas, imagem: null.
 * - 2 delas traziam a marca "CHOPP D'CASA" gravada/estampada em copo de
 *   chopp gerada pela IA, como se fosse copo de vidro real da casa — isso
 *   fabricaria uma prova visual de identidade que não existe de verdade,
 *   então também foram descartadas, imagem: null.
 * - Só 2 imagens vieram limpas (sem vazamento de UI, sem marca fabricada):
 *   a foto de Chopp de Vinho 300ml e a foto de Porção de Fritas — essas
 *   foram mantidas via hotlink lh3.googleusercontent.com, como vieram do
 *   Stitch.
 * As categorias Drinks/Caipirinha não tiveram nenhum card desenhado pelo
 * Stitch (só existiam como aba/âncora vazia) — itens adicionados aqui no
 * mesmo padrão visual, sem foto e sem produto real por trás, só pra cobrir
 * a seção que a ficha confirma que existe (mencionada em post do Facebook
 * sobre caipirinha).
 */

window.CATEGORIAS = {
    'artesanal': { titulo: 'Chopp Artesanal', icone: 'sports_bar', descricao: 'Chopp gelado tirado na hora, direto do posto pra sua mesa.' },
    'vinho': { titulo: 'Chopp de Vinho', icone: 'wine_bar', descricao: 'A doçura do vinho com a refrescância do chopp.' },
    'drinks': { titulo: 'Drinks & Caipirinha', icone: 'local_bar', descricao: 'Caipirinha caprichada e drinks da casa pra fechar a noite.' },
    'petiscos': { titulo: 'Petiscos de Bar', icone: 'kebab_dining', descricao: 'Porções clássicas de boteco pra acompanhar o chopp.' }
};

window.PRODUTOS = [
    {
        id: 'chopp-pilsen-300',
        categoria: 'artesanal',
        nome: 'Chopp Pilsen 300ml',
        descricao: 'Clássico, leve e refrescante. O verdadeiro sabor do happy hour.',
        preco: 9.90,
        imagem: null,
        destaque: true,
        exemplo: true
    },
    {
        id: 'chopp-escuro-300',
        categoria: 'artesanal',
        nome: 'Chopp Escuro 300ml',
        descricao: 'Encorpado, com notas de malte torrado e leve dulçor.',
        preco: 11.90,
        imagem: null,
        destaque: false,
        exemplo: true
    },
    {
        id: 'chopp-de-vinho-300',
        categoria: 'vinho',
        nome: 'Chopp de Vinho 300ml',
        descricao: 'A doçura do vinho combinada com a espuma gelada do chopp — pedida certa da casa.',
        preco: 12.90,
        imagem: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDXw2Kjm1qf4Wo0YmvrHW0YF4fQjK9pr-OkXIPeKpQ2D5mDrumpJ0NSnfyT7mUNh7X16C-Cxo1q6df2bGncKiPEM9V4me6ZXDQjo03J2GNf-nUYb1ICiHtuS_4MPjVP342AJg2Lu_sWSEcN_p55SsL40ljJRWI7cTLUmkUtR33pRT_gYgHQWpo19WpawP6DAeAHRMPfZd2hKJ0KdpfC0d4ZbIoPXVXL7JBQ5Iz8f5x77p-4qmsTW1CW',
        destaque: true,
        exemplo: true
    },
    {
        id: 'chopp-de-vinho-500',
        categoria: 'vinho',
        nome: 'Chopp de Vinho 500ml',
        descricao: 'A mesma pedida em tamanho maior, pra compartilhar ou não.',
        preco: 18.90,
        imagem: null,
        destaque: false,
        exemplo: true
    },
    {
        id: 'caipirinha-da-casa',
        categoria: 'drinks',
        nome: 'Caipirinha da Casa',
        descricao: 'Cachaça, limão fresco e açúcar na medida certa — "aqui a caipirinha é caprichada e trincando de gelada".',
        preco: 16.90,
        imagem: null,
        destaque: true,
        exemplo: true
    },
    {
        id: 'drink-autoral-bartender',
        categoria: 'drinks',
        nome: 'Drink Autoral do Bartender',
        descricao: 'Criação da casa pra fechar a noite, muda conforme a disponibilidade do bar.',
        preco: 22.90,
        imagem: null,
        destaque: false,
        exemplo: true
    },
    {
        id: 'porcao-de-fritas',
        categoria: 'petiscos',
        nome: 'Porção de Fritas',
        descricao: 'Batatas fritas crocantes por fora e macias por dentro, servidas com molho da casa.',
        preco: 25.90,
        imagem: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAC0Ub-iAy8jJVnZh0Hxo_Q0twYs7qEE7knBFb5tfhh0gLifwEfgWSkRzBEevMSEBVGpKOS373DsMni8ryHP_zzSBnOL3f2XEvnc7mSO49ZI-7VGxuvXJUet4vBgQmWqncCWjMxugdSZsCcXlNZPw-dy7zIfJRVfkgYwaXAce_sU3Sfmc-FvSlHeWxMs42W_aRFggwxAslam1R09ousvXjeLi8kB6GhSUZ9MNmjTHAUsB15_QdxQfTa',
        destaque: true,
        exemplo: true
    },
    {
        id: 'porcao-de-calabresa-acebolada',
        categoria: 'petiscos',
        nome: 'Porção de Calabresa Acebolada',
        descricao: 'Calabresa fatiada na chapa com cebola, petisco clássico de boteco pra acompanhar o chopp.',
        preco: 32.90,
        imagem: null,
        destaque: false,
        exemplo: true
    }
];
