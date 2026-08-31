# short scala dfs solution

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/flower-planting-with-no-adjacent/solutions/3042823/](https://leetcode.com/problems/flower-planting-with-no-adjacent/solutions/3042823/)

---

# Approach
graph coloring

# Code
```
object Solution {
  val fourColors = (1 to 4).toSet
  def gardenNoAdj(n: Int, paths: Array[Array[Int]]): Array[Int] = {
    val groups = paths.map(_.sorted.reverse).groupMap(_ (0))(_ (1)).mapValues(_.toSet).toMap
    val ans = Array.fill(n+1)(0)
    def impl(i: Int): Unit =
      if(i <= n && ans(i) == 0) {
        lazy val childrenColors = groups.getOrElse(i,Set()).map(i => ans(i))
        lazy val diff = fourColors removedAll childrenColors
        ans(i) = diff.min
        diff.foreach(impl)
      }
    (1 to n) foreach (impl(_))
    ans.tail
  }
}
```