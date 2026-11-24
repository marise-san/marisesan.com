import type { SiteContent } from './types';

const GH = 'https://github.com/marise-san';

export const en: SiteContent = {
  meta: {
    title: 'Marise Santana | Full-stack software engineer and AI product builder',
    description:
      'Full-stack software engineer: .NET and React systems with Clean Architecture and tests, agent-assisted development and LLM-powered products.',
    ogAlt: 'Marise Santana: software, AI-assisted software and AI products',
  },
  hero: {
    name: 'Marise Santana',
    role: 'Full-stack software engineer',
    location: 'Fortaleza, Brazil',
    lede:
      'I design, build and run systems end to end, from data modeling to the deployment pipeline. And I put AI where it pays off: in the product and in the development process itself.',
    primaryCta: 'Talk on LinkedIn',
    secondaryCta: 'See my work',
  },
  areasTitle: 'What I do',
  areas: [
    {
      key: 'software',
      id: 'software',
      name: 'Software',
      short: 'Production systems in .NET and React, with solid architecture, tests and automated deployment.',
      intro: 'Systems that run a company’s daily operation, modeled to change without breaking.',
      featured: {
        title: 'Credit operations platform',
        context: 'Credimil, 2026 to present',
        summary:
          'Internal system that replaces a classic ASP legacy and supports the daily work of about 130 operations staff. I own the architecture, the code and the infrastructure.',
        points: [
          'Clean Architecture, DDD and SOLID in .NET, with a React front end.',
          'Full testing pyramid: unit, integration and end-to-end.',
          'CI/CD pipelines for staging and production.',
          'Infrastructure provisioned by me: IIS sites and Azure DNS, with native ASP.NET authentication.',
        ],
        tags: ['.NET', 'C#', 'React', 'SQL Server', 'Azure', 'CI/CD'],
      },
      items: [
        {
          title: 'Lead and customer service pipeline',
          context: 'Credimil',
          summary:
            'Paid-traffic leads arrive by webhook, flow into customer service on Chatwoot and into the database, where they are matched against production data.',
          tags: ['n8n', 'Webhooks', 'Chatwoot', 'SQL'],
        },
        {
          title: 'Hardware-integrated access control',
          context: 'Sete Tecnologia',
          summary:
            'Access control systems for a seaport and for cafeterias, integrated with turnstiles, biometric readers, gates and truck scales, plus case lifecycle management for city governments.',
          tags: ['.NET', 'Integrations', 'Hardware'],
        },
        {
          title: 'Internal ERP from scratch',
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
      short: 'Coding agents set up so the whole team ships more, within the engineering standard.',
      intro: 'AI as part of the engineering process: with standards, context and human review.',
      featured: {
        title: 'Agent-powered development environment',
        context: 'Credimil',
        summary:
          'I configured Claude Code for the whole project: plugins and skills that carry the system’s architecture, conventions and workflow. A request becomes code with a single command, /nova-feature, following the same standards I would follow by hand.',
        points: [
          'Development skills that encode Clean Architecture, testing and project conventions.',
          'A teammate with no .NET or React background contributes by focusing on business rules, data and tests.',
          'Every change goes through my review before reaching production.',
        ],
        tags: ['Claude Code', 'Plugins', 'Skills', 'Context engineering'],
      },
      items: [],
    },
    {
      key: 'aiProducts',
      id: 'ai-products',
      name: 'AI products',
      short: 'LLMs, agents and data at the core of the product, with cost, privacy and control designed in.',
      intro: 'Products where AI is the value delivered, designed to be cheap to run and to explain what they do.',
      featured: {
        title: 'Argus',
        context: 'Forensic audit copilot, MBA in Generative AI',
        summary:
          'Finds and explains likely fraud in financial transactions, even when the data is incomplete or noisy.',
        quote: 'The AI explains, it doesn’t decide. The final call is always the auditor’s.',
        points: [
          'Statistics (Benford’s Law and Isolation Forest) scan 100% of transactions and return a short, ranked list.',
          'The LLM is only called on alerts the auditor opens: cost stays under control.',
          'No raw transaction is sent to the model API, only aggregated results.',
          'Runs offline with template answers, has 20 automated tests and an arc42-documented architecture.',
        ],
        tags: ['Python', 'OpenAI', 'scikit-learn', 'Streamlit', 'pytest'],
        link: { label: 'View Argus source', href: `${GH}/argus` },
      },
      items: [
        {
          title: 'Assistant on a local LLM',
          context: 'Momorimo, personal project',
          summary:
            'AI chat inside a personal organization system, running a Qwen model locally with llama.cpp: no per-token cost and no data leaving home.',
          tags: ['llama.cpp', 'Qwen', 'Local LLM'],
          status: 'in-progress',
        },
        {
          title: 'Sentiment analysis at scale',
          context: 'MBA in Generative AI',
          summary:
            'Distributed NLP pipeline in PySpark that classifies product reviews, served through a containerized REST API.',
          tags: ['PySpark', 'FastAPI', 'Docker'],
          link: { label: 'View code', href: `${GH}/amazon_reviews_analysis` },
        },
        {
          title: 'ML model as a service',
          context: 'MBA in Generative AI',
          summary:
            'Classification model exposed through an API with strict input contracts, automated tests and a cloud-ready Docker image.',
          tags: ['scikit-learn', 'FastAPI', 'Pydantic', 'pytest'],
          link: { label: 'View code', href: `${GH}/mlops_final` },
        },
      ],
    },
  ],
  principles: {
    title: 'How I work',
    items: [
      {
        title: 'Architecture before code',
        text: 'A well-modeled domain, clear layers and tests at every level. That is what lets a system evolve safely.',
      },
      {
        title: 'End-to-end ownership',
        text: 'From understanding the business to infrastructure and operations. I ship working systems, not just closed tickets.',
      },
      {
        title: 'AI with judgment',
        text: 'I use AI where it pays off, with measured cost, explainable output and a person in charge of decisions.',
      },
      {
        title: 'Standards that scale',
        text: 'I turn good practices into tools and environments so the whole team ships at the same level of quality.',
      },
    ],
  },
  timeline: {
    title: 'Path',
    items: [
      {
        when: '2026 to present',
        title: 'Full-stack developer',
        place: 'Credimil',
        text: 'Responsible for the company’s technology: architecture and development of the new system, infrastructure, integrations and automation.',
      },
      {
        when: 'Completed 2026',
        title: 'MBA in Generative AI and Data Science',
        place: 'Graduate program',
        text: 'Generative AI, machine learning, big data and MLOps, with applied projects such as Argus.',
      },
      {
        when: '2022 to 2026',
        title: 'From intern to developer',
        place: 'Sete Tecnologia',
        text: 'Hired full-time within three months and promoted three times. Built hardware-integrated access control, public-sector case management and an internal ERP.',
      },
      {
        when: 'Degree',
        title: 'Systems Analysis and Development',
        place: 'Associate degree in technology',
        text: 'Foundations in software engineering, databases and web development.',
      },
    ],
  },
  stack: {
    title: 'Tools',
    groups: [
      { name: 'Back end and data', items: ['.NET', 'C#', 'ASP.NET', 'SQL Server', 'Python', 'FastAPI'] },
      { name: 'Front end', items: ['React', 'Next.js', 'React Native'] },
      { name: 'AI and data', items: ['Claude Code', 'OpenAI SDK', 'Semantic Kernel', 'llama.cpp', 'scikit-learn', 'PySpark'] },
      { name: 'Infra and automation', items: ['Azure', 'IIS', 'CI/CD', 'Docker', 'n8n', 'Airflow'] },
    ],
  },
  contact: {
    title: 'Let’s build your next system',
    text: 'I work with teams anywhere, as part of the team or on consulting projects.',
    primaryCta: 'Talk on LinkedIn',
    secondaryCta: 'See GitHub',
  },
  ds: {
    title: 'Design system',
    lede: 'The tokens and components that build this site. Every color, font and measure comes from a single tokens file, which generates the CSS variables and this documentation.',
    sourceNote: 'Single source: src/design/tokens.ts',
    sections: {
      palette: 'Palette',
      paletteText: 'Primitives with no usage meaning. Neons mark and highlight; the deep versions are the ones used as text. Contrast is computed from the tokens themselves.',
      semantic: 'Semantic tokens',
      semanticText: 'Components never use a primitive directly. Changing the theme means changing these references.',
      areas: 'Area colors',
      areasText: 'Each area of work has a neon and a deep tone. The color identifies the area across the site.',
      type: 'Typography',
      typeText: 'Classic 12 to 72 px scale. Chakra Petch for headings, IBM Plex Sans for text and IBM Plex Mono for code.',
      space: 'Spacing',
      spaceText: '4 px base.',
      shape: 'Shape',
      shapeText: 'The cut corner is the components’ signature, in three sizes.',
      components: 'Components',
      componentsText: 'The same components used on the home page.',
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
    },
    sampleText: 'Systems that run the operation',
  },
};
