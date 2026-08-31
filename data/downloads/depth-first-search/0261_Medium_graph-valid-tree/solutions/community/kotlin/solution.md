# Kotlin - DFS - Simple Solution

**Author:** ancyrweb
**Votes:** 1
**Link:** [https://leetcode.com/problems/graph-valid-tree/solutions/4352178/](https://leetcode.com/problems/graph-valid-tree/solutions/4352178/)

---

# Complexity
- Time complexity: `O(e + v)`

- Space complexity: `O(e + v)`

# Code
```
class Solution {
  fun validTree(n: Int, edges: Array<IntArray>): Boolean {
    val visited = HashSet<Int>()
    val adj = Array<MutableList<Int>>(n) { _ -> mutableListOf() }

    for (edge in edges) {
      adj[edge[0]].add(edge[1])
      adj[edge[1]].add(edge[0])
    }

    fun hasCycle(node: Int, parent: Int): Boolean {
      if (visited.contains(node)) {
        return true
      }

      visited.add(node)

      for (neighbor in adj[node]) {
        if (neighbor == parent) {
          continue
        }

        if (hasCycle(neighbor, node)) {
          return true
        }
      }

      return false
    }

    return !hasCycle(0, -1) && visited.size == n
  }
}
```