# n^2log(n) passed!

**Author:** doct0rX
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-pairs-in-two-arrays/solutions/5122745/](https://leetcode.com/problems/count-pairs-in-two-arrays/solutions/5122745/)

---

# Code
```kotlin
class Solution {
  fun countPairs(nums1: IntArray, nums2: IntArray): Long {
    val N = nums1.size
    val diff = IntArray(N)
    for (i in nums1.indices) {
      diff[i] = nums1[i] - nums2[i]
    }
    diff.sort()
    
    var result = 0L
    for (i in diff.indices) {
      if (diff[i] > 0) {
        result += N - i - 1
      } else {
        for (j in i + 1..<N) {
          if (diff[j] + diff[i] > 0) {
            result += N - j
            break
          }
        }
      }
    }
    return result
  }
}
```