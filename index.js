module.exports = {
  extends: ["eslint:recommended", "plugin:prettier/recommended"],
  env: {
    es6: true,
    browser: true,
  },
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: "module",
  },
  globals: {
    jQuery: "readonly",
  },
};
