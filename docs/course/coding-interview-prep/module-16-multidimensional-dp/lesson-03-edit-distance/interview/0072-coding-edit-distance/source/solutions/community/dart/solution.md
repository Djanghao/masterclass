# Dart easy solution

**Author:** GokuUltra
**Votes:** 3
**Link:** [https://leetcode.com/problems/edit-distance/solutions/4304760/](https://leetcode.com/problems/edit-distance/solutions/4304760/)

---


# Code
```
class Solution {
  int minDistance(String word1, String word2) {
      final List<List<int>> dp = List.generate(word1.length + 1, (_) => List.filled(word2.length + 1, 0));

      for (int i = 1; i <= word1.length; i++) {
          dp[i][0] = i;
      }

      for (int j = 1; j <= word2.length; j++) {
          dp[0][j] = j;
      }

      for (int k = 1; k <= word1.length; k++) {
          for (int l = 1; l <= word2.length; l++) {
              if (word1[k - 1] == word2[l - 1]) {
                  dp[k][l] = dp[k - 1][l - 1];
              } else {
                  dp[k][l] = <int>[dp[k - 1][l - 1], dp[k - 1][l], dp[k][l - 1]].reduce(min) + 1;
              }
          }
      }

      return dp[word1.length][word2.length];
  }
}
```