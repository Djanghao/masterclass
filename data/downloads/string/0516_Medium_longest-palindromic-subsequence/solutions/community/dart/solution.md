# Dart Solution

**Author:** Friendlygecko
**Votes:** 0
**Link:** [https://leetcode.com/problems/longest-palindromic-subsequence/solutions/4091096/](https://leetcode.com/problems/longest-palindromic-subsequence/solutions/4091096/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
  int longestPalindromeSubseq(String s) {
      int lps(String s, int m) {
          final List<List<int>> dp = List.generate(m + 1, (i) => List.filled(m + 1, 0));
          for (int i = s.length; i >= 0; i--) {
              dp[i][i] = 1;
              for (int j = i + 1; j < s.length; j++) {
                  if (s[i] == s[j]) {
                      dp[i][j] = dp[i + 1][j - 1] + 2;
                  } else {
                      dp[i][j] = max(dp[i + 1][j], dp[i][j - 1]);
                  }
              }
          }

          return dp[0][s.length - 1];
      }

      return lps(s, s.length);
  }
}
```