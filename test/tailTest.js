const assert = require('chai').assert;

const tail = require('../tail');

describe("#tail", () => {
  it("returns [2,3] for the input [1,2,3]", () => {
    assert.deepEqual(tail([1,2,3]),[2,3]);
  });
  it("returns [\"b\"] for the input [\"a\",\"b\"]", () => {
    assert.deepEqual(tail(["a","b"]),["b"]);
  });
});