<div align="center">

```
 ___   _   __  __ ___ ___   ___   _   ___ _  _
/ __| /_\ |  \/  |_ _| _ \ / __| /_\ |_ _| \| |
\__ \/ _ \| |\/| || ||   / \__ \/ _ \ | || .` |
|___/_/ \_\_|  |_|___|_|_\ |___/_/ \_\___|_|\_|
```

### `npx samirsain`

my digital business card — runs straight in your terminal, no install needed

[![npm version](https://img.shields.io/npm/v/samirsain?color=00ff41&label=npm&style=flat-square)](https://www.npmjs.com/package/samirsain)
[![npm downloads](https://img.shields.io/npm/dt/samirsain?color=00ff41&style=flat-square)](https://www.npmjs.com/package/samirsain)
[![license](https://img.shields.io/npm/l/samirsain?color=00ff41&style=flat-square)](./LICENSE)
[![node](https://img.shields.io/node/v/samirsain?color=00ff41&style=flat-square)](package.json)

</div>

---

```bash
$ npx samirsain
```

<div align="center">
  <img src="screenshot.png" alt="samirsain card preview" width="720">
</div>

---

## ▸ what it does

`npx samirsain` pulls this package down, runs it once, and throws it away —
no global install, nothing left behind. On run it:

- clears the screen and renders a **matrix-green ASCII banner** with a
  double-line hacker-terminal border
- prints my links — site, agency, GitHub, LinkedIn, Instagram, email
- drops you into an **interactive menu** so you can email me or pop open
  any link directly from the terminal, arrow keys and all

```
? What do you want to do?
> Send me an email
  Visit my website
  Check out my agency
  Follow on GitHub
  Connect on LinkedIn
  Follow on Instagram
  Just quit
```

## ▸ stack

| layer      | tool                                |
| ---------- | ------------------------------------ |
| banner     | [`figlet`](https://npmjs.com/figlet) |
| color      | [`chalk`](https://npmjs.com/chalk)   |
| box        | [`boxen`](https://npmjs.com/boxen)   |
| menu       | [`inquirer`](https://npmjs.com/inquirer) |
| open links | [`open`](https://npmjs.com/open)     |

Pure ESM top to bottom (`"type": "module"`) — no CJS `require` of ESM-only
packages, no `ERR_REQUIRE_ESM`.

## ▸ run it locally

```bash
git clone https://github.com/samirsain/npx-card.git
cd npx-card
npm install
node bin/index.js
```

## ▸ publish

```bash
npm login
npm publish
```

version bumps:

```bash
npm version patch   # or minor / major
npm publish
```

<div align="center">

<sub>built by <a href="https://samirsain.com">Samir Sain</a> · <a href="https://github.com/samirsain">@samirsain</a></sub>

</div>
