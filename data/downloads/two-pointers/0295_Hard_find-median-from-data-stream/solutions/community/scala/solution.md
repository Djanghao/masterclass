# [scala] - two PriorityQueue

**Author:** nikiforo
**Votes:** 2
**Link:** [https://leetcode.com/problems/find-median-from-data-stream/solutions/3271734/](https://leetcode.com/problems/find-median-from-data-stream/solutions/3271734/)

---

# Code
```
class MedianFinder() {

  sealed trait State
  case object Empty extends State
  case object Even extends State
  case class One(n: Int) extends State
  case class Odd(n: Int) extends State

  import scala.collection.mutable.PriorityQueue

  private val right = PriorityQueue.empty[Int].reverse
  private val left = PriorityQueue.empty[Int]
  private var state: State = Empty

  def addNum(num: Int): Unit =
    state match {
      case Empty => state = One(num)
      case Even =>
        val List(min, m, max) = List(right.dequeue(), left.dequeue(), num).sorted
        right.enqueue(max)
        left.enqueue(min)
        state = Odd(m)
      case One(n) =>
        right.enqueue(math.max(num, n))
        left.enqueue(math.min(num, n))
        state = Even
      case Odd(n) =>
        val List(min1, min2, max1, max2) = List(right.dequeue(), left.dequeue(), num, n).sorted
        left.enqueue(min1, min2)
        right.enqueue(max1, max2)
        state = Even
    }

  def findMedian(): Double =
    state match {
      case Empty => ???
      case Even => (right.head.toDouble + left.head) / 2
      case One(n) => n
      case Odd(n) => n
    }
}
```