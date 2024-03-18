const convertToCelsius = function(farenheit) {
  let celcius= (farenheit - 32)*5/9
  let roundCelcius = Math.round(celcius *10)/10
  return roundCelcius
};

const convertToFahrenheit = function(celcius) {
  let farenheit = (celcius * 9/5) + 32
  let roundFarenheit = Math.round(farenheit*10)/10
  return roundFarenheit;
};


console.log(convertToFahrenheit(22))
console.log(convertToCelsius(100))
// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
