// What value will be logged inside the function call? Why?

// Will accept 2 arguments and log the value of second argument; in this case the second argument entered is "num"
// so outcome will be 10

function myFunction(num, num1) {
  console.log(num1);
}

let num = 10;
let num1 = 2;

myFunction(num1, num);

// Variables are defined on lines 10/11, subsequently called as arguments in function on line 13- role of function is to log
//second argument which is 10.
