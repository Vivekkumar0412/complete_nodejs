console.log("hi there !!");
let fs = require("fs");
let EventEmitter = require("events");

let chalk = require("chalk")

let myEvent = new EventEmitter();
// console.log(myEvent);

myEvent.on("myName",(a,b)=>{
    setImmediate(()=>{
        console.log("my name is vivek singh rajput");
    })
    console.log(`the sum is : ${a+b} and product is : ${a*b}`)
})



myEvent.emit("myName",9,9);
myEvent.emit("myName");
let calll = ()=>{
    console.log("this is function from outside")
}

myEvent.once("dt",function(name,age,salary){
    setImmediate(()=>{
        console.log(chalk.bgRedBright(`Hi there I am ${name} my age is ${age} and my current salary is ${salary }`))
    })

    setImmediate(calll);

    console.log(chalk.greenBright("hi"))
    myEvent.on("error",()=>{
        console.log("ERROR OCCURED !!")
    })
})

myEvent.on("dt",function(name,age,salary){
    console.log(chalk.bgYellow(`Hi there I am ${name} my age is ${age} and my current salary is ${salary }`))
    // console.log(this)
})

myEvent.emit("dt","Vivek",23,"1.5 cr per annum")
myEvent.emit("dt","Vivek",23,"1.5 cr per annum")
myEvent.emit("dt","Vivek",23,"1.5 cr per annum")
myEvent.emit("dt","Vivek",23,"1.5 cr per annum")

myEvent.addListener("gaya",()=>{
    console.log("this from the emitter.addListener !!")
})

myEvent.emit("gaya")

console.log(myEvent.eventNames())
console.log(myEvent.getMaxListeners())