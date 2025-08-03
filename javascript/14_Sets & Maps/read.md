


____________________________________________________Set_____________[Array]____________________________________________________
A JavaScript Set is a collection of unique values.

Each value can only occur once in a Set.

The values can be of any type, primitive values or objects.


const letters = new Set();


_________Method___________

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

letters.clear()



____________________________________________________Map_____________{Object}____________________________________________________


const fruites = new Map();


_________Method_________
 
1. set()

fruites.set("mango",100)
fruites.set("kiwi",400)
fruites.set("litchi",800)
fruites.set("apple",500)

2. get()

fruits.get("apples");    // Returns 500


2. delete(value)

letters.delete("apple")

3. has(value)        true/false

fruits.has("orange")


4. clear()	Removes all values

fruits.clear()


5.	map.forEach((value, key) => console.log(key, value))



----------------------------------------------------- JavaScript Objects vs Maps --------------------------------------------------

      Object	                                                                        Map
                                                                      
Not directly iterable	                                                     Directly iterable
Do not have a size property                                         	     Have a size property
Keys must be Strings (or Symbols)                                   	     Keys can be any datatype
Keys are not well ordered	                                                 Keys are ordered by insertion
Have default keys	                                                         Do not have default keys