
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


____________________________________Object Method_______________________________________________


// Copies properties from a source object to a target object
1. Object.assign(target, source)

// Creates an object from an existing object
2. Object.create(object)

// Returns an array of the key/value pairs of an object
3. Object.entries(object)

// Creates an object from a list of keys/values
4. Object.fromEntries()

// Returns an array of the keys of an object
5. Object.keys(object)

// Returns an array of the property values of an object
6. Object.values(object)

// Groups object elements according to a function
7. Object.groupBy(object, callback)


______________________________________________________________________________________________Object Protection Methods

// Prevents re-assignment
1. const car = {type:"Fiat", model:"500", color:"white"};

// Prevents adding object properties
2. Object.preventExtensions(object)

// Returns true if properties can be added to an object
3. Object.isExtensible(object)

// Prevents adding and deleting object properties
4. Object.seal(object)

// Returns true if object is sealed
5. Object.isSealed(object)

// Prevents any changes to an object
6. Object.freeze(object)

// Returns true if object is frozen
7. Object.isFrozen(object)
