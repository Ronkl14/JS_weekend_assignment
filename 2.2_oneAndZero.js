const BinaryToDec = (binary) =>
  binary.reduce(
    (acc, curr, idx) => acc + curr * 2 ** (binary.length - 1 - idx),
    0
  );

// Another way to convert binary arr to decimal is using ParseInt with base 2
const BinaryToDec2 = (binary) => parseInt(binary.join(""), 2);

// checks
// console.log(BinaryToDec([1, 0, 1, 1]));
// console.log(BinaryToDec([1, 0, 1, 0, 1, 0]));
// console.log(BinaryToDec([1, 1, 1, 1]));

// console.log(BinaryToDec2([1, 0, 1, 1]));
// console.log(BinaryToDec2([1, 0, 1, 0, 1, 0]));
// console.log(BinaryToDec2([1, 1, 1, 1]));
