# Etapa 1: Build do Angular
FROM node:20-alpine AS build
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .
RUN npm run build

# Etapa 2: Servir com Nginx
FROM nginx:1.27-alpine

COPY docker/nginx.conf /etc/nginx/conf.d/default.conf
# script executado na subida do container: gera o env.js a partir das variaveis de ambiente
COPY docker/gerar-env.sh /docker-entrypoint.d/40-gerar-env.sh
RUN chmod +x /docker-entrypoint.d/40-gerar-env.sh
COPY --from=build /app/dist/frontend/browser /usr/share/nginx/html

EXPOSE 80
