# Dart

**Author:** darv
**Votes:** 0
**Link:** [https://leetcode.com/problems/painting-the-walls/solutions/4166359/](https://leetcode.com/problems/painting-the-walls/solutions/4166359/)

---

# Code
```
import 'dart:math';
class Solution {
  int paintWalls(List<int> cost, List<int> time) {
    final int M = cost.length;
    final memo =
        List.generate(M, (_) => List.filled(M + 1, -1));
    final BAD = 1e9.toInt();

    int dfs(int idx, int houses) {
      if (houses <= 0) return 0;
      if (idx == cost.length) return BAD;
      if (memo[idx][houses] == -1)
        memo[idx][houses] = min(dfs(idx + 1, houses),
            dfs(idx + 1, houses - 1 - time[idx]) + cost[idx]);
      return memo[idx][houses];
    }
    return dfs(0, M);
  }
}
```