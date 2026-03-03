const add = function(a,b) {
	return a+b
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(arr) {
	return arr.reduce((total, curr)=>total=total+curr,0)
};

const multiply = function(arr) {
  return arr.reduce((total, curr)=>total=total*curr,0)
};

const power = function(base, exp) {
	return Math.pow(base, exp)
};

const factorial = function(a) {
	let fact = 1;
  while(n>0){
    fact=fact*i
    n--
  }
  return fact
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
