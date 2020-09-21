const assertEqual = require('../assertEqual');
const wi = require('../tail');

assertEqual(tail([1,2,3]).length,2);
assertEqual(tail([1,2,3,4]).length,3);