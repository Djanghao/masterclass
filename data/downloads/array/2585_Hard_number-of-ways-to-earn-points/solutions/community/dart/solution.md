# [Dart] Knapsack + Coin Change, Memoization

**Author:** shinewanna97
**Votes:** 1
**Link:** [https://leetcode.com/problems/number-of-ways-to-earn-points/solutions/3272366/](https://leetcode.com/problems/number-of-ways-to-earn-points/solutions/3272366/)

---

# Code
```
class Solution {
  int waysToReachTarget(int target, List<List<int>> types) {
    int mod = 1000000007;
    int n = types.length;
    List<List<List<int?>>> dp = List.generate(
        n + 1,
        (index) => List.generate(
              target + 1,
              (index) => List.filled(51, null),
            ));

    int f(int i, int target, int count) {
      if (target == 0) {
        return 1;
      }
      if (target < 0 || i == n) {
        return 0;
      }
      if (dp[i][target][count] != null) {
        return dp[i][target][count]!;
      }
      int pick = 0;
      if (count - 1 >= 0) {
        pick = f(i, target - types[i][1], count - 1);
      }
      
      int notPick = 0;
      if (i + 1 < n) {
        notPick = f(i + 1, target, types[i + 1][0]);
      }

      return dp[i][target][count] = (pick + notPick) % mod;
    }

    return f(0, target, types[0][0]);
  }
}
```