module.exports = {
  parser: "@graphql-eslint/eslint-plugin",
  parserOptions: {
    operations: ["./src/**/*.graphql"],
    schema: "./schema.graphql",
    skipGraphQLConfig: true,
  },
  plugins: ["@graphql-eslint"],
  rules: {
    "@graphql-eslint/known-fragment-names": "error",
    "@graphql-eslint/no-unused-fragments": "error",
  },
};
