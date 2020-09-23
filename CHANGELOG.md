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