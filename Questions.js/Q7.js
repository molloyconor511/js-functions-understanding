// What will the value of counter be at the end of this program? Why?

// counter = 3 as initially defined as 1. Function will increase counter by 1 every time it's ran so counter = 2
// after function called on line 14. New constant variable defined on line 15 so function ran again and counter = 3

let counter = 1;

function myFunction() {
  counter++;
  return counter;
}

myFunction();
const num = myFunction();

//Hopefully getting somewhere...
