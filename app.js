import chalk from "chalk";

console.log("Hello world!");

const string =
  "Jeg pleier å be ungene om å stille seg i hjørnet om de klager på at det er kaldt, det er jo 90 grader der";

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
