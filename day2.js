// activity 1
function calculate(num1, num2, operand) {
  const intVal1 = parseFloat(num1);
  const intval2 = parseFloat(num2);
  switch (operand) {
    case "+":
      return intVal1 + intval2;
    case "-":
      return intVal1 - intval2;
    case "*":
      return intVal1 * intval2;
    case "/":
      if (intval2 === 0) {
        return "Diviisble not possible";
      } else {
        return intVal1 / intval2;
      }
    case "%":
      if (intval2 === 0) {
        return "Diviisble not possible";
      } else {
        return intVal1 % intval2;
      }
    default:
      return "Select proper operand";
  }
}

// console.log(calculate(3, 4, "*"));

// acitivty 2
let i = 1;
console.log((i -= 1)); // i = i+1

function check(num1, num2) {
  const intVal1 = parseFloat(num1);
  const intval2 = parseFloat(num2);
  if (intVal1 > intval2) {
    return `${intVal1} is greater`;
  } else if (intVal1 < intval2) {
    return `${intval2} is greater`;
  }
}


// activity 3
function logicalOperator(num1, num2) {
  const intVal1 = parseFloat(num1);
  const intval2 = parseFloat(num2);
  if (intVal1 === 0 && intval2 === 0) {
    return "You have enterd both number as 0";
  }else if(intVal1 === 0 || intval2 === 0){
     return "You have enterd one number as 0";
  }

}
