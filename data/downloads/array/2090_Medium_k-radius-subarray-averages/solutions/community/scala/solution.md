# Easy an intuitive solution using sliding window, beats 100%

**Author:** stefancomanita
**Votes:** 1
**Link:** [https://leetcode.com/problems/k-radius-subarray-averages/solutions/3663283/](https://leetcode.com/problems/k-radius-subarray-averages/solutions/3663283/)

---

# Approach
Easy an intuitive solution using sliding window, beats 100%. We use two loops to loop over the section of interest of the nums array and compute the average for each index of interest.

# Code
```
object Solution {
  def getAverages(nums: Array[Int], k: Int): Array[Int] = {

    if (k == 0) {
      return nums
    }

    val result: Array[Int] = Array.fill[Int](nums.length)(-1)

    if (nums.length <= k) {
      return result
    }

    for (i <- k until nums.length - k) {
      var sum: Long = 0

      for (j <- i - k to i + k) {

        sum += nums(j)
      }

      result(i) = (sum / ((2 * k) + 1)).intValue()
    }

    result
  }
}
```