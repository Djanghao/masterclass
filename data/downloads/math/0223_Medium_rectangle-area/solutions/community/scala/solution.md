# Scala solution

**Author:** malovig
**Votes:** 0
**Link:** [https://leetcode.com/problems/rectangle-area/solutions/3563907/](https://leetcode.com/problems/rectangle-area/solutions/3563907/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(1)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
object Solution {
    def computeArea(ax1: Int, ay1: Int, ax2: Int, ay2: Int, bx1: Int, by1: Int, bx2: Int, by2: Int): Int = {
      val area1 = (ax2 - ax1) * (ay2 - ay1)
      val area2 = (bx2 - bx1) * (by2 - by1)
      val overlapWidth = (ax2.min(bx2) - ax1.max(bx1)).max(0)
      val overlapHeight = (ay2.min(by2) - ay1.max(by1)).max(0)
      val overlapArea = overlapWidth * overlapHeight
      area1 + area2 - overlapArea
    }
}
```