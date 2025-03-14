export const config = {
  app: {
    port: process.env.PORT ?? 3000,
    environment: process.env.NODE_ENV ?? "development",
  },

  db: {
    url: process.env.DATABASE_URL!,
    maxQueryLimit: 50,
  },
};
