


____________________________________________________Set_____________[Array]____________________________________________________
A JavaScript Set is a collection of unique values.

Each value can only occur once in a Set.

The values can be of any type, primitive values or objects.


const letters = new Set(["z"]);


_________Method___________

0. letters.size

1. add(value)

letters.add("a")
letters.add("b")
letters.add("c")
letters.add("d")

2. delete(value)

letters.delete("b")

3. has(value)        true/false

letters.has("c")


4. clear()	Removes all values

6. keys()

7. values()



____________________________________________________Map_____________{Object}____________________________________________________


const fruits = new Map();


_________Method_________

0. fruites.size
 
1. set()

fruits.set("mango",100)
fruits.set("kiwi",400)
fruits.set("litchi",800)
fruits.set("apple",500)

2. get()

fruits.get("apples");    // Returns 500


2. delete(value)

fruits.delete("apple")

3. has(value)        true/false

fruits.has("orange")


4. clear()	Removes all values

fruits.clear()


5. fruits.forEach((value, key) => console.log(key, value))

6. keys()

7. values()



----------------------------------------------------- JavaScript Objects vs Maps --------------------------------------------------

      Object	                                                                        Map
                                                                      
Not directly iterable	                                                     Directly iterable
Do not have a size property                                         	     Have a size property
Keys must be Strings (or Symbols)                                   	     Keys can be any datatype
Keys are not well ordered	                                                 Keys are ordered by insertion
Have default keys	                                                         Do not have default keys



============================= Set Logic => W3 Schols 

0. union() 
1. difference()
2. intersection()
3. isDisjointFrom()
4. isSubsetOf()
5. isSupersetOf()
6. symmetricDifference()