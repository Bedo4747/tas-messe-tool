# ---- base deps for building ----
FROM node:20-alpine AS deps
WORKDIR /app
# Install OS deps if you use sharp/swc-plugins etc.
# RUN apk add --no-cache libc6-compat
COPY package.json package-lock.json* pnpm-lock.yaml* yarn.lock* ./
# Prefer npm ci if you use npm, otherwise switch to your manager
RUN if [ -f package-lock.json ]; then npm ci; \
    elif [ -f pnpm-lock.yaml ]; then npm i -g pnpm && pnpm i --frozen-lockfile; \
    elif [ -f yarn.lock ]; then yarn --frozen-lockfile; \
    else npm i; fi

# ---- build the app ----
FROM node:20-alpine AS builder
WORKDIR /app
ENV NEXT_TELEMETRY_DISABLED=1
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# ---- production runner ----
FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV HOSTNAME=0.0.0.0
# use /tmp for Next cache (writable everywhere)
ENV NEXT_CACHE_DIR=/tmp/next-cache

# Create non-root runtime user
RUN addgroup -g 1001 nodejs && adduser -u 1001 -G nodejs -D nextjs

# Minimal files from the build
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

# --- entrypoint that fixes perms at runtime (after any bind mounts) ---
# run as root so we can chown, then drop to nextjs
COPY <<'SH' /entrypoint.sh
#!/bin/sh
set -e
# Ensure both possible cache locations exist
mkdir -p /app/.next/cache /tmp/next-cache
# Fix ownership (ignore errors if already owned)
chown -R nextjs:nodejs /app/.next /tmp/next-cache 2>/dev/null || true
# Drop privileges and exec the passed command (from CMD)
exec su -s /bin/sh nextjs -c "$*"
SH
RUN chmod +x /entrypoint.sh

EXPOSE 3000
# Stay root for the entrypoint; it will drop to nextjs
ENTRYPOINT ["/entrypoint.sh"]
CMD ["node", "server.js"]
