module.exports = {
  settings: {
    cors: {
      enabled: true,
      origin: process.env.CORS_ORIGIN?.split(',') || [
        'https://olalao-jeanne.fr',
        'https://www.olalao-jeanne.fr',
      ],

      headers: [
        "Content-Type",
        "Authorization",
        "Origin",
        "Accept",
        "X-Forwarded-Proto"
      ],
      methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
      credentials: true,
    },
  },
};

