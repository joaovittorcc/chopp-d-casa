// Chopp D'Casa — vitrine digital (sem carrinho, sem sacola).
// Cada card tem um botão "Peça pelo WhatsApp" que abre uma conversa
// já preenchida com o nome do item. Nada é acumulado, não existe checkout.

// (62) 3292-6928 — telefone informado na pesquisa em formato de linha fixa
// (padrão "3XXX-XXXX", não celular). O link wa.me/556232926928 redireciona
// normalmente pra tela de chat do WhatsApp Web, sem erro de "número
// inválido/não está no WhatsApp" — isso é indício de WhatsApp Business
// ativado sobre linha fixa (comum em comércio no Brasil), mas NÃO houve
// troca de mensagem real confirmando 100%. É PROVÁVEL WhatsApp, não
// confirmado — validar com uma mensagem de teste antes de publicar de
// verdade ou prometer o canal ao cliente.
const WHATSAPP_NUMBER = '556232926928';

const WHATSAPP_ICON_SVG = '<svg aria-hidden="true" class="w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"></path></svg>';

function pedirPeloWhatsapp(produtoId) {
    const produto = window.PRODUTOS.find(p => p.id === produtoId);
    if (!produto) return;
    const texto = encodeURIComponent(`Olá! Vim pelo site do Chopp D'Casa e gostaria de pedir: ${produto.nome}`);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${texto}`, '_blank');
}

function abrirWhatsappGenerico(mensagem) {
    const texto = encodeURIComponent(mensagem || "Olá! Vim pelo site do Chopp D'Casa e gostaria de saber mais sobre o cardápio.");
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${texto}`, '_blank');
}

function irParaContato() {
    const footer = document.getElementById('footer-contato');
    if (footer) footer.scrollIntoView({ behavior: 'smooth' });
}

function irParaMenu() {
    const menu = document.getElementById('menu-container');
    if (menu) menu.scrollIntoView({ behavior: 'smooth' });
}

document.addEventListener('DOMContentLoaded', () => {
    renderMenu();

    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => renderMenu(e.target.value));
    }
});

function formatPreco(preco) {
    return `R$ ${preco.toFixed(2).replace('.', ',')}`;
}

function renderMenu(termoBusca) {
    if (!window.PRODUTOS || !window.CATEGORIAS) {
        console.error('Dados do cardápio não carregados (produtos-data.js)');
        return;
    }
    const menuContainer = document.getElementById('menu-container');
    if (!menuContainer) return;
    menuContainer.innerHTML = '';
    const termo = (termoBusca || '').trim().toLowerCase();

    Object.keys(window.CATEGORIAS).forEach((catKey) => {
        const cat = window.CATEGORIAS[catKey];
        let produtos = window.PRODUTOS.filter((p) => p.categoria === catKey);
        if (termo) {
            produtos = produtos.filter((p) =>
                (p.nome || '').toLowerCase().includes(termo) ||
                (p.descricao || '').toLowerCase().includes(termo)
            );
        }
        if (produtos.length === 0) return;

        const section = document.createElement('section');
        section.id = catKey;
        section.className = 'scroll-mt-40';
        section.innerHTML = `
            <div class="flex items-center gap-4 mb-md">
                <h2 class="font-headline-md text-headline-md text-tertiary uppercase tracking-wide flex items-center gap-2">
                    <span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">${cat.icone}</span>
                    ${cat.titulo}
                </h2>
                <div class="h-[1px] flex-grow bg-surface-variant"></div>
            </div>
            <p class="font-body-md text-body-md text-on-surface-variant mb-md -mt-2">${cat.descricao}</p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-md" id="${catKey}-grid"></div>
        `;
        menuContainer.appendChild(section);
        const grid = document.getElementById(`${catKey}-grid`);
        produtos.forEach((produto) => grid.appendChild(produto.imagem ? createCardComFoto(produto) : createCardSemFoto(produto)));
    });

    if (menuContainer.children.length === 0) {
        menuContainer.innerHTML = `
            <div class="flex flex-col items-center justify-center text-center py-16 opacity-70">
                <span class="material-symbols-outlined text-5xl mb-3 text-outline">search_off</span>
                <p class="text-on-surface-variant mb-4">Nenhum item encontrado. Tente outra busca.</p>
                <button onclick="document.getElementById('search-input').value=''; renderMenu();" class="text-tertiary underline font-bold">Limpar busca</button>
            </div>
        `;
    }
}

function createCardComFoto(produto) {
    const card = document.createElement('div');
    card.className = 'chopp-card rounded-lg overflow-hidden flex flex-col sm:flex-row';
    card.innerHTML = `
        <div class="sm:w-2/5 aspect-square sm:aspect-auto relative bg-surface-container-highest">
            <img class="w-full h-full object-cover" src="${produto.imagem}" alt="${produto.nome}">
            <div class="absolute top-2 right-2 bg-surface-container/90 backdrop-blur px-2 py-1 rounded text-tertiary font-headline-md text-[16px] border border-tertiary/30">${formatPreco(produto.preco)}</div>
            ${produto.destaque ? '<div class="absolute top-2 left-2 bg-primary-container/90 text-on-primary-container font-label-lg text-label-md px-2 py-1 rounded uppercase tracking-wider backdrop-blur-sm">Destaque</div>' : ''}
        </div>
        <div class="p-sm flex flex-col justify-between flex-1 gap-4">
            <div>
                <h3 class="font-headline-md text-[18px] font-bold text-on-surface mb-1">${produto.nome}</h3>
                <p class="font-body-md text-sm text-on-surface-variant">${produto.descricao}</p>
            </div>
            <button onclick="pedirPeloWhatsapp('${produto.id}')" class="chopp-button w-full flex items-center justify-center gap-2 font-label-lg text-label-lg uppercase tracking-wider py-3 rounded">
                ${WHATSAPP_ICON_SVG}
                Peça pelo WhatsApp
            </button>
        </div>
    `;
    return card;
}

function createCardSemFoto(produto) {
    const card = document.createElement('div');
    card.className = 'chopp-card rounded-lg p-sm flex flex-col gap-4';
    card.innerHTML = `
        <div class="flex justify-between items-start gap-3">
            <h3 class="font-headline-md text-[18px] font-bold text-on-surface">${produto.nome}</h3>
            <span class="shrink-0 bg-surface-container/90 text-tertiary font-headline-md text-[16px] px-2 py-1 rounded border border-tertiary/30 whitespace-nowrap">${formatPreco(produto.preco)}</span>
        </div>
        ${produto.destaque ? '<span class="inline-block w-max bg-primary-container/90 text-on-primary-container font-label-lg text-label-md px-2 py-1 rounded uppercase tracking-wider -mt-2">Destaque</span>' : ''}
        <p class="font-body-md text-sm text-on-surface-variant">${produto.descricao}</p>
        <button onclick="pedirPeloWhatsapp('${produto.id}')" class="chopp-button w-full flex items-center justify-center gap-2 font-label-lg text-label-lg uppercase tracking-wider py-3 rounded">
            ${WHATSAPP_ICON_SVG}
            Peça pelo WhatsApp
        </button>
    `;
    return card;
}
