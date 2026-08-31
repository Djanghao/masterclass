# Dart Dynamic Programming

**Author:** Coaspe
**Votes:** 0
**Link:** [https://leetcode.com/problems/paint-house/solutions/2860715/](https://leetcode.com/problems/paint-house/solutions/2860715/)

---

# Code
```
import 'dart:math';
class Solution {
  int minCost(List<List<int>> costs) {
      for (var n = costs.length - 2; n >= 0; n--){
        costs[n][0] += min(costs[n+1][1] , costs[n+1][2]);
        costs[n][1] += min(costs[n+1][0] , costs[n+1][2]);
        costs[n][2] += min(costs[n+1][0] , costs[n+1][1]);
      }
      return costs[0].reduce(min);
  }
}
```