# kotlin 100%

**Author:** s7025311
**Votes:** 0
**Link:** [https://leetcode.com/problems/length-of-the-longest-subsequence-that-sums-to-target/solutions/5611325/](https://leetcode.com/problems/length-of-the-longest-subsequence-that-sums-to-target/solutions/5611325/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
O(n * target)

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    fun lengthOfLongestSubsequence(nums: List<Int>, target: Int): Int {
        var dp = mapOf(0 to 0)

        for (num in nums) {
            val newDp = dp.toMutableMap()
            for ((sum, length) in dp) {
                val newSum = sum + num
                if (newSum <= target) {
                    newDp[newSum] = maxOf(newDp.getOrDefault(newSum, 0), length + 1)
                }
            }
            dp = newDp
        }

        return dp[target] ?: -1
    }
}
```