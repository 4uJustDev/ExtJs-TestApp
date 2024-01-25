module.exports = {
  extends: 'eslint:recommended',
  root: true,
  ignorePatterns: ['.eslintrc.js'],
  parserOptions: {
    "sourceType": "module"
  },
  rules: {
    'quotes': ['error', 'single'],
    'indent': ['error', 4],
    'no-multi-spaces': ['error']
  }
};
