# Easy Scala Sliding Window Solution .

**Author:** HARSHIDAS_21
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-subsequence-score/solutions/5317215/](https://leetcode.com/problems/maximum-subsequence-score/solutions/5317215/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
import scala.collection.mutable.PriorityQueue

object Solution {
  def maxScore(nums1: Array[Int], nums2: Array[Int], k: Int): Long = {
    val n = nums1.length
    val indices = (0 until n).toArray

    // Sort indices based on nums2 values in descending order
    val sortedIndices = indices.sortBy(-nums2(_))

    // Use a priority queue to maintain the top k elements from nums1
    val pq = PriorityQueue.empty[Int](Ordering.by(x => -x))
    var sum = 0L
    var maxScore = 0L

    // Sliding window to maintain the sum of the top k elements in nums1
    for (i <- 0 until n) {
      val idx = sortedIndices(i)
      pq.enqueue(nums1(idx))
      sum += nums1(idx)

      if (pq.size > k) {
        sum -= pq.dequeue()
      }

      if (pq.size == k) {
        val currentScore = sum * nums2(idx)
        maxScore = Math.max(maxScore, currentScore)
      }
    }

    maxScore
  }
}
```