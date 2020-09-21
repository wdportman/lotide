const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  } else if (array1.length === 0) {
    return true;
  } else {
    for (let i = 0; i < array1.length; i++) {
      if (Array.isArray(array1[i])) {
        return eqArrays(array1[i],array2[i]);
      } else if (array1[i] !== array2[i]) {
        return false;
      }
    }
  }
  return true;
};

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🚫 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// TEST CODE
assertEqual(eqArrays([2, 2], [2, 2]), true);
assertEqual(eqArrays([2, 2], [2, 3]), false);
assertEqual(eqArrays([2], [2]), true);
assertEqual(eqArrays([2], [3]), false);
assertEqual(eqArrays([], []), true);

assertEqual(eqArrays([2,2,[2,[2,2],2]], [2,2,[2,[2,2],2]]), true);
assertEqual(eqArrays([2,2,[2,[2,3],2]], [2,2,[2,[2,2],2]]), false);