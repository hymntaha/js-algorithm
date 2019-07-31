class Node{
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList{
  constructor(){
    this.head = null;
    this.tail = null;
    this.length = 0
  }
  push(val){
    let newNode = new Node(val);
    if(!this.head){
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this
  }
  traverse(){
    let current = this.head;
    while(current){
      console.log(current.val);
      current = current.next;
    }
  }
}

let list = new SinglyLinkedList()
list.push('Hola')


