import type { Lang } from '../i18n';
import type { SiteContent } from '../content/types';

export function personJsonLd(lang: Lang, content: SiteContent) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Marise Santana Martins Moreira',
    alternateName: 'Marise Santana',
    url: lang === 'pt' ? 'https://marisesan.com/' : 'https://marisesan.com/en/',
    jobTitle: content.hero.role,
    description: content.meta.description,
    address: { '@type': 'PostalAddress', addressLocality: 'Fortaleza', addressRegion: 'CE', addressCountry: 'BR' },
    alumniOf: lang === 'pt'
      ? 'MBA em Inteligência Artificial Generativa e Ciência de Dados'
      : 'MBA in Generative AI and Data Science',
    knowsAbout: [
      '.NET', 'C#', 'React', 'SQL Server', 'Azure', 'Clean Architecture', 'Domain-Driven Design',
      'Python', 'Large Language Models', 'AI agents', 'Machine Learning', 'Claude Code',
    ],
    sameAs: ['https://github.com/marise-san', 'https://www.linkedin.com/in/marise-san/'],
  };
}
