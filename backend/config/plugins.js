
module.exports = ({ env }) => {
  return {
    cors: {
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
    upload: {
      config: {
        provider: 'cloudinary',
        providerOptions: {
          cloud_name: env('CLOUDINARY_NAME'),
          api_key: env('CLOUDINARY_KEY'),
          api_secret: env('CLOUDINARY_SECRET'),
        },
        actionOptions: {
          upload: {},
          delete: {},
        },
      },
    },
  };
};

