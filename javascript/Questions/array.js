// ___________________________________ index of items == target value __________________________________________________________

// let arr = [1,1,2,2,3,4,6,10]

// let target = 9

// let indexs = []

// for(let i=0;i<arr.length;i++){
//   for(let j=i+1;j<arr.length;j++){
//     if(arr[i]+arr[j] == target){
//       indexs.push(i,j)
//     }
//   }
// }

// console.log(indexs)


// _________________________________ duplicates/repeated elements _______________________________________________________________


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


// ______________________________________________ Palindrome ____________________________________________________________________

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

// ______________________________________ Second largest ________________________________________________________________________ 

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


// _____________________________________________ Second smallest _______________________________________________________________

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


// ________________________________________________  Find missing element_________________________________________________________


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


// _______________________________________________Flat arr__________________________________________________________________

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

// __________________________________________ Maximum in 2d array ________________________________________________________________


// let max = 0;
// let maxArr = []

// for(let i=0;i<arr.length;i++){
//   let sum = 0;
//   for(let j=0;j<arr[i].length;j++){
//     sum += arr[i][j]
//   }
//   if(sum>max){
//     max = sum
//     for(let k=0;k<arr[i].length;k++){
//       maxArr.push(arr[i][k])
//     }
//   } 
// }

// __________________________________________ Bubble sort ________________________________________________________________


// let arr = [4,3,2,5,1]

// for(let i=0;i<arr.length;i++){
// for(let j=i+1;j<arr.length;j++){
//   if(arr[j]>arr[i]){
//     let temp = arr[i]
//     arr[i] = arr[j]
//     arr[j] = temp
//   }
// }
// }

// console.log(arr)


// __________________________________________ Insertion sort ________________________________________________________________

// let arr = [4,3,2,5,1]

// for(let i=1;i<arr.length;i++){
//   let curr = arr[i]
//   let j = i-1
//   while(j >= 0 && curr<arr[j]){
//     arr[j+1] = arr[j]
//     j--
//   }
//   arr[j+1] = curr
  
// }

// console.log(arr)

// __________________________________________ Selection sort ________________________________________________________________


// let arr = [4,3,2,5,1]

// for(let i=0;i<arr.length;i++){
//   let min = i;
//   for(let j=i+1;j<arr.length;j++){
//     if(arr[min] < arr[j]){
//       min = j
//     }
//   }
//   let temp = arr[i]
//   arr[i] = arr[min]
//   arr[min] = temp
  
// }

// console.log(arr)

// __________________________________________ Max Difference bettween arr of item ________________________________________________________________


// let maxDiff = 0;

// for(let i=0;i<arr.length;i++){
//   if(Math.abs(arr[i]-arr[i+1]) >maxDiff){
//     maxDiff = Math.abs(arr[i] - arr[i+1])
//   }
// }

// console.log(maxDiff)

// _______________________________________ Maximum number from both Diagonals ___________________________________________________


// let arr = [[1, 2, 3],[4, 5, 6],[7, 8, 9]]

// let arr1 = []
// let arr2 = []

// for(let i=0;i<arr.length;i++){
//   for(let j=0;j<arr[i].length;j++){
//     if(i===j){
//       arr1.push(arr[i][j])
//     }
//     if(arr[i].length-1 == i+j){
//       arr2.push(arr[i][j])
//     }
//   }
// }

// let max1 = 0
// let max2 = 0

// for(let item of arr1){
//   if(item > max1){
//     max1 = item
//   }
// }


// for(let item of arr2){
//   if(item > max2){
//     max2 = item
//   }
// }

// // return [max1,max2]

// console.log(arr1)
// console.log(arr1)
// console.log(max1)
// console.log(max2)

// _______________________________________ Rotate Array  ___________________________________________________

// const  rotate =  (nums, k) => {
//     if (k >= nums.length) {
//         k = k % nums.length
//     }

//     function reverse(i,j,arr) {
//         while (i < j) {
//             let temp = arr[i]
//             arr[i] = arr[j]
//             arr[j] = temp
//             i++
//             j--
//         }
//         return arr;
//     }

//     reverse(nums.length-k,nums.length-1,nums)
//     reverse(0, nums.length - k - 1, nums)
//     reverse(0,nums.length-1,nums)

//     return nums
// };

// _______________________________________ Disappearing Elments  ___________________________________________________


// let arr = [4,3,2,7,8,2,3,1]     // Output [5,6]

// let start = 1;

// let result = []

// while(start<=arr.length){
//   if(arr.includes(start)){
//     count++
//   }else{
//     result.push(start)
//     count++
//   }
// }

// console.log(result)

// _______________________________________ Failed Students at end  ___________________________________________________

// Output : 1 3 2 11 6 -1 -7 -5
// let arr = [1, -1, 3, 2, -7, -5, 11, 6 ]

// let positive = []
// let negative = []
// for(let i=0;i<arr.length;i++){
//   if(arr[i] >= 0){
//     positive.push(arr[i])
//   }else{
//     negative.push(arr[i])
//   }
// }

// let result = positive.concat(negative)

// console.log(result)