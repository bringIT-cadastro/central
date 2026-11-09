// app.js - Roteamento Seguro do Sistema bringIT

var abaAtual = 'time';

document.addEventListener("DOMContentLoaded", function() {
  if (document.getElementById('conteudoAba')) {
    navegarAba('time');
  }
});

function navegarAba(aba) {
  abaAtual = aba;

  var botoes = document.querySelectorAll('.menu-link');
  if (botoes.length > 0) {
    botoes.forEach(function(btn) {
      btn.classList.remove('bg-[#00A3FF]', 'text-white', 'shadow-md');
      btn.classList.add('text-gray-700', 'hover:bg-sky-50');
    });

    var btnAtivo = document.getElementById('btn-' + aba);
    if (btnAtivo) {
      btnAtivo.classList.remove('text-gray-700', 'hover:bg-sky-50');
      btnAtivo.classList.add('bg-[#00A3FF]', 'text-white', 'shadow-md');
    }
  }

  var tituloAba = document.getElementById('tituloAba');
  if (tituloAba) {
    if (aba === 'time') tituloAba.textContent = 'Rotinas do Time';
    else if (aba === 'marketplace') tituloAba.textContent = 'Rotinas de Marketplace';
    else if (aba === 'site') tituloAba.textContent = 'Rotinas do Site';
  }

  var container = document.getElementById('conteudoAba');
  if (!container) return;

  container.innerHTML = '';

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
    console.error('Erro ao navegar para a aba:', aba, erro);
  }
}

function atualizarContadorHeader(total) {
  var badge = document.getElementById('contadorResultados');
  if (!badge) return;

  var valorValido = (typeof total === 'number' && !isNaN(total)) ? total : 0;
  badge.textContent = valorValido + ' registros encontrados';
  badge.classList.remove('hidden');
}

function toggleSidebar() {
  var sidebar = document.getElementById('sidebarMenu');
  var icon = document.getElementById('iconSidebarToggle');
  if (sidebar) {
    sidebar.classList.toggle('w-64');
    sidebar.classList.toggle('w-20');
  }
  if (icon) {
    icon.classList.toggle('rotate-180');
  }
}