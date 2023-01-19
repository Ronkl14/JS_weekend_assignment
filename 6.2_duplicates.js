const countDups = (str) => {
  str = str.toLowerCase();
  let counter = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === " ") {
      continue;
    } else if (i !== str.lastIndexOf(str[i])) {
      counter += 1;
      str = str.replaceAll(str[i], " ");
      console.log(str);
    } else {
      str.replace(str[i], " ");
    }
  }
  return counter;
};

// console.log(countDups("invisibilities"));
// console.log(countDups("acdc11"));
// console.log(countDups("invisibility"));
// console.log(countDups("disabled"));
