# Dart Solution

**Author:** Friendlygecko
**Votes:** 0
**Link:** [https://leetcode.com/problems/rectangle-area/solutions/3793652/](https://leetcode.com/problems/rectangle-area/solutions/3793652/)

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
  int computeArea(int ax1, int ay1, int ax2, int ay2, int bx1, int by1, int bx2, int by2) {
      final area1 = (ax2 - ax1) * (ay2 - ay1);
      final area2 = (bx2 - bx1) * (by2 - by1);
      final a1min = max(ax1, bx1);
      final a2min = min(ax2, bx2);
      final b1min = max(ay1, by1);
      final b2min = min(ay2, by2);
      final overlap = max(0, a2min - a1min) * max(0, b2min - b1min);
      return (area1 + area2) - overlap.toInt();
  }
}
```