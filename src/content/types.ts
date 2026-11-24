import type { AreaKey } from '../design/tokens';

export interface Link {
  label: string;
  href: string;
}

export interface WorkItem {
  title: string;
  context: string;
  summary: string;
  points?: string[];
  tags: string[];
  link?: Link;
  status?: 'in-progress';
}

export interface Area {
  key: AreaKey;
  /** Âncora usada na URL, ex.: #software */
  id: string;
  name: string;
  /** Uma linha no hero. */
  short: string;
  /** Abertura da seção da área. */
  intro: string;
  featured?: WorkItem & { quote?: string };
  items: WorkItem[];
}

export interface TimelineEntry {
  when: string;
  title: string;
  place: string;
  text: string;
}

export interface SiteContent {
  meta: { title: string; description: string; ogAlt: string };
  hero: { name: string; role: string; location: string; lede: string; primaryCta: string; secondaryCta: string };
  areasTitle: string;
  areas: Area[];
  principles: { title: string; items: { title: string; text: string }[] };
  timeline: { title: string; items: TimelineEntry[] };
  stack: { title: string; groups: { name: string; items: string[] }[] };
  contact: { title: string; text: string; primaryCta: string; secondaryCta: string };
  ds: {
    title: string;
    lede: string;
    sourceNote: string;
    sections: {
      palette: string; paletteText: string;
      semantic: string; semanticText: string;
      areas: string; areasText: string;
      type: string; typeText: string;
      space: string; spaceText: string;
      shape: string; shapeText: string;
      components: string; componentsText: string;
    };
    labels: {
      token: string; value: string; use: string; contrastPaper: string; contrastInk: string;
      sample: string; size: string; family: string; role: string;
      paletteBase: string; paletteNeon: string; paletteDeep: string;
      buttonPrimary: string; buttonSecondary: string; tag: string; areaMark: string; workItem: string;
    };
    sampleText: string;
  };
}
