/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    const node = new Node(val)
    if (this.head === null) {
      this.head = node;
      this.tail = node;
    }
    this.tail.next = node;
    this.tail = node;
    this.length++;
    return undefined
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    const node = new Node(val)
    if (this.head === null) {
      this.head = node;
      this.tail = node;
    }
    let currentHead = this.head;
    this.head = node;
    this.head.next = currentHead;
    this.length++;
    return undefined
  }

  /** pop(): return & remove last item. */

  pop() {
    if (!this.tail) {
      throw `Linked List is empty.`
    }
    if (this.length === 1) {
      poppedNode = this.head;
      this.head = null;
      this.tail = null;
      return poppedNode;
    }
    let index = 0;
    let node = this.head
    while (index !== this.length - 2) {
      node = node.next
      index++;
    }
    const prevLastNode = node.next;
    const newLastNode = node;
    newLastNode.next = null
    this.tail = newLastNode;
    this.length--;
    return prevLastNode
  }

  /** shift(): return & remove first item. */

  shift() {
    if (!this.head) {
      throw `Linked List is empty.`
    }
    let currentHead = this.head;
    this.head = currentHead.next;
    this.length--;
    return currentHead;
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    if (idx >= this.length) {
      throw `Index of ${idx} does not exist in this linked list.`
    }
    let count = 0;
    function traverse(node) {
      if (count === idx) {
        return node;
      }
      count++;
      return traverse(node.next);
    }
    return traverse(this.head);
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    if (idx >= this.length) {
      throw `Index of ${idx} does not exist in this linked list.`
    }
    let count = 0;
    function traverse(node) {
      if (count === idx) {
        node.val = val;
        return this;
      }
      count++;
      return traverse(node.next);
    }
    return traverse(this.head);
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    if (idx >= this.length) {
      throw `Index of ${idx} does not exist in this linked list.`
    }
    let count = 0;
    function traverse(node) {
      if (count === idx - 1) {
        const value = new Node(val);
        let nodeToSwap = node.next;
        node.next = value;
        value.next = nodeToSwap;
        return this;
      }
      count++;
      return traverse(node.next);
    }
    return traverse(this.head);

  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    if (idx >= this.length) {
      throw `Index of ${idx} does not exist in this linked list.`
    }
    let count = 0;
    function traverse(node) {
      if (count === idx - 1) {
        let nodeToSwap = node.next.next;
        node.next = nodeToSwap;
        return this;
      }
      count++;
      return traverse(node.next);
    }
    return traverse(this.head);
  }

  /** average(): return an average of all values in the list */

  average() {
    if (!this.head) return 0
    let sum = 0;
    let index = 0;
    let length = this.length;
    function traverse(node) {
      if (index === length) return;
      index++;
      sum += node.val;
      return traverse(node.next);
    }
    traverse(this.head);
    return (sum / this.length);
  }
}

const list = new LinkedList();
list.push(1);
list.push(2);
list.push(3);
list.push(99)
console.log(list.pop())
console.log(list)
module.exports = LinkedList;
