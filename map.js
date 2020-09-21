//Map function:

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

//eqArrays:
const eqArrays = function(array1, array2) {
  let output = "";
  if (array1.length !== array2.length) {
    output = false;
  } else if (array1.length === 0) {
    output = true;
  } else {
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        output = false;
      } else {
        output = true;
      }
    }
  }
  return output;
};

//assertArraysEqual:
const assertArraysEqual = function(array1, array2) {
  const inspect = require('util').inspect;
  if (eqArrays(array1, array2) === true) {
    console.log(`✅ Yep, the two arrays are equal: ${inspect(array1)} === ${inspect(array2)}.`);
  } else {
    console.log(`🚫 No, the two arrays are not equal: ${inspect(array1)} !== ${inspect(array2)}.`);
  }
};

//Test cases:
const letterArray = ["abc", "def", "ghi"];
assertArraysEqual(map(letterArray, letterArray => letterArray[0]), ["a", "d", "g"]);
assertArraysEqual(map(["abc", "def", "ghi"], array1 => array1[0]), ["a", "d", "g"]);
assertArraysEqual(map([1, 2, 3], x => x * 2), [2, 4, 6]);
assertArraysEqual(map([1, 2, 3], item => item + 2), [3, 4, 5]);

module.exports = map;