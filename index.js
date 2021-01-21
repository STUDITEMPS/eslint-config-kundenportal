module.exports = {
  extends: ["eslint:recommended", "plugin:prettier/recommended"],
  env: { es6: true },
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: "module",
  },
  globals: {
    window: "readonly",
    document: "readonly",
    jQuery: "readonly",
  },
};
