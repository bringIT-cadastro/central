// app.js - Núcleo da Aplicação Central de Atividades bringIT

let abaAtual = 'time';
let sidebarRetraida = false;

document.addEventListener("DOMContentLoaded", () => {
  if (document.getElementById('conteudoAba')) {
    navegarAba('time');
  }
});

// Alternância da Sidebar
function toggleSidebar() {
  const sidebar = document.getElementById('sidebarMenu');
  const iconToggle = document.getElementById('iconSidebarToggle');
  const footerTitle = document.getElementById('footerTitle');

  sidebarRetraida = !sidebarRetraida;

  if (sidebarRetraida) {
    if (sidebar) {
      sidebar.classList.add('sidebar-collapsed');
      sidebar.classList.replace('w-64', 'w-20');
    }
    if (iconToggle) iconToggle.classList.add('rotate-180');
    if (footerTitle) footerTitle.textContent = "CC";
  } else {
    if (sidebar) {
      sidebar.classList.remove('sidebar-collapsed');
      sidebar.classList.replace('w-20', 'w-64');
    }
    if (iconToggle) iconToggle.classList.remove('rotate-180');
    if (footerTitle) footerTitle.textContent = "Central Cadastro";
  }
}

// Navegação de Abas
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
      case 'time': return (typeof DATA_TIME !== 'undefined' && Array.isArray(DATA_TIME)) ? DATA_TIME : [];
      case 'marketplace': return (typeof DATA_MARKETPLACE !== 'undefined' && Array.isArray(DATA_MARKETPLACE)) ? DATA_MARKETPLACE : [];
      case 'site': return (typeof DATA_SITE !== 'undefined' && Array.isArray(DATA_SITE)) ? DATA_SITE : [];
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

// -------------------------------------------------------------
// 1. Aba Time (Nova Estrutura: Linhas Recolhíveis + Cronograma Semanal)
// -------------------------------------------------------------
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

  let html = `<div class="space-y-4">`;

  dados.forEach(membro => {
    const estiloTagEscopo = CORES_ESCOPO[membro.escopo] || 'bg-gray-50 text-gray-700 border-gray-200';
    
    // Busca o cronograma individual do analista no objeto DATA_CRONOGRAMA_TIME
    const cronograma = (typeof DATA_CRONOGRAMA_TIME !== 'undefined' && DATA_CRONOGRAMA_TIME[membro.id]) 
      ? DATA_CRONOGRAMA_TIME[membro.id] 
      : null;

    let htmlLogos = '';
    if (membro.canaisResponsaveis && membro.canaisResponsaveis.length > 0 && typeof LOGOS_CANOES !== 'undefined') {
      htmlLogos = `<div class="flex items-center gap-1.5 flex-wrap">`;
      membro.canaisResponsaveis.forEach(canal => {
        const logoUrl = LOGOS_CANOES[canal];
        if (logoUrl) {
          htmlLogos += `<img src="${logoUrl}" title="${canal}" alt="${canal}" loading="lazy" class="h-5 w-auto object-contain max-w-[45px] bg-white p-0.5 rounded border border-gray-200 shadow-2xs">`;
        }
      });
      htmlLogos += `</div>`;
    }

    const diasSemana = [
      { chave: 'segunda', nome: 'Segunda-feira' },
      { chave: 'terca', nome: 'Terça-feira' },
      { chave: 'quarta', nome: 'Quarta-feira' },
      { chave: 'quinta', nome: 'Quinta-feira' },
      { chave: 'sexta', nome: 'Sexta-feira' }
    ];

    let htmlCronogramaCols = '';
    
    diasSemana.forEach(dia => {
      const infoDia = cronograma ? cronograma[dia.chave] : null;
      
      let htmlRotinas = '';
      if (infoDia && infoDia.rotinas && infoDia.rotinas.length > 0) {
        infoDia.rotinas.forEach(r => {
          htmlRotinas += `
            <div class="p-2.5 bg-emerald-50/60 border border-emerald-200/80 rounded-xl text-xs text-emerald-900 font-semibold leading-tight shadow-2xs">
              ${r}
            </div>
          `;
        });
      } else {
        htmlRotinas = `<div class="p-2.5 bg-gray-50 border border-gray-100 rounded-xl text-xs text-gray-400 italic">Sem rotinas fixadas</div>`;
      }

      htmlCronogramaCols += `
        <div class="bg-white rounded-2xl p-4 border border-gray-200 shadow-2xs flex flex-col justify-between space-y-4">
          <div>
            <h4 class="font-extrabold text-[#1C275C] text-sm">${dia.nome}</h4>
            <p class="text-xs font-bold text-[#00A3FF] mt-0.5 mb-3 leading-snug">${infoDia ? infoDia.foco : 'A definir'}</p>
            
            <div class="space-y-2">
              ${htmlRotinas}
            </div>
          </div>

          ${infoDia && infoDia.meta ? `
            <div class="pt-3 border-t border-gray-100 bg-gray-50/50 p-2.5 rounded-xl border border-gray-100">
              <p class="text-[11px] font-medium text-gray-500"><strong class="text-gray-700 font-bold">Meta:</strong> ${infoDia.meta}</p>
            </div>
          ` : ''}
        </div>
      `;
    });

    html += `
      <div class="bringit-card overflow-hidden bg-white border border-gray-200/90 rounded-2xl shadow-sm transition hover:border-[#00A3FF]">
        <!-- Linha do Analista (Cabeçalho Recolhível) -->
        <button onclick="toggleCronogramaAnalista('${membro.id}')" class="w-full p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white hover:bg-sky-50/40 transition-colors text-left">
          
          <div class="flex items-center gap-4">
            <img src="${membro.fotoUrl || 'https://via.placeholder.com/150'}" alt="${membro.nome}" loading="lazy" class="w-12 h-12 rounded-full object-cover border-2 border-[#00A3FF] shadow-xs bg-gray-100 flex-shrink-0">
            
            <div>
              <div class="flex items-center gap-2.5 flex-wrap">
                <h3 class="font-extrabold text-[#1C275C] text-lg leading-tight">${membro.nome}</h3>
                <span class="inline-block px-2.5 py-0.5 text-[10px] font-black rounded-full border uppercase tracking-wider ${estiloTagEscopo}">
                  ${membro.escopo || 'Geral'}
                </span>
              </div>
              <p class="text-xs font-bold text-gray-500 mt-0.5">${membro.cargo}</p>
            </div>
          </div>

          <div class="flex items-center gap-4 flex-wrap sm:flex-nowrap justify-between sm:justify-end w-full sm:w-auto">
            ${htmlLogos}
            
            <div class="flex items-center gap-2">
              <span class="text-xs font-bold text-[#00A3FF] bg-sky-50 px-3 py-1 rounded-xl border border-sky-100">
                Cronograma Semanal
              </span>
              <div class="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 shadow-2xs">
                <i id="crono-icon-${membro.id}" class="fa-solid fa-chevron-down text-xs transition-transform duration-200"></i>
              </div>
            </div>
          </div>
        </button>

        <!-- Área Expandida (Grid do Cronograma de Seg a Sex) -->
        <div id="crono-content-${membro.id}" class="hidden p-5 border-t border-gray-100 bg-gray-50/40">
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            ${htmlCronogramaCols}
          </div>
        </div>
      </div>
    `;
  });

  html += `</div>`;
  container.innerHTML = html;
}

function toggleCronogramaAnalista(id) {
  const content = document.getElementById(`crono-content-${id}`);
  const icon = document.getElementById(`crono-icon-${id}`);
  if (content && icon) {
    content.classList.toggle('hidden');
    icon.classList.toggle('rotate-180');
  }
}

// -------------------------------------------------------------
// Componente Reutilizável: Renderizador de Tabela de Rotinas
// -------------------------------------------------------------
function renderizarTabelaRotinasGenerica({ dados, titulo, icone, incluirResponsavel = false }) {
  const CORES_PERIODICIDADE = {
    'Diariamente': 'bg-emerald-50 text-emerald-700 border-emerald-200',
    'Semanal': 'bg-sky-50 text-[#00A3FF] border-sky-200',
    '2x Semana': 'bg-blue-50 text-blue-700 border-blue-200',
    'Quinzenal': 'bg-purple-50 text-purple-700 border-purple-200',
    'Conforme Demanda': 'bg-amber-50 text-amber-700 border-amber-200'
  };

  let html = `
    <div class="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm mt-6">
      <div class="p-5 border-b border-gray-100 bg-gray-50/50 flex items-center justify-between">
        <h3 class="font-bold text-[#1C275C] flex items-center gap-2 text-base">
          <i class="${icone} text-[#00A3FF]"></i> ${titulo}
        </h3>
        <span class="px-3 py-1 text-xs font-black text-[#00A3FF] bg-sky-50 border border-sky-100 rounded-full">${dados ? dados.length : 0} encontradas</span>
      </div>
      <div class="overflow-x-auto">
        <table class="w-full text-left text-sm">
          <thead class="bg-gray-50 text-[#1C275C] uppercase text-[11px] font-bold border-b border-gray-100">
            <tr>
              <th class="p-4 w-12 text-center"></th>
              <th class="p-4">ID</th>
              <th class="p-4">Atividade / Rotina</th>
              <th class="p-4">Tipo</th>
              ${incluirResponsavel ? `<th class="p-4">Responsável</th>` : ''}
              <th class="p-4">Periodicidade</th>
              ${!incluirResponsavel ? `<th class="p-4">Prioridade</th>` : ''}
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-100 text-gray-700">
  `;

  if (!dados || dados.length === 0) {
    html += `<tr><td colspan="${incluirResponsavel ? 6 : 6}" class="p-8 text-center text-gray-400">Nenhuma rotina encontrada.</td></tr>`;
  } else {
    dados.forEach((item, index) => {
      const pColor = item.prioridade === 'Alta' ? 'bg-red-50 text-red-600 border-red-100' : (item.prioridade === 'Média' ? 'bg-amber-50 text-amber-600 border-amber-100' : 'bg-gray-50 text-gray-600 border-gray-100');
      const estiloPeriodicidade = CORES_PERIODICIDADE[item.periodicidade] || 'bg-gray-100 text-gray-700 border-gray-200';
      
      const numMateriais = item.materiais ? item.materiais.length : 0;
      const numTutoriais = item.tutoriais ? item.tutoriais.length : 0;
      const temApoio = numMateriais > 0 || numTutoriais > 0;

      const fotoResp = item.fotoUrl || item.foto || 'https://via.placeholder.com/150';

      html += `
        <tr tabindex="0" role="button" aria-expanded="false" onclick="toggleLinhaRotinaGenerica('${abaAtual}', ${index})" onkeydown="if(event.key === 'Enter') toggleLinhaRotinaGenerica('${abaAtual}', ${index})" class="hover:bg-sky-50/30 transition-colors cursor-pointer">
          <td class="p-4 text-center">
            <i id="rotina-icon-${abaAtual}-${index}" class="fa-solid fa-chevron-right text-gray-400 text-xs transition-transform duration-200"></i>
          </td>
          <td class="p-4 font-bold text-gray-400">#${item.id}</td>
          <td class="p-4 font-semibold text-[#1C275C]">
            <div class="flex items-center gap-2">
              <span>${item.atividade}</span>
              ${temApoio ? `
                <span class="inline-flex items-center gap-1 px-2 py-0.5 text-[10px] font-extrabold bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-md shadow-2xs">
                  <i class="fa-solid fa-paperclip"></i>
                  ${numMateriais + numTutoriais} apoio
                </span>
              ` : ''}
            </div>
          </td>
          <td class="p-4"><span class="px-2.5 py-1 text-xs rounded-full bg-sky-50 text-[#00A3FF] font-semibold border border-sky-100">${item.tipo || 'Geral'}</span></td>
          
          ${incluirResponsavel ? `
            <td class="p-4">
              <div class="flex items-center gap-2">
                <img src="${fotoResp}" alt="${item.responsavel}" loading="lazy" class="w-6 h-6 rounded-full object-cover border border-[#00A3FF] bg-gray-100">
                <span class="font-bold text-[#1C275C]">${item.responsavel}</span>
              </div>
            </td>
          ` : ''}

          <td class="p-4"><span class="px-2.5 py-1 text-xs font-bold rounded-lg border ${estiloPeriodicidade}">${item.periodicidade}</span></td>
          
          ${!incluirResponsavel ? `
            <td class="p-4"><span class="px-2.5 py-1 text-xs font-bold rounded-full border ${pColor}">${item.prioridade || 'Média'}</span></td>
          ` : ''}
        </tr>

        <tr id="rotina-content-${abaAtual}-${index}" class="hidden bg-sky-50/20 border-t-0">
          <td colspan="6" class="p-5 pl-14">
            ${temApoio ? `
              <div class="space-y-3">
                ${numMateriais > 0 ? `
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

                ${numTutoriais > 0 ? `
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
  return html;
}

function toggleLinhaRotinaGenerica(aba, index) {
  const content = document.getElementById(`rotina-content-${aba}-${index}`);
  const icon = document.getElementById(`rotina-icon-${aba}-${index}`);
  if (content && icon) {
    content.classList.toggle('hidden');
    icon.classList.toggle('rotate-90');
  }
}

// -------------------------------------------------------------
// 2. Aba Marketplace
// -------------------------------------------------------------
function renderizarMarketplace(dados, container) {
  let html = ``;

  const divisaoContas = {
    atual: [
      { canal: "Mercado Livre", conta: "SC / SP / PR / MG", responsavel: "Maria Soares", fotoUrl: "maria.jpeg" },
      { canal: "Shopee", conta: "SC / SP / MG", responsavel: "Raqueline Souza", fotoUrl: "raqueline.jpg" },
      { canal: "Kabum", conta: "SC / SP / MG", responsavel: "Raqueline Souza", fotoUrl: "raqueline.jpg" },
      { canal: "TikTok", conta: "SC", responsavel: "Raqueline Souza", fotoUrl: "raqueline.jpg" },
      { canal: "Temu", conta: "SC", responsavel: "Maria Soares", fotoUrl: "maria.jpeg" },
      { canal: "Amazon 1P", conta: "SC", responsavel: "Raqueline Souza", fotoUrl: "raqueline.jpg" }
    ],
    proposta: [
      { canal: "Mercado Livre", conta: "SC / MG", responsavel: "Maria Soares", fotoUrl: "maria.jpeg", badge: "CD SC & MG" },
      { canal: "Mercado Livre", conta: "SP (PR) / SP", responsavel: "Daniela Lourenço", fotoUrl: "daniela.webp", badge: "CD SP & PR" },
      { canal: "Temu", conta: "SC", responsavel: "Daniela Lourenço", fotoUrl: "daniela.webp", badge: "Novos Canais" },
      { canal: "TikTok", conta: "Geral", responsavel: "Daniela Lourenço", fotoUrl: "daniela.webp", badge: "Novos Canais" },
      { canal: "Shopee", conta: "SC / SP / MG", responsavel: "Raqueline Souza", fotoUrl: "raqueline.jpg", badge: "Core Shopee" },
      { canal: "Kabum", conta: "SC / SP / MG", responsavel: "Raqueline Souza", fotoUrl: "raqueline.jpg", badge: "Core Tech" },
      { canal: "Amazon 1P", conta: "SC", responsavel: "Raqueline Souza", fotoUrl: "raqueline.jpg", badge: "1P B2B" }
    ]
  };

  const obterHtmlLogo = (nomeCanal) => {
    const urlLogo = typeof LOGOS_CANOES !== 'undefined' ? LOGOS_CANOES[nomeCanal] : null;
    if (urlLogo) {
      const isTikTok = nomeCanal === "TikTok";
      const estilo = isTikTok ? "h-6 w-20 object-cover scale-125" : "h-6 w-auto object-contain max-w-[80px]";
      return `<div class="h-7 flex items-center justify-start overflow-hidden"><img src="${urlLogo}" alt="${nomeCanal}" title="${nomeCanal}" loading="lazy" class="${estilo}"></div>`;
    }
    return `<span class="font-bold text-[#1C275C] text-xs">${nomeCanal}</span>`;
  };

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
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
          
          <!-- Alocação Atual -->
          <div class="bringit-card overflow-hidden bg-white border border-gray-200 rounded-2xl">
            <div class="p-4 bg-gray-50 border-b border-gray-200 font-extrabold text-xs uppercase tracking-wider text-gray-500">
              Alocação Atual
            </div>
            <div class="p-4 overflow-x-auto">
              <table class="w-full text-left text-xs">
                <thead class="bg-gray-50 text-gray-400 font-bold uppercase border-b border-gray-100">
                  <tr>
                    <th class="p-3">Canal</th>
                    <th class="p-3">Conta/UF</th>
                    <th class="p-3">Responsável Atual</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-gray-100">
                  ${divisaoContas.atual.map(c => `
                    <tr class="hover:bg-gray-50 transition-colors">
                      <td class="p-3">${obterHtmlLogo(c.canal)}</td>
                      <td class="p-3 text-gray-500 font-medium">${c.conta}</td>
                      <td class="p-3">
                        <div class="flex items-center gap-2.5">
                          <img src="${c.fotoUrl}" alt="${c.responsavel}" class="w-8 h-8 rounded-full object-cover border-2 border-[#00A3FF] shadow-2xs bg-gray-100 flex-shrink-0">
                          <span class="font-extrabold text-[#1C275C] text-xs">${c.responsavel}</span>
                        </div>
                      </td>
                    </tr>
                  `).join('')}
                </tbody>
              </table>
            </div>
          </div>

          <!-- Nova Proposta Recomendada -->
          <div class="bringit-card overflow-hidden bg-white border-2 border-[#00A3FF] rounded-2xl shadow-xs">
            <div class="p-4 bg-sky-50 border-b border-sky-100 font-extrabold text-xs uppercase tracking-wider text-[#00A3FF] flex items-center justify-between">
              <span>Nova Proposta Recomendada</span>
              <span class="px-2.5 py-0.5 bg-[#00A3FF] text-white rounded-md text-[10px] font-black tracking-wider">Otimizada</span>
            </div>
            <div class="p-4 overflow-x-auto">
              <table class="w-full text-left text-xs">
                <thead class="bg-sky-50/50 text-[#1C275C] font-bold uppercase border-b border-sky-100">
                  <tr>
                    <th class="p-3">Canal</th>
                    <th class="p-3">Conta/UF</th>
                    <th class="p-3">Novo Responsável</th>
                    <th class="p-3">Foco</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-gray-100">
                  ${divisaoContas.proposta.map(c => `
                    <tr class="hover:bg-sky-50/50 transition-colors">
                      <td class="p-3">${obterHtmlLogo(c.canal)}</td>
                      <td class="p-3 text-gray-500 font-medium">${c.conta}</td>
                      <td class="p-3">
                        <div class="flex items-center gap-2.5">
                          <img src="${c.fotoUrl}" alt="${c.responsavel}" class="w-8 h-8 rounded-full object-cover border-2 border-[#00A3FF] shadow-2xs bg-gray-100 flex-shrink-0">
                          <span class="font-extrabold text-[#00A3FF] text-xs">${c.responsavel}</span>
                        </div>
                      </td>
                      <td class="p-3"><span class="px-2.5 py-1 text-[10px] font-black bg-sky-100 text-sky-800 border border-sky-200 rounded-md shadow-2xs">${c.badge}</span></td>
                    </tr>
                  `).join('')}
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </div>
    </div>
  `;

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

  html += renderizarTabelaRotinasGenerica({
    dados: dados,
    titulo: "Rotinas e Atividades de Marketplace",
    icone: "fa-solid fa-tasks",
    incluirResponsavel: false
  });

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

// -------------------------------------------------------------
// 3. Aba Site
// -------------------------------------------------------------
function renderizarSite(dados, container) {
  container.innerHTML = renderizarTabelaRotinasGenerica({
    dados: dados,
    titulo: "Rotinas e Operações do Site",
    icone: "fa-solid fa-globe",
    incluirResponsavel: true
  });
}

// -------------------------------------------------------------
// Módulo Geral de Filtros
// -------------------------------------------------------------
function gerarFiltrosPorColuna() {
  const container = document.getElementById('containerFiltrosColunas');
  if (!container) return;
  container.innerHTML = "";

  const dados = obterDadosAbaAtual();
  if (!dados || dados.length === 0) return;

  const chavesIgnoradas = ['id', 'fotoUrl', 'responsabilidades', 'materiais', 'tutoriais', 'email', 'canaisResponsaveis', 'foto', 'atividade'];
  
  const chavesUnicas = new Set();
  dados.forEach(item => {
    Object.keys(item).forEach(k => {
      if (!chavesIgnoradas.includes(k)) chavesUnicas.add(k);
    });
  });

  chavesUnicas.forEach(chave => {
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