#!/usr/bin/env node
import chalk from "chalk";
import boxen from "boxen";
import figlet from "figlet";
import clear from "clear";
import open from "open";
import inquirer from "inquirer";

const me = {
  name: "Samir Sain",
  handle: "@samirsain",
  title: "Full-Stack Web Developer",
  role: "Founder, Zenviq Digital",
  links: {
    Web: "https://samirsain.com",
    Agency: "https://zenviqdigital.in",
    GitHub: "https://github.com/samirsain",
    LinkedIn: "https://linkedin.com/in/samirsain",
    Instagram: "https://instagram.com/codexmir",
    Email: "hii@samirsain.com",
  },
};

const matrixGreens = ["#00ff41", "#00e639", "#00cc33", "#00b32d", "#009926"];

const banner = figlet
  .textSync("SAMIR SAIN", { font: "Small" })
  .replace(/\n$/, "")
  .split("\n")
  .map((line, i) => chalk.hex(matrixGreens[i % matrixGreens.length]).bold(line))
  .join("\n");

const labelWidth =
  Math.max(...Object.keys(me.links).map((key) => key.length), "Card".length) +
  2;
const label = (text) => chalk.hex("#00ff41").dim(text.padEnd(labelWidth));
const arrow = chalk.hex("#00ff41")("▸ ");

const lines = [
  banner,
  "",
  chalk.hex("#00ff41")("[") +
    chalk.white(me.handle) +
    chalk.hex("#00ff41")("]") +
    chalk.gray("  " + me.title),
  chalk.gray("  " + me.role),
  "",
  ...Object.entries(me.links).map(
    ([key, value]) => arrow + label(key + ":") + chalk.cyanBright(value)
  ),
  "",
  arrow + label("Card:") + chalk.magentaBright("npx samirsain"),
];

clear();

console.log(
  boxen(lines.join("\n"), {
    padding: 1,
    margin: 1,
    borderStyle: "double",
    borderColor: "green",
    title: chalk.hex("#00ff41").bold(" root@samirsain "),
    titleAlignment: "center",
  })
);

console.log(
  chalk.gray(
    `  Tip: ${chalk.cyanBright.bold("cmd/ctrl + click")} a link above to open it.\n`
  )
);

const openLink = (url) => () => {
  open(url);
  console.log(chalk.hex("#00ff41")(`\nOpened ${url}\n`));
};

await inquirer
  .prompt([
    {
      type: "select",
      name: "action",
      message: "What do you want to do?",
      choices: [
        { name: "Send me an email", value: openLink(`mailto:${me.links.Email}`) },
        { name: "Visit my website", value: openLink(me.links.Web) },
        { name: "Check out my agency", value: openLink(me.links.Agency) },
        { name: "Follow on GitHub", value: openLink(me.links.GitHub) },
        { name: "Connect on LinkedIn", value: openLink(me.links.LinkedIn) },
        { name: "Follow on Instagram", value: openLink(me.links.Instagram) },
        { name: "Just quit", value: () => console.log(chalk.gray("\nOk, bye.\n")) },
      ],
    },
  ])
  .then((answer) => answer.action());
