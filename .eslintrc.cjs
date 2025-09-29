/**
 * @type {import("@types/eslint").Linter.BaseConfig}
 */
// eslint-disable-next-line no-undef
module.exports = {
  plugins: ['solid', 'jsx-a11y'],
  extends: [
    'eslint:recommended',
    'plugin:solid/typescript',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  rules: {
    semi: 'error',
    'prefer-const': 'error',
    'solid/reactivity': 'warn',
    'solid/no-destructure': 'warn',
    'solid/jsx-no-undef': 'error',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    sourceType: 'module',
    ecmaVersion: 'latest',
  },
};
