# Scala tailrec inplace

**Author:** SerhiyShaman
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-path-sum/solutions/4645900/](https://leetcode.com/problems/minimum-path-sum/solutions/4645900/)

---

# Code
```
object Solution {
  
  @annotation.tailrec
  def minPathSum(grid: Array[Array[Int]], shift: Int = 0): Int = {
    val maxRow = grid.length - 1
    val maxCol = grid.head.length - 1

    def addMin(r: Int, c: Int): Unit =
      if (r != 0 || c != 0) grid(r)(c) += (if (c > 0) grid(r)(c - 1) else Int.MaxValue).min(if (r > 0) grid(r - 1)(c) else Int.MaxValue)

    if (shift > maxRow || shift > maxCol) grid(maxRow)(maxCol)
    else {
      for(r <- shift     to maxRow) addMin(r, shift)
      for(c <- shift + 1 to maxCol) addMin(shift, c)
      minPathSum(grid, shift + 1)
    }
  }
}
```