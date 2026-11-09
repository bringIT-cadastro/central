// gestao_time_data.js - Base de Dados Privada para Fichas do Time

const DATA_GESTAO_TIME = {
  fichasTime: [
    {
      id: "membro-patrick",
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
        { fluxo: "Análise de Dados", nivelPct: 25, rotuloNivel: "25%", lideranca: "E1", liderancaNome: "Direcionar" }
      ]
    },
    {
      id: "membro-daniela",
      nome: "Daniela Lourenço",
      cargo: "Analista de Cadastro Júnior",
      fotoUrl: "daniela.webp",
      resumoPerfil: "Perfil altamente comunicativo com perfil executor. Apresenta natural insegurança por estar em fase inicial de desenvolvimento nas rotinas da área.",
      niveisTecnicos: [
        { fluxo: "Publicação de Produtos", nivelPct: 25, rotuloNivel: "25%", lideranca: "E1", liderancaNome: "Direcionar" },
        { fluxo: "Qualidade e SEO", nivelPct: 25, rotuloNivel: "25%", lideranca: "E1", liderancaNome: "Direcionar" },
        { fluxo: "Sistemas", nivelPct: 25, rotuloNivel: "25%", lideranca: "E1", liderancaNome: "Direcionar" },
        { fluxo: "Workspace Google", nivelPct: 25, rotuloNivel: "25%", lideranca: "E1", liderancaNome: "Direcionar" },
        { fluxo: "Ferramentas de IA", nivelPct: 25, rotuloNivel: "25%", lideranca: "E1", liderancaNome: "Direcionar" },
        { fluxo: "Digital Commerce", nivelPct: 50, rotuloNivel: "50%", lideranca: "E2", liderancaNome: "Orientar" },
        { fluxo: "Análise de Dados", nivelPct: 25, rotuloNivel: "25%", lideranca: "E1", liderancaNome: "Direcionar" }
      ]
    },
    {
      id: "membro-maria",
      nome: "Maria Soares",
      cargo: "Analista de Cadastro Júnior",
      fotoUrl: "maria.jpeg",
      resumoPerfil: "Analista com excelente visão sistêmica, comunicação transparente e alta clareza de cenários, demonstrando grande potencial para liderar e conduzir projetos.",
      niveisTecnicos: [
        { fluxo: "Publicação de Produtos", nivelPct: 75, rotuloNivel: "75%", lideranca: "E3", liderancaNome: "Apoiar" },
        { fluxo: "Qualidade e SEO", nivelPct: 75, rotuloNivel: "75%", lideranca: "E3", liderancaNome: "Apoiar" },
        { fluxo: "Sistemas", nivelPct: 100, rotuloNivel: "100%", lideranca: "E4", liderancaNome: "Delegar" },
        { fluxo: "Workspace Google", nivelPct: 75, rotuloNivel: "75%", lideranca: "E3", liderancaNome: "Apoiar" },
        { fluxo: "Ferramentas de IA", nivelPct: 75, rotuloNivel: "75%", lideranca: "E3", liderancaNome: "Apoiar" },
        { fluxo: "Digital Commerce", nivelPct: 75, rotuloNivel: "75%", lideranca: "E3", liderancaNome: "Apoiar" },
        { fluxo: "Análise de Dados", nivelPct: 75, rotuloNivel: "75%", lideranca: "E3", liderancaNome: "Apoiar" }
      ]
    },
    {
      id: "membro-raqueline",
      nome: "Raqueline Souza",
      cargo: "Analista de Cadastro Júnior",
      fotoUrl: "raqueline.jpg",
      resumoPerfil: "Profissional receptiva, com estilo de comunicação objetivo e direto, mantendo forte orientação executora na realização das demandas operacionais.",
      niveisTecnicos: [
        { fluxo: "Publicação de Produtos", nivelPct: 50, rotuloNivel: "50%", lideranca: "E2", liderancaNome: "Orientar" },
        { fluxo: "Qualidade e SEO", nivelPct: 50, rotuloNivel: "50%", lideranca: "E2", liderancaNome: "Orientar" },
        { fluxo: "Sistemas", nivelPct: 50, rotuloNivel: "50%", lideranca: "E2", liderancaNome: "Orientar" },
        { fluxo: "Workspace Google", nivelPct: 50, rotuloNivel: "50%", lideranca: "E2", liderancaNome: "Orientar" },
        { fluxo: "Ferramentas de IA", nivelPct: 25, rotuloNivel: "25%", lideranca: "E1", liderancaNome: "Direcionar" },
        { fluxo: "Digital Commerce", nivelPct: 50, rotuloNivel: "50%", lideranca: "E2", liderancaNome: "Orientar" },
        { fluxo: "Análise de Dados", nivelPct: 25, rotuloNivel: "25%", lideranca: "E1", liderancaNome: "Direcionar" }
      ]
    },
    {
      id: "membro-jennifer",
      nome: "Jennifer Valle",
      cargo: "Analista de Cadastro Júnior",
      fotoUrl: "jennifer.webp",
      resumoPerfil: "Perfil direto, rigorosamente detalhista e com olhar sistêmico refinado, impulsionado por uma sólida bagagem de experiência no ecossistema comercial.",
      niveisTecnicos: [
        { fluxo: "Publicação de Produtos", nivelPct: 25, rotuloNivel: "25%", lideranca: "E1", liderancaNome: "Direcionar" },
        { fluxo: "Qualidade e SEO", nivelPct: 75, rotuloNivel: "75%", lideranca: "E3", liderancaNome: "Apoiar" },
        { fluxo: "Sistemas", nivelPct: 25, rotuloNivel: "25%", lideranca: "E1", liderancaNome: "Direcionar" },
        { fluxo: "Workspace Google", nivelPct: 75, rotuloNivel: "75%", lideranca: "E3", liderancaNome: "Apoiar" },
        { fluxo: "Ferramentas de IA", nivelPct: 75, rotuloNivel: "75%", lideranca: "E3", liderancaNome: "Apoiar" },
        { fluxo: "Digital Commerce", nivelPct: 75, rotuloNivel: "75%", lideranca: "E3", liderancaNome: "Apoiar" },
        { fluxo: "Análise de Dados", nivelPct: 50, rotuloNivel: "50%", lideranca: "E2", liderancaNome: "Orientar" }
      ]
    },
    {
      id: "membro-ingrid",
      nome: "Ingrid Fabris",
      cargo: "Analista de Cadastro Sênior",
      fotoUrl: "ingrid.webp",
      resumoPerfil: "Detentora do domínio técnico mais avançado da equipe. Apresenta postura direta, altamente solícita e pronta para orientar o time com excelência.",
      niveisTecnicos: [
        { fluxo: "Publicação de Produtos", nivelPct: 100, rotuloNivel: "100%", lideranca: "E4", liderancaNome: "Delegar" },
        { fluxo: "Qualidade e SEO", nivelPct: 100, rotuloNivel: "100%", lideranca: "E4", liderancaNome: "Delegar" },
        { fluxo: "Sistemas", nivelPct: 100, rotuloNivel: "100%", lideranca: "E4", liderancaNome: "Delegar" },
        { fluxo: "Workspace Google", nivelPct: 100, rotuloNivel: "100%", lideranca: "E4", liderancaNome: "Delegar" },
        { fluxo: "Ferramentas de IA", nivelPct: 100, rotuloNivel: "100%", lideranca: "E4", liderancaNome: "Delegar" },
        { fluxo: "Digital Commerce", nivelPct: 100, rotuloNivel: "100%", lideranca: "E4", liderancaNome: "Delegar" },
        { fluxo: "Análise de Dados", nivelPct: 100, rotuloNivel: "100%", lideranca: "E4", liderancaNome: "Delegar" }
      ]
    }
  ]
};