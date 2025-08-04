
____________________________________________Basic Array Methods_________________________________________

Array length
Array toString()
Array at()
Array join()
Array pop()
Array push()
Array shift()
Array unshift()
Array delete()
Array concat()
Array flat()
Array slice()
Array splice()
Array toSpliced()


_______________________________________________Array Search Methods____________________________________________

Array indexOf()
Array lastIndexOf()
Array includes()
Array find()
Array findIndex()
Array findLast()
Array findLastIndex()


______________________________________________________Alphabetic Sort_______________________________________

ES2023 added the toSorted() method as a safe way to sort an array without altering the original array.

The difference between toSorted() and sort() is that the first method creates a new array, keeping the original array unchanged, while the last method alters the original array.


Array.sort()            change original array
Array.reverse()               \\
Array.toSorted()         create new array 
Array.toReversed()             \\


_________________________________________________Numeric Sort_____________________________________

Array.sort((a,b)=>a-b)              assending order
Array.sort((a,b)=>b-a)              decending order


______________________________________________Array Iteration Methods________________________________________

Array iteration methods operate on every array item.

Array forEach
Array map()
Array filter()
Array reduce()
Array every()
Array some()
Array from()
Array keys()
Array entries()
Array Spread (...)
Array Rest (...)











🔁 Basic Iteration and Access
Print all even numbers from an array.

Sum all elements of an array.

Find the maximum number in an array.

Find the index of a given element (e.g., 5) in an array.

🧪 Filtering and Mapping
Filter all names longer than 5 characters from a string array.

Map an array of numbers to their squares.

Given an array of prices, add 18% GST to each and return the new array.

Convert an array of strings to uppercase using .map().

🔍 Search and Condition Checking
Use .includes() to check if the array contains the word "apple".

Use .some() to check if any number is greater than 100.

Use .every() to check if all numbers are positive.

Use .find() to return the first string that starts with "A".

🔄 Modifying Arrays
Reverse an array without using .reverse() (try with a loop).

Use .sort() to sort an array of numbers in ascending order.

Remove duplicates from an array using .filter() and .indexOf().

🧩 Chaining Methods
From an array of student objects ({ name, score }), return names of students who scored more than 80.

From an array of numbers, filter even numbers, double them, and sum the result.