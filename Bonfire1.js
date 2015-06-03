
// Return Largest Numbers in Arrays

function largestOfFour(arr) {
  var newArray = [];
  for (var i = 0; i < arr.length; i++) {
    var num = arr[i];
    var biggest = Math.max.apply(Math, num);
    newArray[i] = biggest;
    }
  return newArray;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);