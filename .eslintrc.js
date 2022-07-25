module.exports = {
  extends: ['plugin:prettier/recommended'],
  env: {
    browser: true,
    jest: true,
  },
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2017,
  },
  plugins: ['eslint-comments'],
  overrides: [
    {
      files: ['*.json'],
      rules: {
        'prettier/prettier': 0,
      },
    },
  ],
  rules: {
    camelcase: 0,
    indent: 'off',
    'jsx-quotes': ['error', 'prefer-double'],
    'no-console': 'warn',
    curly: ['error', 'all'],
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
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'never',
        named: 'never',
        asyncArrow: 'always',
      },
    ],
    'generator-star-spacing': ['error', {before: false, after: true}],
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
        blankLine: 'any',
        prev: ['const', 'let', 'var', 'export'],
        next: ['const', 'let', 'var', 'export'],
      },
      {
        blankLine: 'always',
        prev: [
          'multiline-const',
          'multiline-expression',
          'multiline-let',
          'multiline-block-like',
          'multiline-var',
        ],
        next: [
          'multiline-const',
          'multiline-expression',
          'multiline-let',
          'multiline-block-like',
          'multiline-var',
        ],
      },
      {
        blankLine: 'always',
        prev: ['if', 'class', 'for', 'do', 'while', 'switch', 'try'],
        next: '*',
      },
    ],
    'no-unused-expressions': 'off',
    'default-param-last': ['warn'],
    'no-undef': 0,
    'no-duplicate-imports': 'error',
    'eslint-comments/no-unlimited-disable': 0,
    'eslint-comments/no-unused-disable': 0,
    'jest/valid-expect-in-promise': 0,
    'jest/no-standalone-expect': 0,
  },
};
