// file system

let fs = require("fs");

fs.writeFileSync("text.txt","Hi there I am vivek")

fs.readFileSync("text.txt")

// but it will out put a buffer data.

// #### BUFFER data is an additional feature in node js that was not present in js it basically stores the bytes.

// to convert the buffer data to normal code we have two methods.

// 1:- to use toString() method

console.log(fs.readFileSync("text.txt").toString());

// 2:- use decoder 

console.log(fs.readFileSync("text.txt","utf-8"))