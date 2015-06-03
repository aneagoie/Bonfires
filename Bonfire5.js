// Return true if the string in the first element of the array contains the letters of the string in the second element of the array.

function mutation(arr) {
  var first = arr[0].split("");
  var second = arr[1].split("");
  var answer = false;
  for (var e = 0; e < second.length; e++) {
    answer = false;
    for (var i = 0; i < first.length; i++) {
      if (first[i] === second[e]) {
        answer = true;
      }
    }
  }
  return answer;
}

mutation(['hello', 'hey']);