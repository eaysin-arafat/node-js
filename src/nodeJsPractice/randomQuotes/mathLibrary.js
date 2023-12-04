const math = {};

math.getRandomNumbers = function getRndomNumbers(min, max) {
  let maximum = max;
  let minimum = min;

  maximum = typeof maximum === "number" ? maximum : 0;
  minimum = typeof minimum === "number" ? minimum : 0;

  return Math.floor(Math.random() * (maximum - minimum + 1) + min);
};

module.exports = math;
