# Dart, iterative solution

**Author:** Dartist
**Votes:** 1
**Link:** [https://leetcode.com/problems/reorder-routes-to-make-all-paths-lead-to-the-city-zero/solutions/5050593/](https://leetcode.com/problems/reorder-routes-to-make-all-paths-lead-to-the-city-zero/solutions/5050593/)

---

# Note
The regular recursive version does not work in Dart because it will overlow the stack. It has to be converted that an iterative solution. Here I'm using a simple list as a stack.

# Code
```
class Solution {
  int minReorder(int n, List<List<int>> connections) {
    final graph = List.generate(n, (_) => <int>{}, growable: false);
    // Build graph
    for (final [from, to] in connections) {
      graph[from].add(to);
      graph[to].add(-from);
    }

    final visited = List.filled(n, false);
    visited[0] = true;
    int count = 0;
    List<int> stack = [0];

    while (stack.isNotEmpty) {
      var node = stack.removeLast();
      for (var item in graph[node]) {
        var city = item.abs();
        if (!visited[city]) {
          visited[city] = true;
          if (item > 0) {
            count++;
          }
          stack.add(city);
        }
      }
    }
    return count;
  }
}
```