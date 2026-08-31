# scala 1 line solution

**Author:** lyk4411
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-area-of-longest-diagonal-rectangle/solutions/4555531/](https://leetcode.com/problems/maximum-area-of-longest-diagonal-rectangle/solutions/4555531/)

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
    def areaOfMaxDiagonal(dimensions: Array[Array[Int]]): Int = 
    dimensions.sortBy(n => ((n(0) * n(0) + n(1) * n(1)), n(0) * n(1))).last.product


    
}
```