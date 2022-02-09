// What will be logged when this code runs? Why?

// Creating a function which takes in 2 arguments and logs a previously undefined variable.
// const variables later defined with global scope- should mean that resulting function will look like:
// "myFunction(20, 10) {
//    console.log(20)
//  };
// So result will be 20 due to global scope of const variables.

function myFunction(num1, num2) {
  console.log(num3);
}

const num1 = 10;
const num2 = 1;
const num3 = 20;

myFunction(num3, num1);

// Function is defined(but not ran)
// Variables are then defined
// Function accepts 2 arguments(but does nothing with them); then logs num3/20 so on review, don't need to
// worry about global vs scope in this exercise

