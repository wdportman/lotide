const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🚫 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKeyByValue = function(input) {
  let output = "";
  return output;
}

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Saturday Night Live",
  drama:  "Breaking Bad"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "Breaking Bad"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
assertEqual(findKeyByValue(bestTVShowsByGenre, "Saturday Night Live"), "comedy");