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

O workflow `.github/workflows/deploy.yml` valida e compila a cada push e, na `main`, publica `dist/` na VPS por rsync.

### Na VPS (uma vez)

```bash
sudo apt update && sudo apt install -y nginx certbot python3-certbot-nginx rsync
sudo mkdir -p /var/www/marisesan.com && sudo chown -R $USER:$USER /var/www/marisesan.com
sudo cp deploy/nginx.conf /etc/nginx/sites-available/marisesan.com
sudo ln -s /etc/nginx/sites-available/marisesan.com /etc/nginx/sites-enabled/
sudo nginx -t && sudo systemctl reload nginx
```

### DNS

No hPanel da Hostinger: desconecte o domínio do Website Builder e aponte os registros `A` de `@` e `www` para o IP da VPS. Depois que propagar:

```bash
sudo certbot --nginx -d marisesan.com -d www.marisesan.com
```

### Deploy automático

```bash
ssh-keygen -t ed25519 -f deploy_key -N "" -C "github-actions"
cat deploy_key.pub >> ~/.ssh/authorized_keys   # na VPS
```

Em **Settings > Secrets and variables > Actions** do repositório:

| Secret | Valor |
|---|---|
| `VPS_HOST` | IP da VPS |
| `VPS_USER` | usuário SSH |
| `VPS_SSH_KEY` | conteúdo de `deploy_key` (chave privada) |

### Depois de publicar

- Cadastre o domínio no [Google Search Console](https://search.google.com/search-console) e envie `https://marisesan.com/sitemap-index.xml`.
- Confira a prévia de compartilhamento no [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/).

## Licenças

Fontes Chakra Petch, IBM Plex Sans e IBM Plex Mono sob SIL Open Font License.
