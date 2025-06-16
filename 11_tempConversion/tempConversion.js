const convertToCelsius = function(num) {
  const fromF = (num - 32) * (5/9);
  return Math.round(fromF * 10) / 10;
};  

const convertToFahrenheit = function(num) {
  const fromC = (num * (9/5) + 32);
  return Math.round(fromC * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
