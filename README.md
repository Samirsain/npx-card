# samirsain

My digital business card — runs straight in your terminal, no install needed.

```
npx samirsain
```

## What it does

`npx samirsain` downloads this package temporarily and runs its `bin` script,
which:

- clears the screen and prints a hacker-style card — ASCII art name banner,
  matrix-green gradient, double border — with my links (site, agency,
  GitHub, LinkedIn, Instagram, email)
- drops into an interactive menu so you can email me or open any of my
  links directly from the terminal

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
