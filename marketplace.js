// marketplace.js - Mapeamento e Renderização da Distribuição de Contas & Canais

function renderizarEstudoRedistribuicaoContas() {
  const container = document.getElementById('containerRedistribuicaoContasMarketplace');
  if (!container) return;

  const obterHtmlLogo = (nomeCanal) => {
    const urlLogo = typeof LOGOS_CANOES !== 'undefined' ? LOGOS_CANOES[nomeCanal] : null;
    if (urlLogo) {
      const isTikTok = nomeCanal === "TikTok" || nomeCanal === "TikTok Shop";
      const estilo = isTikTok ? "h-6 w-20 object-cover scale-125" : "h-6 w-auto object-contain max-w-[80px]";
      return `<div class="h-7 flex items-center justify-start overflow-hidden"><img src="${urlLogo}" alt="${nomeCanal}" title="${nomeCanal}" loading="lazy" class="${estilo}"></div>`;
    }
    return `<span class="font-bold text-[#1C275C] text-xs">${nomeCanal}</span>`;
  };

  const htmlAtual = DATA_ANALISE.divisaoContas.atual.map(c => `
    <tr class="hover:bg-gray-50 transition-colors">
      <td class="p-3">${obterHtmlLogo(c.canal)}</td>
      <td class="p-3 text-gray-500 font-medium text-xs">${c.conta}</td>
      <td class="p-3">
        <div class="flex items-center gap-2.5">
          <img src="${c.fotoUrl}" alt="${c.responsavel}" class="w-8 h-8 rounded-full object-cover border-2 border-[#00A3FF] shadow-xs bg-gray-100 flex-shrink-0">
          <span class="font-bold text-[#1C275C] text-xs">${c.responsavel}</span>
        </div>
      </td>
    </tr>
  `).join('');

  const htmlProposta = DATA_ANALISE.divisaoContas.proposta.map(c => `
    <tr class="hover:bg-sky-50/50 transition-colors">
      <td class="p-3">${obterHtmlLogo(c.canal)}</td>
      <td class="p-3 text-gray-500 font-medium text-xs">${c.conta}</td>
      <td class="p-3">
        <div class="flex items-center gap-2.5">
          <img src="${c.fotoUrl}" alt="${c.responsavel}" class="w-8 h-8 rounded-full object-cover border-2 border-[#00A3FF] shadow-xs bg-gray-100 flex-shrink-0">
          <span class="font-extrabold text-[#00A3FF] text-xs">${c.responsavel}</span>
        </div>
      </td>
      <td class="p-3">
        <span class="px-2.5 py-1 text-[10px] font-extrabold bg-sky-100 text-sky-800 rounded-md shadow-2xs">${c.badge}</span>
      </td>
    </tr>
  `).join('');

  container.innerHTML = `
    <!-- SEÇÃO DE REDISTRIBUIÇÃO DE CONTAS -->
    <div class="bringit-card overflow-hidden bg-white transition-all shadow-2xs border border-gray-200 rounded-2xl">
      
      <!-- Cabeçalho da Seção com Botão de Atalho para o Sheets -->
      <div class="p-6 bg-gradient-to-r from-gray-50 via-white to-white flex items-center justify-between border-b border-gray-100">
        <h3 class="text-xl font-extrabold text-[#1C275C] flex items-center gap-2.5">
          <i class="fa-solid fa-users-gear text-sky-600"></i>
          Redistribuição de Contas & Canais
        </h3>
        
        <!-- Atalho Google Sheets -->
        <a href="https://docs.google.com/spreadsheets/d/1gXBlrApa9qVbqL2FeGQCY1BmX8o3zYrm/edit?gid=967994470#gid=967994470" 
           target="_blank" 
           class="px-3.5 py-1.5 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border border-emerald-300 font-bold text-xs rounded-xl transition flex items-center gap-2 shadow-2xs">
          <i class="fa-solid fa-file-excel text-emerald-600"></i>
          <span>Cronograma Handover (Sheets)</span>
          <i class="fa-solid fa-arrow-up-right-from-square text-[10px]"></i>
        </a>
      </div>

      <!-- Grid Comparativo 2 Colunas -->
      <div class="p-6">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
          
          <!-- Alocação Atual -->
          <div class="bringit-card overflow-hidden border border-gray-200 rounded-xl">
            <div class="p-4 bg-gray-50 border-b border-gray-200 font-extrabold text-xs uppercase tracking-wider text-gray-500">
              Alocação Atual
            </div>
            <div class="p-4 overflow-x-auto">
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

          <!-- Proposta Nova -->
          <div class="bringit-card overflow-hidden border-2 border-[#00A3FF] rounded-xl">
            <div class="p-4 bg-sky-50 border-b border-sky-100 font-extrabold text-xs uppercase tracking-wider text-[#00A3FF] flex items-center justify-between">
              <span>Nova Proposta Recomendada</span>
              <span class="px-2 py-0.5 bg-[#00A3FF] text-white rounded text-[10px] font-black uppercase">Otimizada</span>
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