const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😍😍😍 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🤬🤬🤬 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(input) {
  let output = {};
  input = input.toLowerCase();
  let lettersArray = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  for (let letter of input) {
    if (lettersArray.includes(letter)) {
      if (output[letter]) {
        output[letter] += 1;
      } else {
        output[letter] = 1;
      }
    }
  }
  return output;
};

let result1 = countLetters("Lighthouse");
let result2 = countLetters("Will");

assertEqual(result1["l"],1);
assertEqual(result2["l"],2);

module.exports = countLetters;