import type { AreaKey } from '../design/tokens';

export interface Link {
  label: string;
  href: string;
}

/** Camadas concêntricas, da mais externa para a mais interna. */
export interface LayersDiagram {
  kind: 'layers';
  title: string;
  layers: { name: string; detail: string }[];
}

/** Pirâmide, do topo (mais estreito) para a base. */
export interface PyramidDiagram {
  kind: 'pyramid';
  title: string;
  levels: string[];
}

/** Etapas em sequência. */
export interface FlowDiagram {
  kind: 'flow';
  title: string;
  steps: { name: string; detail: string }[];
}

export type Diagram = LayersDiagram | PyramidDiagram | FlowDiagram;

export interface WorkItem {
  title: string;
  context: string;
  summary: string;
  points?: string[];
  tags: string[];
  link?: Link;
}

export interface FeaturedWork extends WorkItem {
  /** Princípio de projeto citado do próprio trabalho. */
  principle?: { label: string; text: string };
  diagrams?: Diagram[];
}

export interface Area {
  key: AreaKey;
  /** Âncora usada na URL, ex.: #software */
  id: string;
  name: string;
  /** Uma linha no índice de áreas. */
  short: string;
  featured?: FeaturedWork;
  items: WorkItem[];
}

export interface TimelineEntry {
  when: string;
  title: string;
  place: string;
  text?: string;
}

export interface TerminalLine {
  key: string;
  value: string | string[];
}

export interface SiteContent {
  meta: { title: string; description: string; ogAlt: string };
  hero: {
    name: string;
    role: string;
    location: string;
    lede: string;
    primaryCta: string;
    secondaryCta: string;
    terminal: { label: string; command: string; lines: TerminalLine[] };
  };
  areasTitle: string;
  areas: Area[];
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
      effects: string; effectsText: string;
      components: string; componentsText: string;
    };
    labels: {
      token: string; value: string; use: string; contrastPaper: string; contrastInk: string;
      sample: string; size: string; family: string; role: string;
      paletteBase: string; paletteNeon: string; paletteDeep: string;
      buttonPrimary: string; buttonSecondary: string; tag: string; areaMark: string; workItem: string;
      terminal: string; layers: string; pyramid: string; flow: string; progress: string; progressText: string;
    };
    sampleText: string;
  };
}
