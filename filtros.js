// filtros.js

const DATA_FILTROS = [
  // 1. Filtros Críticos Shopee
  {
    id: 1,
    categoriaPrincipal: "Shopee",
    canal: "Shopee",
    nome: "Produtos Banidos",
    url: "https://seller.shopee.com.br/portal/product/list/violation/banned"
  },
  {
    id: 2,
    categoriaPrincipal: "Shopee",
    canal: "Shopee",
    nome: "Produtos Limitados",
    url: "https://seller.shopee.com.br/portal/product/list/violation/deboosted"
  },
  {
    id: 3,
    categoriaPrincipal: "Shopee",
    canal: "Shopee",
    nome: "Produtos Deletados",
    url: "https://seller.shopee.com.br/portal/product/list/violation/deleted"
  },
  {
    id: 4,
    categoriaPrincipal: "Shopee",
    canal: "Shopee",
    nome: "Sob Análise",
    url: "https://seller.shopee.com.br/portal/product/list/reviewing"
  },

  // 2. Filtros Críticos Mercado Livre
  {
    id: 5,
    categoriaPrincipal: "ML",
    canal: "Mercado Livre",
    nome: "Inativos por Descumprir Políticas",
    url: "https://vendedores.mercadolivre.com.br/anuncios?filters=OMNI_UNDER_REVIEW&page=1&sort=DEFAULT&task=GROUPED_MODERATE"
  },
  {
    id: 6,
    categoriaPrincipal: "ML",
    canal: "Mercado Livre",
    nome: "Pendentes para Corrigir",
    url: "https://vendedores.mercadolivre.com.br/anuncios?filters=UNDER_REVIEW_WAITING_FOR_PATCH%7CLAST_WEEK&page=1&sort=DEFAULT&task=GROUPED_UNDER_REVIEW_WAITING_FOR_PATCH"
  },
  {
    id: 7,
    categoriaPrincipal: "ML",
    canal: "Mercado Livre",
    nome: "Com problemas na Exp. Compra",
    url: "https://vendedores.mercadolivre.com.br/anuncios?filters=ACTIVE_WITH_PURCHASE_EXPERIENCE&page=1&sort=DEFAULT&task=GROUPED_ACTIVE_WITH_PURCHASE_EXPERIENCE"
  },
  {
    id: 8,
    categoriaPrincipal: "ML",
    canal: "Mercado Livre",
    nome: "Próximos a serem Pausados",
    url: "https://vendedores.mercadolivre.com.br/anuncios?filters=OMNI_ACTIVE_WITH_CATALOG_FOREWARNING&page=1&sort=DEFAULT&task=GROUPED_CATALOG_FOREWARNING"
  }
  {
    id: 9,
    categoriaPrincipal: "ML",
    canal: "Mercado Livre",
    nome: "Com risco de suspensão na sua conta",
    url: "https://vendedores.mercadolivre.com.br/anuncios?filters=UNDER_RISK_TO_RESTRICTION&page=1&sort=DEFAULT&task=GROUPED_UNDER_RISK_TO_RESTRICTION"
  }
];
