# scala easy solution

**Author:** lyk4411
**Votes:** 0
**Link:** [https://leetcode.com/problems/disconnect-path-in-a-binary-matrix-by-at-most-one-flip/solutions/3395521/](https://leetcode.com/problems/disconnect-path-in-a-binary-matrix-by-at-most-one-flip/solutions/3395521/)

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
    def isPossibleToCutPath(grid: Array[Array[Int]]): Boolean = {
        def isReachable(grid: Array[Array[Int]], i: Int, j: Int):Boolean = {
            if(i == grid.length - 1 && j == grid(0).length - 1) return true
            if(i >= grid.length || j >= grid(0).length || grid(i)(j) == 0) return false
            grid(i)(j) = 0
            isReachable(grid, i + 1, j) || isReachable(grid, i, j + 1)
        }
        if (!isReachable(grid, 0, 0)) return true
        grid(0)(0) = 1
        if (!isReachable(grid, 0, 0)) return true
        false
    }
}
```