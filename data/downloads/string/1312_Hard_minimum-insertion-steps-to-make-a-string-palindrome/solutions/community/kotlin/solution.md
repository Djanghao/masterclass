# SImple LCS Solution Kotlin

**Author:** mustaqode
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-insertion-steps-to-make-a-string-palindrome/solutions/5346592/](https://leetcode.com/problems/minimum-insertion-steps-to-make-a-string-palindrome/solutions/5346592/)

---

# Intuition
1) Find LCS for Palindrome 
2) Difference between string length and the lcs

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
O(n^2)

- Space complexity:
O(n^2)

# Code
```
class Solution {
    fun minInsertions(s: String): Int {
        val longestPal = lcs(s, s.reversed())
        return s.length - longestPal
    }

    private fun lcs(s: String, r: String) : Int {
        val m = s.length
        val n = r.length
        val dp = Array(m + 1) { IntArray(n + 1) }

        for ( i in 1..m ) {
            for ( j in 1..n ) {
                if(s[i-1] == r[j-1]) {
                    dp[i][j] = 1 + dp[i-1][j-1]
                } else {
                    dp[i][j] = maxOf(dp[i-1][j], dp[i][j-1])
                }
            }
        }

        return dp[m][n]
    }
}
```