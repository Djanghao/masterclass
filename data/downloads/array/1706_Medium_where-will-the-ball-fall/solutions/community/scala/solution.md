# Scala | Recursive solution

**Author:** pasverm
**Votes:** 1
**Link:** [https://leetcode.com/problems/where-will-the-ball-fall/solutions/2766103/](https://leetcode.com/problems/where-will-the-ball-fall/solutions/2766103/)

---

# Code
```
object Solution {
  def findBall(grid: Array[Array[Int]]): Array[Int] = {
    val m = grid.length
    val n = grid(0).length

    def isStuck(row: Int, col: Int): Boolean = {
      grid(row)(col) == -1 && (col == 0 || grid(row)(col - 1) == 1) ||
      grid(row)(col) == 1 && (col == n-1 || grid(row)(col + 1) == -1)
    }
    
    def findExit(row: Int, col: Int): Int = {
      if (row == m) col
      else if (isStuck(row, col)) -1
      else findExit(row + 1, col + grid(row)(col))
    }
    
    (0 until n).map(findExit(0, _)).toArray
  }
}
```