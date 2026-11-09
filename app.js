// app.js - Núcleo de Navegação e Roteamento

let abaAtual = 'marketplace';

document.addEventListener("DOMContentLoaded", () => {
  navegarAba('marketplace');
});

function navegarAba(aba) {
  abaAtual = aba;

  // Atualiza os botões do menu lateral
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

  // Atualiza título do cabeçalho
  const tituloAba = document.getElementById('tituloAba');
  if (tituloAba) {
    if (aba === 'time') tituloAba.textContent = 'Rotinas do Time';
    else if (aba === 'marketplace') tituloAba.textContent = 'Rotinas de Marketplace';
    else if (aba === 'site') tituloAba.textContent = 'Rotinas do Site';
  }

  const container = document.getElementById('conteudoAba');
  if (container) {
    container.innerHTML = '';
  }

  try {
    if (aba === 'marketplace') {
      if (typeof renderizarAbaMarketplace === 'function') renderizarAbaMarketplace();
      else if (typeof renderizarMarketplace === 'function') renderizarMarketplace();
    } else if (aba === 'time') {
      if (typeof renderizarAbaTime === 'function') renderizarAbaTime();
    } else if (aba === 'site') {
      if (typeof renderizarAbaSite === 'function') renderizarAbaSite();
    }
  } catch (err) {
    console.error("Erro na navegação da aba:", aba, err);
  }
}

function atualizarContadorHeader(total) {
  const badge = document.getElementById('contadorResultados');
  if (badge) {
    badge.textContent = `${total !== undefined ? total : 0} registros encontrados`;
  }
}

function copiarUrlFiltro(url, elementoId) {
  navigator.clipboard.writeText(url).then(() => {
    const feedback = document.getElementById(elementoId);
    if (feedback) {
      feedback.classList.remove('hidden');
      setTimeout(() => feedback.classList.add('hidden'), 2000);
    }
  }).catch(() => {
    alert("Copiado: " + url);
  });
}