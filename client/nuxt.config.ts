// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: [
    '@/assets/css/main.scss',
  ],
  alias: {
    assets: "/<rootDir>/assets",
  },
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@nuxt/image',
    '@nuxt/icon',
    '@nuxtjs/strapi',
  ],

  strapi: {
    url: process.env.NUXT_PUBLIC_STRAPI_URL || 'http://localhost:1337',
    prefix: '/api', // Préfixe par défaut de l'API Strapi v4/v5
    version: 'v4', // Assure-toi que c'est bien configuré pour Strapi 5
  },

  app: {
    head: {
      title: 'Olalao Jeanne',
      meta: [
        { name: 'description', content: 'Portfolio de Olalao Jeanne' }
      ],
    }
  },
  runtimeConfig: {
    public: {
      strapiURL: process.env.NUXT_PUBLIC_STRAPI_URL || 'http://localhost:1337',
    },
  },
})