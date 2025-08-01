const fs = require("fs");
const zlib = require("zlib");
const chalk = require("chalk");
const { log } = require("console");

function compressFile(inputFile) {
  const data = fs.readFileSync(inputFile, "utf-8");
  zlib.gzip(data, (error, buffer) => {
    if (error) {
      console.log(chalk.red("Error compressing file"));
    } else {
      console.log(chalk.green("File compressed successfully"));
      const compressedData = buffer.toString("base64");
      fs.writeFile("data/compressed.txt", compressedData, (err) => {
        if (err) {
          console.log(chalk.red("Error writing compressed file"));
        } else {
          console.log(chalk.blue("Compressed data saved to compressed.txt"));
        }
      });
    }
  });
}

function decompressFile(inputFile) {
  const base64data = fs.readFileSync(inputFile, "utf-8");
  const buffer = Buffer.from(base64data, "base64");
  zlib.gunzip(buffer, (error, decompress) => {
    if (error) {
      console.log(chalk.red("Error decompressing file"));
    } else {
      console.log(chalk.green("File decompressed successfully"));
      const decompressedData = decompress.toString();
      fs.writeFile("data/decompressed.txt", decompressedData, (err) => {
        if (err) {
          console.log(chalk.red("Error writing decompressed file"));
        } else {
          console.log(
            chalk.blue("Decompressed data saved to decompressed.txt")
          );
        }
      });
    }
  });
}

module.exports = { compressFile, decompressFile };
