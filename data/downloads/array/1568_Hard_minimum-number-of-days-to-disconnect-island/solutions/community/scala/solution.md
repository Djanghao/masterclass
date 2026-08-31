# scala solution

**Author:** lyk4411
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-number-of-days-to-disconnect-island/solutions/5624296/](https://leetcode.com/problems/minimum-number-of-days-to-disconnect-island/solutions/5624296/)

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
  def minDays(grid: Array[Array[Int]]): Int = {
    def dfs(visited: Array[Array[Boolean]], grid: Array[Array[Int]], i: Int, j: Int): Unit = {
      if (!(i < 0 || j < 0 || i == grid.length || j == grid(0).length || visited(i)(j) || grid(i)(j) == 0)) {
        visited(i)(j) = true
        dfs(visited, grid, i - 1, j)
        dfs(visited, grid, i + 1, j)
        dfs(visited, grid, i, j - 1)
        dfs(visited, grid, i, j + 1)
      }
    }

    def noOfIsland(grid: Array[Array[Int]]): Int = {
      val visited = Array.fill(grid.length, grid(0).length)(false)
      (for {
        i <- grid.indices
        j <- grid(0).indices
        if (!visited(i)(j) && grid(i)(j) == 1)} yield (1, dfs(visited, grid, i, j))).map(_._1).sum
    }

    if (noOfIsland(grid) != 1)  0
    else if((for {
      i <- grid.indices
      j <- grid(0).indices
      if grid(i)(j) == 1
    } yield {
      grid(i)(j) = 0
      val result = noOfIsland(grid) != 1
      grid(i)(j) = 1
      result
    }).exists(identity)) 1
    else 2
  }
}
```