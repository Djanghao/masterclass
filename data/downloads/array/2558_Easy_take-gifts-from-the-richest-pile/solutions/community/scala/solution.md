# [scala] - PriorityQueue

**Author:** nikiforo
**Votes:** 1
**Link:** [https://leetcode.com/problems/take-gifts-from-the-richest-pile/solutions/3145554/](https://leetcode.com/problems/take-gifts-from-the-richest-pile/solutions/3145554/)

---

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(n)

# Code
```
object Solution {
  def pickGifts(gifts: Array[Int], k: Int): Long = {
    val heap = scala.collection.mutable.PriorityQueue.from(gifts)
    (1 to k).foreach { _ =>
      val gift = heap.dequeue()
      heap.addOne(math.sqrt(gift).toInt)
    }
    heap.foldLeft(0L)(_ + _)
  }
}
```