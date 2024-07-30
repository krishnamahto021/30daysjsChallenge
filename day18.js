// task 1
// function bubbleSort(arr) {
//   let n = arr.length;
//   let swapped;

//   do {
//     swapped = false;
//     for (let i = 0; i < n - 1; i++) {
//       if (arr[i] > arr[i + 1]) {
//         let temp = arr[i];
//         arr[i] = arr[i + 1];
//         arr[i + 1] = temp;
//         swapped = true;
//       }
//     }
//     n--;
//   } while (swapped);

//   return arr;
// }

// let array = [64, 34, 25, 12, 22, 11, 90];
// console.log("Sorted array: " + bubbleSort(array));

// task 2
// function selectionSort(arr) {
//   let n = arr.length;

//   for (let i = 0; i < n - 1; i++) {
//     let minIndex = i;
//     for (let j = i + 1; j < n; j++) {
//       if (arr[j] < arr[minIndex]) {
//         minIndex = j;
//       }
//     }
//     if (minIndex !== i) {
//       let temp = arr[i];
//       arr[i] = arr[minIndex];
//       arr[minIndex] = temp;
//     }
//   }

//   return arr;
// }
// let array = [64, 25, 12, 22, 11];
// console.log("Sorted array: " + selectionSort(array));

// task 3
// function quickSort(arr) {
//   if (arr.length <= 1) {
//     return arr;
//   }
//   const pivot = arr[arr.length - 1];
//   const left = [];
//   const right = [];
//   for (let i = 0; i < arr.length - 1; i++) {
//     if (arr[i] < pivot) {
//       left.push(arr[i]);
//     } else {
//       right.push(arr[i]);
//     }
//   }
//   return [...quickSort(left), pivot, ...quickSort(right)];
// }

// let array = [64, 25, 12, 22, 11];
// console.log("Sorted array: " + quickSort(array));

// task 4
// function linearSearch(arr, item) {
//   if (arr.length === 0) {
//     return -1;
//   }
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === item) {
//       return i;
//     }
//   }
//   return -1;
// }
// let array = [64, 25, 12, 22, 11];
// console.log("Item found at index " + linearSearch(array,22));

// task 5
// function binarySearch(arr, item, start = 0, end = arr.length - 1) {
//   if (arr.length === 0) {
//     return -1;
//   }
//   if (start > end) {
//     return -1;
//   }
//   let mid = Math.ceil((start + end) / 2);
//   if (arr[mid] === item) {
//     return mid;
//   } else if (arr[mid] < item) {
//     return binarySearch(arr, item, mid + 1, end);
//   } else {
//     return binarySearch(arr, item, start, mid - 1);
//   }
// }
// let array = [6, 25, 102, 202];
// console.log("Item found at index " + binarySearch(array, 105));

// task 8
// function rotateArray(arr, k) {
//   const n = arr.length;
//   k = k % n;

//   function reverse(array, start, end) {
//     while (start < end) {
//       [array[start], array[end]] = [array[end], array[start]];
//       start++;
//       end--;
//     }
//   }

//   // Reverse the entire array
//   reverse(arr, 0, n - 1);
//   // Reverse the first k elements
//   reverse(arr, 0, k - 1);
//   // Reverse the remaining elements
//   reverse(arr, k, n - 1);

//   return arr;
// }

// let array = [1, 2, 3, 4, 5, 6, 7];
// let k = 3;
// console.log("Rotated array: " + rotateArray(array, k));

// task 9
function mergeSortedArrays(arr1, arr2) {
    let mergedArray = [];
    let i = 0;
    let j = 0;

    // Traverse both arrays and compare elements
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            mergedArray.push(arr1[i]);
            i++;
        } else {
            mergedArray.push(arr2[j]);
            j++;
        }
    }

    // Add remaining elements of arr1, if any
    while (i < arr1.length) {
        mergedArray.push(arr1[i]);
        i++;
    }

    // Add remaining elements of arr2, if any
    while (j < arr2.length) {
        mergedArray.push(arr2[j]);
        j++;
    }

    return mergedArray;
}

let array1 = [1, 3, 5, 7];
let array2 = [2, 4, 6, 8];
console.log("Merged array: " + mergeSortedArrays(array1, array2));
