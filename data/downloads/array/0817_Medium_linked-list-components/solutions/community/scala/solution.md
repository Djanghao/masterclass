# Elegant Scala

**Author:** fairgrieve
**Votes:** 0
**Link:** [https://leetcode.com/problems/linked-list-components/solutions/1961823/](https://leetcode.com/problems/linked-list-components/solutions/1961823/)

---

```
object Solution {
  def numComponents(head: ListNode, nums: Array[Int]): Int = numComponents(head.toIterable, nums.toSet)

  private def numComponents(xs: Iterable[Int], nums: Set[Int]): Int = {
    Iterator
      .unfold(xs) {
        Some(_).collect {
          case xs if xs.nonEmpty => xs.dropWhile(!nums.contains(_)).span(nums.contains) match {
            case (prefix, suffix) => (prefix.size, suffix)
          }
        }
      }
      .count(_ >= 1)
  }

  private implicit final class RichListNode(node: ListNode) { self =>
    /**
     * @return an abstraction of the list whose head is [[node]] as an [[Iterable]] of the list's values
     */
    def toIterable: Iterable[Int] = new Iterable[Int] {
      override def iterator: Iterator[Int] = self.iterator
    }

    /**
     * @return an [[Iterator]] over the values of the list whose head is [[node]]
     */
    def iterator: Iterator[Int] = new Iterator[Int] {
      private var current = node

      override def hasNext: Boolean = current != null

      override def next(): Int = {
        val x = current.x
        current = current.next
        x
      }
    }
  }
}
```