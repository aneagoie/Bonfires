// Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a multidimensional array.


function chunk(arr, size) {
  // Break it up.
  var newArr = [];
  var store = [];
  var best = 0;
  var x = 0;
  var stuff = arr.length;
  for (var i = 0; i<stuff; i++) {
    store[x] = arr[i];
    x ++;
   if ((i+1) % size === 0 ) {
     newArr[best] = store;
     store =[];
     x = 0;
     best ++ ;
    }
    else if (i === (stuff-1)) {
      newArr[best] = store;
    }

  }
  return newArr;

}

chunk([0, 1, 2, 3, 4, 5], 4);