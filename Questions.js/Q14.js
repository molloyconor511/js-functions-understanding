// What wil be the value of "result" when this code runs? Why?

// Should return a value of 4 as:
// myFunction(5) {
//  return 2 * 2;
// };

function getSomeValue() {
  return 2;
}

function myFunction(num1) {
  return getSomeValue() * getSomeValue();
}

const result = myFunction(5);

// Doesn't matter what parameter is passed on line 16 as will always return (2 * 2)
