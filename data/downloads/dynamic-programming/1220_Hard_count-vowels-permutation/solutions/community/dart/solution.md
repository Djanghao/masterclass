# the fastest in dart

**Author:** ahmed___
**Votes:** 1
**Link:** [https://leetcode.com/problems/count-vowels-permutation/solutions/4216459/](https://leetcode.com/problems/count-vowels-permutation/solutions/4216459/)

---


# Complexity
- Time complexity:
O(n)
- Space complexity:
O(n)
# Code
```
class Solution {
  int countVowelPermutation(int n) {
    final int MOD = 1000000007;

    // Create a 2D list to store the counts.
    // dp[i][j] represents the count of strings of length i ending with the vowel j.
    List<List<int>> dp = List.generate(n + 1, (i) => List<int>.filled(5, 0));

    // Initialize the base case for strings of length 1.
    for (int i = 0; i < 5; i++) {
      dp[1][i] = 1;
    }

    // Fill in the DP table for strings of length 2 to n.
    for (int i = 2; i <= n; i++) {
      dp[i][0] = dp[i - 1][1]; // 'a' can be followed by 'e'
      dp[i][1] = (dp[i - 1][0] + dp[i - 1][2]) % MOD; // 'e' can be followed by 'a' or 'i'
      dp[i][2] =
          (dp[i - 1][0] + dp[i - 1][1] + dp[i - 1][3] + dp[i - 1][4]) % MOD; // 'i' can be followed by 'a', 'e', 'o', or 'u'
      dp[i][3] = (dp[i - 1][2] + dp[i - 1][4]) % MOD; // 'o' can be followed by 'i' or 'u'
      dp[i][4] = dp[i - 1][0]; // 'u' can be followed by 'a'
    }

    // Sum all counts for strings of length n.
    int result = dp[n].reduce((a, b) => (a + b) % MOD);

    return result;
  }
}
```