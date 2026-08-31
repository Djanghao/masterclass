# [Kotlin] Dp with map

**Author:** devle79
**Votes:** 1
**Link:** [https://leetcode.com/problems/longest-arithmetic-subsequence/solutions/2953421/](https://leetcode.com/problems/longest-arithmetic-subsequence/solutions/2953421/)

---

# Approach
<!-- Describe your approach to solving the problem. -->
Stores the arithmetic subsequence up to the ith by using a map of the [difference between indices: count] structure.

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n^2)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    fun longestArithSeqLength(nums: IntArray): Int {
        val dp = Array<HashMap<Int, Int>>(nums.size) { hashMapOf() }

        var maxLength = 0

        for (i in 1 until nums.size) {
            repeat(i) { j ->
                val different = nums[i] - nums[j]
                dp[i][different] = (dp[j][different] ?: 1) + 1
                maxLength = maxLength.coerceAtLeast(dp[i][different]!!)
            }
        }

        return maxLength
    }
}
```