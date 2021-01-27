module.exports = {
  extends: '@react-native-community',
  env: {
    browser: true,
    jest: true,
  },
  settings: {
    react: {
      version: 'latest',
    },
  },
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module',
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      parser: '@typescript-eslint/parser',
      plugins: ['@typescript-eslint/eslint-plugin'],
      rules: {
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': ['warn', {
           varsIgnorePattern: '^_',
           argsIgnorePattern: '^_',
           ignoreRestSiblings: true,
         }],
         'no-shadow': 'off',
         '@typescript-eslint/no-shadow': ['warn'],
         '@typescript-eslint/explicit-function-return-type': [
          'error',
          {
            allowExpressions: true,
          },
        ],
        'no-duplicate-imports': 'off',
        '@typescript-eslint/no-duplicate-imports': 'error',
      },
    },
  ],
  rules: {
    '@typescript-eslint/no-var-requires': 0,
    'react-native/no-inline-styles': 0,
    camelcase: 0,
    indent: 'off',
    'no-use-before-define': [0],
    '@typescript-eslint/no-use-before-define': [1],
    'jsx-quotes': ['error', 'prefer-double'],
    '@typescript-eslint/interface-name-prefix': 0,
    'no-console': 'warn',
    curly: ["error", "multi"],
    'max-len': [
      'error',
      {
        code: 140,
        ignoreRegExpLiterals: true,
        ignoreComments: true,
        ignoreUrls: true,
      },
    ],
    'comma-dangle': ['error', 'always-multiline'],
    semi: [2, 'always'],
    'arrow-parens': ['error', 'always'],
    'no-new-object': 'error',
    'no-array-constructor': 'error',
    'no-use-before-define': [0],
    '@typescript-eslint/no-use-before-define': [1],
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'never',
        named: 'never',
        asyncArrow: 'always',
      },
    ],
    'react/prop-types': 0,
    'generator-star-spacing': ['error', {before: false, after: true}],
    'react/display-name': 0,
    '@typescript-eslint/ban-ts-comment': 0,
    'padding-line-between-statements': [
      'warn',
      {blankLine: 'always', prev: '*', next: 'return'},
      {blankLine: 'always', prev: 'directive', next: '*'},
      {blankLine: 'any', prev: 'directive', next: 'directive'},
      {blankLine: 'always', prev: 'import', next: '*'},
      {blankLine: 'any', prev: 'import', next: 'import'},
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
    'default-param-last': ['warn'],
    'no-undef': 0,
    'no-duplicate-imports': 'error',
  },
};

