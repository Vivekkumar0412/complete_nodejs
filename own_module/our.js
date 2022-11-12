// let a = (b,c)=>{
//     return b + c
// };

// let c = (a,b)=>{
//     return a - b;
// }
// module.exports.a = a;
// module.exports.c = c; 

let {sum,sub,divv,mult,name} = require("./exportt");

console.log(sum(5,5))
console.log(sub(5,5))
console.log(divv(5,5))
console.log(mult(5,5))
console.log(name)