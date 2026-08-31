# Scala solution

**Author:** malovig
**Votes:** 0
**Link:** [https://leetcode.com/problems/self-crossing/solutions/3770599/](https://leetcode.com/problems/self-crossing/solutions/3770599/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
object Solution {
    def isSelfCrossing(distance: Array[Int]): Boolean =
      if (distance.length <= 3) false
      else (3 until distance.length).exists(e =>
          distance(e - 2) <= distance(e) && distance(e - 1) <= distance(e - 3) ||
          e >= 4 && distance(e - 1) == distance(e - 3) && distance(e - 2) <= distance(e) + distance(e - 4) ||
          e >= 5 && distance(e - 4) <= distance(e - 2) && distance(e - 2) <= distance(e) + distance(e - 4) && distance(e - 1) <= distance(e - 3) && distance(e - 3) <= distance(e - 1) + distance(e - 5))
}
```