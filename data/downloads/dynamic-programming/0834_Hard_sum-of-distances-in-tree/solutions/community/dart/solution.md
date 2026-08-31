# Dart iterative solution

**Author:** Dartist
**Votes:** 0
**Link:** [https://leetcode.com/problems/sum-of-distances-in-tree/solutions/5126370/](https://leetcode.com/problems/sum-of-distances-in-tree/solutions/5126370/)

---

# Code
```
class Solution {
  List<int> sumOfDistancesInTree(int n, List<List<int>> edges) {
    final sumDist = List.filled(n, 0);
    final visited = List.filled(n, false);
    final count = List.filled(n, 1);
    final graph = List.generate(n, (_) => <int>{});

    for (final [a, b] in edges) {
      graph[a].add(b);
      graph[b].add(a);
    }

    // DFS
    final stack = [(0, -1)];
    while (stack.isNotEmpty) {
      final (node, parent) = stack.last;
      if (visited[node] == false) {
        visited[node] = true;
        graph[node]
            .where((child) => child != parent)
            .forEach((child) => stack.add((child, node)));
      } else {
        final (node, parent) = stack.removeLast();
        if (parent != -1) {
          count[parent] += count[node];
          sumDist[parent] += sumDist[node] + count[node];
        }
      }
    }

    // BFS
    stack.add((0, -1));
    while (stack.isNotEmpty) {
      final (node, parent) = stack.removeLast();
      if (parent != -1) {
        sumDist[node] = sumDist[parent] - 2 * count[node] + graph.length;
      }
      graph[node]
          .where((child) => child != parent)
          .forEach((child) => stack.add((child, node)));
    }

    return sumDist;
  }
}
```