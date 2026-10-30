// site.js - Dados das Rotinas e Operações da Aba Site

const DATA_SITE = [
  {
    id: 201,
    atividade: "Validação e aprovação de novos cadastros de produtos no site",
    tipo: "Cadastro",
    responsavel: "Patrick Nunes",
    fotoUrl: "patrick.jpeg",
    periodicidade: "Diariamente",
    materiais: [],
    tutoriais: []
  },
  {
    id: 202,
    atividade: "Auditoria de URLs quebradas e redirecionamento de erros 404",
    tipo: "SEO / UX",
    responsavel: "Jennifer Valle",
    fotoUrl: "jennifer.webp",
    periodicidade: "Semanal",
    materiais: [
      { nome: "Base de Redirecionamento 1", url: "https://docs.google.com/spreadsheets/d/1WssHcHW5p5fFtVrSP9sfqCSnYn5n2iW48KEfR99LIhU/edit?gid=879776952#gid=879776952" },
      { nome: "Base de Redirecionamento 2", url: "https://docs.google.com/spreadsheets/d/1RN0wqj-zjfn1cb8zllPLsc1F9I9W-g7QB-mjWK2zaSg/edit?gid=0#gid=0" }
    ],
    tutoriais: [
      { nome: "Procedimento de Ajuste de Redirects no Magento", url: "#" }
    ]
  },
  {
    id: 203,
    atividade: "Verificação de compatibilidades e especificações técnicas nas fichas",
    tipo: "Qualidade",
    responsavel: "Patrick Nunes",
    fotoUrl: "patrick.jpeg",
    periodicidade: "Diariamente",
    materiais: [],
    tutoriais: []
  },
  {
    id: 204,
    atividade: "Atualização de banners, vitrines e categorias da Home",
    tipo: "Comercial",
    responsavel: "Ingrid Fabris",
    fotoUrl: "ingrid.webp",
    periodicidade: "Semanal",
    materiais: [],
    tutoriais: []
  },
  {
    id: 205,
    atividade: "Otimização de SEO On-Page (Title, Meta Description, H1 e alt image)",
    tipo: "SEO / UX",
    responsavel: "Jennifer Valle",
    fotoUrl: "jennifer.webp",
    periodicidade: "Quinzenal",
    materiais: [],
    tutoriais: []
  },
  {
    id: 206,
    atividade: "Monitoramento de erros de integração Platz x Magento/VTEX",
    tipo: "Integração",
    responsavel: "Patrick Nunes",
    fotoUrl: "patrick.jpeg",
    periodicidade: "Diariamente",
    materiais: [],
    tutoriais: []
  },
  {
    id: 207,
    atividade: "Gestão do Feed de Produtos do Google Merchant Center",
    tipo: "Mídia / SEO",
    responsavel: "Ingrid Fabris",
    fotoUrl: "ingrid.webp",
    periodicidade: "Semanal",
    materiais: [],
    tutoriais: []
  },
  {
    id: 208,
    atividade: "Service Desk l Atendimento de Chamados Internos de Cadastro",
    tipo: "Service Desk",
    responsavel: "Patrick Nunes",
    fotoUrl: "patrick.jpeg",
    periodicidade: "Diariamente",
    materiais: [],
    tutoriais: []
  },
  {
    id: 209,
    atividade: "Tratamento e edição de imagens de produtos (fundo branco / padrão bringIT)",
    tipo: "Imagem",
    responsavel: "Jennifer Valle",
    fotoUrl: "jennifer.webp",
    periodicidade: "Diariamente",
    materiais: [],
    tutoriais: []
  },
  {
    id: 210,
    atividade: "Inclusão de manuais e datasheets em PDF nas páginas de produto",
    tipo: "Conteúdo",
    responsavel: "Patrick Nunes",
    fotoUrl: "patrick.jpeg",
    periodicidade: "Conforme Demanda",
    materiais: [],
    tutoriais: []
  },
  {
    id: 211,
    atividade: "Acompanhamento de relatórios de busca interna sem resultado no site",
    tipo: "SEO / UX",
    responsavel: "Jennifer Valle",
    fotoUrl: "jennifer.webp",
    periodicidade: "Semanal",
    materiais: [],
    tutoriais: []
  },
  {
    id: 212,
    atividade: "Conferência de preços de de/por e regras de promoção do site",
    tipo: "Comercial",
    responsavel: "Ingrid Fabris",
    fotoUrl: "ingrid.webp",
    periodicidade: "Semanal",
    materiais: [],
    tutoriais: []
  },
  {
    id: 213,
    atividade: "Revisão e enriquecimento de descrições de produtos curva A",
    tipo: "Conteúdo",
    responsavel: "Jennifer Valle",
    fotoUrl: "jennifer.webp",
    periodicidade: "Quinzenal",
    materiais: [],
    tutoriais: []
  },
  {
    id: 214,
    atividade: "Cadastro e alteração de atributos de peças (Voltagem, Capacidade, Cor...)",
    tipo: "Cadastro",
    responsavel: "Patrick Nunes",
    fotoUrl: "patrick.jpeg",
    periodicidade: "Diariamente",
    materiais: [],
    tutoriais: []
  },
  {
    id: 215,
    atividade: "Alinhamento de lançamentos e novos produtos com time de compras",
    tipo: "Gestão",
    responsavel: "Ingrid Fabris",
    fotoUrl: "ingrid.webp",
    periodicidade: "Semanal",
    materiais: [],
    tutoriais: []
  },
  {
    id: 216,
    atividade: "Auditoria de cross-selling e upselling (Produtos Relacionados)",
    tipo: "Qualidade",
    responsavel: "Patrick Nunes",
    fotoUrl: "patrick.jpeg",
    periodicidade: "Quinzenal",
    materiais: [],
    tutoriais: []
  },
  {
    id: 217,
    atividade: "Análise e correção de produtos desmembrados ou duplicados",
    tipo: "Cadastro",
    responsavel: "Patrick Nunes",
    fotoUrl: "patrick.jpeg",
    periodicidade: "Semanal",
    materiais: [],
    tutoriais: []
  },
  {
    id: 218,
    atividade: "Verificação e manutenção de links de navegação do menu e footer",
    tipo: "SEO / UX",
    responsavel: "Jennifer Valle",
    fotoUrl: "jennifer.webp",
    periodicidade: "Quinzenal",
    materiais: [],
    tutoriais: []
  },
  {
    id: 219,
    atividade: "Acompanhamento de métricas de conversão e rejeição de páginas de produto",
    tipo: "Analytics",
    responsavel: "Ingrid Fabris",
    fotoUrl: "ingrid.webp",
    periodicidade: "Semanal",
    materiais: [],
    tutoriais: []
  },
  {
    id: 220,
    atividade: "Mapeamento de novas famílias de telas, baterias e teclados para catálogo",
    tipo: "Cadastro",
    responsavel: "Patrick Nunes",
    fotoUrl: "patrick.jpeg",
    periodicidade: "Conforme Demanda",
    materiais: [],
    tutoriais: []
  },
  {
    id: 221,
    atividade: "Auditoria de avaliações de clientes nos produtos e moderação de comentários",
    tipo: "Qualidade",
    responsavel: "Jennifer Valle",
    fotoUrl: "jennifer.webp",
    periodicidade: "Semanal",
    materiais: [],
    tutoriais: []
  },
  {
    id: 222,
    atividade: "Gestão e cadastro de cupons de desconto para ações comerciais",
    tipo: "Comercial",
    responsavel: "Ingrid Fabris",
    fotoUrl: "ingrid.webp",
    periodicidade: "Conforme Demanda",
    materiais: [],
    tutoriais: []
  },
  {
    id: 223,
    atividade: "Homologação de novas regras de frete e prazos na plataforma do site",
    tipo: "Integração",
    responsavel: "Ingrid Fabris",
    fotoUrl: "ingrid.webp",
    periodicidade: "Conforme Demanda",
    materiais: [],
    tutoriais: []
  },
  {
    id: 224,
    atividade: "Acompanhamento de indexação de páginas no Google Search Console",
    tipo: "SEO / UX",
    responsavel: "Jennifer Valle",
    fotoUrl: "jennifer.webp",
    periodicidade: "Semanal",
    materiais: [],
    tutoriais: []
  },
  {
    id: 225,
    atividade: "Atribuição e atualização de Part Numbers no catálogo do site",
    tipo: "Cadastro",
    responsavel: "Patrick Nunes",
    fotoUrl: "patrick.jpeg",
    periodicidade: "Diariamente",
    materiais: [],
    tutoriais: []
  },
  {
    id: 226,
    atividade: "Suporte à equipe de SAC e Vendas para dúvidas técnicas de produtos do site",
    tipo: "Service Desk",
    responsavel: "Patrick Nunes",
    fotoUrl: "patrick.jpeg",
    periodicidade: "Diariamente",
    materiais: [],
    tutoriais: []
  },
  {
    id: 227,
    atividade: "Revisão e aplicação de Canonical Tags em páginas de variações",
    tipo: "SEO / UX",
    responsavel: "Jennifer Valle",
    fotoUrl: "jennifer.webp",
    periodicidade: "Quinzenal",
    materiais: [],
    tutoriais: []
  },
  {
    id: 228,
    atividade: "Validação de badges e selos de garantia exibidos na vitrine",
    tipo: "Qualidade",
    responsavel: "Ingrid Fabris",
    fotoUrl: "ingrid.webp",
    periodicidade: "Semanal",
    materiais: [],
    tutoriais: []
  },
  {
    id: 229,
    atividade: "Relatório quinzenal de produtos cadastrados x produtos publicados",
    tipo: "Gestão",
    responsavel: "Ingrid Fabris",
    fotoUrl: "ingrid.webp",
    periodicidade: "Quinzenal",
    materiais: [],
    tutoriais: []
  },
  {
    id: 230,
    atividade: "Inativação preventiva de SKUs fora de linha no catálogo do site",
    tipo: "Manutenção",
    responsavel: "Patrick Nunes",
    fotoUrl: "patrick.jpeg",
    periodicidade: "Semanal",
    materiais: [],
    tutoriais: []
  },
  {
    id: 231,
    atividade: "Ajustes de layout e microcopys nas páginas do checkout e carrinho",
    tipo: "SEO / UX",
    responsavel: "Ingrid Fabris",
    fotoUrl: "ingrid.webp",
    periodicidade: "Conforme Demanda",
    materiais: [],
    tutoriais: []
  },
  {
    id: 232,
    atividade: "Acompanhamento e correção de inconsistências de EAN/GTIN no Google Merchant",
    tipo: "Mídia / SEO",
    responsavel: "Jennifer Valle",
    fotoUrl: "jennifer.webp",
    periodicidade: "Semanal",
    materiais: [],
    tutoriais: []
  },
  {
    id: 233,
    atividade: "Atualização das tabelas de compatibilidade por marca (Dell, HP, Lenovo, Asus...)",
    tipo: "Cadastro",
    responsavel: "Patrick Nunes",
    fotoUrl: "patrick.jpeg",
    periodicidade: "2x Semana",
    materiais: [],
    tutoriais: []
  },
  {
    id: 234,
    atividade: "Auditoria de tempo de carregamento e compressão de imagens das landing pages",
    tipo: "SEO / UX",
    responsavel: "Jennifer Valle",
    fotoUrl: "jennifer.webp",
    periodicidade: "Quinzenal",
    materiais: [],
    tutoriais: []
  },
  {
    id: 235,
    atividade: "Criação de FAQs específicas nas páginas de categorias principais",
    tipo: "Conteúdo",
    responsavel: "Jennifer Valle",
    fotoUrl: "jennifer.webp",
    periodicidade: "Quinzenal",
    materiais: [],
    tutoriais: []
  },
  {
    id: 236,
    atividade: "Testes operacionais de compra e usabilidade no fluxo do e-commerce",
    tipo: "Qualidade",
    responsavel: "Ingrid Fabris",
    fotoUrl: "ingrid.webp",
    periodicidade: "Semanal",
    materiais: [],
    tutoriais: []
  },
  {
    id: 237,
    atividade: "Documentação de processos operacionais e melhorias da área de Site",
    tipo: "Documentação",
    responsavel: "Ingrid Fabris",
    fotoUrl: "ingrid.webp",
    periodicidade: "Conforme Demanda",
    materiais: [],
    tutoriais: []
  },
  {
    id: 238,
    atividade: "Monitoramento e atualização das políticas de troca e devoluções no site",
    tipo: "Comercial",
    responsavel: "Ingrid Fabris",
    fotoUrl: "ingrid.webp",
    periodicidade: "Conforme Demanda",
    materiais: [],
    tutoriais: []
  }
];
