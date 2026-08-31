# Dart Solution

**Author:** 8hQubQgYlX
**Votes:** 1
**Link:** [https://leetcode.com/problems/all-ancestors-of-a-node-in-a-directed-acyclic-graph/solutions/5391853/](https://leetcode.com/problems/all-ancestors-of-a-node-in-a-directed-acyclic-graph/solutions/5391853/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
import 'dart:collection';

class Solution {


List<List<int>> getAncestors(int n, List<List<int>> edges) {
  // Create an adjacency list representation of the graph
  List<List<int>> graph = List.generate(n, (_) => []);
  List<int> inDegree = List.filled(n, 0);

  for (var edge in edges) {
    graph[edge[0]].add(edge[1]);
    inDegree[edge[1]]++;
  }

  // List to store the ancestors for each node
  List<List<int>> ancestors = List.generate(n, (_) => []);

  // Perform topological sort
  Queue<int> queue = Queue<int>();
  for (int i = 0; i < n; i++) {
    if (inDegree[i] == 0) {
      queue.add(i);
    }
  }

  while (queue.isNotEmpty) {
    int node = queue.removeFirst();

    for (var neighbor in graph[node]) {
      ancestors[neighbor].add(node);
      ancestors[neighbor].addAll(ancestors[node]);
      ancestors[neighbor] = ancestors[neighbor].toSet().toList(); // Remove duplicates

      if (--inDegree[neighbor] == 0) {
        queue.add(neighbor);
      }
    }
  }

  // Sort ancestors for each node
  for (var list in ancestors) {
    list.sort();
  }

  return ancestors;
}



}
```