module.exports = {
    env: {
        browser: true,
        es2020: true
    },
    extends: [
        'standard'
    ],
    rules: {
        indent: ['error', 4],
        camelcase: 'warn',
        'no-unused-vars': 'warn',
        'brace-style': ['warn', '1tbs', { allowSingleLine: false }]
    }
}
