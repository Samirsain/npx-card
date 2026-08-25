<div align="center">

```
 ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
 █                                                          █
 █    ___   _   __  __ ___ ___   ___   _   ___ _  _         █
 █   / __| /_\ |  \/  |_ _| _ \ / __| /_\ |_ _| \| |        █
 █   \__ \/ _ \| |\/| || ||   / \__ \/ _ \ | || .` |        █
 █   |___/_/ \_\_|  |_|___|_|_\ |___/_/ \_\___|_|\_|        █
 █                                                          █
 █   >_ digital business card, compiled for your terminal   █
 █                                                          █
 ▀▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▀
```

[![npm](https://img.shields.io/badge/npm-samirsain-00ff41?style=for-the-badge&logo=npm&logoColor=00ff41&labelColor=0d1117)](https://www.npmjs.com/package/samirsain)
[![downloads](https://img.shields.io/npm/dt/samirsain?style=for-the-badge&color=00ff41&labelColor=0d1117&label=pulls)](https://www.npmjs.com/package/samirsain)
[![node](https://img.shields.io/node/v/samirsain?style=for-the-badge&color=00ff41&labelColor=0d1117)](package.json)
[![license](https://img.shields.io/badge/license-MIT-00ff41?style=for-the-badge&labelColor=0d1117)](./LICENSE)

**`01001110 01011000 01010000`** — no install, no trace, runs and vanishes

</div>

<br>

```
┌──●──●──●──────────────────────────────────────────────────┐
│  sai@desktop: ~                                            │
├──────────────────────────────────────────────────────────┤
│  $ npx samirsain                                            │
└──────────────────────────────────────────────────────────┘
```

<div align="center">
  <img src="screenshot.png" alt="samirsain card preview" width="760">
</div>

---

### `[ payload ]`

running `npx samirsain` fetches this package, executes it once, and leaves
nothing behind on disk. what it does, in order:

```
[✓] clear terminal
[✓] render ASCII banner  — matrix-green gradient, figlet
[✓] render info card     — boxen, double-line border
[✓] print contact links  — web · agency · github · linkedin · instagram · email
[✓] spawn interactive menu
```

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

pick one — it opens straight from the terminal via `open`, no copy-pasting links.

---

### `[ stack ]`

```
bin/index.js
├── figlet      → ASCII banner
├── chalk       → matrix-green gradient + colors
├── boxen       → the double-line terminal box
├── inquirer    → the interactive menu
└── open        → fires links/mailto from the shell
```

100% ESM (`"type": "module"`), so it runs on chalk 5 / boxen 8 / inquirer 14
without the classic `ERR_REQUIRE_ESM` crash older npx-card tutorials hit.

---

### `[ run locally ]`

```bash
$ git clone https://github.com/samirsain/npx-card.git
$ cd npx-card
$ npm install
$ node bin/index.js
```

### `[ ship it ]`

```bash
$ npm login
$ npm publish
```

```bash
# next release
$ npm version patch   # patch | minor | major
$ npm publish
```

---

<div align="center">

```
$ whoami
```

**Samir Sain** — Full-Stack Web Developer · Founder, [Zenviq Digital](https://zenviqdigital.in)

[![Website](https://img.shields.io/badge/samirsain.com-00ff41?style=flat-square&logo=googlechrome&logoColor=black&labelColor=0d1117)](https://samirsain.com)
[![GitHub](https://img.shields.io/badge/@samirsain-00ff41?style=flat-square&logo=github&logoColor=black&labelColor=0d1117)](https://github.com/samirsain)
[![LinkedIn](https://img.shields.io/badge/samirsain-00ff41?style=flat-square&logo=linkedin&logoColor=black&labelColor=0d1117)](https://linkedin.com/in/samirsain)
[![Instagram](https://img.shields.io/badge/@codexmir-00ff41?style=flat-square&logo=instagram&logoColor=black&labelColor=0d1117)](https://instagram.com/codexmir)
[![Email](https://img.shields.io/badge/hii@samirsain.com-00ff41?style=flat-square&logo=gmail&logoColor=black&labelColor=0d1117)](mailto:hii@samirsain.com)

<sub>connection closed. `$ npx samirsain` to reopen.</sub>

</div>
