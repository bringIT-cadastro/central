// filtros.js

const DATA_FILTROS = [
  // 1. Filtros Críticos Mercado Livre
  {
    id: 1,
    categoriaPrincipal: "ML", // Identificador para a seção "Filtros Críticos Mercado Livre"
    canal: "Mercado Livre",
    nome: "Anúncios Em Revisão",
    url: "https://www.mercadolivre.com.br/anuncios/lista?filters=UNDER_REVIEW"
  },
  {
    id: 2,
    categoriaPrincipal: "ML",
    canal: "Mercado Livre",
    nome: "Anúncios Inativos / Bloqueados",
    url: "https://www.mercadolivre.com.br/anuncios/lista?filters=INACTIVE"
  },

  // 2. Filtros Críticos Shopee
  {
    id: 3,
    categoriaPrincipal: "Shopee", // Identificador para a seção "Filtros Críticos Shopee"
    canal: "Shopee",
    nome: "Banidos Shopee MG",
    url: "https://seller.shopee.com.br/portal/product/list/violation/banned"
  },
  {
    id: 4,
    categoriaPrincipal: "Shopee",
    canal: "Shopee",
    nome: "Produtos Infracionados / Deletados",
    url: "https://seller.shopee.com.br/portal/product/list/violation/deleted"
  }
];