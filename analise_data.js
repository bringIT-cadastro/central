// analise_data.js - Base de Dados Atualizada para LP de Análises bringIT

// Mapeamento de Logos Oficiais dos Canais
const LOGOS_CANOES = {
  "Mercado Livre": "https://upload.wikimedia.org/wikipedia/pt/0/04/Logotipo_MercadoLivre.png?utm_source=pt.wikipedia.org&utm_campaign=index&utm_content=original",
  "Kabum": "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/aa/Logotipo_da_KaBuM%21.svg/3840px-Logotipo_da_KaBuM%21.svg.png?utm_source=pt.wikipedia.org&utm_campaign=index&utm_content=thumbnail",
  "Shopee": "https://upload.wikimedia.org/wikipedia/commons/f/fe/Shopee.svg?utm_source=pt.wikipedia.org&utm_campaign=index&utm_content=original",
  "Amazon 1P": "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/3840px-Amazon_logo.svg.png?utm_source=pt.wikipedia.org&utm_campaign=index&utm_content=thumbnail",
  "Temu": "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a6/Temu_logo.svg/3840px-Temu_logo.svg.png?utm_source=pt.wikipedia.org&utm_campaign=index&utm_content=thumbnail",
  "TikTok": "https://media.licdn.com/dms/image/v2/D4D12AQFMQxqIPodlUQ/article-cover_image-shrink_720_1280/B4DZa07390GwAI-/0/1746792317268?e=2147483647&v=beta&t=iE6ekpWuqfUt3RDNmQ073cVCEnEB9enmKA54T7oyjvc"
};

const DATA_ANALISE = {
  // 3 Pilares Estratégicos
  pilares: [
    { id: "novos", nome: "Produtos Novos", cor: "bg-blue-500", icone: "fa-solid fa-box-open" },
    { id: "catalogo", nome: "Melhoria de Catálogo", cor: "bg-emerald-500", icone: "fa-solid fa-sliders" },
    { id: "operacional", nome: "Service Desk / Operacional", cor: "bg-amber-500", icone: "fa-solid fa-headset" }
  ],

  // Seção 1: Sugestões Estratégicas de Organização
  sugestoesOrganizacao: [
    {
      id: "sug-pilares",
      titulo: "1. Organização por Pilares Estratégicos & Comitês de Gestão",
      pilarTarget: "visão macro",
      icone: "fa-solid fa-people-group",
      descricao: "Estruturação das frentes operacionais em três eixos centrais:",
      exibirEtiquetasPilares: true,
      detalhes: "Cada pilar contará com um **comitê dedicado** encarregado de evoluir continuamente o escopo de atividades, identificar necessidades de automação e mapear inovações do mercado. Sempre que um analista sinalizar uma nova demanda ou oportunidade referente àquele pilar, o comitê será responsável por desenhar e implementar o fluxo de execução de forma otimizada."
    },
    {
      id: "sug-priorizacao",
      titulo: "2. Matriz de Priorização: Demandas Críticas x Rotinas Secundárias",
      pilarTarget: "foco e volumetria",
      icone: "fa-solid fa-layer-group",
      descricao: "Separação analítica rigorosa entre as **Maiores Geradoras de Volume** (gargalos e chamados recorrentes) e as **Rotinas Secundárias em Looping**.",
      exibirEtiquetasPilares: false,
      detalhes: "Esta distinção permite direcionar o olhar estratégico e o tempo dos analistas para as frentes que causam maior impacto na operação e nos resultados da empresa, sem perder o controle do fluxo contínuo mantido em background."
    }
  ],

  // Seção 2: Diagnóstico de Demandas & Gargalos Operacionais
  gargalos: [
    {
      id: "g1",
      titulo: "Produtos Novos (Lotes Novos & Cauda Longa)",
      pilar: "novos",
      gargaloMapeado: "Configuração e ausência de atributos essenciais no cadastro.",
      sugestoesAcoes: [
        "Nova rodada de melhorias no fluxo completo de processos, visando 100% de facilidade e segurança operacional.",
        "Garantir a continuidade do fluxo que já se encontra bem estruturado."
      ]
    },
    {
      id: "g2",
      titulo: "Service Desk (Correções e Criações)",
      pilar: "operacional",
      gargaloMapeado: "Possível acúmulo de chamados decorrente da distribuição e alta demanda.",
      sugestoesAcoes: [
        "Analisar a adoção de alternância semanal de Responsável Único.",
        "Garantir um atendimento mais ágil e fluido às demandas.",
        "Capacitar e treinar os analistas em um leque maior de cenários operacionais.",
        "Reduzir interrupções no fluxo de tramitação de tickets."
      ]
    },
    {
      id: "g3",
      titulo: "Análise de Termos de Busca",
      pilar: "catalogo",
      gargaloMapeado: "Rotina com potencial para rodízio bimestral ou quadrimestral.",
      sugestoesAcoes: [
        "Garantir a máxima concentração da rotina em um único analista por período."
      ]
    },
    {
      id: "g4",
      titulo: "Phase Out & No Turn",
      pilar: "catalogo",
      gargaloMapeado: "Pouca priorização por parte dos analistas nas ações finais pós-análise.",
      sugestoesAcoes: [
        "Apresentar cases de sucesso, ações estratégicas e projeções para engajar melhor a equipe.",
        "Avaliar um espaçamento maior (ex: verificação quinzenal) com SLA estendido para garantir a execução das ações.",
        "Melhorar o formato da lista de ações atribuídas aos analistas após as pré-análises."
      ]
    },
    {
      id: "g5",
      titulo: "Monitoramento de URL (Redirects 404 & Erros)",
      pilar: "catalogo",
      gargaloMapeado: "Rotina com potencial para rodízio bimestral ou quadrimestral.",
      sugestoesAcoes: [
        "Sanar e solucionar os apontamentos negativos identificados no Google Search Console."
      ]
    },
    {
      id: "g6",
      titulo: "Análise de Devoluções",
      pilar: "catalogo",
      gargaloMapeado: "Preenchimento inadequado dos controles por parte dos analistas e risco de não análise dos casos repassados.",
      sugestoesAcoes: [
        "Analisar a adoção de alternância semanal de Responsável Único.",
        "Garantir um atendimento e posicionamento mais ágil.",
        "Capacitar e treinar os analistas em diferentes cenários de devolução.",
        "Reduzir gargalos e interrupções nas tramitações de tickets."
      ]
    }
  ],

  // Seção 3: Rotinas Oficiais (Marketplace)
  rotinasMarketplace: [
    { pilar: "novos", nome: "Novos Produtos l Conexão de Novos Anúncios" },
    { pilar: "novos", nome: "Ponte de Comando l Novos Anúncios" },
    { pilar: "catalogo", nome: "Ponte de Comando l Atualização de Atributos" },
    { pilar: "catalogo", nome: "Ponte de Comando l Pausa de Anúncios" },
    { pilar: "catalogo", nome: "Ponte de Comando l Reativação de Anúncios" },
    { pilar: "catalogo", nome: "Conferência e correção de cadastros diretamente dentro dos canais, produtos inativos, bloqueados…" },
    { pilar: "catalogo", nome: "Mercado Livre l Manutenção e correção dos anúncios \"Em Revisão\"" },
    { pilar: "catalogo", nome: "Acompanhamento dos indicadores dos marketplaces e identificação de correções de anúncios" },
    { pilar: "catalogo", nome: "Manutenção de anúncios para inativação de produtos - Inativar e acompanhar pausa dos anúncios" },
    { pilar: "operacional", nome: "Service Desk l Fila - Conexão de Anúncios" },
    { pilar: "operacional", nome: "Service Desk l Fila - Correção de Anúncios" },
    { pilar: "operacional", nome: "Service Desk l Fila - RMA Erro de Anúncios" },
    { pilar: "operacional", nome: "Service Desk l Pausar ou Ativar Anúncios" },
    { pilar: "novos", nome: "Validação de SKUs que chegam em importações" },
    { pilar: "catalogo", nome: "Manutenção vínculo de identidade Platz x Canal" },
    { pilar: "operacional", nome: "Criação e atualização de documentação dos canais" },
    { pilar: "catalogo", nome: "Realizar conexão de SKUs ainda sem conexões nos canais" },
    { pilar: "catalogo", nome: "Acompanhamento de performance dos anúncios - Visitas, Impressões, Cliques..." },
    { pilar: "operacional", nome: "Preenchimento e acompanhamento de KPIs" },
    { pilar: "catalogo", nome: "Acompanhamento e Análise de devoluções de cada canal" }
  ],

  // Seção 3: Rotinas Oficiais (Site)
  rotinasSite: [
    { pilar: "operacional", nome: "Service Desk l Criar novos Cadastros - Cauda Longa" },
    { pilar: "operacional", nome: "Service Desk l RMA - Erro de Anúncio" },
    { pilar: "operacional", nome: "Service Desk l Correção de Anúncio" },
    { pilar: "operacional", nome: "Service Desk l Pausar ou Ativar Anúncios" },
    { pilar: "operacional", nome: "Service Desk l Melhorias em Anúncios" },
    { pilar: "operacional", nome: "Service Desk l Melhorias/Alterações Site" },
    { pilar: "operacional", nome: "Service Desk l Novos Cadastros" },
    { pilar: "novos", nome: "Novos Produtos l Cadastro Sistema de Cadastro" },
    { pilar: "novos", nome: "Novos Produtos l Criação de conteúdo" },
    { pilar: "novos", nome: "Novos Produtos l Criação de nova categoria" },
    { pilar: "novos", nome: "Novos Produtos l Estudo e cadastro de novos atributos" },
    { pilar: "novos", nome: "Novos Produtos l Cadastrar novos produtos no Bahn" },
    { pilar: "novos", nome: "Novos Produtos l Search Console - Realizar indexação de URL" },
    { pilar: "novos", nome: "Novos Produtos l Google Merchant - Realizar cadastro de produto" },
    { pilar: "novos", nome: "Novos Produtos l Preenchimento do documento - Registro do Portfólio" },
    { pilar: "novos", nome: "Novos Produtos l Validação das Imagens" },
    { pilar: "novos", nome: "Novos Produtos l Validação dos anúncios Ativos" },
    { pilar: "novos", nome: "Novos Produtos l Conectar com Magento e Platz" },
    { pilar: "operacional", nome: "Realizar treinamento e orientação ao time de Cadastro" },
    { pilar: "catalogo", nome: "Site l Mapear e realizar redirect de anúncios desabilitados/excluídos" },
    { pilar: "catalogo", nome: "Padrão e qualidade das imagens dos anúncios" },
    { pilar: "catalogo", nome: "Analisar termos de busca e indicar ajustes" },
    { pilar: "catalogo", nome: "Executar ajustes nos anúncios" },
    { pilar: "catalogo", nome: "Validar ajustes realizados e busca do Site" },
    { pilar: "catalogo", nome: "Melhorias no Site l Filtros" },
    { pilar: "catalogo", nome: "Melhorias no Site l Categorias" },
    { pilar: "catalogo", nome: "Melhorias no Site l Menu" },
    { pilar: "catalogo", nome: "Site l Criar novas categorias" },
    { pilar: "novos", nome: "Devoluções l Analisar casos de devoluções - Site" },
    { pilar: "catalogo", nome: "Participar de projetos de melhorias da área de Cadastro" },
    { pilar: "catalogo", nome: "Base de Compatibilidade l Analisar e realizar cadastros" },
    { pilar: "catalogo", nome: "Google Merchant l Acompanhar e Corrigir erros identificados" },
    { pilar: "catalogo", nome: "Realizar correção das URLs com erro 404" },
    { pilar: "catalogo", nome: "Realizar análise da performance dos anúncios do Site" },
    { pilar: "catalogo", nome: "Fotógrafo China l Indicar necessidade de novas fotos" },
    { pilar: "catalogo", nome: "Fotógrafo Brasil l Realizar contato direto para solicitações e alinhamentos de imagens" },
    { pilar: "catalogo", nome: "Indicadores Imagens l Analisar indicadores de performance dos anúncios com imagens atualizadas" },
    { pilar: "operacional", nome: "Preenchimento e acompanhamento de KPIs" }
  ],

  // Seção 4: Macro Cronograma Semanal
  cronograma: [
    {
      dia: "Segunda-feira",
      foco: "Entrada de Volume & Produtos Novos",
      puxadas: ["Cadastro de Produtos Novos (Lotes Novos & Cauda Longa)", "Ponte de Comando (Pausas e Reativações)"],
      empurradas: ["Triagem de Chamados de Service Desk (Criar/Corrigir)"],
      slaMeta: "Processar 100% dos lotes recebidos"
    },
    {
      dia: "Terça-feira",
      foco: "Desmobilização, Phase Out & Termos",
      puxadas: ["Phase Out & No Turn (Inativações e Ações Finais)", "Análise de Termos de Busca sem Resultado"],
      empurradas: ["Monitoramento de URLs Quebradas e Redirects 404"],
      slaMeta: "Aplicar ações de Phase Out quinzenal"
    },
    {
      dia: "Quarta-feira",
      foco: "Devoluções, RMA & Indicadores de Canais",
      puxadas: ["Análise de Devoluções (SAC, RMA & Marketplaces)", "Auditoria Mercado Livre (Anúncios Em Revisão)"],
      empurradas: ["Ajuste de incompatividades relatos em chamados"],
      slaMeta: "Tratar 100% das devoluções do período"
    },
    {
      dia: "Quinta-feira",
      foco: "Fotos, SEO On-Page & Fichas Técnicas",
      puxadas: ["Validação e Alinhamento de Imagens (Brasil/China)", "Otimização de SEO On-Page (Top SKUs Curva A)"],
      empurradas: ["Ajustes de Fichas Técnicas e Atributos no Site"],
      slaMeta: "Revisão de top 20 SKUs prioritários"
    },
    {
      dia: "Sexta-feira",
      foco: "Fechamento de Chamados, KPIs & Ideias",
      puxadas: ["Zerar Fila de Chamados Service Desk acumulada", "Preenchimento de KPIs e Indicadores Semanais"],
      empurradas: ["Dinâmica de Giro Mensal de Ideias & Backlog"],
      slaMeta: "Fechamento de tickets da semana"
    }
  ],

  // Seção 5: Dados do Funil Estratégico de Conversão de Canais (Excluído o Site)
  funilNovo: {
    siteIndicador: {
      nome: "Site Próprio (E-commerce bringIT)",
      receita: "R$ 34.226.721,33",
      pctGeral: "32,28%",
      margemContribuicao: "44,11%",
      nota: "Canal isolado do funil abaixo — foco exclusivo na estratégia de migração de margem cheia."
    },
    bocaMarketplaces: [
      { canal: "Mercado Livre", receita: "R$ 35.795.731,80", pctMarketplaces: 49.86, cor: "bg-amber-400 text-amber-950" },
      { canal: "MLFULL", receita: "R$ 17.215.294,60", pctMarketplaces: 23.98, cor: "bg-amber-500 text-white" },
      { canal: "Shopee", receita: "R$ 12.989.666,96", pctMarketplaces: 18.09, cor: "bg-orange-500 text-white" },
      { canal: "Kabum", receita: "R$ 4.668.845,16", pctMarketplaces: 6.50, cor: "bg-[#00A3FF] text-white" },
      { canal: "Tiktok Shop", receita: "R$ 755.933,32", pctMarketplaces: 1.05, cor: "bg-slate-800 text-white" },
      { canal: "Temu", receita: "R$ 369.837,21", pctMarketplaces: 0.52, cor: "bg-red-500 text-white" }
    ],
    meioEtapas: [
      {
        etapaNum: "Etapa 1",
        titulo: "Qual a melhor condição de vendas do CORE?",
        foco: "Análise profunda de Margem, comissões praticadas por canal e potencial/qualidade real de venda.",
        icone: "fa-solid fa-chart-pie"
      },
      {
        etapaNum: "Etapa 2",
        titulo: "Análise de Recompra & Aquisição",
        foco: "Mapeamento dos canais com maior % de primeira compra vs. potencial de fidelização.",
        icone: "fa-solid fa-repeat"
      }
    ],
    finalDefinicao: {
      titulo: "Definição & Separação Estratégica dos Canais",
      pontos: [
        { rotulo: "Canais para Listas Core", desc: "Direcionar produtos de alta recorrência para os canais de tração massiva." },
        { rotulo: "Kabum (Fatia Efetiva)", desc: "Aproveitamento focado do público tech com margens mais rentáveis e conversão especializada." },
        { rotulo: "Canais de Produtos Acabados", desc: "Alocação estratégica de portfólio de giro rápido em marketplaces emergentes." }
      ]
    }
  },

  // Seção 6: Matriz de Divisão de Contas
  divisaoContas: {
    atual: [
      { canal: "Mercado Livre", conta: "SC / SP / PR / MG", responsavel: "Maria Soares", fotoUrl: "maria.jpeg" },
      { canal: "Shopee", conta: "SC / SP / MG", responsavel: "Raqueline Souza", fotoUrl: "raqueline.jpg" },
      { canal: "Kabum", conta: "SC / SP / MG", responsavel: "Raqueline Souza", fotoUrl: "raqueline.jpg" },
      { canal: "TikTok", conta: "SC", responsavel: "Raqueline Souza", fotoUrl: "raqueline.jpg" },
      { canal: "Temu", conta: "SC", responsavel: "Maria Soares", fotoUrl: "maria.jpeg" },
      { canal: "Amazon 1P", conta: "SC", responsavel: "Raqueline Souza", fotoUrl: "raqueline.jpg" }
    ],
    proposta: [
      { canal: "Mercado Livre", conta: "SC / SP", responsavel: "Maria Soares", fotoUrl: "maria.jpeg", badge: "Core ML" },
      { canal: "Mercado Livre", conta: "SP (PR) / MG", responsavel: "Daniela Lourenço", fotoUrl: "daniela.webp", badge: "Expansão ML" },
      { canal: "Temu", conta: "SC", responsavel: "Daniela Lourenço", fotoUrl: "daniela.webp", badge: "Novos Canais" },
      { canal: "TikTok", conta: "Geral", responsavel: "Daniela Lourenço", fotoUrl: "daniela.webp", badge: "Novos Canais" },
      { canal: "Shopee", conta: "SC / SP / MG", responsavel: "Raqueline Souza", fotoUrl: "raqueline.jpg", badge: "Core Shopee" },
      { canal: "Kabum", conta: "SC / SP / MG", responsavel: "Raqueline Souza", fotoUrl: "raqueline.jpg", badge: "Core Tech" },
      { canal: "Amazon 1P", conta: "SC", responsavel: "Raqueline Souza", fotoUrl: "raqueline.jpg", badge: "1P B2B" }
    ]
  },

  // Seção 7: Sub-tópicos da Metodologia Contínua
  metodologiaContinua: [
    {
      num: 1,
      titulo: "1. Giro Mensal de Ideias & Backlog Estratégico",
      foco: "Coleta de Ideias Inovadoras",
      icone: "fa-solid fa-lightbulb",
      corBadge: "bg-sky-500",
      descricao: "Espaço dinâmico mensal para alinhamento entre as frentes de Site e Marketplace, revisão de projetos engavetados e priorização de ideias inovadoras no backlog. O foco principal é promover a captação contínua de inovações para a área."
    },
    {
      num: 2,
      titulo: "2. Workshop de Cadastro",
      foco: "Capacitação & Alinhamento Técnico",
      icone: "fa-solid fa-chalkboard-user",
      corBadge: "bg-emerald-500",
      descricao: "Espaço mensal dedicado a compartilhar treinamentos curtos sobre assuntos gerais e específicos da área de cadastro, garantindo padronização, reciclagem de conhecimentos e elevação do nível técnico da equipe."
    },
    {
      num: 3,
      titulo: "3. Cases de Sucesso",
      foco: "Engajamento & Visão de Mercado",
      icone: "fa-solid fa-trophy",
      corBadge: "bg-amber-500",
      descricao: "Espaço mensal para compartilhar os maiores feitos do mês, grandes desafios superados e o giro mensal de mudanças do ecossistema de e-commerce: Mantendo o time perfeitamente sintonizado na mesma página interna e externa sob a ótica do e-commerce."
    }
  ]
};