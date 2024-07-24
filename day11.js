// task 1
// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("hi");
//   }, 2000);
// });

// promise.then((res) => console.log(res));

// task 2
// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject("hi");
//   }, 2000);
// });

// promise.then((res) => console.log(res)).catch((err) => console.error(err));

// task 3
// const promise1 = new Promise((resolve, reject) => {
//   resolve("Fetching of data");
// });
// const promise2 = new Promise((resolve, reject) => {
//   resolve("Fetching data again");
// });
// const promise3 = new Promise((resolve, reject) => {
//   resolve("finally fetching data");
// });

// promise1.then((res) => {
//   console.log(res);
//   promise2.then((res) => {
//     console.log(res);
//     promise3.then((res) => {
//       console.log(res);
//     });
//   });
// });

// task 4
// async function demo() {
//   const res = await new Promise((resolve, reject) => {
//     resolve("follow ezcodin");
//   });
//   console.log(res);
// }
// demo();

// task 5
// async function demo() {
//   try {
//     await new Promise((resolve, reject) => {
//       reject("follow ezcodin");
//     });
//   } catch (error) {
//     console.error(error);
//   }
// }
// demo();

// task 6
// fetch("https://dummyjson.com/todos")
//   .then((res) => res.json())
//   .then(console.log);

// task 7
// async function fetchTodos() {
//   const res = await fetch("https://dummyjson.com/todos");
//   const data = await res.json();
//   console.log(data);
// }
// fetchTodos();

// task 8

// const resolvedPromisesArray = Promise.all([promise1, promise2, promise3]);
// resolvedPromisesArray.then((res) => {
//   console.log(res);
// });

// task 9

const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Fetching of data"), 1000);
});
const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Fetching data again"), 2000);
});
const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("finally fetching data"), 3000);
});

const firstResolvedPromise = Promise.race([promise1, promise2, promise3]);

firstResolvedPromise
  .then((result) => {
    console.log(result); 
  })
  .catch((error) => {
    console.error(error);
  });
