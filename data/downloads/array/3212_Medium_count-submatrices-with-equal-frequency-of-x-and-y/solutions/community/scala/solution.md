# scala solution

**Author:** user3116J
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-submatrices-with-equal-frequency-of-x-and-y/solutions/5447507/](https://leetcode.com/problems/count-submatrices-with-equal-frequency-of-x-and-y/solutions/5447507/)

---

# Code
```
object Solution {
  def numberOfSubmatrices(grid: Array[Array[Char]]): Int = {
    val n = grid.head.size
    val arr = Array.fill(grid.head.size)(0, 0)
    grid.foldLeft(0) { (res, line) =>
      line.zipWithIndex.foldLeft(0, 0) { case ((x, y), (c, i)) =>
        val updated@(xxx, yyy) = c match {
          case '.' => (x, y)
          case 'X' => (x + 1, y)
          case 'Y' => (x, y + 1)
        }
        val (xx, yy) = arr(i)
        arr(i) = (xx + xxx, yy + yyy)
        updated
      }
      res + arr.count { case (x, y) => x == y && x > 0 }
    }
  }
}
```