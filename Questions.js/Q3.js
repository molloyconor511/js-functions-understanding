// What's the value of "num" at the end of the program? Why?

//Declaring a function, takes in one argument and returns that arument minus 1.
//Declaring a variable using "let" keyword so can redefine it as needed.
//First "num" will = 9 ( 10 - 1)
//Second "num" will = 8 ( 9- 1)

function myFunction(num) {
  return num - 1;
}

let num = 10;
num = myFunction(num);
num = myFunction(num);

// Happy with above logic
