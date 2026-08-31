# Convert Tree to Graph, and then perform BFS.

**Author:** quanyincode
**Votes:** 0
**Link:** [https://leetcode.com/problems/all-nodes-distance-k-in-binary-tree/solutions/4679189/](https://leetcode.com/problems/all-nodes-distance-k-in-binary-tree/solutions/4679189/)

---

# Intuition
Build a graph from the tree, and perform BFS on the graph, starting from the target node.

# Approach
- Build a graph recursively
- Save the target node in a variable. This is our starting node of the BFS
- Increment distance at each BFS level. When the distance == k, return nodes of the current level.

# Complexity
- Time complexity:
O(N)

- Space complexity:
O(N)

# Code
```
object Solution {
  import collection.mutable

  /** Tree node with parent (aka Graph node) */
  case class TNP(value: Int, parent: TNP = null, var left: TNP = null, var right: TNP = null, var visited: Boolean = false)

  def distanceK(root: TreeNode, target: TreeNode, k: Int): List[Int] = {
    var start: TNP = null // the target node

    // recursively build the graph from the tree
    def buildGraph(cur: TreeNode, parent: TNP): TNP = {
      if (cur != null) {
        val node = TNP(value = cur.value, parent = parent)
        node.left = buildGraph(cur.left, node)
        node.right = buildGraph(cur.right, node)
        if (cur == target) start = node
        node
      }
      else null
    }

    buildGraph(root, null)

    // BFS
    val queue = mutable.Queue(start)
    var distance = 0
    while (queue.nonEmpty) {
      val nodes = queue.toList
      queue.clear
      if (distance == k) return nodes.map(_.value)
      for (node <- nodes if !node.visited) {
        node.visited = true
        List(node.parent, node.left, node.right).foreach {
          next => if (next != null && !next.visited) queue.addOne(next)
        }
      }
      distance += 1
    }

    List.empty
  }
}
```