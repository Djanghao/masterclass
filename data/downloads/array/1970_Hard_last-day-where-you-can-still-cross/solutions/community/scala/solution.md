# Scala solution

**Author:** malovig
**Votes:** 0
**Link:** [https://leetcode.com/problems/last-day-where-you-can-still-cross/solutions/3699169/](https://leetcode.com/problems/last-day-where-you-can-still-cross/solutions/3699169/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(m*n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(m*n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
object Solution {
    def latestDayToCross(row: Int, col: Int, cells: Array[Array[Int]]): Int = {
        val grid = Array.ofDim[Int](row, col)
        for (i <- cells.indices) grid(cells(i)(0) - 1)(cells(i)(1) - 1) = i + 1
        var low = 0
        var high = cells.length
        var res = -1
        while (low < high) {
          val day = high - (high - low) / 2
          var isWay = false
          for (i <- 0 until col if !isWay) isWay = isWay || DFS(0, i, row, col, grid, day, Array.ofDim[Boolean](row, col))
          if (isWay) {
            low = day
            res = day
          } 
          else high = day - 1
        }
        res
      }

      def DFS(i: Int, j: Int, row: Int, col: Int, grid: Array[Array[Int]], day: Int, tgrid: Array[Array[Boolean]]): Boolean = 
        if (i < 0 || j < 0 || i >= row || j >= col || grid(i)(j) <= day || tgrid(i)(j)) false
        else if (i == row - 1) true
          else {
            tgrid(i)(j) = true
            DFS(i + 1, j, row, col, grid, day, tgrid) ||
            DFS(i, j + 1, row, col, grid, day, tgrid) ||
            DFS(i - 1, j, row, col, grid, day, tgrid) ||
            DFS(i, j - 1, row, col, grid, day, tgrid)
        }
}
```