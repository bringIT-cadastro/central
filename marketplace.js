// marketplace.js - Logos, Matriz de Lojas e Rotinas da Aba Marketplace

const LOGOS_CANOES = {
  "Mercado Livre": "mercadolivre.png",
  "Kabum": "kabum.png",
  "Shopee": "shopee.png",
  "Amazon 1P": "amazon.png",
  "Temu": "temu.png",
  "TikTok": "tiktok.png",
  "Site": "https://www.bringit.com.br/assets/images/brand/logo-bringit.svg"
};

const DATA_MARKETPLACE_CANOES = [
  { canal: "Mercado Livre", conta: "SC", responsavel: "Maria Soares", fotoUrl: "maria.jpeg" },
  { canal: "Mercado Livre", conta: "SP", responsavel: "Maria Soares", fotoUrl: "maria.jpeg" },
  { canal: "Mercado Livre", conta: "PR", responsavel: "Maria Soares", fotoUrl: "maria.jpeg" },
  { canal: "Mercado Livre", conta: "MG", responsavel: "Maria Soares", fotoUrl: "maria.jpeg" },
  { canal: "Shopee", conta: "SC", responsavel: "Raqueline Souza", fotoUrl: "raqueline.jpg" },
  { canal: "Shopee", conta: "SP", responsavel: "Raqueline Souza", fotoUrl: "raqueline.jpg" },
  { canal: "Shopee", conta: "MG", responsavel: "Raqueline Souza", fotoUrl: "raqueline.jpg" },
  { canal: "Kabum", conta: "SC", responsavel: "Raqueline Souza", fotoUrl: "raqueline.jpg" },
  { canal: "Kabum", conta: "SP", responsavel: "Raqueline Souza", fotoUrl: "raqueline.jpg" },
  { canal: "Kabum", conta: "MG", responsavel: "Raqueline Souza", fotoUrl: "raqueline.jpg" },
  { canal: "TikTok", conta: "SC", responsavel: "Raqueline Souza", fotoUrl: "raqueline.jpg" },
  { canal: "Temu", conta: "SC", responsavel: "Maria Soares", fotoUrl: "maria.jpeg" },
  { canal: "Amazon 1P", conta: "SC", responsavel: "Raqueline Souza", fotoUrl: "raqueline.jpg" }
];

const DATA_MARKETPLACE = [
  {
    id: 101,
    atividade: "Novos Produtos l Conexão de Novos Anúncios",
    periodicidade: "Conforme Demanda",
    prioridade: "Alta",
    tipo: "Conexão e Cadastro",
    materiais: [],
    tutoriais: []
  },
  {
    id: 102,
    atividade: "Ponte de Comando l Novos Anúncios",
    periodicidade: "Diariamente",
    prioridade: "Alta",
    tipo: "Ponte de Comando",
    materiais: [
      { nome: "Planilha de Acompanhamento - Ponte", url: "#" }
    ],
    tutoriais: [
      { nome: "Procedimento Padrão Ponte de Comando", url: "#" }
    ]
  },
  {
    id: 103,
    atividade: "Ponte de Comando l Atualização de Atributos",
    periodicidade: "Diariamente",
    prioridade: "Média",
    tipo: "Ponte de Comando",
    materiais: [],
    tutoriais: []
  },
  {
    id: 104,
    atividade: "Ponte de Comando l Pausa de Anúncios",
    periodicidade: "Diariamente",
    prioridade: "Alta",
    tipo: "Ponte de Comando",
    materiais: [],
    tutoriais: []
  },
  {
    id: 105,
    atividade: "Ponte de Comando l Reativação de Anúncios",
    periodicidade: "Diariamente",
    prioridade: "Média",
    tipo: "Ponte de Comando",
    materiais: [],
    tutoriais: []
  },
  {
    id: 106,
    atividade: "Conferência e correção de cadastros diretamente dentro dos canais, produtos inativos, bloqueados…",
    periodicidade: "Semanal",
    prioridade: "Alta",
    tipo: "Auditoria",
    materiais: [],
    tutoriais: []
  },
  {
    id: 107,
    atividade: "Mercado Livre l Manutenção e correção dos anúncios 'Em Revisão'",
    periodicidade: "Semanal",
    prioridade: "Alta",
    tipo: "Mercado Livre",
    materiais: [],
    tutoriais: []
  },
  {
    id: 108,
    atividade: "Acompanhamento dos indicadores dos marketplaces e identificação de correções de anúncios",
    periodicidade: "Semanal",
    prioridade: "Média",
    tipo: "Indicadores",
    materiais: [],
    tutoriais: []
  },
  {
    id: 109,
    atividade: "Manutenção de anúncios para inativação de produtos - Inativar e acompanhar pausa dos anúncios",
    periodicidade: "Conforme Demanda",
    prioridade: "Média",
    tipo: "Manutenção",
    materiais: [],
    tutoriais: []
  },
  {
    id: 110,
    atividade: "Service Desk l Fila - Conexão de Anúncios",
    periodicidade: "Conforme Demanda",
    prioridade: "Alta",
    tipo: "Service Desk",
    materiais: [],
    tutoriais: []
  },
  {
    id: 111,
    atividade: "Service Desk l Fila - Correção de Anúncios",
    periodicidade: "Conforme Demanda",
    prioridade: "Alta",
    tipo: "Service Desk",
    materiais: [],
    tutoriais: []
  },
  {
    id: 112,
    atividade: "Service Desk l Fila - RMA Erro de Anúncios",
    periodicidade: "Conforme Demanda",
    prioridade: "Alta",
    tipo: "Service Desk",
    materiais: [],
    tutoriais: []
  },
  {
    id: 113,
    atividade: "Service Desk l Pausar ou Ativar Anúncios",
    periodicidade: "Conforme Demanda",
    prioridade: "Média",
    tipo: "Service Desk",
    materiais: [],
    tutoriais: []
  },
  {
    id: 114,
    atividade: "Validação de SKUs que chegam em importações",
    periodicidade: "Conforme Demanda",
    prioridade: "Média",
    tipo: "Validação",
    materiais: [],
    tutoriais: []
  },
  {
    id: 115,
    atividade: "Manutenção vínculo de identidade Platz x Canal",
    periodicidade: "Conforme Demanda",
    prioridade: "Média",
    tipo: "Integração",
    materiais: [],
    tutoriais: []
  },
  {
    id: 116,
    atividade: "Criação e atualização de documentação dos canais",
    periodicidade: "Conforme Demanda",
    prioridade: "Baixa",
    tipo: "Documentação",
    materiais: [],
    tutoriais: []
  },
  {
    id: 117,
    atividade: "Realizar conexão de SKUs ainda sem conexões nos canais",
    periodicidade: "2x Semana",
    prioridade: "Alta",
    tipo: "Conexão e Cadastro",
    materiais: [],
    tutoriais: []
  },
  {
    id: 118,
    atividade: "Acompanhamento de performance dos anúncios - Visitas, Impressões, Cliques...",
    periodicidade: "Quinzenal",
    prioridade: "Média",
    tipo: "Performance",
    materiais: [],
    tutoriais: []
  },
  {
    id: 119,
    atividade: "Preenchimento e acompanhamento de KPIs",
    periodicidade: "Semanal",
    prioridade: "Média",
    tipo: "KPIs",
    materiais: [],
    tutoriais: []
  },
  {
    id: 120,
    atividade: "Acompanhamento e Análise de devoluções de cada canal",
    periodicidade: "Semanal",
    prioridade: "Alta",
    tipo: "Análise / RMA",
    materiais: [],
    tutoriais: []
  }
];
