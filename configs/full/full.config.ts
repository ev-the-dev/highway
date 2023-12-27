// @ts-nocheck
import globals from "globals";
import js from "@eslint/js";
// import tslint from "@typescript-eslint"
import tslintPlugin from "@typescript-eslint/eslint-plugin";
import * as tslintParser from "@typescript-eslint/parser";
import importsPlugin from "eslint-plugin-import"
import { eslintRules, tslintRules } from "../../rules";

export default [
  js.configs.recommended,
  importsPlugin.configs.recommended.rules,
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
      "@typescript-eslint": tslintPlugin,
      "import": importsPlugin
    },
    rules: {
      ...eslintRules,
      ...tslintRules,
    },
    settings: {
      "import/resolver": {
        typescript: true
      }
    }
  },

  {
    files: ["*.js"],
    rules: {
      "@typescript-eslint/explicit-member-accessibility": "off",
    },
  },
];
