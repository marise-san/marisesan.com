#!/usr/bin/env bash
# Atualiza o site com a versão mais recente do GitHub.
# Uso (como root):  bash /opt/marisesan.com/deploy/update.sh
set -euo pipefail
cd /opt/marisesan.com
git pull --ff-only
npm ci --no-audit --no-fund
npm run build
rsync -a --delete dist/ /var/www/marisesan.com/
echo "Site atualizado."
