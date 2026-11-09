// marketplace.js - Central de Atividades Marketplace bringIT

const DATA_MARKETPLACE = {
  filtrosCriticos: [
    {
      titulo: "Filtros Críticos Mercado Livre",
      cor: "bg-amber-50 border-amber-200 text-amber-900",
      corIcone: "bg-amber-100 text-amber-700",
      filtros: [
        { nome: "Anúncios em Revisão", url: "#", desc: "Anúncios bloqueados ou sob análise da plataforma" },
        { nome: "Erros de Atributos Críticos", url: "#", desc: "Falta de especificações técnicas obrigatórias" },
        { nome: "Produtos sem Categoria", url: "#", desc: "Itens em categorias genéricas ou incorretas" }
      ]
    },
    {
      titulo: "Filtros Críticos Shopee",
      cor: "bg-orange-50 border-orange-200 text-orange-900",
      corIcone: "bg-orange-100 text-orange-700",
      filtros: [
        { nome: "Produtos Inativados por Violação", url: "#", desc: "Alertas de marca, palavras proibidas ou imagens" },
        { nome: "Falha de Sincronização Platz", url: "#", desc: "Divergência entre estoque/preço no ERP e Shopee" }
      ]
    }
  ],

  rotinas: [
    { id: "MKT-01", nome: "Novos Cadastros l Conexão de Novos Anúncios", tipo: "Puxada", periodicidade: "Diária", prioridade: "Alta", pilar: "Novos Cadastros", responsavel: "Maria Soares" },
    { id: "MKT-02", nome: "Ponte de Comando l Novos Anúncios", tipo: "Puxada", periodicidade: "Diária", prioridade: "Alta", pilar: "Novos Cadastros", responsavel: "Maria Soares" },
    { id: "MKT-03", nome: "Ponte de Comando l Atualização de Atributos", tipo: "Puxada", periodicidade: "Semanal", prioridade: "Média", pilar: "Melhoria de Catálogo", responsavel: "Raqueline Souza" },
    { id: "MKT-04", nome: "Ponte de Comando l Pausa de Anúncios", tipo: "Empurrada", periodicidade: "Sob Demanda", prioridade: "Média", pilar: "Melhoria de Catálogo", responsavel: "Raqueline Souza" },
    { id: "MKT-05", nome: "Ponte de Comando l Reativação de Anúncios", tipo: "Empurrada", periodicidade: "Sob Demanda", prioridade: "Média", pilar: "Melhoria de Catálogo", responsavel: "Raqueline Souza" },
    { id: "MKT-06", nome: "Conferência e correção de cadastros nos canais, produtos inativos/bloqueados", tipo: "Puxada", periodicidade: "Semanal", prioridade: "Alta", pilar: "Melhoria de Catálogo", responsavel: "Maria Soares" },
    { id: "MKT-07", nome: "Mercado Livre l Manutenção e correção dos anúncios \"Em Revisão\"", tipo: "Puxada", periodicidade: "Quinzenal", prioridade: "Alta", pilar: "Melhoria de Catálogo", responsavel: "Maria Soares" },
    { id: "MKT-08", nome: "Acompanhamento dos indicadores dos marketplaces e identificação de correções", tipo: "Puxada", periodicidade: "Semanal", prioridade: "Média", pilar: "Melhoria de Catálogo", responsavel: "Raqueline Souza" },
    { id: "MKT-09", nome: "Manutenção de anúncios para inativação de produtos - Inativar e acompanhar pausa", tipo: "Empurrada", periodicidade: "Sob Demanda", prioridade: "Baixa", pilar: "Melhoria de Catálogo", responsavel: "Raqueline Souza" },
    { id: "MKT-10", nome: "Service Desk l Fila - Conexão de Anúncios", tipo: "Empurrada", periodicidade: "Diária", prioridade: "Alta", pilar: "Service Desk", responsavel: "Maria Soares" },
    { id: "MKT-11", nome: "Service Desk l Fila - Correção de Anúncios", tipo: "Empurrada", periodicidade: "Diária", prioridade: "Alta", pilar: "Service Desk", responsavel: "Raqueline Souza" },
    { id: "MKT-12", nome: "Service Desk l Fila - RMA Erro de Anúncios", tipo: "Empurrada", periodicidade: "Diária", prioridade: "Alta", pilar: "Service Desk", responsavel: "Maria Soares" },
    { id: "MKT-13", nome: "Service Desk l Pausar ou Ativar Anúncios", tipo: "Empurrada", periodicidade: "Diária", prioridade: "Média", pilar: "Service Desk", responsavel: "Raqueline Souza" },
    { id: "MKT-14", nome: "Validação de SKUs que chegam em importações", tipo: "Puxada", periodicidade: "Pontual", prioridade: "Média", pilar: "Novos Cadastros", responsavel: "Maria Soares" },
    { id: "MKT-15", nome: "Manutenção vínculo de identidade Platz x Canal", tipo: "Puxada", periodicidade: "Mensal", prioridade: "Média", pilar: "Melhoria de Catálogo", responsavel: "Raqueline Souza" },
    { id: "MKT-16", nome: "Criação e atualização de documentação dos canais", tipo: "Puxada", periodicidade: "Mensal", prioridade: "Baixa", pilar: "Melhoria de Catálogo", responsavel: "Maria Soares" },
    { id: "MKT-17", nome: "Realizar conexão de SKUs ainda sem conexões nos canais", tipo: "Puxada", periodicidade: "Semanal", prioridade: "Alta", pilar: "Melhoria de Catálogo", responsavel: "Maria Soares" },
    { id: "MKT-18", nome: "Acompanhamento de performance dos anúncios - Visitas, Impressões, Cliques", tipo: "Puxada", periodicidade: "Semanal", prioridade: "Média", pilar: "Melhoria de Catálogo", responsavel: "Raqueline Souza" },
    { id: "MKT-19", nome: "Preenchimento e acompanhamento de KPIs", tipo: "Puxada", periodicidade: "Semanal", prioridade: "Média", pilar: "Geral", responsavel: "Equipe Cadastro" },
    { id: "MKT-20", nome: "Acompanhamento e Análise de devoluções de cada canal", tipo: "Puxada", periodicidade: "Semanal", prioridade: "Alta", pilar: "Melhoria de Catálogo", responsavel: "Maria Soares" }
  ]
};

// Renderização Principal da Aba Marketplace
function renderizarAbaMarketplace() {
  const container = document.getElementById('conteudoAba');
  if (!container) return;

  container.innerHTML = `
    <div class="space-y-6">
      
      <!-- SEÇÃO 1: FILTROS CRÍTICOS -->
      <div class="space-y-4">
        ${renderizarFiltrosCriticosMarketplace()}
      </div>

      <!-- SEÇÃO 2: ESTUDO DE REDISTRIBUIÇÃO DE CONTAS & CANAIS -->
      <div id="containerRedistribuicaoContasMarketplace">
        ${renderizarEstruturaRedistribuicaoHtml()}
      </div>

      <!-- SEÇÃO 3: TABELA DE ROTINAS E ATIVIDADES -->
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

  // Atualiza o contador do header principal se a função existir no app.js
  if (typeof atualizarContadorHeader === 'function') {
    atualizarContadorHeader(DATA_MARKETPLACE.rotinas.length);
  }
}

// Renderiza os Cards de Filtros Críticos
function renderizarFiltrosCriticosMarketplace() {
  return DATA_MARKETPLACE.filtrosCriticos.map((fc, idx) => `
    <div class="bringit-card ${fc.cor} rounded-2xl p-5 border shadow-2xs space-y-3">
      <div class="flex items-center justify-between cursor-pointer" onclick="toggleFiltroCritico('fc-mkt-${idx}')">
        <div class="flex items-center gap-3">
          <div class="w-9 h-9 rounded-xl ${fc.corIcone} flex items-center justify-center font-black text-sm">
            <i class="fa-solid fa-filter"></i>
          </div>
          <div>
            <h4 class="font-extrabold text-[#1C275C] text-sm">${fc.titulo}</h4>
            <p class="text-xs text-gray-500">Atalhos rápidos e cópia de URLs de filtros</p>
          </div>
        </div>
        <div class="flex items-center gap-2">
          <span class="text-xs font-bold text-gray-500 px-3 py-1 bg-white/80 rounded-lg border border-gray-200">Clique para visualizar</span>
          <i id="seta-fc-mkt-${idx}" class="fa-solid fa-chevron-down text-xs text-gray-500 transition-transform"></i>
        </div>
      </div>

      <div id="fc-mkt-${idx}" class="hidden pt-3 border-t border-gray-200/60 grid grid-cols-1 md:grid-cols-3 gap-3">
        ${fc.filtros.map(f => `
          <a href="${f.url}" target="_blank" class="p-3 bg-white hover:bg-sky-50/50 rounded-xl border border-gray-200 transition flex flex-col justify-between space-y-1">
            <span class="font-extrabold text-[#1C275C] text-xs flex items-center justify-between">
              ${f.nome}
              <i class="fa-solid fa-arrow-up-right-from-square text-[10px] text-[#00A3FF]"></i>
            </span>
            <span class="text-[11px] text-gray-500">${f.desc}</span>
          </a>
        `).join('')}
      </div>
    </div>
  `).join('');
}

// Renderiza a Estrutura Comparativa de Contas (Alocação Atual vs Nova Proposta)
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

  const dadosAtual = (typeof DATA_ANALISE !== 'undefined' && DATA_ANALISE.divisaoContas) ? DATA_ANALISE.divisaoContas.atual : [
    { canal: "Mercado Livre", conta: "SC / SP / PR / MG", responsavel: "Maria Soares", fotoUrl: "https://ui-avatars.com/api/?name=Maria+Soares&background=00A3FF&color=fff" },
    { canal: "Shopee", conta: "SC / SP / MG", responsavel: "Raqueline Souza", fotoUrl: "https://ui-avatars.com/api/?name=Raqueline+Souza&background=00A3FF&color=fff" },
    { canal: "Kabum", conta: "SC / SP / MG", responsavel: "Raqueline Souza", fotoUrl: "https://ui-avatars.com/api/?name=Raqueline+Souza&background=00A3FF&color=fff" },
    { canal: "TikTok Shop", conta: "SC", responsavel: "Raqueline Souza", fotoUrl: "https://ui-avatars.com/api/?name=Raqueline+Souza&background=00A3FF&color=fff" },
    { canal: "Temu", conta: "SC", responsavel: "Maria Soares", fotoUrl: "https://ui-avatars.com/api/?name=Maria+Soares&background=00A3FF&color=fff" },
    { canal: "Amazon", conta: "SC", responsavel: "Raqueline Souza", fotoUrl: "https://ui-avatars.com/api/?name=Raqueline+Souza&background=00A3FF&color=fff" }
  ];

  const dadosProposta = (typeof DATA_ANALISE !== 'undefined' && DATA_ANALISE.divisaoContas) ? DATA_ANALISE.divisaoContas.proposta : [
    { canal: "Mercado Livre", conta: "SC / MG", responsavel: "Maria Soares", badge: "CD SC & MG", fotoUrl: "https://ui-avatars.com/api/?name=Maria+Soares&background=00A3FF&color=fff" },
    { canal: "Mercado Livre", conta: "SP (PR) / SP", responsavel: "Daniela Lourenço", badge: "CD SP & PR", fotoUrl: "https://ui-avatars.com/api/?name=Daniela+Lourenco&background=00A3FF&color=fff" },
    { canal: "Temu", conta: "SC", responsavel: "Daniela Lourenço", badge: "Novos Canais", fotoUrl: "https://ui-avatars.com/api/?name=Daniela+Lourenco&background=00A3FF&color=fff" },
    { canal: "TikTok Shop", conta: "Geral", responsavel: "Daniela Lourenço", badge: "Novos Canais", fotoUrl: "https://ui-avatars.com/api/?name=Daniela+Lourenco&background=00A3FF&color=fff" },
    { canal: "Shopee", conta: "SC / SP / MG", responsavel: "Raqueline Souza", badge: "Core Shopee", fotoUrl: "https://ui-avatars.com/api/?name=Raqueline+Souza&background=00A3FF&color=fff" },
    { canal: "Kabum", conta: "SC / SP / MG", responsavel: "Raqueline Souza", badge: "Core Tech", fotoUrl: "https://ui-avatars.com/api/?name=Raqueline+Souza&background=00A3FF&color=fff" },
    { canal: "Amazon", conta: "SC", responsavel: "Raqueline Souza", badge: "1P B2B", fotoUrl: "https://ui-avatars.com/api/?name=Raqueline+Souza&background=00A3FF&color=fff" }
  ];

  const htmlAtual = dadosAtual.map(c => `
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

  const htmlProposta = dadosProposta.map(c => `
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

// Renderiza as Linhas da Tabela de Rotinas
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

// Toggle para os Filtros Críticos
function toggleFiltroCritico(id) {
  const el = document.getElementById(id);
  const seta = document.getElementById(`seta-${id}`);
  if (el) {
    el.classList.toggle('hidden');
    if (seta) seta.classList.toggle('rotate-180');
  }
}