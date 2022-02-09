/* What's the value of result after calling this function. Why?
 */
function myFunction(num1, num2) {
  num1 + num2;
}
const result = myFunction(5, 5);

/*
result = undefined as no return in function so the function has no action to perform. 
Had to review MDN/online docs and freecodecamp exercises to get answer; 
Initally thought "return" might be implied in these functions
*/
