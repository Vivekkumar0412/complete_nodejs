// console.log("http server")

// let http = require("http");
import http from "http";

let server = http.createServer((req,res)=>{
    res.end("response mil gaya !");
});

server.listen(5000,"127.0.0.1",()=>{
    console.log(" listingin on the port nukber 6000")
})