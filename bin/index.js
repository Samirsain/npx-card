#!/usr/bin/env node
import chalk from "chalk";
import boxen from "boxen";
import figlet from "figlet";

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
