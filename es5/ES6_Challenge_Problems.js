//Compress a string by creating a method that returns a compressed form the of the given string. 
//If the given string is longer after the compression is attempted, return the original string instead.
//Example: "aaabbcccc".stringCompression(); -> "a3b2c4" 
//Example: "a".stringCompression(); -> "a" would be returned, not "a1"

//Writing a traditional function declaration here is necessary
//In Babel 'this' is not attached to window and will transpile into undefined!
String.prototype.stringCompression = function() {

  let letters = {};
  let results = "";

  for (let i of this) {
    if (letters[i]) {
      letters[i]++;
    } else {
      letters[i] = 1;
    }
  }

  for (let key in letters) {
    results += key + letters[key];
  }

  return results.length < this.length ? results : this;
} 
;//Given two strings, implement a method that determines if the input string is a permutation of the other

//Writing a traditional function declaration here is necessary
//In Babel this is not attached to window and will transpile into undefined!
String.prototype.permutationCheck = function(str) {
  if (str.length !== this.length) {
    return false;
  }

  let characters = {};
  let letters = str.split('');

  for (let i of letters) {
    if (characters[i] === undefined) {
      characters[i] = 1;
    } else {
      characters[i]++;
    }
  }

  for (let j of this) {
    if (characters[j]) {
      characters[j]--;
      if (characters[j] === 0) {
        delete characters[j];
      }
    } else {
      return false;
    }
  } 

  return true;
} 
;//In this problem we want to check to see if two strings are rotations of each other
//You may only use one call to the given method .substring()

//Example: stringRotation("thomas", "omasth"); -> true
//Example: stringRotation("thomas", "smotha");-> false

let stringRotation = (str1, str2) => {
  if (str1.length !== str2.length) {
    return false;
  }
  //need to find where in the second string the original string starts
  //iterate over second string
    //if letter is equal to first letter of first string
      //compare it to first letter of first string
      //if letter equals first character of first string
       //move to next letter
  for (let i = 0; i < str2.length; i++) {

    if (str2[i] === str1[0]) {

    }
  }
}

;//Create a function to determine if a string has all unique characters

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