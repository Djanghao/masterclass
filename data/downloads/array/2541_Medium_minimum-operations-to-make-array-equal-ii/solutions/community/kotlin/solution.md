# [Kotlin] One pass O(n)

**Author:** qsqnk
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-operations-to-make-array-equal-ii/solutions/3082488/](https://leetcode.com/problems/minimum-operations-to-make-array-equal-ii/solutions/3082488/)

---

# Code
```
import kotlin.math.abs

class Solution {
    fun minOperations(nums1: IntArray, nums2: IntArray, k: Int): Long {
        if (k == 0) return if (nums1.contentEquals(nums2)) 0 else -1
        var (sumDiff, elementWiseDiff) = 0L to 0L
        for ((x, y) in nums1.zip(nums2)) {
            if (x % k != y % k) return -1
            sumDiff += x - y
            elementWiseDiff += abs(x - y)
        }
        return if (sumDiff == 0L && elementWiseDiff % (2 * k) == 0L) elementWiseDiff / (2 * k) else -1
    }
}
```