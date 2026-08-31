# scala prefix/suffux sums with reverse&transpose

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/right-triangles/solutions/5480235/](https://leetcode.com/problems/right-triangles/solutions/5480235/)

---

```scala
object Solution {
  def numberOfRightTriangles(grid: Array[Array[Int]]): Long = 
    val pfx1 = grid.map(_.iterator.scanLeft(0L)(_ + _).drop(1).to(Vector)).to(Vector)
    val sfx1 = grid.map(_.reverseIterator.scanLeft(0L)(_ + _).drop(1).to(Vector).reverse).to(Vector)
    val pfx2 = grid.transpose.map(_.iterator.scanLeft(0L)(_ + _).drop(1).to(Vector)).to(Vector).transpose
    val sfx2 = grid.transpose.map(_.reverseIterator.scanLeft(0L)(_ + _).drop(1).to(Vector).reverse).to(Vector).transpose
    (for {i <- grid.indices; j <- grid.head.indices}  yield{
      (pfx1(i)(j)+sfx1(i)(j)-2)*(pfx2(i)(j)+sfx2(i)(j)-2) * grid(i)(j)
    }).sum
}
```