const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🚫 Assertion Failed: ${actual} !== ${expected}`);
  }
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

const eqObjects = function(obj1, obj2) {
  let output = "";
  if (Object.keys(obj1).length !== Object.keys(obj2).length) {
    output = false;
  } else {
    let keys = Object.keys(obj1);
    for (let key of keys) {
      if (Array.isArray(obj1[key])) {
        if (!eqArrays(obj1[key], obj2[key])) {
          output = false;
        } else {
          output = true;
        }
      } else if (obj1[key] !== obj2[key]) {
        output = false;
      } else {
        output = true;
      }
    }
  }
  return output;
};

//Objects w/ only primitive data -- test cases:

const obj1 = {one: 1, two: 2};
const obj2 = {one: 1, two: 2};
const obj3 = {one: 1, two: 2, three: 3};

assertEqual(eqObjects(obj1,obj2), true);
assertEqual(eqObjects(obj2,obj3), false);

//Objects w/ arrays -- test cases:

const obj4 = {a: [1,2], b: [2]};
const obj5 = {b: [2], a: [1,2]};
const obj6 = {a: [1,2,3], b: [2]};

assertEqual(eqObjects(obj4,obj5), true);
assertEqual(eqObjects(obj5,obj6), false);

//Note: We are not testing whether objects containing objects (other than arrays) are equal for now.