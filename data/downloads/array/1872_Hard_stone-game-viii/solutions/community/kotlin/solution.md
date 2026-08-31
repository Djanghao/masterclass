# :: Kotlin :: Dynamic Programming

**Author:** znxkznxk1030
**Votes:** 0
**Link:** [https://leetcode.com/problems/stone-game-viii/solutions/3588745/](https://leetcode.com/problems/stone-game-viii/solutions/3588745/)

---

# Code
```
class Solution {
    fun stoneGameVIII(stones: IntArray): Int {
        val n = stones.size
        val dp = IntArray(n){ Int.MIN_VALUE }
        val sums = IntArray(n){ 0 }

        sums[0] = stones[0]
        for (i in 1 until n) {
            sums[i] = sums[i - 1] + stones[i]
        }

        fun dfs(right: Int): Int{
            if (right == n - 1) return sums[n - 1]
            if (dp[right] > Int.MIN_VALUE) return dp[right]

            dp[right] = Math.max(dfs(right + 1), sums[right] - dfs(right + 1))
            return dp[right]
        }

        return dfs(1)
    }
}




```