# Kotlin DFS

**Author:** kotlinc
**Votes:** 3
**Link:** [https://leetcode.com/problems/reorder-routes-to-make-all-paths-lead-to-the-city-zero/solutions/3334071/](https://leetcode.com/problems/reorder-routes-to-make-all-paths-lead-to-the-city-zero/solutions/3334071/)

---

```
class Solution {
  fun minReorder(n: Int, connections: Array<IntArray>): Int {
    val g = Array<MutableList<Pair<Int, Boolean>>>(n) { mutableListOf<Pair<Int, Boolean>>() }
    for ((a, b) in connections) {
      g[a].add(Pair(b, true)) // this edge is provided
      g[b].add(Pair(a, false)) // this edge is imagined
    }

    fun dfs(parent: Int, node: Int): Int {
      var res = 0
      for ((next, provided) in g[node]) {
        if (next == parent) continue
        if (provided) // we need to reverse it
          res++
        res += dfs(node, next)
      }
      return res
    }
    return dfs(-1, 0)
  }
}
```