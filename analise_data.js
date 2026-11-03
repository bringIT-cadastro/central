// analise_data.js - Base de Dados Atualizada para LP de Análises bringIT

const DATA_ANALISE = {
  // 3 Pilares Estratégicos (SEO & Qualidade unificado em Melhoria de Catálogo)
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
      gargaloMapeado: "Configuração de atributos ausentes.",
      sla: "24h a 48h úteis",
      sugestoesAcoes: [
        "Nova ronda de melhoria de processos do fluxo completo, atuar para objetivo de facilidade e segurança 100%.",
        "Fluxo bem amarrado, garantir continuidade."
      ]
    },
    {
      id: "g2",
      titulo: "Service Desk (Correções e Criações)",
      pilar: "operacional",
      gargaloMapeado: "Possível acúmulo por distribuição e alta demanda.",
      sla: "24h para triagem",
      sugestoesAcoes: [
        "Analisar Alternância de Responsável Único semanal.",
        "Garante atendimento mais ágil.",
        "Treina analistas em mais situações.",
        "Interrompe menos nas tramitações de Ticket."
      ]
    },
    {
      id: "g3",
      titulo: "Análise de Termos de Busca",
      pilar: "catalogo",
      gargaloMapeado: "Rotina potencial de rodízio bimestral/quadrimestre.",
      sla: "Semanal",
      sugestoesAcoes: [
        "Garantir concentração ao máximo em um único analista."
      ]
    },
    {
      id: "g4",
      titulo: "Phase Out & No Turn",
      pilar: "catalogo",
      gargaloMapeado: "Analistas não estão aplicando a devida importância nas ações finais pós análise.",
      sla: "Quinzenal",
      sugestoesAcoes: [
        "Trazer grandes cases de ações e projeções para equipe engajar melhor.",
        "Analisar espaçamento maior, talvez verificação a cada duas semanas, com SLA maior para garantir ações."
      ]
    },
    {
      id: "g5",
      titulo: "Monitoramento de URL (Redirects 404 & Erros)",
      pilar: "catalogo",
      gargaloMapeado: "Rotina potencial de rodízio bimestral/quadrimestre.",
      sla: "48h úteis",
      sugestoesAcoes: [
        "Resolver problema do apontamento negativo do Google Search Console."
      ]
    },
    {
      id: "g6",
      titulo: "Análise de Devoluções",
      pilar: "catalogo",
      gargaloMapeado: "Analistas não preenchem controles devidamente. Possível não análise dos casos repassados.",
      sla: "Semanal",
      sugestoesAcoes: [
        "Analisar Alternância de Responsável Único semanal.",
        "Garante atendimento mais ágil.",
        "Treina analistas em mais situações.",
        "Interrompe menos nas tramitações de Ticket."
      ]
    }
  ],

  // Seção 2: Rotinas Mapeadas Separadas por Colunas (Marketplace x Site)
  rotinasMarketplace: [
    { pilar: "novos", nome: "Ponte de Comando l Novos Anúncios" },
    { pilar: "novos", nome: "Realizar conexão de SKUs ainda sem conexões nos canais" },
    { pilar: "operacional", nome: "Ponte de Comando l Atualização de Atributos" },
    { pilar: "operacional", nome: "Ponte de Comando l Pausa de Anúncios" },
    { pilar: "operacional", nome: "Ponte de Comando l Reativação de Anúncios" },
    { pilar: "catalogo", nome: "Conferência e correção de cadastros diretamente dentro dos canais" },
    { pilar: "catalogo", nome: "Mercado Livre l Manutenção dos anúncios 'Em Revisão'" },
    { pilar: "catalogo", nome: "Acompanhamento dos indicadores dos marketplaces" },
    { pilar: "operacional", nome: "Validação de SKUs que chegam em importações" },
    { pilar: "operacional", nome: "Manutenção vínculo de identidade Platz x Canal" }
  ],

  rotinasSite: [
    { pilar: "novos", nome: "Validação e aprovação de novos cadastros de produtos no site" },
    { pilar: "catalogo", nome: "Verificação de compatividades e especificações técnicas nas fichas" },
    { pilar: "catalogo", nome: "Atualização de banners, vitrines e categorias da Home" },
    { pilar: "catalogo", nome: "Otimização de SEO On-Page (Title, Meta Description, H1)" },
    { pilar: "operacional", nome: "Monitoramento de erros de integração Platz x Magento/VTEX" },
    { pilar: "catalogo", nome: "Gestão do Feed de Produtos do Google Merchant Center" },
    { pilar: "catalogo", nome: "Tratamento e edição de imagens de produtos" },
    { pilar: "catalogo", nome: "Revisão e enriquecimento de descrições de produtos curva A" },
    { pilar: "catalogo", nome: "Auditoria de cross-selling e upselling (Produtos Relacionados)" },
    { pilar: "operacional", nome: "Atribuição e atualização de Part Numbers no catálogo do site" }
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
      empurradas: ["Ajustes de fichas técnicas e compatividades"],
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

  // Seção 5: Matriz de Divisão de Contas com Avatares e Foto Daniela Atualizada
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