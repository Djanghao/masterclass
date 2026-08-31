# [Java] Top Down DP / Recursion with Memo

**Author:** rayms
**Votes:** 3
**Link:** [https://leetcode.com/problems/maximize-palindrome-length-from-subsequences/solutions/1079321/](https://leetcode.com/problems/maximize-palindrome-length-from-subsequences/solutions/1079321/)

---

```
    public int longestPalindrome(String word1, String word2) {
        String s = word1 + word2;
        int m = word1.length(), n = s.length();
        int[] ans = { 0 };
        helper(s.toCharArray(), 0, n - 1, m, new Integer[n][n], ans);
        return ans[0];
    }
    
    int helper(char[] s, int i, int j, int m, Integer[][] dp, int[] ans) {
        if (i > j) {
            return 0;
        } else if (i == j) {
            return 1;
        } else if (null != dp[i][j]) {
            return dp[i][j];
        } else if (s[i] == s[j]) {
            dp[i][j] = helper(s, i + 1, j - 1, m, dp, ans) + 2;
            if (i < m && j >= m) {
                ans[0] = Math.max(ans[0], dp[i][j]);
            }
        } else {
            dp[i][j] = Math.max(helper(s, i + 1, j, m, dp, ans), helper(s, i, j - 1, m, dp, ans));
        }
        return dp[i][j];
    } 
```