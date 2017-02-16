module.exports = {
  "env": {
    "browser": true,
    "es6": true,
    "node": true
  },
  "extends": "eslint:recommended",
  "parserOptions": {
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true,
      "jsx": true
    },
    "sourceType": "module"
  },
  "rules": {
    "indent": [
      "error",
      2
    ],
    "linebreak-style": [
      "error",
      "unix"
    ],
    "quotes": [
      "error",
      "single"
    ],
    "semi": [
      "error",
      "never"
    ],
    "prefer-arrow-callback": "error",
    "func-call-spacing": [ "error", "never" ],
    "space-in-parens": [ "error", "never" ],
    "object-curly-spacing": [ "error", "always" ],
    "keyword-spacing": [ "error" ]
  }
};
