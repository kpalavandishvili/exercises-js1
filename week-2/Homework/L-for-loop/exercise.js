/* Write a function that:

- Takes one number n as a parameter
- Adds all numbers from 0 to n. For example, if the input is 3, the output should be 0 + 1 + 2 + 3
- You should use a for loop

*/

let n = 10;
let sum=0;

function sumTillNum(num){
	for (let i = 0; i <= 10; i++) {
		sum = sum + i;
	
		
	}
	return sum;
	//your code here
}

console.log("Sum from 0 to " + n + " is: " + sumTillNum(n));
