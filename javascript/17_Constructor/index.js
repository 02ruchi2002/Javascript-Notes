
// class Car{
//       // this is a way to write static variable inside the class
// static tyres = 4;
//      // this is a way to write non-static variable from outside the class
//  seat = 5;
// print_detail(){
//   console.log(Car.tyres)
//   console.log(Car.carRunsON)
//   console.log(this.color)
// }
// }

// let car1 = new Car()

// // this is a way to write non-static variable from outside the class
// car1.color = "pink"
// car1.company = "oooo"

// // this is a way to write static variable from outside the class
// Car.carRunsON = "petrol"


// // calling mathod for car1
// car1.print_detail()

// console.log(car1)


// _________________________________________________________________________________________________________________________

// class Car {
//    constructor(n,c,s,y){
//      this.company = n;
//      this.color = c;
//      this.seat = s;
//      this.tyer = t;
//      this.year = y;
//    }
//    yearOld(year){
//      let now = new Date()
//      console.log("my car is",now.getFullYear()-year,"old")
//    }
// }

// let myCar = new Car("kia","bluesgreen",5,4,2023)

// console.log(myCar)

// myCar.yearOld(2023)



// __________________________ 2 method with same name last method will override the first method __________________________________


// class Car {
//    constructor(n,c,s,y){
//      this.company = n;
//      this.color = c;
//      this.seat = s;
//      this.year = y;
//    }
//    yearOld(year){
//      let now = new Date()
//      console.log("my car is",now.getFullYear()-year,"old")
//    };
   
//       yearOld(year,color){
//      let now = new Date()
//      console.log("my car is",now.getFullYear()-year,"old and i change color from bluesgreen to",color)
//    }
// }

// let myCar = new Car("kia","bluesgreen",5,2023)

// console.log(myCar)

// myCar.yearOld(2023)
// myCar.yearOld(2023,"black")


// _____________________________________________ Static & Non-Static ____________________________________________________________


// class Collage{
//   // this is a way to define static variable
//   static collageName = "shyam parashad mukherji college for women"
  
//   constructor(name,rollno,cgpa,subject){
//     this.studentName = name;
//     this.studentRollno = rollno;
//     this.studentCgpa = cgpa;
//     this.studentSubject = subject;
//   };
//   print_details(){
//     console.log(Collage.collageName)
//     console.log(this.studentName)
//     console.log(this.studentRollno)
//     console.log(this.studentCgpa)
//     console.log(this.studentSubject)
//   }
// }

// let student1 = new Collage("komal",45,7.9,"political science")
// let student2 = new Collage("shivani",22,8.9,"economics")
// let student3 = new Collage("isha",39,7.7,"english")

// // here we are calling  method for student3 details
// student3.print_details()

// // here we are overriding the name of collage & if we do not write
// //  line no 58 inside class 84 line is also a way to write static variable from outside of class
// Collage.collageName = "shyam parashad mukherji college for girls"

// console.log(Collage.collageName)




// __________________________________ Famous Interview Question ________________________________________________________________


// [1] what will happen if we try to access non static variable or non static method inside static method.

// [2] what will happen if we try to access  static variable or  static method inside non-static method.




// ________________________________________ IMPORTANT NOTE _____________________________________________________________________

// when we call a class with new keyword the first methode is call autoimatically is constructor method


//  Question =>
//  Write a program to create a class count_objects and calculate the number of objects that has been created in realtime.


// class count_objects
// {
//     static i = 0;
//     constructor() {
//         count_objects.i++
//     }
    
// }


// var a = new count_objects();
// var b = new count_objects();
// var c = new count_objects();
// console.log(count_objects.i);
// var d = new count_objects();
// console.log(count_objects.i);
// var e = new count_objects();
// console.log(count_objects.i);



// _______________________________________  Destructors  ________________________________________________________________


// https://chatgpt.com/c/6986d728-d5c4-8324-878f-5292cf5fa304



// _______________________________________  Inheritance  ____________________ 2 Important keyword__________________________

// 1] extends 
// 2] super

