import type { SiteContent } from './types';

const GH = 'https://github.com/marise-san';

export const pt: SiteContent = {
  meta: {
    title: 'Marise Santana | Engenheira de software full-stack e de produtos de IA',
    description:
      'Engenheira de software full-stack: sistemas em .NET e React com Clean Architecture e testes, desenvolvimento com agentes de IA e produtos com LLMs.',
    ogAlt: 'Marise Santana: software, software com IA e produtos de IA',
  },
  hero: {
    name: 'Marise Santana',
    role: 'Engenheira de software full-stack',
    location: 'Fortaleza, Brasil',
    lede:
      'Projeto, construo e opero sistemas de ponta a ponta: da modelagem do banco ao pipeline de deploy. E coloco IA onde ela gera resultado, no produto e no próprio processo de desenvolvimento.',
    primaryCta: 'Conversar no LinkedIn',
    secondaryCta: 'Ver trabalhos',
  },
  areasTitle: 'Áreas de atuação',
  areas: [
    {
      key: 'software',
      id: 'software',
      name: 'Software',
      short: 'Sistemas de produção em .NET e React, com arquitetura, testes e deploy automatizado.',
      intro: 'Sistemas que sustentam a operação de empresas, modelados para mudar sem quebrar.',
      featured: {
        title: 'Plataforma de operação de crédito',
        context: 'Credimil, 2026 até hoje',
        summary:
          'Sistema interno que substitui um legado em ASP clássico e sustenta o trabalho diário de cerca de 130 pessoas da operação. Fui responsável pela arquitetura, pelo código e pela infraestrutura.',
        points: [
          'Clean Architecture, DDD e SOLID em .NET, com front-end em React.',
          'Pirâmide de testes completa: unitários, de integração e end-to-end.',
          'Pipelines de CI/CD para homologação e produção.',
          'Infraestrutura provisionada por mim: sites no IIS e DNS no Azure, com autenticação nativa do ASP.NET.',
        ],
        tags: ['.NET', 'C#', 'React', 'SQL Server', 'Azure', 'CI/CD'],
      },
      items: [
        {
          title: 'Pipeline de leads e atendimento',
          context: 'Credimil',
          summary:
            'Leads de tráfego pago chegam por webhook, seguem para o atendimento no Chatwoot e para o banco, onde são cruzados com os dados de produção.',
          tags: ['n8n', 'Webhooks', 'Chatwoot', 'SQL'],
        },
        {
          title: 'Controle de acesso integrado a hardware',
          context: 'Sete Tecnologia',
          summary:
            'Sistemas de controle de acesso para um porto e para refeitórios, integrados a catracas, leitores biométricos, cancelas e balanças, além de gestão do ciclo de processos para prefeituras.',
          tags: ['.NET', 'Integrações', 'Hardware'],
        },
        {
          title: 'ERP interno, do zero',
          context: 'Sete Tecnologia',
          summary:
            'Iniciei a estrutura do sistema e modelei o banco de dados das entidades centrais, como tarefas e horas trabalhadas.',
          tags: ['Modelagem de dados', '.NET', 'SQL Server'],
        },
      ],
    },
    {
      key: 'aiAssisted',
      id: 'software-com-ia',
      name: 'Software com IA',
      short: 'Agentes de código configurados para o time entregar mais, dentro do padrão de engenharia.',
      intro: 'IA como parte do processo de engenharia: com padrão, contexto e revisão humana.',
      featured: {
        title: 'Ambiente de desenvolvimento com agentes',
        context: 'Credimil',
        summary:
          'Configurei o Claude Code para o projeto inteiro: plugins e skills que carregam a arquitetura, as convenções e o fluxo de trabalho do sistema. Uma demanda vira código com um comando, /nova-feature, seguindo os mesmos padrões que eu seguiria à mão.',
        points: [
          'Skills de desenvolvimento que codificam Clean Architecture, testes e convenções do projeto.',
          'Um colega sem experiência em .NET e React contribui no sistema focando em regras de negócio, banco de dados e testes.',
          'Toda entrega passa pela minha revisão antes de ir para produção.',
        ],
        tags: ['Claude Code', 'Plugins', 'Skills', 'Engenharia de contexto'],
      },
      items: [],
    },
    {
      key: 'aiProducts',
      id: 'produtos-de-ia',
      name: 'Produtos de IA',
      short: 'LLMs, agentes e dados no centro do produto, com custo, privacidade e controle definidos no desenho.',
      intro: 'Produtos em que a IA é o valor entregue, desenhados para custar pouco e explicar o que fazem.',
      featured: {
        title: 'Argus',
        context: 'Copiloto de auditoria forense, MBA em IA Generativa',
        summary:
          'Encontra e explica possíveis fraudes em transações financeiras, mesmo com dados incompletos ou ruidosos.',
        quote: 'A IA explica, não decide. A decisão final é sempre do auditor.',
        points: [
          'A estatística (Lei de Benford e Isolation Forest) varre 100% das transações e entrega uma lista curta e priorizada.',
          'O LLM só é chamado nos alertas que o auditor abre: custo sob controle.',
          'Nenhuma transação crua vai para a API do modelo, só resultados agregados.',
          'Roda offline com respostas por template, tem 20 testes automatizados e arquitetura documentada em arc42.',
        ],
        tags: ['Python', 'OpenAI', 'scikit-learn', 'Streamlit', 'pytest'],
        link: { label: 'Ver código do Argus', href: `${GH}/argus` },
      },
      items: [
        {
          title: 'Assistente com LLM local',
          context: 'Momorimo, projeto próprio',
          summary:
            'Chat de IA dentro de um sistema de organização pessoal, rodando um modelo Qwen localmente com llama.cpp: sem custo por token e sem dados saindo de casa.',
          tags: ['llama.cpp', 'Qwen', 'LLM local'],
          status: 'in-progress',
        },
        {
          title: 'Análise de sentimentos em escala',
          context: 'MBA em IA Generativa',
          summary:
            'Pipeline de NLP distribuído com PySpark que classifica avaliações de produtos, servido por uma API REST em contêiner.',
          tags: ['PySpark', 'FastAPI', 'Docker'],
          link: { label: 'Ver código', href: `${GH}/amazon_reviews_analysis` },
        },
        {
          title: 'Modelo de ML como serviço',
          context: 'MBA em IA Generativa',
          summary:
            'Modelo de classificação exposto por API com contratos estritos de entrada, testes automatizados e imagem Docker pronta para nuvem.',
          tags: ['scikit-learn', 'FastAPI', 'Pydantic', 'pytest'],
          link: { label: 'Ver código', href: `${GH}/mlops_final` },
        },
      ],
    },
  ],
  principles: {
    title: 'Como eu trabalho',
    items: [
      {
        title: 'Arquitetura antes do código',
        text: 'Domínio bem modelado, camadas claras e testes em todos os níveis. É o que deixa um sistema evoluir com segurança.',
      },
      {
        title: 'Responsabilidade de ponta a ponta',
        text: 'Do entendimento do negócio à infraestrutura e à operação. Entrego sistemas funcionando, não só tarefas fechadas.',
      },
      {
        title: 'IA com critério',
        text: 'Uso IA onde ela gera resultado, com custo medido, saída explicável e uma pessoa no controle das decisões.',
      },
      {
        title: 'Padrões que escalam',
        text: 'Transformo boas práticas em ferramentas e ambientes, para que todo o time entregue com a mesma qualidade.',
      },
    ],
  },
  timeline: {
    title: 'Trajetória',
    items: [
      {
        when: '2026 até hoje',
        title: 'Desenvolvedora full-stack',
        place: 'Credimil',
        text: 'Responsável pela tecnologia da empresa: arquitetura e desenvolvimento do sistema novo, infraestrutura, integrações e automações.',
      },
      {
        when: 'Concluído em 2026',
        title: 'MBA em Inteligência Artificial Generativa e Ciência de Dados',
        place: 'Pós-graduação',
        text: 'IA generativa, machine learning, big data e MLOps, com projetos aplicados como o Argus.',
      },
      {
        when: '2022 a 2026',
        title: 'De estagiária a programadora',
        place: 'Sete Tecnologia',
        text: 'Efetivada em três meses e promovida três vezes. Desenvolvi sistemas de controle de acesso integrados a hardware, gestão pública e um ERP interno.',
      },
      {
        when: 'Graduação',
        title: 'Análise e Desenvolvimento de Sistemas',
        place: 'Tecnólogo',
        text: 'Base em engenharia de software, banco de dados e desenvolvimento web.',
      },
    ],
  },
  stack: {
    title: 'Ferramentas',
    groups: [
      { name: 'Back-end e dados', items: ['.NET', 'C#', 'ASP.NET', 'SQL Server', 'Python', 'FastAPI'] },
      { name: 'Front-end', items: ['React', 'Next.js', 'React Native'] },
      { name: 'IA e dados', items: ['Claude Code', 'OpenAI SDK', 'Semantic Kernel', 'llama.cpp', 'scikit-learn', 'PySpark'] },
      { name: 'Infra e automação', items: ['Azure', 'IIS', 'CI/CD', 'Docker', 'n8n', 'Airflow'] },
    ],
  },
  contact: {
    title: 'Vamos construir o próximo sistema?',
    text: 'Trabalho com times de qualquer lugar, como parte do time ou em projetos de consultoria.',
    primaryCta: 'Conversar no LinkedIn',
    secondaryCta: 'Ver GitHub',
  },
  ds: {
    title: 'Design system',
    lede: 'Os tokens e componentes que constroem este site. Cada cor, fonte e medida vem de um único arquivo de tokens, que gera as variáveis CSS e esta documentação.',
    sourceNote: 'Fonte única: src/design/tokens.ts',
    sections: {
      palette: 'Paleta',
      paletteText: 'Primitivos sem significado de uso. Os neons marcam e destacam; as versões escuras são as que aparecem como texto. O contraste é calculado a partir dos próprios tokens.',
      semantic: 'Tokens semânticos',
      semanticText: 'Os componentes nunca usam um primitivo direto. Trocar o tema é trocar estas referências.',
      areas: 'Cores das áreas',
      areasText: 'Cada área de atuação tem um neon e um tom escuro. A cor identifica a área em todo o site.',
      type: 'Tipografia',
      typeText: 'Escala clássica de 12 a 72 px. Chakra Petch para títulos, IBM Plex Sans para texto e IBM Plex Mono para código.',
      space: 'Espaçamento',
      spaceText: 'Base de 4 px.',
      shape: 'Forma',
      shapeText: 'O canto chanfrado é a assinatura dos componentes, em três tamanhos.',
      components: 'Componentes',
      componentsText: 'Os mesmos componentes usados na página inicial.',
    },
    labels: {
      token: 'Token',
      value: 'Valor',
      use: 'Uso',
      contrastPaper: 'Sobre Paper',
      contrastInk: 'Sobre Ink',
      sample: 'Exemplo',
      size: 'Tamanho',
      family: 'Família',
      role: 'Papel',
      paletteBase: 'Base',
      paletteNeon: 'Neon',
      paletteDeep: 'Neon escuro, para texto',
      buttonPrimary: 'Ação principal',
      buttonSecondary: 'Ação secundária',
      tag: 'Tag',
      areaMark: 'Marcador de área',
      workItem: 'Item de trabalho',
    },
    sampleText: 'Sistemas que sustentam a operação',
  },
};
