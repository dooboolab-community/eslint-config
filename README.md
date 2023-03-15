# ESLint Config

> ESLint configuration for below projects.

### Node.js

[![Npm Version](http://img.shields.io/npm/v/@dooboo/eslint-config-node.svg?style=flat-square)](https://npmjs.org/package/@dooboo/eslint-config-node)

[See package](packages/node/README.md)

### React Native

[![Npm Version](http://img.shields.io/npm/v/@dooboo/eslint-config-react-native.svg?style=flat-square)](https://npmjs.org/package/@dooboo/eslint-config-react-native)

[See package](packages/react-native/README.md)

### React

[![Npm Version](http://img.shields.io/npm/v/@dooboo/eslint-config-react.svg?style=flat-square)](https://npmjs.org/package/@dooboo/eslint-config-react)

[See package](packages/react/README.md)

### Svelte

[![Npm Version](http://img.shields.io/npm/v/@dooboo/eslint-config-svelte.svg?style=flat-square)](https://npmjs.org/package/@dooboo/eslint-config-svelte)

[See package](packages/svelte/README.md)

### Recommendation

#### `.prettierrc.js`

```
module.exports = {
  trailingComma: "all",
  arrowParens: "always",
  singleQuote: true,
  jsxSingleQuote: false,
  bracketSpacing: false,
};
```

#### `.vscode/settings.json`
```
{
  "eslint.validate": [
    "javascript",
    "typescript"
  ],
  "editor.codeActionsOnSave": {
    "source.fixAll": true
  },
  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[javascriptreact]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[typescript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[typescriptreact]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "javascript.preferences.importModuleSpecifier": "relative",
  "typescript.preferences.importModuleSpecifier": "relative",
  "prettier.configPath": ".prettierrc.js",
}
```