// app.js - Roteamento Seguro e Programação Defensiva

(function (global) {
  'use strict';

  let abaAtual = 'time';

  document.addEventListener("DOMContentLoaded", () => {
    // Somente roda inicialização por aba se o contêiner existir na página (ex: index.html)
    if (document.getElementById('conteudoAba')) {
      navegarAba('time');
    }
  });

  function navegarAba(aba) {
    abaAtual = aba;

    // 1. Destaque dos botões de navegação lateral
    const botoes = document.querySelectorAll('.menu-link');
    if (botoes.length > 0) {
      botoes.forEach(btn => {
        btn.classList.remove('bg-[#00A3FF]', 'text-white', 'shadow-md');
        btn.classList.add('text-gray-700', 'hover:bg-sky-50');
      });

      const btnAtivo = document.getElementById(`btn-${aba}`);
      if (btnAtivo) {
        btnAtivo.classList.remove('text-gray-700', 'hover:bg-sky-50');
        btnAtivo.classList.add('bg-[#00A3FF]', 'text-white', 'shadow-md');
      }
    }

    // 2. Atualização de Título do Header
    const tituloAba = document.getElementById('tituloAba');
    if (tituloAba) {
      if (aba === 'time') tituloAba.textContent = 'Rotinas do Time';
      else if (aba === 'marketplace') tituloAba.textContent = 'Rotinas de Marketplace';
      else if (aba === 'site') tituloAba.textContent = 'Rotinas do Site';
    }

    // 3. Limpeza defensiva do contêiner antes de renderizar
    const container = document.getElementById('conteudoAba');
    if (!container) return; // Se a página não tiver essa div (ex: analise.html), encerra sem erro.

    container.innerHTML = '';

    // 4. Execução segura dos renderizadores por aba
    try {
      if (aba === 'time') {
        if (typeof global.renderizarAbaTime === 'function') global.renderizarAbaTime();
        else if (typeof global.renderizarTime === 'function') global.renderizarTime();
      } else if (aba === 'marketplace') {
        if (typeof global.renderizarAbaMarketplace === 'function') global.renderizarAbaMarketplace();
        else if (typeof global.renderizarMarketplace === 'function') global.renderizarMarketplace();
      } else if (aba === 'site') {
        if (typeof global.renderizarAbaSite === 'function') global.renderizarAbaSite();
        else if (typeof global.renderizarSite === 'function') global.renderizarSite();
      }
    } catch (erro) {
      console.error(`[bringIT Router] Falha ao renderizar a aba "${aba}":`, erro);
    }
  }

  // Atualizador seguro do badge de contagem de registros
  function atualizarContadorHeader(total) {
    const badge = document.getElementById('contadorResultados');
    if (!badge) return;

    const valorValido = (typeof total === 'number' && !isNaN(total)) ? total : 0;
    badge.textContent = `${valorValido} registros encontrados`;
    badge.classList.remove('hidden');
  }

  // Exportação para escopo global
  global.navegarAba = navegarAba;
  global.atualizarContadorHeader = atualizarContadorHeader;

})(typeof window !== 'undefined' ? window : this);