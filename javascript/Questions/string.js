
// _________________________________________ Reverse the word ____________________________________________________________________


// str = "coding"
// ouput = "gnidco"

//  const reversed = str.split("").reverse().join("");

// console.log(reversed)

// -----------------------------------------------------

// const str  = "coding"
// let result = ""

// for(let i=str.length-1; i>=0; i--){
//     result += str[i]
// }

// console.log(result)

// ______________________________________ Reverse the word in a sentence_________________________________________________________

// let input = "I am coder"

// let arr = input.split(" ")

// let result =""

// for(let i=0;i<arr.length;i++){

//   let reversed = reverse(arr[i])
//   result+=reversed + (i != arr.length - 1 ? " " : "")
// }

// console.log(result)

// console.log(arr)

// (1) output = "coder am I"
// (2) output = "I ma redco" 

// function reverse (word){
//     let result = ""
//     for(let i=word.length-1;i>=0;i--){
//         result += word.charAt(i)
//         // result += word[i]
//     }

//     return result
// }

// let ans = reverse()

// let answer = reverse(input)

// console.log(answer)

// --------------------------------------------


//   let input = "I am coder"

//   let result = input.split(" ").reverse().join(" ")

// let result = input.split(" ").map((word)=>word.split("").reverse().join("")).join(" ")

// --------------------------------------------


// let result = ""
// let word = ""

// for(let i = input.length-1;i>=0;i--){
//     if(input[i] != " "){
//         word += input[i]
//     }else{
//         result += word +" "
//         word = ""
//     }
// }
//     result+=word


// console.log(result)

// --------------------------------------------

// const str = "I am coder";

// let result = "";
// let word = "";

// for (let i = 0; i <= str.length; i++) {
//   if (i === str.length || str[i] === " ") {
//     result += word + " ";
//     word = "";
//   } else {
//     word = str[i] + word;
//   }
// }

// console.log(result.trim()); // I ma redoc


//____________________________________________ Minimum requirement for palindrome __________________________________________________

//  let word = "hello"
 
//  function countFor (str) {
//    let count = 0;
//    let first = str[0]
//    let rev = str.split("").reverse().join("")
//    for(let i=0;i<rev.length;i++){
//      if(rev[i] != first){
//        count++
//      }else{
//        break;
//      }
//    }
//    return count;
//  }
 
//  let numbers = countFor(word)
 
//  console.log(numbers)

//____________________________________________ Character Frequency ______________________________________________________________

 
// let word = "rrhrellorurrshffgr"

// let freq = new Array(26).fill(0)

// for(let i=0;i<word.length;i++){
//   let index = word.charCodeAt(i) - 97
//   freq[index]++
// }

// console.log(freq)