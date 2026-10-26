let abaAtual = 'time';

document.addEventListener("DOMContentLoaded", () => {
  navegarAba('time');
});

function navegarAba(nomeAba) {
  abaAtual = nomeAba;
  
  document.querySelectorAll('.menu-link').forEach(btn => btn.classList.remove('active'));
  const btnAtivo = document.getElementById(`btn-${nomeAba}`);
  if (btnAtivo) btnAtivo.classList.add('active');

  // Ajuste do título da aba
  const titulos = {
    time: "Membros da Equipe",
    marketplace: "Rotinas de Marketplace",
    site: "Operações do Site",
    biblioteca: "Biblioteca de Tutoriais & Bases"
  };
  
  const elTitulo = document.getElementById('tituloAba');
  if (elTitulo) elTitulo.textContent = titulos[nomeAba] || "Central";

  const elFiltro = document.getElementById('filtroTexto');
  if (elFiltro) elFiltro.value = "";

  renderizarConteudo();
  gerarFiltrosPorColuna();
}

function obterDadosAbaAtual() {
  try {
    switch (abaAtual) {
      case 'time': return (typeof DATA_TIME !== 'undefined') ? DATA_TIME : [];
      case 'marketplace': return (typeof DATA_MARKETPLACE !== 'undefined') ? DATA_MARKETPLACE : [];
      case 'site': return (typeof DATA_SITE !== 'undefined') ? DATA_SITE : [];
      case 'biblioteca': return (typeof DATA_BIBLIOTECA !== 'undefined') ? DATA_BIBLIOTECA : [];
      default: return [];
    }
  } catch (e) {
    console.error("Erro ao obter dados da aba:", e);
    return [];
  }
}

function renderizarConteudo(dadosFiltrados = null) {
  const container = document.getElementById('conteudoAba');
  if (!container) return;

  const dados = dadosFiltrados || obterDadosAbaAtual();
  atualizarContadorResultados(dados.length);

  if (abaAtual === 'time') renderizarTime(dados, container);
  else if (abaAtual === 'marketplace') renderizarMarketplace(dados, container);
  else if (abaAtual === 'site') renderizarSite(dados, container);
  else if (abaAtual === 'biblioteca') renderizarBiblioteca(dados, container);
}

function atualizarContadorResultados(total) {
  const elContador = document.getElementById('contadorResultados');
  if (elContador) {
    elContador.textContent = `${total} ${total === 1 ? 'registro' : 'registros'}`;
  }
}

// 1. Aba Time
function renderizarTime(dados, container) {
  if (!dados || dados.length === 0) {
    container.innerHTML = `<div class="p-12 text-center text-gray-400 bg-white rounded-2xl border">Nenhum colaborador encontrado com os filtros selecionados.</div>`;
    return;
  }

  const CORES_ESCOPO = {
    'Marketplace': 'bg-amber-50 text-amber-700 border-amber-200',
    'Site': 'bg-sky-50 text-[#00A3FF] border-sky-200',
    'Geral': 'bg-purple-50 text-purple-700 border-purple-200'
  };

  let html = `<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">`;
  dados.forEach(membro => {
    const estiloTagEscopo = CORES_ESCOPO[membro.escopo] || 'bg-gray-50 text-gray-700 border-gray-200';

    let htmlLogos = '';
    if (membro.canaisResponsaveis && membro.canaisResponsaveis.length > 0 && typeof LOGOS_CANOES !== 'undefined') {
      htmlLogos = `<div class="flex items-center gap-1.5 flex-wrap mt-2.5 bg-gray-50 p-2 rounded-xl border border-gray-100">`;
      membro.canaisResponsaveis.forEach(canal => {
        const logoUrl = LOGOS_CANOES[canal];
        if (logoUrl) {
          htmlLogos += `<img src="${logoUrl}" title="${canal}" alt="${canal}" class="h-5 w-auto object-contain max-w-[50px] bg-white p-0.5 rounded shadow-sm border border-gray-100">`;
        }
      });
      htmlLogos += `</div>`;
    }

    html += `
      <div class="bringit-card p-6 flex flex-col justify-between">
        <div>
          <div class="flex items-start space-x-4 mb-4">
            <img src="${membro.fotoUrl || 'https://via.placeholder.com/150'}" alt="${membro.nome}" class="w-16 h-16 rounded-full object-cover border-2 border-[#00A3FF] shadow-sm">
            <div class="flex-1">
              <h3 class="font-extrabold text-[#1C275C] text-xl leading-snug">${membro.nome}</h3>
              <p class="text-sm font-bold text-gray-500 mt-0.5">${membro.cargo}</p>
              
              <div class="flex items-center gap-2 mt-2 flex-wrap">
                <span class="inline-block px-3 py-1 text-xs font-black rounded-full border uppercase tracking-wider ${estiloTagEscopo}">
                  ${membro.escopo || 'Geral'}
                </span>
              </div>

              ${htmlLogos}
            </div>
          </div>

          <div class="pt-3 border-t border-gray-100 mt-4">
            <button onclick="toggleResponsabilidade(${membro.id})" class="w-full flex items-center justify-between text-xs font-extrabold text-[#1C275C] hover:text-[#00A3FF] transition py-1">
              <span class="flex items-center gap-1.5 text-sm">
                <i class="fa-solid fa-list-check text-[#00A3FF]"></i> Responsabilidades Principais
              </span>
              <i id="resp-icon-${membro.id}" class="fa-solid fa-chevron-down text-gray-400 text-xs transition-transform duration-200"></i>
            </button>
            
            <div id="resp-content-${membro.id}" class="hidden mt-3">
              <p class="leading-relaxed bg-gray-50 p-3.5 rounded-xl text-xs font-medium text-gray-700 border border-gray-100">${membro.responsabilidades}</p>
            </div>
          </div>
        </div>
      </div>
    `;
  });
  html += `</div>`;
  container.innerHTML = html;
}

function toggleResponsabilidade(id) {
  const content = document.getElementById(`resp-content-${id}`);
  const icon = document.getElementById(`resp-icon-${id}`);
  if (content && icon) {
    content.classList.toggle('hidden');
    icon.classList.toggle('rotate-180');
  }
}

// 2. Aba Marketplace
function renderizarMarketplace(dados, container) {
  let html = ``;

  // Seção 1: Responsáveis por Loja (Accordion Expansível e Recolhível)
  if (typeof DATA_MARKETPLACE_CANOES !== 'undefined' && DATA_MARKETPLACE_CANOES.length > 0) {
    html += `
      <div class="bringit-card mb-8 overflow-hidden">
        <button onclick="toggleSecaoLojas()" class="w-full flex items-center justify-between p-5 bg-white hover:bg-gray-50/80 transition text-left">
          <h3 class="text-base font-extrabold text-[#1C275C] flex items-center gap-2">
            <i class="fa-solid fa-store text-[#00A3FF]"></i> Responsáveis por Loja
          </h3>
          <div class="flex items-center gap-2">
            <span class="text-xs font-bold text-gray-400 uppercase tracking-wider">Clique para expandir / recolher</span>
            <i id="icon-secao-lojas" class="fa-solid fa-chevron-up text-gray-400 transition-transform duration-200"></i>
          </div>
        </button>

        <div id="conteudo-secao-lojas" class="p-5 border-t border-gray-100 bg-gray-50/30">
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
    `;
    
    DATA_MARKETPLACE_CANOES.forEach(item => {
      const urlLogo = (typeof LOGOS_CANOES !== 'undefined' && LOGOS_CANOES[item.canal]) ? LOGOS_CANOES[item.canal] : '';
      const fotoResp = item.foto || 'https://via.placeholder.com/150';
      
      // Ajuste fino para a logo do TikTok sobressair perfeitamente
      const isTikTok = item.canal === "TikTok";
      const estiloLogo = isTikTok ? "h-9 w-28 object-cover scale-125 rounded-md" : "max-h-full max-w-full object-contain";

      html += `
        <div class="bg-white rounded-xl p-4 border border-gray-200/80 shadow-sm flex flex-col justify-between hover:border-[#00A3FF] transition">
          <div class="flex items-center justify-between gap-2 mb-3 h-10">
            ${urlLogo ? `
              <div class="h-9 w-28 flex items-center justify-start overflow-hidden">
                <img src="${urlLogo}" alt="${item.canal}" class="${estiloLogo}">
              </div>
            ` : `<span class="font-bold text-[#1C275C] text-sm">${item.canal}</span>`}

            <!-- Sigla Destacada -->
            <span class="px-3 py-1 text-xs font-black bg-[#00A3FF] text-white rounded-lg shadow-sm tracking-wider">
              ${item.conta}
            </span>
          </div>

          <!-- Responsável com Foto Miniatura -->
          <div class="text-xs text-gray-700 flex items-center gap-2.5 pt-2.5 border-t border-gray-100">
            <img src="${fotoResp}" alt="${item.responsavel}" class="w-6 h-6 rounded-full object-cover border border-[#00A3FF]">
            <span class="font-bold text-[#1C275C]">${item.responsavel}</span>
          </div>
        </div>
      `;
    });
    
    html += `</div></div></div>`;
  }

  // Seção 2: Tabela de Rotinas
  const CORES_PERIODICIDADE = {
    'Diariamente': 'bg-emerald-50 text-emerald-700 border-emerald-200',
    'Semanal': 'bg-sky-50 text-[#00A3FF] border-sky-200',
    '2x Semana': 'bg-blue-50 text-blue-700 border-blue-200',
    'Quinzenal': 'bg-purple-50 text-purple-700 border-purple-200',
    'Conforme Demanda': 'bg-amber-50 text-amber-700 border-amber-200'
  };

  html += `
    <div class="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
      <div class="p-5 border-b border-gray-100 bg-gray-50/50 flex items-center justify-between">
        <h3 class="font-bold text-[#1C275C] flex items-center gap-2 text-base">
          <i class="fa-solid fa-tasks text-[#00A3FF]"></i> Rotinas e Atividades de Marketplace
        </h3>
        <span class="text-xs text-gray-500 font-semibold bg-white px-3 py-1 rounded-full border">${dados.length} encontradas</span>
      </div>
      <div class="overflow-x-auto">
        <table class="w-full text-left text-sm">
          <thead class="bg-gray-50 text-[#1C275C] uppercase text-[11px] font-bold border-b border-gray-100">
            <tr>
              <th class="p-4 w-12 text-center"></th>
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
    html += `<tr><td colspan="6" class="p-8 text-center text-gray-400">Nenhuma rotina encontrada.</td></tr>`;
  } else {
    dados.forEach((item, index) => {
      const pColor = item.prioridade === 'Alta' ? 'bg-red-50 text-red-600 border-red-100' : (item.prioridade === 'Média' ? 'bg-amber-50 text-amber-600 border-amber-100' : 'bg-gray-50 text-gray-600 border-gray-100');
      const estiloPeriodicidade = CORES_PERIODICIDADE[item.periodicidade] || 'bg-gray-100 text-gray-700 border-gray-200';

      const temApoio = (item.materiais && item.materiais.length > 0) || (item.tutoriais && item.tutoriais.length > 0);

      html += `
        <tr onclick="toggleLinhaRotina(${index})" class="hover:bg-sky-50/30 transition cursor-pointer">
          <td class="p-4 text-center">
            <i id="rotina-icon-${index}" class="fa-solid fa-chevron-right text-gray-400 text-xs transition-transform duration-200"></i>
          </td>
          <td class="p-4 font-bold text-gray-400">#${item.id}</td>
          <td class="p-4 font-semibold text-[#1C275C]">${item.atividade}</td>
          <td class="p-4"><span class="px-2.5 py-1 text-xs rounded-full bg-sky-50 text-[#00A3FF] font-semibold border border-sky-100">${item.tipo || 'Geral'}</span></td>
          <td class="p-4"><span class="px-2.5 py-1 text-xs font-bold rounded-lg border ${estiloPeriodicidade}">${item.periodicidade}</span></td>
          <td class="p-4"><span class="px-2.5 py-1 text-xs font-bold rounded-full border ${pColor}">${item.prioridade || 'Média'}</span></td>
        </tr>
        <tr id="rotina-content-${index}" class="hidden bg-sky-50/20 border-t-0">
          <td colspan="6" class="p-5 pl-14">
            ${temApoio ? `
              <div class="space-y-3">
                ${item.materiais && item.materiais.length > 0 ? `
                  <div>
                    <p class="text-[11px] font-bold uppercase text-gray-400 mb-2 flex items-center gap-1.5">
                      <i class="fa-solid fa-file-excel text-emerald-500"></i> Bases Utilizadas & Planilhas
                    </p>
                    <div class="flex flex-wrap gap-2">
                      ${item.materiais.map(mat => `
                        <a href="${mat.url}" target="_blank" class="btn-bringit inline-flex items-center gap-2 px-3.5 py-2 text-xs">
                          <i class="fa-solid fa-arrow-up-right-from-square"></i>
                          <span>${mat.nome}</span>
                        </a>
                      `).join('')}
                    </div>
                  </div>
                ` : ''}

                ${item.tutoriais && item.tutoriais.length > 0 ? `
                  <div>
                    <p class="text-[11px] font-bold uppercase text-gray-400 mb-2 flex items-center gap-1.5">
                      <i class="fa-solid fa-book text-[#00A3FF]"></i> Tutoriais & Procedimentos
                    </p>
                    <div class="flex flex-wrap gap-2">
                      ${item.tutoriais.map(tut => `
                        <a href="${tut.url}" target="_blank" class="inline-flex items-center gap-2 px-3.5 py-2 bg-white text-[#1C275C] font-bold rounded-xl text-xs border border-gray-200 hover:bg-gray-100 transition">
                          <i class="fa-solid fa-circle-play text-[#00A3FF]"></i>
                          <span>${tut.nome}</span>
                        </a>
                      `).join('')}
                    </div>
                  </div>
                ` : ''}
              </div>
            ` : `
              <p class="text-xs font-medium text-gray-500 italic bg-white p-3 rounded-xl border border-gray-200/60 inline-block">
                <i class="fa-solid fa-circle-info text-[#00A3FF] mr-1.5"></i> Material de apoio em produção ou não necessário.
              </p>
            `}
          </td>
        </tr>
      `;
    });
  }

  html += `</tbody></table></div></div>`;
  container.innerHTML = html;
}

function toggleSecaoLojas() {
  const conteudo = document.getElementById('conteudo-secao-lojas');
  const icone = document.getElementById('icon-secao-lojas');
  if (conteudo && icone) {
    conteudo.classList.toggle('hidden');
    icone.classList.toggle('rotate-180');
  }
}

function toggleLinhaRotina(index) {
  const content = document.getElementById(`rotina-content-${index}`);
  const icon = document.getElementById(`rotina-icon-${index}`);
  if (content && icon) {
    content.classList.toggle('hidden');
    icon.classList.toggle('rotate-90');
  }
}

// 3. Aba Site
function renderizarSite(dados, container) {
  let html = `
    <div class="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
      <div class="p-5 border-b border-gray-100 bg-gray-50/50 flex items-center justify-between">
        <h3 class="font-bold text-[#1C275C] flex items-center gap-2">
          <i class="fa-solid fa-globe text-[#00A3FF]"></i> Rotinas e Operações do Site
        </h3>
        <span class="text-xs text-gray-500 font-semibold bg-white px-3 py-1 rounded-full border">${dados.length} encontradas</span>
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

// 4. Aba Biblioteca
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

// MÓDULO DE FILTROS PROFISSIONAL E GLOBAL
function gerarFiltrosPorColuna() {
  const container = document.getElementById('containerFiltrosColunas');
  if (!container) return;
  container.innerHTML = "";

  const dados = obterDadosAbaAtual();
  if (!dados || dados.length === 0) return;

  const chavesIgnoradas = ['id', 'fotoUrl', 'responsabilidades', 'materiais', 'tutoriais', 'email', 'canaisResponsaveis', 'foto'];
  const chaves = Object.keys(dados[0]).filter(k => !chavesIgnoradas.includes(k));

  chaves.forEach(chave => {
    let valoresUnicos = [...new Set(dados.map(item => item[chave]))].filter(Boolean);

    if (chave === 'cargo') {
      valoresUnicos = valoresUnicos.map(v => v.replace(/\s*Pleno\s*/i, '').trim());
      valoresUnicos = [...new Set(valoresUnicos)];
    }

    if (valoresUnicos.length <= 1) return;

    const rotulos = {
      nome: "Colaborador",
      cargo: "Cargo",
      escopo: "Escopo",
      tipo: "Tipo de Atividade",
      periodicidade: "Periodicidade",
      prioridade: "Prioridade",
      responsavel: "Responsável",
      categoria: "Categoria"
    };

    const nomeColuna = rotulos[chave] || chave.charAt(0).toUpperCase() + chave.slice(1);

    const select = document.createElement('select');
    select.className = "border border-gray-200 rounded-xl px-3.5 py-1.5 text-xs bg-white text-gray-700 font-semibold focus:outline-none focus:ring-2 focus:ring-[#00A3FF]/20 focus:border-[#00A3FF] shadow-sm transition";
    select.dataset.coluna = chave;
    select.dataset.rotulo = nomeColuna;
    select.onchange = aplicarFiltros;

    select.innerHTML = `<option value="">${nomeColuna}: Todos</option>` + 
      valoresUnicos.map(v => `<option value="${v}">${v}</option>`).join('');

    container.appendChild(select);
  });

  // Botão Limpar Filtros SEMPRE VISÍVEL
  const btnLimpar = document.createElement('button');
  btnLimpar.className = "px-3.5 py-1.5 text-xs font-bold text-red-600 bg-red-50 hover:bg-red-100 border border-red-200 rounded-xl transition flex items-center gap-1.5 shadow-sm";
  btnLimpar.onclick = limparFiltros;
  btnLimpar.innerHTML = `<i class="fa-solid fa-filter-circle-xmark"></i><span>Limpar Filtros</span>`;
  container.appendChild(btnLimpar);

  atualizarInterfaceFiltros();
}

function aplicarFiltros() {
  const inputTexto = document.getElementById('filtroTexto');
  const textoBusca = (inputTexto?.value || "").toLowerCase();
  const selects = document.querySelectorAll('#containerFiltrosColunas select');
  const dados = obterDadosAbaAtual();

  const filtrados = dados.filter(item => {
    const valoresParaBusca = Object.entries(item)
      .filter(([chave]) => chave !== 'email')
      .map(([, valor]) => valor);

    const bateuTexto = valoresParaBusca.some(val => 
      String(val).toLowerCase().includes(textoBusca)
    );

    let bateuSelects = true;
    selects.forEach(select => {
      const coluna = select.dataset.coluna;
      const valorSelecionado = select.value;
      
      if (valorSelecionado) {
        if (coluna === 'escopo' && (valorSelecionado === 'Marketplace' || valorSelecionado === 'Site')) {
          if (String(item[coluna]) !== valorSelecionado && String(item[coluna]) !== 'Geral') {
            bateuSelects = false;
          }
        } else {
          if (String(item[coluna]) !== valorSelecionado) {
            bateuSelects = false;
          }
        }
      }
    });

    return bateuTexto && bateuSelects;
  });

  renderizarConteudo(filtrados);
  atualizarInterfaceFiltros();
}

function atualizarInterfaceFiltros() {
  const inputTexto = document.getElementById('filtroTexto');
  const btnLimparTexto = document.getElementById('btnLimparBuscaTexto');
  const containerTags = document.getElementById('containerTagsFiltrosAtivos');
  const selects = document.querySelectorAll('#containerFiltrosColunas select');

  const temTexto = (inputTexto?.value || "").trim().length > 0;
  if (btnLimparTexto) btnLimparTexto.classList.toggle('hidden', !temTexto);

  let filtrosAtivos = [];

  if (temTexto) {
    filtrosAtivos.push({
      tipo: 'texto',
      rotulo: 'Busca',
      valor: inputTexto.value,
      remover: () => { inputTexto.value = ''; aplicarFiltros(); }
    });
  }

  selects.forEach(select => {
    if (select.value) {
      filtrosAtivos.push({
        tipo: 'select',
        rotulo: select.dataset.rotulo || select.dataset.coluna,
        valor: select.value,
        remover: () => { select.value = ''; aplicarFiltros(); }
      });
    }
  });

  if (containerTags) {
    if (filtrosAtivos.length === 0) {
      containerTags.innerHTML = "";
      containerTags.classList.add('hidden');
    } else {
      containerTags.classList.remove('hidden');
      containerTags.innerHTML = `<span class="text-[11px] font-bold text-gray-400 mr-1">Filtros aplicados:</span>` +
        filtrosAtivos.map((f, i) => `
          <span class="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-extrabold bg-sky-50 text-[#00A3FF] border border-sky-200 rounded-full shadow-sm">
            <span>${f.rotulo}: <strong>${f.valor}</strong></span>
            <button onclick="removerFiltroAtivo(${i})" class="hover:text-red-500 transition ml-0.5">
              <i class="fa-solid fa-xmark"></i>
            </button>
          </span>
        `).join('');

      window._filtrosAtivosRef = filtrosAtivos;
    }
  }
}

function removerFiltroAtivo(index) {
  if (window._filtrosAtivosRef && window._filtrosAtivosRef[index]) {
    window._filtrosAtivosRef[index].remover();
  }
}

function limparBuscaTexto() {
  const inputTexto = document.getElementById('filtroTexto');
  if (inputTexto) inputTexto.value = '';
  aplicarFiltros();
}

function limparFiltros() {
  const inputTexto = document.getElementById('filtroTexto');
  if (inputTexto) inputTexto.value = "";

  const selects = document.querySelectorAll('#containerFiltrosColunas select');
  selects.forEach(s => s.value = "");

  aplicarFiltros();
}