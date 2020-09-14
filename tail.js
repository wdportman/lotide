const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😍😍😍 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🤬🤬🤬 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = function(inputArray) {
  return inputArray.slice(1,inputArray.length);
};

const result = tail([1,2,3]);

assertEqual(result.length,2);

const numbers = [1,2,3];
tail(numbers);
assertEqual(numbers.length,3);