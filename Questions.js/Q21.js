//What's the value of "result" when code runs? Why?

// Result = 30
// result = const variable so can't reassign new values once defined(on line 12) . myFunction will return value of num1(10)
// + num2(20) so any code written below here won't affect value of "result"

function myFunction(num1, num2) {
  const result = num1 + num2;
  return result;
}

const result = myFunction(10, 20);
myFunction(100, 2);
