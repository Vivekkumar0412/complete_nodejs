let fs = require("fs");

fs.writeFile("text.txt","I am an asynchronous file",(err)=>{
    console.log("file created !!")
    console.log(err)
})

// here also if i use write file sync again the whole data will be overwritten.

fs.writeFile("text.txt","Hi iam vivek kumar",(err)=>{
    console.log("overwriten")
    console.log(err)
})