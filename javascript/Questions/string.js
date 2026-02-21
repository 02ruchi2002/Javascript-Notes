
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


//____________________________________________ palindrome or not ____________________________________________________________


// const checkIsPalindrome = (str) =>{
//   let reverse = str.split("").reverse().join("")
//   if(reverse == str){
//     return true;
//   }else{
//     return false
//   }
// }


// let result = checkIsPalindrome("ruchihcur")

// console.log(result)

// ------------------------------------------------

// var isValid = function(s) {
//     let i = 0;
//     let j = s.length - 1
//     while (i < j) {
//         if (s[i] === s[j]) {
//             i++
//             j--
//         } else {
//             return false;
//         }
//         return true
//     }
// };


// ------------------------------------------------


// const str = "abcba"
// const str = "pglihgp"
// const str = "hellolleh"

// let result = ""

// let i = 0
// let j = str.length-1
// while(i<j){
//     if(str[i] == str[j]){
//         i++
//         j--
//     }else if(str[i] != str[j]){
//         result = "not palindome"
//         break;
//     }
//     result = "palindrome"
// }

// console.log(result)


//____________________________________________  Maximum Numbers of Words  ________________________________________________________

// let sentences = ["alice and bob love leetcode", "i think so too", "this is great thanks very much"]

//                                                                             Time Complexity = O(n × m)

// const maxNoOfWord = (arr) => {
//   let max = 0;
//  for(let item of arr){
//    let split  = item.split(" ")
//    if(split.length > max){
//      max = split.length
//    }
//  }
//  return count;
// }

// let result = maxNoOfWord(sentences)

// console.log(result)


// --------------------------------------                Time Complexity = O(n × m)   

// var mostWordsFound = function (sentences) {
//     let max = 0;
//     for (let item of sentences) {
//         let sen = item.split(",")
//         for (let word of sen) {
//             let count = word.split(" ")
//             if (count.length > max) {
//                 max = count.length
//             }
//         }
//     }
//     return max;
   
// };




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


//____________________________________________ Extracting Numbers ______________________________________________________________

// str = "abc334v44d"

// Output: [334, 44]



var extract_number = function(s) {
    let result = []
    let num = ""
    for (let i = 0; i < s.length; i++){
        if (s.charCodeAt(i) >= 48 && s.charCodeAt(i) <= 57) {
            num += s[i]
        } else {
            if (num.length > 0) {
                result.push(Number(num));
                num = "";
            }
        }
    }
    if (num.length > 0) {
        result.push(Number(num));
    }
    return result
};


// =============================================================================================================================

// Write a program to find the missing number that when add to it becomes divisible by 69.

// Input: 69

// Output: 0

// Explanation: If we add 69+0 it can become divisible by 69.

// Input:123

// Output:15

// Explanation: If we subtract 123+15 = 138 which is divisible by 69.


function isDivisible(num) {
  for(let i=0;i<=10;i++){
    let x = 69*i - num
    if(x>0){
      return x;
    }
  }
}

let result = isDivisible(100)

console.log(result)




//____________________________________________ Reverse Words in a String ________________________________________________________

// Input: s = "the sky is blue"
// Output: "blue is sky the"
 
                                                              // trim = O(n)
                                                              // split = O(n)
                                                              // for loop = O(n)
                                                              // string concatenation = result += something =  O(n²)

var reverseWords = function(s) {                                  
 let arr = s.trim().split(/\s+/)                                                  
 let result = ""                                                                   
 for(let i=arr.length-1;i>=0;i--){                                                  
   result += arr[i]
   if(i != 0){
    result += " "
   }
 }
 return result;
 
};


// ---------------------------------------- Optimized Time Complexity   O(n) ----------------------

var reverseWords = function(s) {
  return s.trim().split(/\s+/).reverse().join(" ");
};