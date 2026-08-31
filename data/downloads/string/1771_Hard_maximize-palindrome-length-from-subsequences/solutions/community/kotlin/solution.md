# just a variant

**Author:** igormsc
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximize-palindrome-length-from-subsequences/solutions/4705985/](https://leetcode.com/problems/maximize-palindrome-length-from-subsequences/solutions/4705985/)

---

# Code
```
class Solution {
    fun longestPalindrome(word1: String, word2: String): Int {
        val s = word1 + word2
        val m = word1.length
        val n = s.length
        val dp = Array(n + 1) { IntArray(n + 1) }

        return (1..n).fold(0) { r, i ->
                    (1..n - i + 1).fold(r) { r, j ->
                        if (s[i - 1] == s[n - j]) {
                            dp[i][j] = dp[i - 1][j - 1] + 2
                            if ((dp[i][j] == 2 || dp[i][j] == 1) && (i - 1 >= m || n - j < m)) dp[i][j] = maxOf(dp[i - 1][j], dp[i][j - 1])
                            if (n - j == i - 1) dp[i][j]--
                            maxOf(r, dp[i][j])
                        } else { dp[i][j] = maxOf(dp[i - 1][j], dp[i][j - 1]); r }
                    }
                }
    }
}
```