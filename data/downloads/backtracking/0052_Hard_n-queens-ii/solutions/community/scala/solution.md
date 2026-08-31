# Scala FP improved permutations filtering

**Author:** SerhiyShaman
**Votes:** 1
**Link:** [https://leetcode.com/problems/n-queens-ii/solutions/4655508/](https://leetcode.com/problems/n-queens-ii/solutions/4655508/)

---

Based on https://leetcode.com/problems/n-queens/solutions/1891724/Scala-3-liner-excluding-function-declaration-FP-approach/

Improvements:
1) only half of permutations are verified (reverse ones are skipped):
skipping is fast because `.permutations` iterator actually returns `IndexedSeq[Int]`
2) separate & faster reverce DiagonalCheck

# Code
```
object Solution {
  def totalNQueens(n: Int): Int = {
    def diagonalCheck(board: IndexedSeq[Int]) = (0 until n).map(i => board(i) - i).distinct.length == n
    def reverceDiagonalCheck(board: IndexedSeq[Int]) = (0 until n).map(i => board(n - 1 - i) - i).distinct.length == n

    if (n == 1) 1
    else 2 * (0 until n).permutations.count(board => board(0) < board(n - 1) && diagonalCheck(board) && reverceDiagonalCheck(board))
  }
}
```