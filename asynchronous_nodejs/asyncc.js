let fs = require("fs");
const { METHODS } = require("http");

fs.writeFile("text.txt","I am an asynchronous file",(err)=>{
    console.log("file created !!")
    console.log(err)
})

// here also if i use write file sync again the whole data will be overwritten.

fs.writeFile("text.txt","Hi iam vivek kumar",(err)=>{
    console.log("overwriten")
    console.log(err)
})

// write file in asynchronous node js
fs.readFile("text.txt",(err,res)=>{
    console.log(res)
    console.log(err)
})

// here also we get buffer data we still have to ways

// 1:- to use .toString() METHODS
// 2: - to use decoder 

fs.readFile("text.txt","utf-8",(err,res)=>{
    console.log(res)
})

fs.readFile("text.txt",(err,res)=>{
    console.log(res.toString());
})