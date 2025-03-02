module.exports = ({ env }) => ({
  host: env('HOST', '::'),
  port: env.int('PORT', 1337),
  url: 'https://api.olalao-jeanne.fr',
  app: {
    keys: env.array('APP_KEYS'),
  },
});
