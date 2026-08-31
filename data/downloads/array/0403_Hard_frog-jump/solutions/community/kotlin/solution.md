# [Kotlin] Optimizing Frog Leaping with Dynamic Programming

**Author:** teogor
**Votes:** 5
**Link:** [https://leetcode.com/problems/frog-jump/solutions/5011408/](https://leetcode.com/problems/frog-jump/solutions/5011408/)

---

# Intuition
To solve this problem, we can use dynamic programming to keep track of whether the frog can reach each stone with a certain jump size. We initialize a 2D dynamic programming array `dp`, where `dp[i][j]` represents whether the frog can reach the `i`-th stone with a jump size of `j`. Initially, only the first stone is reachable with a jump size of 0. Then, for each stone, we iterate through the previous stones to check if the frog can jump to the current stone with a valid jump size.

# Approach
We iterate through each stone position starting from the second stone. For each stone, we iterate through the previous stones to determine if the frog can reach the current stone with a valid jump size. If the difference between the current stone and the previous stone is less than or equal to the maximum possible jump size (`j + 1`), we update the `dp` array to reflect that the frog can reach the current stone with the given jump size. Finally, we return whether the last stone is reachable with any valid jump size.

# Complexity
- Time complexity: O(n^2), where n is the number of stones. We iterate through each stone and consider all previous stones.

- Space complexity: O(n^2), where n is the number of stones. We use a 2D dynamic programming array to store whether the frog can reach each stone with a certain jump size.

# Code
```kotlin
class Solution {
    fun canCross(stones: IntArray): Boolean {
        val n = stones.size
        val dp = Array(n) { BooleanArray(n) }
        dp[0][0] = true
        
        for (i in 1 until n) {
            for (j in i - 1 downTo 0) {
                val k = stones[i] - stones[j]
                if (k <= j + 1) {
                    dp[i][k] = dp[j][k - 1] || dp[j][k] || dp[j][k + 1]
                    if (i == n - 1 && dp[i][k]) return true
                }
            }
        }
        
        return false
    }
}
````