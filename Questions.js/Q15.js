// What will be the value of "result" when this code runs? Why?

// Will return -10 as function is being called so "if" statement is true resulting in a return value of -10

function myFunction(num1) {
  if (true) {
    return -10;
  }

  return num1 * 10;
}

const result = myFunction(5);

// Could assign any value to parameter on line 13(5) as has no impact as long as function is ran/"if" statement conditions
// are met
