// @ts-ignore
import { mergeConfig } from 'vite'

export default (config) => {
  // Important: always return the modified config
  return mergeConfig(config, {
    resolve: {
      alias: {
        '@': '/src',
      },
    },
    server: {
      cors: {
        origin: process.env.CORS_ORIGIN?.split(',') || [
          'https://olalao-jeanne.fr',
          'https://www.olalao-jeanne.fr',
        ],
        credentials: true,
      },
    },
  })
}