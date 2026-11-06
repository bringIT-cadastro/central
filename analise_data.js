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
  // 3 Pilares Operacionais
  pilares: [
    { id: "novos", nome: "Produtos Novos", cor: "bg-blue-500", icone: "fa-solid fa-box-open" },
    { id: "catalogo", nome: "Melhoria de Catálogo", cor: "bg-emerald-500", icone: "fa-solid fa-sliders" },
    { id: "operacional", nome: "Service Desk", cor: "bg-amber-500", icone: "fa-solid fa-headset" }
  ],

  // Seção 1: Sugestões Estratégicas de Organização
  sugestoesOrganizacao: [
    {
      id: "sug-pilares",
      titulo: "1. Organização por Pilares Operacionais & Comitês de Gestão",
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
      estrelaDestaque: true,
      geradoraVolume: false,
      gargaloMapeado: "Prioridade baixa para análise de fluxo (processo já flui muito bem no dia a dia).",
      sugestoesAcoes: [
        "Comitê manterá acompanhamento passivo, visto que a rotina já flui muito bem."
      ]
    },
    {
      id: "g2",
      titulo: "Service Desk (Correções e Criações)",
      pilar: "operacional",
      estrelaDestaque: false,
      geradoraVolume: false,
      gargaloMapeado: "Comitê irá atuar no levantamento de gargalos.",
      sugestoesAcoes: [
        "Comitê irá levantar melhorias nas rotinas das mais importantes para mais secundárias."
      ]
    },
    {
      id: "g3",
      titulo: "Análise de Termos de Busca",
      pilar: "catalogo",
      estrelaDestaque: false,
      geradoraVolume: false,
      gargaloMapeado: "Comitê irá atuar no levantamento de gargalos.",
      sugestoesAcoes: [
        "Comitê irá levantar melhorias nas rotinas das mais importantes para mais secundárias."
      ]
    },
    {
      id: "g4",
      titulo: "Phase Out & No Turn",
      pilar: "catalogo",
      estrelaDestaque: false,
      geradoraVolume: false,
      gargaloMapeado: "Comitê irá atuar no levantamento de gargalos.",
      sugestoesAcoes: [
        "Comitê irá levantar melhorias nas rotinas das mais importantes para mais secundárias."
      ]
    },
    {
      id: "g5",
      titulo: "Monitoramento de URL (Redirects 404 & Erros)",
      pilar: "catalogo",
      estrelaDestaque: false,
      geradoraVolume: false,
      gargaloMapeado: "Comitê irá atuar no levantamento de gargalos.",
      sugestoesAcoes: [
        "Comitê irá levantar melhorias nas rotinas das mais importantes para mais secundárias."
      ]
    },
    {
      id: "g6",
      titulo: "Análise de Devoluções",
      pilar: "catalogo",
      estrelaDestaque: false,
      geradoraVolume: false,
      gargaloMapeado: "Comitê irá atuar no levantamento de gargalos.",
      sugestoesAcoes: [
        "Comitê irá levantar melhorias nas rotinas das mais importantes para mais secundárias."
      ]
    },
    {
      id: "g8",
      titulo: "Análise Quinzenal de Produtos em Queda",
      pilar: "catalogo",
      estrelaDestaque: false,
      geradoraVolume: true,
      gargaloMapeado: "Comitê irá atuar no levantamento de gargalos.",
      sugestoesAcoes: [
        "Comitê irá levantar melhorias nas rotinas das mais importantes para mais secundárias."
      ]
    },
    {
      id: "g9",
      titulo: "Melhoria Continua Mercado Livre",
      pilar: "catalogo",
      estrelaDestaque: false,
      geradoraVolume: true,
      gargaloMapeado: "Comitê irá atuar no levantamento de gargalos.",
      sugestoesAcoes: [
        "Comitê irá levantar melhorias nas rotinas das mais importantes para mais secundárias."
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
    { pilar: "catalogo", nome: "Criação e atualização de documentação dos canais" },
    { pilar: "catalogo", nome: "Realizar conexão de SKUs ainda sem conexões nos canais" },
    { pilar: "catalogo", nome: "Acompanhamento de performance dos anúncios - Visitas, Impressões, Cliques..." },
    { pilar: null, nome: "Preenchimento e acompanhamento de KPIs" },
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
    { pilar: "catalogo", nome: "Realizar treinamento e orientação ao time de Cadastro" },
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
    { pilar: null, nome: "Preenchimento e acompanhamento de KPIs" }
  ],

  // Seção 4: Cards Explicativos da Estruturação do Cronograma
  cardsEstruturacaoCronograma: [
    {
      titulo: "Macro Cronograma da Área",
      subtitulo: "Visão Geral das Principais Rotinas",
      icone: "fa-solid fa-sitemap",
      corIcone: "text-[#00A3FF] bg-sky-50 border-sky-100",
      descricao: "Mapeamento amplo de todas as demandas fundamentais da área de cadastro, organizadas por cadência e prioridade para garantir visibilidade ponta a ponta dos fluxos operacionais."
    },
    {
      titulo: "Cronograma de Apoio por Analista",
      subtitulo: "Norte Individual de Trabalho",
      icone: "fa-solid fa-user-gear",
      corIcone: "text-purple-600 bg-purple-50 border-purple-100",
      descricao: "Estruturação de um guia personalizado para cada integrante do time, servindo como bússola para organizar entregas diárias, equilibrar demandas puxadas/empurradas e otimizar a rotina."
    },
    {
      titulo: "Assistente Pessoal de Agenda (IA)",
      subtitulo: "Agente de IA Diário & Lembretes",
      icone: "fa-solid fa-robot",
      corIcone: "text-emerald-600 bg-emerald-50 border-emerald-100",
      descricao: "Agente virtual inteligente que avisa diariamente os focos do dia, dispara alertas de microatividades, auxilia no cumprimento de SLAs e atua como assistente pessoal de agenda da equipe."
    }
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

  // Seção 5: Ficha de Perfil do Time (Cargos e Imagens Corrigidos)
  fichasTime: [
    {
      id: "membro-patrick",
      nome: "Patrick Nunes",
      cargo: "Analista de Cadastro Júnior",
      fotoUrl: "patrick.jpeg",
      resumoPerfil: "Profissional extremamente detalhista, com perfil focado, mais reservado e forte inclinação executora, garantindo alta precisão na condução das tarefas operacionais.",
      niveisTecnicos: [
        { fluxo: "Publicação de Produtos", nivelPct: 75, rotuloNivel: "75%", lideranca: "E3", liderancaNome: "Apoiar" },
        { fluxo: "Qualidade e SEO", nivelPct: 50, rotuloNivel: "50%", lideranca: "E2", liderancaNome: "Orientar" },
        { fluxo: "Sistemas", nivelPct: 50, rotuloNivel: "50%", lideranca: "E2", liderancaNome: "Orientar" },
        { fluxo: "Workspace Google", nivelPct: 25, rotuloNivel: "25%", lideranca: "E1", liderancaNome: "Direcionar" },
        { fluxo: "Ferramentas de IA", nivelPct: 25, rotuloNivel: "25%", lideranca: "E1", liderancaNome: "Direcionar" },
        { fluxo: "Digital Commerce", nivelPct: 50, rotuloNivel: "50%", lideranca: "E2", liderancaNome: "Orientar" },
        { fluxo: "Análise de Dados", nivelPct: 25, rotuloNivel: "25%", lideranca: "E1", liderancaNome: "Direcionar" }
      ]
    },
    {
      id: "membro-daniela",
      nome: "Daniela Lourenço",
      cargo: "Analista de Cadastro Júnior",
      fotoUrl: "daniela.webp",
      resumoPerfil: "Perfil altamente comunicativo com perfil executor. Apresenta natural insegurança por estar em fase inicial de desenvolvimento nas rotinas da área.",
      niveisTecnicos: [
        { fluxo: "Publicação de Produtos", nivelPct: 25, rotuloNivel: "25%", lideranca: "E1", liderancaNome: "Direcionar" },
        { fluxo: "Qualidade e SEO", nivelPct: 25, rotuloNivel: "25%", lideranca: "E1", liderancaNome: "Direcionar" },
        { fluxo: "Sistemas", nivelPct: 25, rotuloNivel: "25%", lideranca: "E1", liderancaNome: "Direcionar" },
        { fluxo: "Workspace Google", nivelPct: 25, rotuloNivel: "25%", lideranca: "E1", liderancaNome: "Direcionar" },
        { fluxo: "Ferramentas de IA", nivelPct: 25, rotuloNivel: "25%", lideranca: "E1", liderancaNome: "Direcionar" },
        { fluxo: "Digital Commerce", nivelPct: 50, rotuloNivel: "50%", lideranca: "E2", liderancaNome: "Orientar" },
        { fluxo: "Análise de Dados", nivelPct: 25, rotuloNivel: "25%", lideranca: "E1", liderancaNome: "Direcionar" }
      ]
    },
    {
      id: "membro-maria",
      nome: "Maria Soares",
      cargo: "Analista de Cadastro Júnior",
      fotoUrl: "maria.jpeg",
      resumoPerfil: "Analista com excelente visão sistêmica, comunicação transparente e alta clareza de cenários, demonstrando grande potencial para liderar e conduzir projetos.",
      niveisTecnicos: [
        { fluxo: "Publicação de Produtos", nivelPct: 75, rotuloNivel: "75%", lideranca: "E3", liderancaNome: "Apoiar" },
        { fluxo: "Qualidade e SEO", nivelPct: 75, rotuloNivel: "75%", lideranca: "E3", liderancaNome: "Apoiar" },
        { fluxo: "Sistemas", nivelPct: 100, rotuloNivel: "100%", lideranca: "E4", liderancaNome: "Delegar" },
        { fluxo: "Workspace Google", nivelPct: 75, rotuloNivel: "75%", lideranca: "E3", liderancaNome: "Apoiar" },
        { fluxo: "Ferramentas de IA", nivelPct: 75, rotuloNivel: "75%", lideranca: "E3", liderancaNome: "Apoiar" },
        { fluxo: "Digital Commerce", nivelPct: 75, rotuloNivel: "75%", lideranca: "E3", liderancaNome: "Apoiar" },
        { fluxo: "Análise de Dados", nivelPct: 75, rotuloNivel: "75%", lideranca: "E3", liderancaNome: "Apoiar" }
      ]
    },
    {
      id: "membro-raqueline",
      nome: "Raqueline Souza",
      cargo: "Analista de Cadastro Júnior",
      fotoUrl: "raqueline.jpg",
      resumoPerfil: "Profissional receptiva, com estilo de comunicação objetivo e direto, mantendo forte orientação executora na realização das demandas operacionais.",
      niveisTecnicos: [
        { fluxo: "Publicação de Produtos", nivelPct: 50, rotuloNivel: "50%", lideranca: "E2", liderancaNome: "Orientar" },
        { fluxo: "Qualidade e SEO", nivelPct: 50, rotuloNivel: "50%", lideranca: "E2", liderancaNome: "Orientar" },
        { fluxo: "Sistemas", nivelPct: 50, rotuloNivel: "50%", lideranca: "E2", liderancaNome: "Orientar" },
        { fluxo: "Workspace Google", nivelPct: 50, rotuloNivel: "50%", lideranca: "E2", liderancaNome: "Orientar" },
        { fluxo: "Ferramentas de IA", nivelPct: 25, rotuloNivel: "25%", lideranca: "E1", liderancaNome: "Direcionar" },
        { fluxo: "Digital Commerce", nivelPct: 50, rotuloNivel: "50%", lideranca: "E2", liderancaNome: "Orientar" },
        { fluxo: "Análise de Dados", nivelPct: 25, rotuloNivel: "25%", lideranca: "E1", liderancaNome: "Direcionar" }
      ]
    },
    {
      id: "membro-jennifer",
      nome: "Jennifer Valle",
      cargo: "Analista de Cadastro Júnior",
      fotoUrl: "jennifer.webp",
      resumoPerfil: "Perfil direto, rigorosamente detalhista e com olhar sistêmico refinado, impulsionado por uma sólida bagagem de experiência no ecossistema comercial.",
      niveisTecnicos: [
        { fluxo: "Publicação de Produtos", nivelPct: 25, rotuloNivel: "25%", lideranca: "E1", liderancaNome: "Direcionar" },
        { fluxo: "Qualidade e SEO", nivelPct: 75, rotuloNivel: "75%", lideranca: "E3", liderancaNome: "Apoiar" },
        { fluxo: "Sistemas", nivelPct: 25, rotuloNivel: "25%", lideranca: "E1", liderancaNome: "Direcionar" },
        { fluxo: "Workspace Google", nivelPct: 75, rotuloNivel: "75%", lideranca: "E3", liderancaNome: "Apoiar" },
        { fluxo: "Ferramentas de IA", nivelPct: 75, rotuloNivel: "75%", lideranca: "E3", liderancaNome: "Apoiar" },
        { fluxo: "Digital Commerce", nivelPct: 75, rotuloNivel: "75%", lideranca: "E3", liderancaNome: "Apoiar" },
        { fluxo: "Análise de Dados", nivelPct: 50, rotuloNivel: "50%", lideranca: "E2", liderancaNome: "Orientar" }
      ]
    },
    {
      id: "membro-ingrid",
      nome: "Ingrid Fabris",
      cargo: "Analista de Cadastro Sênior",
      fotoUrl: "ingrid.webp",
      resumoPerfil: "Detentora do domínio técnico mais avançado da equipe. Apresenta postura direta, altamente solícita e pronta para orientar o time com excelência.",
      niveisTecnicos: [
        { fluxo: "Publicação de Produtos", nivelPct: 100, rotuloNivel: "100%", lideranca: "E4", liderancaNome: "Delegar" },
        { fluxo: "Qualidade e SEO", nivelPct: 100, rotuloNivel: "100%", lideranca: "E4", liderancaNome: "Delegar" },
        { fluxo: "Sistemas", nivelPct: 100, rotuloNivel: "100%", lideranca: "E4", liderancaNome: "Delegar" },
        { fluxo: "Workspace Google", nivelPct: 100, rotuloNivel: "100%", lideranca: "E4", liderancaNome: "Delegar" },
        { fluxo: "Ferramentas de IA", nivelPct: 100, rotuloNivel: "100%", lideranca: "E4", liderancaNome: "Delegar" },
        { fluxo: "Digital Commerce", nivelPct: 100, rotuloNivel: "100%", lideranca: "E4", liderancaNome: "Delegar" },
        { fluxo: "Análise de Dados", nivelPct: 100, rotuloNivel: "100%", lideranca: "E4", liderancaNome: "Delegar" }
      ]
    }
  ],

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

  // Seção 7: Gestão Horizontal
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
    },
    {
      num: 4,
      titulo: "4. Portfólio de Capacidades Técnicas & Inovação",
      foco: "Evolução de Domínio & Excelência",
      icone: "fa-solid fa-brain",
      corBadge: "bg-purple-600",
      descricao: "Mapeamento e desenvolvimento contínuo de competências avançadas — Taxonomia de Categorias, Neurociência do Consumo, CRO Visual (imagens de alta conversão), SEO On-Page & Engenharia de IA. Transformando a área em referência técnica complementar para antecipar cenários e otimizar novos projetos."
    }
  ],

  // Seção 8: Otimização de Produtos por Canais
  funilNovo: {
    siteIndicador: {
      nome: "Site Próprio (E-commerce bringIT)",
      receita: "R$ 34.226.721,33",
      pctGeral: "32,28%",
      subtitulo: "Canal isolado do funil abaixo — foco exclusivo na estratégia de segmentação de produto por canal de marketplace."
    },
    bocaBarra: [
      { canal: "Mercado Livre", pctMarketplaces: 49.86, cor: "bg-amber-400 text-amber-950" },
      { canal: "MLFULL", pctMarketplaces: 23.98, cor: "bg-amber-500 text-white" },
      { canal: "Shopee", pctMarketplaces: 18.09, cor: "bg-orange-500 text-white" },
      { canal: "Kabum", pctMarketplaces: 6.50, cor: "bg-[#00A3FF] text-white" },
      { canal: "Tiktok Shop", pctMarketplaces: 1.05, cor: "bg-slate-800 text-white" },
      { canal: "Temu", pctMarketplaces: 0.52, cor: "bg-red-500 text-white" }
    ],
    bocaLegendaAgrupada: [
      { 
        canal: "Total Mercado Livre (ML + MLFULL)", 
        receita: "R$ 53.011.026,40", 
        pctMarketplaces: "73,84%", 
        detalhePct: "Meli: 49,86% | MLFULL: 23,98%",
        destaque: true
      },
      { canal: "Shopee", receita: "R$ 12.989.666,96", pctMarketplaces: "18,09%", destaque: false },
      { canal: "Kabum", receita: "R$ 4.668.845,16", pctMarketplaces: "6,50%", destaque: false },
      { canal: "Tiktok Shop", receita: "R$ 755.933,32", pctMarketplaces: "1,05%", destaque: false },
      { canal: "Temu", receita: "R$ 369.837,21", pctMarketplaces: "0,52%", destaque: false }
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
  }
};