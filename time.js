// time.js - Gestão e Rotinas do Time bringIT

const DATA_TIME_ROTINAS = [
  { id: "TIM-01", nome: "Alinhamento Semanal de Fila e SLA", tipo: "Reunião", periodicidade: "Semanal", prioridade: "Alta", responsavel: "Ingrid Fabris" },
  { id: "TIM-02", nome: "Revisão e Validação de Checklists Operacionais", tipo: "Auditoria", periodicidade: "Mensal", prioridade: "Média", responsavel: "Ingrid Fabris" },
  { id: "TIM-03", nome: "Acompanhamento de Dificuldades Técnicas e Gargalos", tipo: "Suporte", periodicidade: "Diária", prioridade: "Alta", responsavel: "Maria Soares" },
  { id: "TIM-04", nome: "Gestão de Capacitação e Treinamento do Time", tipo: "Treinamento", periodicidade: "Quinzenal", prioridade: "Média", responsavel: "Ingrid Fabris" }
];

function renderizarTime() {
  renderizarAbaTime();
}

function renderizarAbaTime() {
  const container = document.getElementById('conteudoAba');
  if (!container) return;

  // Garante a leitura dos membros do time do analise_data.js
  const fichas = (typeof DATA_ANALISE !== 'undefined' && DATA_ANALISE.fichasTime) ? DATA_ANALISE.fichasTime : [];

  const htmlMembros = fichas.map(m => `
    <div class="bringit-card bg-white rounded-2xl border border-gray-200 p-5 space-y-4 shadow-2xs hover:border-[#00A3FF] transition">
      <div class="flex items-center gap-3">
        <div class="w-12 h-12 rounded-full overflow-hidden border-2 border-[#00A3FF] shadow-xs bg-gray-100 flex-shrink-0 flex items-center justify-center">
          <img src="${m.fotoUrl}" alt="${m.nome}" class="w-full h-full object-cover">
        </div>
        <div>
          <h4 class="font-extrabold text-[#1C275C] text-sm">${m.nome}</h4>
          <span class="text-xs font-bold text-[#00A3FF] block">${m.cargo}</span>
        </div>
      </div>
      <p class="text-xs text-gray-500 leading-relaxed line-clamp-2">${m.resumoPerfil || ''}</p>
      <div class="pt-2 border-t border-gray-100 flex items-center justify-between text-xs">
        <span class="font-bold text-gray-400">10 Competências</span>
        <a href="gestao_time.html" class="font-extrabold text-[#00A3FF] hover:underline flex items-center gap-1">
          Ver Ficha Completa <i class="fa-solid fa-arrow-right text-[10px]"></i>
        </a>
      </div>
    </div>
  `).join('');

  container.innerHTML = `
    <div class="space-y-6">
      <!-- CARDS DOS MEMBROS DO TIME -->
      <div>
        <h3 class="text-sm font-extrabold text-gray-400 uppercase tracking-wider mb-3">Integrantes da Equipe</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          ${htmlMembros || '<p class="text-xs text-gray-400">Carregando membros do time...</p>'}
        </div>
      </div>

      <!-- TABELA DE ROTINAS DO TIME -->
      <div class="bringit-card bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-2xs space-y-4 p-6">
        <div class="flex items-center justify-between border-b border-gray-100 pb-4">
          <div class="flex items-center gap-2">
            <i class="fa-solid fa-users text-[#00A3FF] text-lg"></i>
            <h3 class="text-base font-extrabold text-[#1C275C]">Rotinas Internas do Time</h3>
          </div>
          <span class="px-3 py-1 bg-sky-50 text-[#00A3FF] border border-sky-100 rounded-full text-xs font-black">
            ${DATA_TIME_ROTINAS.length} encontradas
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
            <tbody class="divide-y divide-gray-100">
              ${DATA_TIME_ROTINAS.map(r => `
                <tr class="hover:bg-gray-50/80 transition-colors">
                  <td class="p-3 font-bold text-gray-400 text-center">${r.id}</td>
                  <td class="p-3 font-bold text-[#1C275C]">${r.nome}</td>
                  <td class="p-3 font-semibold text-gray-600">${r.responsavel}</td>
                  <td class="p-3"><span class="px-2 py-0.5 text-[10px] font-extrabold rounded bg-sky-100 text-sky-800">${r.tipo}</span></td>
                  <td class="p-3 text-gray-500 font-medium">${r.periodicidade}</td>
                  <td class="p-3 text-center"><span class="px-2 py-0.5 text-[10px] font-black rounded ${r.prioridade === 'Alta' ? 'bg-red-100 text-red-700' : 'bg-amber-100 text-amber-800'}">${r.prioridade}</span></td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `;

  if (typeof atualizarContadorHeader === 'function') {
    atualizarContadorHeader(DATA_TIME_ROTINAS.length);
  }
}