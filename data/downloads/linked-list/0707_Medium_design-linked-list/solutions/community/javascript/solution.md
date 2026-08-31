# Easy JS Solution

**Author:** hbjORbj
**Votes:** 26
**Link:** [https://leetcode.com/problems/design-linked-list/solutions/924760/](https://leetcode.com/problems/design-linked-list/solutions/924760/)

---

```
class ListNode {
  constructor(val, next) {
    this.val = val == undefined ? 0 : val;
    this.next = next == undefined ? null : next;
  }
}

/**
 * Initialize your data structure here.
 */
var MyLinkedList = function() {
    this.head = null;
};

/**
 * Get the value of the index-th node in the linked list. If the index is invalid, return -1. 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
    if (index < 0 || index >= this.getLength()) return -1;
    let cur = this.head;
    for (let i = 0; i < index; i++) {
        cur = cur.next;
    }
    return cur.val;
};

/**
 * Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list. 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
    let node = new ListNode(val);
    node.next = this.head;
    this.head = node;
};

/**
 * Append a node of value val to the last element of the linked list. 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
    if (this.head == null) {
        this.addAtHead(val);
        return;
    }
    let node = new ListNode(val);
    let cur = this.head;
    while (cur.next !== null) {
        cur = cur.next;
    }
    cur.next = node;
};

/**
 * Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted. 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
    if (index === 0) {
        this.addAtHead(val);
        return;
    }
    if (index === this.getLength()) {
        this.addAtTail(val);
        return;
    }
    if (index > this.getLength()) return;
        
    let cur = this.head;
    let node = new ListNode(val);
    for (let i = 0; i < index-1; i++) {
        cur = cur.next;
    }
    let next = cur.next;
    cur.next = node;
    node.next = next;
};

/**
 * Delete the index-th node in the linked list, if the index is valid. 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
    if (index < 0 || index >= this.getLength()) return;
    if (index == 0) {
        this.head = this.head.next;
        return;
    }

    let cur = this.head;
    for (let i = 0; i < index-1; i++) {
        cur = cur.next;
    }
    cur.next = cur.next.next;
};

MyLinkedList.prototype.getLength = function() {
    let len = 0, cur = this.head;
    while (cur !== null) {
        cur = cur.next;
        len++;
    }
    return len;
};
```