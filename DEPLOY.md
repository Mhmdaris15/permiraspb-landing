# Deploying Permira SPb to Coolify

Static Vite/React SPA, served by nginx. The production image is built on GitHub
Actions and published to GHCR; Coolify only pulls and runs that image.

## Files

| File | Purpose |
|------|---------|
| `Dockerfile` | Two-stage build: `node:22-alpine` builds → `nginx:1.27-alpine` serves `/dist` |
| `nginx.conf` | SPA fallback, gzip, immutable asset cache, `/healthz`, security headers |
| `docker-compose.yml` | Coolify service definition pulling GHCR image + domain binding via `SERVICE_FQDN_*` |
| `.dockerignore` | Keeps `node_modules`, `dist`, `.git` out of the build context |
| `.github/workflows/container-image.yml` | Builds image on `main` pushes and publishes to GHCR |

## Image tags (from GitHub Actions)

Image repository: `ghcr.io/mhmdaris15/permiraspb-landing`

- `:main` → moving tag for latest successful build from default branch.
- `:sha-<commit>` → commit-specific tag for pinning/rollback.

Coolify can run `main` for automatic roll-forward, or pin `IMAGE_TAG=sha-...` for
immutable-ish deploys.

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
3. Set env `IMAGE_TAG` to either:
   - `main` (recommended for normal production flow), or
   - a specific `sha-<commit>` tag to pin a release.
4. **Domain** — the compose already pins it via
   `SERVICE_FQDN_PERMIRA_80=https://permiraspb.org`.
   To change it, edit that value or set the domain on the `permira` service in the
   Coolify UI (Service → Domains). For apex **and** www, use a comma list:
   `https://permiraspb.org,https://www.permiraspb.org`.
5. If the GHCR package is private, add registry credentials in Coolify:
   - Registry: `ghcr.io`
   - Username: GitHub username with package read access
   - Password: GitHub token (classic PAT) with at least `read:packages`
6. **Deploy/Redeploy.** Coolify pulls `ghcr.io/mhmdaris15/permiraspb-landing:${IMAGE_TAG}`
   and starts the container on port 80 behind Traefik + Let's Encrypt.
7. Health: Coolify reads the container HEALTHCHECK (`/healthz`). Green = live.

## Notes

- **No app changes needed for routing.** `BrowserRouter` deep links work because
  nginx falls back to `index.html`.
- **Build location:** app build happens in GitHub Actions, not on the Coolify host.
- **Ports:** in Coolify, the proxy handles ingress — do not publish host ports.
  The `ports:` block in the compose stays commented (uncomment only for running
  the compose directly on a host).
- **Redeploy behavior:** redeploy after each successful `main` workflow run (or set
  `IMAGE_TAG` to a specific `sha-...` when pinning/rolling back).
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
