const add = function(a,b) {
	return a+b
};

const subtract = function(a,b) {
	return a-b
};

const sum = function(array) {
	return array.reduce((total, current)=>{
    return total+current
  },0)
};

const multiply = function(array) {
  return array.reduce((product, current)=>product*current,1)
};

const power = function(a,b) {
	return Math.pow(a,b)
};

const factorial = function(number) {
  const array1= []
  for(let i=number; i>0; i--){
    array1.push(i)
  }
	return array1.reduce((total, current)=>total*current,1)
};

console.log(factorial(3))

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
