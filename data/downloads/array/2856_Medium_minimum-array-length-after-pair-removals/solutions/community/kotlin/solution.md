# Kotlin

**Author:** GroundZeroCro
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-array-length-after-pair-removals/solutions/4615285/](https://leetcode.com/problems/minimum-array-length-after-pair-removals/solutions/4615285/)

---

# Code
```
class Solution {
    fun minLengthAfterRemovals(nums: List<Int>): Int {
        val n = nums.size
        val mid = n / 2

        var i = n - 1
        var j = mid - 1
        var removals = 0

        while (j >= 0) {
            if (nums[i] > nums[j]) {
                removals += 2
                i--
            }
            j--
        }

        return n - removals
    }
}
```