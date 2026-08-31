# scala solution

**Author:** lyk4411
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-fuel-cost-to-report-to-the-capital/solutions/3546530/](https://leetcode.com/problems/minimum-fuel-cost-to-report-to-the-capital/solutions/3546530/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
object Solution {
  def minimumFuelCost(roads: Array[Array[Int]], seats: Int): Long = {
    import scala.collection.mutable.{Map, ListBuffer}
    val adjacent = Map.empty[Int, ListBuffer[Int]]
    for (Array(a, b) <- roads) {
      adjacent.getOrElseUpdate(a, new ListBuffer[Int]) += b
      adjacent.getOrElseUpdate(b, new ListBuffer[Int]) += a
    }
    def dfs(node: Int, parent: Int, representatives: Long = 1): (Long, Long) = {
      adjacent.get(node) match {
        case Some(neighbors) =>
          val res = (for {neighbor <- neighbors if neighbor != parent} yield dfs(neighbor, node))
          val t1 = res.map(_._1).sum + representatives
          if (node != 0) (t1, (t1.toDouble / seats).ceil.toLong + res.map(_._2).sum) else (t1, res.map(_._2).sum)
        case None => (1, 0)
      }
    }
    dfs(0, -1)._2
  }
}
```