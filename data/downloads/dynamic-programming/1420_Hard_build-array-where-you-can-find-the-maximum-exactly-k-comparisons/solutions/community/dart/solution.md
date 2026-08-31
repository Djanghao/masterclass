# Dart

**Author:** darv
**Votes:** 1
**Link:** [https://leetcode.com/problems/build-array-where-you-can-find-the-maximum-exactly-k-comparisons/solutions/4140053/](https://leetcode.com/problems/build-array-where-you-can-find-the-maximum-exactly-k-comparisons/solutions/4140053/)

---

We keep track of three elements:

1. The index of a sequence that we have built thus far;
2. The maximum number in the sequence thus far;
3. The score we have got already thus far;


# Code
```
class Solution {
  int numOfArrays(int n, int m, int k) {
    int MOD = 1000000007;
    final dp = List.generate(n, (_) => List.generate(m + 1, (_) => List.filled(k + 1, -1)));
    
    int helper(int idx, int max_number, int score) {
      if (score > k) return 0;
      if (idx == n) {
        if (score == k) return 1;
        else return 0;
      }
      if (dp[idx][max_number][score] == -1) {
        var res = 0;
        for (int i = max_number + 1; i <= m; i++)
          res = (res + helper(idx + 1, i, score + 1)) % MOD;
        res = (res + helper(idx + 1, max_number, score) * max_number) % MOD;
        dp[idx][max_number][score] = res;
      }
      return dp[idx][max_number][score];
    }    
    var res = 0;
    for (int i = 1; i <= m; i++)
      res = (res + helper(1, i, 1)) % MOD;
    return res;
  }
}

```