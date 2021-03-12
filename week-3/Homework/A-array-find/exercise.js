/* 
  You are given an array of names.
  Using .find(), we'd like to find the first name which starts with A and is longer than 7 letters.
*/

// write your code here
function findLongNameThatStartsWithA(start) {
  return start.find(findLongName, findStartsWithA);
  
  
}
function findLongName(name) {
  return name.length > 7;
  
}
function findStartsWithA(name) {
  return name.startsWith("A") ;
  
}

var names = ["Rakesh", "Antonio", "Alexandra", "Andronicus", "Annam", "Mikey", "Anastasia", "Karim", "Ahmed"];

var longNameThatStartsWithA = findLongNameThatStartsWithA(names);

console.log(longNameThatStartsWithA);



/* EXPECTED OUTPUT */
// "Alexandra"
