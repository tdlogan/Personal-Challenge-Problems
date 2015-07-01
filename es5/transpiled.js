//Given two strings, implement a method that determines if the input string is a permutation of the other

//Writing a traditional function declaration here is necessary
//In Babel this is not attached to window and will transpile into undefined!
'use strict';

String.prototype.permutationCheck = function (str) {}; //Create a function to determine if a string has all unique characters

var unique = function unique(str) {
  //Store of unique characters
  var characters = {};

  //Split the string into an array in order to avoid problems with unicode characters that have multiple indices
  var letters = str.split('');

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = letters[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var i = _step.value;

      if (characters[i]) {
        return false;
      } else {
        characters[i] = true;
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

  return true;
};

//EXTRA CREDIT: Implement the unique problem without creating additioanl data structures

var unique_extra = function unique_extra(str) {};
