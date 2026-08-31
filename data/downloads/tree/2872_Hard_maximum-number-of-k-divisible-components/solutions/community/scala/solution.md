# [scala] - immutable

**Author:** HeavenWatcher
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-number-of-k-divisible-components/solutions/4417736/](https://leetcode.com/problems/maximum-number-of-k-divisible-components/solutions/4417736/)

---

```scala
object Solution {
  def maxKDivisibleComponents(n: Int, edges: Array[Array[Int]], values: Array[Int], k: Int): Int = {
    val adj = edges
      .flatMap { case Array(x, y) => Seq(x -> y, y -> x)}
      .groupBy(_._1).view
      .mapValues(_.map(_._2)).toMap
      .withDefaultValue(Array.empty)

    def go(root: Int, vis: Set[Int]): (Long, Int) = {
      val res = adj(root)
        .filter(!vis.contains(_))
        .map(go(_, vis + root))
      val sums = res.map(_._1)
      val splits = res.map(_._2)
      (sums.sum + values(root), splits.sum + sums.count(_ % k == 0))
    }

    go(0, Set[Int]())._2 + 1
  }
}
```