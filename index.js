module.exports = {
  extends: [
    'standard',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/explicit-function-return-type': ['error'],
      },
    },
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  settings: {
    react: {
      createClass: 'createReactClass',
      pragma: 'React',
      version: 'detect',
    },
  },
  env: {
    browser: true,
    jest: true,
  },
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module',
  },
  rules: {
    indent: 'off',
    'no-unused-vars': 0,
    'no-use-before-define': [0],
    '@typescript-eslint/no-use-before-define': [1],
    'jsx-quotes': ['error', 'prefer-double'],
    // '@typescript-eslint/no-unused-vars': 'warn',
    '@typescript-eslint/interface-name-prefix': 0,
    '@typescript-eslint/indent': [
      "error", 2,
      {
        SwitchCase: 1,
        ignoredNodes: ['TemplateLiteral > *', 'TSTypeParameterInstantiation'],
      },
    ],
    'no-console': 'warn',
    'react/jsx-uses-vars': [2],
    curly: ['error', 'multi-line'],
    'max-len': [
      'error',
      {
        code: 120,
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
    'sort-imports': [
      2,
      {
        ignoreCase: false,
        ignoreDeclarationSort: false,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
      },
    ],
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
    'generator-star-spacing': ['error', { before: false, after: true }],
    'react/display-name': 0,
    '@typescript-eslint/ban-ts-comment': 0,
    '@typescript-eslint/explicit-function-return-type': [
      'error',
      {
        allowExpressions: true,
      },
    ],
  },
};
