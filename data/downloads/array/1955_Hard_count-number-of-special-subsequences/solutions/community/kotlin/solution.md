# O(n) DP solution in kotlin

**Author:** precel332
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-number-of-special-subsequences/solutions/5539416/](https://leetcode.com/problems/count-number-of-special-subsequences/solutions/5539416/)

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
class Solution {
    val mod = 1_000_000_007L
    fun countSpecialSubsequences(nums: IntArray): Int {
        val dp0 = Array(nums.size) { idx -> if (nums[idx] == 0) 1L else 0L }
        for (i in 1 until nums.size) {
            if (nums[i] == 0) {
                dp0[i] += 2 * dp0[i - 1]
            } else {
                dp0[i] += dp0[i - 1]
            }
            dp0[i] %= mod
        }
        val dp1 = Array(nums.size) { 0L }
        for (i in 1 until nums.size) {
            if (nums[i] == 1) {
                dp1[i] += 2 * dp1[i - 1] + dp0[i - 1]
            } else {
                dp1[i] += dp1[i - 1]
            }
            dp1[i] %= mod
        }
        val dp2 = Array(nums.size) { 0L }
        for (i in 1 until nums.size) {
            if (nums[i] == 2) {
                dp2[i] += 2 * dp2[i - 1] + dp1[i - 1]
            } else {
                dp2[i] += dp2[i - 1]
            }
            dp2[i] %= mod
        }




        return dp2.last().toInt()
    }
}
```