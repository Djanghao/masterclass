# simple solution

**Author:** iftixorrustamovv
**Votes:** 0
**Link:** [https://leetcode.com/problems/queries-on-number-of-points-inside-a-circle/solutions/5715330/](https://leetcode.com/problems/queries-on-number-of-points-inside-a-circle/solutions/5715330/)

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
```dart []
import 'dart:math';

class Solution {
  List<int> countPoints(List<List<int>> points, List<List<int>> queries) {
    List<int> answers = [];

    queries.forEach((q) {
      int count = 0;
      points.forEach((p) {
        if (pow(p[0] - q[0], 2) + pow(p[1] - q[1], 2) <= pow(q[2], 2)) {
          count++;
        }
      });
      answers.add(count);
    });
    return answers;
  }
}

```