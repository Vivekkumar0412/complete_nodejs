console.log("hi there !!");
let fs = require("fs");
let EventEmitter = require("events");

let myEvent = new EventEmitter();
// console.log(myEvent);

myEvent.on("myName",(a,b)=>{
    console.log("my name is vivek singh rajput");
    console.log(`the sum is : ${a+b} and product is : ${a*b}`)
})

myEvent.emit("myName",9,9);