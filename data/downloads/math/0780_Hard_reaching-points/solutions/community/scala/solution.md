# Scala solution

**Author:** malovig
**Votes:** 0
**Link:** [https://leetcode.com/problems/reaching-points/solutions/3665053/](https://leetcode.com/problems/reaching-points/solutions/3665053/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(log n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
object Solution {
    def reachingPoints(sx: Int, sy: Int, tx: Int, ty: Int): Boolean = {
      if (sx > tx || sy > ty) false
      else if (sx == tx && sy == ty) true
      else if (tx > ty) reachingPoints(sx, sy, tx - ty, ty)
      else reachingPoints(sx, sy, tx, ty - tx)
    }
}
```