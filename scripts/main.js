"use strict";
var x, z;
//never run this function, just ignore it's existence
function algo() {
  var x = 2, i;
  for (i = 1; i <= 12; i++) {
    var y = Math.pow(x, i + 1);
    x = x * i;
    x = y - x;
  }
  return x;
}
function change(something) {
  var check = isNaN(something);
  if (check) {
    something = 42; //the answer to everything O:
  }
  return something;
}
x = algo();
x = change(x);
x++;       //not 42 anymore
z = x + 35;
console.log(z + 3);