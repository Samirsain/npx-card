#!/usr/bin/env node
import chalk from "chalk";
import boxen from "boxen";

const me = {
  name: "Samir Sain",
  handle: "@CodeWithSamir",
  title: "Full-Stack Web Developer",
  role: "Founder, Zenviq Digital",
  links: {
    Web: "https://samirsain.com",
    Agency: "https://zenviqdigital.in",
    GitHub: "https://github.com/samirsain",
    Email: "hii@samirsain.com",
  },
};

const label = (text) => chalk.gray(text.padEnd(9));

const lines = [
  chalk.bold.cyan(me.name) + chalk.gray(" / " + me.handle),
  "",
  chalk.white(me.title),
  chalk.white(me.role),
  "",
  ...Object.entries(me.links).map(
    ([key, value]) => label(key + ":") + chalk.green(value)
  ),
  "",
  label("Card:") + chalk.magenta("npx samirsain"),
];

console.log(
  boxen(lines.join("\n"), {
    padding: 1,
    margin: 1,
    borderStyle: "round",
    borderColor: "cyan",
    title: "hire me",
    titleAlignment: "center",
  })
);
