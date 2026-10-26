// site.js
const DATA_SITE = [
  {
    id: 201,
    atividade: "Service Desk l Criar novos Cadastros - Cauda Longa",
    periodicidade: "Conforme Demanda",
    responsavel: "Patrick",
    prioridade: "Alta",
    tipo: "Service Desk"
  },
  {
    id: 202,
    atividade: "Service Desk l RMA - Erro de Anúncio",
    periodicidade: "Conforme Demanda",
    responsavel: "Patrick",
    prioridade: "Alta",
    tipo: "Service Desk"
  },
  {
    id: 203,
    atividade: "Service Desk l Correção de Anúncio",
    periodicidade: "Conforme Demanda",
    responsavel: "Patrick",
    prioridade: "Alta",
    tipo: "Service Desk"
  },
  {
    id: 204,
    atividade: "Service Desk l Pausar ou Ativar Anúncios",
    periodicidade: "Conforme Demanda",
    responsavel: "Patrick",
    prioridade: "Média",
    tipo: "Service Desk"
  },
  {
    id: 205,
    atividade: "Service Desk l Melhorias em Anúncios",
    periodicidade: "Conforme Demanda",
    responsavel: "Ingrid Fabris",
    prioridade: "Média",
    tipo: "Service Desk"
  },
  {
    id: 206,
    atividade: "Service Desk l Melhorias/Alterações Site",
    periodicidade: "Conforme Demanda",
    responsavel: "Ingrid Fabris",
    prioridade: "Alta",
    tipo: "Service Desk"
  },
  {
    id: 207,
    atividade: "Service Desk l Novos Cadastros",
    periodicidade: "Conforme Demanda",
    responsavel: "Patrick",
    prioridade: "Alta",
    tipo: "Service Desk"
  },
  {
    id: 208,
    atividade: "Novos Produtos l Cadastro Sistema de Cadastro",
    periodicidade: "Conforme Demanda",
    responsavel: "Patrick",
    prioridade: "Alta",
    tipo: "Novos Produtos"
  },
  {
    id: 209,
    atividade: "Novos Produtos l Criação de conteúdo",
    periodicidade: "Conforme Demanda",
    responsavel: "Ingrid Fabris",
    prioridade: "Alta",
    tipo: "Novos Produtos"
  },
  {
    id: 210,
    atividade: "Novos Produtos l Criação de nova categoria",
    periodicidade: "Conforme Demanda",
    responsavel: "Ingrid Fabris",
    prioridade: "Média",
    tipo: "Novos Produtos"
  },
  {
    id: 211,
    atividade: "Novos Produtos l Estudo e cadastro de novos atributos",
    periodicidade: "Conforme Demanda",
    responsavel: "Ingrid Fabris",
    prioridade: "Média",
    tipo: "Novos Produtos"
  },
  {
    id: 212,
    atividade: "Novos Produtos l Cadastrar novos produtos no Bahn",
    periodicidade: "Conforme Demanda",
    responsavel: "Patrick",
    prioridade: "Alta",
    tipo: "Novos Produtos"
  },
  {
    id: 213,
    atividade: "Novos Produtos l Search Console - Realizar indexação de URL",
    periodicidade: "Conforme Demanda",
    responsavel: "Patrick",
    prioridade: "Média",
    tipo: "SEO / Ferramentas"
  },
  {
    id: 214,
    atividade: "Novos Produtos l Google Merchant - Realizar cadastro de produto",
    periodicidade: "Conforme Demanda",
    responsavel: "Ingrid Fabris",
    prioridade: "Média",
    tipo: "Google Merchant"
  },
  {
    id: 215,
    atividade: "Novos Produtos l Preenchimento do documento - Registro do Portfólio",
    periodicidade: "Conforme Demanda",
    responsavel: "Patrick",
    prioridade: "Baixa",
    tipo: "Documentação"
  },
  {
    id: 216,
    atividade: "Novos Produtos l Validação das Imagens",
    periodicidade: "Conforme Demanda",
    responsavel: "Jennifer",
    prioridade: "Alta",
    tipo: "Imagens"
  },
  {
    id: 217,
    atividade: "Novos Produtos l Validação dos anúnios Ativos",
    periodicidade: "Conforme Demanda",
    responsavel: "Ingrid Fabris",
    prioridade: "Alta",
    tipo: "Auditoria"
  },
  {
    id: 218,
    atividade: "Novos Produtos l Conectar com Magento e Platz",
    periodicidade: "Conforme Demanda",
    responsavel: "Patrick",
    prioridade: "Alta",
    tipo: "Integração"
  },
  {
    id: 219,
    atividade: "Realizar treinamento e orientação ao time de Cadastro",
    periodicidade: "Diariamente",
    responsavel: "Ingrid Fabris",
    prioridade: "Alta",
    tipo: "Gestão / Treinamento"
  },
  {
    id: 220,
    atividade: "Site l Mapear e realizar redirect de anúncios desabilitados/excluídos",
    periodicidade: "Diariamente",
    responsavel: "Jennifer",
    prioridade: "Média",
    tipo: "SEO / Redirect"
  },
  {
    id: 221,
    atividade: "Padrão e qualidade das imagens dos anúncios",
    periodicidade: "Diariamente",
    responsavel: "Jennifer",
    prioridade: "Alta",
    tipo: "Imagens"
  },
  {
    id: 222,
    atividade: "Analisar termos de busca e indicar ajustes",
    periodicidade: "Diariamente",
    responsavel: "Jennifer",
    prioridade: "Alta",
    tipo: "SEO / Busca"
  },
  {
    id: 223,
    atividade: "Executar ajustes nos anúncios",
    periodicidade: "Diariamente",
    responsavel: "Patrick",
    prioridade: "Alta",
    tipo: "Manutenção"
  },
  {
    id: 224,
    atividade: "Validar ajustes realizados e busca do Site",
    periodicidade: "Diariamente",
    responsavel: "Ingrid Fabris",
    prioridade: "Alta",
    tipo: "Auditoria"
  },
  {
    id: 225,
    atividade: "Melhorias no Site l Filtros",
    periodicidade: "Conforme Demanda",
    responsavel: "Ingrid Fabris",
    prioridade: "Média",
    tipo: "Melhorias UX"
  },
  {
    id: 226,
    atividade: "Melhorias no Site l Categorias",
    periodicidade: "Conforme Demanda",
    responsavel: "Ingrid Fabris",
    prioridade: "Média",
    tipo: "Melhorias UX"
  },
  {
    id: 227,
    atividade: "Melhorias no Site l Menu",
    periodicidade: "Conforme Demanda",
    responsavel: "Ingrid Fabris",
    prioridade: "Média",
    tipo: "Melhorias UX"
  },
  {
    id: 228,
    atividade: "Site l Criar novas categorias",
    periodicidade: "Conforme Demanda",
    responsavel: "Ingrid Fabris",
    prioridade: "Média",
    tipo: "Melhorias UX"
  },
  {
    id: 229,
    atividade: "Devoluções l Analisar casos de devoluções - Site",
    periodicidade: "Semanal",
    responsavel: "Patrick",
    prioridade: "Alta",
    tipo: "Análise / RMA"
  },
  {
    id: 230,
    atividade: "Participar de projetos de melhorias da área de Cadastro",
    periodicidade: "Conforme Demanda",
    responsavel: "Ingrid Fabris",
    prioridade: "Média",
    tipo: "Projetos"
  },
  {
    id: 231,
    atividade: "Base de Compatibilidade l Analisar e realizar cadastros",
    periodicidade: "Semanal",
    responsavel: "Patrick",
    prioridade: "Alta",
    tipo: "Compatibilidade"
  },
  {
    id: 232,
    atividade: "Google Merchant l Acompanhar e Corrigir erros identificados",
    periodicidade: "2x Semana",
    responsavel: "Ingrid Fabris",
    prioridade: "Alta",
    tipo: "Google Merchant"
  },
  {
    id: 233,
    atividade: "Realizar correção das URLs com erro 404",
    periodicidade: "2x Semana",
    responsavel: "Jennifer",
    prioridade: "Alta",
    tipo: "SEO / Error 404"
  },
  {
    id: 234,
    atividade: "Realizar análise da performance dos anúncios do Site",
    periodicidade: "Quinzenal",
    responsavel: "Ingrid Fabris",
    prioridade: "Média",
    tipo: "Performance"
  },
  {
    id: 235,
    atividade: "Fotógrafo China l Indicar necessidade de novas fotos",
    periodicidade: "Conforme Demanda",
    responsavel: "Jennifer",
    prioridade: "Média",
    tipo: "Imagens"
  },
  {
    id: 236,
    atividade: "Fotógrafo Brasil l Realizar contato direto para solicitações e alinhamentos de imagens",
    periodicidade: "Conforme Demanda",
    responsavel: "Jennifer",
    prioridade: "Média",
    tipo: "Imagens"
  },
  {
    id: 237,
    atividade: "Indicadores Imagens l Analisar indicadores de performance dos anúncios com imagens atualizadas",
    periodicidade: "Semanal",
    responsavel: "Jennifer",
    prioridade: "Média",
    tipo: "Indicadores"
  },
  {
    id: 238,
    atividade: "Preenchimento e acompanhamento de KPIs",
    periodicidade: "Semanal",
    responsavel: "Todos",
    prioridade: "Alta",
    tipo: "KPIs"
  }
];