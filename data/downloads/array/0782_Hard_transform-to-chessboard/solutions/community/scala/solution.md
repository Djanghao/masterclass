# Scala

**Author:** HeavenWatcher
**Votes:** 0
**Link:** [https://leetcode.com/problems/transform-to-chessboard/solutions/4351634/](https://leetcode.com/problems/transform-to-chessboard/solutions/4351634/)

---

```scala
object Solution {
  def movesToChessboard(board: Array[Array[Int]]): Int = {
    def half(x: Int) = x == board.length / 2 || x == (board.length + 1) / 2
    val vec_board = board.map(_.toVector)
    val patterns = vec_board.toSet
    Option
      .when(patterns.size == 2)(patterns.head, patterns.last)
      .filter { case (p1, p2) =>
        p1.zip(p2).forall(t => t._1 != t._2) && half(vec_board.count(_ == p1)) && half(p1.count(_ == 0))
      }
      .map { case (p1, p2) =>
        val d = Seq(0, 1).maxBy(x => p1.count(_ == x))
        val p = Seq(p1, p2).maxBy(x => vec_board.count(_ == x))
        val bad_cols = p1.zipWithIndex.count { case (x, i) => (i % 2 == 0) ^ (x == d) }
        val bad_rows = vec_board.zipWithIndex.count { case (row, i) => (i % 2 == 0) ^ (row == p) }
        Seq(bad_cols, bad_rows).map { x =>
          if (board.size % 2 != 0) x else x min (board.size - x)
        }.sum / 2
      }
      .getOrElse(-1)
  }
}
```