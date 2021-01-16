### 0.6.15
Updated packages.

```
@typescript-eslint/eslint-plugin  ^4.11.1  →  ^4.13.0
@typescript-eslint/parser         ^4.11.1  →  ^4.13.0
```
### 0.6.14
Removed `no-undef` rule since this isn't needed in `ts`.

### 0.6.13
Fixed react version warning. [Related](https://github.com/yannickcr/eslint-plugin-react/issues/1955#issuecomment-619475509).

### 0.6.12
Removed settings because this is also used in projects other than react.
```
settings: {
  react: {
    createClass: 'createReactClass',
    pragma: 'React',
    version: 'detect',
  },
},
```

### 0.6.11
Properly ignore `node_modules` from publishing.

### 0.6.10
Install all related packages manually.
```
"@react-native-community/eslint-config": "^2.0.0",
"@typescript-eslint/eslint-plugin": "^4.11.1",
"@typescript-eslint/parser": "^4.11.1",
"eslint": "^7",
"prettier": "^2.2.1"
```
### 0.6.9
Manually installed typescript-eslint parser and plugin because those used in `react-native-community` is quite old.

We are now using both version of `4.11.1` and Facebook still uses `3.1.0`. This version does not include `@typescript-eslint/no-shadow` rule.

### 0.6.8
Added below rule in typescript. There was a false positive issue when declaring typescript enum. [Related to typescript-eslint issue#2466](https://github.com/typescript-eslint/typescript-eslint/issues/2466)
```
'no-shadow': 'off',
'@typescript-eslint/no-shadow': ['error'],
```

### 0.6.7
Changed `@typescript-eslint/no-unused-vars` to `warn` instead of `error`.

### 0.6.6
Removed below rules.
```
'no-unused-vars': 'off',
'@typescript-eslint/no-unused-vars': [1],
```

Similary `react-native-community` has them.
* For javascript
```
'no-unused-vars': [
  1,
  {vars: 'all', args: 'none', ignoreRestSiblings: true},
],
```

* For typescript
```
{
  files: ['*.ts', '*.tsx'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint/eslint-plugin'],
  rules: {
    '@typescript-eslint/no-unused-vars': [
      'error',
      {argsIgnorePattern: '^_'},
    ],
    'no-unused-vars': 'off',
  },
},
```

### 0.6.5
Removed `react/jsx-uses-vars` and changed `curly` rule.
```
curly: ["error", "multi"]
```
- [Reference](https://eslint.org/docs/rules/curly)

Added [default-param-last](https://eslint.org/docs/rules/default-param-last) rule.

### 0.6.3
Removed `@typescript-eslint/indent` that overrides previous rule.
Changed max code length from `120` to `140`. The generated typings tends to have long lengths.

### 0.6.1
Added below two rules that we usually extends. Especially for `camelcase`, since we use [relay](http://relay.dev), this is not suitable with the generated typings from [relay-runtime](https://www.npmjs.com/package/relay-runtime).

```
'@typescript-eslint/no-var-requires': 0,
'react-native/no-inline-styles': 0,
camelcase: 0,
```

### 0.6.0
Extends `@react-native-community/eslint-config` for now.

### 0.5.8
Update packages.
```
 @typescript-eslint/eslint-plugin  ^4.9.1  →  ^4.11.0
 @typescript-eslint/parser         ^4.9.1  →  ^4.11.0
```
