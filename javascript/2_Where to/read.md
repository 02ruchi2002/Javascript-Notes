

In HTML, JavaScript code is inserted between <script> and </script> tags.

[1] JavaScript in <head>
[2] JavaScript in <body>

important ->

Placing scripts at the bottom of the <body> element improves the display speed, 
because script interpretation slows down the display.

[3] External JavaScript

An external script can be referenced in 3 different ways:

* With a full URL (a full web address)
  
     <script src="https://www.w3schools.com/js/myScript.js"></script>

* With a file path (like /js/)

    <script src="/js/myScript.js"></script>

* Without any path

   <script src="myScript.js"></script>


JavaScript can "display" data in different ways:

(1) Writing into an HTML element, using innerHTML or innerText.

     ->  Use innerHTML when you want to change an HTML element.
     -> Use innerText when you only want to change the plain text.

(2) Writing into the HTML output using document.write().

(3) Writing into an alert box, using window.alert().


(4) Writing into the browser console, using console.log().
     
     ->For debugging purposes, you can call the console.log() method in the browser to display data.