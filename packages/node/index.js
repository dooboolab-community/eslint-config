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
  plugins: ['eslint-comments', 'simple-import-sort', 'import'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      parser: '@typescript-eslint/parser',
      plugins: ['@typescript-eslint/eslint-plugin'],
      rules: {
        'eslint-comments/no-unlimited-disable': 0,
        'eslint-comments/no-unused-disable': 0,
        'prettier/prettier': 'error',
        'simple-import-sort/imports': [
          'error',
          {
            groups: [
              ['^\\u0000'],
              ['^react', '^@?\\w'],
              ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
              ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
            ],
          },
        ],
        '@typescript-eslint/consistent-type-imports': 'warn',
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': [
          'warn',
          {
            varsIgnorePattern: '^_',
            argsIgnorePattern: '^_',
            ignoreRestSiblings: true,
          },
        ],
        'no-shadow': 'off',
        '@typescript-eslint/no-shadow': ['warn'],
        '@typescript-eslint/explicit-function-return-type': [
          'error',
          {
            allowExpressions: true,
          },
        ],
        'no-duplicate-imports': 'off',
        'import/no-duplicates': ['error', {'prefer-inline': false}],
      },
    },
    {
      files: ['*.json'],
      rules: {
        'prettier/prettier': 0,
      },
    },
  ],
  rules: {
    '@typescript-eslint/no-var-requires': 0,
    camelcase: 0,
    indent: 'off',
    'jsx-quotes': ['error', 'prefer-double'],
    '@typescript-eslint/interface-name-prefix': 0,
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
    '@typescript-eslint/no-use-before-define': [1],
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'never',
        named: 'never',
        asyncArrow: 'always',
      },
    ],
    'generator-star-spacing': ['error', {before: false, after: true}],
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
    'jest/valid-expect-in-promise': 0,
    'jest/no-standalone-expect': 0,
  },
};
