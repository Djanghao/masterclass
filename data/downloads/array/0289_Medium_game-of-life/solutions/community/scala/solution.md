# scala functional, clean and understandable

**Author:** nrain8481
**Votes:** 2
**Link:** [https://leetcode.com/problems/game-of-life/solutions/1282733/](https://leetcode.com/problems/game-of-life/solutions/1282733/)

---

```scala
object Solution {
    def gameOfLife(board: Array[Array[Int]]): Unit = {
        val neighbors = List((-1, -1), (-1, 0), (-1, 1), (0, -1), (0, 1), (1, -1), (1, 0), (1, 1))
        for (i <- 0 until board.length; j <- 0 until board.head.length) {
            val lives = neighbors.map(p => (i+p._1, j+p._2)).
                filter(p => {p._1 >= 0 && p._1 < board.length && p._2 >= 0 && p._2 < board.head.length}).
                map(p => board(p._1)(p._2)).
                count(p => {p >= 1 && p <= 2})
            board(i)(j) match {
                case 1 => {
                    if (lives < 2 || lives > 3) {
                        board(i)(j) = 2
                    }
                }
                case 0 => {
                    if (lives == 3) board(i)(j) = 3
                }
            }
        }
        for (i <- 0 until board.length; j <- 0 until board.head.length) {
            board(i)(j) match {
                case 2 => board(i)(j) = 0
                case 3 => board(i)(j) = 1
                case v => ()
            }
        }
    }
}
```