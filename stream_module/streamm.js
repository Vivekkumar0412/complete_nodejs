const fs = require("fs");
const http = require("http");

let server = http.createServer();

server.on("request",(req,res)=>{
    let fs = require("fs");
    fs.readFile("input.txt",(err,data)=>{
        if(err) {
            return err;
        }else{
            res.end(data.toString());
        }
    })
})

server.listen(8000,"localhost",()=>{
    console.log(`hosted at http://localhost:8000`)
})