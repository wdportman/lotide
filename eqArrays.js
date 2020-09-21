const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  } else if (array1.length === 0) {
    return true;
  } else {
    for (let i = 0; i < array1.length; i++) {
      if (Array.isArray(array1[i])) {
        return eqArrays(array1[i],array2[i]);
      } else if (array1[i] !== array2[i]) {
        return false;
      }
    }
  }
  return true;
};

module.exports = eqArrays;