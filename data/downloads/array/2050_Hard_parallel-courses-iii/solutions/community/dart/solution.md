# Dart solution, topological sort, O(N+E)

**Author:** yakiv_galkin
**Votes:** 0
**Link:** [https://leetcode.com/problems/parallel-courses-iii/solutions/2902774/](https://leetcode.com/problems/parallel-courses-iii/solutions/2902774/)

---

# Intuition
A simple (medium level) task as its definition exactly matches topological sort problem. 

# Approach
Standard topological sort algorithm fits out needs the best.

# Complexity
- Time complexity:
 $$O(N+E)$$  - while processing every node N in the queue we visit every edge E only once.

- Space complexity:
N+E - same we built indefgee array (N) and also used a map to store all edges E for quick O(1) access to node's edges.

# Code
```
import 'dart:collection';

class Solution {
  int minimumTime(int n, List<List<int>> relations, List<int> time) {
    final dag = Map<int, List<int>>();
    final indegree = List<int>.filled(n + 1, 0);
    final maxTime = List<int>.filled(n + 1, 0);

    for (var r in relations) {
      if (!dag.containsKey(r[0]))
        dag[r[0]] = [r[1]];
      else
        dag[r[0]]!.add(r[1]);
      indegree[r[1]]++;
    }
    final queue = Queue<int>();
    for (int i = 1; i <= n; i++)
      if (indegree[i] == 0) {
        maxTime[i] = time[i - 1];
        queue.add(i);
      }

    while (queue.isNotEmpty) {
      int q = queue.removeFirst();
      if (dag[q] != null)
        for (var next in dag[q]!) {
          maxTime[next] = max(maxTime[next], maxTime[q] + time[next - 1]);
          if (--indegree[next] == 0) queue.add(next);
        }
    }

    return maxTime.reduce(max);
  }
}

```