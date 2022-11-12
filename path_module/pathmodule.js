console.log("path module!")

let path = require("path");

console.log(path.parse("C:/Users/vivek/Desktop/nodejs/path_module/pathmodule.js"))
// path.parse("C:/Users/vivek/Desktop/nodejs/path_module/pathmodule.js") basicalyy return an object which comprises of root , dir, base, extension and name of the folder.


console.log(path.dirname("C:/Users/vivek/Desktop/nodejs/path_module/pathmodule.js"))

// path.dirname will basically return the path name 

console.log(path.extname("C:/Users/vivek/Desktop/nodejs/path_module/pathmodule.js"))

// path.extname("") will return the path name
