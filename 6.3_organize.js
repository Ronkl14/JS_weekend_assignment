const organize = (str1, str2) => {
  let strCombine = str1 + str2;
  let strNoDups = [];

  for (let i = 0; i < strCombine.length; i++) {
    if (strCombine[i] === " ") {
      continue;
    }
    strNoDups += strCombine[i];
    strCombine = strCombine.replaceAll(strCombine[i], " ");
  }

  return strNoDups.split("").sort().join("");
};

const organize2 = (str1, str2) =>
  Array.from(new Set((str1 + str2).split("")))
    .sort()
    .join("");

console.log(organize2("hgbdcba", "bcda"));
