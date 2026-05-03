
____________________________________ First _______________________________

class Stack{
  constructor(){
    this.top = -1;            // like index
    this.stack = [];          // arr
  }
}

------------- Operation on Stacks -----------

[1] push()
[2] pop()
[3] peek()
[4] isEmpty()
[5] full()

__________________________________ second  _______________________________ Push


class Stack{
  constructor(){
    this.top = -1;
    this.stack = [];
  }

  push(ele){
     this.top = this.top + 1;                                  // increasing index
     this.stack[this.top] = ele;                               // pushing num in arr at it index
  }

}

let x = new Stack()

x.push(4)
x.push(9)
x.push(11)

console.log(x.stack)

__________________________________ third _______________________________ Pop


class Stack{
  constructor(){
    this.top = -1;
    this.stack = [];
  }
  push(ele){
     this.top = this.top + 1;
     this.stack[this.top] = ele;
  }

  pop(){
    this.stack.pop()
    this.top = this.top-1;                           // decreasing index because we removing one item so index will also decrese
  }

}

let x = new Stack()

x.push(4)
x.push(9)
x.push(11)
x.push(19)
x.push(30)

// remove 30 becuse it isa last item of stack

x.pop()

console.log(x.stack)


__________________________________ forth _______________________________ peek


class Stack{
  constructor(){
    this.top = -1;
    this.stack = [];
  }
  push(ele){
     this.top = this.top + 1;
     this.stack[this.top] = ele;
  }
  pop(){
    this.stack.pop()
    this.top = this.top-1;    
  }

  peek(){
    return this.stack[this.top]
  }

}

let x = new Stack()

x.push(4)
x.push(9)
x.push(11)
x.push(19)
x.push(30)
x.push(90)
x.pop()

console.log(x.peek())

console.log(x.stack)

__________________________________ fifth _______________________________ isEmpty


class Stack{
  constructor(){
    this.top = -1;
    this.stack = [];
  }
  push(ele){
     this.top = this.top + 1;
     this.stack[this.top] = ele;
  }
  pop(){
    this.stack.pop()
    this.top = this.top-1;    
  }
  peek(){
    return this.stack[this.top]
  }

  isEmpty(){
    if(this.top === -1){
      return true;
    }else{
      return false;
    }
  }

}

let x = new Stack()

x.push(4)
x.push(9)
x.push(11)
x.push(19)
x.push(30)
x.push(90)
x.pop()

console.log(x.isEmpty())

console.log(x.stack)


__________________________________ sixth _______________________________ full()  

if there is any n value give the fix length of arr 

  top == n 




--------------------------------------------------------------------


let stack = []


stack.push(1)
stack.push(3)
stack.push(5)
stack.push(9)
stack.push(17)


stack.pop()


let peek = stack[stack.length-1]       // find peek element of arr peek means last item of arr not max

console.log(peek)


if(stack.length === 0){
  console.log("empty")
}else{

}


console.log(stack)



<!-- https://chatgpt.com/c/69ef69ad-cf7c-8321-a5d2-ab62bcebf235 -->