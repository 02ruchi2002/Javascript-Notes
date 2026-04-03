// ________________________________________________  Valid Parentheses    O(n)____________________________________________

// https://www.youtube.com/watch?v=NlHupEeDXzY



let string = "({[]})"

const valideParentheses = (str) => {
    let stack = []
    for (let i = 0; i < str.length; i++) {
        if (str[i] === "(" || str[i] === "{" || str[i] === "[") {
            stack.push(str[i])                                             // if open brackets push inside stack
        } else {
            if (stack.length == 0)   return false;                          // if closing brackets > open brackets

            if (stack[stack.length - 1] == "(" && str[i] == ")" ||          //  if str[i] == stack[peek] pop peek item of stack 
                stack[stack.length - 1] == "{" && str[i] == "}" ||          //  and keep cheaking and poping until condition 
                stack[stack.length - 1] == "[" && str[i] == "]") {          //   get false or stack length become 0
                stack.pop();
            } else {
                return false;                                               // if not equale than return;
            }

        }
    }
    return stack.length === 0;             // return true                  //  if stack length is == 0 that means string 
}                                                                         //   is valid parenthese

let result = valideParentheses(string)

console.log(result)