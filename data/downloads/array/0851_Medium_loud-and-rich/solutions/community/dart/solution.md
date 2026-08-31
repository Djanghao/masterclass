# Dart Solution

**Author:** Friendlygecko
**Votes:** 0
**Link:** [https://leetcode.com/problems/loud-and-rich/solutions/4161473/](https://leetcode.com/problems/loud-and-rich/solutions/4161473/)

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
  List<int> loudAndRich(List<List<int>> richer, List<int> quiet) {
      List<List<int>> graph = List.generate(quiet.length, (_) => []);
      List<int> indegrees = List.generate(quiet.length, (_) => 0);
      final List<int> ans = List.generate(quiet.length, (i) => i);

      for (int i = 0; i < richer.length; i++) {
          graph[richer[i][0]].add(richer[i][1]);
          indegrees[richer[i][1]] += 1;
      }

      Queue<int> q = Queue<int>();
      for (int i = 0; i < quiet.length; i++) {
          if (indegrees[i] == 0) {
              q.add(i);
          }
      }

      while (q.isNotEmpty) {
          final node = q.removeFirst();
          for (var j in graph[node]) {
              indegrees[j] -= 1;
              if (indegrees[j] == 0) {
                  q.add(j);
              }
              if (quiet[ans[j]] > quiet[ans[node]]) {
                  ans[j] = ans[node];
              }
          }
      }

      return ans;
  }
}
```