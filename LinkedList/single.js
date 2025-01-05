class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SingleLinkList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;

    return this;
  }

  pop() {
    if (!this.head) {
      return undefined;
    }
    if (this.length == 1) {
      this.head = null;
      this.tail = null;
      this.length = 0;
      return this;
    }
    let current = this.head;
    let newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    return current;
  }
}

let firstList = new SingleLinkList();
firstList.push("Bowofade");
firstList.push("Akindele");
firstList.push("Funmi");
firstList.push("Tolulope");
firstList.push("Noah");
firstList.push("Wisdom");

console.log(firstList.pop());
console.log(firstList.pop());
console.log(firstList.pop());
console.log(firstList.pop());
console.log(firstList.pop());
console.log(firstList.pop());
console.log(firstList.pop());
