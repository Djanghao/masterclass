# Scala Pure Functional Disjoint Set + BFS

**Author:** HeavenWatcher
**Votes:** 0
**Link:** [https://leetcode.com/problems/divide-nodes-into-the-maximum-number-of-groups/solutions/2878269/](https://leetcode.com/problems/divide-nodes-into-the-maximum-number-of-groups/solutions/2878269/)

---

```Scala
object Solution {
    def magnificentSets(n: Int, edges: Array[Array[Int]]): Int = {        
        def find(p: Map[Int, Int])(x: Int): Int = if (p(x) == x) x else find(p)(p(x))
        
        def union(p: Map[Int, Int], a: Array[Int]) = {
            val Array(rx, ry) = a.map(find(p))
            p + (rx -> ry)
        }
        
        val parents = edges.foldLeft((1 to n).zip(1 to n).toMap)(union)
        val groups = (1 to n).groupBy(find(parents)).values
        
        val adj = edges.foldLeft(Map[Int, Set[Int]]().withDefaultValue(Set[Int]())) {
            case (m, Array(x, y)) => m + (x -> (m(x) + y)) + (y -> (m(y) + x))
        }
        
        def bfs(layer: Set[Int], visited: Set[Int], groups: Int): Int = {
            if (layer.isEmpty) groups else {
                val nexts = layer.flatMap(adj(_).filter(!visited.contains(_))).toSet
                if ((nexts & layer).size > 0) -1
                else bfs(nexts, visited ++ layer, groups + 1)
            }
        }
                        
        val results = groups.map(_.map(y => bfs(Set(y), Set[Int](), 0)).max).toSeq
        if (results.contains(-1)) -1 else results.sum
    }
}
```