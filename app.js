let abaAtual = 'time';

document.addEventListener("DOMContentLoaded", () => {
  navegarAba('time');
});

function navegarAba(nomeAba) {
  abaAtual = nomeAba;
  
  document.querySelectorAll('.menu-link').forEach(btn => btn.classList.remove('active'));
  const btnAtivo = document.getElementById(`btn-${nomeAba}`);
  if (btnAtivo) btnAtivo.classList.add('active');

  const titulos = {
    time: "Membros da Equipe",
    marketplace: "Matriz & Rotinas de Marketplace",
    site: "Operações do Site",
    biblioteca: "Biblioteca de Tutoriais & Bases"
  };
  
  const elTitulo = document.getElementById('tituloAba');
  if (elTitulo) elTitulo.textContent = titulos[nomeAba] || "Central";

  const elFiltro = document.getElementById('filtroTexto');
  if (elFiltro) elFiltro.value = "";

  gerarFiltrosPorColuna();
  renderizarConteudo();
}

function obterDadosAbaAtual() {
  switch (abaAtual) {
    case 'time': return typeof DATA_TIME !== 'undefined' ? DATA_TIME : [];
    case 'marketplace': return typeof DATA_MARKETPLACE !== 'undefined' ? DATA_MARKETPLACE : [];
    case 'site': return typeof DATA_SITE !== 'undefined' ? DATA_SITE : [];
    case 'biblioteca': return typeof DATA_BIBLIOTECA !== 'undefined' ? DATA_BIBLIOTECA : [];
    default: return [];
  }
}

function renderizarConteudo(dadosFiltrados = null) {
  const container = document.getElementById('conteudoAba');
  if (!container) return;

  const dados = dadosFiltrados || obterDadosAbaAtual();

  if (abaAtual === 'time') renderizarTime(dados, container);
  else if (abaAtual === 'marketplace') renderizarMarketplace(dados, container);
  else if (abaAtual === 'site') renderizarSite(dados, container);
  else if (abaAtual === 'biblioteca') renderizarBiblioteca(dados, container);
}

// 1. Aba Time - Estilo Card e-Commerce
function renderizarTime(dados, container) {
  if (!dados || dados.length === 0) {
    container.innerHTML = `<div class="p-12 text-center text-gray-400 bg-white rounded-2xl border">Nenhum colaborador encontrado.</div>`;
    return;
  }

  let html = `<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">`;
  dados.forEach(membro => {
    html += `
      <div class="bringit-card p-6 flex flex-col justify-between">
        <div>
          <div class="flex items-center space-x-4 mb-4">
            <img src="${membro.fotoUrl || 'https://via.placeholder.com/150'}" alt="${membro.nome}" class="w-14 h-14 rounded-full object-cover border-2 border-[#00A3FF]">
            <div>
              <h3 class="font-extrabold text-[#1C275C] text-lg leading-tight">${membro.nome}</h3>
              <p class="text-xs font-semibold text-[#00A3FF] mt-0.5">${membro.cargo}</p>
              <span class="inline-block mt-2 px-2.5 py-0.5 text-[10px] font-bold rounded-full bg-sky-50 text-[#00A3FF] border border-sky-100">${membro.escopo || 'Geral'}</span>
            </div>
          </div>
          <div class="pt-3 border-t border-gray-100 text-xs text-gray-600">
            <p class="font-bold text-[#1C275C] mb-1.5 flex items-center gap-1.5">
              <i class="fa-solid fa-list-check text-[#00A3FF]"></i> Responsabilidades Principais:
            </p>
            <p class="leading-relaxed bg-gray-50 p-3 rounded-xl text-gray-700 font-normal border border-gray-100">${membro.responsabilidades}</p>
          </div>
        </div>
      </div>
    `;
  });
  html += `</div>`;
  container.innerHTML = html;
}

// 2. Aba Marketplace
function renderizarMarketplace(dados, container) {
  let html = ``;

  if (typeof DATA_MARKETPLACE_CANOES !== 'undefined' && DATA_MARKETPLACE_CANOES.length > 0) {
    html += `
      <div class="mb-8">
        <h3 class="text-base font-extrabold text-[#1C275C] mb-4 flex items-center gap-2">
          <i class="fa-solid fa-store text-[#00A3FF]"></i> Matriz de Canais & Contas por Responsável
        </h3>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
    `;
    DATA_MARKETPLACE_CANOES.forEach(item => {
      html += `
        <div class="bringit-card p-4">
          <div class="flex items-center justify-between mb-2">
            <span class="font-bold text-[#1C275C] text-sm">${item.canal}</span>
            <span class="px-2.5 py-0.5 text-[11px] font-bold bg-sky-50 text-[#00A3FF] rounded-full border border-sky-100">Conta ${item.conta}</span>
          </div>
          <div class="text-xs text-gray-600 flex items-center gap-2 pt-2 border-t border-gray-100 mt-2">
            <i class="fa-solid fa-user-gear text-gray-400"></i>
            <span class="font-medium text-gray-800">${item.responsavel}</span>
          </div>
        </div>
      `;
    });
    html += `</div></div>`;
  }

  html += `
    <div class="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
      <div class="p-5 border-b border-gray-100 bg-gray-50/50 flex items-center justify-between">
        <h3 class="font-bold text-[#1C275C] flex items-center gap-2">
          <i class="fa-solid fa-tasks text-[#00A3FF]"></i> Rotinas e Atividades de Marketplace
        </h3>
        <span class="text-xs text-gray-500 font-semibold bg-white px-3 py-1 rounded-full border">${dados.length} registradas</span>
      </div>
      <div class="overflow-x-auto">
        <table class="w-full text-left text-sm">
          <thead class="bg-gray-50 text-[#1C275C] uppercase text-[11px] font-bold border-b border-gray-100">
            <tr>
              <th class="p-4">ID</th>
              <th class="p-4">Atividade / Rotina</th>
              <th class="p-4">Tipo</th>
              <th class="p-4">Periodicidade</th>
              <th class="p-4">Prioridade</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-100 text-gray-700">
  `;

  if (!dados || dados.length === 0) {
    html += `<tr><td colspan="5" class="p-8 text-center text-gray-400">Nenhuma rotina encontrada.</td></tr>`;
  } else {
    dados.forEach(item => {
      const pColor = item.prioridade === 'Alta' ? 'bg-red-50 text-red-600 border-red-100' : (item.prioridade === 'Média' ? 'bg-amber-50 text-amber-600 border-amber-100' : 'bg-gray-50 text-gray-600 border-gray-100');
      html += `
        <tr class="hover:bg-sky-50/30 transition">
          <td class="p-4 font-bold text-gray-400">#${item.id}</td>
          <td class="p-4 font-semibold text-[#1C275C]">${item.atividade}</td>
          <td class="p-4"><span class="px-2.5 py-1 text-xs rounded-full bg-sky-50 text-[#00A3FF] font-semibold border border-sky-100">${item.tipo || 'Geral'}</span></td>
          <td class="p-4"><span class="px-2.5 py-1 text-xs rounded-lg bg-gray-100 text-gray-700 font-medium">${item.periodicidade}</span></td>
          <td class="p-4"><span class="px-2.5 py-1 text-xs font-bold rounded-full border ${pColor}">${item.prioridade || 'Média'}</span></td>
        </tr>
      `;
    });
  }

  html += `</tbody></table></div></div>`;
  container.innerHTML = html;
}

// 3. Aba Site
function renderizarSite(dados, container) {
  let html = `
    <div class="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
      <div class="p-5 border-b border-gray-100 bg-gray-50/50 flex items-center justify-between">
        <h3 class="font-bold text-[#1C275C] flex items-center gap-2">
          <i class="fa-solid fa-globe text-[#00A3FF]"></i> Rotinas e Operações do Site
        </h3>
        <span class="text-xs text-gray-500 font-semibold bg-white px-3 py-1 rounded-full border">${dados.length} registradas</span>
      </div>
      <div class="overflow-x-auto">
        <table class="w-full text-left text-sm">
          <thead class="bg-gray-50 text-[#1C275C] uppercase text-[11px] font-bold border-b border-gray-100">
            <tr>
              <th class="p-4">ID</th>
              <th class="p-4">Atividade / Rotina</th>
              <th class="p-4">Tipo</th>
              <th class="p-4">Responsável</th>
              <th class="p-4">Periodicidade</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-100 text-gray-700">
  `;

  if (!dados || dados.length === 0) {
    html += `<tr><td colspan="5" class="p-8 text-center text-gray-400">Nenhuma rotina encontrada.</td></tr>`;
  } else {
    dados.forEach(item => {
      html += `
        <tr class="hover:bg-sky-50/30 transition">
          <td class="p-4 font-bold text-gray-400">#${item.id}</td>
          <td class="p-4 font-semibold text-[#1C275C]">${item.atividade}</td>
          <td class="p-4"><span class="px-2.5 py-1 text-xs rounded-full bg-sky-50 text-[#00A3FF] font-semibold border border-sky-100">${item.tipo || 'Geral'}</span></td>
          <td class="p-4 font-bold text-[#00A3FF]">${item.responsavel}</td>
          <td class="p-4"><span class="px-2.5 py-1 text-xs rounded-lg bg-gray-100 text-gray-700 font-medium">${item.periodicidade}</span></td>
        </tr>
      `;
    });
  }

  html += `</tbody></table></div></div>`;
  container.innerHTML = html;
}

// 4. Aba Biblioteca com Botões do Site
function renderizarBiblioteca(dados, container) {
  if (!dados || dados.length === 0) {
    container.innerHTML = `<div class="p-12 text-center text-gray-400 bg-white rounded-2xl border">Nenhum registro encontrado na Biblioteca.</div>`;
    return;
  }

  let html = `<div class="space-y-4 max-w-5xl">`;
  dados.forEach((item, index) => {
    html += `
      <div class="bringit-card overflow-hidden">
        <button onclick="toggleAccordion(${index})" class="w-full flex items-center justify-between p-5 bg-white hover:bg-gray-50/80 text-left transition">
          <div class="flex items-center space-x-3">
            <span class="px-3 py-1 text-xs font-extrabold rounded-full bg-sky-50 text-[#00A3FF] border border-sky-100 uppercase tracking-wider">
              ${item.categoria || 'Geral'}
            </span>
            <span class="font-bold text-[#1C275C] text-base">${item.titulo}</span>
          </div>
          <i id="icon-${index}" class="fa-solid fa-chevron-down text-gray-400 transition-transform duration-200"></i>
        </button>

        <div id="content-${index}" class="accordion-content p-6 border-t border-gray-100 bg-white space-y-5">
          <div>
            <h4 class="text-[11px] font-bold uppercase text-gray-400 mb-1 tracking-wider">Descrição & Detalhes</h4>
            <p class="text-sm text-gray-700 leading-relaxed">${item.detalhes}</p>
          </div>

          ${item.materiais && item.materiais.length > 0 ? `
            <div>
              <h4 class="text-[11px] font-bold uppercase text-gray-400 mb-2.5 tracking-wider flex items-center gap-1.5">
                <i class="fa-solid fa-file-excel text-emerald-500"></i> Bases Utilizadas & Planilhas
              </h4>
              <div class="flex flex-wrap gap-2.5">
                ${item.materiais.map(mat => `
                  <a href="${mat.url}" target="_blank" 
                     class="btn-bringit inline-flex items-center gap-2 px-4 py-2.5 text-xs shadow-sm">
                    <i class="fa-solid fa-arrow-up-right-from-square"></i>
                    <span>${mat.nome}</span>
                  </a>
                `).join('')}
              </div>
            </div>
          ` : ''}

          ${item.tutoriais && item.tutoriais.length > 0 ? `
            <div>
              <h4 class="text-[11px] font-bold uppercase text-gray-400 mb-2.5 tracking-wider flex items-center gap-1.5">
                <i class="fa-solid fa-book text-[#00A3FF]"></i> Tutoriais & Procedimentos
              </h4>
              <div class="flex flex-wrap gap-2.5">
                ${item.tutoriais.map(tut => `
                  <a href="${tut.url}" target="_blank" 
                     class="inline-flex items-center gap-2 px-4 py-2.5 bg-gray-100 text-[#1C275C] font-bold rounded-xl text-xs hover:bg-gray-200 transition">
                    <i class="fa-solid fa-circle-play text-[#00A3FF]"></i>
                    <span>${tut.nome}</span>
                  </a>
                `).join('')}
              </div>
            </div>
          ` : ''}
        </div>
      </div>
    `;
  });

  html += `</div>`;
  container.innerHTML = html;
}

function toggleAccordion(index) {
  const content = document.getElementById(`content-${index}`);
  const icon = document.getElementById(`icon-${index}`);
  if (content && icon) {
    content.classList.toggle('open');
    icon.classList.toggle('rotate-180');
  }
}

function gerarFiltrosPorColuna() {
  const container = document.getElementById('containerFiltrosColunas');
  if (!container) return;
  container.innerHTML = "";

  const dados = obterDadosAbaAtual();
  if (!dados || dados.length === 0) return;

  const chaves = Object.keys(dados[0]).filter(k => !['id', 'fotoUrl', 'responsabilidades', 'materiais', 'tutoriais'].includes(k));

  chaves.forEach(chave => {
    const valoresUnicos = [...new Set(dados.map(item => item[chave]))].filter(Boolean);
    if (valoresUnicos.length <= 1) return;

    const select = document.createElement('select');
    select.className = "border border-gray-200 rounded-xl px-3 py-1.5 text-xs bg-white text-gray-700 font-medium focus:outline-none focus:border-[#00A3FF]";
    select.dataset.coluna = chave;
    select.onchange = aplicarFiltros;

    select.innerHTML = `<option value="">Todas as ${chave.toUpperCase()}</option>` + 
      valoresUnicos.map(v => `<option value="${v}">${v}</option>`).join('');

    container.appendChild(select);
  });
}

function aplicarFiltros() {
  const textoBusca = (document.getElementById('filtroTexto')?.value || "").toLowerCase();
  const selects = document.querySelectorAll('#containerFiltrosColunas select');
  const dados = obterDadosAbaAtual();

  const filtrados = dados.filter(item => {
    const bateuTexto = Object.values(item).some(val => 
      String(val).toLowerCase().includes(textoBusca)
    );

    let bateuSelects = true;
    selects.forEach(select => {
      const coluna = select.dataset.coluna;
      const valorSelecionado = select.value;
      if (valorSelecionado && String(item[coluna]) !== valorSelecionado) {
        bateuSelects = false;
      }
    });

    return bateuTexto && bateuSelects;
  });

  renderizarConteudo(filtrados);
}