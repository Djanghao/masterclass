# Dart, BFS graph

**Author:** Dartist
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-height-trees/solutions/5060935/](https://leetcode.com/problems/minimum-height-trees/solutions/5060935/)

---

# Code
```
class Solution {
  List<int> findMinHeightTrees(int n, List<List<int>> edges) {
    if (n == 1) {
      return [0];
    }

    var graph = List.generate(n, (_) => <int>[], growable: false);
    var indegree = List.filled(n, 0);

    for (var [a, b] in edges) {
      graph[a].add(b);
      graph[b].add(a);
      indegree[a]++;
      indegree[b]++;
    }

    var stack = <int>[];
    Iterable.generate(n).where((i) => indegree[i] == 1).forEach((i) {
      stack.add(i);
      indegree[i]--;
    });

    List<int> result = [];
    while (stack.isNotEmpty) {
      var newLevel = <int>[];
      result.clear();
      for (var current in stack) {
        result.add(current);
        for (var child in graph[current]) {
          indegree[child]--;
          if (indegree[child] == 1) {
            newLevel.add(child);
          }
        }
      }
      stack = newLevel;
    }
    return result;
  }
}
```