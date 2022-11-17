let fs = require("fs");
let http = require("http");


let obj = {
    name : "vivek singh rajput",
    age : 23,
    salary : "1.5 cr per annum"
}

let jsobj = JSON.stringify(obj);

fs.writeFile("index.json",jsobj,()=>{
    console.log("file added")
})

let port = process.env.PORT || 8000;
let host = "localhost";

let service = http.createServer((req,res)=>{
    if(req.url == "/"){
        res.end("home page here !")
    }else if(req.url == "/about"){
        fs.readFile("index.json","utf-8",(err,ress)=>{
            console.log(ress)
            let ob = JSON.parse(ress)
            res.end(ob.name)
        })
    }
})

service.listen(port,host,(err)=>{
    console.log(`hosted at http://${host}:${port}`)
})

