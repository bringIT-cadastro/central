// marketplace.js

// Mapeamento de Logos Oficiais dos Canais
const LOGOS_CANOES = {
  "Mercado Livre": "https://upload.wikimedia.org/wikipedia/pt/0/04/Logotipo_MercadoLivre.png?utm_source=pt.wikipedia.org&utm_campaign=index&utm_content=original",
  "Kabum": "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/aa/Logotipo_da_KaBuM%21.svg/3840px-Logotipo_da_KaBuM%21.svg.png?utm_source=pt.wikipedia.org&utm_campaign=index&utm_content=thumbnail",
  "Shopee": "https://upload.wikimedia.org/wikipedia/commons/f/fe/Shopee.svg?utm_source=pt.wikipedia.org&utm_campaign=index&utm_content=original",
  "Amazon 1P": "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/3840px-Amazon_logo.svg.png?utm_source=pt.wikipedia.org&utm_campaign=index&utm_content=thumbnail",
  "Temu": "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a6/Temu_logo.svg/3840px-Temu_logo.svg.png?utm_source=pt.wikipedia.org&utm_campaign=index&utm_content=thumbnail",
  "TikTok": "https://svgstack.com/media/img/tiktok-shop-logo-HaIa723595.webp",
  "Site": "https://www.bringit.com.br/assets/images/brand/logo-bringit.svg"
};

// 1. Mapeamento de Canais e Contas por Responsável
const DATA_MARKETPLACE_CANOES = [
  { canal: "Mercado Livre", conta: "SC", responsavel: "Maria Soares" },
  { canal: "Mercado Livre", conta: "SP", responsavel: "Maria Soares" },
  { canal: "Mercado Livre", conta: "PR", responsavel: "Maria Soares" },
  { canal: "Mercado Livre", conta: "MG", responsavel: "Maria Soares" },
  { canal: "Shopee", conta: "SC", responsavel: "Raqueline Souza" },
  { canal: "Shopee", conta: "SP", responsavel: "Raqueline Souza" },
  { canal: "Shopee", conta: "MG", responsavel: "Raqueline Souza" },
  { canal: "Kabum", conta: "SC", responsavel: "Raqueline Souza" },
  { canal: "Kabum", conta: "SP", responsavel: "Raqueline Souza" },
  { canal: "Kabum", conta: "MG", responsavel: "Raqueline Souza" },
  { canal: "TikTok", conta: "SC", responsavel: "Raqueline Souza" },
  { canal: "Temu", conta: "SC", responsavel: "Maria Soares" },
  { canal: "Amazon 1P", conta: "SC", responsavel: "Raqueline Souza" }
];

// 2. Base Geral de Atividades e Rotinas de Marketplace
const DATA_MARKETPLACE = [
  {
    id: 101,
    atividade: "Novos Produtos l Conexão de Novos Anúncios",
    periodicidade: "Conforme Demanda",
    prioridade: "Alta",
    tipo: "Conexão e Cadastro"
  },
  {
    id: 102,
    atividade: "Ponte de Comando l Novos Anúncios",
    periodicidade: "Diariamente",
    prioridade: "Alta",
    tipo: "Ponte de Comando"
  },
  {
    id: 103,
    atividade: "Ponte de Comando l Atualização de Atributos",
    periodicidade: "Diariamente",
    prioridade: "Média",
    tipo: "Ponte de Comando"
  },
  {
    id: 104,
    atividade: "Ponte de Comando l Pausa de Anúncios",
    periodicidade: "Diariamente",
    prioridade: "Alta",
    tipo: "Ponte de Comando"
  },
  {
    id: 105,
    atividade: "Ponte de Comando l Reativação de Anúncios",
    periodicidade: "Diariamente",
    prioridade: "Média",
    tipo: "Ponte de Comando"
  },
  {
    id: 106,
    atividade: "Conferência e correção de cadastros diretamente dentro dos canais, produtos inativos, bloqueados…",
    periodicidade: "Semanal",
    prioridade: "Alta",
    tipo: "Auditoria"
  },
  {
    id: 107,
    atividade: "Mercado Livre l Manutenção e correção dos anúncios 'Em Revisão'",
    periodicidade: "Semanal",
    prioridade: "Alta",
    tipo: "Mercado Livre"
  },
  {
    id: 108,
    atividade: "Acompanhamento dos indicadores dos marketplaces e identificação de correções de anúncios",
    periodicidade: "Semanal",
    prioridade: "Média",
    tipo: "Indicadores"
  },
  {
    id: 109,
    atividade: "Manutenção de anúncios para inativação de produtos - Inativar e acompanhar pausa dos anúncios",
    periodicidade: "Conforme Demanda",
    prioridade: "Média",
    tipo: "Manutenção"
  },
  {
    id: 110,
    atividade: "Service Desk l Fila - Conexão de Anúncios",
    periodicidade: "Conforme Demanda",
    prioridade: "Alta",
    tipo: "Service Desk"
  },
  {
    id: 111,
    atividade: "Service Desk l Fila - Correção de Anúncios",
    periodicidade: "Conforme Demanda",
    prioridade: "Alta",
    tipo: "Service Desk"
  },
  {
    id: 112,
    atividade: "Service Desk l Fila - RMA Erro de Anúncios",
    periodicidade: "Conforme Demanda",
    prioridade: "Alta",
    tipo: "Service Desk"
  },
  {
    id: 113,
    atividade: "Service Desk l Pausar ou Ativar Anúncios",
    periodicidade: "Conforme Demanda",
    prioridade: "Média",
    tipo: "Service Desk"
  },
  {
    id: 114,
    atividade: "Validação de SKUs que chegam em importações",
    periodicidade: "Conforme Demanda",
    prioridade: "Média",
    tipo: "Validação"
  },
  {
    id: 115,
    atividade: "Manutenção vinculo de identidade Platz x Canal",
    periodicidade: "Conforme Demanda",
    prioridade: "Média",
    tipo: "Integração"
  },
  {
    id: 116,
    atividade: "Criação e atualização de documentação dos canais",
    periodicidade: "Conforme Demanda",
    prioridade: "Baixa",
    tipo: "Documentação"
  },
  {
    id: 117,
    atividade: "Realizar conexão de SKUs ainda sem conexões nos canais",
    periodicidade: "2x Semana",
    prioridade: "Alta",
    tipo: "Conexão e Cadastro"
  },
  {
    id: 118,
    atividade: "Acompanhamento de performance dos anúncios - Visitas, Impressões, Cliques...",
    periodicidade: "Quinzenal",
    prioridade: "Média",
    tipo: "Performance"
  },
  {
    id: 119,
    atividade: "Preenchimento e acompanhamento de KPIs",
    periodicidade: "Semanal",
    prioridade: "Média",
    tipo: "KPIs"
  },
  {
    id: 120,
    atividade: "Acompanhamento e Análise de devoluções de cada canal",
    periodicidade: "Semanal",
    prioridade: "Alta",
    tipo: "Análise / RMA"
  }
];
