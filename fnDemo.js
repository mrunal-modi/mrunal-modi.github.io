// #1 > Named Function

// // function sum(num1, num2) {
// //   return num1 + num2;
// // }

// // #2 > Anonymous Function (cannot be called until you store in a var in which case, the var becomes the function name)

// // let sum = function fn (num1, num2) {
// //   return num1 + num2;
// // }

// // #2 > Named Function (e.g. fn) can be assigned to a var (e.g. sum)
// // fn is only accessible within the function scope i.e. {}
// // the var (e.g. sum) is accessible outside of the function. The var in this case is of type function.
// // let sum = function fn (num1, num2) {
// //     return num1 + num2;
// //   }

// //   console.log(`typeof fn ${typeof fn}`)
// //   console.log(`typeof sum ${typeof(sum)}`)
// //   console.log(`typeof sum ${typeof sum(5,5 )}`)


// // #3 > Anonymous Function using Fat Arrow
// // let sum = (num1, num2) => {
// //     return num1 + num2;
// //   }

// // call 
// // let total = sum(5, 5)
// // console.log(total)


// function greet(name) {
//     return `Hello ${name}`
// }

// /**
//  * 
//  * 
//  * @param {String} name 
//  * @param {Function} greet 
//  */
// function greet2(name, greet){
// let msg = `${greet(name)}, How are you?`
// return msg;
// }

// console.log(greet2("Peri", greet)); // greet2 is run here, 1st arg is str, 2nd arg is the func (cannot run this function here so no parantheses ())


// // Function keyword and arrow will never be on same line
// // Right of => is {} unless its a single statement in which case not needed
// // Left of => is () unless its a single statement in which case not needed
// // () => {}
// // Arrow Functions do not have a name, they always return something by default.
// // To store the returned data from arrow function, you can prefix it to store in a var
// console.log(greet2("Peri", (name) => {return `Hello ${name}`})); // here => is not returning by default and expects "return keyword". It thinks {} implies multiple lines.
// console.log(greet2("Peri", name => `Hello ${name}`)); // e.g. here we use the single statement fat arrow (no (), no {})
// console.log(greet2("Peri", function (name) { return `Hello ${name}`} )); // Anonnymous Function