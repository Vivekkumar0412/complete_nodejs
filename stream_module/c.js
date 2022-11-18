
// let EventEmitter = require("events");
// let mle = new EventEmitter();
// mle.on("my",()=>{
//     console.log("hi the re e")
// })

// mle.emit("my");

let fs = require("fs");

let data = "";

let rs = fs.createReadStream("input.txt");

rs.setEncoding("utf-8");

rs.on("data",function(res){
    data += res;
})

rs.on("end",function(){
    console.log(data);
})

rs.on("error",function(err){
    console.log(err);
})

console.log("program eddes !")

let data2 = "Hi there vivek here and i am placed at the pakage of 1.5 cr!";

let ws = fs.createWriteStream("output.txt");

ws.write(data2,"utf-8")
ws.end();

ws.on("finish",()=>{
    console.log("write completed !")
})

ws.on("error",(er)=>{
    console.log(er.stack)
})

console.log("programm ended by write file")