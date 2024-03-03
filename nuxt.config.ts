// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    pageTransition: { name: "page", mode: "out-in" },
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      htmlAttrs: {
        lang: "en",
      },
    },
  },
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: [
    [
      "@nuxtjs/google-fonts",
      {
        families: {
          Poppins: [400, 500, 600, 700],
          "Chakra Petch": [300, 400, 500, 600, 700],
        },
      },
    ],
    "nuxt-icon",
    "@vueuse/nuxt",
    "@formkit/nuxt",
  ],
});
