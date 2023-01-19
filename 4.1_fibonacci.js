const nOfFibonacci = (n) => {
  let fibonacciArr = [0, 1];
  for (let i = 1; i <= n - 2; i++) {
    fibonacciArr.push(fibonacciArr[i] + fibonacciArr[i - 1]);
  }
  return fibonacciArr[fibonacciArr.length - 1];
};

// console.log(nOfFibonacci(5));
// console.log(nOfFibonacci(8));
