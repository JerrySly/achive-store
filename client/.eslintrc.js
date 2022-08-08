module.exports = {
  extends: [
    'plugin:vue/vue3-recommended'
  ],

  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
  },

  root: true,

  env: {
    node: true
  },

  extends: [
    'plugin:vue/vue3-recommended',
    'plugin:vue/vue3-essential',
    '@vue/standard'
  ],

  parserOptions: {
    parser: '@babel/eslint-parser'
  }
}