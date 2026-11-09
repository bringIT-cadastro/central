// app.js - Roteador Central e Gerenciador de Navegação bringIT

let abaAtual = 'time';

document.addEventListener("DOMContentLoaded", () => {
  // Inicializa na aba padrão ao carregar
  navegarAba('time');
});

function navegarAba(aba) {
  abaAtual = aba;

  // 1. Atualizar destaque dos botões do menu lateral
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

  // 2. Atualizar título do cabeçalho
  const tituloAba = document.getElementById('tituloAba');
  if (tituloAba) {
    if (aba === 'time') tituloAba.textContent = 'Rotinas do Time';
    else if (aba === 'marketplace') tituloAba.textContent = 'Rotinas de Marketplace';
    else if (aba === 'site') tituloAba.textContent = 'Rotinas do Site';
  }

  // 3. Limpar conteúdo anterior
  const container = document.getElementById('conteudoAba');
  if (container) {
    container.innerHTML = '';
  }

  // 4. Executar renderização correspondente
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
  } catch (err) {
    console.error("Erro ao alternar para a aba:", aba, err);
  }
}

// Atualiza o contador de resultados no header
function atualizarContadorHeader(total) {
  const badge = document.getElementById('contadorResultados');
  if (badge) {
    badge.textContent = `${total !== undefined ? total : 0} registros encontrados`;
  }
}