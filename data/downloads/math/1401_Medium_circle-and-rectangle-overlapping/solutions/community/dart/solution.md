# Dart Solution

**Author:** Friendlygecko
**Votes:** 0
**Link:** [https://leetcode.com/problems/circle-and-rectangle-overlapping/solutions/4005966/](https://leetcode.com/problems/circle-and-rectangle-overlapping/solutions/4005966/)

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
  bool checkOverlap(int radius, int xCenter, int yCenter, int x1, int y1, int x2, int y2) {
      final miniX = max(x1, min(x2, xCenter));
      final miniY = max(y1, min(y2, yCenter));
      final distance = sqrt(pow(miniX - xCenter, 2) + pow(miniY - yCenter, 2)).toInt();
      return distance <= radius;
  }
}
```