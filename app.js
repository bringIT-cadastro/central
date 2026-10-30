// app.js

let abaAtual = 'time';
let sidebarRetraida = false;

document.addEventListener("DOMContentLoaded", () => {
  navegarAba('time');
});

// Alternância Ultrarrápida da Sidebar (Isolada do DOM)
function toggleSidebar() {
  const sidebar = document.getElementById('sidebarMenu');
  const iconToggle = document.getElementById('iconSidebarToggle');
  const footerTitle = document.getElementById('footerTitle');

  sidebarRetraida = !sidebarRetraida;

  if (sidebarRetraida) {
    sidebar.classList.add('sidebar-collapsed');
    sidebar.classList.replace('w-64', 'w-20');
    if (iconToggle) iconToggle.classList.add('rotate-180');
    if (footerTitle) footerTitle.textContent = "CC";
  } else {
    sidebar.classList.remove('sidebar-collapsed');
    sidebar.classList.replace('w-20', 'w-64');
    if (iconToggle) iconToggle.classList.remove('rotate-180');
    if (footerTitle) footerTitle.textContent = "Central Cadastro";
  }
}

function navegarAba(nomeAba) {
  abaAtual = nomeAba;
  
  document.querySelectorAll('.menu-link').forEach(btn => btn.classList.remove('active'));
  const btnAtivo = document.getElementById(`btn-${nomeAba}`);
  if (btnAtivo) btnAtivo.classList.add('active');

  const titulos = {
    time: "Membros da Equipe",
    marketplace: "Rotinas de Marketplace",
    site: "Rotinas do Site"
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
}

function atualizarContadorResultados(total) {
  const elContador = document.getElementById('contadorResultados');
  if (elContador) {
    elContador.className = "hidden sm:inline-flex px-3.5 py-1 text-xs font-black text-[#00A3FF] bg-sky-50 border border-sky-100 rounded-full shadow-sm tracking-wide";
    elContador.textContent = `${total} ${total === 1 ? 'registro encontrado' : 'registros encontrados'}`;
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
          htmlLogos += `<img src="${logoUrl}" title="${canal}" alt="${canal}" loading="lazy" class="h-5 w-auto object-contain max-w-[50px] bg-white p-0.5 rounded shadow-sm border border-gray-100">`;
        }
      });
      htmlLogos += `</div>`;
    }

    html += `
      <div class="bringit-card p-6 flex flex-col justify-between">
        <div>
          <div class="flex items-start space-x-4 mb-4">
            <img src="${membro.fotoUrl || 'https://via.placeholder.com/150'}" alt="${membro.nome}" loading="lazy" class="w-16 h-16 rounded-full object-cover border-2 border-[#00A3FF] shadow-sm bg-gray-100">
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
            <button onclick="toggleResponsabilidade(${membro.id})" class="w-full flex items-center justify-between text-xs font-extrabold text-[#1C275C] hover:text-[#00A3FF] transition-colors py-1">
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

  if (typeof DATA_MARKETPLACE_CANOES !== 'undefined' && DATA_MARKETPLACE_CANOES.length > 0) {
    html += `
      <div class="bringit-card mb-6 overflow-hidden border border-gray-200 shadow-sm">
        <button onclick="toggleSecaoLojas()" class="w-full flex items-center justify-between p-5 bg-white hover:bg-sky-50/50 transition-colors text-left">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-xl bg-sky-50 text-[#00A3FF] flex items-center justify-center border border-sky-100">
              <i class="fa-solid fa-store text-lg"></i>
            </div>
            <div>
              <h3 class="text-base font-extrabold text-[#1C275C]">Responsáveis por Loja</h3>
              <p class="text-xs text-gray-500 font-medium">Matriz de colaboradores x contas dos canais</p>
            </div>
          </div>
          
          <div class="flex items-center gap-3">
            <span class="hidden sm:inline-block px-3 py-1 text-xs font-bold text-[#00A3FF] bg-sky-50 border border-sky-100 rounded-lg">
              Clique para visualizar
            </span>
            <div class="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-500">
              <i id="icon-secao-lojas" class="fa-solid fa-chevron-down transition-transform duration-200"></i>
            </div>
          </div>
        </button>

        <div id="conteudo-secao-lojas" class="hidden p-6 border-t border-gray-100 bg-gray-50/40">
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
    `;
    
    DATA_MARKETPLACE_CANOES.forEach(item => {
      const urlLogo = (typeof LOGOS_CANOES !== 'undefined' && LOGOS_CANOES[item.canal]) ? LOGOS_CANOES[item.canal] : '';
      const fotoResp = item.foto || 'https://via.placeholder.com/150';
      const isTikTok = item.canal === "TikTok";
      const estiloLogo = isTikTok ? "h-10 w-32 object-cover scale-125 rounded-md" : "max-h-full max-w-full object-contain";

      html += `
        <div class="bg-white rounded-2xl p-5 border border-gray-200/90 shadow-sm flex flex-col justify-between hover:border-[#00A3FF] transition">
          <div class="flex items-center justify-between gap-3 mb-4 h-12">
            ${urlLogo ? `
              <div class="h-10 w-32 flex items-center justify-start overflow-hidden">
                <img src="${urlLogo}" alt="${item.canal}" loading="lazy" class="${estiloLogo}">
              </div>
            ` : `<span class="font-extrabold text-[#1C275C] text-base">${item.canal}</span>`}

            <span class="px-3 py-1.5 text-xs font-black bg-[#00A3FF] text-white rounded-xl shadow-sm tracking-wider">
              ${item.conta}
            </span>
          </div>

          <div class="text-xs text-gray-700 flex items-center gap-3 pt-3.5 border-t border-gray-100">
            <img src="${fotoResp}" alt="${item.responsavel}" loading="lazy" class="w-10 h-10 rounded-full object-cover border-2 border-[#00A3FF] shadow-sm flex-shrink-0 bg-gray-100">
            <div>
              <p class="text-[10px] font-bold uppercase tracking-wider text-gray-400">Responsável</p>
              <span class="font-extrabold text-[#1C275C] text-sm leading-tight block">${item.responsavel}</span>
            </div>
          </div>
        </div>
      `;
    });
    
    html += `</div></div></div>`;
  }

  if (typeof DATA_FILTROS !== 'undefined' && DATA_FILTROS.length > 0) {
    const filtrosML = DATA_FILTROS.filter(f => f.categoriaPrincipal === 'ML');
    const filtrosShopee = DATA_FILTROS.filter(f => f.categoriaPrincipal === 'Shopee');

    if (filtrosML.length > 0) {
      html += renderizarBlocoFiltroCritico("Filtros Críticos Mercado Livre", "ML", filtrosML, "ml");
    }

    if (filtrosShopee.length > 0) {
      html += renderizarBlocoFiltroCritico("Filtros Críticos Shopee", "Shopee", filtrosShopee, "shopee");
    }
  }

  const CORES_PERIODICIDADE = {
    'Diariamente': 'bg-emerald-50 text-emerald-700 border-emerald-200',
    'Semanal': 'bg-sky-50 text-[#00A3FF] border-sky-200',
    '2x Semana': 'bg-blue-50 text-blue-700 border-blue-200',
    'Quinzenal': 'bg-purple-50 text-purple-700 border-purple-200',
    'Conforme Demanda': 'bg-amber-50 text-amber-700 border-amber-200'
  };

  html += `
    <div class="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm mt-8">
      <div class="p-5 border-b border-gray-100 bg-gray-50/50 flex items-center justify-between">
        <h3 class="font-bold text-[#1C275C] flex items-center gap-2 text-base">
          <i class="fa-solid fa-tasks text-[#00A3FF]"></i> Rotinas e Atividades de Marketplace
        </h3>
        <span class="px-3 py-1 text-xs font-black text-[#00A3FF] bg-sky-50 border border-sky-100 rounded-full">${dados.length} encontradas</span>
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
        <tr onclick="toggleLinhaRotina(${index})" class="hover:bg-sky-50/30 transition-colors cursor-pointer">
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
                      <span class="inline-flex items-center gap-1">
                        <i class="fa-solid fa-file-excel text-emerald-600"></i>
                        <i class="fa-solid fa-file-lines text-blue-500"></i>
                        <i class="fa-solid fa-file-word text-sky-600"></i>
                      </span>
                      Material de Apoio
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
                        <a href="${tut.url}" target="_blank" class="inline-flex items-center gap-2 px-3.5 py-2 bg-white text-[#1C275C] font-bold rounded-xl text-xs border border-gray-200 hover:bg-gray-100 transition-colors">
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

function renderizarBlocoFiltroCritico(titulo, idSecao, listaFiltros, estiloTema) {
  let estilosHeader = "bg-white hover:bg-sky-50/50 border-gray-200";
  let estiloIcone = "bg-sky-50 text-[#00A3FF] border-sky-100";
  let estiloBadgeBtn = "text-[#00A3FF] bg-sky-50 border-sky-100";

  if (estiloTema === "ml") {
    estilosHeader = "bg-amber-100/70 hover:bg-amber-100 border-amber-200/90";
    estiloIcone = "bg-amber-200 text-amber-900 border-amber-300";
    estiloBadgeBtn = "text-amber-900 bg-amber-200/80 border-amber-300";
  } else if (estiloTema === "shopee") {
    estilosHeader = "bg-orange-100/70 hover:bg-orange-100 border-orange-200/90";
    estiloIcone = "bg-orange-200 text-orange-900 border-orange-300";
    estiloBadgeBtn = "text-orange-900 bg-orange-200/80 border-orange-300";
  }

  let html = `
    <div class="bringit-card mb-6 overflow-hidden border shadow-sm">
      <button onclick="toggleSecaoFiltroCritico('${idSecao}')" class="w-full flex items-center justify-between p-5 transition-colors text-left ${estilosHeader}">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-xl flex items-center justify-center border ${estiloIcone}">
            <i class="fa-solid fa-filter text-lg"></i>
          </div>
          <div>
            <h3 class="text-base font-extrabold text-[#1C275C]">${titulo}</h3>
            <p class="text-xs text-gray-600 font-medium">Atalhos rápidos e cópia de URLs de filtros</p>
          </div>
        </div>
        
        <div class="flex items-center gap-3">
          <span class="hidden sm:inline-block px-3 py-1 text-xs font-bold rounded-lg border ${estiloBadgeBtn}">
            Clique para visualizar
          </span>
          <div class="w-8 h-8 rounded-full bg-white/80 flex items-center justify-center text-gray-600 shadow-sm">
            <i id="icon-filtro-${idSecao}" class="fa-solid fa-chevron-down transition-transform duration-200"></i>
          </div>
        </div>
      </button>

      <div id="conteudo-filtro-${idSecao}" class="hidden p-6 border-t border-gray-100 bg-gray-50/40">
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
  `;

  listaFiltros.forEach(item => {
    const logoUrl = (typeof LOGOS_CANOES !== 'undefined' && LOGOS_CANOES[item.canal]) ? LOGOS_CANOES[item.canal] : '';

    html += `
      <div class="bg-white rounded-2xl p-4 border border-gray-200/90 shadow-sm flex flex-col justify-between hover:border-[#00A3FF] transition-colors">
        <div>
          <div class="flex items-center justify-between gap-2 mb-3">
            ${logoUrl ? `<img src="${logoUrl}" alt="${item.canal}" loading="lazy" class="h-6 object-contain max-w-[90px]">` : `<span class="text-xs font-bold text-gray-400">${item.canal}</span>`}
            <span class="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded bg-gray-100 text-gray-600">Filtro</span>
          </div>

          <a href="${item.url}" target="_blank" title="Abrir link diretamente: ${item.url}" class="font-extrabold text-[#1C275C] text-sm hover:text-[#00A3FF] transition-colors block leading-snug mb-3">
            <i class="fa-solid fa-link text-[#00A3FF] text-xs mr-1"></i> ${item.nome}
          </a>
        </div>

        <button onclick="copiarUrlFiltro('${item.url}', this)" class="w-full py-2 px-3 text-xs font-bold text-[#00A3FF] bg-sky-50 hover:bg-[#00A3FF] hover:text-white border border-sky-200 rounded-xl transition-colors flex items-center justify-center gap-2">
          <i class="fa-solid fa-copy"></i>
          <span>Copiar URL</span>
        </button>
      </div>
    `;
  });

  html += `</div></div></div>`;
  return html;
}

function toggleSecaoFiltroCritico(idSecao) {
  const conteudo = document.getElementById(`conteudo-filtro-${idSecao}`);
  const icone = document.getElementById(`icon-filtro-${idSecao}`);
  if (conteudo && icone) {
    conteudo.classList.toggle('hidden');
    icone.classList.toggle('rotate-180');
  }
}

function copiarUrlFiltro(url, elemento) {
  navigator.clipboard.writeText(url).then(() => {
    const textoOriginal = elemento.innerHTML;
    elemento.innerHTML = `<i class="fa-solid fa-check text-emerald-500"></i> Copiado!`;
    elemento.classList.add('bg-emerald-50', 'text-emerald-700', 'border-emerald-300');
    
    setTimeout(() => {
      elemento.innerHTML = textoOriginal;
      elemento.classList.remove('bg-emerald-50', 'text-emerald-700', 'border-emerald-300');
    }, 2000);
  });
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
  const CORES_PERIODICIDADE = {
    'Diariamente': 'bg-emerald-50 text-emerald-700 border-emerald-200',
    'Semanal': 'bg-sky-50 text-[#00A3FF] border-sky-200',
    '2x Semana': 'bg-blue-50 text-blue-700 border-blue-200',
    'Quinzenal': 'bg-purple-50 text-purple-700 border-purple-200',
    'Conforme Demanda': 'bg-amber-50 text-amber-700 border-amber-200'
  };

  let html = `
    <div class="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
      <div class="p-5 border-b border-gray-100 bg-gray-50/50 flex items-center justify-between">
        <h3 class="font-bold text-[#1C275C] flex items-center gap-2 text-base">
          <i class="fa-solid fa-globe text-[#00A3FF]"></i> Rotinas e Operações do Site
        </h3>
        <span class="px-3 py-1 text-xs font-black text-[#00A3FF] bg-sky-50 border border-sky-100 rounded-full">${dados.length} encontradas</span>
      </div>
      <div class="overflow-x-auto">
        <table class="w-full text-left text-sm">
          <thead class="bg-gray-50 text-[#1C275C] uppercase text-[11px] font-bold border-b border-gray-100">
            <tr>
              <th class="p-4 w-12 text-center"></th>
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
    html += `<tr><td colspan="6" class="p-8 text-center text-gray-400">Nenhuma rotina encontrada.</td></tr>`;
  } else {
    dados.forEach((item, index) => {
      const estiloPeriodicidade = CORES_PERIODICIDADE[item.periodicidade] || 'bg-gray-100 text-gray-700 border-gray-200';
      const fotoResp = item.foto || 'https://via.placeholder.com/150';
      const temApoio = (item.materiais && item.materiais.length > 0) || (item.tutoriais && item.tutoriais.length > 0);

      html += `
        <tr onclick="toggleLinhaRotinaSite(${index})" class="hover:bg-sky-50/30 transition-colors cursor-pointer">
          <td class="p-4 text-center">
            <i id="site-icon-${index}" class="fa-solid fa-chevron-right text-gray-400 text-xs transition-transform duration-200"></i>
          </td>
          <td class="p-4 font-bold text-gray-400">#${item.id}</td>
          <td class="p-4 font-semibold text-[#1C275C]">${item.atividade}</td>
          <td class="p-4"><span class="px-2.5 py-1 text-xs rounded-full bg-sky-50 text-[#00A3FF] font-semibold border border-sky-100">${item.tipo || 'Geral'}</span></td>
          <td class="p-4">
            <div class="flex items-center gap-2">
              <img src="${fotoResp}" alt="${item.responsavel}" loading="lazy" class="w-6 h-6 rounded-full object-cover border border-[#00A3FF] bg-gray-100">
              <span class="font-bold text-[#1C275C]">${item.responsavel}</span>
            </div>
          </td>
          <td class="p-4"><span class="px-2.5 py-1 text-xs font-bold rounded-lg border ${estiloPeriodicidade}">${item.periodicidade}</span></td>
        </tr>
        <tr id="site-content-${index}" class="hidden bg-sky-50/20 border-t-0">
          <td colspan="6" class="p-5 pl-14">
            ${temApoio ? `
              <div class="space-y-3">
                ${item.materiais && item.materiais.length > 0 ? `
                  <div>
                    <p class="text-[11px] font-bold uppercase text-gray-400 mb-2 flex items-center gap-1.5">
                      <span class="inline-flex items-center gap-1">
                        <i class="fa-solid fa-file-excel text-emerald-600"></i>
                        <i class="fa-solid fa-file-lines text-blue-500"></i>
                        <i class="fa-solid fa-file-word text-sky-600"></i>
                      </span>
                      Material de Apoio
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
                        <a href="${tut.url}" target="_blank" class="inline-flex items-center gap-2 px-3.5 py-2 bg-white text-[#1C275C] font-bold rounded-xl text-xs border border-gray-200 hover:bg-gray-100 transition-colors">
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

function toggleLinhaRotinaSite(index) {
  const content = document.getElementById(`site-content-${index}`);
  const icon = document.getElementById(`site-icon-${index}`);
  if (content && icon) {
    content.classList.toggle('hidden');
    icon.classList.toggle('rotate-90');
  }
}

// MÓDULO DE FILTROS
function gerarFiltrosPorColuna() {
  const container = document.getElementById('containerFiltrosColunas');
  if (!container) return;
  container.innerHTML = "";

  const dados = obterDadosAbaAtual();
  if (!dados || dados.length === 0) return;

  const chavesIgnoradas = ['id', 'fotoUrl', 'responsabilidades', 'materiais', 'tutoriais', 'email', 'canaisResponsaveis', 'foto', 'atividade'];
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
      responsavel: "Responsável"
    };

    const nomeColuna = rotulos[chave] || chave.charAt(0).toUpperCase() + chave.slice(1);

    const select = document.createElement('select');
    select.className = "border border-gray-200 rounded-xl px-3.5 py-1.5 text-xs bg-white text-gray-700 font-semibold focus:outline-none focus:ring-2 focus:ring-[#00A3FF]/20 focus:border-[#00A3FF] shadow-sm transition-colors";
    select.dataset.coluna = chave;
    select.dataset.rotulo = nomeColuna;
    select.onchange = aplicarFiltros;

    select.innerHTML = `<option value="">${nomeColuna}: Todos</option>` + 
      valoresUnicos.map(v => `<option value="${v}">${v}</option>`).join('');

    container.appendChild(select);
  });

  const btnLimpar = document.createElement('button');
  btnLimpar.className = "px-3.5 py-1.5 text-xs font-bold text-red-600 bg-red-50 hover:bg-red-100 border border-red-200 rounded-xl transition-colors flex items-center gap-1.5 shadow-sm";
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
            <button onclick="removerFiltroAtivo(${i})" class="hover:text-red-500 transition-colors ml-0.5">
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