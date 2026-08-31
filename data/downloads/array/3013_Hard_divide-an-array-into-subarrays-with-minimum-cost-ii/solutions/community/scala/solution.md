# 👍👍👍👍👍2695 ms Beats 100.00% of users with Scala

**Author:** pvt2024
**Votes:** 0
**Link:** [https://leetcode.com/problems/divide-an-array-into-subarrays-with-minimum-cost-ii/solutions/4779051/](https://leetcode.com/problems/divide-an-array-into-subarrays-with-minimum-cost-ii/solutions/4779051/)

---

# Code
```
import scala.collection.mutable.TreeSet
object Solution {
  def minimumCost(nums: Array[Int], k: Int, dist: Int): Long = {
    var result = Long.MaxValue
    var windowSum = 0L
    val n = nums.length

    val using = TreeSet.empty(Ordering.by((i: Int) => (nums(i), i)))
    val waiting = TreeSet.empty(Ordering.by((i: Int) => (nums(i), i)))

    // Add dist + 1 num into the using set
    for (i <- 1 to dist + 1) {
      using.add(i)
      windowSum += nums(i)
    }

    // We need only k - 1 nums, move others to waiting set because we might need them in the future
    while (using.size > k - 1) {
      val i = using.last
      windowSum -= nums(i)
      waiting.add(i)
      using.remove(i)
    }

    // windowSum is the sum of k - 1 nums
    result = Math.min(result, windowSum)

    for (i <- 1 until n - dist - 1) {
      // window slid so add new num to the waiting set
      waiting.add(i + dist + 1)

      // i is the leftmost num in the window, will be removed from window
      if (using.contains(i)) {
        // i is one of the k - 1 nums
        // remove and update windowSum
        // poll one num from waiting set and add
        windowSum -= nums(i)
        using.remove(i)
        val j = waiting.head
        windowSum += nums(j)
        using.add(j)
        waiting.remove(j)
      } else {
        // i is not one of the k - 1 nums, it is in the waiting set
        // remove from waiting
        // check the minimum num of the waiting set is lower than the maximum num of the using set
        // If so, add to the using set, remove from waiting set
        // update window accordingly
        waiting.remove(i)
        val j1 = waiting.head
        val j2 = using.last
        if (nums(j1) < nums(j2)) {
          windowSum -= nums(j2)
          using.remove(j2)
          waiting.add(j2)

          windowSum += nums(j1)
          using.add(j1)
          waiting.remove(j1)
        }
      }

      result = Math.min(result, windowSum)
    }
    result + nums(0)
  }
}
```