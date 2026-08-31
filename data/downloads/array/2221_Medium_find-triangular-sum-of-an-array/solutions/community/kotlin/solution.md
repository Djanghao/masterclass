# Recursion

**Author:** g3nz0
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-triangular-sum-of-an-array/solutions/5970772/](https://leetcode.com/problems/find-triangular-sum-of-an-array/solutions/5970772/)

---

# Complexity
- Time complexity:
39ms, beats 100%

- Space complexity:
45,47mb, beats

# Code
```kotlin []
class Solution {
    fun triangularSum(nums: IntArray): Int {
        if (nums.size == 1) return nums[0]

        val nextRowSize = nums.size - 1
        val nextRow = IntArray(nextRowSize) { index ->
            (nums[index] + nums[index + 1]) % 10
        }

        return triangularSum(nextRow)
    }
}
```