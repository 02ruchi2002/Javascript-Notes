
class Queue{
constructor(){
    this.q=[];
    this.front = -1;
    this.rear = -1;
}

enqueue(ele){
  if(this.front == -1){
    this.front = this.front+1;
    this.rear = this.rear+1;
  }else{
    this.rear = this.rear+1
  }
  this.q[this.rear] = ele;
}

dequeue(){
  if(this.front === -1){
    console.log("Queue is empty");
    return;
  }

  if(this.front === this.rear){
    this.front = -1;
    this.rear = -1;
  }else{
    this.front = this.front + 1;
  }
}

isEpmty(){
  if(this.front  === -1 && this.rear === -1){
    console.log("empty")
  }else{
     console.log("not empty")
  }
}

get_first_ele(){
   return this.q[this.front]
}

get_size(){
  console.log(this.rear-this.front+1)
}

}

let queue1 = new Queue()

queue1.enqueue(1)
queue1.enqueue(2)
queue1.enqueue(3)
queue1.enqueue(4)
queue1.enqueue(5)

queue1.dequeue()

queue1.isEpmty()

queue1.get_first_ele()


console.log(queue1.q)



_________________________________________________FUNCTION CONSTRUCTOR___________________________________________________________




const MyQueue = function() {
    this.queue = [];
};


MyQueue.prototype.enQueue = function(x) {
    this.queue.push(x);
};


MyQueue.prototype.deQueue = function() {
    return this.stack.pop();
};

MyQueue.prototype.getFirtEle = function() {
    return this.queue[0];
};

MyQueue.prototype.isEmpty = function() {
    return this.queue.length === 0;
};

MyQueue.prototype.getSize = function() {
    return this.queue.length;
};


  const obj = new MyQueue()
  obj.push(10)
  obj.push(20)
  obj.push(30)
  obj.push(40)
  let param_2 = obj.pop()
  let param_3 = obj.peek()
  let param_4 = obj.empty()
  
  console.log(param_2)
  console.log(param_3)
  console.log(param_4)