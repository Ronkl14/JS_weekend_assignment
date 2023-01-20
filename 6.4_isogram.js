const isIsogram = (str) => {
  str = str.toLowerCase();
  let counter = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === " ") {
      continue;
    } else if (i !== str.lastIndexOf(str[i])) {
      counter += 1;
      str = str.replaceAll(str[i], " ");
    } else {
      str.replace(str[i], " ");
    }
  }
  return counter === 0 ? true : false;
};

// console.log(isIsogram("aba"));
// console.log(isIsogram("abc"));
