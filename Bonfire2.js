//Check if a string (first argument) ends with the given target string (second argument).

function end(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
  var i = str.length;
  var u = str.split(" ");
  var t = u.length;
  var y = str.split("");
  var x = y[i-1];
  var z = u[t-1];
if (x === target || z=== target) {
    return true;
}
else {
  return false;
}


}

end('He has to give me a new name', 'name');