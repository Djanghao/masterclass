# Dart Solution

**Author:** Friendlygecko
**Votes:** 1
**Link:** [https://leetcode.com/problems/course-schedule-ii/solutions/4151448/](https://leetcode.com/problems/course-schedule-ii/solutions/4151448/)

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
  List<int> findOrder(int numCourses, List<List<int>> prerequisites) {
      List<int> indegrees = List.generate(numCourses, (_) => 0);
      List<List<int>> graph = List.generate(numCourses, (_) => []);
      List<int> ans = [];
      for (var p in prerequisites) {
          graph[p[1]].add(p[0]);
          indegrees[p[0]] += 1;
      }

      Queue<int> q = Queue<int>();
      for (int i = 0; i < numCourses; i++) {
          if (indegrees[i] == 0) {
              q.add(i);
          }
      }

      while (q.isNotEmpty) {
          var node = q.removeFirst();
          ans.add(node);
          for (var v in graph[node]) {
              indegrees[v] -= 1;
              if (indegrees[v] == 0) {
                  q.add(v);
              }
          }
      }

      if (ans.length == numCourses) {
          return ans;
      }

      return [];
  }
}
```