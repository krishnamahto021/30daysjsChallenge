// task 1
// function throwError() {
//   try {
//     throw new Error("I am an errror");
//   } catch (error) {
//     console.error(error.message);
//   }
// }
// // throwError();

// task 2
// function divideTwo(a, b) {
//   try {
//     if (b === 0) {
//       throw new Error("Divide by zero error");
//     } else {
//       console.log(a / b);
//     }
//   } catch (error) {
//     console.error(error.message);
//   }
// }
// divideTwo(2, 5);
// divideTwo(2, 0);

// task 3
// function finalBlock() {
//   try {
//     console.log("I am in try and now i will throw error");
//     throw new Error("intentionally errored");
//   } catch (error) {
//     console.error(`I am error with message of ${error.message}`);
//   } finally {
//     console.log("Either try or catch at the end i will come");
//   }
// }
// finalBlock();

// task 4
// class CustomError extends Error {
//   constructor(message) {
//     super(message);
//     this.name = this.constructor.name;
//   }
// }
// try {
//   throw new CustomError("this is custom error");
// } catch (error) {
//   console.log(`I am ${error.name} with the message of ${error.message}`);
// }

// task 5
// function validateUser(inp) {
//   try {
//     if (inp === "") {
//       throw new CustomError("Empty string");
//     }
//   } catch (error) {
//     console.error(error.message);
//   }
// }
// validateUser("");

// task 6
// const promise = new Promise((resolve, reject) => {
//   try {
//     const isResolve = Math.random() >= 0;
//     if (isResolve) {
//       resolve("Promise resolved");
//     } else {
//       reject(new Error("promise rejected"));
//     }
//   } catch (error) {
//     console.error(error.message);
//   }
// });

// task 7
// async function demo() {
//   try {
//     const result = await new Promise((resolve, reject) => {
//       const isResolve = Math.random() >= 0.5;
//       if (isResolve) {
//         resolve("Promise resolved successfully!");
//       } else {
//         reject(new Error("Promise rejected with an error!"));
//       }
//     });
//     console.log(result);
//   } catch (error) {
//     console.error(error.message);
//   }
// }

// demo();

// task 8


// task 9
// async function getData() {
//   try {
//     const data = await fetch("http://ctgpt.com/");
//     console.log(data);
//   } catch (error) {
//     console.error(error.message);
//   }
// }
// getData();


