
A JavaScript function is a block of code designed to perform a particular task.

A JavaScript function is executed when "something" invokes it (calls it).

function myFunction(a, b) {
  return a * b;
}

Arrow functions were introduced in ES6.

Arrow functions allow us to write shorter function syntax:

hello = () => {
  return "Hello World!";
}

It gets shorter! If the function has only one statement, and the statement returns a value, you can remove the brackets and the return keyword:

hello = () => "Hello World!";

This works only if the function has only one statement.


  _________________________________________Function Expressions_____________________________________

A JavaScript function can also be defined using an expression.

Functions defined using an expression are not hoisted.

A function expression is stored in a variable:

const x = function (a, b) {return a * b};


__________________________________Functions Can Be Used as Values_________________________________

JavaScript functions can be used as values:

Example
function myFunction(a, b) {
  return a * b;
}

let x = myFunction(4, 3);

___________________________________________________arguments________________________________________

function sumOfAll () {
    let sum = 0
    for(let i=0 ; i<arguments.length; i++){
        sum = sum + arguments[i]
    }
    return sum
}

let result = sumOfAll(1,43,75,8,5,2,7)


__________________________________All Functions are Methods________________________________________

In JavaScript all functions are object methods.


const person = {
  firstName:"John",
  lastName: "Doe",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  }
}

person.fullName();  