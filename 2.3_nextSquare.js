const nextSquare = (num) => {
  if (Number.isInteger(Math.sqrt(num))) {
    let next = num + 1;
    while (!Number.isInteger(Math.sqrt(next))) {
      next += 1;
    }
    return next;
  } else {
    return -1;
  }
};

// another way
const nextSquare2 = (num) =>
  Number.isInteger(Math.sqrt(num)) ? (Math.sqrt(num) + 1) ** 2 : -1;

//checks
// console.log(nextSquare(69));
// console.log(nextSquare(121));
// console.log(nextSquare(144));
// console.log(nextSquare(13));
// console.log(nextSquare(625));
// console.log(nextSquare2(69));
// console.log(nextSquare2(121));
// console.log(nextSquare2(144));
// console.log(nextSquare2(13));
// console.log(nextSquare2(625));
