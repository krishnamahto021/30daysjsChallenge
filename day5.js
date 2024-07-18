// // task 1
// function checkEvenOdd(num) {
//   if (num < 0) {
//     console.log("Negative number");
//     return;
//   }
//   if (num % 2 === 0) {
//     console.log("Even");
//   } else {
//     console.log("odd");
//   }
// }

// checkEvenOdd("8")

// task 2
// function square(num){
//     return num*num;
// }
// console.log(square(6969));

// task 3
// const maximum = function (num1, num2) {
//   if (num1 > num2) {
//     console.log("num1 is larger", num1);
//   } else {
//     console.log("num2 is larger", num2);
//   }
// };

// maximum(30,4)

// task 4
// const concatenateStrings = function (str1, str2) {
//   return str1 + str2;
// };
// console.log(concatenateStrings("Follow ", "ezcodin"));

// task 5
// const getSum = (num1, num2) => {
//   return num1 + num2;
// };
// console.log(getSum(7, 8));

// task 6
// const checkCharacter = (str, character) => {
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === character) return true;
//   }
//   return false;
// };
// console.log(checkCharacter("ezcodin", "g"));

// task 7
// function product(num1, num2 = 7) {
//   return num1 * num2;
// }
// console.log(product(7));

// task 8
// function greet(name, age = 69) {
//   return `Welcome ${name} of age ${age} to our page`;
// }
// console.log(greet("ezcodin"));

// task 9
// function printHello() {
//   console.log("Hello ");
// }

// function higherOrderFunction(func, num) {
//   for (let i = 0; i < num; i++) {
//     func();
//   }
// }
// higherOrderFunction(printHello,7);

// tak 10
function square(num) {
  return num * num;
}
function cube(num) {
  return num * num * num;
}
function higherOrderFunction(func1, func2, val) {
  // first find square of the given number and then find the cube of the result
  const res = func1(val);
  const final = func2(res);
  console.log(final);
}

higherOrderFunction(square, cube, 5);
