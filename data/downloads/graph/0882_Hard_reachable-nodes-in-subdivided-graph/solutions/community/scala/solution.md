# Scala solution

**Author:** tumakha
**Votes:** 0
**Link:** [https://leetcode.com/problems/reachable-nodes-in-subdivided-graph/solutions/1459859/](https://leetcode.com/problems/reachable-nodes-in-subdivided-graph/solutions/1459859/)

---

```scala
object Solution {

  import collection.mutable.{HashMap => MutableMap}

  case class Node(node: Int, dist: Int)

  def reachableNodes(edges: Array[Array[Int]], maxMoves: Int, n: Int): Int = {
    val graph = MutableMap[Int, MutableMap[Int, Int]]()
    for (Array(u, v, w) <- edges) {
      graph.getOrElseUpdate(u, MutableMap[Int, Int]()) += v -> w
      graph.getOrElseUpdate(v, MutableMap[Int, Int]()) += u -> w
    }
    val pq = collection.mutable.PriorityQueue[Node]()(Ordering.by(_.dist)).reverse
    pq.enqueue(Node(0, 0))
    val distMap = MutableMap[Int, Int](0 -> 0)
    val used = MutableMap[Int, Int]()
    var res = 0
    while (pq.nonEmpty) {
      val Node(node, dist) = pq.dequeue()
      if (dist <= distMap.getOrElse(node, 0)) {
        res += 1
        if (graph.contains(node)) {
          for (nei <- graph(node).keySet) {
            val weight = graph(node)(nei)
            val v = weight min maxMoves - dist
            used += n * node + nei -> v
            val d2 = dist + weight + 1
            if (d2 < distMap.getOrElse(nei, maxMoves + 1)) {
              pq.enqueue(Node(nei, d2))
              distMap += nei -> d2
            }
          }
        }
      }
    }
    for (edge <- edges) {
      res += edge(2) min used.getOrElse(edge(0) * n + edge(1), 0) + used.getOrElse(edge(1) * n + edge(0), 0)
    }
    res
  }

}
```