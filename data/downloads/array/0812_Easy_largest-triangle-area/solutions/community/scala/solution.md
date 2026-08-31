# Easy Scala Solution .

**Author:** HARSHIDAS_21
**Votes:** 0
**Link:** [https://leetcode.com/problems/largest-triangle-area/solutions/5309113/](https://leetcode.com/problems/largest-triangle-area/solutions/5309113/)

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
object Solution {
    def largestTriangleArea(points: Array[Array[Int]]): Double = {
    (for{
      i <- points
      j <- points
      k <- points
    }yield (0.5 * Math.abs(i(0) * j(1) + j(0) * k(1) + k(0) * i(1)- j(0) * i(1) - k(0) * j(1) - i(0) * k(1)))).max
  }
}
```