const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😍😍😍 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🤬🤬🤬 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// TEST CODE

const countOnly = function(allItems) {
  const results = {}

  for (const item of allItems) {
    if (results[item]) {
      results[item] += 1;
    } else {
      results[item] = 1;
    }
  };

  return results;  
}

/*
Inputs:
- array (allItems)
- object (itemsToCount)

Output:
- object w/ truthy itemsToCount object keys & how many times each key is listed in the allItems array

*/

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

console.log(countOnly(firstNames))
assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);

// results {
//   "Karl": 1,
//   "Salima" 2: ,
//   "Agouhanna": 1,
//   "Fang": 2,
//   "Kavith": 1,
//   "Jason": 1,
//   "Joe": 1
// }
