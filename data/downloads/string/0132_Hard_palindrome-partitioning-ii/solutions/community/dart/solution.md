# Dart Solution using Lists

**Author:** Maqcel
**Votes:** 0
**Link:** [https://leetcode.com/problems/palindrome-partitioning-ii/solutions/3725917/](https://leetcode.com/problems/palindrome-partitioning-ii/solutions/3725917/)

---

# Approach
In this solution, we use a bottom-up approach to fill the dp array. At each index i, we check all possible palindrome substrings ending at i and calculate the minimum cuts based on the previous results. The palindrome matrix is used to store the information about whether a substring is a palindrome or not.

# Complexity
- Time complexity: $$O(n^2)$$, where n is the length of the string s.

# Code
```
class Solution {
  int minCut(String s) {
    int n = s.length;
    List<int> dp = List.filled(n, 0);
    List<List<bool>> palindrome = List.generate(n, (_) => List.filled(n, false));

    for (int i = 0; i < n; i++) {
      int minCuts = i;
      for (int j = 0; j <= i; j++) {
        if (s[i] == s[j] && (i - j <= 1 || palindrome[j + 1][i - 1])) {
          palindrome[j][i] = true;
          minCuts = (j == 0) ? 0 : min(minCuts, dp[j - 1] + 1);
        }
      }
      dp[i] = minCuts;
    }

    return dp[n - 1];
  }
}

```