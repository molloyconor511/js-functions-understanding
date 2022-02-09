// What will be the value of "result" when this code runs? Why?

// Resulting code should equal 10 and look like this:
// myFunction(5) {
//  const num2 = getSomeValue();
//  return 5 * 2;
// }

// getSomeValue will return a value of 2
// myFunction will multiply whatever parameter is passed(num1 = 5) * 2(getSomeValue)
// result = 5*2 = 10

function getSomeValue() {
  return 2;
}

function myFunction(num1) {
  const num2 = getSomeValue();
  return num1 * num2;
}

const result = myFunction(5);
