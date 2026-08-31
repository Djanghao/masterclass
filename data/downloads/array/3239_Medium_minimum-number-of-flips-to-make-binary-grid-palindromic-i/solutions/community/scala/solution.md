# scala oneliner

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-number-of-flips-to-make-binary-grid-palindromic-i/solutions/5689885/](https://leetcode.com/problems/minimum-number-of-flips-to-make-binary-grid-palindromic-i/solutions/5689885/)

---

```scala []
object Solution {
  def minFlips(grid: Array[Array[Int]]): Int = LazyList(grid, grid.transpose).map(_.map(a =>
    (a.iterator.take(a.length/2) zip a.reverseIterator.take(a.length/2)).count{case (a,b) => a!=b}
  ).sum).min
}
```