// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    modules: [
        '@vueuse/nuxt',
        '@nuxtjs/fontaine'
    ],
    experimental: {
        typedPages: true,
        componentIslands: true
    }
});
