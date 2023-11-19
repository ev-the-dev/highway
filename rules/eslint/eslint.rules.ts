export default {
  /**
   * OG ESLint Rules
   */
  "no-await-in-loop": "error",
  "no-constructor-return": "error",
  "no-duplicate-imports": "error",
  camelcase: "error",
  "default-case-last": "error",
  "default-param-last": "off", // must be "off" to not conflict with TS "default-param-last"
  eqeqeq: "error",
  "func-names": ["error", "as-needed"],
  "max-depth": ["error", 2],
  "max-nested-callbacks": ["error", 2],
  "max-params": "off", // TSLint below
  "multiline-comment-style": "warn",
  "no-empty-function": "warn",
  "no-lone-blocks": "error",
  "no-loop-func": "warn",
  "no-nested-ternary": "error",
  "no-param-reassign": "error",
  "no-return-assign": "error",
  "no-unneeded-ternary": "error",
  "no-unused-expressions": "warn",
  "no-useless-computed-key": "warn",
  "no-useless-concat": "warn",
  "no-useless-rename": "error",
  "prefer-const": [
    "error",
    {
      destructuring: "any",
      ignoreReadBeforeAssign: false,
    },
  ],
  "sort-imports": "error",
  "sort-keys": [
    "error",
    "asc",
    {
      natural: true,
    },
  ],
};
