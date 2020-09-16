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
  if (eqArrays(array1, array2) === true) {
    console.log("✅ Yep, the two arrays are equal.");
  } else {
    console.log("🚫 No, the two arrays are not equal.");
  }
};

const letterPositions = function(input) {
  let output = {};
  input = input.toLowerCase();
  let lettersArray = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  for (let i = 0; i < input.length; i++) {
    if (lettersArray.includes(input[i])) {
      if (output[input[i]]) {
        output[input[i]].push(i);
      } else {
        output[input[i]] = [i];
      }
    }
  }
  return output;
};

assertArraysEqual(letterPositions("hello")["h"],[0]);
assertArraysEqual(letterPositions("hello")["e"],[1]);
assertArraysEqual(letterPositions("hello")["l"],[2,3]);
assertArraysEqual(letterPositions("hello")["o"],[4]);