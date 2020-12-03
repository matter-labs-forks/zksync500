module.exports = {
  root: true,
  env: {
    node: true,
    es6: true,
    browser: true,
    jest: false,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:prettier/recommended",
  ],
};
