// task 1
module.exports.add = (a, b) => {
  return a + b;
};

// task 2
const objectToBeExported = {
  name: "ezcodin",
  greet() {
    console.log("Follow ezcodin");
  },
};
module.exports = { objectToBeExported };

// task 3
const sub = (a, b) => {
  return a - b;
};
const mul = (a, b) => {
  return a * b;
};

module.exports = { mul, sub };

// task 4
// export default function division(a, b) {
//   if (b === 0) {
//     throw new Error("Division by zero is not allowed.");
//   }
//   return a / b;
// }

// task 5
module.exports.wholeObject = {
  objectToBeExported,
  sub,
  mul,
};

