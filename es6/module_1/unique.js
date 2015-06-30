//Create a function to determine if a string has all unique characters

var unique = function(str) {
  let characters = {};

  for (let i of str) {
    if (characters[i]) {
      return false;
    } else {
      characters[i] = true;
    }
  }
  return true;
}

//EXTRA CREDIT: Implement the unique problem without creating additioanl data structures.

var unique_extra = function(str) {

}