# [scala] - dfs

**Author:** nikiforo
**Votes:** 0
**Link:** [https://leetcode.com/problems/longest-path-with-different-adjacent-characters/solutions/3276827/](https://leetcode.com/problems/longest-path-with-different-adjacent-characters/solutions/3276827/)

---

# Code
```
object Solution {
  
  def longestPath(parent: Array[Int], s: String): Int = {
    val childMap = scala.collection.mutable.Map.empty[Int, List[Int]].withDefaultValue(List.empty)
    parent.indices.foreach(i => childMap(parent(i)) ::= i)
    def go(nodeIndex: Int): (Int, Int) = {
      val nodeChar = s(nodeIndex)
      childMap.get(nodeIndex) match {
        case None => (1, 1)
        case Some(childIndices) =>
          val (closed, open) = childIndices.map(go).unzip
          val unitable = open.zip(childIndices).filter(pair => s(pair._2) != nodeChar).map(_._1).sorted.reverse
          (math.max(closed.max, unitable.take(2).sum + 1), unitable.take(1).sum + 1)
      }
    }
    go(0)._1
  }
}
```