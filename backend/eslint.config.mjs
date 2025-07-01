import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig({
  languageOptions: {
    parserOptions: {
      ecmaVersion: 2020,  
      sourceType: "module",
    },
  },
  overrides: [
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
  ],
});
