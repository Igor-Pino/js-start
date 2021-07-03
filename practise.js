// function expression

// const getSum = function () {
//     console.log(arguments)
//     let total = 0;
//     for (let element of arguments) {
//         total += element;
//     }
//     return total;
// }

// console.log(getSum(1, 2, 4, 6, 7))
// ____________________________________
// function declaration

// function getSum() {
//     console.log(arguments)
//     let total = 0;
//     for (let element of arguments) {
//         total += element;
//     }
//     return total;
    
// }
// console.log(getSum(1, 2, 4, 6, 7))
// ___________________________________
// arrow function

// const getSum = (...all) => {
    
//     let total = 0;
//     for (let element of all) {
//         total += element;
//     }
//     return total;
// }

// console.log(getSum(1, 2, 4, 6, 7))
// _____________________________________

// callback

// const aFn = function (massage, callback) {
//     console.log(massage);
//     callback(100)
// }



// const bFn = function (value) {
//     console.log(`Im call back funktion`, value)
// }

// aFn("dick", bFn);
// ____________________________________________

// const doMath = function (a, b, callback) {
//     const result = callback(a, b);
//     console.log(result)
// }

// const add = function (x, y) {
//  return x + y
// }

// doMath(5, 7, add)

// літерал функції, щоб не оголошувати її в змінну

// const doMath = function (a, b, callback) {
//     const result = callback(a, b);
//     console.log(result)
// }

// doMath(5, 7, function (x, y) {
//     return x + y})
