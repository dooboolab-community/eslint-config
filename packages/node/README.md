# @dooboo/eslint-config-node

[![Npm Version](http://img.shields.io/npm/v/@dooboo/eslint-config-node.svg?style=flat-square)](https://npmjs.org/package/@dooboo/eslint-config-node)
[![Downloads](http://img.shields.io/npm/dm/@dooboo/eslint-config-node.svg?style=flat-square)](https://npmjs.org/package/@dooboo/eslint-config-node)
=========

## Installation

```
yarn add -D eslint @dooboo/eslint-config-node prettier
```

> Note: We're using `yarn` to install deps. Feel free to change commands to use `npm` 3+ and `npx` if you like.

## Usage

Add to your eslint config (`.eslintrc`, or `eslintConfig` field in `package.json`):

```
{
  "extends": "@dooboo/eslint-config-node"
}
```

## For yarn berry user

Extra installation required for user who use yarn berry (pnp).
They do not install dependencies in packages.

```
yarn add -D prettier @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-config-prettier eslint-plugin-eslint-comments eslint-plugin-prettier
```
