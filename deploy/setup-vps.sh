#!/usr/bin/env bash
# Instala e publica marisesan.com numa VPS Ubuntu com nginx.
# Uso (como root):  bash setup-vps.sh
# Pode ser executado de novo com segurança: só atualiza o que já existe.
set -euo pipefail

REPO="https://github.com/marise-san/marisesan.com.git"
SRC="/opt/marisesan.com"
WEB="/var/www/marisesan.com"
SITE="/etc/nginx/sites-available/marisesan.com"

[ "$(id -u)" -eq 0 ] || { echo "Rode como root."; exit 1; }

echo "==> Verificando as portas 80 e 443"
BUSY="$(ss -ltnp | grep -E ':(80|443)\b' | grep -v nginx || true)"
if [ -n "$BUSY" ]; then
  echo "As portas 80/443 já estão em uso por outro serviço:"
  echo "$BUSY"
  echo "Nada foi alterado. Envie esta saída para revisão antes de continuar."
  exit 1
fi

echo "==> Instalando pacotes"
export DEBIAN_FRONTEND=noninteractive
apt-get update -qq
apt-get install -y -qq nginx git curl rsync certbot python3-certbot-nginx >/dev/null

if ! command -v node >/dev/null || [ "$(node -v | cut -d. -f1 | tr -d v)" -lt 22 ]; then
  echo "==> Instalando Node.js 22"
  curl -fsSL https://deb.nodesource.com/setup_22.x | bash - >/dev/null
  apt-get install -y -qq nodejs >/dev/null
fi

echo "==> Baixando o código"
if [ -d "$SRC/.git" ]; then
  git -C "$SRC" pull --ff-only
else
  git clone --depth 1 "$REPO" "$SRC"
fi

echo "==> Compilando"
cd "$SRC"
npm ci --no-audit --no-fund
npm run build

echo "==> Publicando arquivos"
mkdir -p "$WEB"
rsync -a --delete dist/ "$WEB/"

echo "==> Configurando o nginx"
cp deploy/nginx.conf "$SITE"
ln -sf "$SITE" /etc/nginx/sites-enabled/marisesan.com
rm -f /etc/nginx/sites-enabled/default
nginx -t
systemctl enable --now nginx >/dev/null
systemctl reload nginx

if command -v ufw >/dev/null && ufw status | grep -q "Status: active"; then
  ufw allow 'Nginx Full' >/dev/null
fi

IP="$(curl -fsS https://api.ipify.org || hostname -I | awk '{print $1}')"
echo
echo "Pronto. Teste em http://$IP"
echo "Depois de apontar o DNS para este IP, ative o HTTPS com:"
echo "  certbot --nginx -d marisesan.com -d www.marisesan.com --redirect"
