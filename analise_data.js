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

  // Seção 1: Diagnóstico de Demandas & Gargalos Operacionais
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

  // Seção 2: Rotinas Oficiais Atualizadas (Marketplace)
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

  // Seção 2: Rotinas Oficiais Atualizadas (Site)
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

  // Seção 3: Macro Cronograma Semanal
  cronograma: [
    {
      dia: "Segunda-feira",
      foco: "Alinhamento & Ponte de Comando",
      puxadas: ["Triagem de Service Desk acumulado", "Ponte de Comando (Pausas/Reativações)"],
      empurradas: ["Auditoria de 404 & URLs Quebradas"],
      slaMeta: "Concluir triagem até 12h"
    },
    {
      dia: "Terça-feira",
      foco: "Lançamentos & Conexões",
      puxadas: ["Cadastro de Produtos Novos (Lotes)", "Conexão de Canais Secundários"],
      empurradas: ["Revisão de Termos de Busca sem resultado"],
      slaMeta: "Publicar lotes em até 24h"
    },
    {
      dia: "Quarta-feira",
      foco: "Qualidade & Análise de Devoluções",
      puxadas: ["Análise de Devoluções e Reclamações de RMA", "Auditoria Mercado Livre (Em Revisão)"],
      empurradas: ["Ajustes de fichas técnicas e compatibilidades"],
      slaMeta: "Tratar 100% dos alertas ML"
    },
    {
      dia: "Quinta-feira",
      foco: "SEO, Banners & Cauda Longa",
      puxadas: ["Complemento Cauda Longa (Numbimetrics)", "Otimização de SEO On-Page"],
      empurradas: ["Atualização de Vitrines e Banners Home"],
      slaMeta: "Ajuste de top 20 SKUs"
    },
    {
      dia: "Sexta-feira",
      foco: "Phase Out, KPIs & Giro de Ideias",
      puxadas: ["Pausa Phase Out / No Turn", "Preenchimento de KPIs da Semana"],
      empurradas: ["Dinâmica de Giro de Ideias (Quinzenal)"],
      slaMeta: "Fechamento de chamados da semana"
    }
  ],

  // Seção 4: Estrutura do Funil de Conversão
  funil: {
    canaisCore: ["Mercado Livre", "Shopee", "Kabum"],
    canaisEntrada: ["Mercado Livre", "Shopee", "Kabum", "TikTok", "Temu"],
    etapas: [
      {
        etapa: "Entrada & Atração (Marketplaces)",
        descricao: "Geração de tráfego massivo e primeira compra no cliente utilizando canais de giro rápido (TikTok, Temu, Shopee, Meli).",
        cor: "bg-[#00A3FF]"
      },
      {
        etapa: "Qualificação & Experiência",
        descricao: "Entrega com excelência, encarte na caixa e convite para conhecer o portfólio completo na loja oficial.",
        cor: "bg-sky-600"
      },
      {
        etapa: "Conversão no Site Próprio / Canais Fixos",
        descricao: "Migração e fidelização do cliente com margem cheia, suporte especializado e cupons exclusivos no e-commerce bringIT.",
        cor: "bg-[#1C275C]"
      }
    ]
  },

  // Seção 5: Matriz de Divisão de Contas
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
  }
};