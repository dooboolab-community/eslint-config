# @dooboo/eslint-config-react

[![Npm Version](http://img.shields.io/npm/v/@dooboo/eslint-config-react.svg?style=flat-square)](https://npmjs.org/package/@dooboo/eslint-config-react)
[![Downloads](http://img.shields.io/npm/dm/@dooboo/eslint-config-react.svg?style=flat-square)](https://npmjs.org/package/@dooboo/eslint-config-react)
=========

## Installation

```
yarn add -D eslint @dooboo/eslint-config-remix
```

> Note: We're using `yarn` to install deps. Feel free to change commands to use `npm` 3+ and `npx` if you like.

## Usage

Add to your eslint config (`.eslintrc`, or `eslintConfig` field in `package.json`):

```
{
  "extends": "@dooboo/eslint-config-remix"
}
```

### For yarn berry user

Extra installation required for user who use yarn berry (pnp).
They do not install dependencies in packages.

```
yarn add -D eslint-config-prettier eslint-plugin-prettier eslint-plugin-eslint-comments eslint-plugin-react eslint-plugin-react-hooks @typescript-eslint/eslint-plugin @typescript-eslint/parser @remix-run/eslint-config eslint-plugin-node
```
