//assertEqual:
const assertEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🚫 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

//findKey:
const findKey = function(inputObject,callback) {
  let keys = Object.keys(inputObject);
  for (let key of keys) {
    if (callback(inputObject[key])) {
      return key;
    }
  }
};

//Test cases:

assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2),"noma");

assertEqual(findKey({one: 1, two: 2},x => x === 2), "two");

module.exports = findKey;