# [Dart] DFS + Memo && Well explained

**Author:** shinewanna97
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-value-of-k-coins-from-piles/solutions/3223816/](https://leetcode.com/problems/maximum-value-of-k-coins-from-piles/solutions/3223816/)

---

# Intuition
Can only pick from start, so j always start from 0. How many I can pick for each time? k piles I can pick, but here if piles doesn't have k element in next pile, so for that case min(piles[i].length, k). Others are explained in the code as comment.

# Complexity
- Time complexity:
O(NK)

- Space complexity:
O(NK)

# Code
```
class Solution {
  int maxValueOfCoins(List<List<int>> piles, int k) {
    int n = piles.length;
    List<List<int?>> dp = List.generate(
      n + 1,
      (index) => List.filled(k + 1, null),
    );

    int f(int i, int k) {
      if (i == n || k == 0) {
        return 0;
      }
      if (dp[i][k] != null) {
        return dp[i][k]!;
      }
      int best = f(i + 1, k); // Not Pick
      int sum = 0;
      // Can pick till k or if piles length is lower than k, can only pick up to pile length
      for (var j = 0; j < min(piles[i].length, k); j++) {
        // This sum is used for sum of we pick from the first pile
        sum += piles[i][j];
        // The above sum can be multiple piles, we might pick multiple piles from first pile, so the left amount will be calulated by k - 1 - j
        int rec = sum + f(i + 1, k - 1 - j);
        // Pick best among all
        best = max(best, rec);
      }

      return dp[i][k] = best;
    }

    return f(0, k);
  }
}
```