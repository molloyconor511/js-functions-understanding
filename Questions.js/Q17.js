// What's the value of "result" when this code is ran? Why?

// Will return -100 as function will stop running after reaching first return statement so value of parameter passed
// is irrelevant here/ outcome of function will always be -100.

function myFunction(num1) {
  return -100;

  return num1 * 10;
}

const result = myFunction(5);
