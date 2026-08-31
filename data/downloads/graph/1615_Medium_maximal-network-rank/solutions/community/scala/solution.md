# Scala simple for comprehension

**Author:** eugene-f
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximal-network-rank/solutions/3926246/](https://leetcode.com/problems/maximal-network-rank/solutions/3926246/)

---

```
object Solution {
  def maximalNetworkRank(n: Int, roads: Array[Array[Int]]): Int = {
    val as = (roads ++ roads.map(_.reverse))
      .groupMapReduce(_.head)(_.tail.toSet)(_ | _)
      .withDefaultValue(Set())

    (for {
      Seq(i, j) <- (0 until n).combinations(2)
      z = if (as(i) contains j) 1 else 0
    } yield as(i).size + as(j).size - z).max
  }
}
```