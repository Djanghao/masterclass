# KOTLIN and JAVA solution using dynamic programming

**Author:** anlk
**Votes:** 2
**Link:** [https://leetcode.com/problems/interleaving-string/solutions/6056560/](https://leetcode.com/problems/interleaving-string/solutions/6056560/)

---

\u2618\uFE0F\u2618\uFE0F\u2618\uFE0F If this solution was helpful, please consider upvoting! \u2705

# Intuition
The problem can be approached using dynamic programming, where we check if each character of s3 can be matched by interleaving characters from s1 and s2 without violating their order.


# Complexity
- Time complexity:  $$O(n.m)$$ where n and m are the lengths of s1 and s2

- Space complexity: $$O(n.m)$$ for the DP table.

# Code
```Kotlin []
class Solution {
    fun isInterleave(s1: String, s2: String, s3: String): Boolean {
        if (s1.length + s2.length != s3.length) return false

        val dp = Array(s1.length + 1) { BooleanArray(s2.length + 1) }
        dp[0][0] = true
        for (i in 1..s1.length) {
            dp[i][0] = dp[i - 1][0] && s1[i - 1] == s3[i - 1]
        }
        
        for (j in 1..s2.length) {
            dp[0][j] = dp[0][j - 1] && s2[j - 1] == s3[j - 1]
        }

        for (i in 1..s1.length) {
            for (j in 1..s2.length) {
                dp[i][j] = (dp[i - 1][j] && s1[i - 1] == s3[i + j - 1]) ||
                        (dp[i][j - 1] && s2[j - 1] == s3[i + j - 1])
            }
        }

        return dp[s1.length][s2.length]
    }
}
```

```Java []
class Solution {
    public boolean isInterleave(String s1, String s2, String s3) {
        if (s1.length() + s2.length() != s3.length()) return false;

        boolean[][] dp = new boolean[s1.length() + 1][s2.length() + 1];
        dp[0][0] = true;
        for (int i = 1; i <= s1.length(); i++) {
            dp[i][0] = dp[i - 1][0] && s1.charAt(i - 1) == s3.charAt(i - 1);
        }
        
        for (int j = 1; j <= s2.length(); j++) {
            dp[0][j] = dp[0][j - 1] && s2.charAt(j - 1) == s3.charAt(j - 1);
        }

        for (int i = 1; i <= s1.length(); i++) {
            for (int j = 1; j <= s2.length(); j++) {
                dp[i][j] = (dp[i - 1][j] && s1.charAt(i - 1) == s3.charAt(i + j - 1)) ||
                        (dp[i][j - 1] && s2.charAt(j - 1) == s3.charAt(i + j - 1));
            }
        }

        return dp[s1.length()][s2.length()];
    }
}
```