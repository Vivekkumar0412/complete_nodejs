let fs = require("fs");

fs.writeFile("text.txt","I am an asynchronous file",(err)=>{
    console.log("file created !!")
    console.log(err)
})

//