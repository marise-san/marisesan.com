export const locales = ['pt', 'en'] as const;
export type Lang = (typeof locales)[number];
export const defaultLang: Lang = 'pt';

export const htmlLang: Record<Lang, string> = { pt: 'pt-BR', en: 'en' };
export const ogLocale: Record<Lang, string> = { pt: 'pt_BR', en: 'en_US' };

/** Caminho de uma página no idioma pedido. O português fica na raiz. */
export function localePath(lang: Lang, path = '/'): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  return lang === defaultLang ? clean : `/${lang}${clean === '/' ? '/' : clean}`;
}

export function otherLang(lang: Lang): Lang {
  return lang === 'pt' ? 'en' : 'pt';
}

/** Textos fixos de interface. O conteúdo do portfólio fica em src/content. */
export const ui = {
  pt: {
    skip: 'Pular para o conteúdo',
    navAreas: 'Áreas',
    navWork: 'Trabalho',
    navPath: 'Trajetória',
    navContact: 'Contato',
    navDs: 'Design system',
    langSwitch: 'English',
    langSwitchLabel: 'Read this site in English',
    viewCode: 'Ver código',
    inProgress: 'Em desenvolvimento',
    backHome: 'Voltar ao início',
    footerBuilt: 'Construído com Astro e um design system próprio.',
    footerSource: 'Código no GitHub',
  },
  en: {
    skip: 'Skip to content',
    navAreas: 'Areas',
    navWork: 'Work',
    navPath: 'Path',
    navContact: 'Contact',
    navDs: 'Design system',
    langSwitch: 'Português',
    langSwitchLabel: 'Ler este site em português',
    viewCode: 'View code',
    inProgress: 'In progress',
    backHome: 'Back to home',
    footerBuilt: 'Built with Astro and a custom design system.',
    footerSource: 'Source on GitHub',
  },
} as const satisfies Record<Lang, Record<string, string>>;
