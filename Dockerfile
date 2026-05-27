# syntax=docker/dockerfile:1

# ── build stage ───────────────────────────────────────────────
FROM node:22-alpine AS build
WORKDIR /app

# install deps against the lockfile for reproducible builds
COPY package.json package-lock.json ./
RUN npm ci

# build the static site (tsc -b && vite build → /app/dist)
COPY . .
RUN npm run build

# ── runtime stage ─────────────────────────────────────────────
FROM nginx:1.27-alpine AS runner

# replace the stock vhost with our SPA config
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d/app.conf

# ship only the built artifacts
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 \
  CMD wget -qO- http://127.0.0.1/healthz || exit 1

CMD ["nginx", "-g", "daemon off;"]
