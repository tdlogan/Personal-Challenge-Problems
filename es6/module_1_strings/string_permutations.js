//Given two strings, implement a method that determines if the input string is a permutation of the other

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
