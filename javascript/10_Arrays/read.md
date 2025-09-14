
 console.log(typeof fruits)                                        object
 console.log(Array.isArray(fruits))                                true
 console.log(fruits instanceof Array)                              true



____________________________________________Basic Array Methods_________________________________________

Array length
Array toString()
Array at()
Array join(" ")
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


__________________________________Array Search Methods____________________________________________

Array indexOf()
Array lastIndexOf()
Array includes()
Array find()
Array findIndex()
Array findLast()
Array findLastIndex()


________________________________________________Alphabetic Sort_______________________________________

ES2023 added the toSorted() method as a safe way to sort an array without altering the original array.

The difference between toSorted() and sort() is that the first method creates a new array, keeping the original array unchanged, while the last method alters the original array.


Array.sort()            change original array
Array.reverse()               \\
Array.toSorted()         create new array 
Array.toReversed()             \\


_________________________________________________Numeric Sort_____________________________________

Array.sort((a,b)=>a-b)              assending order
Array.sort((a,b)=>b-a)              decending order


_______________________________________Array Iteration Methods________________________________________

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

1. Print all even numbers from an array.

2. Sum all elements of an array.

3. Find the maximum number in an array.

4. Find the index of a given element (e.g., 5) in an array.

🧪 Filtering and Mapping

5. Filter all names longer than 5 characters from a string array.

6. Map an array of numbers to their squares.

7. Given an array of prices, add 18% GST to each and return the new array.

8. Convert an array of strings to uppercase using .map().

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