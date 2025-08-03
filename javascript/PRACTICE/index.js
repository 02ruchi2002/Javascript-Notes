

// 1. const [first,second] = colors



// 2. const {age,naam} = user


// 3. function greet(user) {
//     let {name,...rest} = user
//     console.log("hello"+ name)
// }
// greet({ name: "Bob", age: 30 });


// 4. const {username:user,email} = profile



// 6. const {name, address:{city,zip}} = person

// 7. const [first,,third,...rest] = numbers

// 8. const [first,...rest] = fruits

// 9. const {status,data:{user:{id,name}}} = response

// 10. const {id,info:{name,age}} = getUser()

// 5. Default Values in Destructuring:
const settings = { theme: "dark" };
// Task: Destructure theme and fontSize (default to 16 if not present)

let {theme,fontsize = 16} = settings

console.log(theme,fontsize)