# Dart Solution

**Author:** 8hQubQgYlX
**Votes:** 0
**Link:** [https://leetcode.com/problems/min-cost-climbing-stairs/solutions/5361854/](https://leetcode.com/problems/min-cost-climbing-stairs/solutions/5361854/)

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
  int minCostClimbingStairs(List<int> cost) {
    int n = cost.length;
    if (n == 0) return 0;
    if (n == 1) return cost[0];

    List<int> dp = List<int>.filled(n + 1, 0);

    dp[0] = 0;
    dp[1] = 0;

    for( int i = 2; i <= n; i++) {
        dp[i] = min(dp[i - 1] + cost[i - 1], dp[i -2] + cost[i - 2]);
    }

    return dp[n];
  }

}
```