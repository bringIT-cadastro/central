// marketplace.js - Atividades de Marketplace bringIT

const DATA_MARKETPLACE = {
  rotinas: [
    { id: "MKT-01", nome: "Novos Cadastros l Conexão de Novos Anúncios", tipo: "Puxada", periodicidade: "Diária", prioridade: "Alta", responsavel: "Maria Soares" },
    { id: "MKT-02", nome: "Ponte de Comando l Novos Anúncios", tipo: "Puxada", periodicidade: "Diária", prioridade: "Alta", responsavel: "Maria Soares" },
    { id: "MKT-03", nome: "Ponte de Comando l Atualização de Atributos", tipo: "Puxada", periodicidade: "Semanal", prioridade: "Média", responsavel: "Raqueline Souza" },
    { id: "MKT-04", nome: "Ponte de Comando l Pausa de Anúncios", tipo: "Empurrada", periodicidade: "Sob Demanda", prioridade: "Média", responsavel: "Raqueline Souza" },
    { id: "MKT-05", nome: "Ponte de Comando l Reativação de Anúncios", tipo: "Empurrada", periodicidade: "Sob Demanda", prioridade: "Média", responsavel: "Raqueline Souza" },
    { id: "MKT-06", nome: "Conferência e correção de cadastros nos canais, produtos inativos/bloqueados", tipo: "Puxada", periodicidade: "Semanal", prioridade: "Alta", responsavel: "Maria Soares" },
    { id: "MKT-07", nome: "Mercado Livre l Manutenção e correção dos anúncios \"Em Revisão\"", tipo: "Puxada", periodicidade: "Quinzenal", prioridade: "Alta", responsavel: "Maria Soares" },
    { id: "MKT-08", nome: "Acompanhamento dos indicadores dos marketplaces e identificação de correções", tipo: "Puxada", periodicidade: "Semanal", prioridade: "Média", responsavel: "Raqueline Souza" },
    { id: "MKT-09", nome: "Manutenção de anúncios para inativação de produtos - Inativar e acompanhar pausa", tipo: "Empurrada", periodicidade: "Sob Demanda", prioridade: "Baixa", responsavel: "Raqueline Souza" },
    { id: "MKT-10", nome: "Service Desk l Fila - Conexão de Anúncios", tipo: "Empurrada", periodicidade: "Diária", prioridade: "Alta", responsavel: "Maria Soares" },
    { id: "MKT-11", nome: "Service Desk l Fila - Correção de Anúncios", tipo: "Empurrada", periodicidade: "Diária", prioridade: "Alta", responsavel: "Raqueline Souza" },
    { id: "MKT-12", nome: "Service Desk l Fila - RMA Erro de Anúncios", tipo: "Empurrada", periodicidade: "Diária", prioridade: "Alta", responsavel: "Maria Soares" },
    { id: "MKT-13", nome: "Service Desk l Pausar ou Ativar Anúncios", tipo: "Empurrada", periodicidade: "Diária", prioridade: "Média", responsavel: "Raqueline Souza" },
    { id: "MKT-14", nome: "Validação de SKUs que chegam em importações", tipo: "Puxada", periodicidade: "Pontual", prioridade: "Média", responsavel: "Maria Soares" },
    { id: "MKT-15", nome: "Manutenção vínculo de identidade Platz x Canal", tipo: "Puxada", periodicidade: "Mensal", prioridade: "Média", responsavel: "Raqueline Souza" },
    { id: "MKT-16", nome: "Criação e atualização de documentação dos canais", tipo: "Puxada", periodicidade: "Mensal", prioridade: "Baixa", responsavel: "Maria Soares" },
    { id: "MKT-17", nome: "Realizar conexão de SKUs ainda sem conexões nos canais", tipo: "Puxada", periodicidade: "Semanal", prioridade: "Alta", responsavel: "Maria Soares" },
    { id: "MKT-18", nome: "Acompanhamento de performance dos anúncios - Visitas, Impressões, Cliques", tipo: "Puxada", periodicidade: "Semanal", prioridade: "Média", responsavel: "Raqueline Souza" },
    { id: "MKT-19", nome: "Preenchimento e acompanhamento de KPIs", tipo: "Puxada", periodicidade: "Semanal", prioridade: "Média", responsavel: "Equipe Cadastro" },
    { id: "MKT-20", nome: "Acompanhamento e Análise de devoluções de cada canal", tipo: "Puxada", periodicidade: "Semanal", prioridade: "Alta", responsavel: "Maria Soares" }
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
      <!-- REDISTRIBUIÇÃO DE CONTAS & CANAIS -->
      <div id="containerRedistribuicaoContasMarketplace">
        ${renderizarEstruturaRedistribuicaoHtml()}
      </div>

      <!-- TABELA DE ROTINAS -->
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

// Renderizador fiel da tabela de Redistribuição idêntico à imagem
function renderizarEstruturaRedistribuicaoHtml() {
  const obterHtmlLogo = (nomeCanal) => {
    const urlLogo = (typeof LOGOS_CANOES !== 'undefined' && LOGOS_CANOES[nomeCanal]) ? LOGOS_CANOES[nomeCanal] : null;
    if (urlLogo) {
      const isTikTok = nomeCanal === "TikTok" || nomeCanal === "TikTok Shop";
      const estilo = isTikTok ? "h-5 w-20 object-cover scale-110" : "h-5 w-auto object-contain max-w-[80px]";
      return `<div class="h-6 flex items-center justify-start overflow-hidden"><img src="${urlLogo}" alt="${nomeCanal}" title="${nomeCanal}" loading="lazy" class="${estilo}"></div>`;
    }
    return `<span class="font-bold text-[#1C275C] text-xs">${nomeCanal}</span>`;
  };

  const dadosAtual = (typeof DATA_ANALISE !== 'undefined' && DATA_ANALISE.divisaoContas && DATA_ANALISE.divisaoContas.atual) 
    ? DATA_ANALISE.divisaoContas.atual 
    : [];

  const dadosProposta = (typeof DATA_ANALISE !== 'undefined' && DATA_ANALISE.divisaoContas && DATA_ANALISE.divisaoContas.proposta) 
    ? DATA_ANALISE.divisaoContas.proposta 
    : [];

  const htmlAtual = dadosAtual.map(c => `
    <tr class="hover:bg-gray-50 transition-colors border-b border-gray-50">
      <td class="p-3 font-bold">${obterHtmlLogo(c.canal)}</td>
      <td class="p-3 text-gray-500 font-medium text-xs">${c.conta}</td>
      <td class="p-3">
        <div class="flex items-center gap-2.5">
          <img src="${c.fotoUrl}" alt="${c.responsavel}" class="w-7 h-7 rounded-full object-cover border-2 border-[#00A3FF] shadow-xs bg-gray-100 flex-shrink-0">
          <span class="font-extrabold text-[#1C275C] text-xs">${c.responsavel}</span>
        </div>
      </td>
    </tr>
  `).join('');

  const htmlProposta = dadosProposta.map(c => `
    <tr class="hover:bg-sky-50/40 transition-colors border-b border-gray-50">
      <td class="p-3 font-bold">${obterHtmlLogo(c.canal)}</td>
      <td class="p-3 text-gray-500 font-medium text-xs">${c.conta}</td>
      <td class="p-3">
        <div class="flex items-center gap-2.5">
          <img src="${c.fotoUrl}" alt="${c.responsavel}" class="w-7 h-7 rounded-full object-cover border-2 border-[#00A3FF] shadow-xs bg-gray-100 flex-shrink-0">
          <span class="font-extrabold text-[#00A3FF] text-xs">${c.responsavel}</span>
        </div>
      </td>
      <td class="p-3">
        <span class="px-2 py-0.5 text-[9px] font-black uppercase bg-sky-100 text-sky-800 rounded-md shadow-2xs">${c.badge}</span>
      </td>
    </tr>
  `).join('');

  return `
    <div class="bringit-card overflow-hidden bg-white transition-all shadow-2xs border border-gray-200 rounded-2xl">
      <div class="p-5 bg-gradient-to-r from-gray-50 via-white to-white flex items-center justify-between border-b border-gray-100">
        <h3 class="text-base font-extrabold text-[#1C275C] flex items-center gap-2.5">
          <i class="fa-solid fa-users-gear text-sky-600"></i>
          5. Estudo de Redistribuição de Contas & Canais
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
          
          <!-- ALOCAÇÃO ATUAL -->
          <div class="bringit-card overflow-hidden border border-gray-200 rounded-xl bg-white">
            <div class="p-3 bg-gray-50 border-b border-gray-200 font-extrabold text-xs uppercase tracking-wider text-gray-500">
              ALOCAÇÃO ATUAL
            </div>
            <div class="p-2 overflow-x-auto">
              <table class="w-full text-left text-xs">
                <thead class="bg-gray-50/60 text-gray-400 font-bold uppercase border-b border-gray-100">
                  <tr>
                    <th class="p-3">CANAL</th>
                    <th class="p-3">CONTA/UF</th>
                    <th class="p-3">RESPONSÁVEL ATUAL</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-gray-50">
                  ${htmlAtual}
                </tbody>
              </table>
            </div>
          </div>

          <!-- NOVA PROPOSTA RECOMENDADA -->
          <div class="bringit-card overflow-hidden border-2 border-[#00A3FF] rounded-xl bg-white">
            <div class="p-3 bg-sky-50 border-b border-sky-100 font-extrabold text-xs uppercase tracking-wider text-[#00A3FF] flex items-center justify-between">
              <span>NOVA PROPOSTA RECOMENDADA</span>
              <span class="px-2 py-0.5 bg-[#00A3FF] text-white rounded text-[9px] font-black uppercase">OTIMIZADA</span>
            </div>
            <div class="p-2 overflow-x-auto">
              <table class="w-full text-left text-xs">
                <thead class="bg-sky-50/40 text-[#1C275C] font-bold uppercase border-b border-sky-100">
                  <tr>
                    <th class="p-3">CANAL</th>
                    <th class="p-3">CONTA/UF</th>
                    <th class="p-3">NOVO RESPONSÁVEL</th>
                    <th class="p-3">FOCO</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-gray-50">
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

function renderizarLinhasRotinasMarketplace(lista) {
  if (!lista || lista.length === 0) {
    return `<tr><td colspan="6" class="p-8 text-center text-gray-400 font-medium">Nenhuma rotina encontrada.</td></tr>`;
  }

  return lista.map(r => `
    <tr class="hover:bg-gray-50/80 transition-colors">
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
  `).join('');
}