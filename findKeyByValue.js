const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🚫 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKeyByValue = function(inputObject,inputValue) {
  let output = undefined;
  let keys = Object.keys(inputObject);
  for (let key of keys) {
    if (inputObject[key] === inputValue) {
      output = key;
    }
  }
  return output;
};

const bestTVShowsByGenre = {
  scifi: "The Expanse",
  comedy: "Saturday Night Live",
  drama:  "Breaking Bad"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "Breaking Bad"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
assertEqual(findKeyByValue(bestTVShowsByGenre, "Saturday Night Live"), "comedy");

module.exports = findKeyByValue;