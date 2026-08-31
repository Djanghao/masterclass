# Kotlin Imperative Approach

**Author:** curenosm
**Votes:** 0
**Link:** [https://leetcode.com/problems/longest-alternating-subarray/solutions/6106109/](https://leetcode.com/problems/longest-alternating-subarray/solutions/6106109/)

---

# Code
```kotlin []
class Solution {
  fun isAlternating(nums : List<Int>): Boolean {
    for (m in 1 until nums.size)
      if (nums[m] - nums[m - 1] != (-1.0).pow(m + 1).toInt())
        return false
    return true
  }

  fun alternatingSubarray(nums: IntArray): Int {
    var maxLength = -1
    for (i in 0 until nums.size)
      for (j in i + 1 until nums.size)
        if (isAlternating(nums.slice(i..j)))
          maxLength = max(maxLength, j - i + 1)
    return maxLength
  }
}
```