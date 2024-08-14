import js from "@eslint/js";

export default [
  js.configs.recommended,

  {
    rules: {
      "no-unused-vars": "warn",
      "no-undef": "warn",
    },
  },
  {
    overrides: [
      {
        files: ["tests/**/*"],
        plugins: ["jest"],
        env: {
          "jest/globals": true,
        },
      },
    ],
  },
];
