const eqArrays = require('./eqArrays');

const assertArraysEqual = function(array1, array2) {
  const inspect = require('util').inspect;
  if (eqArrays(array1, array2) === true) {
    console.log(`✅ Yep, the two arrays are equal: ${inspect(array1)} === ${inspect(array2)}.`);
  } else {
    console.log(`🚫 No, the two arrays are not equal: ${inspect(array1)} !== ${inspect(array2)}.`);
  }
};

module.exports = assertArraysEqual;