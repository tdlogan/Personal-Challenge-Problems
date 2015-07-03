//Compress a string by creating a method that returns a compressed form the of the given string. 
//If the given string is longer after the compression is attempted, return the original string instead.
//Example: "aaabbcccc".stringCompression(); -> "a3b2c4" 
//Example: "a".stringCompression(); -> "a" would be returned, not "a1"

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
}; 
