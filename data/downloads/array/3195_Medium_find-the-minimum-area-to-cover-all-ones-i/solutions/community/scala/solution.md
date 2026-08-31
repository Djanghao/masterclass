# scala solution

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-minimum-area-to-cover-all-ones-i/solutions/5467824/](https://leetcode.com/problems/find-the-minimum-area-to-cover-all-ones-i/solutions/5467824/)

---

```scala
object Solution {
  def minimumArea(grid: Array[Array[Int]]): Int =
    val x0 = (for{i <- grid.indices; j <- grid.head.indices; if(grid(i)(j))==1} yield { (i,j) })
    val l = x0.map(_._1).min
    val r = x0.map(_._1).max
    val b = x0.map(_._2).min
    val t = x0.map(_._2).max
    (r-l+1)*(t-b+1)
}
```