// What will be the value of "resul" when this code runs? Why?

// Resulting code should be:
// myFunction(5) {
//   const num2 = getSomeValue();
//   return 5 * 2;
// };

// result = 10(5*2)

function getSomeValue() {
  return 2;
}

function myFunction(num1) {
  const num2 = getSomeValue();
  return num1 * getSomeValue();
}

const result = myFunction(5);

//line 16 has no impact on this code as num2 is not called in return
