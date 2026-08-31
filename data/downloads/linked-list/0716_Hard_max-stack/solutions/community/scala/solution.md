# Scala O(log n). Faster than everything else in Scala

**Author:** giulio-dambrosio
**Votes:** 0
**Link:** [https://leetcode.com/problems/max-stack/solutions/2218533/](https://leetcode.com/problems/max-stack/solutions/2218533/)

---

This solution uses a single Node that holds its value, 2 pointers for the previous and next element in the main stack and a single pointer to the next same value (sameNext). This last pointer is used to implement a second stack of nodes having the same value.

When pushing a new node is inserted at the top of the main stack and at the top of the logical stack associated with its value (if there is already another node), otherwise a new entry in the SortedMap is created.

The SortedMap provides the maximum value in O(log n) time, while the other operations (inserting and removing) are O(1).

All in all it's 54 lines of code, although it would have been really hard debugging them on Leetcode: I've written this in IntellijIdea

```
class MaxStack() {
  import collection.mutable
  case class Node(value: Int, var next: Option[Node] = None, var prev: Option[Node] = None, var sameNext: Option[Node] = None) {
    override def toString: String = value.toString
  }
  implicit def nodeOrdering: Ordering[(Int, Node)] = (a, b) => a._1 - b._1
  private var stack: Option[Node] = None
  private val elements = mutable.SortedMap.empty[Int, Node]

  def push(value: Int): Unit = {
    val node = Node(value, stack, None, elements.get(value))
    stack.foreach(_.prev = Some(node))
    stack = Some(node)
    elements.update(value, node)
  }

  def pop(): Int = {
    val Node(value, next, _, sameNext) = stack.get
    next.foreach(_.prev = None)
    stack = next
    updateSameValueSLL(value, sameNext)
    value
  }

  def top(): Int = {
    stack.get.value
  }

  def peekMax(): Int = {
    val (max, _) = elements.max
    max
  }

  def popMax(): Int = {
    val Node(value, next, prev, sameNext) = elements.max._2
    next.foreach(_.prev = prev)
    prev.foreach(_.next = next)
    if (prev.isEmpty) {
      stack = next
    }
    updateSameValueSLL(value, sameNext)
    value
  }
  
  private def updateSameValueSLL(value: Int, next: Option[Node]): Unit = {
    next match {
      case None =>
        elements.remove(value)
      case Some(sameNext) =>
        elements.update(value, sameNext)
    }
  }
}
```