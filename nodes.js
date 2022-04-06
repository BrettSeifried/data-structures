class LinkedListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }

  add(node) {
    if (!this.next) {
      // free spot for a new node friend
      this.next = node;
    } else {
      // Go be a friend of my friend
      this.next.add(node);
    }
  }

  getList() {
    // Is no more nodes?
    // Return in
    if (!this.next) {
      return this.data;
      // Is there another node?
      // Add it to the list, re run
    } else {
      return this.data + this.next.getList();
    }
  }

  // Marty's Magic
  //   getList() {
  //       if(!this.next) return this.data;
  //       return `${this.data} ${this.next.getList()}`
  //   }

  remove(node) {
    // is this the node to remove? if so return it's next
    // so that can be the new next of the claler
    if (this === node) return this.next;
    // no more nodes? return undeifned to signal not found
    if (!this.next) return;
    // get the potentially new next node
    const newNext = this.next.remove(node);
    // and assign if provided
    if (newNext !== undefined) this.next = newNext;
  }
}

const root = new LinkedListNode('A');
const nodeB = new LinkedListNode('B');
root.add(nodeB);
console.log(root.getList()); // 'A B'
const nodeC = new LinkedListNode('C');
const nodeD = new LinkedListNode('D');
const nodeE = new LinkedListNode('E');
root.add(nodeC);
root.add(nodeD);
root.add(nodeE);
console.log(root.getList()); // 'A B C D E'

// ----------------------------------------//

class BinaryTreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  add(node) {
    // Implement me!
    // Does node have a left friend?
    if (this.left > node) {
      // add friend to left side
      !this.left ? (this.left = node) : this.left.add(node);
    } else {
      // go to my right
      !this.right ? (this.right = node) : this.right.add(node);
    }
  }
}

const B = new BinaryTreeNode('B');
console.log(B);
const A = new BinaryTreeNode('A');
console.log(A);
const C = new BinaryTreeNode('C');
console.log(C);
const D = new BinaryTreeNode('D');
console.log(D);

// B will be the root of the tree:
B.add(A);
B.add(D);
B.add(C);
console.log(B);

//-------------------------------------------//
class PersonTreeNode {
  constructor(person) {
    this.value = person.name;
    this.person = person;
    this.left = null;
    this.right = null;
  }

  add(node) {
    if (this.left > node) {
      // add friend to left side
      !this.left ? (this.left = node) : this.left.add(node);
    } else {
      // go to my right
      !this.right ? (this.right = node) : this.right.add(node);
    }
  }

  findPerson(name) {
    // Implement me!
    // if name === name Return
    if (this.person === name) {
      return this.value;
    }

    if (this.name > name) {
      // if name !== name, go left
      this.left.findPerson(name);
    } else {
      // if !== name, go right
      this.right.findPerson(name);
    }
    // go down tree?
  }
}

let person = root.find('Nelson');
let person2 = root.find('Foo');

console.log(PersonTreeNode(person));
