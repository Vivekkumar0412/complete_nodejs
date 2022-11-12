// console.log("npm")
let chalk = require("chalk");
// import chalk from 'chalk';
let lo = console.log();

let v = require("validator");


let res = v.isEmail("higmail.com");
console.log(res ? chalk.greenBright.underline.inverse(res) : chalk.red.inverse(res));

// console.log(chalk.green.underline('Hello world!'));