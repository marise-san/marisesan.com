import type { SiteContent } from './types';

const GH = 'https://github.com/marise-san';

export const en: SiteContent = {
  meta: {
    title: 'Marise Santana | Full-stack software engineer, .NET, React and AI',
    description:
      'Full-stack software engineer in .NET and React, responsible for architecture, testing, CI/CD and infrastructure. MBA in Generative AI and Data Science.',
    ogAlt: 'Marise Santana: software, software with AI and AI products',
  },
  hero: {
    name: 'Marise Santana',
    role: 'Full-stack software engineer',
    location: 'Fortaleza, Brazil',
    lede:
      'I have been building systems in .NET and React since 2022. At Credimil, I am responsible for the architecture, development and infrastructure of the internal operations system. I also work with AI applied to software development and to products.',
    primaryCta: 'LinkedIn',
    secondaryCta: 'See work',
    terminal: {
      label: 'profile.yml',
      command: 'cat profile.yml',
      lines: [
        { key: 'role', value: 'Full-stack engineer' },
        { key: 'base', value: 'Fortaleza, BR' },
        { key: 'backend', value: ['.NET', 'C#', 'SQL Server'] },
        { key: 'frontend', value: ['React', 'Next.js'] },
        { key: 'infra', value: ['Azure', 'IIS', 'CI/CD'] },
        { key: 'ai', value: ['Claude Code', 'Python', 'LLMs'] },
        { key: 'education', value: ['Systems Dev.', 'MBA Gen AI'] },
      ],
    },
  },
  areasTitle: 'Areas of work',
  areas: [
    {
      key: 'software',
      id: 'software',
      name: 'Software',
      short: '.NET, React and SQL Server, with architecture, testing, CI/CD and infrastructure.',
      featured: {
        title: 'Credit operations platform',
        context: 'Credimil, 2026 to present',
        summary:
          'Internal system that replaces a classic ASP legacy and is used by about 130 operations staff. I am responsible for the architecture, the code and the infrastructure.',
        points: [
          'Layered architecture following Clean Architecture, DDD and SOLID.',
          'Authentication with ASP.NET.',
          'CI/CD pipelines for staging and production.',
          'Provisioning of the IIS sites and the Azure DNS.',
        ],
        tags: ['.NET', 'C#', 'React', 'SQL Server', 'Azure', 'CI/CD'],
        diagrams: [
          {
            kind: 'layers',
            title: 'Layers',
            layers: [
              { name: 'Presentation and infrastructure', detail: 'React, ASP.NET, SQL Server, Azure' },
              { name: 'Application', detail: 'Use cases' },
              { name: 'Domain', detail: 'Entities and business rules' },
            ],
          },
          {
            kind: 'pyramid',
            title: 'Tests',
            levels: ['End-to-end', 'Integration', 'Unit'],
          },
        ],
      },
      items: [
        {
          title: 'Lead and customer service integration',
          context: 'Credimil',
          summary:
            'n8n flows receive paid-traffic leads by webhook, send them to customer service on Chatwoot and store them in the database, where they are matched against production data.',
          tags: ['n8n', 'Webhooks', 'Chatwoot', 'SQL'],
        },
        {
          title: 'Hardware-integrated access control',
          context: 'Sete Tecnologia',
          summary:
            'Access control systems for a seaport and for cafeterias, integrated with turnstiles, biometric readers, gates and truck scales. I also worked on a case management system for city governments.',
          tags: ['.NET', 'Integrations', 'Hardware'],
        },
        {
          title: 'Internal ERP',
          context: 'Sete Tecnologia',
          summary:
            'I started the system’s structure and designed the database for its core entities, such as tasks and time tracking.',
          tags: ['Data modeling', '.NET', 'SQL Server'],
        },
      ],
    },
    {
      key: 'aiAssisted',
      id: 'ai-assisted-software',
      name: 'Software with AI',
      short: 'Claude Code set up with project plugins and skills for agent-assisted development.',
      featured: {
        title: 'Agent-assisted development environment',
        context: 'Credimil',
        summary:
          'I set up Claude Code for Credimil’s system with plugins and skills that describe the project’s architecture, conventions and workflow. A new feature starts with the /nova-feature command and a description of what is needed.',
        points: [
          'The skills give the agent the project’s architecture and testing standards.',
          'With this setup, a teammate with no .NET or React experience contributes to the system, focusing on business rules, data and tests.',
          'I review every change before it reaches production.',
        ],
        tags: ['Claude Code', 'Plugins', 'Skills', 'Code review'],
        diagrams: [
          {
            kind: 'flow',
            title: 'Feature workflow',
            steps: [
              { name: '/nova-feature', detail: 'Request description' },
              { name: 'Project skills', detail: 'Architecture and conventions' },
              { name: 'Implementation', detail: 'Code and tests' },
              { name: 'Review', detail: 'Before production' },
            ],
          },
        ],
      },
      items: [],
    },
    {
      key: 'aiProducts',
      id: 'ai-products',
      name: 'AI products',
      short: 'Applications with LLMs, machine learning and data processing, from model to API.',
      featured: {
        title: 'Argus',
        context: 'MBA in Generative AI project',
        summary:
          'Forensic audit support tool that identifies and explains likely fraud in financial transactions, even with incomplete data.',
        principle: { label: 'Design principle', text: 'The AI explains, it does not decide. The final decision is the auditor’s.' },
        points: [
          'The language model is only called when the auditor opens an alert, which limits cost.',
          'Individual transactions are not sent to the model API, only aggregated results.',
          'Works without API access, using template answers.',
          '20 automated tests and architecture documented with arc42.',
        ],
        tags: ['Python', 'OpenAI', 'scikit-learn', 'Streamlit', 'pytest'],
        link: { label: 'Argus source code', href: `${GH}/argus` },
        diagrams: [
          {
            kind: 'flow',
            title: 'Pipeline',
            steps: [
              { name: 'Transactions', detail: '100% of the data' },
              { name: 'Statistics', detail: 'Benford and Isolation Forest' },
              { name: 'Alerts', detail: 'Ranked, with evidence' },
              { name: 'LLM', detail: 'Explains the open alert' },
              { name: 'Auditor', detail: 'Decides' },
            ],
          },
        ],
      },
      items: [
        {
          title: 'Sentiment analysis with PySpark',
          context: 'MBA in Generative AI project',
          summary:
            'Distributed NLP pipeline that classifies product reviews, served through a containerized REST API.',
          tags: ['PySpark', 'FastAPI', 'Docker'],
          link: { label: 'Code', href: `${GH}/amazon_reviews_analysis` },
        },
        {
          title: 'API for a classification model',
          context: 'MBA in Generative AI project',
          summary:
            'Machine learning model exposed through an API, with strict input validation, automated tests and a Docker image.',
          tags: ['scikit-learn', 'FastAPI', 'Pydantic', 'pytest'],
          link: { label: 'Code', href: `${GH}/mlops_final` },
        },
      ],
    },
  ],
  timeline: {
    title: 'Experience and education',
    items: [
      {
        when: '2026 to present',
        title: 'Full-stack developer',
        place: 'Credimil',
        text: 'Architecture and development of the internal system, infrastructure, integrations and automation.',
      },
      {
        when: '2026',
        title: 'MBA in Generative AI and Data Science',
        place: 'Graduate program, completed in September',
      },
      {
        when: '2022 to 2026',
        title: 'Intern to developer',
        place: 'Sete Tecnologia',
        text: 'Hired full-time after three months as an intern and promoted three times. Hardware-integrated access control, case management for city governments and an internal ERP.',
      },
      {
        when: 'Degree',
        title: 'Systems Analysis and Development',
        place: 'Associate degree in technology',
      },
    ],
  },
  stack: {
    title: 'Technologies',
    groups: [
      { name: 'Back end and data', items: ['.NET', 'C#', 'ASP.NET', 'SQL Server', 'Python', 'FastAPI'] },
      { name: 'Front end', items: ['React', 'Next.js', 'React Native'] },
      { name: 'AI and data', items: ['Claude Code', 'OpenAI SDK', 'Semantic Kernel', 'llama.cpp', 'scikit-learn', 'PySpark'] },
      { name: 'Infrastructure and automation', items: ['Azure', 'IIS', 'CI/CD', 'Docker', 'n8n', 'Airflow'] },
    ],
  },
  contact: {
    title: 'Contact',
    text: 'Available for full-stack and AI roles, with teams anywhere, and for consulting projects.',
    primaryCta: 'Message on LinkedIn',
    secondaryCta: 'GitHub',
  },
  ds: {
    title: 'Design system',
    lede: 'Tokens and components used on this site. Colors, fonts and measures come from a single tokens file, which generates the CSS variables and this page.',
    sourceNote: 'src/design/tokens.ts',
    sections: {
      palette: 'Palette',
      paletteText: 'Primitive values. Neons are used for marks and highlights; the deep versions for text. Contrast is computed from the tokens.',
      semantic: 'Semantic tokens',
      semanticText: 'Components only use semantic tokens, which point to the primitives.',
      areas: 'Area colors',
      areasText: 'Each area of work has a neon and a deep tone.',
      type: 'Typography',
      typeText: '12 to 72 px scale. Chakra Petch for headings, IBM Plex Sans for text and IBM Plex Mono for code.',
      space: 'Spacing',
      spaceText: '4 px base.',
      shape: 'Shape',
      shapeText: 'Cut corner in three sizes.',
      effects: 'Effects',
      effectsText: 'Neon glow for dark surfaces, built with color-mix from the area colors.',
      components: 'Components',
      componentsText: 'Components from the home page. Animations respect the system’s reduced motion setting.',
    },
    labels: {
      token: 'Token',
      value: 'Value',
      use: 'Use',
      contrastPaper: 'On Paper',
      contrastInk: 'On Ink',
      sample: 'Sample',
      size: 'Size',
      family: 'Family',
      role: 'Role',
      paletteBase: 'Base',
      paletteNeon: 'Neon',
      paletteDeep: 'Deep neon, for text',
      buttonPrimary: 'Primary action',
      buttonSecondary: 'Secondary action',
      tag: 'Tag',
      areaMark: 'Area mark',
      workItem: 'Work item',
      terminal: 'Terminal',
      layers: 'Layer diagram',
      pyramid: 'Pyramid',
      flow: 'Flow',
      progress: 'Reading progress',
      progressText: 'Bar at the top of the page, driven by scrolling with animation-timeline. Shown only in browsers that support it.',
    },
    sampleText: 'Internal operations system',
  },
};
