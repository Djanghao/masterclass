# [Kotlin] Dynamic Programming Approach for Maximizing Profits

**Author:** teogor
**Votes:** 7
**Link:** [https://leetcode.com/problems/house-robber/solutions/4992593/](https://leetcode.com/problems/house-robber/solutions/4992593/)

---

# Intuition
To solve this problem, we can use dynamic programming to find the maximum amount of money that can be robbed from the houses. Since adjacent houses cannot be robbed, we need to consider two cases for each house: either we rob the current house and the house two steps back, or we skip the current house and take the maximum amount from the previous house.

# Approach
We can initialize an array `dp` to store the maximum amount of money that can be robbed up to each house. We start by initializing `dp[0]` to `nums[0]` and `dp[1]` to the maximum of `nums[0]` and `nums[1]`. Then, for each house starting from the third one, we calculate `dp[i]` as the maximum of `dp[i - 2] + nums[i]` (if we rob the current house) and `dp[i - 1]` (if we skip the current house).

After iterating through all houses, the maximum amount of money that can be robbed will be `dp[nums.size - 1]`.

# Complexity
- Time complexity: O(n), where n is the number of houses. We iterate through the array once to fill the `dp` array.
- Space complexity: O(n), where n is the number of houses. We use an additional array `dp` of size n to store the maximum amounts.

# Code
```
class Solution {
    fun rob(nums: IntArray): Int {
        if (nums.isEmpty()) return 0
        if (nums.size == 1) return nums[0]
        
        val dp = IntArray(nums.size)
        dp[0] = nums[0]
        dp[1] = maxOf(nums[0], nums[1])
        
        for (i in 2 until nums.size) {
            dp[i] = maxOf(dp[i - 2] + nums[i], dp[i - 1])
        }
        
        return dp[nums.size - 1]
    }
}

```