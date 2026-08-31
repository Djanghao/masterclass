# Scala Very Functional BFS

**Author:** HeavenWatcher
**Votes:** 1
**Link:** [https://leetcode.com/problems/shortest-path-with-alternating-colors/solutions/2952882/](https://leetcode.com/problems/shortest-path-with-alternating-colors/solutions/2952882/)

---

```Scala
object Solution {
    def shortestAlternatingPaths(n: Int, redEdges: Array[Array[Int]], blueEdges: Array[Array[Int]]): Array[Int] = {
        def toNexts(edges: Array[Array[Int]]) =
            edges.groupBy(_(0)).mapValues(_.map(_(1)).toSet).toMap.withDefaultValue(Set.empty)
        
        val (redNexts, blueNexts) = (toNexts(redEdges), toNexts(blueEdges))
         
		// return a map, map((5, 'r')) means the closest alternative path from node 0 to 5, ending in a red edge
        def go(front: Map[(Int, Char), Int], visited: Map[(Int, Char), Int]): Map[(Int, Char), Int] = {
            if (front.isEmpty) visited else {
                val nexts = front.flatMap {
                    case ((node, 'b'), dis) =>
                        redNexts(node).filter(x => !visited.keySet.contains((x, 'r'))).map((_, 'r') -> (dis + 1))
                    case ((node, 'r'), dis) =>
                        blueNexts(node).filter(x => !visited.keySet.contains((x, 'b'))).map((_, 'b') -> (dis + 1))
                }
                go(nexts, visited ++ nexts)
            }
        }
        
        val init = Map((0, 'r') -> 0, (0, 'b') -> 0)
        val res = go(init, init)

        Array.tabulate(n)(i => (res.getOrElse((i, 'r'), -1), res.getOrElse((i, 'b'), -1)) match {
            case (red, -1) => red
            case (-1, blue) => blue
            case (red, blue) => red min blue
        })
    }
}
```