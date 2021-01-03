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
