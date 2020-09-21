const assertArraysEqual = require('../assertArraysEqual');

assertArraysEqual([2, 2], [2, 2]);
assertArraysEqual([2, 2], [2, 3]);
assertArraysEqual([2], [2]);
assertArraysEqual([2], [3]);
assertArraysEqual([], []);