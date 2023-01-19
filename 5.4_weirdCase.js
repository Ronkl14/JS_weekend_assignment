const toWeirdCase = (str) =>
  str
    .split("")
    .map((char, idx) =>
      idx % 2 === 0 ? char.toUpperCase() : char.toLowerCase()
    )
    .join("");

// console.log(toWeirdCase("hahahaha"));
// console.log(toWeirdCase('amarti lah lo lagaat'));
