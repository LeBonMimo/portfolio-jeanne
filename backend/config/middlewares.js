module.exports = [
  'strapi::logger',
  'strapi::errors',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'img-src': ["'self'", 'data:', 'blob:', 'https://api.olalao-jeanne.fr', 'https://www.olalao-jeanne.fr', 'https:'],
          'media-src': ["'self'", 'data:', 'blob:', 'https://api.olalao-jeanne.fr', 'https://www.olalao-jeanne.fr', 'https:'],
          'connect-src': ["'self'", 'https://api.olalao-jeanne.fr', 'https://www.olalao-jeanne.fr', 'https:', '*'],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  {
    name: "strapi::cors",
    config: {
      origin: process.env.CORS_ORIGIN ? process.env.CORS_ORIGIN.split(',') : '*',
      headers: [
        "Content-Type",
        "Authorization",
        "Origin",
        "Accept",
        "X-Requested-With",
      ],
      methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
      credentials: true,
    },
  },
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
