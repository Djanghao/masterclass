# Scala Segment Tree solution

**Author:** hwj17
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-number-of-events-that-can-be-attended/solutions/1281237/](https://leetcode.com/problems/maximum-number-of-events-that-can-be-attended/solutions/1281237/)

---

```
object Solution {
    case class Node (start: Int,
                   end: Int,
                   left: Node,
                   right: Node,
                   var attendable: Boolean = true)

  def maxEvents(events: Array[Array[Int]]): Int = {
    val arr = events.sortWith( (a, b) => {
      a(1) < b(1)
    } )
    val min_d = events.minBy(_(0))
    val max_d = events.maxBy(_(1))

    val root = build(min_d(0), max_d(1))

    var ans = 0

    arr.foreach( x => {
      if (attend(root, x(0), x(1))) {
        ans += 1
      }
    })

    ans
  }

  def attend(node: Node, start: Int, end: Int): Boolean = {
    if ( node == null || start > node.end || node.start > end || !node.attendable) return false

    if ( node.start == node.end ) {
      node.attendable = false
      return true
    }

    var result: Boolean = attend( node.left, start, end )
    if (!result) {
      result = attend(node.right, start, end)
    }

    node.attendable = node.left.attendable || node.right.attendable

    result
  }

  def build(start: Int, end: Int): Node = {
    if ( start < end) {
      val a = ( start + end ) / 2
      return Node( start, end, build(start, a), build(a+1, end) )
    }
    Node( start, end, null, null )
  }
}
```