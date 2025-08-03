
Loops are handy, if you want to run the same code over and over again, each time with a different value.

Often this is the case when working with arrays:

______________________________________________________Different Kinds of Loops________________________________________________________

1. for - loops through a block of code a number of times

   for(let i=0; i<array.length; i++){
        array[i]
   }

   for(let i=array.length-1; i>=0; i++){
         array[i]
   }
   

2.  for/of - loops through the values of an iterable object ( Arrays , Strings )

  for(let item of array){

  }

3.  for/in - loops through the properties of an object

   for(let key in object){
      
   }


4. while - loops through a block of code while a specified condition is true
   
   let i=0;

   while (i < 10) {
    console.log(i)
  i++;
}
  
5. do/while - also loops through a block of code while a specified condition is true

   let i=0;
 

do {
    console.log(i)
  i++;
}
while (i < 10);


6. Array.forEach((item,index,array)=>)


______________________________________________________Break & Continue________________________________________________________

 It was used to "jump out" of a switch() statement.

The break statement can also be used to jump out of a loop:

The continue statement "jumps over" one iteration in the loop.


_________________Break____________________


 let i = 0

 while(i<=15){
    console.log(i)
    if(i == 10){
     break;
    }
    i++
}

_________________Continue_________________
