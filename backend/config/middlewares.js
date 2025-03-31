module.exports = [
  'strapi::logger',
  'strapi::errors',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'img-src': ["'self'", 'data:', 'blob:', 'https://api.olalao-jeanne.fr', 'https://www.olalao-jeanne.fr', 'res.cloudinary.com'],
          'media-src': ["'self'", 'data:', 'blob:', 'https://api.olalao-jeanne.fr', 'https://www.olalao-jeanne.fr', 'res.cloudinary.com'],
          'connect-src': ["'self'", 'https://api.olalao-jeanne.fr', 'https://www.olalao-jeanne.fr', 'https:', '*'],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  {
    name: "strapi::cors",
    config: {
      headers: [
        "Content-Type",
        "Authorization",
        "Origin",
        "Accept",
        "X-Forwarded-Proto"
      ],

      origin: process.env.CORS_ORIGIN?.split(',') || [
        'https://olalao-jeanne.fr',
        'https://www.olalao-jeanne.fr',
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
