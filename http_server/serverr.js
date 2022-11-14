// console.log("g;k")
import http from "http";
import fs from "fs";

// fs.renameSync("check.js","serverr.js");

let server = http.createServer((req,res)=>{
    res.setHeader("content-Type","Text/Plain")
    // console.log(req.url);
    if(req.url == "/"){
        res.end("hi there this is home page");
    }else if(req.url == "/about"){
        res.end("this is about page")
    }else if(req.url == "/about/hi"){
        res.end("double check")
    }else{
        res.writeHead(404,{"content-type":"text/html"})
        res.end(" <h1> Page not found !</h1>")
    }
    

})

let port = process.env.PORT || 8000;
let hostt = "localhost";

server.listen(port,hostt,()=>{
    console.log(`Server is running on http://${hostt}:${port}`)
})