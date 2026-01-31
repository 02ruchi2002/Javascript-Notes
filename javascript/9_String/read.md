
https://www.w3schools.com/js/js_string_methods.asp


All string methods return a new value.

They do not change the original string.

Strings are immutable: Strings cannot be changed, only replaced.



length	    Returns the length of a string
at()	    Returns an indexed character from a string
concat()	Returns two or more joined strings
includes()	Returns if a string contains a specified value
indexOf()	Returns the index (position) of the first occurrence of a value in a string


isWellFormed()	Returns true if a string is well formed
lastIndexOf()	Returns the index (position) of the last occurrence of a value in a string
localeCompare()	Compares two strings in the current locale
match()	Searches a string for a value, or a regular expression, and returns the matches
matchAll()	Searches a string for a value, or a regular expression, and returns the matches
padEnd()	Pads a string at the end
padStart()	Pads a string from the start
prototype	Allows you to add properties and methods to an object

repeat()	Returns a new string with a number of copies of a string
replace()	Searches a string for a pattern, and returns a string where the first match is replaced
replaceAll()	Searches a string for a pattern and returns a new string where all matches are replaced

search()	Searches a string for a value, or regular expression, and returns the index (position) of the match

slice()	     Extracts a part of a string and returns a new string
             The method takes 2 parameters: start position, and end position (end not included).

startsWith()	Checks whether a string begins with specified characters
endsWith()	Returns if a string ends with a specified value
substring()	Extracts characters from a string, between two specified indices (positions)

toLocaleLowerCase()	Returns a string converted to lowercase letters, using the host's locale
toLocaleUpperCase()	Returns a string converted to uppercase letters, using the host's locale
toLowerCase()	Returns a string converted to lowercase letters
toUpperCase()	Returns a string converted to uppercase letters
toString()	Returns a string or a string object as a string
toWellFormed()	Returns a string where "lone surrogates" are replaced with the Unicode replacement character

trim()	Returns a string with removed whitespaces
trimEnd()	Returns a string with removed whitespaces from the end
trimStart()	Returns a string with removed whitespaces from the start
valueOf()	Returns the primitive value of a string or a string object


-------------- Converting a String to an Array ---------------

If you want to work with a string as an array, you can convert it to an array.


split()	Splits a string into an array of substrings


--->  In JavaScript, there’s no built-in reverse() method for strings

1] split("") → converts string to array of characters

2] reverse() → reverses the array

3] join("") → converts array back to string

 const reversed = str.split("").reverse().join("");