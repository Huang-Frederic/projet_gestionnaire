import globals from "globals";

export default [
  {
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: "module",
    },
  },

  {
    files: ["**/*.js"],
    languageOptions: {
      sourceType: "module",
    },
  },

  {
    files: ["**/*.{js,mjs,cjs}"],
    languageOptions: {
      globals: globals.browser,
    },
  },
];
