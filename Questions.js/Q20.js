// What's the value of "result" when code runs? Why?

// result = 5 + 1000= 1005
// myFunction(5, 10, 1000) {
//    return 5 + 1000;
// };

function myFunction(num1, num2, num3) {
  return num1 + num3;
}

const num1 = 20;
const num2 = 200;
const num3 = 1000;

const result = myFunction(5, 10, num3, 15);

// Parameters with specific values take precedence over global variables within the function
