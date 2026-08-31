# dart...!

**Author:** 0varun
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-time-visiting-all-points/solutions/4476681/](https://leetcode.com/problems/minimum-time-visiting-all-points/solutions/4476681/)

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
  int minTimeToVisitAllPoints(List<List<int>> points) {
    int totalTime = 0;

    for (int i = 0; i < points.length - 1; i++) {
      int dx = (points[i + 1][0] - points[i][0]).abs();
      int dy = (points[i + 1][1] - points[i][1]).abs();
      totalTime += dx > dy ? dx : dy;
    }

    return totalTime;
  }
}

```