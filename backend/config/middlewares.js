module.exports = [
  'strapi::logger',
  'strapi::errors',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'img-src': ["'self'", 'data:', 'blob:', 'https://api.olalao-jeanne.fr', 'https://olalao-jeanne.fr', '*'],
          'media-src': ["'self'", 'data:', 'blob:', 'https://api.olalao-jeanne.fr', 'https://olalao-jeanne.fr', '*'],
          'connect-src': ["'self'", 'https://api.olalao-jeanne.fr', 'https://olalao-jeanne.fr', '*'],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  {
    name: "strapi::cors",
    config: {
      origin: process.env.CORS_ORIGIN?.split(',') || [
        'https://olalao-jeanne.fr',
        'https://www.olalao-jeanne.fr',
      ],
      headers: [
        "Content-Type",
        "Authorization",
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
