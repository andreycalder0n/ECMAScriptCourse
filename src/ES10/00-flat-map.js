const array = [ 1, 2, 3, 4, 4, 3, [ 2, 3, 3, [3, 2, 4, 5] , 4, 5], 4, 5, 6];
console.log(array.flat(3));

const array2 = [ 2, 3, 2, 4, 5, 3];
console.log(array2.flatMap(v => [v, v * 2]));