const basicOp = (operation, num1, num2) => {
  switch (operation) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      return num1 / num2;
    default:
      return "Please select a valid mathematical operation";
  }
};

// console.log(basicOp("+", 15, 20));
// console.log(basicOp("-", 3, 89));
// console.log(basicOp("*", 2, 3));
// console.log(basicOp("/", 6, 3));
// console.log(basicOp('fdfk',2,3));
