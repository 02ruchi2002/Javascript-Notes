
Objects are containers for Properties and Methods.

Properties are named Values.

Methods are Functions stored as Properties.

Properties can be primitive values, functions, or even other objects.

In JavaScript, almost "everything" is an object.

Objects are objects
Maths are objects
Functions are objects
Dates are objects
Arrays are objects
Maps are objects
Sets are objects


How to Define a JavaScript Object
1. Using an Object Literal

const person = {
     firstName: "John",
     lastName: "Doe",
     age: 50,
     eyeColor: "blue"
}


2. Using the new Keyword

const person = new Object();

person.firstName = "John";
person.lastName = "Doe";
person.age = 50;
person.eyeColor = "blue";


3. Using an Object Constructor


_______________________________________Accessing Object Properties_____________________________________________

1. -> objectName.propertyName

2. -> objectName["propertyName"]

console.log(person.family.brother)

console.log(person["family"]["brother"])



______________________________________Adding New Properties_____________________________________________________

person.nationality = "English";

_____________________________________Deleting Properties______________________________________________________

1. ->delete person.age;

2. ->delete person["age"];


_______________________________________Object Methods________________________________________________________


Object methods are actions that can be performed on objects.

A method is a function definition stored as a property value.

const person = {
  firstName: "John",
  lastName: "Doe",
  id: 5566,
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
};