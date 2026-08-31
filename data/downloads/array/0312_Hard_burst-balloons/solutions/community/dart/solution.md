# [Dart] DP(Tabulation), Recursion + Memo

**Author:** shinewanna97
**Votes:** 0
**Link:** [https://leetcode.com/problems/burst-balloons/solutions/2914420/](https://leetcode.com/problems/burst-balloons/solutions/2914420/)

---

# Approach
Put 1 to the first and last and try all possiblities.

# DP
```
import 'dart:math' as math;

class Solution {
  int maxCoins(List<int> nums) {
    nums.add(1);
    nums.insert(0, 1);
    int n = nums.length;
    List<List<int>> dp = List.generate(n, (index) => List.filled(n, 0));

    for (var i = n - 1; i >= 1; i--) {
      for (var j = i; j <= n - 2; j++) {
        int max = -1e9.toInt();
        for (var k = i; k <= j; k++) {
          int points =
              nums[i - 1] * nums[k] * nums[j + 1] + dp[i][k - 1] + dp[k + 1][j];

          max = math.max(max, points);
        }

        dp[i][j] = max;
      }
    }
    return dp[1][n - 2];
  }
}
```
# Recursion + Memo
```
import 'dart:math' as math;

class Solution {
  int maxCoins(List<int> nums) {
    nums.add(1);
    nums.insert(0, 1);
    int n = nums.length;
    List<List<int?>> dp =
        List.generate(n - 1, (index) => List.filled(n - 1, null));

    int f(int i, int j) {
      if (i > j) {
        return 0;
      }
      if (dp[i][j] != null) {
        return dp[i][j]!;
      }
      int max = -1e9.toInt();
      for (var k = i; k <= j; k++) {
        int points =
            nums[i - 1] * nums[k] * nums[j + 1] + f(i, k - 1) + f(k + 1, j);

        max = math.max(max, points);
      }

      return dp[i][j] = max;
    }

    return f(1, n - 2);
  }
}
