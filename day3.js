// activity 1
function checkNum(a) {
  if (a > 0) {
    console.log("+ve");
  } else if (a < 0) {
    console.log("-ve");
  } else {
    console.log("0");
  }
}

checkNum(2);

function checkAge(age) {
  if (age >= 18) {
    console.log(`Elligible`);
  } else {
    console.log("not elligible");
  }
}
checkAge(30);

// activity 2
function largest(a, b, c) {
  if (a > b) {
    if (a > c) {
      console.log("a is largest", a);
    } else {
      console.log("c is largest", c);
    }
  } else if (a > c) {
    if (a > b) {
      console.log("a is largest", a);
    } else {
      console.log("b is largest", b);
    }
  } else {
    if (b > c) {
      console.log("b is largest");
    } else {
      console.log("c is largest");
    }
  }
}
largest(100, 200, 300);

// actvitiy 3
function checkDay(num) {
  switch (num) {
    case 1:
      return "sunday";
    case 2:
      return "monday";
    case 3:
      return "tuesday";
    case 4:
      return "wednesday";
    case 5:
      return "Thursday";
    case 6:
      return "Friday";
    case 7:
      return "Saturday";
    default:
      return "not valid number enter b/w 1-7 ";
  }
}
console.log(checkDay(5));
function giveGrade(num) {
  switch (num) {
    case num < 20:
      return "F";
    case num < 40:
      return "D";
    case num < 60:
      return "C";
    case num < 80:
      return "B";
    case num <= 100:
      return "A";
    default:
      return "not valid number ";
  }
}
giveGrade(50);

//actvity 4
function checkEven(num) {
  const res = num % 2 === 0 ? "Even" : "odd";
  console.log(res);
}
checkEven(69);

//activity 5
function checkLeap(year) {
  if (year % 4 === 0 && year % 100 !== 0) {
    console.log("a leap year");
  } else if (year % 100 === 0 && year % 400 === 0) {
    console.log("a leap year");
  } else {
    console.log("not a leap year");
  }
}
checkLeap(2021);


