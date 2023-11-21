import globals from "globals";
import js from "@eslint/js";
import stylistic from "@stylistic/eslint-plugin";
// import tslint from "@typescript-eslint"
import tslintPlugin from "@typescript-eslint/eslint-plugin";
import * as tslintParser from "@typescript-eslint/parser";
import { eslintRules, stylisticRules, tslintRules } from "../../rules";

export default [
  js.configs.recommended,
  // tslint.eslint-plugin.configs.recommended, // throws error on new config file type due to internal "extends"
  {
    files: ["**/*.ts"],
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.jest,
      },
      ecmaVersion: "latest",
      sourceType: "module",
      parser: tslintParser,
      parserOptions: {
        project: "./tsconfig.json",
      },
    },
    plugins: {
      "@stylistic": stylistic,
      "@typescript-eslint": tslintPlugin,
    },
    rules: {
      ...eslintRules,
      ...stylisticRules,
      ...tslintRules,
    },
  },

  {
    files: ["*.js"],
    rules: {
      "@typescript-eslint/explicit-member-accessibility": "off",
    },
  },
];
