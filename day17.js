// // task 1
// class Node {
//   constructor(data) {
//     this.data = data;
//     this.next = null;
//   }
// }
// // task2
// class LinkedList {
//   constructor() {
//     this.head = null;
//   }
//   addToEnd(data) {
//     const newNode = new Node(data);
//     if (this.head === null) {
//       this.head = newNode;
//       return;
//     }
//     let current = this.head;
//     while (current.next !== null) {
//       current = current.next;
//     }
//     current.next = newNode;
//   }
//   removeFromEnd() {
//     // no nodes
//     if (this.head.next === null) {
//       return null;
//     }
//     // 1 node
//     if (this.head === null) {
//       return null;
//     }
//     let current = this.head;
//     while (current.next.next !== null) {
//       current = current.next;
//     }
//     current.next = null;
//     return this.head;
//   }
//   display() {
//     if (this.head === null) {
//       console.log("nothing in the list");
//       return;
//     }
//     let current = this.head;
//     let result = "";
//     while (current !== null) {
//       result += current.data + " -> ";
//       current = current.next;
//     }
//     console.log(result);
//   }
// }
// const list = new LinkedList();
// list.addToEnd(4);
// list.addToEnd(5);
// list.addToEnd(6);
// list.display();
// list.removeFromEnd();
// list.display();

// task 3
class Stack {
  array = [];
  constructor(data) {
    this.array.push(data);
  }
  push(newData) {
    this.array.push(newData);
  }
  pop() {
    this.array.pop(this.array.length - 1);
  }
  peek() {
    console.log(this.array[this.array.length - 1]);
  }
  isEmpty() {
    if (this.array.length === 0) {
      return true;
    } else {
      return false;
    }
  }
}
// const stack = new Stack(5);
// stack.push(6);
// stack.push(7);
// stack.peek();
// stack.push(8);
// stack.push(9);
// stack.pop();
// stack.peek();

// task 4
// function reverseString(str) {
//   if (str.length === 0) {
//     return;
//   }
//   let stack = new Stack(str[0]);
//   for (let i = 1; i < str.length; i++) {
//     stack.push(str[i]);
//   }
//   let reversedString = "";
//   while (!stack.isEmpty()) {
//     let res = stack.peek();
//     reverseString += res;
//     stack.pop();
//   }
//   return reversedString;
// }

// console.log(reverseString("abcd"));

// // task 5
// class Queue {
//   constructor() {
//     this.array = [];
//   }
//   enqueue(ele) {
//     this.array.push(ele);
//   }
//   dequeue() {
//     this.array.shift();
//   }
//   front() {
//     return this.array[0];
//   }
// }
// const qExample = new Queue();
// qExample.enqueue(7);
// qExample.enqueue(8);
// qExample.enqueue(9);
// console.log(qExample.front());
// qExample.dequeue();
// console.log(qExample.front());

// task 7 and 8 skip
