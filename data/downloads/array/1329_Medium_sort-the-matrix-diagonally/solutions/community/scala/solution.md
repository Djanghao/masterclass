# Scala

**Author:** fairgrieve
**Votes:** 2
**Link:** [https://leetcode.com/problems/sort-the-matrix-diagonally/solutions/1938005/](https://leetcode.com/problems/sort-the-matrix-diagonally/solutions/1938005/)

---

```
object Solution {
  def diagonalSort(mat: Array[Array[Int]]): Array[Array[Int]] = {
    val m = mat.length
    val n = mat.headOption.map(_.length).getOrElse(0)
    
    Iterator
      .tabulate(m)(_ -> 0)
      .concat(Iterator.range(1, n).map(0 -> _))
      .map { case (i, j) => (0 until math.min(m - i, n - j)).view.map(k => (i + k, j + k)) }
      .foreach { diagonal =>
        diagonal
          .zip {
            diagonal
              .map { case (i, j) => mat(i)(j) }
              .sorted
          }
          .foreach { case ((i, j), value) => mat(i)(j) = value }
      }
    
    mat
  }
}
```