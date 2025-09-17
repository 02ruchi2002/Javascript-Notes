
__________________Destructuring____________________ARRAY ,  OBJECT , STRING________________________________


Destructuring is a shorthand way to unpack values from arrays or properties from objects into variables.




__________________Destructuring Maps_______________________

const fruits = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200]
]);

let text = "";
for (const [key, value] of fruits) {
  text += key + " is " + value;
}

_________________________________________________________________________QUESTIONS____________________________


🟢 Basic Destructuring Tasks

1. Array Destructuring:
const colors = ["red", "green", "blue"];
// Task: Extract the first and second color into variables


2. Object Destructuring:
const user = { name: "Alice", age: 25 };
// Task: Destructure name and age into variables


3. Function Parameter Destructuring:
function greet(user) {
  // Destructure name from user and log "Hello, name"
}
greet({ name: "Bob", age: 30 });


🟡 Intermediate Tasks


4. Destructuring with Renaming:
const profile = { username: "john_doe", email: "john@example.com" };
// Task: Destructure and rename 'username' to 'user'


5. Default Values in Destructuring:
const settings = { theme: "dark" };
// Task: Destructure theme and fontSize (default to 16 if not present)


6. Destructure Nested Objects:
const person = {
  name: "Emma",
  address: {
    city: "Delhi",
    zip: 110011
  }
};
// Task: Destructure city from address


7. Destructure in Arrays with Skip:
const numbers = [1, 2, 3, 4, 5];
// Task: Destructure only the first and third numbers


🔴 Advanced Tasks

8. Destructuring with Rest Operator:
const fruits = ["apple", "banana", "cherry", "date"];
// Task: Get first fruit, and the rest in another array


9. Mixed Destructuring:
const response = {
  status: "ok",
  data: {
    user: {
      id: 1,
      name: "Sarah"
    }
  }
};
// Task: Destructure status and name from response


10. Function Returning Object:
function getUser() {
  return {
    id: 101,
    info: {
      name: "David",
      age: 28
    }
  };
}
// Task: Destructure id and name from the return value




_______________________________________________________________________________________________________________ANSWER___________________


1. const [first,second] = colors



2. const {age,naam} = user


3. function greet(user) {
    let {name,...rest} = user
    console.log("hello"+ name)
}
greet({ name: "Bob", age: 30 });


4. const {username:user,email} = profile

5. let {theme,fontsize = 16} = settings

6. const {name, address:{city,zip}} = person

7. const [first,,third,...rest] = numbers

8. const [first,...rest] = fruits

9. const {status,data:{user:{id,name}}} = response

10. const {id,info:{name,age}} = getUser()
