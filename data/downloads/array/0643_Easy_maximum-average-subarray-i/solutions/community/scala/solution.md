# Scala sliding window technique

**Author:** sharonwaithii
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-average-subarray-i/solutions/2690127/](https://leetcode.com/problems/maximum-average-subarray-i/solutions/2690127/)

---

Scala submission using sliding window technique

```
object Solution {

  def findMaxAverage(nums: Array[Int], k: Int): Double = {
    var windowStart = 0
    var windowSum = 0.0
    var maxSum = Double.MinValue

    for (windowEnd <- nums.indices) {
      windowSum += nums(windowEnd)

      if (windowEnd >= k - 1) {
        maxSum = maxSum.max(windowSum / k)
        windowSum -= nums(windowStart)
        windowStart += 1
      }
    }
    maxSum
  }
}

```