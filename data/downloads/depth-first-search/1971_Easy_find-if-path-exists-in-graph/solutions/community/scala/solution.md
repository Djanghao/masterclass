# Scala BFS solution

**Author:** danielOlivo
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-if-path-exists-in-graph/solutions/5055376/](https://leetcode.com/problems/find-if-path-exists-in-graph/solutions/5055376/)

---

# Code
```
object Solution {
    def validPath(n: Int, edges: Array[Array[Int]], source: Int, destination: Int): Boolean = {

        @annotation.tailrec
        def loop(current: Set[Int], map2: Map[Int, Set[Int]]): Boolean = 
            if(current.isEmpty) false 
            else if(current.contains(destination)) true
            else {
                val next = current.filter(map2.contains(_)).flatMap(map2(_))
                val mapUpd = current.foldLeft(map2)(_ - _)
                loop(next, mapUpd)
            }

        val adj = 
            edges.foldLeft(Map.empty[Int, Set[Int]])((m, edge) => (m.get(edge(0)), m.get(edge(1))) match {
                case (None, None) => m.updated(edge(0), Set(edge(1))).updated(edge(1), Set(edge(0)))
                case (Some(g1), None) => m.updated(edge(0), g1 + edge(1)) + (edge(1) -> Set(edge(0)))
                case (None, Some(g2)) => m.updated(edge(1), g2 + edge(0)) + (edge(0) -> Set(edge(1)))
                case (Some(g1), Some(g2)) => m.updated(edge(0), g1 + edge(1)).updated(edge(1), g2 + edge(0))
            })

        loop(Set(source), adj)
    }
}
```