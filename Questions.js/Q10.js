// What will be logged when this code runs? Why?

// Should log 100 as third parameter(100) will take precedence over variable (const num3 = 20) within the scope of function only
// Function will look like: myFunction(20, 10, 100) { console.log(100) }
// If I "console.log(num3)" outside of the function, should return 20

function myFunction(num1, num2, num3) {
  console.log(num3);
}

const num1 = 10;
const num2 = 1;
const num3 = 20;

myFunction(num3, num1, 100);

//Definite values take precedence over variables within local scope
