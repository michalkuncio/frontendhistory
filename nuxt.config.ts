// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    modules: [
        '@nuxt/eslint',
        '@vueuse/nuxt',
        '@nuxtjs/fontaine'
    ],
    experimental: {
        typedPages: true,
        componentIslands: true
    },
    eslint: {
        config: {
            stylistic: {
                indent: 4,
                semi: true,
                commaDangle: 'never'
            }
        }
    }
});
