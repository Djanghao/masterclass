# DP fast

**Author:** aospiridonov
**Votes:** 0
**Link:** [https://leetcode.com/problems/k-inverse-pairs-array/solutions/4633332/](https://leetcode.com/problems/k-inverse-pairs-array/solutions/4633332/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: $$O(n\\cdot k)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(k+1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
  int kInversePairs(int n, int k) {
    const int MOD = 1000000007;
    final dp = List.filled(k + 1, 0);
    dp[0] = 1;
    for (int i = 2; i <= n; i++) {
      for (int j = 1; j <= k; j++) {
        dp[j] = (dp[j] + dp[j - 1]) % MOD;
      }
      for (int j = k; j >= i; j--) {
        dp[j] = (dp[j] - dp[j - i] + MOD) % MOD;
      }
    }
    return dp[k];
  }
}
```