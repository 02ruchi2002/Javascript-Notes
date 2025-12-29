
// let num = 7
// let pattern = ""

// for(let i=1;i<=num;i++){
//   if(i%2 != 0){
//     for(let j=1;j<=i;j++){
//       pattern += "*"
//     }
//   }
//     pattern += "\n"
// }

// console.log(pattern)



// -----------------reverse------------------------
// let num = 7
// let pattern = ""

// for(let i=num;i>=1;i--){
//     for(let j=1;j<=i;j++){                 //(let j=1; j=num-i;j++)
//       pattern += "*"
//     }
//     pattern += "\n"
// }

// console.log(pattern)


// __________________________ [ 2 ] ____________________________


// let num = 5
// let pattern = ""

// for(let i=num;i>=1;i--){
//   for(let j=1;j<=i;j++){
//     pattern += "*"
//   }
//   if(i != 1){
//   pattern += "\n"
//   }
//   if(i == 1){
//     pattern += "\n"
//     for(let k=1; k<=num; k++){
//       for(let l=1;l<=k;l++){
//         pattern += "*"
//       }
//     if(k != 5){
//     pattern += "\n"
//     }
//     }

//   }
// }

// console.log(pattern)





// __________________ [ Piramid ] _________________________________________


// let num = 5;
// let patter = "";

// for(let i=1;i<=num;i++){
//   for(let k=num-i; k>=1;k--){
//     patter += " "
//   }
//   for(let j=1;j<=i*2-1;j++){
//     patter += "*"
//   }
//   if(i != num){
//   patter+= "\n"
//   }
// }

// console.log(patter)



// _________________________[ 4 ]______________________________

// let num = 5;
// let pattern = "";

// for(let i=1;i<=num;i++){
//   for(let j=1;j<=i;j++){
//     pattern += "*"
//   }
  
//   for(let k=num-i;k>=1;k--){
//     pattern += " "
//   }
  
//   for(let j=1;j<=i;j++){
//     pattern += "*"
//   }
  
//   if(i != num){
//   pattern += "\n"
//   }
// }

// console.log(pattern)