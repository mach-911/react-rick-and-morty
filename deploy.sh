#!/usr/bin/env sh
set -e # aborta en caso de error
npm run build # build
cd dist # navegamos a la carpeta dist
# ------------------
# preparando el deploy
git init
git checkout -b main
git add -A
git commit -m "deploy"
# -------------------
# publicar en gh-pages
git push -f git@github.com:mach-911/react-rick-and-morty.git main:gh-pages
cd -