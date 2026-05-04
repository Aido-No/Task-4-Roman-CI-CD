module.exports = [
  {
    files: ["script.js"],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "script",
      globals: {
        // Browser globals
        window: "readonly",
        document: "readonly",
        // Mocha/Chai globals
        describe: "readonly",
        it: "readonly",
        chai: "readonly",
        expect: "readonly",
        // Your functions
        integerToRoman: "readonly",
        romanToInteger: "readonly"
      }
    },
    rules: {
      "no-unused-vars": "warn",
      "no-console": "off"
    }
  }
];
