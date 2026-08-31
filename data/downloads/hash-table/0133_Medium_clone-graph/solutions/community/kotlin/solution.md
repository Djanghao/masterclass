# Kotlin DFS

**Author:** kotlinc
**Votes:** 5
**Link:** [https://leetcode.com/problems/clone-graph/solutions/3392025/](https://leetcode.com/problems/clone-graph/solutions/3392025/)

---

```
class Solution {
  fun cloneGraph(node: Node?): Node? {
    node ?: return node
    val nodes = Array<Node?>(101) { null }
    fun dfs(node: Node): Node {
      nodes[node.`val`]?.let { return it }
      val copy = Node(node.`val`)
      nodes[node.`val`] = copy
      for (next in node.neighbors) {
        val nextcopy = dfs(next!!)
        copy.neighbors.add(nextcopy)
      }
      return copy
    }
    return dfs(node)
  }
}
```