// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    modules: [
        '@vueuse/nuxt',
        '@nuxtjs/fontaine'
    ],
    routeRules: {
        '/about': { prerender: true },
        '/contributions': { prerender: true }
    },
    experimental: {
        typedPages: true
    }
});
