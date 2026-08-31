# Scala DFS

**Author:** quanyincode
**Votes:** 0
**Link:** [https://leetcode.com/problems/minesweeper/solutions/4748691/](https://leetcode.com/problems/minesweeper/solutions/4748691/)

---

# Approach
Recursive depth-first search. Follow the rules to update cells.

# Complexity
- Time complexity:
O(m*n)

- Space complexity:
O(m*n)

# Code
```
object Solution {
  def updateBoard(board: Array[Array[Char]], click: Array[Int]): Array[Array[Char]] = {
    val m = board.length
    val n = board.head.length
    val x = click(0)
    val y = click(1)

    val adjacentCells = (x: Int, y: Int) =>
      List((-1, -1), (-1, 0), (-1, 1), (0, -1), (0, 1), (1, -1), (1, 0), (1, 1))
        .map(p => (x + p._1, y + p._2))
        .filter(p => p._1 >= 0 && p._1 < m && p._2 >= 0 && p._2 < n) // boundary check

    def dfs(x: Int, y: Int): Unit = {
      if (board(x)(y) == 'E') {
        val mines = adjacentCells(x, y).count(p => board(p._1)(p._2) == 'M')
        if (mines > 0) board(x)(y) = (mines + '0').toChar
        else {
          board(x)(y) = 'B'
          adjacentCells(x, y).map(p => dfs(p._1, p._2))
        }
      }
    }

    if (board(x)(y) == 'M') board(x)(y) = 'X'
    else dfs(x, y)

    board
  }
}
```