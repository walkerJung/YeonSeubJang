module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ["../packages/*/tsconfig.json"],
  },
  rules: {
    "@typescript-eslint/no-unused-vars": 2,
    "no-empty-pattern": 2,
    "no-case-declarations": 2,
    "@typescript-eslint/no-empty-interface": 2,
  },
};
