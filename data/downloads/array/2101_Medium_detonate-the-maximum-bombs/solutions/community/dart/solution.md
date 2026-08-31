# Most Intuitive Solution

**Author:** moessam00
**Votes:** 0
**Link:** [https://leetcode.com/problems/detonate-the-maximum-bombs/solutions/5138305/](https://leetcode.com/problems/detonate-the-maximum-bombs/solutions/5138305/)

---

# Code
```
import 'dart:collection';
import 'dart:math';

class Solution {
  int maximumDetonation(List<List<int>> bombs) {
    int n = bombs.length;
    HashMap<int, List<int>> graph = HashMap();

    // construct the graph
    for (var i = 0; i < n; i++) {
      for (var j = 0; j < n; j++) {
        if (canIDetonateJ(bombs[i], bombs[j])) {
          graph.update(
            i,
            (value) => value..add(j),
            ifAbsent: () => [j],
          );
        }
        if (canIDetonateJ(bombs[j], bombs[i])) {
          graph.update(
            j,
            (value) => value..add(i),
            ifAbsent: () => [i],
          );
        }
      }
    }

    // traverse to find the max nodes for each subgraph
    int ans = 1;
    for (var i = 0; i < n; i++) {
      List<bool> seen = List.filled(n, false);
      seen[i] = true;
      List<int> stack = [i];
      int count = 1;
      while (stack.isNotEmpty) {
        int node = stack.removeLast();
        for (var neighbor in graph[node]!) {
          if (!seen[neighbor]) {
            seen[neighbor] = true;
            count++;
            stack.add(neighbor);
          }
        }
      }
      ans = max(ans, count);
    }
    return ans;
  }

  bool canIDetonateJ(List<int> bombI, List<int> bombJ) {
    var [xi, yi, ri] = bombI;
    var [xj, yj, _] = bombJ;

    int distance = ri * ri;

    int ecuDistance = (xi - xj) * (xi - xj) + (yi - yj) * (yi - yj);

    return distance >= ecuDistance;
  }
}

```