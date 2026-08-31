# scala one line solution.

**Author:** lyk4411
**Votes:** 0
**Link:** [https://leetcode.com/problems/delete-greatest-value-in-each-row/solutions/3097841/](https://leetcode.com/problems/delete-greatest-value-in-each-row/solutions/3097841/)

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
    def deleteGreatestValue(grid: Array[Array[Int]]): Int = 
            grid.map(_.sorted).transpose.map(_.max).sum

   
}
```