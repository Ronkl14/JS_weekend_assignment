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

// console.log(nextSquare(69));
// console.log(nextSquare(121));
// console.log(nextSquare(144));
// console.log(nextSquare(13));
// console.log(nextSquare(625));
