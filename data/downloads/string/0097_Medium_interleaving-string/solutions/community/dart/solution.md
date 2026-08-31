# Recursive solution usuing 2D

**Author:** mh72156
**Votes:** 0
**Link:** [https://leetcode.com/problems/interleaving-string/solutions/5616297/](https://leetcode.com/problems/interleaving-string/solutions/5616297/)

---

# Intuition
Recursive solution technique

# Approach
Dynamic Programming

# Complexity
- Time complexity: O(N * M)

- Space complexity: O(N * M)

# Code
```
class Solution {
  bool isInterleave(String s1, String s2, String s3) {
    if (s1.length + s2.length != s3.length) {
      return false;
    }

    List<List<int>> dp = List.generate(
        s1.length + 1, (i) => List<int>.filled(s2.length + 1, -1));

    bool solve(int ind1, int ind2) {
      if (ind1 + ind2 == s3.length) return true;
      if (dp[ind1][ind2] != -1) return dp[ind1][ind2] == 1;
      bool ans = false;

      if (ind1 < s1.length && s1[ind1] == s3[ind1 + ind2]) {
        ans |= solve(ind1 + 1, ind2);
      }

      if (ind2 < s2.length && s2[ind2] == s3[ind1 + ind2]) {
        ans |= solve(ind1, ind2 + 1);
      }

      dp[ind1][ind2] = ans ? 1 : 0;
      return ans;
    }

    return solve(0, 0);
  }
}
```