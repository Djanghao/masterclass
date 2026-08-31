# ✅ Scala: using single head (with comments!)

**Author:** aaabramov
**Votes:** 1
**Link:** [https://leetcode.com/problems/design-linked-list/solutions/3416062/](https://leetcode.com/problems/design-linked-list/solutions/3416062/)

---

# Complexity
- Time complexity:
  - `get(index: Int)`: $$O(n)$$
  - `addAtHead(val: Int)`: $$O(1)$$
  - `addAtHead(val: Int)`: $$O(n)$$ (could be made $O(1)$ by storing `tail` reference)
  - `deleteAtIndex(index: Int)`: $$O(n)$$

- Space complexity:
  - `get(index: Int)`: $$O(1)$$
  - `addAtHead(val: Int)`: $$O(1)$$
  - `addAtHead(val: Int)`: $$O(1)$$
  - `deleteAtIndex(index: Int)`: $$O(1)$$

# Code
```scala
class MyLinkedList() {
  // It's better to avoid mutability in Scala.
  // var next is here only as an optimization and for readability purpose
  private class Node(val value: Int, var next: Option[Node] = None)

  private var head: Option[Node] = None
  private var size = 0

  def get(index: Int): Int =
    if (index < 0 || index >= size)
      return  -1
    else 
      getAt(index).map(_.value).getOrElse(-1)

  def addAtHead(`val`: Int): Unit = addAtIndex(0, `val`)

  def addAtTail(`val`: Int): Unit = addAtIndex(size, `val`)

  def addAtIndex(index: Int, `val`: Int): Unit = {
    if (index < 0 || index > size){
      return
    }

    if (index == 0) {
      // Update the head with a new node and make old head as the next for it
      val newHead = new Node(`val`, head)
      head = Some(newHead)
    } else {
      // Find previous node
      val prev = getAt(index - 1)
      // Insert new node after the previous node
      // 0->[prev=1]->2 => // 0->[prev=1]->[new=val]->2
      val newNode = new Node(`val`, prev.flatMap(_.next))
      prev.foreach(_.next = Some(newNode))
    }

    // Don't forget to increment the size!
    size += 1
  }

  def deleteAtIndex(index: Int): Unit = {
    if (index < 0 || index >= size) {
      return
    }

    if (index == 0){
        // Shift the head to the right
        head = head.flatMap(_.next)
    } else {
      // Find previous node
      val prev = getAt(index - 1)
      // Skip the next node for the previous node
      // [prev=0]->1->2 => // [prev=0]->2
      prev.foreach(_.next = prev.flatMap(_.next).flatMap(_.next))
    }
    // Don't forget to decrement the size!
    size -=1
  }
  
  /** Finds a node at `index` */
  private def getAt(index: Int): Option[Node] = {
    var curr = head
    for (_ <- 0 until (index)) {
      curr = curr.flatMap(_.next)
    }
    curr
  }

}
```