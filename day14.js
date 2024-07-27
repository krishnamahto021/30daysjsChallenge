class Person {
  name = "Krishna";
  age = 21;
  firstName = "krishna";
  lastName = "mahato";
  greet() {
    return `hey ${this.name}`;
  }
  updateAge(newAge) {
    this.age = newAge;
    console.log(`updated age is ${this.age}`);
  }
  static staticMethod() {
    return `Hello from static method`;
  }
  getter() {
    return `${this.firstName} ${this.lastName}`;
  }
  setter(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    console.log(`I am new person of name ${this.firstName} ${this.lastName}`);
  }
}

// task 1
// const p1 = new Person();
// console.log(p1.greet());

// task 2
// const p2 = new Person();
// p2.updateAge(22);

// task 3
class Student extends Person {
  static studentCount = 0;
  studentId = "1";
  constructor(name, age, studentId = "1") {
    super(name, age);
    this.studentId = studentId;
    Student.incrementStudentCount();
  }
  getStudentId() {
    return `${this.studentId}`;
  }
  greet() {
    return `Hello from student`;
  }
  static incrementStudentCount() {
    Student.studentCount++;
  }
  static getStudentCount() {
    return Student.studentCount;
  }
}
const s1 = new Student();
// console.log(s1.getStudentId());

// task 4
const s2 = new Student();
// console.log(s2.greet());

// task 5
// console.log(Person.staticMethod());

// task 6
// console.log(Student.getStudentCount());

// task 7
// console.log(s1.getter());

// task 8
// const p2 = new Person();
// p2.setter("k", "m");

// task 9
class Account {
  // # is used to declare the private values
  #amount = 0;
  deposit(amt) {
    this.#amount += amt;
    console.log("New amount is", this.#amount);
  }
  withdraw(amt) {
    this.#amount -= amt;
    console.log("New amount is", this.#amount);
  }
}
const acc = new Account();

// task 10
acc.deposit(500);
acc.withdraw(200);
