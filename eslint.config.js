import withNuxt from './.nuxt/eslint.config.mjs';

export default withNuxt(
    {
        rules: {
            'vue/html-indent': ['error', 4],
            'vue/html-self-closing': ['error', {
                html: {
                    void: 'never',
                    normal: 'always',
                    component: 'always'
                },
                svg: 'always',
                math: 'always'
            }],
            'vue/max-attributes-per-line': ['error', {
                singleline: { max: 5 },
                multiline: { max: 1 }
            }],
            'no-console': 'off'
        }
    },
    // TODO: Move these files to multi-word component names
    {
        files: [
            'components/Faq.vue',
            'components/Footer.vue',
            'components/Header.vue',
            'components/Hero.vue',
            'components/Nav.vue',
            'components/Roadmap.vue'
        ],
        rules: {
            'vue/multi-word-component-names': 'off'
        }
    }
);
