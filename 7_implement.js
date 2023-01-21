const filterAlt = (arr, callbackFn) => {
  result = [];
  for (let i = 0; i < arr.length; i++) {
    if (callbackFn(arr[i])) {
      result.push(arr[i]);
    }
  }
  return result;
};

console.log(filterAlt([1, 2, 3, 4, 5, 6, 7, 8], (x) => x > 3));

const forEachAlt = (arr, callbackFn) => {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = callbackFn(arr[i]);
  }
  return arr;
};

console.log(forEachAlt([1, 3, 4, 5], (x) => x * 3));

const mapAlt = (arr, callbackFn) => {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(callbackFn(arr[i]));
  }
  return result;
};

console.log(mapAlt([1, 2, 3, 4, 5, 6], (x) => x * 3));

let arr1 = [1, 2, 3, 4, 5];
forEachAlt(arr1, (x) => x * 3);
console.log(arr1);
let arr2 = [1, 2, 3, 4, 5];
mapAlt(arr2, (x) => x * 3);
console.log(arr2);