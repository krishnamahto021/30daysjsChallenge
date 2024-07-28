// task 1
// function factorial(num) {
//   if (num === 0) {
//     return 1;
//   }
//   return num * factorial(num - 1);
// }
// console.log(factorial(4));

// task 2
// function fibonaci(num) {
//   if (num === 1 || num === 2) {
//     return 1;
//   }
//   return fibonaci(num - 1) + fibonaci(num - 2);
// }
// console.log(fibonaci(7));

// task 3
// function sumOfArray(arr) {
//   if (arr.length === 0) {
//     return 0;
//   }
//   const subArray = arr.slice(1, arr.length);
//   return arr[0] + sumOfArray(subArray);
// }
// const array = [-1, 2, -3, 4, -5];
// console.log(sumOfArray(array));

// task 4
// function getMaxOfArray(arr) {
//   if (arr.length === 1) {
//     return arr[0];
//   }
//   const maxOfRemaining = getMaxOfArray(arr.slice(1));
//   return arr[0] > maxOfRemaining ? arr[0] : maxOfRemaining;
// }
// console.log(getMaxOfArray(array));

// task 5
// function reverseString(str) {
//   if (str.length === 1) {
//     return str;
//   }
//   return reverseString(str.slice(1)) + str[0];
// }
// const string = "abcgadgahadhgas";
// console.log(reverseString(string));

// task 6
// function checkPalindrome(str) {
//   if (str.length === 0 || str.length === 1) {
//     return true;
//   }
//   if (str[0] === str[str.length - 1]) {
//     return checkPalindrome(str.slice(1, str.length - 1));
//   }
//   return false;
// }
// const string = "abcdasds";
// const string1 = "pannap"
// console.log(checkPalindrome(string1));

// task 7
// function binarySearch(arr, item, start = 0, end = arr.length - 1) {
//   if (start > end) {
//     return -1; // indicating no item found
//   }

//   const midIndex = Math.floor((start + end) / 2);

//   if (arr[midIndex] === item) {
//     return midIndex;
//   } else if (arr[midIndex] < item) {
//     return binarySearch(arr, item, midIndex + 1, end);
//   } else {
//     return binarySearch(arr, item, start, midIndex - 1);
//   }
// }

// const arr = [1, 2, 3, 4, 5];
// console.log(binarySearch(arr, 6));
// console.log(binarySearch(arr, 5));

// task 8
// function countOccurrences(arr, num) {
//   if (arr.length === 0) {
//     return 0;
//   }
//   if (arr[0] === num) {
//     return 1 + countOccurrences(arr.slice(1), num);
//   }
//   return countOccurrences(arr.slice(1), num);
// }

// const arr = [1, 2, 3, 4,4,5, 5];
// console.log(countOccurrences(arr, 7));


// task 9
// task 10