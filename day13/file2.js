// task 1
// const { add } = require("./file1");
// console.log(add(4, 5));

// task 2
// const { objectToBeExported } = require("./file1");
// console.log(objectToBeExported);
// objectToBeExported.greet();

// task 3
// const { sub, mul } = require("./file1");
// console.log(sub(5, 4));
// console.log(mul(5, 4));

// task 4
// const divison = require("./file1");
// divison(4, 5);

// task 5
// const { wholeObject } = require("./file1");
// console.log(wholeObject.sub(4, 2));

// task 6
// const _ = require("lodash");
// console.log(_.isFinite(5));

// task 7
const axios = require("axios");
const { data } = axios.get("'https://dummyjson.com/todos'");
console.log(data);
