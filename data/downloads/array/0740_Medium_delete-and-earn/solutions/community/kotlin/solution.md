# Kotlin simple and easy 12 lines

**Author:** EEEL
**Votes:** 0
**Link:** [https://leetcode.com/problems/delete-and-earn/solutions/4864689/](https://leetcode.com/problems/delete-and-earn/solutions/4864689/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Dynamic Programming by value bases

# Approach
<!-- Describe your approach to solving the problem. -->
record max value two step ago

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(N) to make count the numbers

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(N)

# Code
```
class Solution {
    fun deleteAndEarn(nums: IntArray): Int {
        // dp[i] = max(dp[0]..dp[i - 2]) + nums[i] * count 
        val count = IntArray(10001) { 0 }
        for (v in nums) count[v]++
        var prevResult = 0
        var result = 0
        val dp = IntArray(10001) { 0 }
        for (i in 1..10000) {
            dp[i] = prevResult + i * count[i]
            prevResult = Math.max(prevResult, result)
            result = Math.max(result, dp[i])
        }

        return result
    }
}
```