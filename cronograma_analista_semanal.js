// cronograma_analista_semanal.js - Base de Cronogramas Semanais do Time bringIT

const DATA_CRONOGRAMA_TIME = {
  1: { // Daniela Lourenço
    segunda: { foco: "Entrada de Volume & Novos Cadastros", rotinas: ["Rotinas de Cadastro Inicial", "Acompanhamento da Fila"], meta: "Processar demandas iniciais da semana" },
    terca: { foco: "Desmobilização & Termos", rotinas: ["Validação de Termos", "Rotinas de Inativação"], meta: "Manter termos de busca limpos" },
    quarta: { foco: "Devoluções & Indicadores", rotinas: ["Acompanhamento de Devoluções", "Análise Operacional"], meta: "Tratar pendências do meio da semana" },
    quinta: { foco: "Fotos, SEO & Fichas", rotinas: ["Revisão de Imagens", "Ajuste de Atributos"], meta: "Garantir qualidade visual" },
    sexta: { foco: "Fechamento & KPIs", rotinas: ["Fechamento de Chamados", "Preenchimento de KPIs"], meta: "Zerar pendências da semana" }
  },
  2: { // Maria Soares
    segunda: { foco: "Gestão ML & Temu", rotinas: ["Revisão de Anúncios ML", "Alocação de Estoque Temu"], meta: "Garantir ofertas ativas" },
    terca: { foco: "Análise de Concorrência ML", rotinas: ["Auditoria de Preços", "Monitoramento de Compra"], meta: "Manter competitividade" },
    quarta: { foco: "Devoluções & SAC ML", rotinas: ["Tratamento de Claims ML", "Ajuste de Fichas Técnicas"], meta: "Manter reputação alta" },
    quinta: { foco: "Campanhas & Promoções", rotinas: ["Inclusão em Ofertas", "Otimização de Anúncios ML"], meta: "Maximizar conversão" },
    sexta: { foco: "Relatórios & Fechamento", rotinas: ["Relatório Semanal ML/Temu", "Fechamento de Feat/Demandas"], meta: "Consolidar métricas do período" }
  },
  3: { // Raqueline Souza
    segunda: { foco: "Shopee & Kabum", rotinas: ["Gestão de Estoque Shopee", "Alinhamento Kabum"], meta: "Postar novidades da semana" },
    terca: { foco: "TikTok & Amazon 1P", rotinas: ["Upload de Catálogo TikTok", "Gestão de Ordens Amazon"], meta: "Processar integrações 1P" },
    quarta: { foco: "Revisão de Erros & Sac", rotinas: ["Auditoria de Erros de Integração", "Atendimento Técnico"], meta: "Sanar inconsistências de catálogo" },
    quinta: { foco: "Campanhas Shopee / Kabum", rotinas: ["Flash Sales Shopee", "Ajustes de Preço Kabum"], meta: "Atualizar banners e ofertas" },
    sexta: { foco: "Consolidação de KPIs", rotinas: ["Fechamento Shopee/Amazon", "Relatório de Vendas por Canal"], meta: "Relatório de performance enviado" }
  },
  4: { // Patrick Nunes
    segunda: { foco: "Integrações & Magento", rotinas: ["Novos Cadastros Site", "Verificação Magento/Platz"], meta: "Manter sincronização em dia" },
    terca: { foco: "Compatibilidades & Atributos", rotinas: ["Mapeamento de Peças", "Tabelas de Compatibilidade"], meta: "Atualizar base de dados" },
    quarta: { foco: "Atendimento Service Desk", rotinas: ["Triagem de Chamados Técnicos", "Correção de Erros 404"], meta: "Zerar chamados críticos" },
    quinta: { foco: "Melhorias de Plataforma", rotinas: ["Testes de Funcionalidade", "Ajustes de UX/UI Site"], meta: "Implementar melhorias contínuas" },
    sexta: { foco: "Checklist de Integridade", rotinas: ["Auditoria de URLs Quebradas", "Backup e Fechamento de Tickets"], meta: "Manter estabilidade do site" }
  },
  5: { // Jennifer Valle
    segunda: { foco: "Validação & Qualidade", rotinas: ["Auditoria de Imagens Novas", "Verificação de Padrão Visual"], meta: "Aprovar lotes do final de semana" },
    terca: { foco: "SEO & Redirects 404", rotinas: ["Mapeamento de Redirecionamentos", "Otimização de Titles & Descriptions"], meta: "Eliminar erros de indexação" },
    quarta: { foco: "Controle de Qualidade", rotinas: ["Revisão de Anúncios Recém-Publicados", "Ajustes de Descrição"], meta: "Manter índice de qualidade >95%" },
    quinta: { foco: "Melhoria de Conteúdo Visual", rotinas: ["Tratamento de Fotos", "Padronização de Banners"], meta: "Elevar padrão das fichas" },
    sexta: { foco: "Relatório de Qualidade", rotinas: ["Auditoria Geral de URLs", "Fechamento de Fila de Ajustes"], meta: "Entregar relatório semanal de SEO" }
  },
  6: { // Ingrid Fabris
    segunda: { foco: "Gestão & Google Merchant", rotinas: ["Auditoria Google Merchant", "Alinhamento Estratégico com Time"], meta: "Manter Merchant Center sem erros" },
    terca: { foco: "Projetos & Melhorias Site", rotinas: ["Acompanhamento de Implantações", "Reunião de Alinhamento Técnico"], meta: "Avançar marcos do projeto" },
    quarta: { foco: "Supervisão de Operações", rotinas: ["Auditoria de Processos de Cadastro", "Suporte a Dúvidas Complexas"], meta: "Garantir compliance do setor" },
    quinta: { foco: "Estruturação de Feed & SEO", rotinas: ["Otimização de Feeds XML", "Análise de Performance de Catálogo"], meta: "Maximizar alcance orgânico/pago" },
    sexta: { foco: "Gestão da Equipe & Fechamento", rotinas: ["Análise de SLAs do Time", "Planejamento da Próxima Semana"], meta: "Consolidar KPIs do departamento" }
  }
};