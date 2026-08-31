# 100% runtime, memory using dfs

**Author:** aarushimaheshwari
**Votes:** 0
**Link:** [https://leetcode.com/problems/graph-valid-tree/solutions/5790924/](https://leetcode.com/problems/graph-valid-tree/solutions/5790924/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
o(m+n)
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
o(m+n)
# Code
```scala []
object Solution {
  def validTree(n: Int, edges: Array[Array[Int]]): Boolean = {
    val graph = buildGraph(edges, n)
    val visited = Array.ofDim[Boolean](n)
    dfs(0, graph, visited, -1) && visited.forall(_ == true)
  }

  private def dfs(node: Int, graph: Map[Int, Array[Int]], visited: Array[Boolean], parent: Int): Boolean = {
    if (visited(node))
      false
    else {
      visited(node) = true
      val incomingEdges = graph.getOrElse(node, Array.empty[Int])
      incomingEdges.filterNot(_ == parent).forall { edge =>
        dfs(edge, graph, visited, node)
      }
    }
  }

  private def buildGraph(edges: Array[Array[Int]], n: Int) = {
    edges.flatMap { edge =>
      Seq((edge(0), edge(1)), (edge(1), edge(0)))
    }.groupBy(_._1).map(x => (x._1, x._2.map(_._2)))
  }


}
```