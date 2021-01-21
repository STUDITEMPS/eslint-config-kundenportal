module.exports = {
  extends: ["eslint:recommended", "plugin:prettier/recommended"],
  env: {
    es2021: true,
    browser: true,
  },
  parserOptions: {
    sourceType: "module",
  },
  globals: {
    jQuery: "readonly",
  },
};
