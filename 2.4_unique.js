const findUnique = (arr) => {
  let uniq = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== uniq) {
      return arr[i];
    }
  }
};

// console.log(findUnique([1,1,1,2,1,1]));
