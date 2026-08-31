# Simple TypeScript solution | Single-linked list

**Author:** i-love-typescript
**Votes:** 6
**Link:** [https://leetcode.com/problems/design-linked-list/solutions/1146158/](https://leetcode.com/problems/design-linked-list/solutions/1146158/)

---

Runtime: 132 ms, faster than 100.00% of TypeScript online submissions for Design Linked List.
Memory Usage: 46.6 MB, less than 48.28% of TypeScript online submissions for Design Linked List.

```
interface Node {
  val: number
  next: Node
}

class MyLinkedList {
  head: Node;
  size: number;
  
  constructor() {
    this.head = null
    this.size = 0
  }

  getNode(index: number): Node | null {
    if (index < 0 || index >= this.size) return null
    let count = 0
    let node = this.head
    while (count < index) {
      node = node.next
      count++
    }
    return node
  }
  
  get(index: number): number {
    const node = this.getNode(index)
    if (!node) return -1
    return node.val
  }

  addAtHead(val: number): void {
    const next = this.head
    this.head = { val, next }
    this.size++
  }

  addAtTail(val: number): void {
    if (this.size === 0) {
      this.addAtHead(val)
      return
    }
    const node = this.getNode(this.size - 1)
    node.next = { val, next: null }
    this.size++
  }

  addAtIndex(index: number, val: number): void {
    if (index < 0 || index > this.size) return
    if (index === this.size) {
      this.addAtTail(val)
      return
    }
    if (index === 0) {
      this.addAtHead(val)
      return
    }
    const node = this.getNode(index - 1)
    node.next = { val, next: node.next}
    this.size++
  }

  deleteAtIndex(index: number): void {
    if (index < 0 || index >= this.size) return
    if (this.size === 0) return
    if (index === 0) {
      this.head = this.head.next
      this.size--
      return
    }
    const node = this.getNode(index - 1)
    node.next = node.next?.next || null
    this.size--
  }
}
```