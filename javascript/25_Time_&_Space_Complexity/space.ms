_________________________________  Space Complexity  ________________________________________________________

“Space complexity tells us how much extra memory an algorithm uses while running.”

“Space complexity is the amount of memory required by an algorithm with respect to input size.”

“Space complexity measures how much space an algorithm needs.”






1] Example 1 — O(1) Space

function sum(a, b) {
    return a + b;
}

Only a few variables are used.

Space Complexity:

O(1)

(Constant space)






2] Example 2 — O(n) Space

function copyArray(arr) {
    let newArr = [];

    for(let i = 0; i < arr.length; i++) {
        newArr.push(arr[i]);
    }

    return newArr;
}

A new array of size n is created.

Space Complexity:

O(n)





3] Complexity          	Meaning

    O(1)            	Constant space
    O(n)	            Extra space grows with input
    O(n²)            	2D matrix or nested storage
    O(log n)        	Recursive stack like Binary Search






---------   Important Point   ------

Space complexity includes:

i)   Variables
ii)  Arrays
iii)  Objects
iv)  Function call stack (recursion)







------   Time vs Space   -------

Type	                        Measures

Time Complexity             	Execution time
Space Complexity            	Memory usage