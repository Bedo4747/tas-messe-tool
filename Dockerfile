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
# If you need runtime env vars, keep them as process.env reads; build-time
# values can be provided via --build-arg or .env
RUN npm run build

# ---- production runner ----
# ---- production runner ----
FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV HOSTNAME=0.0.0.0
ENV NEXT_CACHE_DIR=/tmp/next-cache

RUN addgroup -g 1001 nodejs && adduser -u 1001 -G nodejs -D nextjs

COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

RUN mkdir -p /tmp/next-cache && chown -R nextjs:nodejs /tmp/next-cache

EXPOSE 3000
USER nextjs
CMD ["node", "server.js"]

