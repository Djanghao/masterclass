# Dart Solution

**Author:** Friendlygecko
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-insertion-steps-to-make-a-string-palindrome/solutions/4774060/](https://leetcode.com/problems/minimum-insertion-steps-to-make-a-string-palindrome/solutions/4774060/)

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
    int minInsertions(String s) {
        final m = s.length;
        final lps = longestPalindromicSubsequence(s, m);
        return s.length - lps;
    }

    int longestPalindromicSubsequence(String s, int m) {
        final List<List<int>> dp = List.generate(m + 1, (_) => List.filled(m + 1, 0));
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
}
```