//Compress a string by creating a method that returns a compressed form the of the given string.
//If the given string is longer after the compression is attempted, return the original string instead.
//Example: "aaabbcccc".stringCompression(); -> "a3b2c4"
//Example: "a".stringCompression(); -> "a" would be returned, not "a1"

//Writing a traditional function declaration here is necessary
//In Babel 'this' is not attached to window and will transpile into undefined!
'use strict';

String.prototype.stringCompression = function () {

  var letters = {};
  var results = '';

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = this[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var i = _step.value;

      if (letters[i]) {
        letters[i]++;
      } else {
        letters[i] = 1;
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator['return']) {
        _iterator['return']();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  for (var key in letters) {
    results += key + letters[key];
  }

  return results.length < this.length ? results : this;
}; //Given two strings, implement a method that determines if the input string is a permutation of the other

//Writing a traditional function declaration here is necessary
//In Babel this is not attached to window and will transpile into undefined!
String.prototype.permutationCheck = function (str) {
  if (str.length !== this.length) {
    return false;
  }

  var characters = {};
  var letters = str.split('');

  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = letters[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var i = _step2.value;

      if (characters[i] === undefined) {
        characters[i] = 1;
      } else {
        characters[i]++;
      }
    }
  } catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion2 && _iterator2['return']) {
        _iterator2['return']();
      }
    } finally {
      if (_didIteratorError2) {
        throw _iteratorError2;
      }
    }
  }

  var _iteratorNormalCompletion3 = true;
  var _didIteratorError3 = false;
  var _iteratorError3 = undefined;

  try {
    for (var _iterator3 = this[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
      var j = _step3.value;

      if (characters[j]) {
        characters[j]--;
        if (characters[j] === 0) {
          delete characters[j];
        }
      } else {
        return false;
      }
    }
  } catch (err) {
    _didIteratorError3 = true;
    _iteratorError3 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion3 && _iterator3['return']) {
        _iterator3['return']();
      }
    } finally {
      if (_didIteratorError3) {
        throw _iteratorError3;
      }
    }
  }

  return true;
}; //In this problem we want to check to see if two strings are rotations of each other
//You may only use one call to the given method .substring()

//Example: stringRotation("thomas", "omasth"); -> true
//Example: stringRotation("thomas", "smotha");-> false

var stringRotation = function stringRotation(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  //need to find where in the second string the original string starts
  //iterate over second string
  //if letter is equal to first letter of first string
  //compare it to first letter of first string
  //if letter equals first character of first string
  //move to next letter
  for (var i = 0; i < str2.length; i++) {

    if (str2[i] === str1[0]) {}
  }
}; //Create a function to determine if a string has all unique characters

var unique = function unique(str) {
  //Store of unique characters
  var characters = {};

  //Split the string into an array in order to avoid problems with unicode characters that have multiple indices
  var letters = str.split('');

  var _iteratorNormalCompletion4 = true;
  var _didIteratorError4 = false;
  var _iteratorError4 = undefined;

  try {
    for (var _iterator4 = letters[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
      var i = _step4.value;

      if (characters[i]) {
        return false;
      } else {
        characters[i] = true;
      }
    }
  } catch (err) {
    _didIteratorError4 = true;
    _iteratorError4 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion4 && _iterator4['return']) {
        _iterator4['return']();
      }
    } finally {
      if (_didIteratorError4) {
        throw _iteratorError4;
      }
    }
  }

  return true;
};

//EXTRA CREDIT: Implement the unique problem without creating additioanl data structures

var unique_extra = function unique_extra(str) {};
