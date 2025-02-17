module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  url: 'https://api.olalao-jeanne.fr',
  app: {
    keys: env.array('APP_KEYS'),
  },
});
