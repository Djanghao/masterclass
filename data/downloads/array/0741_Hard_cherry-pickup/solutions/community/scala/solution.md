# Scala solution

**Author:** malovig
**Votes:** 0
**Link:** [https://leetcode.com/problems/cherry-pickup/solutions/3758716/](https://leetcode.com/problems/cherry-pickup/solutions/3758716/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(n^3)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n^3)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
object Solution {
    def cherryPickup(grid: Array[Array[Int]]): Int = {
      val n = grid.length
      if (n == 1) math.max(0, grid(0)(0))
      else {
        val dp = Array.fill(50, 50, 50)(0)
        
        def dfs(arr: Array[Array[Int]], right: Int, cell1: Int, cell2: Int): Int = {
          val right2 = right + cell1 - cell2
          if (right >= n || right2 >= n || cell1 >= n || cell2 >= n || arr(right)(cell1) == -1 || arr(right2)(cell2) == -1) Int.MinValue
          else if (dp(right)(cell1)(cell2) != 0) dp(right)(cell1)(cell2)
          else if (right == n - 1 && cell1 == n - 1) arr(n - 1)(n - 1)
          else {
            var res = arr(right)(cell1)
            if (cell1 != cell2) res += arr(right2)(cell2)
            dp(right)(cell1)(cell2) = math.max(dfs(arr, right + 1, cell1, cell2), math.max(dfs(arr, right, cell1 + 1, cell2), math.max(dfs(arr, right + 1, cell1, cell2 + 1), dfs(arr, right, cell1 + 1, cell2 + 1)))) + res
            dp(right)(cell1)(cell2)
          }
        }
        
        math.max(dfs(grid, 0, 0, 0), 0)
      }
    }
}
```