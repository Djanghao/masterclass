# Scala simple iteration

**Author:** eugene-f
**Votes:** 0
**Link:** [https://leetcode.com/problems/knight-probability-in-chessboard/solutions/3800963/](https://leetcode.com/problems/knight-probability-in-chessboard/solutions/3800963/)

---

```
object Solution {
  def knightProbability(n: Int, k: Int, row: Int, column: Int): Double = {
    LazyList.iterate(Map((row, column) -> 1d)) {
      _.toSeq.flatMap { case ((i, j), p) =>
        for {
          x <- Seq(-2, 2)
          y <- Seq(-1, 1)
          (k, l) <- Seq((i + x, j + y), (i + y, j + x))
          if (0 <= k && k < n) && (0 <= l && l < n)
        } yield (k, l) -> p / 8
      }.groupMapReduce(_._1)(_._2)(_ + _)
    }.apply(k).values.sum
  }
}
```