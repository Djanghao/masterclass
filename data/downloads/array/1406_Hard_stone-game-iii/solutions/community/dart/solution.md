# [Dart] DP, O(n) Time, O(1) Space

**Author:** aospiridonov
**Votes:** 0
**Link:** [https://leetcode.com/problems/stone-game-iii/solutions/3566443/](https://leetcode.com/problems/stone-game-iii/solutions/3566443/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
  String stoneGameIII(List<int> stoneValue) {
    int n = stoneValue.length;
    final dp = [0, 0, 0, 0];
    for (int i = n - 1; i >= 0; i--) {
      dp[i % 4] = stoneValue[i] - dp[(i + 1) % 4];
      if (i + 2 <= n) {
        dp[i % 4] =
            max(dp[i % 4], stoneValue[i] + stoneValue[i + 1] - dp[(i + 2) % 4]);
      }
      if (i + 3 <= n) {
        dp[i % 4] = max(
            dp[i % 4],
            stoneValue[i] +
                stoneValue[i + 1] +
                stoneValue[i + 2] -
                dp[(i + 3) % 4]);
      }
    }
    if (dp[0] > 0) return 'Alice';
    if (dp[0] < 0) return 'Bob';
    return 'Tie';
  }
}
```