// analise_data.js - Base de Dados Global do Diagnóstico e Fichas do Time

if (typeof DATA_ANALISE === 'undefined') {
  var DATA_ANALISE = {};
}

DATA_ANALISE.divisaoContas = {
  atual: [
    { canal: "Mercado Livre", conta: "SC / SP / PR / MG", responsavel: "Maria Soares", fotoUrl: "maria.jpeg" },
    { canal: "Shopee", conta: "SC / SP / MG", responsavel: "Raqueline Souza", fotoUrl: "raqueline.jpg" },
    { canal: "Kabum", conta: "SC / SP / MG", responsavel: "Raqueline Souza", fotoUrl: "raqueline.jpg" },
    { canal: "TikTok Shop", conta: "SC", responsavel: "Raqueline Souza", fotoUrl: "raqueline.jpg" },
    { canal: "Temu", conta: "SC", responsavel: "Maria Soares", fotoUrl: "maria.jpeg" },
    { canal: "Amazon", conta: "SC", responsavel: "Raqueline Souza", fotoUrl: "raqueline.jpg" }
  ],
  proposta: [
    { canal: "Mercado Livre", conta: "SC / MG", responsavel: "Maria Soares", badge: "CD SC & MG", fotoUrl: "maria.jpeg" },
    { canal: "Mercado Livre", conta: "SP (PR) / SP", responsavel: "Daniela Lourenço", badge: "CD SP & PR", fotoUrl: "daniela.webp" },
    { canal: "Temu", conta: "SC", responsavel: "Daniela Lourenço", badge: "Novos Canais", fotoUrl: "daniela.webp" },
    { canal: "TikTok Shop", conta: "Geral", responsavel: "Daniela Lourenço", badge: "Novos Canais", fotoUrl: "daniela.webp" },
    { canal: "Shopee", conta: "SC / SP / MG", responsavel: "Raqueline Souza", badge: "Core Shopee", fotoUrl: "raqueline.jpg" },
    { canal: "Kabum", conta: "SC / SP / MG", responsavel: "Raqueline Souza", badge: "Core Tech", fotoUrl: "raqueline.jpg" },
    { canal: "Amazon", conta: "SC", responsavel: "Raqueline Souza", badge: "1P B2B", fotoUrl: "raqueline.jpg" }
  ]
};

DATA_ANALISE.fichasTime = [
  {
    id: "patrick-nunes",
    nome: "Patrick Nunes",
    cargo: "Analista de Cadastro Júnior",
    fotoUrl: "patrick.jpeg",
    resumoPerfil: "Profissional extremamente detalhista, com perfil focado, mais reservado e forte inclinação executora, garantindo alta precisão na condução das tarefas operacionais.",
    niveisTecnicos: [
      { fluxo: "Publicação de Produtos", nivelPct: 75, rotuloNivel: "75%", lideranca: "E3", liderancaNome: "Apoiar" },
      { fluxo: "Qualidade e SEO", nivelPct: 50, rotuloNivel: "50%", lideranca: "E2", liderancaNome: "Orientar" },
      { fluxo: "Sistemas", nivelPct: 50, rotuloNivel: "50%", lideranca: "E2", liderancaNome: "Orientar" },
      { fluxo: "Workspace Google", nivelPct: 25, rotuloNivel: "25%", lideranca: "E1", liderancaNome: "Direcionar" },
      { fluxo: "Ferramentas de IA", nivelPct: 25, rotuloNivel: "25%", lideranca: "E1", liderancaNome: "Direcionar" },
      { fluxo: "Digital Commerce", nivelPct: 50, rotuloNivel: "50%", lideranca: "E2", liderancaNome: "Orientar" },
      { fluxo: "Análise de Dados", nivelPct: 25, rotuloNivel: "25%", lideranca: "E1", liderancaNome: "Direcionar" },
      { fluxo: "Gestão de Prazos & SLAs", nivelPct: 75, rotuloNivel: "75%", lideranca: "E3", liderancaNome: "Apoiar" },
      { fluxo: "Resolução de Problemas", nivelPct: 25, rotuloNivel: "25%", lideranca: "E1", liderancaNome: "Direcionar" },
      { fluxo: "Comunicação Interdepartamental", nivelPct: 75, rotuloNivel: "75%", lideranca: "E3", liderancaNome: "Apoiar" }
    ]
  },
  {
    id: "daniela-lourenco",
    nome: "Daniela Lourenço",
    cargo: "Analista de Cadastro Júnior",
    fotoUrl: "daniela.webp",
    resumoPerfil: "Perfil ágil e adaptável, com foco na curva de aprendizado rápido para novos canais e rotinas operacionais em expansão.",
    niveisTecnicos: [
      { fluxo: "Publicação de Produtos", nivelPct: 25, rotuloNivel: "25%", lideranca: "E1", liderancaNome: "Direcionar" },
      { fluxo: "Qualidade e SEO", nivelPct: 25, rotuloNivel: "25%", lideranca: "E1", liderancaNome: "Direcionar" },
      { fluxo: "Sistemas", nivelPct: 25, rotuloNivel: "25%", lideranca: "E1", liderancaNome: "Direcionar" },
      { fluxo: "Workspace Google", nivelPct: 25, rotuloNivel: "25%", lideranca: "E1", liderancaNome: "Direcionar" },
      { fluxo: "Ferramentas de IA", nivelPct: 25, rotuloNivel: "25%", lideranca: "E1", liderancaNome: "Direcionar" },
      { fluxo: "Digital Commerce", nivelPct: 50, rotuloNivel: "50%", lideranca: "E2", liderancaNome: "Orientar" },
      { fluxo: "Análise de Dados", nivelPct: 25, rotuloNivel: "25%", lideranca: "E1", liderancaNome: "Direcionar" },
      { fluxo: "Gestão de Prazos & SLAs", nivelPct: 50, rotuloNivel: "50%", lideranca: "E2", liderancaNome: "Orientar" },
      { fluxo: "Resolução de Problemas", nivelPct: 25, rotuloNivel: "25%", lideranca: "E1", liderancaNome: "Direcionar" },
      { fluxo: "Comunicação Interdepartamental", nivelPct: 25, rotuloNivel: "25%", lideranca: "E1", liderancaNome: "Direcionar" }
    ]
  },
  {
    id: "maria-soares",
    nome: "Maria Soares",
    cargo: "Analista de Cadastro Pleno",
    fotoUrl: "maria.jpeg",
    resumoPerfil: "Elevado domínio técnico em sistemas e catálogo core, atuando como referência técnica no suporte a fluxos complexos.",
    niveisTecnicos: [
      { fluxo: "Publicação de Produtos", nivelPct: 75, rotuloNivel: "75%", lideranca: "E3", liderancaNome: "Apoiar" },
      { fluxo: "Qualidade e SEO", nivelPct: 75, rotuloNivel: "75%", lideranca: "E3", liderancaNome: "Apoiar" },
      { fluxo: "Sistemas", nivelPct: 100, rotuloNivel: "100%", lideranca: "E4", liderancaNome: "Delegar" },
      { fluxo: "Workspace Google", nivelPct: 75, rotuloNivel: "75%", lideranca: "E3", liderancaNome: "Apoiar" },
      { fluxo: "Ferramentas de IA", nivelPct: 75, rotuloNivel: "75%", lideranca: "E3", liderancaNome: "Apoiar" },
      { fluxo: "Digital Commerce", nivelPct: 75, rotuloNivel: "75%", lideranca: "E3", liderancaNome: "Apoiar" },
      { fluxo: "Análise de Dados", nivelPct: 75, rotuloNivel: "75%", lideranca: "E3", liderancaNome: "Apoiar" },
      { fluxo: "Gestão de Prazos & SLAs", nivelPct: 75, rotuloNivel: "75%", lideranca: "E3", liderancaNome: "Apoiar" },
      { fluxo: "Resolução de Problemas", nivelPct: 75, rotuloNivel: "75%", lideranca: "E3", liderancaNome: "Apoiar" },
      { fluxo: "Comunicação Interdepartamental", nivelPct: 75, rotuloNivel: "75%", lideranca: "E3", liderancaNome: "Apoiar" }
    ]
  },
  {
    id: "raqueline-souza",
    nome: "Raqueline Souza",
    cargo: "Analista de Cadastro Pleno",
    fotoUrl: "raqueline.jpg",
    resumoPerfil: "Forte foco na gestão de marketplaces core (Shopee/Kabum/Amazon), com boa desenvoltura em comunicação e alinhamentos interdepartamentais.",
    niveisTecnicos: [
      { fluxo: "Publicação de Produtos", nivelPct: 50, rotuloNivel: "50%", lideranca: "E2", liderancaNome: "Orientar" },
      { fluxo: "Qualidade e SEO", nivelPct: 50, rotuloNivel: "50%", lideranca: "E2", liderancaNome: "Orientar" },
      { fluxo: "Sistemas", nivelPct: 50, rotuloNivel: "50%", lideranca: "E2", liderancaNome: "Orientar" },
      { fluxo: "Workspace Google", nivelPct: 50, rotuloNivel: "50%", lideranca: "E2", liderancaNome: "Orientar" },
      { fluxo: "Ferramentas de IA", nivelPct: 25, rotuloNivel: "25%", lideranca: "E1", liderancaNome: "Direcionar" },
      { fluxo: "Digital Commerce", nivelPct: 50, rotuloNivel: "50%", lideranca: "E2", liderancaNome: "Orientar" },
      { fluxo: "Análise de Dados", nivelPct: 25, rotuloNivel: "25%", lideranca: "E1", liderancaNome: "Direcionar" },
      { fluxo: "Gestão de Prazos & SLAs", nivelPct: 50, rotuloNivel: "50%", lideranca: "E2", liderancaNome: "Orientar" },
      { fluxo: "Resolução de Problemas", nivelPct: 25, rotuloNivel: "25%", lideranca: "E1", liderancaNome: "Direcionar" },
      { fluxo: "Comunicação Interdepartamental", nivelPct: 75, rotuloNivel: "75%", lideranca: "E3", liderancaNome: "Apoiar" }
    ]
  },
  {
    id: "jennifer-valle",
    nome: "Jennifer Valle",
    cargo: "Analista de Cadastro Pleno",
    fotoUrl: "jennifer.webp",
    resumoPerfil: "Consistente maturidade em padronização de catálogo, SEO e ferramentas de apoio no Workspace Google.",
    niveisTecnicos: [
      { fluxo: "Publicação de Produtos", nivelPct: 25, rotuloNivel: "25%", lideranca: "E1", liderancaNome: "Direcionar" },
      { fluxo: "Qualidade e SEO", nivelPct: 75, rotuloNivel: "75%", lideranca: "E3", liderancaNome: "Apoiar" },
      { fluxo: "Sistemas", nivelPct: 25, rotuloNivel: "25%", lideranca: "E1", liderancaNome: "Direcionar" },
      { fluxo: "Workspace Google", nivelPct: 75, rotuloNivel: "75%", lideranca: "E3", liderancaNome: "Apoiar" },
      { fluxo: "Ferramentas de IA", nivelPct: 75, rotuloNivel: "75%", lideranca: "E3", liderancaNome: "Apoiar" },
      { fluxo: "Digital Commerce", nivelPct: 75, rotuloNivel: "75%", lideranca: "E3", liderancaNome: "Apoiar" },
      { fluxo: "Análise de Dados", nivelPct: 50, rotuloNivel: "50%", lideranca: "E2", liderancaNome: "Orientar" },
      { fluxo: "Gestão de Prazos & SLAs", nivelPct: 50, rotuloNivel: "50%", lideranca: "E2", liderancaNome: "Orientar" },
      { fluxo: "Resolução de Problemas", nivelPct: 25, rotuloNivel: "25%", lideranca: "E1", liderancaNome: "Direcionar" },
      { fluxo: "Comunicação Interdepartamental", nivelPct: 75, rotuloNivel: "75%", lideranca: "E3", liderancaNome: "Apoiar" }
    ]
  },
  {
    id: "ingrid-fabris",
    nome: "Ingrid Fabris",
    cargo: "Líder / Coordenadora de Operações",
    fotoUrl: "ingrid.webp",
    resumoPerfil: "Nível máximo de autonomia técnica e operacional (E4) na maioria dos pilares, atuando no direcionamento estratégico e troubleshooting complexo.",
    niveisTecnicos: [
      { fluxo: "Publicação de Produtos", nivelPct: 100, rotuloNivel: "100%", lideranca: "E4", liderancaNome: "Delegar" },
      { fluxo: "Qualidade e SEO", nivelPct: 100, rotuloNivel: "100%", lideranca: "E4", liderancaNome: "Delegar" },
      { fluxo: "Sistemas", nivelPct: 100, rotuloNivel: "100%", lideranca: "E4", liderancaNome: "Delegar" },
      { fluxo: "Workspace Google", nivelPct: 100, rotuloNivel: "100%", lideranca: "E4", liderancaNome: "Delegar" },
      { fluxo: "Ferramentas de IA", nivelPct: 100, rotuloNivel: "100%", lideranca: "E4", liderancaNome: "Delegar" },
      { fluxo: "Digital Commerce", nivelPct: 100, rotuloNivel: "100%", lideranca: "E4", liderancaNome: "Delegar" },
      { fluxo: "Análise de Dados", nivelPct: 75, rotuloNivel: "75%", lideranca: "E3", liderancaNome: "Apoiar" },
      { fluxo: "Gestão de Prazos & SLAs", nivelPct: 100, rotuloNivel: "100%", lideranca: "E4", liderancaNome: "Delegar" },
      { fluxo: "Resolução de Problemas", nivelPct: 100, rotuloNivel: "100%", lideranca: "E4", liderancaNome: "Delegar" },
      { fluxo: "Comunicação Interdepartamental", nivelPct: 100, rotuloNivel: "100%", lideranca: "E4", liderancaNome: "Delegar" }
    ]
  }
];