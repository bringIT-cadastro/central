// Substitua a função renderizarMarketplace no seu app.js por esta:

function renderizarMarketplace(dados, container) {
  let html = ``;

  // Seção 1: Matriz de Responsáveis por Canal com Logo e Siglas de Estados
  if (typeof DATA_MARKETPLACE_CANOES !== 'undefined' && DATA_MARKETPLACE_CANOES.length > 0) {
    html += `
      <div class="mb-8">
        <h3 class="text-base font-extrabold text-[#1C275C] mb-4 flex items-center gap-2">
          <i class="fa-solid fa-store text-[#00A3FF]"></i> Matriz de Lojas & Responsáveis por Estado
        </h3>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
    `;
    
    DATA_MARKETPLACE_CANOES.forEach(item => {
      const urlLogo = (typeof LOGOS_CANOES !== 'undefined' && LOGOS_CANOES[item.canal]) ? LOGOS_CANOES[item.canal] : '';

      html += `
        <div class="bringit-card p-4 flex flex-col justify-between">
          <div>
            <div class="flex items-center justify-between gap-2 mb-3 h-10">
              <!-- Logo do Canal -->
              ${urlLogo ? `
                <div class="h-8 w-24 flex items-center justify-start">
                  <img src="${urlLogo}" alt="${item.canal}" class="max-h-full max-w-full object-contain">
                </div>
              ` : `<span class="font-bold text-[#1C275C] text-sm">${item.canal}</span>`}

              <!-- Sigla do Estado Padronizada -->
              <span class="px-2.5 py-1 text-xs font-black bg-sky-50 text-[#00A3FF] rounded-lg border border-sky-100 tracking-wider">
                ${item.conta}
              </span>
            </div>
            <p class="text-xs font-bold text-[#1C275C] mb-1">${item.canal}</p>
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

  // Seção 2: Tabela de Atividades
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