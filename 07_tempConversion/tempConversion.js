const convertToCelsius = function(degreesFahrenheit) {
  let degreesCelsius = (degreesFahrenheit - 32) * (5/9);
  return Math.round(degreesCelsius * 10) / 10;
};

const convertToFahrenheit = function(degreesCelsius) {
  let degreesFahrenheit = (degreesCelsius * (9 / 5)) + 32;
  return Math.round(degreesFahrenheit * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
