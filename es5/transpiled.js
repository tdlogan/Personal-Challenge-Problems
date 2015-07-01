//Given two strings, implement a method that determines if the input string is a permutation of the other

//Writing a traditional function declaration here is necessary
//In Babel this is not attached to window and will transpile into undefined!
'use strict';

String.prototype.permutationCheck = function (str) {

  if (this.length !== str.length) {
    return false;
  }

  var characters = {};
  var letters = str.split('');

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = letters[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var i = _step.value;

      if (!characters[i]) {
        characters[i] = 1;
      } else {
        characters[i]++;
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

  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = letters[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var j = _step2.value;

      if (characters[j] === undefined) {
        return false;
      } else {
        if (characters[j] === 0) {
          delete characters[j];
        }
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

  return true;
}; //Create a function to determine if a string has all unique characters

var unique = function unique(str) {
  //Store of unique characters
  var characters = {};

  //Split the string into an array in order to avoid problems with unicode characters that have multiple indices
  var letters = str.split('');

  var _iteratorNormalCompletion3 = true;
  var _didIteratorError3 = false;
  var _iteratorError3 = undefined;

  try {
    for (var _iterator3 = letters[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
      var i = _step3.value;

      if (characters[i]) {
        return false;
      } else {
        characters[i] = true;
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
};

//EXTRA CREDIT: Implement the unique problem without creating additioanl data structures

var unique_extra = function unique_extra(str) {};
