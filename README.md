# @dooboo/eslint-config

[![Npm Version](http://img.shields.io/npm/v/@dooboo/eslint-config.svg?style=flat-square)](https://npmjs.org/package/@dooboo/eslint-config)
[![Downloads](http://img.shields.io/npm/dm/@dooboo/eslint-config.svg?style=flat-square)](https://npmjs.org/package/@dooboo/eslint-config)
=========

## Installation

```
yarn add --dev eslint @dooboo/eslint-config
```

> Note: We're using `yarn` to install deps. Feel free to change commands to use `npm` 3+ and `npx` if you like.

## Usage

Add to your eslint config (`.eslintrc`, or `eslintConfig` field in `package.json`):

```
{
  "extends": "@dooboo/eslint-config"
}
```

## Changelog

[0.3.0]

- Upgrade typescript eslint parser to `2.11.0` to support typescript >= `3.7`
