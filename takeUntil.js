//takeUntil function:
const takeUntil = function(inputArray, callback) {
  let output = [];
  for (let i = 0; i < inputArray.length; i++) {
    if (!callback(inputArray[i])) {
      output.push(inputArray[i]);
    } else {
      return output;
    }
  }
  return output;
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
assertArraysEqual(takeUntil([1, 2, 5, 7, 2, -1, 2, 4, 5], x => x < 0), [ 1, 2, 5, 7, 2 ]);

assertArraysEqual(takeUntil(["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"], x => x === ','), [ 'I\'ve', 'been', 'to', 'Hollywood' ]);

assertArraysEqual(takeUntil([1,2,3,4,5],x => x > 3),[1,2,3]);

assertArraysEqual(takeUntil(["a","ab","abc"],x => x.length >= 2),["a"]);

module.exports = takeUntil;