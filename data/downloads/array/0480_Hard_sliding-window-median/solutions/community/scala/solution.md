# Scala two TreeSet solution

**Author:** squadgazzz
**Votes:** 2
**Link:** [https://leetcode.com/problems/sliding-window-median/solutions/902814/](https://leetcode.com/problems/sliding-window-median/solutions/902814/)

---

```
import scala.collection.mutable

object SlidingWindowMedian {
  def medianSlidingWindow(nums: Array[Int], k: Int): Array[Double] = {
    val maxHeap = mutable.TreeSet.empty[Int](Ordering[(Int, Int)].on(x => (nums(x), x)))
    val minHeap = mutable.TreeSet.empty[Int](Ordering[(Int, Int)].on((x: Int) => (nums(x), x)).reverse)
    nums.indices
      .foldLeft(List.empty[Double]) {
        case (acc, i) =>
          addNum(i, maxHeap, minHeap)
          if (maxHeap.size + minHeap.size == k) {
            val newAcc = acc :+ findMedian(nums, maxHeap, minHeap)
            slideTheWindow(acc.size, maxHeap, minHeap)
            newAcc
          } else {
            acc
          }
      }
      .toArray
  }

  def addNum(num: Int, maxHeap: mutable.TreeSet[Int], minHeap: mutable.TreeSet[Int]) {
    maxHeap += num
    minHeap += maxHeap.head
    maxHeap -= maxHeap.head
    if (maxHeap.size < minHeap.size) {
      maxHeap += minHeap.head
      minHeap -= minHeap.head
    }
  }

  def findMedian(nums: Array[Int], maxHeap: mutable.TreeSet[Int], minHeap: mutable.TreeSet[Int]): Double = {
    if (minHeap.size == maxHeap.size)
      nums(minHeap.head) / 2.0 + nums(maxHeap.head) / 2.0
    else nums(maxHeap.head)
  }

  def slideTheWindow(toRemove: Int, maxHeap: mutable.TreeSet[Int], minHeap: mutable.TreeSet[Int]): Unit = {
    if (!maxHeap.remove(toRemove)) {
      minHeap.remove(toRemove)
    }
  }
}
```