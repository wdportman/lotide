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

const assertArraysEqual = function(array1, array2) {
  const inspect = require('util').inspect;
  if (eqArrays(array1, array2) === true) {
    console.log(`✅ Yep, the two arrays are equal: ${inspect(array1)} === ${inspect(array2)}.`);
  } else {
    console.log(`🚫 No, the two arrays are not equal: ${inspect(array1)} !== ${inspect(array2)}.`);
  }
};

//Test cases:
assertArraysEqual([2, 2], [2, 2]);
assertArraysEqual([2, 2], [2, 3]);
assertArraysEqual([2], [2]);
assertArraysEqual([2], [3]);
assertArraysEqual([], []);