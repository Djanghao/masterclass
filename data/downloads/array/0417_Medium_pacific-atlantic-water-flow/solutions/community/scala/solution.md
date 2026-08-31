# scala solution

**Author:** Len_master
**Votes:** 2
**Link:** [https://leetcode.com/problems/pacific-atlantic-water-flow/solutions/924178/](https://leetcode.com/problems/pacific-atlantic-water-flow/solutions/924178/)

---

```scala
object Solution {
  def pacificAtlantic(matrix: Array[Array[Int]]): List[List[Int]] = {
    if (matrix.length < 1) return Nil
    var res = List.empty[List[Int]]
    val pac = Array.ofDim[Boolean](matrix.length, matrix.head.length)
    val atl = Array.ofDim[Boolean](matrix.length, matrix.head.length)
    matrix.indices.foreach(i => {
      f(matrix, i, 0, pac, matrix(i).head)
      f(matrix, i, matrix.head.length - 1, atl, matrix(i)(matrix.head.length - 1))
    })
    matrix.head.indices.foreach(i => {
      f(matrix, 0, i, pac, matrix.head(i))
      f(matrix, matrix.length - 1, i, atl, matrix(matrix.length - 1)(i))
    })
    matrix.indices.foreach(i => matrix.head.indices.foreach(j => if (pac(i)(j) && atl(i)(j)) res ::= i :: j :: Nil))
    res
  }

  def f(arr: Array[Array[Int]], x: Int, y: Int, visited: Array[Array[Boolean]], pre: Int): Unit = {
    if (x < 0 || y < 0 || x >= arr.length || y >= arr.head.length || visited(x)(y) || arr(x)(y) < pre) return
    visited(x)(y) = true
    f(arr, x + 1, y, visited, arr(x)(y))
    f(arr, x - 1, y, visited, arr(x)(y))
    f(arr, x, y + 1, visited, arr(x)(y))
    f(arr, x, y - 1, visited, arr(x)(y))
  }
}
```