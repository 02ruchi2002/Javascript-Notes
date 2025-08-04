
There are generally 3 types of JavaScript date input formats:

    Type            	Example

1. ISO Date    	     "2015-03-25" (The International Standard)
2. Short Date  	     "03/25/2015"
3. Long Date	     "Mar 25 2015" or "25 Mar 2015"



const date = new Date();
________________________________________________________________________________________Date Get Methods

1. getFullYear()	                          Get year as a four digit number (yyyy)
2. getMonth()	                              Get month as a number (0-11)
3. getDate()	                              Get day as a number (1-31)
4. getDay()                                   Get weekday as a number (0-6)
5. getHours()	                              Get hour (0-23)
6. getMinutes()	                              Get minute (0-59)
7. getSeconds()	                              Get second (0-59)
8. getMilliseconds()	                      Get millisecond (0-999)
9. getTime()	                              Get time (milliseconds since January 1, 1970)



const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const d = new Date("2021-03-25");
let month = months[d.getMonth()];



_____________________________________________________________________________________________Set Date Methods

1. setDate()	                   Set the day as a number (1-31)
2. setFullYear()      	           Set the year (yyyy)
3. setHours()	                   Set the hour (0-23)
4. setMilliseconds()	           Set the milliseconds (0-999)
5. setMinutes()	                   Set the minutes (0-59)
6. setMonth()	                   Set the month (0-11)
7. setSeconds()          	       Set the seconds (0-59)
8. setTime()	                   Set the time (milliseconds since January 1, 1970)