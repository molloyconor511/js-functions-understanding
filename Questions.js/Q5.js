// What value will be logged inside the function call? Why?
//Will log a value of 2 as function wioll still take in 2 arguments(10, 2) and log the second(2)

function myFunction(num, num1) {
  console.log(num1);
}

let num = 10;
let num1 = 2;

myFunction(num);

/*      WRONG
    Will log "undefined" as function takes in 2 parameters but only one is provided when function is called at
    bottom of question. Function is then unable to log (num1) as parameter not available e.g. console.log() 
    Didn't structure my response properly/think about result before answering. 
    Also thought that a default argument would have been passed e.g. "num1" would be passed by default if no second parameter
    provided in fufunction call
*/
