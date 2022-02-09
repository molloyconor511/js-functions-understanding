// What will be the value of "result" when code is ran? Why?

//Result = 50
// If function is not ran, return a value of -100. If function is ran(which it is) , return a value of
// num1( = 1st paramter = 5) * 10 =50

function myFunction(num1) {
  if (false) {
    return -100;
  }

  return num1 * 10;
}

const result = myFunction(5);

// happy with result
