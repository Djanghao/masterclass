# Scala 🔸DFS 🔸Functional Style 🔸 Beat 100% 🔸 Explained

**Author:** Andrea_Detommaso
**Votes:** 2
**Link:** [https://leetcode.com/problems/reachable-nodes-with-restrictions/solutions/3140721/](https://leetcode.com/problems/reachable-nodes-with-restrictions/solutions/3140721/)

---

# Approach
<!-- Describe your first thoughts on how to solve this problem. -->
The algorithm uses a HashMap "connections" to store the connections between nodes, with node labels as keys and a list of neighboring nodes as values. A HashSet "restrictedSet" is used to store the restricted nodes for efficient lookups.

Initially, the connections are constructed by iterating through the edges array and adding the edges to the connections HashMap, excluding the restricted nodes.

A DFS function "dfs(node: Int, seen: Set[Int])" is then used to traverse the tree and visit all reachable nodes from node 0. The function takes a node and a set "seen" of nodes that have been visited as inputs and returns the number of nodes reachable from the node. The function collects all neighbors of the current node that have not been seen and not restricted, adds them to the set "seen", and recursively calls itself on the neighbors. The sum of all nodes reached from the neighbors is then returned.

The algorithm returns the number of reachable nodes by calling the DFS function on node 0 and adding 1 to account for node 0 itself. If node 0 is not present in the connections HashMap, 1 is returned as the only node that can be reached.

# Complexity
- Time complexity: O(N + M), where *N* is the number of nodes in the graph and *M* is the number of edges in the graph
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(N + M), where *N* is the number of nodes in the graph and *M* is the number of edges in the graph
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
import scala.collection.immutable.HashSet
import scala.collection.mutable.HashMap

object Solution {
  def reachableNodes(n: Int, edges: Array[Array[Int]], restricted: Array[Int]): Int = {

    val connections = new HashMap[Int, List[Int]]()
    val restrictedSet = HashSet(restricted: _*)

    edges.foreach { edge =>
      val s = edge(0)
      val d = edge(1)
      if (!restrictedSet.contains(d) && !restrictedSet.contains(s)) {

        if (connections.contains(s)) connections.update(s, d :: connections(s))
        else connections(s) = List(d)

        if (connections.contains(d)) connections.update(d, s :: connections(d))
        else connections(d) = List(s)
      }
    }

    def dfs(node: Int, seen: Set[Int]): Int =
      connections(node).collect {
        case neighbor if !seen.contains(neighbor) && connections.contains(neighbor) =>
          1 + dfs(neighbor, seen + node)
      }.sum

    if(connections.contains(0)) 1 + dfs(0, HashSet(0)) else 1

  }
}

```