## ESLint config for Svelte

### Installation

```sh
yarn add -D @dooboo/eslint-config-svelte
```

## Usage

Add to your eslint config (`.eslintrc`, or `eslintConfig` field in `package.json`):

```
{
  "extends": "@dooboo/eslint-config-svelte"
}
```

## For yarn berry user

Extra installation required for user who use yarn berry (pnp).
They do not install dependencies in packages.

```
yarn add -D @typescript-eslint/eslint-plugin 
@typescript-eslint/parser
eslint-plugin-svelte3
```
