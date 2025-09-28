
Sometimes we need to create many objects of the same type.

To create an object type we use an object constructor function.

It is considered good practice to name constructor functions with an upper-case first letter.

1. function constructor______________________________                                                        

function Person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
}


const myFather = new Person("John", "Doe", 50, "blue");
const myMother = new Person("Sally", "Rally", 48, "green");
const mySister = new Person("Anna", "Rally", 18, "green");
const mySelf = new Person("Johnny", "Rally", 22, "green");

2. class constructor_________________________________

class Car{
    constructor(name,year,color){
         this.carName = name,
         this.carYear = year,
         this.carColor = color
    }
}

const myCar = new Car("kia","2023","bluesh-green")

______________________________________________________________Adding a Property to a Constructor

Person.prototype.nationality = "English";

Person.prototype.changeName = function (name) {
  this.lastName = name;
}



____________________________________________________________________________Built-in JavaScript Constructors

new Object()   
new Array()   
new Map()      
new Set()   
new Date()     
new RegExp()   
new Function()