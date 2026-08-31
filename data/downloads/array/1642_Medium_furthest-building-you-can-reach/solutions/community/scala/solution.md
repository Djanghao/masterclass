# Scala PriorityQueue tailrec

**Author:** SerhiyShaman
**Votes:** 1
**Link:** [https://leetcode.com/problems/furthest-building-you-can-reach/solutions/4740804/](https://leetcode.com/problems/furthest-building-you-can-reach/solutions/4740804/)

---

# Code
```
object Solution {
  def furthestBuilding(heights: Array[Int], bricks: Int, ladders: Int): Int = {
    val len = heights.length
    val pq = collection.mutable.PriorityQueue[Int]()

    @annotation.tailrec
    def step(i: Int, bricks: Int, ladders: Int): Int =
      if (i == len) i - 1
      else {
        val diff = heights(i) - heights(i - 1)
        if (diff <= 0)
          step(i + 1, bricks, ladders)
        else if (diff <= bricks) {
          pq.enqueue(diff)
          step(i + 1, bricks - diff, ladders)
        } else if (ladders == 0)
          i - 1
        else if (pq.nonEmpty && diff < pq.head) {
          val max = pq.head
          pq.dequeue
          pq.enqueue(diff)
          step(i + 1, bricks + max - diff, ladders - 1)
        } else
          step(i + 1, bricks, ladders - 1)
      }

    if (len == 1) 0 else step(1, bricks, ladders)
  }
}
```