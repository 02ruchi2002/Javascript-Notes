
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


// _________________________ Insertion Start _______________________________


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
  new_node = new Node(valu)
    temp = head
  while(temp.next != null){
    temp = temp.next
  }
  temp.next = new_node;
}


 insertion_end(head,40)
 insertion_end(head,50)

// __________________ Insertion Middle  _____________________________



// -------------------------------------------- DELETION -------------------------------------------------------------------------

// _________________________  Start Deletion _______________________________

head = head.next


// _________________________  End Deletion _______________________________

function deletion_in_end(head){
    temp = head;
    while(temp.next != null && temp.next.next != null){
      temp = temp.next
    }
    temp.next = temp.next.next
}

deletion_in_end(head)