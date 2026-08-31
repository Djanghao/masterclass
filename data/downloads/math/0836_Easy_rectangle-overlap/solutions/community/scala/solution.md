# Scala solution

**Author:** malovig
**Votes:** 0
**Link:** [https://leetcode.com/problems/rectangle-overlap/solutions/4342637/](https://leetcode.com/problems/rectangle-overlap/solutions/4342637/)

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
    def isRectangleOverlap(rec1: Array[Int], rec2: Array[Int]): Boolean = {
      !(rec1(2) <= rec2(0) ||
        rec1(3) <= rec2(1) ||
        rec1(0) >= rec2(2) ||
        rec1(1) >= rec2(3))
    }
}
```