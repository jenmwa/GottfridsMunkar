module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['airbnb-base', 'prettier'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'curly': ['error', 'all'],
    'indent': ['error', 2, { SwitchCase: 1 }],
    'max-len': ['error', { code: 180 }],
  },
};
