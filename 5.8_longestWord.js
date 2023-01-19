const shortest = (str) => {
  str = str.split(" ");
  return str.reduce((acc, curr) => {
    if (curr.length > acc.length) {
      acc = curr;
    }
    return acc;
  });
};

// console.log(shortest("pizza hamburger bigamacaa mcdonals kfc"));
