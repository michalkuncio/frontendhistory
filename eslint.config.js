import withNuxt from './.nuxt/eslint.config.mjs';

export default withNuxt({
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
});
