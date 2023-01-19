const shortest = (str) => {
  str = str.split(" ");
  return str.reduce((acc, curr) => {
    if (curr.length < acc) {
      acc = curr.length;
    }
    return acc;
  }, str[0].length);
};

// console.log(shortest("pizza hamburger bigmaac mcdonals kfc"));
