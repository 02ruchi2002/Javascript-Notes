

_________________________________________________________________________________________________Finding HTML Elements


          Method                                                           	Description

1. document.getElementById("id")	                                      Find an element by element id

2. document.getElementsByTagName("name")                     	         Find elements by tag name

3. document.getElementsByClassName("name")                   	          Find elements by class name
 


__________________________________________________________________________________________________Changing HTML Elements

          Property	                                                           Description

1. element.innerHTML =  "new html content"	                   Change the inner HTML of an element

2. element.attribute = "new value"	                            Change the attribute value of an HTML element

3. element.style.property = "new style"	                     Change the style of an HTML element

4. element.setAttribute(attribute, value)	                 Change the attribute value of an HTML element



_________________________________________________________________________________________________Adding and Deleting Elements

         Method                                                                 	Description

1. document.createElement(element)                                       	Create an HTML element

2. document.removeChild(element)	                                         Remove an HTML element
  
3. document.appendChild(element)	                                       Add an HTML element

4. document.replaceChild(new, old)                                       	Replace an HTML element

5. document.write(text)	                                                       Write into the HTML output stream


________________________________________________________________________________________________________Adding Events Handlers

        Method                                                                    	Description

document.getElementById(id).onclick = function(){code}	                        Adding event handler code to an onclick event