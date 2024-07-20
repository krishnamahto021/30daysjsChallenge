// // task 1
const book = {
  title: "No rules rules",
  author: "Reed hastings",
  year: "2020",
  getTitle() {
    return this.title;
  },
  updateYear(newYear) {
    this.year = newYear;
  },
};
// console.log(book);

// // task 2
// // console.log(
// //   `The book ${book.title} is written by ${book.author} in the year ${book.year}`
// // );

// // task 3
// console.log(book.getTitle());

// task 4
// book.updateYear(2021);
// console.log(book);

// task 5
const library = {
  name: "open src library",
  books: [book, book],
};
// console.log(library);

// task 6
// console.log(library.name);

// task 7 already done in task 3

// task 8
// for(keys in book){
//     console.log(keys);
// }

// task 9
// console.log(Object.keys(book));
// console.log(Object.values(book));
