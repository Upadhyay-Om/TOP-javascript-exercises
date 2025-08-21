const convertToCelsius = function(Fahrenheit) {
  return Math.round((Fahrenheit-32)*(5/9)*10)/10;

};

const convertToFahrenheit = function(celsius) {
  return Math.round(((celsius*9)/5 + 32)*10)/10;
};
console.log(convertToCelsius(32));
console.log(convertToFahrenheit(0));

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
