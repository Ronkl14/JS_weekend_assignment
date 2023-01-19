const toCamelCase = (str) => {
  str = str.split("");
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "-" || str[i] === "_") {
      str[i] = "";
      str[i + 1] = str[i + 1].toUpperCase();
    }
  }
  return str.join("");
};

// console.log(toCamelCase("so-long-and-thanks-for-the-fish"));
// console.log(toCamelCase('asaf_granit-eyal_shani'));
