//Create a function to determine if a string has all unique characters

let unique = (str) => {
  //Store of unique characters
  let characters = {};

  //Split the string into an array in order to avoid problems with unicode characters that have multiple indices
  let letters = str.split('');

  for (let i of letters) {
    if (characters[i]) {
      return false;
    } else {
      characters[i] = true;
    }
  }
  return true;
}

//EXTRA CREDIT: Implement the unique problem without creating additioanl data structures

let unique_extra = (str) => {

}
