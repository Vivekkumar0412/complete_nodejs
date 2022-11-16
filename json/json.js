let obj = {
    name: "vivek singh rajput",
    age : 23,
    package : "1.5 cr per annum"
};

let obj2 = {
    name:"vivek",
    age:25,
    package: "3 cr / annum"
};

let objejson = JSON.stringify(obj2);
let jsonobj = JSON.stringify(obj);
// console.log(obj.f());
// console.log(obj)
console.log(jsonobj);
// console.log(JSON.parse(jsonobj))

let fs = require("fs");
const { json } = require("stream/consumers");

fs.writeFile("index.json",jsonobj,(err)=>{
    console.log("file created");
    console.log(err);
})

// fs.appendFile("index.json",objejson,(err)=>{
//     console.log("file appended!")
// })

fs.readFile("index.json","utf-8",(err,res)=>{
    console.log(res);
    console.log(JSON.parse(res))
})