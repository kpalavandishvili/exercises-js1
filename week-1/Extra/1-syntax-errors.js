// There are syntax errors in this code - can you fix it to pass the tests?

// Exercise 1
function addNumbers(a, b, c) {
    return a + b + c;
}
const numbers = addNumbers(3, 4, 6);
console.log(numbers);
//  End Exercise 1


// Exercise 2
function introduceMe(name, age) {
    return `Hello, my name is ${name} and I am ${age} years old`;
}
const greeting = introduceMe("Sonjide", 27);
console.log(greeting);
// End Exercise 2


// Exercise 3
function getTotal(a, b) {

    // Use string interpolation here
    return `The total is ${a + b}`;
}
const totalNum = getTotal(23, 5);
console.log(totalNum);
// End Exercise 3

/* ======= TESTS - DO NOT MODIFY =====
There are some Tests in this file that will help you work out if your code is working.

To run these tests type `node 1-syntax-errors.js` into your terminal
*/

const util = require('util');

function test(test_name, actual, expected) {
    let status;
    if (actual === expected) {
        status = "PASSED";
    } else {
        status = `FAILED: expected: ${util.inspect(expected)} but your function returned: ${util.inspect(actual)}`;
    }

    console.log(`${test_name}: ${status}`);
}

test("fixed addNumbers function - case 1", addNumbers(3, 4, 6), 13);
test("fixed introduceMe function", introduceMe("Sonjide", 27), "Hello, my name is Sonjide and I am 27 years old");
test("fixed getTotal function", getTotal(23, 5), "The total is 28");
