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
  if (Object.keys(obj1).length !== Object.keys(obj2).length) {
    return false;
  } else {
    let keys = Object.keys(obj1);
    for (let key of keys) {
      if (Array.isArray(obj1[key])) {
        if (!eqArrays(obj1[key],obj2[key])) {
          return false;
        }
      } else if (typeof obj1[key] === "object") {
        if (!eqObjects(obj1[key],obj2[key])) {
          return false;
        }
      } else {
        if (obj1[key] !== obj2[key]) {
          return false;
        }
      }
    }
  }
  return true;
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


const obja = {
  a: "hi",
  b: 1,
  c: [false, true]
};

const objb = {
  a: "hi",
  b: 1,
  c: [false, true]
};

assertEqual(eqObjects(obja,objb), true);

const objWObj1 = {
  a: 1,
  b: {
    a: 1,
    b: "two",
    c: {a: 2, b: 1, c: {a: 1}}
  }
};

const objWObj2 = {
  a: 1,
  b: {
    a: 1,
    b: "two",
    c: {a: 2, b: 1, c: {a: 1}}
  }
};

const objWObj3 = {
  a: 1,
  b: {
    a: 1,
    b: "two",
    c: "hello"
  }
};

eqObjects(objWObj1,objWObj2);

assertEqual(eqObjects(objWObj1,objWObj2), true);
assertEqual(eqObjects(objWObj1,objWObj3), false);

//Note: We are not testing whether objects containing objects (other than arrays) are equal for now.