const repeat_str = (count, str) => {
  let strCopy = str;
  for (let i = 1; i < count; i++) {
    str += strCopy;
  }
  return str;
};

// console.log(repeat_str(3, "Yossi shitrit"));
