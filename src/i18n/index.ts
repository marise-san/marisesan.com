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
    navPath: 'Trajetória',
    navWork: 'Trabalhos',
    navContact: 'Contato',
    navDs: 'Design system',
    langSwitch: 'English',
    langSwitchLabel: 'Read this site in English',
    viewCode: 'Ver código',
    backHome: 'Voltar ao início',
    footerSource: 'Código no GitHub',
  },
  en: {
    skip: 'Skip to content',
    navAreas: 'Areas',
    navPath: 'Experience',
    navWork: 'Work',
    navContact: 'Contact',
    navDs: 'Design system',
    langSwitch: 'Português',
    langSwitchLabel: 'Ler este site em português',
    viewCode: 'View code',
    backHome: 'Back to home',
    footerSource: 'Source on GitHub',
  },
} as const satisfies Record<Lang, Record<string, string>>;
