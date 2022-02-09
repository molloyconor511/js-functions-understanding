//What's the value of "result" once code is ran? Why?

// result = 0 as "let result = 0" on line 11(global variable) takes precedence over "let result = 100 + 2" on line 7
// (local variable/defined within a function) 

function myFunction(num1, num2) {
    let result = num1 + num2;
    return result;
};

let result = 0;
myFunction(100, 2);

// Global scope will take precedence over local/block scope