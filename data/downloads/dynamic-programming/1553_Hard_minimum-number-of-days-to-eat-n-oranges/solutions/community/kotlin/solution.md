# Kotlin Recursion + Memoization

**Author:** aliam
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-number-of-days-to-eat-n-oranges/solutions/4300202/](https://leetcode.com/problems/minimum-number-of-days-to-eat-n-oranges/solutions/4300202/)

---

# Code
```
class Solution {
    fun minDays(n: Int): Int {
        val dp = HashMap<Int, Int>()

        fun dfs(n: Int): Int {
            if (n <= 1) return n
            
            if (n !in dp) {
                dp[n] = minOf(
                    1 + (n % 2) + dfs(n / 2),
                    1 + (n % 3) + dfs(n / 3)
                )
            }

            return dp[n]!!
        }

        return dfs(n)
    }
}
```