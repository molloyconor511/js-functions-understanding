//What's the value of "result" once code is ran? Why?

// result = 102 as no keyword(let, const, var) so automatically takes on global scope

function myFunction(num1, num2) {
    result = num1 + num2;
};

let result = 0;
myFunction(100, 2);