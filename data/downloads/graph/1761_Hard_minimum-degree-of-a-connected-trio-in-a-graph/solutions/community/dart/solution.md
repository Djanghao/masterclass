# Dart solution

**Author:** darv
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-degree-of-a-connected-trio-in-a-graph/solutions/3770876/](https://leetcode.com/problems/minimum-degree-of-a-connected-trio-in-a-graph/solutions/3770876/)

---

# Code
```
import 'dart:math';

class Solution {
  int minTrioDegree(int n, List<List<int>> edges) {
    final conn = List.generate(n + 1, (_) => List.filled(n + 1, false));

    final degrees = List.filled(n + 1, 0);

    for (final edge in edges) {
      final a = edge[0], b = edge[1];
      degrees[a]++;
      degrees[b]++;
      conn[a][b] = conn[b][a] = true;
    }

    final IMP = 1 << 30;

    int res = IMP;

    for (final edge in edges) {
      final int b = edge[0], c = edge[1];
      for (int a = min(b, c) - 1; a > 0; a--) {
        if (conn[a][b] && conn[a][c])
          res = min(res, degrees[a] + degrees[b] + degrees[c] - 6);
      }
    }

    return res == IMP ? -1 : res;
  }
}
```