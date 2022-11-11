console.log("os module !");
let os = require("os");

console.log(os.arch())
// i bacically tells the architure of our system

console.log(os.hostname());
// it will tell the host name

console.log(os.totalmem()/1024/1024/1034);

// it will tell the total memory of ram of our system
// we divided it by 1024 three  times because it return the results in bytes and we converted it into gb