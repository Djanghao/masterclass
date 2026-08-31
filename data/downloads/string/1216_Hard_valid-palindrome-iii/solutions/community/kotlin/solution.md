# [Kotlin] From Top down DP to Bottom up DP

**Author:** hiepit
**Votes:** 0
**Link:** [https://leetcode.com/problems/valid-palindrome-iii/solutions/5081599/](https://leetcode.com/problems/valid-palindrome-iii/solutions/5081599/)

---

**\u2714\uFE0F Solution 1: Top down DP**
```kotlin
class Solution {
    fun isValidPalindrome(s: String, k: Int): Boolean {
        val n = s.length
        val memo = HashMap<Pair<Int, Int>, Int>()

        fun dp(i: Int, j: Int): Int {
            if (i >= j) return 0
            val key = Pair(i, j)
            if (key in memo) return memo[key]!!
            if (s[i] == s[j]) {
                memo[key] = dp(i+1, j-1)
            } else {
                memo[key] = min(dp(i+1, j), dp(i, j-1)) + 1
            }
            return memo[key]!!
        }
        return dp(0, n-1) <= k
    }
}
```
Complexity:
- Time: `O(N^2)`, where `N` is the length of string `s`
- Space: `O(N^2)`
---
**\u2714\uFE0F Solution 2: Bottom up DP**
```kotlin
class Solution {
    fun isValidPalindrome(s: String, k: Int): Boolean {
        val n = s.length
        val dp = Array(n) { IntArray(n) { n } }
        for (i in n-1 downTo 0) {
            for (j in i..n-1) {
                if (s[i] == s[j]) {
                    if (i+1 >= j-1) {
                        dp[i][j] = 0
                    } else {
                        dp[i][j] = dp[i+1][j-1]
                    }
                } else {
                    dp[i][j] = min(dp[i+1][j], dp[i][j-1]) + 1
                }
            }
        }
        return dp[0][n-1] <= k
    }
}
```
Complexity:
- Time: `O(N^2)`, where `N` is the length of string `s`
- Space: `O(N^2)`