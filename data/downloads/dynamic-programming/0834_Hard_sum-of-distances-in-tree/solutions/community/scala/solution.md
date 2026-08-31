# Scala non-FP: BFS + 2 linear DP passes O(n)/O(n) (1630ms @2.13) + short explanation

**Author:** SerhiyShaman
**Votes:** 1
**Link:** [https://leetcode.com/problems/sum-of-distances-in-tree/solutions/5083642/](https://leetcode.com/problems/sum-of-distances-in-tree/solutions/5083642/)

---


For any tree (0 root in the code):

1) collects BFS edges in reversed order (leaves-to-root)
2) 1st DP pass: 
    - collects number of nodes in the subtree
    - collects paths sum for subtree & finally has sum of all paths for tree root (0)
3) 2nd DP pass: using direct BFS order of edges (root-to-leaves) counts sum of all paths for the child from its parent sum relatively

# Code (simplified)
```
object Solution {
  def sumOfDistancesInTree(n: Int, edges: Array[Array[Int]]): Array[Int] =
    if (n == 1) Array(0) else {
      val graph = (edges ++ edges.map(a => Array(a(1), a(0)))).groupMap(_(0))(_(1))
      val childrenNodes = Array.fill[Int](n)(1) // children count + parent
      val edgesCount = Array.ofDim[Int](n)

      @annotation.tailrec
      def reversedBfsEdges(layer: List[(Int, Int)], reversedEdges: List[(Int, Int)]): List[(Int, Int)] = {
        val nextLayer = layer.flatMap { case (parent, node) =>
          for (n <- graph(node) if n != parent) yield (node, n)
        }
        if (nextLayer.isEmpty) reversedEdges else reversedBfsEdges(nextLayer, nextLayer ++ reversedEdges)
      }

      val leavesToRootEdges = reversedBfsEdges(List(-1 -> 0), Nil) // starting any node, so it works on any tree

      leavesToRootEdges.foreach { case (parent, node) => // leaves to root
        childrenNodes(parent) += childrenNodes(node)
        edgesCount(parent) += edgesCount(node) + childrenNodes(node)
      }

      leavesToRootEdges.reverse.foreach { case (parent, node) => // root to leaves
        edgesCount(node) = edgesCount(parent) - 2 * childrenNodes(node) + n // = edgesCount(parent) - childrenNodes(node) + (n - childrenNodes(node))
      }

      edgesCount
    }
}
```