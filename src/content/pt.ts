import type { SiteContent } from './types';

const GH = 'https://github.com/marise-san';

export const pt: SiteContent = {
  meta: {
    title: 'Marise Santana | Desenvolvedora full-stack, .NET, React e IA',
    description:
      'Desenvolvedora full-stack em .NET e React, responsável por arquitetura, testes, CI/CD e infraestrutura. MBA em IA Generativa e Ciência de Dados.',
    ogAlt: 'Marise Santana: software, software com IA e produtos de IA',
  },
  hero: {
    name: 'Marise Santana',
    role: 'Desenvolvedora de software full-stack',
    location: 'Fortaleza, Brasil',
    lede:
      'Desenvolvo sistemas em .NET e React desde 2022. Na Credimil, sou responsável pela arquitetura, pelo desenvolvimento e pela infraestrutura do sistema interno da operação. Trabalho também com IA aplicada ao desenvolvimento de software e a produtos.',
    primaryCta: 'LinkedIn',
    secondaryCta: 'Ver trabalhos',
    terminal: {
      label: 'perfil.yml',
      command: 'cat perfil.yml',
      lines: [
        { key: 'cargo', value: 'Desenvolvedora full-stack' },
        { key: 'base', value: 'Fortaleza, BR' },
        { key: 'backend', value: ['.NET', 'C#', 'SQL Server'] },
        { key: 'frontend', value: ['React', 'Next.js'] },
        { key: 'infra', value: ['Azure', 'IIS', 'CI/CD'] },
        { key: 'ia', value: ['Claude Code', 'Python', 'LLMs'] },
        { key: 'formacao', value: ['ADS', 'MBA IA Generativa'] },
      ],
    },
  },
  areasTitle: 'Áreas de atuação',
  areas: [
    {
      key: 'software',
      id: 'software',
      name: 'Software',
      short: '.NET, React e SQL Server, com arquitetura, testes, CI/CD e infraestrutura.',
      featured: {
        title: 'Plataforma de operação de crédito',
        context: 'Credimil, 2026 até hoje',
        summary:
          'Sistema interno que substitui um legado em ASP clássico e é usado por cerca de 130 pessoas da operação. Sou responsável pela arquitetura, pelo código e pela infraestrutura.',
        points: [
          'Arquitetura em camadas seguindo Clean Architecture, DDD e SOLID.',
          'Autenticação com o ASP.NET.',
          'Pipelines de CI/CD para homologação e produção.',
          'Provisionamento dos sites no IIS e do DNS no Azure.',
        ],
        tags: ['.NET', 'C#', 'React', 'SQL Server', 'Azure', 'CI/CD'],
        diagrams: [
          {
            kind: 'pyramid',
            title: 'Testes',
            levels: ['End-to-end', 'Integração', 'Unitários'],
          },
        ],
      },
      items: [
        {
          title: 'Integração de leads e atendimento',
          context: 'Credimil',
          summary:
            'Fluxos em n8n recebem leads de tráfego pago por webhook, enviam para o atendimento no Chatwoot e gravam no banco, onde são cruzados com os dados de produção.',
          tags: ['n8n', 'Webhooks', 'Chatwoot', 'SQL'],
        },
        {
          title: 'Controle de acesso integrado a hardware',
          context: 'Sete Tecnologia',
          summary:
            'Sistemas de controle de acesso para um porto e para refeitórios, integrados a catracas, leitores biométricos, cancelas e balanças. Também atuei em um sistema de gestão de processos para prefeituras.',
          tags: ['.NET', 'Integrações', 'Hardware'],
        },
        {
          title: 'ERP interno',
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
      short: 'Agentes de código configurados com o contexto do projeto: arquitetura, convenções e testes.',
      featured: {
        title: 'Engenharia de contexto para agentes de código',
        context: 'Credimil',
        summary:
          'Configurei o Claude Code para o sistema da empresa, com plugins e skills que levam ao agente a arquitetura, as convenções e os padrões de teste do projeto.',
        points: [
          'O ambiente permitiu que pessoas sem experiência na stack contribuíssem com o sistema.',
          'Todas as entregas passam por revisão de código antes de produção.',
        ],
        tags: ['Claude Code', 'Plugins', 'Skills', 'Revisão de código'],
      },
      items: [],
    },
    {
      key: 'aiProducts',
      id: 'produtos-de-ia',
      name: 'Produtos de IA',
      short: 'Aplicações com LLMs, machine learning e processamento de dados, do modelo à API.',
      featured: {
        title: 'Argus',
        context: 'Projeto do MBA em IA Generativa',
        summary:
          'Ferramenta de apoio à auditoria forense que identifica e explica possíveis fraudes em transações financeiras, mesmo com dados incompletos.',
        principle: { label: 'Princípio do projeto', text: 'A IA explica, não decide. A decisão final é do auditor.' },
        points: [
          'O modelo de linguagem só é chamado quando o auditor abre um alerta, o que limita o custo.',
          'Transações individuais não são enviadas à API do modelo, só resultados agregados.',
          'Funciona sem acesso à API, com respostas por template.',
          '20 testes automatizados e arquitetura documentada no padrão arc42.',
        ],
        tags: ['Python', 'OpenAI', 'scikit-learn', 'Streamlit', 'pytest'],
        link: { label: 'Código do Argus', href: `${GH}/argus` },
        diagrams: [
          {
            kind: 'flow',
            title: 'Pipeline',
            steps: [
              { name: 'Transações', detail: '100% da base' },
              { name: 'Estatística', detail: 'Benford e Isolation Forest' },
              { name: 'Alertas', detail: 'Priorizados, com evidência' },
              { name: 'LLM', detail: 'Explica o alerta aberto' },
              { name: 'Auditor', detail: 'Decide' },
            ],
          },
        ],
      },
      items: [
        {
          title: 'Análise de sentimentos com PySpark',
          context: 'Projeto do MBA em IA Generativa',
          summary:
            'Pipeline de NLP distribuído que classifica avaliações de produtos, servido por uma API REST em contêiner.',
          tags: ['PySpark', 'FastAPI', 'Docker'],
          link: { label: 'Código', href: `${GH}/amazon_reviews_analysis` },
        },
        {
          title: 'API para modelo de classificação',
          context: 'Projeto do MBA em IA Generativa',
          summary:
            'Modelo de machine learning exposto por API, com validação estrita de entrada, testes automatizados e imagem Docker.',
          tags: ['scikit-learn', 'FastAPI', 'Pydantic', 'pytest'],
          link: { label: 'Código', href: `${GH}/mlops_final` },
        },
      ],
    },
  ],
  timeline: {
    title: 'Trajetória',
    items: [
      {
        when: '2026 até hoje',
        title: 'Desenvolvedora full-stack',
        place: 'Credimil',
        text: 'Arquitetura e desenvolvimento do sistema interno, infraestrutura, integrações e automações.',
      },
      {
        when: '2026',
        title: 'MBA em Inteligência Artificial Generativa e Ciência de Dados',
        place: 'Pós-graduação, concluída em setembro',
      },
      {
        when: '2022 a 2026',
        title: 'Desenvolvedora de software',
        place: 'Sete Tecnologia',
        text: 'Desenvolvimento de sistemas de controle de acesso integrados a hardware, de gestão de processos para prefeituras e de um ERP interno.',
      },
      {
        when: 'Graduação',
        title: 'Análise e Desenvolvimento de Sistemas',
        place: 'Tecnólogo',
      },
    ],
  },
  stack: {
    title: 'Tecnologias',
    groups: [
      { name: 'Back-end e dados', items: ['.NET', 'C#', 'ASP.NET', 'SQL Server', 'Python', 'FastAPI'] },
      { name: 'Front-end', items: ['React', 'Next.js', 'React Native'] },
      { name: 'IA e dados', items: ['Claude Code', 'OpenAI SDK', 'Semantic Kernel', 'llama.cpp', 'scikit-learn', 'PySpark'] },
      { name: 'Infraestrutura e automação', items: ['Azure', 'IIS', 'CI/CD', 'Docker', 'n8n', 'Airflow'] },
    ],
  },
  contact: {
    title: 'Contato',
    text: 'Disponível para posições full-stack e de IA, em times de qualquer lugar, e para projetos de consultoria.',
    primaryCta: 'Falar pelo LinkedIn',
    secondaryCta: 'GitHub',
  },
  ds: {
    title: 'Design system',
    lede: 'Tokens e componentes usados neste site. Cores, fontes e medidas vêm de um único arquivo de tokens, que gera as variáveis CSS e esta página.',
    sourceNote: 'src/design/tokens.ts',
    sections: {
      palette: 'Paleta',
      paletteText: 'Valores primitivos. Os neons são usados em marcações e destaques; as versões escuras, em texto. O contraste é calculado a partir dos tokens.',
      semantic: 'Tokens semânticos',
      semanticText: 'Os componentes usam apenas tokens semânticos, que apontam para os primitivos.',
      areas: 'Cores das áreas',
      areasText: 'Cada área de atuação tem um neon e um tom escuro.',
      type: 'Tipografia',
      typeText: 'Escala de 12 a 72 px. Chakra Petch em títulos, IBM Plex Sans em texto e IBM Plex Mono em código.',
      space: 'Espaçamento',
      spaceText: 'Base de 4 px.',
      shape: 'Forma',
      shapeText: 'Canto chanfrado em três tamanhos.',
      effects: 'Efeitos',
      effectsText: 'Brilho neon para superfícies escuras, construído com color-mix a partir das cores das áreas.',
      components: 'Componentes',
      componentsText: 'Componentes da página inicial. Animações respeitam a preferência de movimento reduzido do sistema.',
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
      terminal: 'Terminal',
      layers: 'Diagrama de camadas',
      pyramid: 'Pirâmide',
      flow: 'Fluxo',
      progress: 'Progresso de leitura',
      progressText: 'Barra no topo da página, ligada à rolagem com animation-timeline. Só aparece em navegadores com suporte.',
    },
    sampleText: 'Sistema interno da operação',
  },
};
