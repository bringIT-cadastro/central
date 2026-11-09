// marketplace.js - Operações de Marketplace bringIT

const DATA_MARKETPLACE = {
  rotinas: [
    { id: "MKT-01", nome: "Novos Cadastros l Conexão de Novos Anúncios", tipo: "Puxada", periodicidade: "Diária", prioridade: "Alta", responsavel: "Maria Soares", tutorialUrl: "#", materialApoio: "Checklist de homologação e validação EAN/SKU no Platz." },
    { id: "MKT-02", nome: "Ponte de Comando l Novos Anúncios", tipo: "Puxada", periodicidade: "Diária", prioridade: "Alta", responsavel: "Maria Soares", tutorialUrl: "#", materialApoio: "Planilha de monitoramento de fila de publicação." },
    { id: "MKT-03", nome: "Ponte de Comando l Atualização de Atributos", tipo: "Puxada", periodicidade: "Semanal", prioridade: "Média", responsavel: "Raqueline Souza", tutorialUrl: "#", materialApoio: "Guia de atributos obrigatórios por categoria no Meli." },
    { id: "MKT-04", nome: "Ponte de Comando l Pausa de Anúncios", tipo: "Empurrada", periodicidade: "Sob Demanda", prioridade: "Média", responsavel: "Raqueline Souza", tutorialUrl: "#", materialApoio: "Procedimento operacional padrão de pausa por indisponibilidade." },
    { id: "MKT-05", nome: "Ponte de Comando l Reativação de Anúncios", tipo: "Empurrada", periodicidade: "Sob Demanda", prioridade: "Média", responsavel: "Raqueline Souza", tutorialUrl: "#", materialApoio: "Instruções de reativação com atualização de preço e estoque." },
    { id: "MKT-06", nome: "Conferência e correção de cadastros nos canais, produtos inativos/bloqueados", tipo: "Puxada", periodicidade: "Semanal", prioridade: "Alta", responsavel: "Maria Soares", tutorialUrl: "#", materialApoio: "Relatório semanal de auditoria de anúncios inativos." },
    { id: "MKT-07", nome: "Mercado Livre l Manutenção e correção dos anúncios \"Em Revisão\"", tipo: "Puxada", periodicidade: "Quinzenal", prioridade: "Alta", responsavel: "Maria Soares", tutorialUrl: "#", materialApoio: "Painel de tratamento de infrações de marcas e patentes no Meli." },
    { id: "MKT-08", nome: "Acompanhamento dos indicadores dos marketplaces e identificação de correções", tipo: "Puxada", periodicidade: "Semanal", prioridade: "Média", responsavel: "Raqueline Souza", tutorialUrl: "#", materialApoio: "Dashboard de KPIs de saúde de conta." },
    { id: "MKT-09", nome: "Manutenção de anúncios para inativação de produtos - Inativar e acompanhar pausa", tipo: "Empurrada", periodicidade: "Sob Demanda", prioridade: "Baixa", responsavel: "Raqueline Souza", tutorialUrl: "#", materialApoio: "Fluxo de descontinuação de catálogo." },
    { id: "MKT-10", nome: "Service Desk l Fila - Conexão de Anúncios", tipo: "Empurrada", periodicidade: "Diária", prioridade: "Alta", responsavel: "Maria Soares", tutorialUrl: "#", materialApoio: "Fila de chamados do Jira / Service Desk para conexão." },
    { id: "MKT-11", nome: "Service Desk l Fila - Correção de Anúncios", tipo: "Empurrada", periodicidade: "Diária", prioridade: "Alta", responsavel: "Raqueline Souza", tutorialUrl: "#", materialApoio: "Manual de resolução de chamados de divergência de títulos e fotos." },
    { id: "MKT-12", nome: "Service Desk l Fila - RMA Erro de Anúncios", tipo: "Empurrada", periodicidade: "Diária", prioridade: "Alta", responsavel: "Maria Soares", tutorialUrl: "#", materialApoio: "Procedimento de alinhamento com garantia e SAC." },
    { id: "MKT-13", nome: "Service Desk l Pausar ou Ativar Anúncios", tipo: "Empurrada", periodicidade: "Diária", prioridade: "Média", responsavel: "Raqueline Souza", tutorialUrl: "#", materialApoio: "Regras de bloqueio rápido por divergência tributária." },
    { id: "MKT-14", nome: "Validação de SKUs que chegam em importações", tipo: "Puxada", periodicidade: "Pontual", prioridade: "Média", responsavel: "Maria Soares", tutorialUrl: "#", materialApoio: "Checklist de pré-cadastro de remessas internacionais." },
    { id: "MKT-15", nome: "Manutenção vínculo de identidade Platz x Canal", tipo: "Puxada", periodicidade: "Mensal", prioridade: "Média", responsavel: "Raqueline Souza", tutorialUrl: "#", materialApoio: "Mapeamento de IDs de anúncio x SKUs Pai no ERP." },
    { id: "MKT-16", nome: "Criação e atualização de documentação dos canais", tipo: "Puxada", periodicidade: "Mensal", prioridade: "Baixa", responsavel: "Maria Soares", tutorialUrl: "#", materialApoio: "Repositório do Notion de regras comerciais por marketplace." },
    { id: "MKT-17", nome: "Realizar conexão de SKUs ainda sem conexões nos canais", tipo: "Puxada", periodicidade: "Semanal", prioridade: "Alta", responsavel: "Maria Soares", tutorialUrl: "#", materialApoio: "Relatório de lacunas de publicação no portfólio ativo." },
    { id: "MKT-18", nome: "Acompanhamento de performance dos anúncios - Visitas, Impressões, Cliques", tipo: "Puxada", periodicidade: "Semanal", prioridade: "Média", responsavel: "Raqueline Souza", tutorialUrl: "#", materialApoio: "Painel de conversão e campanhas de Ads." },
    { id: "MKT-19", nome: "Preenchimento e acompanhamento de KPIs", tipo: "Puxada", periodicidade: "Semanal", prioridade: "Média", responsavel: "Equipe Cadastro", tutorialUrl: "#", materialApoio: "Planilha Mestra de KPIs operacionais da equipe." },
    { id: "MKT-20", nome: "Acompanhamento e Análise de devoluções de cada canal", tipo: "Puxada", periodicidade: "Semanal", prioridade: "Alta", responsavel: "Maria Soares", tutorialUrl: "#", materialApoio: "Relatório de devoluções por motivo de erro de anúncio." }
  ]
};

function renderizarMarketplace() {
  renderizarAbaMarketplace();
}

function renderizarAbaMarketplace() {
  const container = document.getElementById('conteudoAba');
  if (!container) return;

  container.innerHTML = `
    <div class="space-y-6">
      
      <!-- 1ª SEÇÃO: REDISTRIBUIÇÃO DE CONTAS & CANAIS -->
      <div id="containerRedistribuicaoContasMarketplace">
        ${renderizarEstruturaRedistribuicaoHtml()}
      </div>

      <!-- 2ª SEÇÃO: FILTROS CRÍTICOS COM AÇÃO DE COPIAR -->
      <div class="space-y-4">
        ${renderizarFiltrosCriticosMarketplace()}
      </div>

      <!-- 3ª SEÇÃO: ROTINAS E ATIVIDADES COM EXPANSAO (MATERIAIS E TUTORIAIS) -->
      <div class="bringit-card bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-2xs space-y-4 p-6">
        <div class="flex items-center justify-between border-b border-gray-100 pb-4">
          <div class="flex items-center gap-2">
            <i class="fa-solid fa-list-check text-[#00A3FF] text-lg"></i>
            <h3 class="text-base font-extrabold text-[#1C275C]">Rotinas e Atividades de Marketplace</h3>
          </div>
          <span id="badgeContadorRotinas" class="px-3 py-1 bg-sky-50 text-[#00A3FF] border border-sky-100 rounded-full text-xs font-black">
            ${DATA_MARKETPLACE.rotinas.length} encontradas
          </span>
        </div>

        <div class="overflow-x-auto">
          <table class="w-full text-left text-xs">
            <thead class="bg-gray-50 text-gray-400 font-bold uppercase border-b border-gray-200">
              <tr>
                <th class="p-3 w-8"></th>
                <th class="p-3 text-center">ID</th>
                <th class="p-3">Atividade / Rotina</th>
                <th class="p-3">Responsável</th>
                <th class="p-3">Tipo</th>
                <th class="p-3">Periodicidade</th>
                <th class="p-3 text-center">Prioridade</th>
              </tr>
            </thead>
            <tbody id="tabelaRotinasMarketplace" class="divide-y divide-gray-100">
              ${renderizarLinhasRotinasMarketplace(DATA_MARKETPLACE.rotinas)}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  `;

  if (typeof atualizarContadorHeader === 'function') {
    atualizarContadorHeader(DATA_MARKETPLACE.rotinas.length);
  }
}

// Renderiza os Filtros Críticos mantendo a mecânica original de COPIAR URL
function renderizarFiltrosCriticosMarketplace() {
  const listaFiltros = (typeof DATA_FILTROS !== 'undefined') ? DATA_FILTROS : [];
  
  const filtrosML = listaFiltros.filter(f => f.categoriaPrincipal === "ML" || f.canal === "Mercado Livre");
  const filtrosShopee = listaFiltros.filter(f => f.categoriaPrincipal === "Shopee" || f.canal === "Shopee");

  return `
    <!-- Mercado Livre -->
    <div class="bringit-card bg-amber-50 border-amber-200 text-amber-900 rounded-2xl p-5 border shadow-2xs space-y-3">
      <div class="flex items-center justify-between cursor-pointer" onclick="toggleFiltroCritico('fc-mkt-ml')">
        <div class="flex items-center gap-3">
          <div class="w-9 h-9 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center font-black text-sm">
            <i class="fa-solid fa-filter"></i>
          </div>
          <div>
            <h4 class="font-extrabold text-[#1C275C] text-sm">Filtros Críticos Mercado Livre (${filtrosML.length} Atalhos)</h4>
            <p class="text-xs text-gray-500">Clique para copiar o link oficial do filtro diretamente</p>
          </div>
        </div>
        <div class="flex items-center gap-2">
          <span class="text-xs font-bold text-gray-500 px-3 py-1 bg-white/80 rounded-lg border border-gray-200">Clique para expandir</span>
          <i id="seta-fc-mkt-ml" class="fa-solid fa-chevron-down text-xs text-gray-500 transition-transform"></i>
        </div>
      </div>

      <div id="fc-mkt-ml" class="hidden pt-3 border-t border-gray-200/60 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
        ${filtrosML.map((f, idx) => `
          <div class="p-3 bg-white rounded-xl border border-amber-200 flex flex-col justify-between space-y-2">
            <div>
              <span class="font-extrabold text-[#1C275C] text-xs block">${f.nome}</span>
              <span class="text-[10px] text-gray-400 uppercase font-black">Mercado Livre</span>
            </div>
            <div class="flex items-center justify-between pt-1 border-t border-gray-100">
              <button onclick="copiarUrlFiltro('${f.url}', 'feedback-ml-${idx}')" class="px-2.5 py-1 bg-amber-100 hover:bg-amber-200 text-amber-800 font-bold text-[11px] rounded-lg transition flex items-center gap-1.5 w-full justify-center">
                <i class="fa-regular fa-copy"></i>
                <span>Copiar Link</span>
              </button>
            </div>
            <span id="feedback-ml-${idx}" class="text-[10px] font-bold text-emerald-600 text-center hidden">Link copiado!</span>
          </div>
        `).join('')}
      </div>
    </div>

    <!-- Shopee -->
    <div class="bringit-card bg-orange-50 border-orange-200 text-orange-900 rounded-2xl p-5 border shadow-2xs space-y-3">
      <div class="flex items-center justify-between cursor-pointer" onclick="toggleFiltroCritico('fc-mkt-shopee')">
        <div class="flex items-center gap-3">
          <div class="w-9 h-9 rounded-xl bg-orange-100 text-orange-700 flex items-center justify-center font-black text-sm">
            <i class="fa-solid fa-filter"></i>
          </div>
          <div>
            <h4 class="font-extrabold text-[#1C275C] text-sm">Filtros Críticos Shopee (${filtrosShopee.length} Atalhos)</h4>
            <p class="text-xs text-gray-500">Clique para copiar o link oficial do filtro diretamente</p>
          </div>
        </div>
        <div class="flex items-center gap-2">
          <span class="text-xs font-bold text-gray-500 px-3 py-1 bg-white/80 rounded-lg border border-gray-200">Clique para expandir</span>
          <i id="seta-fc-mkt-shopee" class="fa-solid fa-chevron-down text-xs text-gray-500 transition-transform"></i>
        </div>
      </div>

      <div id="fc-mkt-shopee" class="hidden pt-3 border-t border-gray-200/60 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
        ${filtrosShopee.map((f, idx) => `
          <div class="p-3 bg-white rounded-xl border border-orange-200 flex flex-col justify-between space-y-2">
            <div>
              <span class="font-extrabold text-[#1C275C] text-xs block">${f.nome}</span>
              <span class="text-[10px] text-gray-400 uppercase font-black">Shopee</span>
            </div>
            <div class="flex items-center justify-between pt-1 border-t border-gray-100">
              <button onclick="copiarUrlFiltro('${f.url}', 'feedback-shopee-${idx}')" class="px-2.5 py-1 bg-orange-100 hover:bg-orange-200 text-orange-800 font-bold text-[11px] rounded-lg transition flex items-center gap-1.5 w-full justify-center">
                <i class="fa-regular fa-copy"></i>
                <span>Copiar Link</span>
              </button>
            </div>
            <span id="feedback-shopee-${idx}" class="text-[10px] font-bold text-emerald-600 text-center hidden">Link copiado!</span>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

// Renderiza a Estrutura Comparativa com Avatares Perfeitamente Redondos
function renderizarEstruturaRedistribuicaoHtml() {
  const obterHtmlLogo = (nomeCanal) => {
    const urlLogo = typeof LOGOS_CANOES !== 'undefined' ? LOGOS_CANOES[nomeCanal] : null;
    if (urlLogo) {
      const isTikTok = nomeCanal === "TikTok" || nomeCanal === "TikTok Shop";
      const estilo = isTikTok ? "h-6 w-20 object-cover scale-125" : "h-6 w-auto object-contain max-w-[80px]";
      return `<div class="h-7 flex items-center justify-start overflow-hidden"><img src="${urlLogo}" alt="${nomeCanal}" title="${nomeCanal}" loading="lazy" class="${estilo}"></div>`;
    }
    return `<span class="font-bold text-[#1C275C] text-xs">${nomeCanal}</span>`;
  };

  const dadosAtual = [
    { canal: "Mercado Livre", conta: "SC / SP / PR / MG", responsavel: "Maria Soares", fotoUrl: "maria.jpeg" },
    { canal: "Shopee", conta: "SC / SP / MG", responsavel: "Raqueline Souza", fotoUrl: "raqueline.jpg" },
    { canal: "Kabum", conta: "SC / SP / MG", responsavel: "Raqueline Souza", fotoUrl: "raqueline.jpg" },
    { canal: "TikTok Shop", conta: "SC", responsavel: "Raqueline Souza", fotoUrl: "raqueline.jpg" },
    { canal: "Temu", conta: "SC", responsavel: "Maria Soares", fotoUrl: "maria.jpeg" },
    { canal: "Amazon", conta: "SC", responsavel: "Raqueline Souza", fotoUrl: "raqueline.jpg" }
  ];

  const dadosProposta = [
    { canal: "Mercado Livre", conta: "SC / MG", responsavel: "Maria Soares", badge: "CD SC & MG", fotoUrl: "maria.jpeg" },
    { canal: "Mercado Livre", conta: "SP (PR) / SP", responsavel: "Daniela Lourenço", badge: "CD SP & PR", fotoUrl: "daniela.webp" },
    { canal: "Temu", conta: "SC", responsavel: "Daniela Lourenço", badge: "Novos Canais", fotoUrl: "daniela.webp" },
    { canal: "TikTok Shop", conta: "Geral", responsavel: "Daniela Lourenço", badge: "Novos Canais", fotoUrl: "daniela.webp" },
    { canal: "Shopee", conta: "SC / SP / MG", responsavel: "Raqueline Souza", badge: "Core Shopee", fotoUrl: "raqueline.jpg" },
    { canal: "Kabum", conta: "SC / SP / MG", responsavel: "Raqueline Souza", badge: "Core Tech", fotoUrl: "raqueline.jpg" },
    { canal: "Amazon", conta: "SC", responsavel: "Raqueline Souza", badge: "1P B2B", fotoUrl: "raqueline.jpg" }
  ];

  const htmlAtual = dadosAtual.map(c => `
    <tr class="hover:bg-gray-50 transition-colors">
      <td class="p-3">${obterHtmlLogo(c.canal)}</td>
      <td class="p-3 text-gray-500 font-medium text-xs">${c.conta}</td>
      <td class="p-3">
        <div class="flex items-center gap-2.5">
          <div class="w-8 h-8 rounded-full overflow-hidden border-2 border-[#00A3FF] shadow-xs bg-gray-100 flex-shrink-0 flex items-center justify-center">
            <img src="${c.fotoUrl}" alt="${c.responsavel}" class="w-full h-full object-cover">
          </div>
          <span class="font-bold text-[#1C275C] text-xs">${c.responsavel}</span>
        </div>
      </td>
    </tr>
  `).join('');

  const htmlProposta = dadosProposta.map(c => `
    <tr class="hover:bg-sky-50/50 transition-colors">
      <td class="p-3">${obterHtmlLogo(c.canal)}</td>
      <td class="p-3 text-gray-500 font-medium text-xs">${c.conta}</td>
      <td class="p-3">
        <div class="flex items-center gap-2.5">
          <div class="w-8 h-8 rounded-full overflow-hidden border-2 border-[#00A3FF] shadow-xs bg-gray-100 flex-shrink-0 flex items-center justify-center">
            <img src="${c.fotoUrl}" alt="${c.responsavel}" class="w-full h-full object-cover">
          </div>
          <span class="font-extrabold text-[#00A3FF] text-xs">${c.responsavel}</span>
        </div>
      </td>
      <td class="p-3">
        <span class="px-2.5 py-1 text-[10px] font-extrabold bg-sky-100 text-sky-800 rounded-md shadow-2xs">${c.badge}</span>
      </td>
    </tr>
  `).join('');

  return `
    <div class="bringit-card overflow-hidden bg-white transition-all shadow-2xs border border-gray-200 rounded-2xl">
      <div class="p-5 bg-gradient-to-r from-gray-50 via-white to-white flex items-center justify-between border-b border-gray-100">
        <h3 class="text-base font-extrabold text-[#1C275C] flex items-center gap-2.5">
          <i class="fa-solid fa-users-gear text-sky-600"></i>
          Redistribuição de Contas & Canais
        </h3>
        
        <a href="https://docs.google.com/spreadsheets/d/1gXBlrApa9qVbqL2FeGQCY1BmX8o3zYrm/edit?gid=967994470#gid=967994470" 
           target="_blank" 
           class="px-3.5 py-1.5 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border border-emerald-300 font-bold text-xs rounded-xl transition flex items-center gap-2 shadow-2xs">
          <i class="fa-solid fa-file-excel text-emerald-600"></i>
          <span>Cronograma Handover (Sheets)</span>
          <i class="fa-solid fa-arrow-up-right-from-square text-[10px]"></i>
        </a>
      </div>

      <div class="p-5">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
          
          <div class="bringit-card overflow-hidden border border-gray-200 rounded-xl">
            <div class="p-3 bg-gray-50 border-b border-gray-200 font-extrabold text-xs uppercase tracking-wider text-gray-500">
              Alocação Atual
            </div>
            <div class="p-3 overflow-x-auto">
              <table class="w-full text-left text-xs">
                <thead class="bg-gray-50 text-gray-400 font-bold uppercase border-b">
                  <tr>
                    <th class="p-3">Canal</th>
                    <th class="p-3">Conta/UF</th>
                    <th class="p-3">Responsável Atual</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-gray-100">
                  ${htmlAtual}
                </tbody>
              </table>
            </div>
          </div>

          <div class="bringit-card overflow-hidden border-2 border-[#00A3FF] rounded-xl">
            <div class="p-3 bg-sky-50 border-b border-sky-100 font-extrabold text-xs uppercase tracking-wider text-[#00A3FF] flex items-center justify-between">
              <span>Nova Proposta Recomendada</span>
              <span class="px-2 py-0.5 bg-[#00A3FF] text-white rounded text-[10px] font-black uppercase">Otimizada</span>
            </div>
            <div class="p-3 overflow-x-auto">
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
                  ${htmlProposta}
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </div>
    </div>
  `;
}

// Renderiza as Linhas de Rotinas com Funcionalidade de Expansão (Materiais de Apoio / Tutoriais)
function renderizarLinhasRotinasMarketplace(lista) {
  if (!lista || lista.length === 0) {
    return `<tr><td colspan="7" class="p-8 text-center text-gray-400 font-medium">Nenhuma rotina encontrada.</td></tr>`;
  }

  return lista.map((r, idx) => `
    <tr class="hover:bg-gray-50/80 transition-colors cursor-pointer" onclick="toggleDetalheRotina('detalhe-rotina-${idx}')">
      <td class="p-3 text-center text-gray-400">
        <i id="seta-rotina-${idx}" class="fa-solid fa-chevron-right text-xs transition-transform"></i>
      </td>
      <td class="p-3 font-bold text-gray-400 text-center">${r.id}</td>
      <td class="p-3 font-bold text-[#1C275C]">${r.nome}</td>
      <td class="p-3 font-semibold text-gray-600">${r.responsavel}</td>
      <td class="p-3">
        <span class="px-2 py-0.5 text-[10px] font-extrabold rounded ${r.tipo === 'Puxada' ? 'bg-emerald-100 text-emerald-800' : 'bg-purple-100 text-purple-800'}">
          ${r.tipo}
        </span>
      </td>
      <td class="p-3 text-gray-500 font-medium">${r.periodicidade}</td>
      <td class="p-3 text-center">
        <span class="px-2 py-0.5 text-[10px] font-black rounded ${r.prioridade === 'Alta' ? 'bg-red-100 text-red-700' : r.prioridade === 'Média' ? 'bg-amber-100 text-amber-800' : 'bg-gray-100 text-gray-600'}">
          ${r.prioridade}
        </span>
      </td>
    </tr>
    <tr id="detalhe-rotina-${idx}" class="hidden bg-sky-50/40 border-b border-gray-100">
      <td colspan="7" class="p-4 pl-12 space-y-3">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div class="space-y-1">
            <span class="text-[10px] font-black uppercase text-[#00A3FF] tracking-wider block">Material de Apoio / Diretriz</span>
            <p class="text-xs text-gray-700 font-medium">${r.materialApoio || 'Documentação em atualização.'}</p>
          </div>
          ${r.tutorialUrl ? `
            <a href="${r.tutorialUrl}" target="_blank" onclick="event.stopPropagation()" class="px-3 py-1.5 bg-white hover:bg-sky-50 text-[#00A3FF] border border-sky-200 font-bold text-xs rounded-xl transition flex items-center gap-2 self-start sm:self-auto shadow-2xs">
              <i class="fa-solid fa-graduation-cap"></i>
              <span>Abrir Tutorial</span>
              <i class="fa-solid fa-arrow-up-right-from-square text-[10px]"></i>
            </a>
          ` : ''}
        </div>
      </td>
    </tr>
  `).join('');
}

function toggleFiltroCritico(id) {
  const el = document.getElementById(id);
  const seta = document.getElementById(`seta-${id}`);
  if (el) {
    el.classList.toggle('hidden');
    if (seta) seta.classList.toggle('rotate-180');
  }
}

function toggleDetalheRotina(id) {
  const el = document.getElementById(id);
  const idx = id.replace('detalhe-rotina-', '');
  const seta = document.getElementById(`seta-rotina-${idx}`);
  if (el) {
    el.classList.toggle('hidden');
    if (seta) seta.classList.toggle('rotate-90');
  }
}