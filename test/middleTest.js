const assert = require('chai').assert;

const middle = require('../middle');

describe("#middle", () => {
  it("returns [3] for the array [1,2,3,4,5]", () => {
    assert.deepEqual(middle([1,2,3,4,5]),[3]);
  });
  it("returns [[\"b\",\"c\"] for the array [\"a\",\"b\",\"c\",\"d\"]", () => {
    assert.deepEqual(middle(["a","b","c","d"]),["b","c"]);
  });
});