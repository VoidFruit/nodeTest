import chalk from "chalk";

console.log("Hello world!");

const string =
  "Jeg har ikke kjæreste, jeg bare kjenner en jente som hadde blitt jævelig sur hvis hun hørte meg si det";

const words = string.split(" ");

const colors = [
  chalk.red,
  chalk.green,
  chalk.blue,
  chalk.yellow,
  chalk.magenta,
  chalk.magentaBright,
  chalk.cyan,
  chalk.gray,
];

const coloredString = words
  .map((word, index) => {
    const chalkColor = colors[index % colors.length];
    return chalkColor(word);
  })
  .join(" ");

console.log(coloredString);
