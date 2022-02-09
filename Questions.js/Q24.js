// What will be the value of `result` when this code runs? Why?

//result = 100 as myFunction will always return a value of 100- subsequent global variable defined on line 10
// (const result = 100) will take precedence over local variable defined on line 6(const result = 5 + 2)
function myFunction(num1, num2) {
  const result = num1 + num2;
  return 100;
}

const result = myFunction(5, 2);
