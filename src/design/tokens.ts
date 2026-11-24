/**
 * Design tokens: fonte única de verdade do visual do site.
 *
 * Para mudar uma cor, fonte ou medida, altere só este arquivo.
 * Os valores viram variáveis CSS (--color-*, --font-*, --space-*...)
 * injetadas em :root pelo layout base, e a página /design-system
 * documenta tudo a partir daqui.
 */

/** Camada 1: primitivos. Valores brutos, sem significado de uso. */
export const palette = {
  ink: { value: '#1A1733', name: 'Ink' },
  graphite: { value: '#56536F', name: 'Graphite' },
  line: { value: '#DEDFEA', name: 'Line' },
  paper: { value: '#F5F6FA', name: 'Paper' },
  white: { value: '#FFFFFF', name: 'White' },

  cyan: { value: '#00E1F0', name: 'Neon cyan' },
  magenta: { value: '#FF2FD2', name: 'Neon magenta' },
  yellow: { value: '#FFE500', name: 'Neon yellow' },

  /* Variações escuras de cada neon, seguras para texto sobre fundo claro. */
  cyanDeep: { value: '#00707C', name: 'Cyan deep' },
  magentaDeep: { value: '#A8008A', name: 'Magenta deep' },
  yellowDeep: { value: '#6E5C00', name: 'Yellow deep' },
} as const;

export type PaletteKey = keyof typeof palette;

/** Camada 2: tokens semânticos. O código dos componentes usa só estes. */
export const semanticColors = {
  'color-bg': { ref: 'paper', use: { pt: 'Fundo da página', en: 'Page background' } },
  'color-surface': { ref: 'white', use: { pt: 'Cartões e áreas elevadas', en: 'Cards and raised areas' } },
  'color-text': { ref: 'ink', use: { pt: 'Texto principal e títulos', en: 'Body text and headings' } },
  'color-text-muted': { ref: 'graphite', use: { pt: 'Texto de apoio', en: 'Supporting text' } },
  'color-border': { ref: 'line', use: { pt: 'Divisores e contornos', en: 'Dividers and outlines' } },
  'color-inverse': { ref: 'ink', use: { pt: 'Fundo de seções invertidas', en: 'Inverted section background' } },
  'color-on-inverse': { ref: 'paper', use: { pt: 'Texto sobre fundo invertido', en: 'Text on inverted background' } },
  'color-focus': { ref: 'magenta', use: { pt: 'Anel de foco do teclado', en: 'Keyboard focus ring' } },
  'color-link': { ref: 'cyanDeep', use: { pt: 'Links no texto', en: 'Inline links' } },
} as const satisfies Record<string, { ref: PaletteKey; use: { pt: string; en: string } }>;

/**
 * As três áreas de atuação. Cada uma tem um neon (marcação, destaque)
 * e sua versão escura (texto). A cor identifica a área em todo o site.
 */
export const areas = {
  software: { neon: 'cyan', deep: 'cyanDeep' },
  aiAssisted: { neon: 'magenta', deep: 'magentaDeep' },
  aiProducts: { neon: 'yellow', deep: 'yellowDeep' },
} as const satisfies Record<string, { neon: PaletteKey; deep: PaletteKey }>;

export type AreaKey = keyof typeof areas;

export const fonts = {
  display: {
    family: '"Chakra Petch", "Segoe UI", system-ui, sans-serif',
    name: 'Chakra Petch',
    role: { pt: 'Títulos, números e rótulos', en: 'Headings, numbers and labels' },
  },
  body: {
    family: '"IBM Plex Sans", "Segoe UI", system-ui, sans-serif',
    name: 'IBM Plex Sans',
    role: { pt: 'Texto corrido e interface', en: 'Body copy and interface' },
  },
  mono: {
    family: '"IBM Plex Mono", ui-monospace, Consolas, monospace',
    name: 'IBM Plex Mono',
    role: { pt: 'Código e nomes de tokens', en: 'Code and token names' },
  },
} as const;

/** Escala tipográfica clássica (Bringhurst): 12, 14, 16, 18, 21, 24, 36, 48, 60, 72. */
export const typeScale = {
  xs: '0.75rem',
  sm: '0.875rem',
  base: '1rem',
  md: '1.125rem',
  lg: '1.3125rem',
  xl: '1.5rem',
  '2xl': '2.25rem',
  '3xl': '3rem',
  '4xl': '3.75rem',
  '5xl': '4.5rem',
} as const;

/** Espaçamento em base 4. */
export const space = {
  1: '0.25rem',
  2: '0.5rem',
  3: '0.75rem',
  4: '1rem',
  5: '1.5rem',
  6: '2rem',
  7: '3rem',
  8: '4rem',
  9: '6rem',
  10: '8rem',
} as const;

/** Canto chanfrado: a assinatura visual dos componentes. */
export const shape = {
  'cut-sm': '6px',
  'cut-md': '12px',
  'cut-lg': '20px',
  'radius-pill': '999px',
} as const;

export const layout = {
  'content-max': '72rem',
  'measure': '66ch',
  'gutter': 'clamp(1.25rem, 5vw, 3.5rem)',
} as const;

/**
 * Efeitos para superfícies escuras. O brilho é misturado a partir da cor
 * da área com color-mix, então acompanha qualquer troca de paleta.
 */
export const effects = {
  'glow-software': '0 0 22px color-mix(in srgb, var(--area-software) 55%, transparent)',
  'glow-ai-assisted': '0 0 22px color-mix(in srgb, var(--area-ai-assisted) 55%, transparent)',
  'glow-ai-products': '0 0 22px color-mix(in srgb, var(--area-ai-products) 50%, transparent)',
  'text-glow': '0 0 10px color-mix(in srgb, currentColor 60%, transparent)',
  'grid-size': '32px',
} as const;

export const motion = {
  'ease-out': 'cubic-bezier(.2,.7,.2,1)',
  'duration-base': '180ms',
  'duration-slow': '700ms',
  'typing-speed': '45ms',
} as const;

/** Converte os tokens em variáveis CSS para :root. */
export function tokensToCss(): string {
  const lines: string[] = [];
  for (const [key, { value }] of Object.entries(palette)) lines.push(`--palette-${kebab(key)}:${value}`);
  for (const [key, { ref }] of Object.entries(semanticColors)) lines.push(`--${key}:var(--palette-${kebab(ref)})`);
  for (const [key, { neon, deep }] of Object.entries(areas)) {
    lines.push(`--area-${kebab(key)}:var(--palette-${kebab(neon)})`);
    lines.push(`--area-${kebab(key)}-deep:var(--palette-${kebab(deep)})`);
  }
  for (const [key, { family }] of Object.entries(fonts)) lines.push(`--font-${key}:${family}`);
  for (const [key, value] of Object.entries(typeScale)) lines.push(`--text-${key}:${value}`);
  for (const [key, value] of Object.entries(space)) lines.push(`--space-${key}:${value}`);
  for (const [key, value] of Object.entries(shape)) lines.push(`--${key}:${value}`);
  for (const [key, value] of Object.entries(layout)) lines.push(`--${key}:${value}`);
  for (const [key, value] of Object.entries(effects)) lines.push(`--${key}:${value}`);
  for (const [key, value] of Object.entries(motion)) lines.push(`--${key}:${value}`);
  return `:root{${lines.join(';')}}`;
}

export function kebab(s: string): string {
  return s.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();
}
