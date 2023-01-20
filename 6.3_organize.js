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
