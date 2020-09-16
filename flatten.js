const flatten = function(inputArray) {
  let output = [];
  for (let i = 0; i < inputArray.length; i++) {
    if (!Array.isArray(inputArray[i])) {
      output.push(inputArray[i]);
    } else {
      for (let j = 0; j < inputArray[i].length; j++) {
        output.push(inputArray[i][j]);
      }
    }
  }
  return output;
};

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

//Test cases

assertArraysEqual((flatten([2,[3,4],5,[6]])),[2,3,4,5,6])
assertArraysEqual((flatten([2,3,4,5,6])),[2,3,4,5,6])
assertArraysEqual((flatten([])),[])
assertArraysEqual((flatten([1])),[1])
assertArraysEqual((flatten([1,"1",[1,1]])),[1,"1",1,1])