# marisesan.com

Site pessoal de **Marise Santana**, engenheira de software full-stack: software, software com IA e produtos de IA.

Site estático em [Astro](https://astro.build), em português e inglês, com um design system próprio documentado em [`/design-system`](https://marisesan.com/design-system/).

## Estrutura

```
src/
├── design/tokens.ts        Fonte única de cores, fontes, escalas e formas
├── content/                Conteúdo do portfólio
│   ├── types.ts            Tipos do conteúdo
│   ├── pt.ts / en.ts       Textos em cada idioma
├── i18n/index.ts           Idiomas, rotas e textos de interface
├── components/
│   ├── ui/                 Button, Tag, AreaMark
│   ├── work/               WorkFeature, WorkRow
│   └── sections/           Hero, AreaSection, Principles, Timeline, Stack, Contact
├── layouts/Base.astro      <head>, SEO, hreflang, tokens em :root
├── views/                  Home e DesignSystem, compartilhadas pelos idiomas
├── pages/                  Rotas: / (pt), /en/, /design-system/, /en/design-system/
├── lib/                    Contraste WCAG e dados estruturados (JSON-LD)
└── styles/global.css       Fontes, reset e estilos base
public/                     Fontes, favicon, imagens de compartilhamento, robots.txt
deploy/nginx.conf           Configuração do servidor
```

## Design tokens

Tudo que é visual sai de `src/design/tokens.ts`, em duas camadas:

1. **Primitivos** (`palette`): os valores brutos, como `cyan: #00E1F0`.
2. **Semânticos** (`semanticColors`, `areas`): o que os componentes usam, como `--color-text` ou `--area-software`.

O layout base converte os tokens em variáveis CSS, e a página `/design-system` lê o mesmo arquivo para gerar a documentação, incluindo o contraste WCAG de cada cor. Para trocar a paleta, edite só os primitivos.

## Conteúdo

Os textos ficam em `src/content/pt.ts` e `src/content/en.ts`, com o mesmo formato (`SiteContent`). O TypeScript acusa se um idioma ficar sem algum campo.

## Desenvolvimento

```bash
npm install
npm run dev      # http://localhost:4321
npm run check    # tipos
npm run build    # gera dist/
```

## Publicação na VPS

### Primeira instalação

No console da VPS (Ubuntu), como root:

```bash
curl -fsSL https://raw.githubusercontent.com/marise-san/marisesan.com/main/deploy/setup-vps.sh -o setup-vps.sh && bash setup-vps.sh
```

O script para sem alterar nada se as portas 80/443 já estiverem em uso por outro serviço. Se tudo der certo, ele instala nginx, Node.js 22 e certbot, compila o site e publica em `/var/www/marisesan.com`.

### DNS e HTTPS

No hPanel da Hostinger: desconecte o domínio do Website Builder e aponte os registros `A` de `@` e `www` para o IP da VPS. Depois que propagar:

```bash
certbot --nginx -d marisesan.com -d www.marisesan.com --redirect
```

### Atualizações

```bash
bash /opt/marisesan.com/deploy/update.sh
```

Para publicar automaticamente a cada push na `main`, crie a variável de repositório `DEPLOY_ENABLED=true` e os secrets `VPS_HOST`, `VPS_USER` e `VPS_SSH_KEY` (chave privada de um par cuja chave pública esteja em `~/.ssh/authorized_keys` na VPS).

### Depois de publicar

- Cadastre o domínio no [Google Search Console](https://search.google.com/search-console) e envie `https://marisesan.com/sitemap-index.xml`.
- Confira a prévia de compartilhamento no [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/).

## Licenças

Fontes Chakra Petch, IBM Plex Sans e IBM Plex Mono sob SIL Open Font License.
