FROM oven/bun:latest

WORKDIR /app

COPY package.json ./
COPY bun.lock ./

RUN bun install

COPY ./src ./src
COPY drizzle.config.ts ./

EXPOSE 3000

RUN bun run build