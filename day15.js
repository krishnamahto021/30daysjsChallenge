function clousreExample() {
  var a = 69;
  return {
    otherFunction() {
      console.log(a);
    },
  };
}
// task 1
// const example = clousreExample();
// example.otherFunction();

// task 2
// function counter() {
//   var count = 0;
//   return function () {
//     count++;
//     return count;
//   };
// }
// const incrementCounter = counter();
// console.log(incrementCounter());
// console.log(incrementCounter());
// console.log(incrementCounter());
// console.log(incrementCounter());

// task 3
// function generateId() {
//   let id = 200;
//   return function () {
//     id++;
//     console.log(`The new id is ${id}`);
//   };
// }
// const generator = generateId();
// generator();
// generator();
// generator();
// generator();

// task 4
// function getUserName(username) {
//   name = username;
//   return function () {
//     console.log("your name is ", name);
//   };
// }
// const res = getUserName("krishna");
// res();

// task 5
// function createFunctionArray(size) {
//   const functionArray = [];

//   for (let i = 0; i < size; i++) {
//     functionArray[i] = (function (index) {
//       return function () {
//         console.log(index);
//       };
//     })(i);
//   }

//   return functionArray;
// }

// const functionArray = createFunctionArray(5);

// functionArray[0]();
// functionArray[1]();
// functionArray[2]();
// functionArray[3]();
// functionArray[4]();

// task 6
// function createItemManager() {
//   let items = []; // Private variable to store items

//   return {
//     addItem(item) {
//       items.push(item);
//       console.log(`Item added: ${item}`);
//     },
//     removeItem(item) {
//       const index = items.indexOf(item);
//       if (index !== -1) {
//         items.splice(index, 1);
//         console.log(`Item removed: ${item}`);
//       } else {
//         console.log(`Item not found: ${item}`);
//       }
//     },
//     listItems() {
//       console.log("Items:", items);
//     },
//   };
// }

// const itemManager = createItemManager();

// itemManager.addItem("Apple");
// itemManager.addItem("Banana");
// itemManager.listItems();
// itemManager.removeItem("Apple");
// itemManager.listItems();
// itemManager.removeItem("Cherry");

// task 7
// function memoize(fn) {
//   const cache = {};

//   return function (...args) {
//     const key = JSON.stringify(args);
//     if (cache[key]) {
//       console.log(`Fetching from cache for args: ${args}`);
//       return cache[key];
//     }
//     const result = fn(...args);
//     cache[key] = result;
//     return result;
//   };
// }

// function add(a, b) {
//   console.log(`Computing ${a} + ${b}`);
//   return a + b;
// }

// const memoizedAdd = memoize(add);

// console.log(memoizedAdd(2, 3)); // Computing
// console.log(memoizedAdd(2, 3)); // Fetching
// console.log(memoizedAdd(5, 10)); // Computing
// console.log(memoizedAdd(5, 10)); // fetching

// task 8
function memoize(fn) {
  const cache = {}; // Private cache to store results

  return function (...args) {
    const key = JSON.stringify(args); // Create a key based on the arguments
    if (cache[key]) {
      console.log(`Fetching from cache for args: ${args}`);
      return cache[key]; // Return cached result if available
    }
    const result = fn(...args); // Compute the result
    cache[key] = result; // Store the result in the cache
    return result;
  };
}

// Example usage with a factorial function
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  console.log(`Computing factorial of ${n}`);
  return n * factorial(n - 1);
}

const memoizedFactorial = memoize(factorial);

console.log(memoizedFactorial(5)); // Computing factorial of 5, 4, 3, 2, result: 120
console.log(memoizedFactorial(5)); // Fetching from cache for args: 5, result: 120
console.log(memoizedFactorial(6)); // Computing factorial of 6, result: 720
console.log(memoizedFactorial(6)); // Fetching from cache for args: 6, result: 720
console.log(memoizedFactorial(4)); // Fetching from cache for args: 4, result: 24

