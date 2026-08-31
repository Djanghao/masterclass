# Dart: Breadth-first search

**Author:** alexhutcheson
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-if-path-exists-in-graph/solutions/2929118/](https://leetcode.com/problems/find-if-path-exists-in-graph/solutions/2929118/)

---

# Approach
Convert `edges` to an [adjacency list](https://en.wikipedia.org/wiki/Adjacency_list), then do a breadth-first search from `source` to find `destination`.

# Complexity
- Time complexity: $O(n)$

- Space complexity: $O(n + m)$, where $m$ = `edges.length`

# Code
```dart
import 'dart:collection';

class Solution {
  bool validPath(int n, List<List<int>> edges, int source, int destination) {
    if (source == destination) {
      return true;
    }
    final edgeMap = _toMap(edges);
    final seen = <int>{source};
    final q = Queue<int>();
    q.add(source);
    while (q.isNotEmpty) {
      final cur = q.removeFirst();
      final neighbors = edgeMap[cur];
      if (neighbors == null) {
        continue;
      }
      for (final neighbor in neighbors) {
        if (neighbor == destination) {
          return true;
        }
        if (seen.add(neighbor)) {
          q.add(neighbor);
        }
      }
    }
    return false;
  }

  /// Creates a map of vertex ID -> adjancency list from [edges].
  Map<int, List<int>> _toMap(List<List<int>> edges) {
    final result = <int, List<int>>{};
    for (final edge in edges) {
      result.update(
        edge[0],
        (adjList) {
          adjList.add(edge[1]);
          return adjList;
        },
        ifAbsent: () => [edge[1]]
      );
      result.update(
        edge[1],
        (adjList) {
          adjList.add(edge[0]);
          return adjList;
        },
        ifAbsent: () => [edge[0]]
      );
    }
    return result;
  }
}
```