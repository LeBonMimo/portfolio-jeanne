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
    name: 'strapi::cors',
    config: {
      enabled: true,
      origin: '*',
      methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
      headers: '*',
      keepHeaderOnError: true,
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
