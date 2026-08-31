# Kotlin | short solution

**Author:** SamoylenkoDmitry
**Votes:** 0
**Link:** [https://leetcode.com/problems/minesweeper/solutions/4907505/](https://leetcode.com/problems/minesweeper/solutions/4907505/)

---

Can you make it shorter?

```kotlin []

  val dirs = sequenceOf(-1 to 0, 0 to 1, 1 to 0, 0 to -1, -1 to 1, 1 to 1, 1 to -1, -1 to -1)
  fun Array<CharArray>.get(x: Int, y: Int): Char? = getOrNull(y)?.getOrNull(x)
  fun updateBoard(board: Array<CharArray>, click: IntArray): Array<CharArray> {
    val (y, x) = click; val c = board.get(x, y); if (c == 'M') board[y][x] = 'X'
    if (c == 'E') {
      val countMines = dirs.count { (dx, dy) -> board.get(x + dx, y + dy) == 'M' }
      if (countMines > 0) board[y][x] = '0' + countMines else {
        board[y][x] = 'B'
        dirs.forEach { (dx, dy) -> updateBoard(board, intArrayOf(y + dy, x + dx)) }
      }
    }
    return board
  }

```