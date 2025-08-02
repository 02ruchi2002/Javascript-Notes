The var keyword was used in all JavaScript code from 1995 to 2015.

The let and const keywords were added to JavaScript in 2015.


1. Always declare variables

2. Always use const if the value should not be changed

3. Always use const if the type should not be changed (Arrays and Objects)

4. Only use let if you can't use const


1 Names can contain letters, digits, underscores, and dollar signs.
2 Names must begin with a letter.
3 Names can also begin with $ and _ (but we will not use it in this tutorial).
4 Names are case sensitive (y and Y are different variables).
5 Reserved words (like JavaScript keywords) cannot be used as names.


(1) let and const have block scope.

(2) let and const can not be redeclared.

(3) let and const must be declared before use.

(4) let and const does not bind to this.

(5) let and const are not hoisted.


var does not have to be declared.

var is hoisted.

var binds to this.



                              Constant Objects and Arrays
The keyword const is a little misleading.

It does not define a constant value. It defines a constant reference to a value.

Because of this you can NOT:

    *  Reassign a constant value
    *  Reassign a constant array
    *  Reassign a constant object


But you CAN:

   * Change the elements of constant array
   * Change the properties of constant object