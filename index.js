module.exports = {
  extends: ["eslint:recommended", "plugin:prettier/recommended"],
  env: { es6: true },
  parserOptions: {
    sourceType: "module",
  },
  globals: {
    window: "readonly",
    document: "readonly",
    jQuery: "readonly",
  },
};
