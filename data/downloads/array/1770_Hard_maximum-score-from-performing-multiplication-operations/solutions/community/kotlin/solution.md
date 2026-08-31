# Kotlin | DP | Time O(M^2) | Space O(M)

**Author:** misoft
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-score-from-performing-multiplication-operations/solutions/2582806/](https://leetcode.com/problems/maximum-score-from-performing-multiplication-operations/solutions/2582806/)

---

```
class Solution {
    
    fun maximumScore(nums: IntArray, multipliers: IntArray): Int {
        
        val n = nums.size
        val m = multipliers.size
        val dp = IntArray(m + 1)
        for (index in m - 1 downTo 0) {
            var temp = dp[index + 1]
            for (left in index downTo 0) {    
                val right = n - 1 - index + left
                val multiplier = multipliers[index]
                val leftValue = multiplier * nums[left] + temp
                val rightValue = multiplier * nums[right] + dp[left]
                temp = dp[left]
                dp[left] = Math.max(leftValue, rightValue)
            }
        }
        
        return dp[0]
    }
}
```