console.log("os module !");
let os = require("os");

console.log(os.arch())
// i bacically tells the architure of our system

console.log(os.hostname());
// it will tell the host name

console.log(os.totalmem()/1024/1024/1034);

// it will tell the total memory of ram of our system
// we divided it by 1024 three  times because it return the results in bytes and we converted it into gb

console.log(os.freemem()/1024/1024/1024);

// free memory of ram out of total memory

console.log(os.tmpdir())
// tells the whole path fo rtemp files

console.log(os.platform())
// tells teh platform

console.log(os.type())
// tells which operating sysytem we are using
