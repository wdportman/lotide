const without = function(source,itemsToRemove) {
  let output = [];
  source.forEach(function(element) {
    if (!itemsToRemove.includes(element)) {
      output.push(element);
    }
  });
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

//Test cases:
assertArraysEqual((without([2,2,3,4,5],[2,3])),[4,5]);
assertArraysEqual((without([2,2],[2,3])),[]);
assertArraysEqual((without([2],[2])),[]);
assertArraysEqual((without([2, "2"],[2])),["2"]);