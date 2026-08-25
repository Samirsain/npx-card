# samirsain

My digital business card — runs straight in your terminal, no install needed.

```
npx samirsain
```

## What it does

`npx samirsain` downloads this package temporarily and runs its `bin` script,
which prints a boxed card with my name, title, and links (site, agency,
GitHub, email).

## Local development

```
npm install
node bin/index.js
```

## Publish

```
npm login
npm publish
```

Version bumps:

```
npm version patch
npm publish
```
