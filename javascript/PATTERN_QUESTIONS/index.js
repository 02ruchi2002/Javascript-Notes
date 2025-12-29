
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


// __________________________ [ 2 ] _______  with for loop_____________________


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


// __________________________ [ 2 ] _______  with while loop_____________________



// let i = 5;
// let pattern = "";

// while(i>=1){
//   let j = 1;
//   while(j<=i){
//     pattern += "*"
//     j++
//   }
//   if(i != 1){
//   pattern += "\n"
//   }
//   if(i == 1){
//     pattern += "\n"
//     let k = 1;
//     while(k<=5){
//     let l = 1;
//     while(l <= k){
//       pattern += "*"
//       l++
//     }
//         if(k != 5){
//     pattern += "\n"
//     }
//     k++
//     }
//   }
//   i--
// }

// console.log(pattern)




// ____________ [3]______ [ Piramid ] _________________________________________


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


// _________________________[ 5 ]______________________________


//   let pattern = "";
//     for (let i = 1; i <= n; i++){
//         for (let j = 1; j <= n; j++){
//             if (i == 1 || i == n || j == 1 || j == n) {
//             pattern += "*"
//             } else {
//                 pattern += " "
//             }
//         }
//         if (i != n) {
//         pattern += "\n"
//         }
//     }
//     console.log(pattern)


// _________________________[ 8 ]______________________________


let num = 5;

let no = 1;

for(let i=1;i<=num; i++){
  for(let j=1;j<=i;j++){
    console.log(no)
    no++
  }
}