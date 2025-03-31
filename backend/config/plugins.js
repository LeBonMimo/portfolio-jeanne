module.exports = {
  settings: {
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
      provider: 'cloudinary',
      providerOptions: {
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
        api_key: process.env.CLOUDINARY_API_KEY,
        api_secret: process.env.CLOUDINARY_API_SECRET,
        //folder: process.env.CLOUDINARY_FOLDER,
      },
      actionOptions: {
        upload: {},
        delete: {},
      },
    }
  },
};

