// console.log("g;k")
import http from "http";
import fs from "fs";

// fs.renameSync("check.js","serverr.js");

let server = http.createServer((req,res)=>{
    res.setHeader("content-Type","Text/Plain")
    res.end("hi this file is created by vivek kumar to check !!");
})

let port = process.env.PORT || 8000;
let hostt = "localhost";

server.listen(port,hostt,()=>{
    console.log(`Server is running on http://${hostt}:${port}`)
})