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
};
