module.exports = {
  settings: {
    cors: {
      enabled: true,
      origin: ['https://olalao-jeanne.fr', 'https://www.olalao-jeanne.fr', 'http://localhost:3000'],

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

