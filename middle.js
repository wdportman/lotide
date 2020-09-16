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

const middle = function(array) {
  let output = [];
  if (array.length > 2) {
    if (array.length % 2 === 0) {
      output.push(array[(array.length / 2 - 1)]);
      output.push(array[(array.length / 2)]);
    } else {
      output.push(array[((array.length - 1) / 2)]);
    }
  }
  return output;
};

//Test cases

assertArraysEqual(middle([1,2,3,4,5]),[3]);
assertArraysEqual(middle([1,2,3,4,5,6]),[3,4]);
assertArraysEqual(middle([1]),[]);
assertArraysEqual(middle([1,2]),[]);
assertArraysEqual(middle([1,2,"hello",4,5]),["hello"]);