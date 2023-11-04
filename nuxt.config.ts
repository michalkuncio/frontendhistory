// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    modules: [
        '@vueuse/nuxt'
    ],
    routeRules: {
        '/about': { prerender: true },
        '/contribute': { prerender: true }
    }
});
