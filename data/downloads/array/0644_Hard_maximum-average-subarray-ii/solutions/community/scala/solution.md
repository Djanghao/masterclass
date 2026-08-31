# scala binary search

**Author:** urbanclimatefr
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-average-subarray-ii/solutions/4702458/](https://leetcode.com/problems/maximum-average-subarray-ii/solutions/4702458/)

---

# Code
```
// Import necessary libraries
import scala.collection.mutable.Queue

// Define the Solution object
object Solution {
  /**
    * Finds the maximum average subarray of size k.
    *
    * @param nums The input array of integers.
    * @param k The size of the subarray.
    * @return The maximum average value as a double.
    */
  def findMaxAverage(nums: Array[Int], k: Int): Double = {
    var lo = -10000.0 // Initialize lower bound
    var hi = 10000.0 // Initialize upper bound
    // Precision for binary search
    val precision = 0.00001

    while (hi - lo > precision) {
      val mid = (lo + hi) / 2
      var sum = 0.0
      var min = Double.MaxValue
      val queue = Queue[Double]()
      queue.enqueue(0.0) // Initial prefix sum
      var ok = false

      for (n <- nums) {
        sum += n - mid // Update sum with adjusted value
        // Remove the oldest value when queue size exceeds k
        if (queue.size == k) {
          min = Math.min(min, queue.dequeue())
        }
        queue.enqueue(sum) // Add current sum to the queue
        ok ||= sum - min >= 0 // Check if valid subarray found
      }

      // Adjust search range based on existence of valid subarray
      if (ok) {
        lo = mid
      } else {
        hi = mid
      }
    }
    lo // Return the maximum average found
  }
}


```