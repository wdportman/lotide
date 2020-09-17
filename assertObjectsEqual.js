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

const eqObjects = function(obj1, obj2) {
  if (Object.keys(obj1).length !== Object.keys(obj2).length) {
    return false;
  } else {
    let keys = Object.keys(obj1);
    for (let key of keys) {
      if (Array.isArray(obj1[key])) {
        if (!eqArrays(obj1[key], obj2[key])) {
          return false;
        }
      } else if (!Array.isArray(obj1[key])) {
        if (obj1[key] !== obj2[key]) {
          return false;
        }
      }
    }
  }
  return true;
};

const assertObjectsEqual = function(obj1, obj2) {
  const inspect = require('util').inspect;
  if (eqObjects(obj1, obj2) === true) {
    console.log(`✅ Yep, the two objects are equal: ${inspect(obj1)} === ${inspect(obj2)}.`);
  } else {
    console.log(`🚫 No, the two objects are not equal: ${inspect(obj1)} !== ${inspect(obj2)}.`);
  }
};

//Test case

const obja = {
  a: "hi",
  b: [1,2],
  d: "e",
  c: [false, true]
};

const objb = {
  c: [false, true],
  a: "hi",
  b: [1,2],
  d: "e"
};

assertObjectsEqual(obja,objb);
// console.log(`Example label: ${inspect(obj1)}`);