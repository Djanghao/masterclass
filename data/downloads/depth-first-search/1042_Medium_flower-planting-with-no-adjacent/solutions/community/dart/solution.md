# Dart

**Author:** darv
**Votes:** 0
**Link:** [https://leetcode.com/problems/flower-planting-with-no-adjacent/solutions/4147769/](https://leetcode.com/problems/flower-planting-with-no-adjacent/solutions/4147769/)

---

# Code
```
import 'dart:collection';
class Solution {
  List<int> gardenNoAdj(final int V, List<List<int>> edges) {
    final g = List.generate(V, (_) => <int>[]);
    for (List<int> edge in edges) {
      final int u = edge[0] - 1, v = edge[1] - 1;
      g[u].add(v);
      g[v].add(u);
    }
    var res = List.filled(V, 0);
    void helper(int begin) {
      if (res[begin] != 0) return;
      final q = Queue<int>();
      q.addLast(begin);
      res[begin] = 1;
      List<bool> work = List.filled(5, false);
      for (int step = 1; q.isNotEmpty; step++) {
        for (int b = q.length; b > 0; b--) {
          final now = q.removeFirst();
          for (int next in g[now]) {
            if (res[next] != 0) continue;

            work.fillRange(0, work.length, false);
            for (int next_next in g[next])
              work[res[next_next]] = true;

            for (int i = 1; i < work.length; i++) {
              if (!work[i]) {
                res[next] = i;
                break;
              }
            }

            q.addLast(next);
          }
        }
      }
    }
    
    for (int i = 0; i < V; i++) helper(i);
    return res;
  }
}

```