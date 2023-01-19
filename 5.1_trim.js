const trim = (str) => {
  str = str.split("");
  str.pop();
  str.shift();
  return str.join("");
};
