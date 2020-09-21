const assertEqual = require('../assertEqual');
const head = require('../head');

assertEqual(head([1,2,3]),1);
assertEqual(head(["a","b","c"]),"a");
assertEqual(head([1]),1);
assertEqual(head([]),undefined);