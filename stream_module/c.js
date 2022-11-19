
// // let EventEmitter = require("events");
// // let mle = new EventEmitter();
// // mle.on("my",()=>{
// //     console.log("hi the re e")
// // })

// // mle.emit("my");

// // let fs = require("fs");

// // let data = "";

// // let rs = fs.createReadStream("input.txt");

// // rs.setEncoding("utf-8");

// // rs.on("data",function(res){
// //     data += res;
// // })

// // rs.on("end",function(){
// //     console.log(data);
// // })

// // rs.on("error",function(err){
// //     console.log(err);
// // })

// // console.log("program eddes !")

// // let data2 = "Hi there vivek here and i am placed at the pakage of 1.5 cr! at age of 24";

// // let ws = fs.createWriteStream("output.txt");

// // ws.write(data2,"utf-8")
// // ws.end();

// // ws.on("finish",()=>{
// //     console.log("write completed !")
// // })

// // ws.on("error",(er)=>{
// //     console.log(er.stack)
// // })

// // console.log("programm ended by write file")


// let http = require("http");




// let fs = require("fs");
// let data = "Hi there my name is Vivek kumar i got a pakage of 1.5cr per annum at the age of 24";

// let writeStream = fs.createWriteStream("output.txt");

// writeStream.write(data,"utf-8");
// writeStream.end();
// writeStream.on("finish",()=>{
//     console.log("fiished uploading the file !");
// });

// writeStream.on("error",(er)=>{
//     console.log(er.stack);
// })

// let dataa = "";

// // let readStream = fs.createReadStream("output.txt");

// // readStream.setEncoding("utf-8");

// // readStream.on("data",function(chunk){
// //     dataa += chunk;
// // })

// // readStream.on("end",()=>{
// //     console.log("finished streamimg !!!")
// // })

// // readStream.on("error",(err)=>{
// //     console.log(err)
// // })

// let server = http.createServer();

// server.on("request",function(req,res){
//     fs.readFile("output.txt","utf-8",(err,data1)=>{
//         res.end(data1);
//     })
// })

// server.listen(3000,"localhost",()=>{
//     console.log("done")
// })
// // let readStream = fs.createReadStream("input.txt");
// // readStream.setEncoding("utf-8");

// // readStream.on("data",function(c){
// //     dataa += c;
// // })

// // readStream.on("end",()=>{
// //     console.log(dataa)
// // })

// // let server = http.createServer();
// // server.on("request",(res,req)=>{
// //     fs.readFile("input.txt",(r,ans)=>{
// //         req.end(ans);
// //     })
// // })

// // server.listen(3000,"localhost")

let fs = require("fs");
let http = require("http");
let data = "";

let readFile = fs.createReadStream("input2.txt");
readFile.setEncoding("utf-8");

readFile.on("data",function(bundle){
    data += bundle;
})

readFile.on("end",()=>{
    console.log("loading ends here !")
})

readFile.on("error",(er)=>{
    console.log(er.stack);
})

let writeFile = fs.createWriteStream("output2.txt")
readFile.pipe(writeFile);
console.log("programm end !");

let server = http.createServer();

server.on("request",(req,res)=>{
    // readFile.pipe(res);
    fs.writeFile("output2.txt","utf-8",(err,ress)=>{
        res.end(ress);
    })
})
server.listen(4000,"localhost");
