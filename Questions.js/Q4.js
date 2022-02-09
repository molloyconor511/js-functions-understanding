//What is the value of "add" and "num" at the end of the program? Why?

// Function will not run as won't accept "add" as an acceptable argument(will only accept "num")

// "num" will equal 9 as function ran once with this argument. Unclear if I'm wrong here and
//"num" will still be equal to 10 as function not called after variable is defined.
function myFunction(num) {
  return num - 1;
}

let num = 10;
let add = 3;
add = myFunction(add);
add = myFunction(add);

/*  WRONG!
Reviewed result and can see error:
    1. Thought the argument being passed had to be related to the "num" variable. New expected value of "add" = 1 as 
    it's redefined twice(first outcome = "3-1", second/last outcome = "2-1"). Repeated reassigning of values to variable allowed 
    as using "let" keyword(not "const").
    Function takes in an argument of 3, returns a value of 2; done twice. Variable "add" is reassigned to final result(1)

    2. Was unclear on this before starting question. New expected value of "num" = 10 as variable "let num = 10" is 
    defined and not altered again(function has no impact on its value here)
     "num" will equal 9 if function called after this.
*/
