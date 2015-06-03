
//Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a '...' ending.
function truncate(str, num) {
  // Clear out that junk in your trunk
  var strlength = str.length;
  var arrays = str.split("");
  var answer = "";
  var best = "";
  if (strlength > num) {
    for (var i = 0; i < (num-3); i++) {
      answer += arrays[i];
    }
    answer += "...";
  }
 else {
      answer = str;
    }



  return answer;
}

truncate('A-tisket a-tasket A green and yellow basket', 11);