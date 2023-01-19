const tribonacci = (n) => {
  if (n === 0) {
    return [];
  }
  let tribonacciArr = [0, 0, 1];
  for (let i = 2; i <= n - 2; i++) {
    tribonacciArr.push(
      tribonacciArr[i] + tribonacciArr[i - 1] + tribonacciArr[i - 2]
    );
  }
  return tribonacciArr;
};

// console.log(tribonacci(10));
// console.log(tribonacci(0));
