# Kotlin: Dynamic Programming

**Author:** artemasoyan
**Votes:** 4
**Link:** [https://leetcode.com/problems/word-break/solutions/3025600/](https://leetcode.com/problems/word-break/solutions/3025600/)

---

# Code
```
class Solution {
    fun wordBreak(s: String, wordDict: List<String>): Boolean {
        val dp = BooleanArray(s.length + 1) { false }               
        dp[s.length] = true

        for (i in s.length downTo 0) {
            for (w in wordDict) {
                if (i + w.length <= s.length && w == s.substring(i, i + w.length))
                    dp[i] = dp[i + w.length]
                if (dp[i]) break
            }
        }

        return dp[0]
    }
}
```