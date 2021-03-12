// Using the .map() method, create a new array with `numbers` multiplied by 100
// Write multiple solutions using different syntax (as shown in the README)

var numbers = [0.1, 0.2, 0.3, 0.4, 0.5];

function multiplyBy100(number) {
  return number * 100;
  
}
var multy = numbers.map(multiplyBy100);
console.log(multy);



var multyNumbers = numbers.map(each => {
  return each * 100;
})

console.log(multyNumbers);