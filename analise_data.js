// analise_data.js - Base de Dados para a LP de Apresentação de Análises bringIT

const DATA_ANALISE = {
  // Pilares de Atuação
  pilares: [
    { id: "novos", nome: "Produtos Novos", cor: "bg-blue-500", icone: "fa-solid fa-box-open" },
    { id: "catalogo", nome: "Melhoria de Catálogo", cor: "bg-emerald-500", icone: "fa-solid fa-sliders" },
    { id: "operacional", nome: "Service Desk / Operacional", cor: "bg-amber-500", icone: "fa-solid fa-headset" },
    { id: "qualidade", nome: "SEO & Qualidade", cor: "bg-purple-500", icone: "fa-solid fa-chart-line" }
  ],

  // Seção 1: Diagnóstico de Demandas & Gargalos Operacionais
  gargalos: [
    {
      id: "g1",
      titulo: "Produtos Novos (Lotes Novos & Cauda Longa)",
      pilar: "novos",
      gerador: true,
      origem: "Chegada de Lotes Importação / Numbimetrics / Chamados",
      descricao: "Alto volume de cadastro e conexão de novos SKUs nos canais e no site. Necessita de esteira rápida para evitar acúmulo e atraso na publicação.",
      sla: "24h a 48h úteis",
      acoes: ["Conexão direta de anúncios", "Validação de tributação e NCM", "Cadastro no Magento/Platz"]
    },
    {
      id: "g2",
      titulo: "Service Desk (Correções e Criações)",
      pilar: "operacional",
      gerador: true,
      origem: "Atendimento de Chamados Internos (Vendas, SAC, Compras)",
      descricao: "Demandas pontuais que interrompem o fluxo contínuo. Exige triagem rígida para não travar a rotina diária dos analistas.",
      sla: "24h para triagem",
      acoes: ["Correção de título/descrição", "Ajuste de atributos e compatibilidades", "RMA Erro de Anúncios"]
    },
    {
      id: "g3",
      titulo: "Análise de Termos de Busca",
      pilar: "catalogo",
      gerador: true,
      origem: "Relatórios de busca sem resultado e palavras-chave de canais",
      descricao: "Identificação de buscas sem conversão no site e marketplaces para enriquecimento de sinônimos, títulos e tags.",
      sla: "Semanal",
      acoes: ["Criação de sinônimos na busca", "Ajuste de SEO On-Page", "Inclusão de Part Numbers buscados"]
    },
    {
      id: "g4",
      titulo: "Phase Out & No Turn",
      pilar: "catalogo",
      gerador: true,
      origem: "Produtos fora de linha e sem giro de estoque",
      descricao: "Limpeza e pausa preventiva de anúncios sem estoque ou fora de linha para otimizar a relevância das lojas e evitar penalidades.",
      sla: "Quinzenal",
      acoes: ["Inativação em massa de SKUs sem giro", "Ajuste de ofertas de substitutos", "Pausa em canais secundários"]
    },
    {
      id: "g5",
      titulo: "Monitoramento de URL (Redirects 404 & Erros)",
      pilar: "qualidade",
      gerador: true,
      origem: "Google Search Console / Logs do Magento",
      descricao: "Mapeamento de links quebrados para evitar perda de tráfego orgânico e prejuízo na experiência do cliente no e-commerce.",
      sla: "48h úteis",
      acoes: ["Aplicações de redirects 301", "Ajuste de links internos quebrados", "Homologação de canonicals"]
    },
    {
      id: "g6",
      titulo: "Análise de Devoluções",
      pilar: "qualidade",
      gerador: true,
      origem: "Relatórios de SAC, RMA e Reclamações de Canais",
      descricao: "Identificação de devoluções causadas por erro de compatibilidade ou ficha técnica incomum para correção imediata dos anúncios.",
      sla: "Semanal",
      acoes: ["Ajuste imediato de compatibilidade", "Correção de fotos e especificações", "Feedback para Compras/SAC"]
    }
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
      { canal: "Mercado Livre", conta: "SC / SP / PR / MG", responsavel: "Maria Soares" },
      { canal: "Shopee", conta: "SC / SP / MG", responsavel: "Raqueline Souza" },
      { canal: "Kabum", conta: "SC / SP / MG", responsavel: "Raqueline Souza" },
      { canal: "TikTok", conta: "SC", responsavel: "Raqueline Souza" },
      { canal: "Temu", conta: "SC", responsavel: "Maria Soares" },
      { canal: "Amazon 1P", conta: "SC", responsavel: "Raqueline Souza" }
    ],
    proposta: [
      { canal: "Mercado Livre", conta: "SC / SP", responsavel: "Maria Soares", badge: "Core ML" },
      { canal: "Mercado Livre", conta: "SP (PR) / MG", responsavel: "Daniela Lourenço", badge: "Expansão ML" },
      { canal: "Temu", conta: "SC", responsavel: "Daniela Lourenço", badge: "Novos Canais" },
      { canal: "TikTok", conta: "Geral", responsavel: "Daniela Lourenço", badge: "Social Commerce" },
      { canal: "Shopee", conta: "SC / SP / MG", responsavel: "Raqueline Souza", badge: "Core Shopee" },
      { canal: "Kabum", conta: "SC / SP / MG", responsavel: "Raqueline Souza", badge: "Core Tech" },
      { canal: "Amazon 1P", conta: "SC", responsavel: "Raqueline Souza", badge: "1P B2B" }
    ]
  }
};