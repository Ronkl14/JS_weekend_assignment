const accum = (str) => {
  let mumble = [];
  for (let i = 0; i < str.length; i++) {
    mumble.push(str[i].toUpperCase() + str[i].toLowerCase().repeat(i));
  }
  return mumble.join('-');
};

// console.log(accum("abcdwa"));
// console.log(accum('RqaEzty'));
