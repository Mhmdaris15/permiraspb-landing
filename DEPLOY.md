# Deploying Permira SPb to Coolify

Static Vite/React SPA, served by nginx. Multi-stage Docker build, deployed via
Docker Compose on Coolify with automatic Let's Encrypt SSL.

## Files

| File | Purpose |
|------|---------|
| `Dockerfile` | Two-stage build: `node:22-alpine` builds → `nginx:1.27-alpine` serves `/dist` |
| `nginx.conf` | SPA fallback, gzip, immutable asset cache, `/healthz`, security headers |
| `docker-compose.yml` | Coolify service definition + domain binding via `SERVICE_FQDN_*` |
| `.dockerignore` | Keeps `node_modules`, `dist`, `.git` out of the build context |

Validated locally: `docker build` + container run → `/healthz` 200, deep links
fall back to the app shell (200), hashed assets carry a 1-year immutable cache,
HEALTHCHECK reports `healthy`.

## DNS (do this first)

Point the domain at the Coolify server's public IP:

```
A     permiraspb.org        ->  <server-ip>
A     www.permiraspb.org    ->  <server-ip>     (optional; or CNAME -> permiraspb.org)
```

SSL is issued automatically by Coolify once DNS resolves to the server.

## Coolify steps

1. **New Resource → Docker Compose** (Public/Private Git repo, or paste the compose).
2. Point it at this repository; Coolify auto-detects `docker-compose.yml`.
3. **Domain** — the compose already pins it via
   `SERVICE_FQDN_PERMIRA_80=https://permiraspb.org`.
   To change it, edit that value or set the domain on the `permira` service in the
   Coolify UI (Service → Domains). For apex **and** www, use a comma list:
   `https://permiraspb.org,https://www.permiraspb.org`.
4. **Deploy.** Coolify builds the image, starts the container, wires its Traefik
   proxy to port 80, and provisions Let's Encrypt TLS.
5. Health: Coolify reads the container HEALTHCHECK (`/healthz`). Green = live.

## Notes

- **No app changes needed for routing.** `BrowserRouter` deep links work because
  nginx falls back to `index.html`.
- **Ports:** in Coolify, the proxy handles ingress — do not publish host ports.
  The `ports:` block in the compose stays commented (uncomment only for running
  the compose directly on a host).
- **Cache busting:** Vite content-hashes every file in `/assets/`, so the 1-year
  immutable cache is safe; `index.html` is sent `no-cache` so new deploys appear
  immediately.
- **Rebuild after adding photos:** run the WebP optimizer (sharp) so new event
  images land in `src/assets/permira-programs/web/`, commit, then redeploy.

## Local sanity check (optional)

```bash
docker build -t permiraspb:local .
docker run --rm -p 8099:80 permiraspb:local
# open http://localhost:8099
```
