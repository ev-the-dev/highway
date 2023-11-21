export default {
  /**
   * TypeScript ESLint Rules
   */
  "@typescript-eslint/adjacent-overload-signatures": "error",
  "@typescript-eslint/await-thenable": "error",
  "@typescript-eslint/consistent-type-exports": [
    "warn",
    {
      fixMixedExportsWithInlineTypeSpecifier: false,
    },
  ],
  "@typescript-eslint/consistent-type-imports": [
    "warn",
    {
      prefer: "type-imports",
      disallowTypeAnnotations: true,
      fixStyle: "separate-type-imports",
    },
  ],
  "@typescript-eslint/default-param-last": "error",
  "@typescript-eslint/explicit-function-return-type": "warn",
  "@typescript-eslint/explicit-member-accessibility": "error",
  "@typescript-eslint/max-params": ["error", { max: 4 }],
  "@typescript-eslint/member-ordering": [
    "error",
    {
      default: {
        memberTypes: [
          // Index Signature
          "call-signature",

          // Fields
          "public-abstract-field",
          "protected-abstract-field",

          "public-static-field",
          "protected-static-field",
          "private-static-field",
          "#private-static-field",

          "public-decorated-field",
          "protected-decorated-field",
          "private-decorated-field",
          // "#private-decorated-field",

          "public-instance-field",
          "protected-instance-field",
          "private-instance-field",
          "#private-instance-field",

          "abstract-field",
          "static-field",
          "decorated-field",
          "instance-field",

          "public-field",
          "protected-field",
          "private-field",
          "#private-field",

          "field",

          // Constructors
          "public-constructor",
          "protected-constructor",
          "private-constructor",

          "constructor",

          // Methods
          "public-abstract-method",
          "protected-abstract-method",

          "public-static-method",
          "protected-static-method",
          "private-static-method",
          "#private-static-method",

          "public-decorated-method",
          "protected-decorated-method",
          "private-decorated-method",
          // "#private-decorated-method",

          "public-instance-method",
          "protected-instance-method",
          "private-instance-method",
          "#private-instance-method",

          "abstract-method",
          "static-method",
          "decorated-method",
          "instance-method",

          "public-method",
          "protected-method",
          "private-method",
          "#private-method",

          "method",
        ],
        order: "natural-case-insensitive",
      },
    },
  ],
  // "@typescript-eslint/method-signature-style": "error" // Take a look at this one on docs
  "@typescript-eslint/naming-convention": [
    "error",
    {
      selector: "default",
      format: ["camelCase"],
    },
    {
      selector: "import",
      format: ["camelCase", "PascalCase"],
    },
    {
      selector: "variable",
      types: ["boolean"],
      format: ["PascalCase"],
      prefix: ["is", "has", "should", "can", "did", "will"],
    },
    {
      selector: "typeLike",
      format: ["PascalCase"],
    },
    {
      selector: "memberLike",
      modifiers: ["private"],
      format: ["camelCase"],
      leadingUnderscore: "require",
    },
    {
      selector: "typeAlias",
      format: ["PascalCase"],
      suffix: ["Type"],
    },
    {
      selector: "typeParameter",
      format: ["PascalCase"],
      prefix: ["T"],
    },
    {
      selector: "interface",
      format: ["PascalCase"],
      prefix: ["I"],
    },
    {
      selector: ["enum", "enumMember"],
      format: ["UPPER_CASE"],
    },
  ],
  "@typescript-eslint/no-confusing-non-null-assertion": "warn",
  "@typescript-eslint/no-confusing-void-expression": "warn",
  "@typescript-eslint/no-duplicate-type-constituents": "error",
  "@typescript-eslint/no-empty-function": "error",
  "@typescript-eslint/no-extra-non-null-assertion": "error",
  "@typescript-eslint/no-for-in-array": "error",
  "@typescript-eslint/no-import-type-side-effects": "error",
  "@typescript-eslint/no-loop-func": "warn",
  "@typescript-eslint/no-loss-of-precision": "error",
  "@typescript-eslint/no-misused-promises": "warn",
  "@typescript-eslint/no-mixed-enums": "error", // prefer strings
  "@typescript-eslint/no-non-null-asserted-nullish-coalescing": "error",
  "@typescript-eslint/no-redundant-type-constituents": "error",
  "@typescript-eslint/no-require-imports": "error",
  "@typescript-eslint/no-this-alias": "error",
  "@typescript-eslint/no-unnecessary-boolean-literal-compare": "warn",
  "@typescript-eslint/no-unnecessary-condition": "error",
  "@typescript-eslint/no-unnecessary-qualifier": "error",
  "@typescript-eslint/no-unnecessary-type-assertion": "error",
  "@typescript-eslint/no-unnecessary-type-constraint": "error",
  "@typescript-eslint/no-unsafe-argument": "error",
  "@typescript-eslint/no-unsafe-assignment": "error",
  "@typescript-eslint/no-unsafe-call": "error",
  "@typescript-eslint/no-unsafe-declaration-merging": "error",
  "@typescript-eslint/no-unsafe-enum-comparison": "error",
  "@typescript-eslint/no-unsafe-member-access": "error",
  "@typescript-eslint/no-unsafe-return": "error",
  "@typescript-eslint/no-unsafe-unary-minus": "error",
  "@typescript-eslint/no-unused-expressions": "error",
  "@typescript-eslint/no-unused-vars": "error",
  "@typescript-eslint/no-useless-empty-export": "error",
  "@typescript-eslint/prefer-as-const": "warn",
  "@typescript-eslint/prefer-nullish-coalescing": "error",
  "@typescript-eslint/prefer-optional-chain": "error",
  "@typescript-eslint/prefer-readonly": "error",
  "@typescript-eslint/prefer-regexp-exec": "error",
  "@typescript-eslint/prefer-string-starts-ends-with": "warn",
  "@typescript-eslint/prefer-ts-expect-error": "error",
  "@typescript-eslint/promise-function-async": "error",
  "@typescript-eslint/require-array-sort-compare": "error",
  "@typescript-eslint/restrict-plus-operands": "error",
  "@typescript-eslint/sort-type-constituents": "error", // Look at rule for granular options
  "@typescript-eslint/switch-exhaustiveness-check": "error",
};
