// app.js - Núcleo de Navegação e Roteamento da Central bringIT

let abaAtual = 'time';

document.addEventListener("DOMContentLoaded", () => {
  // Inicializa na aba padrão ao carregar a página
  navegarAba('time');
});

// Função principal de navegação por abas
function navegarAba(aba) {
  abaAtual = aba;

  // 1. Atualizar visual dos botões do menu lateral
  const botoes = document.querySelectorAll('.menu-link');
  botoes.forEach(btn => {
    btn.classList.remove('bg-[#00A3FF]', 'text-white', 'shadow-md');
    btn.classList.add('text-gray-700', 'hover:bg-sky-50');
  });

  const btnAtivo = document.getElementById(`btn-${aba}`);
  if (btnAtivo) {
    btnAtivo.classList.remove('text-gray-700', 'hover:bg-sky-50');
    btnAtivo.classList.add('bg-[#00A3FF]', 'text-white', 'shadow-md');
  }

  // 2. Atualizar Título do Cabeçalho Principal
  const tituloAba = document.getElementById('tituloAba');
  if (tituloAba) {
    if (aba === 'time') tituloAba.textContent = 'Rotinas do Time';
    else if (aba === 'marketplace') tituloAba.textContent = 'Rotinas de Marketplace';
    else if (aba === 'site') tituloAba.textContent = 'Rotinas do Site';
  }

  // 3. Limpar painel de conteúdo anterior
  const container = document.getElementById('conteudoAba');
  if (container) {
    container.innerHTML = '';
  }

  // 4. Executar renderização com tratamento defensivo contra erros
  try {
    if (aba === 'time') {
      if (typeof renderizarAbaTime === 'function') renderizarAbaTime();
      else if (typeof renderizarTime === 'function') renderizarTime();
    } else if (aba === 'marketplace') {
      if (typeof renderizarAbaMarketplace === 'function') renderizarAbaMarketplace();
      else if (typeof renderizarMarketplace === 'function') renderizarMarketplace();
    } else if (aba === 'site') {
      if (typeof renderizarAbaSite === 'function') renderizarAbaSite();
      else if (typeof renderizarSite === 'function') renderizarSite();
    }
  } catch (erro) {
    console.error("Erro ao renderizar aba:", aba, erro);
  }

  // 5. Renderizar filtros de topo específicos
  if (typeof renderizarFiltrosDaAba === 'function') {
    renderizarFiltrosDaAba(aba);
  }
}

// Atualizador seguro do contador do Header
function atualizarContadorHeader(total) {
  const badge = document.getElementById('contadorResultados');
  if (badge) {
    if (total !== undefined && total !== null && !isNaN(total)) {
      badge.textContent = `${total} registros encontrados`;
      badge.classList.remove('hidden');
    } else {
      badge.textContent = `0 registros encontrados`;
    }
  }
}

// Toggle recolher/expandir sidebar lateral
function toggleSidebar() {
  const sidebar = document.getElementById('sidebarMenu');
  const icon = document.getElementById('iconSidebarToggle');
  if (sidebar) {
    sidebar.classList.toggle('w-64');
    sidebar.classList.toggle('w-20');
  }
  if (icon) {
    icon.classList.toggle('rotate-180');
  }
}