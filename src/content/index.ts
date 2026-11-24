import type { Lang } from '../i18n';
import type { SiteContent } from './types';
import { pt } from './pt';
import { en } from './en';

const content: Record<Lang, SiteContent> = { pt, en };

export function getContent(lang: Lang): SiteContent {
  return content[lang];
}
