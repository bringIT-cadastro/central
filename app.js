let abaAtual = 'time';

document.addEventListener("DOMContentLoaded", () => {
  navegarAba('time');
});

function navegarAba(nomeAba) {
  abaAtual = nomeAba;
  
  // Destacar o botão ativo na sidebar
  document.querySelectorAll('.menu-link').forEach(btn => btn.classList.remove('active'));
  const btnAtivo = document.getElementById(`btn-${nomeAba}`);
  if(btnAtivo) btnAtivo.classList.add('active');

  const titulos = {
    time: "Membros da Equipe",
    marketplace: "Matriz & Rotinas de Marketplace",
    site: "Operações de Site",
    biblioteca: "Biblioteca de Tutoriais e Materiais"
  };
  document.getElementById('tituloAba').textContent = titulos[nomeAba] || "Central";

  document.getElementById('filtroTexto').value = "";
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
  const dados = dadosFiltrados || obterDadosAbaAtual();

  if (abaAtual === 'time') renderizarTime(dados, container);
  else if (abaAtual === 'marketplace') renderizarMarketplace(dados, container);
  else if (abaAtual === 'site') renderizarCanais(dados, container);
  else if (abaAtual === 'biblioteca') renderizarBiblioteca(dados, container);
}

// 1. Renderização da Aba Time
function renderizarTime(dados, container) {
  if (dados.length === 0) {
    container.innerHTML = `<div class="p-8 text-center text-gray-500">Nenhum registro encontrado.</div>`;
    return;
  }

  let html = `<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">`;
  dados.forEach(membro => {
    html += `
      <div class="bg-white rounded-xl shadow-sm border p-5 flex flex-col justify-between hover:shadow-md transition border-l-4 border-l-[#00ACFF]">
        <div class="flex items-center space-x-4 mb-4">
          <img src="${membro.fotoUrl}" alt="${membro.nome}" class="w-16 h-16 rounded-full object-cover border-2 border-[#00ACFF]">
          <div>
            <h3 class="font-bold text-[#1A1C25] text-lg">${membro.nome}</h3>
            <p class="text-xs font-semibold text-[#00ACFF] mb-1">${membro.cargo}</p>
            <span class="inline-block px-2 py-0.5 text-[10px] font-bold rounded bg-blue-50 text-[#1C275C] border border-blue-100">${membro.escopo || 'Geral'}</span>
          </div>
        </div>
        <div class="pt-3 border-t text-xs text-gray-600">
          <p class="font-semibold text-[#1C275C] mb-1"><i class="fa-solid fa-list-check text-[#00ACFF] mr-1"></i> Responsabilidades:</p>
          <p class="leading-relaxed bg-gray-50 p-2 rounded text-gray-700">${membro.responsabilidades}</p>
        </div>
      </div>
    `;
  });
  html += `</div>`;
  container.innerHTML = html;
}

// 2. Renderização da Aba Marketplace (Matriz de Canais + Tabela de Rotinas)
function renderizarMarketplace(dados, container) {
  let html = ``;

  // Seção 1: Matriz de Responsáveis por Canal/Conta
  if (typeof DATA_MARKETPLACE_CANOES !== 'undefined' && DATA_MARKETPLACE_CANOES.length > 0) {
    html += `
      <div class="mb-8">
        <h3 class="text-lg font-bold text-[#1C275C] mb-3 flex items-center gap-2">
          <i class="fa-solid fa-store text-[#00ACFF]"></i> Matriz de Canais & Contas por Responsável
        </h3>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
    `;
    
    DATA_MARKETPLACE_CANOES.forEach(item => {
      html += `
        <div class="bg-white p-4 rounded-xl border border-gray-200 shadow-sm hover:border-[#00ACFF] transition">
          <div class="flex items-center justify-between mb-2">
            <span class="font-bold text-[#1C275C]">${item.canal}</span>
            <span class="px-2 py-0.5 text-xs font-bold bg-sky-100 text-[#00ACFF] rounded-md">Conta ${item.conta}</span>
          </div>
          <div class="text-xs text-gray-600 flex items-center gap-2 pt-2 border-t">
            <i class="fa-solid fa-user-gear text-gray-400"></i>
            <span class="font-medium text-gray-800">${item.responsavel}</span>
          </div>
        </div>
      `;
    });
    
    html += `</div></div>`;
  }

  // Seção 2: Tabela de Atividades & Periodicidade
  html += `
    <div class="bg-white rounded-xl shadow-sm border overflow-hidden">
      <div class="p-4 border-b bg-gray-50 flex items-center justify-between">
        <h3 class="font-bold text-[#1C275C] flex items-center gap-2">
          <i class="fa-solid fa-tasks text-[#00ACFF]"></i> Rotinas e Atividades de Marketplace
        </h3>
        <span class="text-xs text-gray-500 font-medium">${dados.length} rotinas catalogadas</span>
      </div>
      <div class="overflow-x-auto">
        <table class="w-full text-left text-sm">
          <thead class="bg-gray-100 text-[#1C275C] uppercase text-xs font-bold border-b">
            <tr>
              <th class="p-3">ID</th>
              <th class="p-3">Atividade / Rotina</th>
              <th class="p-3">Tipo</th>
              <th class="p-3">Periodicidade</th>
              <th class="p-3">Prioridade</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-200 text-gray-700">
  `;

  if (dados.length === 0) {
    html += `<tr><td colspan="5" class="p-4 text-center text-gray-400">Nenhuma rotina encontrada.</td></tr>`;
  } else {
    dados.forEach(item => {
      const pColor = item.prioridade === 'Alta' ? 'bg-red-100 text-red-700' : (item.prioridade === 'Média' ? 'bg-yellow-100 text-yellow-800' : 'bg-gray-100 text-gray-700');
      html += `
        <tr class="hover:bg-sky-50/50 transition">
          <td class="p-3 font-semibold text-gray-400">#${item.id}</td>
          <td class="p-3 font-medium text-[#1A1C25]">${item.atividade}</td>
          <td class="p-3"><span class="px-2 py-1 text-xs rounded bg-blue-50 text-[#1C275C] font-semibold">${item.tipo || 'Geral'}</span></td>
          <td class="p-3"><span class="px-2 py-1 text-xs rounded bg-gray-100 font-medium">${item.periodicidade}</span></td>
          <td class="p-3"><span class="px-2 py-1 text-xs font-bold rounded ${pColor}">${item.prioridade}</span></td>
        </tr>
      `;
    });
  }

  html += `</tbody></table></div></div>`;
  container.innerHTML = html;
}

// 3. Renderização para Site
function renderizarCanais(dados, container) {
  if (dados.length === 0) {
    container.innerHTML = `<div class="p-8 text-center text-gray-500">Nenhum registro encontrado para esta aba.</div>`;
    return;
  }
  
  let html = `<div class="grid grid-cols-1 md:grid-cols-2 gap-6">`;
  dados.forEach(item => {
    html += `
      <div class="bg-white rounded-xl shadow-sm border p-5 hover:shadow-md transition">
        <div class="flex items-center justify-between pb-3 border-b mb-3">
          <span class="font-bold text-[#1C275C]">${item.sessao || 'Site'}</span>
          <span class="px-2 py-1 text-xs font-semibold rounded bg-sky-100 text-[#00ACFF]">${item.status || 'Ativo'}</span>
        </div>
        <p class="text-sm font-medium text-gray-700 mb-4">${item.rotina}</p>
      </div>
    `;
  });
  html += `</div>`;
  container.innerHTML = html;
}

// 4. Renderização para Biblioteca
function renderizarBiblioteca(dados, container) {
  if (dados.length === 0) {
    container.innerHTML = `<div class="p-8 text-center text-gray-500">Nenhum registro na biblioteca.</div>`;
    return;
  }

  let html = `<div class="space-y-4 max-w-4xl">`;
  dados.forEach((item, index) => {
    html += `
      <div class="bg-white border rounded-xl overflow-hidden shadow-sm">
        <button onclick="toggleAccordion(${index})" class="w-full flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 text-left">
          <div class="flex items-center space-x-3">
            <span class="px-2.5 py-1 text-xs font-bold rounded bg-sky-100 text-[#00ACFF]">${item.categoria}</span>
            <span class="font-semibold text-[#1A1C25]">${item.titulo}</span>
          </div>
          <i id="icon-${index}" class="fa-solid fa-chevron-down text-gray-400 transition-transform"></i>
        </button>
        <div id="content-${index}" class="accordion-content p-4 border-t bg-white">
          <p class="text-sm text-gray-600 mb-4">${item.detalhes}</p>
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
  content.classList.toggle('open');
  icon.classList.toggle('rotate-180');
}

function gerarFiltrosPorColuna() {
  const container = document.getElementById('containerFiltrosColunas');
  container.innerHTML = "";
  const dados = obterDadosAbaAtual();
  if (dados.length === 0) return;

  const chaves = Object.keys(dados[0]).filter(k => !['id', 'fotoUrl', 'responsabilidades'].includes(k));

  chaves.forEach(chave => {
    const valoresUnicos = [...new Set(dados.map(item => item[chave]))].filter(Boolean);
    if(valoresUnicos.length <= 1) return;

    const select = document.createElement('select');
    select.className = "border rounded-md px-3 py-1.5 text-xs bg-gray-50 focus:outline-none focus:ring-1 focus:ring-[#00ACFF]";
    select.dataset.coluna = chave;
    select.onchange = aplicarFiltros;

    select.innerHTML = `<option value="">Todas as ${chave.toUpperCase()}</option>` + 
      valoresUnicos.map(v => `<option value="${v}">${v}</option>`).join('');

    container.appendChild(select);
  });
}

function aplicarFiltros() {
  const textoBusca = document.getElementById('filtroTexto').value.toLowerCase();
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