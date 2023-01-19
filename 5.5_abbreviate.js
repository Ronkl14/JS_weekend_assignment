const abbreviate = (str) => {
  str = str.split(" ");
  return `${str[0][0].toUpperCase()}.${str[1][0].toUpperCase()}`;
};

// console.log(abbreviate("moshik rot"));
// console.log(abbreviate("eyal shani"));
