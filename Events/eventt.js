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

myEvent.once("dt",function(name,age,salary){
    console.log(`Hi there I am ${name} my age is ${age} and my current salary is ${salary }`)

    // console.log(this)
})

myEvent.on("dt",function(name,age,salary){
    console.log(`Hi there I am ${name} my age is ${age} and my current salary is ${salary }`)
    // console.log(this)
})

myEvent.emit("dt","Vivek",23,"1.5 cr per annum")
myEvent.emit("dt","Vivek",23,"1.5 cr per annum")
myEvent.emit("dt","Vivek",23,"1.5 cr per annum")
myEvent.emit("dt","Vivek",23,"1.5 cr per annum")