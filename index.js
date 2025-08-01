require("dotenv").config();
const fs = require("fs");
const chalk = require("chalk");

const { compressFile, decompressFile } = require("./src/compress");
const {
  uppercase,
  lowercase,
  palindrome,
  countWords,
} = require("./src/strings");
const getWeather = require("./src/api");

const [, , command, ...args] = process.argv;

switch (command) {
  case "compress":
    if (!args[0]) {
      console.log(chalk.red("Please specify a file to compress."));
    } else {
      compressFile(args[0]);
    }
    break;

  case "decompress":
    decompressFile(args[0]);
    break;

  case "string":
    const operation = args[0];
    const inputText = args.slice(1).join(" ");
    if (!operation || !inputText) {
      console.log(
        chalk.red(
          'Usage: node index string <upper|lower|palindrome|count> "your text"'
        )
      );
    } else {
      switch (operation) {
        case "upper":
          console.log(uppercase(inputText));
          break;
        case "lower":
          console.log(lowercase(inputText));
          break;
        case "palindrome":
          console.log(
            palindrome(inputText)
              ? "Yes, it's a palindrome"
              : "Nope, not a palindrome"
          );
          break;
        case "count":
          console.log(`Word Count: ${countWords(inputText)}`);
          break;
        default:
          console.log(chalk.red("Invalid string operation."));
      }
    }
    break;

  case "weather":
    if (!args[0]) {
      console.log(chalk.red("Please provide a city name for weather info."));
    } else {
      getWeather(args[0]);
    }
    break;

  default:
    console.log(chalk.yellow("Unknown command. Try one of these:"));
    console.log(chalk.green(" compress <file>"));
    console.log(chalk.green(" decompress"));
    console.log(
      chalk.green(' string <upper|lower|palindrome|count> "your text"')
    );
    console.log(chalk.green(" weather <city>"));
}
