
 console.log(typeof fruits)                                        object
 console.log(Array.isArray(fruits))                                true
 console.log(fruits instanceof Array)                              true



________________________________________Basic Array Methods_________________________________________

ArrayName.length
Array.at()

ArrayName.toString()

--------------------------------------------------- Convert arr into string -----------------------------------------------------

Array.join(" ")     The join() method also joins all array elements into a string.
                    It behaves just like toString(), but in addition you can specify the separator:  


Array.pop()
Array.push()
Array.shift()
Array.unshift()


Array delete()


Array.concat()


Array.flat()


Array.slice()
Array.splice()

Array.toSpliced()


__________________________________Array Search Methods____________________________________________

ArrayName.indexOf()  " " ,  44
Array.lastIndexOf()
Array.includes()     " "     55
Array.find()
Array.findIndex()
Array.findLast()
Array.findLastIndex()


______________________________________________Alphabetic Sort_______________________________________

ES2023 added the toSorted() method as a safe way to sort an array without altering the original array.

The difference between toSorted() and sort() is that the first method creates a new array, keeping the original array unchanged, while the last method alters the original array.


ArrayName.sort()            change original array
ArrayName.reverse()               \\

ArrayName.toSorted()         create new array 
ArrayName.toReversed()             \\




________________________________________________  Numeric Sort  __________________________________________________________________


ArrayName.sort((a,b)=>a-b)              assending order
ArrayName.sort((a,b)=>b-a)              decending order




_____________________________________  Array Iteration Methods  __________________________________________________________________


Array iteration methods operate on every array item.

ArrayName.forEach()

Array.map()
Array.filter()
Array.reduce()

Array.every()
Array.some()
Array.from()
Array.keys()
Array.entries()

Array Spread (...)
Array Rest (...)







🔁 Basic Iteration and Access

1. Print all even numbers from an array.

2. Sum all elements of an array.

3. Find the maximum number in an array.

4. Find the index of a given element (e.g., 5) in an array.



🧪 Filtering and Mapping

5. Filter all names longer than 5 characters from a string array.

6. Map an array of numbers to their squares.

7. Given an array of prices, add 18% GST to each and return the new array.

8. Convert an array of strings to uppercase.

🔍 Search and Condition Checking

9. check if the array contains the word "apple".

10. check if any number is greater than 100.

11. check if all numbers are positive.

12. return the first string that starts with "A".



🔄 Modifying Arrays

13. Reverse an array without using .reverse() (try with a loop).

14. sort an array of numbers in ascending order.

15. Remove duplicates from an array.



🧩 Chaining Methods

16. From an array of student objects ({ name, score }), return names of students who scored more than 80.

17. From an array of numbers, filter even numbers, double them, and sum the result.




 _______________________ check if PRIME NO _____ divide by 1 and itself__________________1,3,5,7,11,13,17_________________________


function checkIsPrime (num){
let flag = true;

for(let i=2;i<num;i++){
  if(num%i == 0){
    console.log("not a prime no")
    flag = false;
  }
}
if(flag){
  console.log("prime no")
}
}

checkIsPrime(7)



_______ hume ek (n) naam ka parameter diya h ya (n) koi bhi no ho sakata h 5,10,15,20 hume itne hi prime no print krwane h _______


Write a program to store first n prime numbers in an array . After storing return the array.﻿

Input:-

n=5

Output:- Return the output in the form of an array.

2

3

5

7

11

function prime_numbers(n){
    let start = 2;
    let counter = 0;
    let primes = [];
    while (counter < n) {
        let flag = true;
        for (let i = 2; i < start; i++){
            if (start % i == 0) {
                flag = false;
                break;
            }
        }
        if (flag) {
            <!-- console.log(start) -->
            <!-- primes.push(start) -->
            primes[counter] = start
            counter = counter + 1
        }
        start = start + 1
    }

    return primes;  
}


______________________________________ Subarrays  _______________with for loop ___________________________________________

i = starting point
j = end point of the subarray
k = travrsing from i to j and collectiong item

let arr = [1,2,3,4,5]

for(let i=0;i<arr.length;i++){
  for(let j=i;j<arr.length;j++){
    let str = "";
    for(let k=i;k<=j;k++){
      str += arr[k]
    }
    console.log(str)
  }
}

___________________________________ Subarrays  _______________with while loop ___________________________________________

n(n+1)                                   
_______
  2


let arr = [1,2,3,4,5]     [1] [1,2] [1,2,3,4] [1,2,3,4,5] 
                          [2] [2,3] [2,3,4] [2,3,4,5]
                          [3] [3,4] [3,4,5]
                          [4] [4,5]
                          [5]
                        
let i =0;
while(i<arr.length){
  let j=i
  while(j<arr.length){
    let str = "";
    let k=i;
    while(k<=j){
      str += arr[k]
      k++
    }
    j++
    console.log(str)
  }
  i++
}

------------------------------------------------  Maximum Sum Subarray  ---------------------------------------------------------



🚀 Kadane’s Algorithm (O(n)) Time complexity

const maxSumSubArr = (arr) => {
  let maxSum = arr[0];
  let currentSum = arr[0];

  for(let i = 1; i < arr.length; i++){
    currentSum = Math.max(arr[i], currentSum + arr[i]);
    maxSum = Math.max(maxSum, currentSum);
  }

  return maxSum;
}

console.log(maxSumSubArr([5,2,-4,-5,3,-1,2,3,1]))


------------------------------------------------------------

function find_maximum_subarray(arr,length){
    let max = -Infinity;
    for (let i = 0; i < length; i++){
        let sum = 0;
        for (let j = i; j < length; j++) {
            sum += arr[j]

            max = Math.max(max, sum)
        }
    }
    return max
}

----------------------------------------------------------

const maxSumSubArr = (arr) =>  {
  let max = 0;
  let maxSubArr;
  for(let i=0;i<arr.length;i++){
    for(let j=i;j<arr.length;j++){
      let sum = 0;
      for(let k=i;k<=j;k++){
        sum += arr[k]
      }
      let nums = []
      if(sum>max){
        max=sum
      for(let l=i;l<=j;l++){
        nums.push(arr[l])
      }
      }
      if(nums.length>0){
        maxSubArr = nums
      }
    }
  }
  console.log(max)
  return result;
}

// let result = maxSumSubArr([1,2,3,4,5])
let result = maxSumSubArr([5,2,-4,-5, 3,-1,2,3,1])

console.log(result)



-------------------------------------------------  Sum of Odd length Subarrays  -------------------------------------------------

// let arr = [5,2,-4,-5,3]

let count = 0;
for(let i=0;i<arr.length;i++){
  for(let j=i;j<arr.length;j++){
      if((j-i+1) % 2 === 1){
        count = count + 1
      }
  }
}
  console.log(count)


-----------------------------------------------  Find missing element  --------------------------------------------------------
  

arr = [1,2,4,5,6]  //output = 3
arr = [8,3,4,1,6,2,7] //output = 5

let arr = [1,2,4,5,6] 
let arr = [8,3,4,1,6,2,7]  

function findMissingItem (arr) {
  let n = arr.length + 1
  let expectedSum = n*(n+1)/2

  let actualSum = 0
  
  for(let i =0;i<arr.length;i++){
    actualSum += arr[i]
  }
  return expectedSum - actualSum
}

let result = findMissingItem(arr)

console.log(result)


----------------------------------------------  Prefix  & Suffix sum  -----------------------------------------------------------


let arr = [2, 4, 6, 8];      output [2,6,12,20]

let prefix = []

let ele = 0;

for(let i=0; i<arr.length; i++){
   ele += arr[i]
   prefix.push(ele)
}

console.log(prefix)


------------------- SUFFIX --------------------------------

1) let arr = [2, 4, 6, 8];        output [8,14,18,20]

let suffix = []

let ele = 0;

for(let i=arr.length-1; i>=0; i--){
   ele += arr[i]
   suffix.push(ele)
}

console.log(suffix)


 2)  Input [1, 2, 3, 4, 5]  Output:  [15,14,12,9,5]


[(1+2+3+4+5)=15, (2+3+4+5)=14, (3+4+5)=12, (4+5)=9, (5)=5]


________________________________________ 2D Arrays _____________________________________________________________________________


[1]  find the main diagonal of matrix and return in array

let arr = [[2,4,1],[10,5,11],[18,7,6]]

let mainDigonal = []

for(let i=0;i<arr.length;i++){
  for(let j=0;j<arr[i].length;j++){
    if(i===j){
      mainDigonal.push(arr[i][j])
    }
  }
}

console.log(mainDigonal)

--------------------------------------------------------------------------

[2]  find the sum of main diagonal in matrix

let arr = [[2,4,1],[10,5,11],[18,7,6]]

let mainDigonalSum = 0

for(let i=0;i<arr.length;i++){
  for(let j=0;j<arr[i].length;j++){
    if(i===j){
      mainDigonalSum += arr[i][j]
    }
  }
}

console.log(mainDigonalSum)

---------------------------------------------------------------------------

[3]  find the secondary diagonal and return in array

let arr = [[2,4,-1],[10,5,11],[18,-7,6]]

let diagonalArr = []

for(let i=0;i<arr.length;i++){
  for(let j=0;j<arr[i].length;j++){
    if(i+j === 2){
      diagonalArr.push(arr[i][j])
    }
  }
}

console.log(diagonalArr)

---------------------------------------------------------------------------

[4]  find the sum of secondary diganonal.

let arr = [[2,4,-1],[10,5,11],[18,-7,6]]

let diagonalSum = 0;

for(let i=0;i<arr.length;i++){
  for(let j=0;j<arr[i].length;j++){
    if(i+j === 2){
      diagonalSum += arr[i][j]
    }
  }
}

console.log(diagonalSum)

-------------------------------------------------------------------

[5]  find the absolute difference b/w two diagnoal of matrix

let arr = [[2,4,-1],[10,5,11],[18,-7,6]]

let mainDiagnoalSum = 0;
let secondDiagnoalSum = 0;

for(let i=0;i<arr.length;i++){
  for(let j=0;j<arr[i].length;j++){
    if(i===j){
      mainDiagnoalSum += arr[i][j]
    }
    if(i+j === arr[j].length - 1){
      secondDiagnoalSum += arr[i][j]
    }
  
  }
}

let absoluteDiff = Math.abs(mainDiagnoalSum-secondDiagnoalSum)

console.log(mainDiagnoalSum)
console.log(secondDiagnoalSum)

console.log(absoluteDiff)


_________________________________________________ Transpose a matrix _____________________________________________________________


let arr = [[2,4,-1],[-10,5,11],[18,-7,6]]

output [[2,-10,18],[4,5,-7], [-1,11,6]]


for(let i=0;i<arr.length;i++){
  for(let j=i; j<arr[i].length;j++){
    let temp = arr[i][j]
    arr[i][j] = arr[j][i]
    arr[j][i] = temp
  }
}

console.log(arr)


__________________________________________________ Bubble Sort _________________________________________________________________

https://www.youtube.com/watch?v=o4bAoo_gFBU


let arr = [5,2,7,9,3,76,9,22]


[i]

for(let i=0;i<arr.length-1;i++){
  for(let j=0;j<arr.length-1-i;j++){
    if(arr[j]>arr[j+1]){
      let temp = arr[j]
      arr[j] = arr[j+1]
      arr[j+1] = temp
    }
  }
}


[ii]

for(let i=0;i<arr.length-1;i++){
  let flag = false
  for(let j=0;j<arr.length-1-i;j++){
    if(arr[j]>arr[j+1]){
      let temp = arr[j]
      arr[j] = arr[j+1]
      arr[j+1] = temp
      flag = true;
    }
  }
  if(!flag){
    break;
  }
}

[iii]

for(let i=0;i<arr.length;i++){
  for(let j=i+1; j<arr.length;j++){
    if(arr[j]>arr[i]){
      let temp = arr[i]
      arr[i] = arr[j]
      arr[j] = temp
    }
  }
}


console.log(arr)


_____________________________________________________ Selection sort ____________________________________________________________

https://www.youtube.com/watch?v=9oWd4VJOwr0

let arr = [4,3,2,5,1]

for(let i=0;i<arr.length-1;i++){
  let min = i;
  for(let j=i+1;j<arr.length;j++){
    if(arr[j]<arr[min]){
      min = j
    }
  }
  let temp = arr[i]
  arr[i] = arr[min]
  arr[min] = temp
}

console.log(arr)

_________________________________________________ Insertion Sort _______________________________________________________________

    for (let i = 1; i < length; i++){
        let temp = arr[i]
        let j = i - 1
        while (j >= 0 && arr[j] > temp) {
            arr[j + 1] = arr[j]
            j--
        }
        arr[j+1] = temp 
    }