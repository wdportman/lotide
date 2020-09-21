const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');

assertEqual(eqArrays([2, 2], [2, 2]), true);
assertEqual(eqArrays([2, 2], [2, 3]), false);
assertEqual(eqArrays([2], [2]), true);
assertEqual(eqArrays([2], [3]), false);
assertEqual(eqArrays([], []), true);

assertEqual(eqArrays([2,2,[2,[2,2],2]], [2,2,[2,[2,2],2]]), true);
assertEqual(eqArrays([2,2,[2,[2,3],2]], [2,2,[2,[2,2],2]]), false);