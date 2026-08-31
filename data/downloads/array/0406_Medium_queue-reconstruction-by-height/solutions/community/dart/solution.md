# Dart Solution

**Author:** Friendlygecko
**Votes:** 0
**Link:** [https://leetcode.com/problems/queue-reconstruction-by-height/solutions/4140602/](https://leetcode.com/problems/queue-reconstruction-by-height/solutions/4140602/)

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
class Solution {
  List<List<int>> reconstructQueue(List<List<int>> people) {
      final List<List<int>> ans = List.filled(people.length, [], growable: true);
      people.sort((a, b) {
          if (a.first == b.first) {
              return a.last - b.last;
          }

          return b.first - a.first;
      });

      for (var p in people) {
          ans.insert(p.last, p);
      }

      ans.removeWhere((e) => e.isEmpty);

      return ans;
  }
}
```