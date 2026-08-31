# Kotlin DFS

**Author:** kotlinc
**Votes:** 3
**Link:** [https://leetcode.com/problems/count-unreachable-pairs-of-nodes-in-an-undirected-graph/solutions/3337544/](https://leetcode.com/problems/count-unreachable-pairs-of-nodes-in-an-undirected-graph/solutions/3337544/)

---

Thank you for upvoting!

```
class Solution {

  fun countPairs(n: Int, edges: Array<IntArray>): Long {
    val g = List(n) {mutableListOf<Int>()}
    for ((a, b) in edges) {
      g[a].add(b)
      g[b].add(a)
    }

    val visited = BooleanArray(n)
    
    fun dfs(node: Int): Long {
      if (visited[node]) return 0
      visited[node] = true
      var res = 1L
      for (next in g[node])
        res += dfs(next)
      return res
    }
    
    var res = 0L
    for (i in 0 until n) {
      val groupSize = dfs(i)
      val unreachables = n - groupSize
      res += groupSize * unreachables      
    }
    return res / 2L
  }

}
```