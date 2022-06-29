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
    currentHead = this.head;
    this.head = node;
    this.head.next = currentHead;
    this.length++;
    return undefined
  }

  /** pop(): return & remove last item. */

  pop() {
    if (!this.tail) return undefined
    //change undefined to throw error



  }

  /** shift(): return & remove first item. */

  shift() {
    if (!this.head) return undefined;
    //change undefined to throw error
    let currentHead = this.head;
    this.head = currentHead.next;
    this.length--;
    return currentHead;
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    if (idx >= this.length) {
      return undefined;
      //change undefined to throw error
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
      return undefined;
      //change undefined to throw error
    }
    let count = 0;
    function traverse(node) {
      if (count === idx) {
        node.val = val
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
      return undefined;
      //change undefined to throw error
    }
    let count = 0;
    function traverse(node) {
      if (count === idx - 1) {
        const value = new Node(val);
        nodeToSwap = node.next;
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
      return undefined;
      //change undefined to throw error
    }
    let count = 0;
    function traverse(node) {
      if (count === idx - 1) {
        nodeToSwap = node.next.next;
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
    let sum = 0;
    function traverse(node) {
      sum += node.val;
      return traverse(node.next);
    }
    traverse(this.head);
    return (sum / this.length);
  }
}

module.exports = LinkedList;
