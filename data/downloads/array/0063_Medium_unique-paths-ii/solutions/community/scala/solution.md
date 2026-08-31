# Scala inplace tailrec

**Author:** SerhiyShaman
**Votes:** 0
**Link:** [https://leetcode.com/problems/unique-paths-ii/solutions/4648098/](https://leetcode.com/problems/unique-paths-ii/solutions/4648098/)

---

# Code
```
object Solution {
  @annotation.tailrec
  def uniquePathsWithObstacles(grid: Array[Array[Int]], shift: Int = 0): Int = {
    val maxRow = grid.length - 1
    val maxCol = grid.head.length - 1

    def sumPaths(r: Int, c: Int): Unit = {
      if (grid(r)(c) == 1) 
        grid(r)(c) = -1
      else if (r == 0 && c == 0)
        grid(r)(c) = 1
      else
        grid(r)(c) = (if (c > 0 && grid(r)(c - 1) != -1) grid(r)(c - 1) else 0) + (if (r > 0 && grid(r - 1)(c) != -1) grid(r - 1)(c) else 0)
    }

    if (shift > maxRow || shift > maxCol) 
      if (grid(maxRow)(maxCol) == -1) 0 else grid(maxRow)(maxCol)
    else {
      for(r <- shift     to maxRow) sumPaths(r, shift)
      for(c <- shift + 1 to maxCol) sumPaths(shift, c)
      uniquePathsWithObstacles(grid, shift + 1)
    }
  }
}
```