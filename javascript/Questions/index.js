// ________________________________________________________x_________________________________________________________

// Q1.                           
//  let nums = [1, 2, 3, 1, 2, 4, 6, 10]
//  let nums =[3,2,4]

// Output
// [0,2]

// Expected
// [1,2]

 //                 i   j
//  nums = [1,1,2,2,3,4,6,10]

// sum = 9


// const target = 6
// nums.sort((a,b)=>a-b)

// let i = 0
// let j = nums.length-1

// let result = []

// while(i<j){
//     if(nums[i]+nums[j] == target){
//        result.push(i,j)
//        break;
//     }else if (nums[i]+nums[j]>target){
//          j--
//     }else if (nums[i]+nums[j]<target){
//         i++
//     }
// }

// console.log(result)

// _________________________________________________________________________________________________________________


// Q2. Find duplicates/repeated elements in array

// arr = [1,2,3,1,2,4,6,10] output = [1,2]

// const arr = [1, 2, 3, 1, 2, 4, 6, 10]

// const unique = []
// const duplicate = []

// for (let i = 0; i < arr.length; i++) {
//     if(!unique.includes(arr[i])){
//         unique.push(arr[i])
//     }else{
//         duplicate.push(arr[i])
//     }
// }

// console.log(unique)
// console.log(duplicate)

// _________________________________________________________________________________________________________________


// Q3. Find most frequent elements in array

// arr = [1,2,3,1,2,4,3,3,2,10] output = [2,3]

// const arr = [1,2,3,1,2,4,3,3,10]

// const obj = {}

// for(let i=0;i<arr.length; i++){
//     if(!Object.keys(obj).includes(arr[i]+"")){
//         obj[arr[i]] = 1
//     }else{
//        obj[arr[i]] = obj[arr[i]]+1
//     }
// }

// let maxCount = 0
// let maxCountElement = -1

// for(let key in obj){
//    if(obj[key]>maxCount){
//     maxCount = obj[key]
//     maxCountElement = key
//    }
// }

// console.log(obj)
// console.log(maxCount)
// console.log(maxCountElement)


// const obj = {}

//      obj[2] = 1

//      console.log(typeof Object.keys(obj)[0])


// __________________________________________________________________________________________________________________

// Q4. Reverse the word

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

// _______________________________________________________x___________________________________________________________

// Q5. Reverse the word in a sentence

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

//   let input = "I am coder"

//   let result = input.split(" ").reverse().join(" ")

// let result = input.split(" ").map((word)=>word.split("").reverse().join("")).join(" ")

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



// ___________________________________________________________________________________________________________________________

// Q6. Check if the string is palindrome or not?

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

// __________________________________________________________________________________________________________________

// Q7. find the second largest element in the array 

// const arr = [1, 2, 3, 1, 2, 4, 6, 10]

// let largest = -Infinity
// let secondLargest = -Infinity

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > largest) {
//     secondLargest = largest
//     largest = arr[i]
//   }else if (secondLargest<arr[i] && largest>arr[i]) {
//     secondLargest = arr[i]
//   }
// }

//  console.log(largest)
//  console.log(secondLargest)


// __________________________________________________________________________________________________________________

// find the second smallest element in the array 

// const arr = [1, 2, 3, 1, 2, 4, 6, 10]

// let smallest = Infinity
// let secondSmallest = Infinity

// for(let i=0;i<arr.length;i++){
//   if(arr[i]<smallest){
//     secondSmallest = smallest
//     smallest = arr[i]
//   }else if(arr[i]<secondSmallest && secondSmallest>smallest && arr[i] != smallest){
//     secondSmallest = arr[i]
//   }
// }

// console.log(smallest)
// console.log(secondSmallest)


// _______________________________________________________________________________________________________________________

// Q1. Find missing element

// arr = [1,2,4,5,6]  //output = 3
// arr = [8,3,4,1,6,2,7] //output = 5

// let arr = [1,2,4,5,6] 
// let arr = [8,3,4,1,6,2,7]  

// function findMissingItem (arr) {
//   let n = arr.length + 1
//   let expectedSum = n*(n+1)/2

//   let actualSum = 0
  
//   for(let i =0;i<arr.length;i++){
//     actualSum += arr[i]
//   }
//   return expectedSum - actualSum
// }

// let result = findMissingItem(arr)

// console.log(result)




// let rev;

// function reverse (x){
//     for(let i=x.length-1;i>0;i--){
//         rev+=x[i]
//     }
// }

// let result = reverse(321)

// console.log(result)
// console.log(rev)

// let nums = [1,2,[3,4,[5,6],7],8]

// let result = []

// function flatArr (arr){
//   for(let i=0;i<arr.length;i++){
//     if(!Array.isArray(arr[i])){
//         result.push(arr[i])
//     }else{
//         flatArr(arr[i])
//     }
//   }
// }

// flatArr(nums)

// console.log(result)


