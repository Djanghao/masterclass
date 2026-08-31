# scala

**Author:** Len_master
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-valid-paths-in-a-tree/solutions/4137375/](https://leetcode.com/problems/count-valid-paths-in-a-tree/solutions/4137375/)

---

``` scala
import scala.collection.mutable

object Solution {
  private val MX: Int = 1e5.toInt
  private val np: Array[Boolean] = Array.ofDim[Boolean](MX + 1)

  np(1) = true
  (2 to math.sqrt(MX).toInt)
    .withFilter(i => !np(i))
    .foreach(i => (i * i to MX by i)
      .foreach(j => np(j) = true))

  def countPaths(n: Int, edges: Array[Array[Int]]): Long = {
    val g = Array.fill(n + 1)(mutable.Buffer.empty[Int])
    edges.foreach(e => {
      val x = e.head
      val y = e(1)
      g(x).append(y)
      g(y).append(x)
    })

    var res = 0L
    val size = Array.ofDim[Int](n + 1)
    val nodes = mutable.Buffer.empty[Int]
    (1 to n)
      .withFilter(x => !np(x))
      .foreach(x => {
        var sum = 0
        g(x)
          .withFilter(y => np(y))
          .foreach(y => {
            if (size(y) == 0) {
              nodes.clear()
              f(y, -1, g, nodes)
              nodes.foreach(z => size(z) = nodes.size)
            }
            res += size(y).toLong * sum
            sum += size(y)
          })
        res += sum
      })
    res
  }

  private def f(x: Int, fa: Int, g: Array[mutable.Buffer[Int]], nodes: mutable.Buffer[Int]): Unit = {
    nodes.append(x)
    g(x)
      .withFilter(y => y != fa && np(y))
      .foreach(y => f(y, x, g, nodes))
  }
}
```