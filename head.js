const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😍😍😍 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🤬🤬🤬 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const head = function(inputArray) {
  return inputArray[0];
}

assertEqual(head([1,2,3]),1);
assertEqual(head(["a","b","c"]),"a");
assertEqual(head([1]),1);
assertEqual(head([]),undefined);
