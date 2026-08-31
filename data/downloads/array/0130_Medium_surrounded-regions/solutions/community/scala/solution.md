# Understandable Scala solution (beats 93.75%)

**Author:** hilltracer
**Votes:** 0
**Link:** [https://leetcode.com/problems/surrounded-regions/solutions/5129444/](https://leetcode.com/problems/surrounded-regions/solutions/5129444/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
First, we find all the regions next to the border and mark them, then we destroy all unmarked regions.

# Complexity
- Time complexity: ~= $$O(m*n + 2*m + 2*n + z)$$ where `z` is number of captured regions
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(2)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
object Solution {
  def solve(board: Array[Array[Char]]): Unit = {
    val iMax = board(0).length - 1
    val jMax = board.length - 1

    def up(i: Int, j: Int): Option[(Int, Int)] = if (j <= 0) None else Some(i, j - 1)
    def down(i: Int, j: Int): Option[(Int, Int)] = if (j >= jMax) None else Some(i, j + 1)
    def left(i: Int, j: Int): Option[(Int, Int)] = if (i <= 0) None else Some(i - 1, j)
    def right(i: Int, j: Int): Option[(Int, Int)] = if (i >= iMax) None else Some(i + 1, j)

    def mark(i: Int, j: Int): Unit = {
      board(j)(i) = '?'
      def continue(ij: (Int, Int)): Unit = if (board(ij._2)(ij._1) == 'O') mark(ij._1, ij._2)
      up(i, j).foreach(continue)
      down(i, j).foreach(continue)
      left(i, j).foreach(continue)
      right(i, j).foreach(continue)
    }


    // mark all regions on the border as '?'
    for (i <- 0 to iMax; j <- List(0, jMax)) if (board(j)(i) == 'O') mark(i, j)
    for (j <- 0 to jMax; i <- List(0, iMax)) if (board(j)(i) == 'O') mark(i, j)

    // capture all 'O' and restore '?'
    for (i <- 0 to iMax; j <- 0 to jMax) {
      board(j)(i) match {
        case 'O' => board(j)(i) = 'X'
        case '?' => board(j)(i) = 'O'
        case _ => ()
      }
    }
  }
}
```