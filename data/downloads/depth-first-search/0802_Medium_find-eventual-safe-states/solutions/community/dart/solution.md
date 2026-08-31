# Dart Solution

**Author:** Friendlygecko
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-eventual-safe-states/solutions/4151485/](https://leetcode.com/problems/find-eventual-safe-states/solutions/4151485/)

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
  List<int> eventualSafeNodes(List<List<int>> graph) {
      final List<int> indegrees = List.generate(graph.length, (_) => 0);
      final List<List<int>> g = List.generate(graph.length, (_) => []);
      final List<int> ans = [];
      Queue<int> q = Queue<int>();

      for (int i = 0; i < graph.length; i++) {
          for (int j = 0; j < graph[i].length; j++) {
              g[graph[i][j]].add(i);
              indegrees[i] += 1;
          }
      }

      for (int i = 0; i < graph.length; i++) {
          if (indegrees[i] == 0) {
              q.add(i);
          }
      }

      while (q.isNotEmpty) {
          var node = q.removeFirst();
          ans.add(node);
          for (var v in g[node]) {
              indegrees[v] -= 1;
              if (indegrees[v] == 0) {
                  q.add(v);
              }
          }
      }
      
      ans.sort();
      return ans;
  }
}
```