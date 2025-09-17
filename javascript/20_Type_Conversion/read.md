🔹 Two Types of Conversion

1. Type Casting (Explicit Conversion) → You manually convert.

2. Type Coercion (Implicit Conversion) → JavaScript automatically converts.


🔹 1. Explicit Conversion (Type Casting)

To String
String(123);          "123"
(123).toString();     "123"
true + "";            "true"

To Number
Number("123");         123
Number("abc");         NaN
parseInt("42px");      42
parseFloat("3.14");    3.14
+"99"                  99 (unary + operator)

To Boolean
Boolean(1);           true
Boolean(0);           false
Boolean("");          false
Boolean("hi");        true
!!"hi"                true (double NOT trick)



🔹 2. Implicit Conversion (Type Coercion)

JavaScript automatically changes types in certain operations.

1. String Coercion

"5" + 2;            "52" (number → string)
"Hello" + true;     "Hellotrue"

2. Number Coercion

"5" - 2;             3  (string → number)
"5" * "2";           10
"5" / 2;             2.5

3. Boolean Coercion in Comparisons

0 == false;        true
"" == false;       true
" " == true;       false


🔹 Falsy and Truthy Values

Falsy (convert to false):
0, "", null, undefined, NaN, false

Truthy (convert to true):
Everything else ("0", "false", [], {}, etc.)

