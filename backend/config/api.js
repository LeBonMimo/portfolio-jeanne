module.exports = {
  rest: {
    defaultLimit: 25,
    maxLimit: 100,
    withCount: true,
    cors: {
      enabled: true,
      origin: process.env.CORS_ORIGIN?.split(',') || [
        'https://olalao-jeanne.fr',
        'https://www.olalao-jeanne.fr',
      ],
    },
  },
};
