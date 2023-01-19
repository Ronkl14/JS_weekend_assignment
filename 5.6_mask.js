const maskify = (str) =>
  str.length >= 4
    ? "#".repeat(str.length - 4) + str.split("").slice(-4).join("")
    : str;

console.log(maskify("23"));
console.log(maskify("afarsemon"));
