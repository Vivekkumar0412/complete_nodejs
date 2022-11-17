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

// if we use writeFile sync again then it will erase the privious data and overwrit the new data

fs.writeFileSync("text.txt"," Hi there iam vivek kumar")
console.log(fs.readFileSync("text.txt","utf-8"))

// to add another text in already existed file we use appendFileSync() method

fs.appendFileSync("text.txt"," I am learning node js so that i can grab a job.")
console.log(fs.readFileSync("text.txt","utf-8"))

// fs.mkdirSync("asynchronous_nodejs")
// fs.mkdirSync("os_module")
// fs.mkdirSync("path_module")
// fs.mkdirSync("own_module");
// fs.mkdirSync("npm_mod");
// fs.mkdirSync("module_wrapper");
// fs.mkdirSync("http_server")
// fs.mkdirSync("json");
// fs.mkdirSync("onw_api");
fs.mkdirSync("Events");