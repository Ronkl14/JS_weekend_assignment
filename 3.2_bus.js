const movingBus = (arr) => {
    let peopleOnBus = 0;
    for (let i = 0 ; i < arr.length ; i++) {
        peopleOnBus = peopleOnBus + arr[i][0] - arr[i][1];
    }
    return peopleOnBus >= 0 ? peopleOnBus : 0;
};

// const arrBus = [
//   [20, 0],
//   [6, 7],
//   [1, 3],
//   [5,8],
//   [0, 12]
// ];

// console.log(movingBus(arrBus));