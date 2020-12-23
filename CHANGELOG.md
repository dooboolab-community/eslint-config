[0.5.8]
Update packages.
```
 @typescript-eslint/eslint-plugin  ^4.9.1  →  ^4.11.0
 @typescript-eslint/parser         ^4.9.1  →  ^4.11.0
```

[0.5.7]
Update packages.
```
 @typescript-eslint/eslint-plugin  ^4.8.2  →  ^4.9.1
 @typescript-eslint/parser         ^4.8.2  →  ^4.9.1
```

[0.5.6]
Update packages.
```
 @typescript-eslint/eslint-plugin   ^4.7.0  →   ^4.8.2
 @typescript-eslint/parser          ^4.7.0  →   ^4.8.2
 eslint-config-standard            ^16.0.1  →  ^16.0.2
```

[0.5.5]
Update packages.
```
@typescript-eslint/eslint-plugin   ^4.2.0  →   ^4.7.0
@typescript-eslint/parser          ^4.2.0  →   ^4.7.0
eslint-config-standard            ^14.1.1  →  ^16.0.1
eslint-plugin-import              ^2.22.0  →  ^2.22.1
eslint-plugin-react               ^7.21.0  →  ^7.21.5
eslint-plugin-standard             ^4.0.1  →   ^4.1.0
```

[0.5.4]
Add additional rules.
```
'padding-line-between-statements': [
  'warn',
  { blankLine: 'always', prev: '*', next: 'return' },
  // Always require blank lines after directive (like 'use-strict'), except between directives
  { blankLine: 'always', prev: 'directive', next: '*' },
  { blankLine: 'any', prev: 'directive', next: 'directive' },
  // Always require blank lines after import, except between imports
  { blankLine: 'always', prev: 'import', next: '*' },
  { blankLine: 'any', prev: 'import', next: 'import' },
  // Always require blank lines before and after every sequence of variable declarations and export
  {
    blankLine: 'always',
    prev: '*',
    next: ['const', 'let', 'var', 'export'],
  },
  {
    blankLine: 'always',
    prev: ['const', 'let', 'var', 'export'],
    next: '*',
  },
  {
    blankLine: 'any',
    prev: ['const', 'let', 'var', 'export'],
    next: ['const', 'let', 'var', 'export'],
  },
  {
    blankLine: 'always',
    prev: ['multiline-const', 'multiline-expression', 'multiline-let'],
    next: '*',
  },
  {
    blankLine: 'always',
    prev: '*',
    next: ['multiline-const', 'multiline-expression', 'multiline-let'],
  },
  // Always require blank lines before and after class declaration, if, do/while, switch, try
  {
    blankLine: 'always',
    prev: '*',
    next: ['if', 'class', 'for', 'do', 'while', 'switch', 'try'],
  },
  {
    blankLine: 'always',
    prev: ['if', 'class', 'for', 'do', 'while', 'switch', 'try'],
    next: '*',
  },
],
'@typescript-eslint/no-empty-function': 0,
'no-unused-expressions': 'off',
'@typescript-eslint/no-unused-expressions': [
  'error',
  {
    allowShortCircuit: true,
    allowTernary: true,
    allowTaggedTemplates: true,
  },
],
```

[0.5.3]
Added below rule. Followed by the issue `React is already defined` in [typescript-eslint/issues/2502](https://github.com/typescript-eslint/typescript-eslint/issues/2502).
```
'no-use-before-define': [0],
'@typescript-eslint/no-use-before-define': [1],
```

[0.5.2]
Upgrade packages.
```
@typescript-eslint/eslint-plugin   ^3.9.1  →   ^4.2.0
@typescript-eslint/parser          ^3.9.1  →   ^4.2.0
eslint-plugin-react               ^7.20.6  →  ^7.21.0
```

[0.5.1]
Upgrade packages.
```
@typescript-eslint/eslint-plugin  ^3.9.1  →  ^4.0.1
@typescript-eslint/parser         ^3.9.1  →  ^4.0.1
```

[0.5.0]
Upgrade packages.
```
@typescript-eslint/eslint-plugin   ^3.5.0  →   ^3.9.1 
@typescript-eslint/parser          ^3.5.0  →   ^3.9.1 
eslint-plugin-react               ^7.20.3  →  ^7.20.6 
```

* Change rules
  ```
  'react/display-name': 0,
  '@typescript-eslint/ban-ts-comment': 0,
  '@typescript-eslint/explicit-function-return-type': [
    'error',
    { allowExpressions: true },
  ],
  ```

[0.4.3]
Upgrade packages.
```
 @typescript-eslint/eslint-plugin   ^3.0.0  →   ^3.5.0 
 @typescript-eslint/parser          ^3.0.0  →   ^3.5.0 
 eslint-plugin-import              ^2.20.2  →  ^2.22.0 
 eslint-plugin-react               ^7.20.0  →  ^7.20.3 
```

[0.4.1]
Fix wrong config in `@typescript-eslint/indent`.

[0.4.0]
Fix generic typing indent.
```
'@typescript-eslint/indent': [
  "error", 2,
  {
    SwitchCase: 1,
    ignoredNodes: ['TemplateLiteral > *'],
  },
  {
    ignoredNodes: ['TSTypeParameterInstantiation']
  },
]
```
[0.3.8]
```
 @typescript-eslint/eslint-plugin  ^2.20.0  →  ^2.21.0 
 @typescript-eslint/parser         ^2.20.0  →  ^2.21.0 
 babel-eslint                       10.0.3  →   10.1.0 
```
[0.3.7]
```
 @typescript-eslint/eslint-plugin  ^2.15.0  →  ^2.20.0 
 @typescript-eslint/parser         ^2.15.0  →  ^2.20.0 
 eslint-plugin-import              ^2.20.0  →  ^2.20.1 
 eslint-plugin-react               ^7.17.0  →  ^7.18.3 
```
[0.3.6]
```
 @typescript-eslint/eslint-plugin  ^2.15.0  →  ^2.17.0 
 @typescript-eslint/parser         ^2.15.0  →  ^2.17.0 
 eslint-plugin-react               ^7.17.0  →  ^7.18.0 
 ```

[0.3.5]
```
 @typescript-eslint/eslint-plugin  ^2.14.0  →  ^2.15.0 
 @typescript-eslint/parser         ^2.14.0  →  ^2.15.0 
 eslint-plugin-import              ^2.19.1  →  ^2.20.0 
 ```

[0.3.4]
```
@typescript-eslint/eslint-plugin: 2.12.0 => 2.14.0
@typescript-eslint/parser: 2.12.0 => 2.14.0
eslint-plugin-node: 10.0.0 => 11.0.0
```

[0.3.3]
* `indent` off.

[0.3.2]
* `@typescript-eslint/indent` to 2 spaces.
* sort-import add `ignoreDeclarationSort` to `false`