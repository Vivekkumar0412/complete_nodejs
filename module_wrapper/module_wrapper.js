console.log("modeule wrapper ")

// module wrapper is automatically created by the node js.

// we know that each and every file in the node is nothing but a module and we also know that they are private.

// how that files/modules are private ??

// answer is due to module wrapper.

// module wrapper is noting but IFEE in js immediately invoked function expression

// we know that what ever written inside of ifee is private it can be accessed by the outer ones.

console.log("modeule wrapper ")

/// behaind the scene

// (function(modules,require,_fname,_dirname){
//     console.log("modeule wrapper ")
// })

