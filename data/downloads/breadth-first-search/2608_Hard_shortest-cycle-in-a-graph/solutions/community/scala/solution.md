# [scala] - dfs

**Author:** nikiforo
**Votes:** 0
**Link:** [https://leetcode.com/problems/shortest-cycle-in-a-graph/solutions/3366536/](https://leetcode.com/problems/shortest-cycle-in-a-graph/solutions/3366536/)

---

# Code
```
object Solution {
   def findShortestCycle(n: Int, edges: Array[Array[Int]]): Int = {
    val destMap = scala.collection.mutable.Map.empty[Int, List[Int]].withDefaultValue(List.empty)
    edges.foreach { case Array(e1, e2) =>
      destMap(e1) ::= e2
      destMap(e2) ::= e1
    }
    var min = Int.MaxValue
    (0 until n).foreach { start =>
      def dfs(e: Int, seen: Set[Int], step: Int): Unit =
        if(step >= min) {}
        else if (e == start) min = math.min(min, step)
        else destMap(e).filter(!seen.contains(_)).foreach(dfs(_, seen + e, step + 1))

      def initDfs(e: Int) = destMap(e).filter(_ != start).foreach(dfs(_, Set(e), 2))

      destMap(start).foreach(initDfs(_))
    }
    if(min == Int.MaxValue) -1 else  min
  }
}
```