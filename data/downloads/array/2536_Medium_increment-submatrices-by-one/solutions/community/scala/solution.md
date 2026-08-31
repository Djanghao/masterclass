# [scala] - straightforward

**Author:** nikiforo
**Votes:** 0
**Link:** [https://leetcode.com/problems/increment-submatrices-by-one/solutions/3058330/](https://leetcode.com/problems/increment-submatrices-by-one/solutions/3058330/)

---

# Code
```
object Solution {
  def rangeAddQueries(n: Int, queries: Array[Array[Int]]): Array[Array[Int]] = {
    val arr = Array.fill(n)(new Array[Int](n))
    queries.foreach { q =>
      for {
        i <- q(0) to q(2)
        j <- q(1) to q(3)
      } arr(i)(j) += 1
    }
    arr
  }
}
```