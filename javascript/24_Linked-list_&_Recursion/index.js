
// _____________________________________   first  ______________________________________________________________________________

// class Node{
//   constructor(val){
//     this.value= val;
//     this.next = undefined;
//   }
// }

// function insertion_start(a){
//   node = new Node()
// }


// let head = new Node(20)

// console.log(head)


// -------------------------------------------- INSERTION -------------------------------------------------------------------------




// function ListNode(val, next) {
//      this.val = (val===undefined ? 0 : val)
//      this.next = (next===undefined ? null : next)
// }



// _________________________ Insertion Start _______________________________


function insertion_start(head,valu){

 let  newNode = new ListNode(valu)
     newNode.next = head
     head = newNode
     return head;
}


// ==============================================

// class Node{
//   constructor(val){
//     this.value= val;
//     this.next = undefined;
//   }
// }

// function insertion_start(head,valu){
//   new_node = new Node(valu)
//   new_node.next = head;
//   return new_node;
// }


// let head = new Node(5)

// head = insertion_start(head,10)
// head = insertion_start(head,5)
// console.log(head)

// _______________________ Insertion End ___________________________


function insertion_end(head,valu){
  let newNode = new Node(valu)
  let temp = head

  while(temp.next != null){
    temp = temp.next
  }

  temp.next = newNode

  return head;

}


 insertion_end(head,40)
 insertion_end(head,50)

// __________________ Insertion Middle  _____________________________

// [5,8,10,12,18]  insert 15

function insertion_in_middle(head,position,val){

  let newNode = new ListNode(val)

   let prev = head

   for(let i=0;i<position-1;i++){
    prev = prev.next
   }

   newNode.next  = prev.next

   prev.next = newNode
   
   return head
}


// -------------------------------------------- DELETION -------------------------------------------------------------------------

// _________________________  Start Deletion _______________________________

head = head.next


// _________________________  End Deletion _______________________________

function deletion_in_end(head){
    temp = head;
    while(temp.next != null && temp.next.next != null){
      temp = temp.next
    }
    temp.next = null
}

deletion_in_end(head)


// _________________________  Middle Deletion _______________________________

[1,2,3,4,5,6,7]

// position 4  delete = 4

function deletion_in_middle(head,position){
   let prev = head

   for(let i=0;i<position-1;i++){
    prev = prev.next
   }

   let deletedNode = prev.next

   let nextNode  = deletedNode.next

   prev.next  = nextNode

   return head
}