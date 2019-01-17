module.exports = {
  "root": true,
  "parser": "babel-eslint",
  "env": {
    "node": true
  },
  "plugins": [
    "eslint-plugin-import"
  ],
  "extends": "eslint:recommended",
  "rules": {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    semi: ['error', 'never'],
    'import/prefer-default-export': 'off',
    'import/extensions': ['error', 'never'],
    'linebreak-style': 'off',
    'object-curly-spacing': ['error', 'always']
  }
}
